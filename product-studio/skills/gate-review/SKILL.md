---
name: gate-review
description: Avalia se um portão (gate) entre fases do método product-studio está pronto, aplicando o checklist da fase e o veredito do Lead responsável, e registra a aprovação do usuário. Use quando o usuário disser "podemos fechar a fase?", "revisar o portão", "avaliar o G1", "aprovar a fase" ou quando uma skill de fase chegar ao encerramento.
---

# Revisão de portão

## Passos

1. **Identifique o portão.** Leia `docs/STATUS.md` para saber a fase atual. Se o usuário citou outro portão, use o citado.
2. **Aplique o checklist.** Abra `references/gates.md` e verifique cada item contra os artefatos reais. Marque cada um como ✅ cumprido, ⚠️ parcial ou ❌ ausente, citando o arquivo ou ID que comprova.
3. **Peça o veredito do Lead.** Acione o agente responsável (tabela abaixo) com o checklist preenchido. Ele devolve `PRONTO`, `PRONTO COM RESSALVAS` ou `NÃO PRONTO`, os problemas por severidade e as decisões necessárias.
4. **Apresente ao usuário** em formato curto:
   - O veredito, numa linha.
   - Os itens pendentes (❌ e ⚠️), no máximo 7.
   - As decisões necessárias, com a recomendação do Lead.
5. **Resolva ou aceite.** O usuário pode resolver as pendências (volte à skill da fase) ou aprovar com ressalvas registradas.
6. **Registre a aprovação.** Só com um "aprovo" explícito do usuário:
   - Marque `- [x] Gn` no `STATUS.md`, com data.
   - Registre as ressalvas aceitas no "Registro de decisões".
   - Atualize a "Fase atual".
7. **Sugira a retro.** Ofereça em uma linha rodar a skill `retro` antes de começar a próxima fase.

## Lead responsável por portão

| Portão | Lead | Apoio |
|---|---|---|
| G0 | product-lead | — |
| G1 | product-lead | ux-lead (protótipo e jornadas) |
| G2 | product-lead | — |
| G3 | engineering-lead | product-lead (linguagem do usuário) |
| G4 | engineering-lead | ux-lead (design system), product-lead (Definition of Done) |
| Spec | engineering-lead (viabilidade) | product-lead (valor) |
| Aceite de feature | product-lead | ux-lead |
| G7 | product-lead | ux-lead (identidade visual) |

## Regras

- Nunca marque um portão como aprovado sem aprovação explícita do usuário, mesmo com veredito `PRONTO`.
- Um veredito `NÃO PRONTO` não impede o usuário de aprovar, mas a decisão e o risco precisam ficar registrados.
- **Portão retroativo** (produto adotado pela skill `adopt`): o checklist é aplicado aos artefatos reconstruídos, e cada item cita a fonte no projeto. G0, G3 e G4 podem ser retroativos; G1 e G2 nunca, porque exigem evidência primária. Marque como `- [x] Gn … (retroativo AAAA-MM-DD)`.
