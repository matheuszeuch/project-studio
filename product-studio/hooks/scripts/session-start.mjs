// SessionStart: injeta a fase atual e os portões no contexto da sessão.
import { readInput, projectDir, loadStatus, approvedSpecs } from "./lib.mjs";

const input = readInput();
const root = projectDir(input);
const status = loadStatus(root);

if (!status) process.exit(0); // não é um projeto product-studio

const gateLines = Object.entries(status.gates)
  .map(([id, g]) => `${g.approved ? (g.retroactive ? "🔁" : "✅") : "⬜"} ${id} ${g.label}`)
  .join("\n");
const hasRetroactive = Object.values(status.gates).some((g) => g.retroactive);
const specs = approvedSpecs(root);

const lines = [
  `[product-studio] Projeto${status.product ? ` "${status.product}"` : ""} — fase atual: ${status.phase}.`,
  "Portões:",
  gateLines || "(nenhum portão encontrado em docs/STATUS.md)",
  ...(hasRetroactive
    ? ["🔁 = portão retroativo: reconstruído de um projeto existente por engenharia reversa, não descoberto pelo método. Trate o que não tem evidência como hipótese (HYP-)."]
    : []),
  specs.length ? `Specs aprovadas: ${specs.join(", ")}` : "Nenhuma spec aprovada ainda.",
  "Siga o método da skill product-method. Antes de agir, leia o arquivo de status e o _state.md da fase atual.",
];

process.stdout.write(lines.join("\n") + "\n");
