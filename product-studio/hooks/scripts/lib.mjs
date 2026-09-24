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

export function loadStatus(root) {
  const text = readText(join(root, "docs", "STATUS.md"));
  if (text === null) return null;
  const gates = {};
  for (const m of text.matchAll(/^\s*-\s*\[( |x|X)\]\s*(G\d+)\b(.*)$/gm)) {
    gates[m[2]] = { approved: m[1].toLowerCase() === "x", label: m[3].replace(/^\s*[—-]?\s*/, "").trim() };
  }
  const phaseMatch = text.match(/\*\*Fase atual:\*\*\s*(.+)/i) || text.match(/Fase atual:\s*(.+)/i);
  const phase = phaseMatch ? phaseMatch[1].trim() : "desconhecida";
  const phaseNumber = parseInt((phase.match(/^\d+/) || ["-1"])[0], 10);
  const productMatch = text.match(/^#\s*Status:\s*(.+)$/m);
  return { text, gates, phase, phaseNumber, product: productMatch ? productMatch[1].trim() : null };
}

export function approvedSpecs(root) {
  const dir = join(root, "docs", "05-specs");
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const spec = readText(join(dir, entry.name, "spec.md"));
    if (spec && /^\s*\*{0,2}Status:?\*{0,2}:?\s*Aprovada/im.test(spec)) out.push(entry.name);
  }
  return out;
}

export function loadConfig(root) {
  const defaults = { productionPaths: ["src/", "supabase/", "tests/", "e2e/"] };
  const text = readText(join(root, ".product-studio.json"));
  if (!text) return defaults;
  try {
    return { ...defaults, ...JSON.parse(text) };
  } catch {
    return defaults;
  }
}

export function relPath(root, filePath) {
  if (!filePath) return null;
  const rel = isAbsolute(filePath) ? relative(root, filePath) : filePath;
  return rel.split("\\").join("/");
}
