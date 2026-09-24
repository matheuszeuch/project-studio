// PreToolUse: bloqueia escrita em código de produção sem os portões necessários.
// Regras:
//  - Fora de um projeto product-studio (sem docs/STATUS.md): não faz nada.
//  - Antes do G4: só permite código de produção durante a fase 4 (esqueleto do repositório).
//  - Depois do G4: exige ao menos uma spec com "**Status:** Aprovada".
// Desligar temporariamente: PRODUCT_STUDIO_GUARD=off
import { readInput, projectDir, loadStatus, approvedSpecs, loadConfig, relPath } from "./lib.mjs";

if ((process.env.PRODUCT_STUDIO_GUARD || "").toLowerCase() === "off") process.exit(0);

const input = readInput();
const root = projectDir(input);
const status = loadStatus(root);
if (!status) process.exit(0);

const toolInput = input.tool_input || {};
const file = relPath(root, toolInput.file_path || toolInput.notebook_path);
if (!file || file.startsWith("..")) process.exit(0);

const { productionPaths } = loadConfig(root);
const isProduction = productionPaths.some((p) => file === p.replace(/\/$/, "") || file.startsWith(p));
if (!isProduction) process.exit(0);

const g4 = status.gates.G4?.approved === true;

function block(reason) {
  process.stderr.write(
    `[product-studio] Escrita bloqueada em ${file}: ${reason}\n` +
      "Siga o método: conclua o portão pendente (skill gate-review) ou a spec (skill write-spec). " +
      "Se o usuário autorizar explicitamente uma exceção, ele pode definir PRODUCT_STUDIO_GUARD=off.\n"
  );
  process.exit(2);
}

if (!g4) {
  if (status.phaseNumber === 4) process.exit(0); // montagem do esqueleto na fase de Padrões
  block(`o portão G4 (Padrões) ainda não foi aprovado e a fase atual é "${status.phase}".`);
}

if (approvedSpecs(root).length === 0) {
  block("não há nenhuma spec aprovada em docs/05-specs/ (linha \"**Status:** Aprovada\").");
}

process.exit(0);
