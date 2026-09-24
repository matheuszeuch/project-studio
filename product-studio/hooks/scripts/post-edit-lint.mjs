// PostToolUse: roda ESLint no arquivo editado, se o projeto tiver ESLint instalado.
// Falhas voltam para o Claude corrigir (exit 2). Sem ESLint, não faz nada.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { readInput, projectDir, loadStatus, relPath } from "./lib.mjs";

const input = readInput();
const root = projectDir(input);
if (!loadStatus(root)) process.exit(0);

const toolInput = input.tool_input || {};
const file = relPath(root, toolInput.file_path);
if (!file || file.startsWith("..") || !/\.(m?[jt]sx?)$/.test(file)) process.exit(0);
if (file.startsWith("prototype/")) process.exit(0);

const bin = join(root, "node_modules", ".bin", process.platform === "win32" ? "eslint.cmd" : "eslint");
if (!existsSync(bin)) process.exit(0);

const run = spawnSync(bin, ["--no-warn-ignored", "--max-warnings=0", file], {
  cwd: root,
  encoding: "utf8",
  timeout: 50_000,
});

if (run.status === 0 || run.status === null) process.exit(0);

process.stderr.write(
  `[product-studio] ESLint encontrou problemas em ${file}. Corrija antes de seguir:\n` +
    (run.stdout || "") +
    (run.stderr || "")
);
process.exit(2);
