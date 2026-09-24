// SessionStart: injeta a fase atual e os portões no contexto da sessão.
import { readInput, projectDir, loadStatus, approvedSpecs } from "./lib.mjs";

const input = readInput();
const root = projectDir(input);
const status = loadStatus(root);

if (!status) process.exit(0); // não é um projeto product-studio

const gateLines = Object.entries(status.gates)
  .map(([id, g]) => `${g.approved ? "✅" : "⬜"} ${id} ${g.label}`)
  .join("\n");
const specs = approvedSpecs(root);

const lines = [
  `[product-studio] Projeto${status.product ? ` "${status.product}"` : ""} — fase atual: ${status.phase}.`,
  "Portões:",
  gateLines || "(nenhum portão encontrado em docs/STATUS.md)",
  specs.length ? `Specs aprovadas: ${specs.join(", ")}` : "Nenhuma spec aprovada ainda.",
  "Siga o método da skill product-method. Antes de agir, leia docs/STATUS.md e o _state.md da fase atual.",
];

process.stdout.write(lines.join("\n") + "\n");
