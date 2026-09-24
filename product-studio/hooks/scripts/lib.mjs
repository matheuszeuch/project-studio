// Utilitários compartilhados pelos hooks do product-studio.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, relative, isAbsolute } from "node:path";

export function readInput() {
  try {
    const raw = readFileSync(0, "utf8");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function projectDir(input) {
  return process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
}

export function readText(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

// Configuração do projeto em .product-studio.json. Todos os campos são opcionais.
//  - statusFile: onde fica o estado central (padrão docs/STATUS.md)
//  - specsDir: onde ficam as specs (padrão docs/05-specs). Aceita pasta por spec
//    (<nnn>/spec.md) e arquivo único por spec (<nnn>-nome.md)
//  - specApprovedStatus: textos de status que contam como spec aprovada
//  - productionPaths: pastas protegidas pelo hook de guarda
//  - unguardedPaths: exceções dentro das pastas protegidas
//  - docLimits: teto de tamanho por documento (caracteres no arquivo e por linha).
//    "{status}" é substituído pelo valor de statusFile
//  - postEditCommands: verificações rodadas após cada edição. Cada item tem
//    "paths" (prefixos), "extensions" e "command" ({file} = arquivo editado).
//    Sem este campo, roda o ESLint do projeto em arquivos JS/TS, se instalado
export const DEFAULT_CONFIG = {
  statusFile: "docs/STATUS.md",
  specsDir: "docs/05-specs",
  specApprovedStatus: ["Aprovada"],
  productionPaths: ["src/", "supabase/", "tests/", "e2e/"],
  unguardedPaths: [],
  docLimits: {
    "{status}": { maxChars: 15000, maxLineChars: 600 },
    "CLAUDE.md": { maxChars: 10000, maxLineChars: 600 },
  },
  postEditCommands: null,
};

export function loadConfig(root) {
  const text = readText(join(root, ".product-studio.json"));
  if (!text) return { ...DEFAULT_CONFIG };
  try {
    return { ...DEFAULT_CONFIG, ...JSON.parse(text) };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

// Portão retroativo: "- [x] G3 Domínio — modelo aprovado (retroativo 2026-09-24)".
// Conta como aprovado para os hooks, mas registra que foi reconstruído a partir
// de um projeto existente, e não descoberto pelo método.
export function loadStatus(root) {
  const { statusFile } = loadConfig(root);
  const text = readText(join(root, statusFile));
  if (text === null) return null;
  const gates = {};
  for (const m of text.matchAll(/^\s*-\s*\[( |x|X)\]\s*(G\d+)\b(.*)$/gm)) {
    const label = m[3].replace(/^\s*[—-]?\s*/, "").trim();
    gates[m[2]] = {
      approved: m[1].toLowerCase() === "x",
      retroactive: /\bretroativo\b/i.test(label),
      label,
    };
  }
  const phaseMatch = text.match(/\*\*Fase atual:\*\*\s*(.+)/i) || text.match(/Fase atual:\s*(.+)/i);
  const phase = phaseMatch ? phaseMatch[1].trim() : "desconhecida";
  const phaseNumber = parseInt((phase.match(/^\d+/) || ["-1"])[0], 10);
  const productMatch = text.match(/^#\s*Status:\s*(.+)$/m);
  return { text, gates, phase, phaseNumber, product: productMatch ? productMatch[1].trim() : null };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function isApprovedSpec(text, statuses) {
  if (!text) return false;
  const alternatives = statuses.map(escapeRegex).join("|");
  return new RegExp(`^\\s*\\*{0,2}Status:?\\*{0,2}:?\\s*(?:${alternatives})(?![\\p{L}\\p{N}])`, "imu").test(text);
}

export function approvedSpecs(root) {
  const { specsDir, specApprovedStatus } = loadConfig(root);
  const dir = join(root, specsDir);
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = entry.isDirectory()
      ? join(dir, entry.name, "spec.md")
      : entry.name.endsWith(".md")
        ? join(dir, entry.name)
        : null;
    if (path && isApprovedSpec(readText(path), specApprovedStatus)) out.push(entry.name.replace(/\.md$/, ""));
  }
  return out;
}

export function isUnder(file, paths) {
  return paths.some((p) => file === p.replace(/\/$/, "") || file.startsWith(p.endsWith("/") ? p : `${p}/`));
}

export function relPath(root, filePath) {
  if (!filePath) return null;
  const rel = isAbsolute(filePath) ? relative(root, filePath) : filePath;
  return rel.split("\\").join("/");
}
