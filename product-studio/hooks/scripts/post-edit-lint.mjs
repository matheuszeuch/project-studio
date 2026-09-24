// PostToolUse: aplica as convenções do projeto logo após cada edição.
//  1. Teto de documentos (docLimits): arquivo ou linha acima do limite volta para o Claude.
//  2. Verificações configuradas (postEditCommands). Sem configuração, roda o ESLint
//     do projeto em arquivos JS/TS, se estiver instalado.
// Falhas voltam para o Claude corrigir (exit 2).
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { readInput, projectDir, loadStatus, loadConfig, readText, relPath, isUnder } from "./lib.mjs";

const input = readInput();
const root = projectDir(input);
if (!loadStatus(root)) process.exit(0);

const toolInput = input.tool_input || {};
const file = relPath(root, toolInput.file_path);
if (!file || file.startsWith("..")) process.exit(0);

const config = loadConfig(root);
const problems = [];

// 1. Teto de documentos
const limits = Object.fromEntries(
  Object.entries(config.docLimits || {}).map(([path, limit]) => [path.replace("{status}", config.statusFile), limit])
);
const limit = limits[file];
if (limit) {
  const text = readText(join(root, file)) || "";
  if (limit.maxChars && text.length > limit.maxChars) {
    problems.push(
      `${file} tem ${text.length} caracteres; o teto é ${limit.maxChars}. ` +
        "Mova o que é histórico para fora (registro de decisões antigo, entregas concluídas) em vez de resumir o atual."
    );
  }
  if (limit.maxLineChars) {
    text.split("\n").forEach((line, i) => {
      if (line.length > limit.maxLineChars) {
        problems.push(`${file}:${i + 1} tem ${line.length} caracteres; o teto por linha é ${limit.maxLineChars}.`);
      }
    });
  }
}

// 2. Verificações após a edição
function run(command) {
  const result = spawnSync(command.replaceAll("{file}", JSON.stringify(file)), {
    cwd: root,
    encoding: "utf8",
    shell: true,
    timeout: 50_000,
  });
  if (result.status !== 0 && result.status !== null) {
    problems.push(`\`${command}\` falhou:\n${result.stdout || ""}${result.stderr || ""}`);
  }
}

if (Array.isArray(config.postEditCommands)) {
  for (const check of config.postEditCommands) {
    const inPath = !check.paths || isUnder(file, check.paths);
    const hasExtension = !check.extensions || check.extensions.some((ext) => file.endsWith(ext));
    if (check.command && inPath && hasExtension) run(check.command);
  }
} else if (/\.(m?[jt]sx?)$/.test(file) && !file.startsWith("prototype/")) {
  const bin = join(root, "node_modules", ".bin", process.platform === "win32" ? "eslint.cmd" : "eslint");
  if (existsSync(bin)) run(`"${bin}" --no-warn-ignored --max-warnings=0 {file}`);
}

if (problems.length === 0) process.exit(0);

process.stderr.write(`[product-studio] Convenções do projeto violadas. Corrija antes de seguir:\n- ${problems.join("\n- ")}\n`);
process.exit(2);
