# Plan <nnn>: <Nome da feature>

**Spec:** ./spec.md · **Data:** <data>

## Resumo técnico
<Abordagem em 3 a 5 linhas.>

## Contexto técnico
| Item | Valor |
|---|---|
| Contextos afetados (BC) | |
| Agregados afetados (AGG) | |
| Eventos novos ou alterados (EVT) | |
| Rotas / telas | |
| Mudanças de banco | sim/não → data-model.md |
| Dependências novas | nenhuma / ADR-xxx |
| Integrações externas | |

## Checagem da constitution
| Artigo | Situação | Observação |
|---|---|---|
| I — Spec antes de código | ✅ | |
| II — Testes primeiro | ✅ | |
| III — Linguagem ubíqua | ✅ | |
| IV — Domínio isolado | ✅ | |
| V — Simplicidade | ✅ | |
| VI — Segurança e privacidade | ✅ | |
| VII — Acessibilidade | ✅ | |
| VIII — Observável e reversível | ✅ | |

**Violações justificadas:** <nenhuma, ou a violação, o motivo e a alternativa mais simples rejeitada>

## Estrutura de arquivos
```
src/contexts/<contexto>/domain/...
src/contexts/<contexto>/application/...
src/app/...
tests/...
e2e/<nnn>-<nome>.spec.ts
supabase/migrations/...
```

## Design por camada
- **Domínio:** entidades, invariantes, eventos
- **Aplicação:** casos de uso (um por comando)
- **Infraestrutura:** repositórios, RLS, migrações
- **UI:** telas, componentes do design system, estados

## Riscos e mitigação
| Risco | Mitigação |
|---|---|
