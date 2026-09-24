# product-studio

Método de criação de produtos digitais com IA, do problema ao lançamento, com portões de aprovação entre as fases.

## Fases

| # | Fase | Skill | Portão |
|---|---|---|---|
| 0 | Kickoff | `kickoff` | G0 charter |
| 1 | Design Thinking | `design-thinking` | G1 problema e solução validados |
| 2 | Working Backwards | `working-backwards` | G2 narrativa |
| 3 | Domain-Driven Design | `event-storming` | G3 modelo de domínio |
| 4 | Padrões | `define-standards` | G4 padrões congelados |
| 5 | Spec-Driven Development | `write-spec` | Spec aprovada (por feature) |
| 6 | AI-Driven Development | `build-feature` | Feature aceita |
| 7 | Brochures | `brochure` | G7 lançamento |

Transversais: `product-method` (orquestração e status), `gate-review` (portões), `retro` (melhoria do próprio método), `adopt` (adoção de um produto que já existe).

## Agentes

| Lead | Especialistas |
|---|---|
| product-lead | market-researcher, marketing-writer |
| ux-lead | prototyper |
| engineering-lead | architect, test-engineer, implementer, reviewer |

## Como começar

- Diga **"vamos começar um app novo"** para criar o `docs/STATUS.md` e iniciar o Kickoff.
- Diga **"em que fase estamos?"** para retomar.
- Diga **"adotar o método neste projeto"** para trazer um produto existente, com engenharia reversa dos artefatos.

## Onde funciona

- **App Claude (Cowork), inclusive no celular:** fases 0 a 3 completas e documentos das fases 4, 5 e 7. Os artefatos ficam no Projeto do claude.ai e os protótipos são publicados como Artifact.
- **Claude Code:** todas as fases. Os artefatos ficam em `docs/` e os hooks aplicam o método.

Os caminhos são idênticos nos dois lugares.

## Hooks (Claude Code)

| Evento | O que faz |
|---|---|
| SessionStart | Injeta a fase atual e os portões no contexto |
| PreToolUse | Bloqueia código de produção antes do G4 (exceto durante a fase 4) e sem spec aprovada |
| PostToolUse | Roda ESLint no arquivo editado, se instalado |

Os hooks só agem em projetos com o arquivo de status (padrão `docs/STATUS.md`). O `.product-studio.json` configura o caminho do status, a pasta e o texto de aprovação das specs, as pastas protegidas (padrão: `src/`, `supabase/`, `tests/`, `e2e/`) e as exceções. Portões marcados como `(retroativo)` contam como aprovados. Para abrir uma exceção autorizada, use `PRODUCT_STUDIO_GUARD=off`. Requer Node.js.

## Evolução

Rode a skill `retro` ao fim de cada fase. Ela transforma os aprendizados em mudanças no plugin, com versionamento no `CHANGELOG.md`.
