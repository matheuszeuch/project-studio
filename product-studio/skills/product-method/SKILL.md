---
name: product-method
description: Orquestra o método product-studio de criação de produtos (Kickoff → Design Thinking → Working Backwards → DDD → Padrões → Spec-Driven → AI-Driven Development → Brochures), inclusive a adoção de um produto que já existe. Use quando o usuário disser "começar um app novo", "novo produto", "adotar o método num projeto existente", "em que fase estamos", "qual o próximo passo", "status do projeto" ou "preparar o repositório".
---

# Método product-studio

Aplique este método a todo produto novo. Cada fase termina num **portão** com aprovação explícita do usuário. Os artefatos de uma fase são a entrada da próxima.

## Fases, responsáveis e skills

| # | Fase | Skill | Lead | Portão |
|---|---|---|---|---|
| 0 | Kickoff | `kickoff` | product-lead | G0: charter aprovado |
| 1 | Design Thinking | `design-thinking` | product-lead + ux-lead | G1: problema e solução validados |
| 2 | Working Backwards | `working-backwards` | product-lead | G2: narrativa aprovada |
| 3 | Domain-Driven Design | `event-storming` | engineering-lead | G3: modelo de domínio aprovado |
| 4 | Padrões | `define-standards` | os três Leads | G4: padrões congelados (v1) |
| 5 | Spec-Driven Development | `write-spec` | product-lead → engineering-lead | Spec aprovada, por feature |
| 6 | AI-Driven Development | `build-feature` | engineering-lead | Feature aceita pelo usuário |
| 7 | Brochures | `brochure` | product-lead | G7: materiais de lançamento aprovados |

As fases 5 e 6 são um ciclo, uma feature por vez. A fase 7 pode começar assim que houver features suficientes para lançar.

As skills transversais são `gate-review`, para fechar qualquer portão, `retro`, para melhorar o próprio método ao fim de cada fase, e `adopt`, para trazer ao método um produto que já existe.

## Onde ficam os artefatos

- **Com repositório (Claude Code):** em `docs/` na raiz.
- **Sem repositório (app Claude / Cowork):** no Projeto do claude.ai anexado, com os mesmos caminhos, via `project_write`. Sem Projeto, entregue os arquivos ao usuário.

Os caminhos são idênticos nos dois lugares. Migrar é copiar a pasta. O mapa completo de caminhos e IDs está em `references/artifact-map.md`.

## Estado central: `docs/STATUS.md`

É a fonte de verdade do andamento. O caminho pode mudar pelo campo `statusFile` do `.product-studio.json`; neste documento, "`STATUS.md`" se refere a esse arquivo. Toda skill de fase lê o arquivo ao começar e o atualiza ao terminar. Modelo em `references/status-template.md`. Os hooks do Claude Code dependem do formato dos checkboxes dos portões (`- [x] G4`), então preserve esse formato.

## Ações

**"Começar um app novo"**
1. Verifique se já existe `docs/STATUS.md`. Se existir, trate como retomada.
2. Crie o `STATUS.md` a partir do modelo, prepare o repositório (abaixo), incluindo a página "em breve", e inicie a skill `kickoff`.

**"Adotar o método num projeto existente"**
1. Siga a skill `adopt`. Ela cria o `.product-studio.json` antes do `STATUS.md`, para os hooks não bloquearem o código existente.
2. Não use o passo 4 de "Preparar o repositório" (arquivar a `main`): num produto adotado, o código continua.

**"Em que fase estamos?" / "Qual o próximo passo?"**
1. Leia o `STATUS.md` e o `_state.md` da fase atual.
2. Responda em até 5 linhas: fase atual, critérios pendentes do portão, próximo passo concreto e a skill a usar.

**"Preparar o repositório"** (Claude Code)
1. Crie a estrutura de pastas de `references/artifact-map.md`.
2. Crie o `CLAUDE.md` na raiz a partir de `references/claude-md-template.md`.
3. Traga os artefatos que já existem para `docs/`, com os mesmos caminhos: do Projeto do claude.ai, de um zip ou de uma pasta entregue pelo usuário (`STATUS.md` → `docs/STATUS.md`, `charter.md` → `docs/00-charter/charter.md`, e assim por diante).
4. Se o produto reaproveita um repositório com código antigo: arquive a `main` antiga numa branch `legacy/<nome>` e numa tag, confirme que ambas existem no remoto, e só então substitua a `main` com `git push --force-with-lease=main:<sha antigo>`, com confirmação do usuário. Registre a decisão no `STATUS.md`.
5. Publique a página "em breve" e passe ao usuário as instruções de domínio e DNS, seguindo `references/coming-soon.md`. Faça isso logo no começo, mesmo antes do G0: garante o domínio no ar e o endereço do protótipo da fase 1. Confira os endereços depois que o usuário configurar.
6. Crie `.product-studio.json` com as pastas de código de produção (usadas pelo hook de guarda). Padrão: `{"productionPaths": ["src/", "supabase/", "tests/", "e2e/"]}`. Os outros campos (`statusFile`, `specsDir`, `specApprovedStatus`, `unguardedPaths`) estão descritos em `references/artifact-map.md`.

## Regras globais

1. **Conversa na sessão principal.** Skills conversam com o usuário. Agentes não conseguem perguntar: devolvem uma seção `## Decisões necessárias`, e a sessão principal pergunta.
2. **Portões são explícitos.** Nenhuma fase avança sem o usuário dizer que aprova. Registre data e decisão no `STATUS.md`.
3. **Rastreabilidade.** Use IDs estáveis e referencie-os entre artefatos. Todo requisito de spec cita o insight ou HMW que o justifica.
4. **Fato ≠ hipótese.** Todo artefato de descoberta marca a diferença.
5. **Glossário é lei.** A partir da fase 3, todos os agentes, inclusive o marketing, usam os termos de `docs/03-domain/glossary.md`.
6. **Protótipo é descartável.** Nada de `prototype/` vai para produção.
7. **Sem código de produção antes do G4.** O hook de guarda aplica isso no Claude Code.
8. **Portão retroativo é exceção de adoção.** Só a skill `adopt` marca portões como `(retroativo)`, e nunca o G1 ou o G2.
9. **Documento tem teto.** `STATUS.md` e `CLAUDE.md` têm teto de tamanho (`docLimits`), aplicado pelo hook de edição. Histórico sai do arquivo; o `git log` guarda o resto. Documento que passa de ~300 linhas é dividido em pasta.
10. **Voltar é permitido.** Se uma fase invalidar a anterior, volte, registre o motivo no `STATUS.md` e reabra o portão.

## Agentes disponíveis

| Lead | Especialistas |
|---|---|
| product-lead | market-researcher, marketing-writer |
| ux-lead | prototyper |
| engineering-lead | architect, implementer, test-engineer, reviewer |

Quando o ambiente não oferecer agentes (por exemplo, algumas sessões do app), siga você mesmo as instruções do agente correspondente.
