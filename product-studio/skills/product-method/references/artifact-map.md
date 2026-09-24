# Mapa de artefatos e IDs

## Estrutura

```
docs/
  STATUS.md                    estado central e portões
  00-charter/
    charter.md
  01-discovery/
    _state.md  insights.md  hypotheses.md  personas.md  problem-statement.md
    journeys.md  hmw.md  ideas.md  ideas-parking-lot.md  screen-map.md
    market-scan.md  interview-script.md  test-results.md  discovery-summary.md
  02-positioning/
    press-release.md  faq.md  value-proposition.md
  03-domain/
    _state.md  event-storming.md  glossary.md  context-map.md
    aggregates/<agregado>.md
  04-standards/
    constitution.md  stack.md  definition-of-done.md  design-system.md
  05-specs/<nnn-feature>/
    spec.md  plan.md  tasks.md  data-model.md  acceptance.md
  adr/
    ADR-001-<titulo>.md
  06-marketing/
    landing-page/  one-pager/  pitch-deck/
  retros/
    <fase>-retro.md
site/                          página "em breve" (provisória, até o G7)
vercel.json                    deploy estático provisório (até o G4)
prototype/                     protótipo descartável, publicado em poc.<dominio>
src/  tests/  e2e/  supabase/  código de produção (após G4)
```

## Prefixos de ID

| Prefixo | Artefato | Criado em |
|---|---|---|
| `INS-` | Insight | Fase 1 |
| `HYP-` | Hipótese | Fase 1 |
| `PER-` | Persona | Fase 1 |
| `HMW-` | "Como poderíamos…?" | Fase 1 |
| `SCR-` | Tela | Fase 1 |
| `EVT-` | Evento de domínio | Fase 3 |
| `AGG-` | Agregado | Fase 3 |
| `BC-` | Contexto delimitado (bounded context) | Fase 3 |
| `ADR-` | Decisão de arquitetura | Fase 4+ |
| `FR-` | Requisito funcional (por spec) | Fase 5 |
| `SC-` | Critério de sucesso (por spec) | Fase 5 |
| `US-` | História de usuário (por spec) | Fase 5 |
| `T` | Tarefa (T001, T002…) | Fase 5 |

IDs nunca são reaproveitados. Um item descartado recebe o status `descartado`, mas mantém o ID.

## Numeração das features

`docs/05-specs/001-salvar-receita/`: três dígitos e um nome curto em kebab-case, na ordem de criação.

## Configuração: `.product-studio.json`

Todos os campos são opcionais.

| Campo | Padrão | Uso |
|---|---|---|
| `statusFile` | `docs/STATUS.md` | Arquivo de estado lido pelos hooks |
| `specsDir` | `docs/05-specs` | Pasta das specs. Aceita `<nnn>-nome/spec.md` e `<nnn>-nome.md` |
| `specApprovedStatus` | `["Aprovada"]` | Textos da linha `**Status:**` que contam como spec aprovada |
| `productionPaths` | `["src/", "supabase/", "tests/", "e2e/"]` | Pastas protegidas pelo hook de guarda |
| `unguardedPaths` | `[]` | Exceções dentro das pastas protegidas |

## Artefatos reconstruídos

Num produto adotado (skill `adopt`), todo artefato gerado por engenharia reversa leva, abaixo do título, o bloco `> **Origem:** reconstruído por engenharia reversa em <data> a partir de <arquivos>.` Afirmações sem evidência primária viram `HYP-`, nunca `INS-`.
