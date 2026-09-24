# Stack padrão

Use por padrão. Qualquer desvio exige um ADR com motivo e custo.

| Camada | Escolha | Observação |
|---|---|---|
| Linguagem | TypeScript (`strict: true`) | Em todo o código |
| App | Next.js (App Router) | PWA instalável; Server Components por padrão |
| UI | Tailwind CSS + shadcn/ui | Tokens do design system em variáveis CSS |
| Validação | Zod | Schemas compartilhados entre UI, API e domínio |
| Backend | Supabase: Postgres, Auth, Storage, Edge Functions | Row Level Security obrigatória em toda tabela |
| Migrações | Supabase CLI (`supabase/migrations/`) | Nunca alterar o banco sem migração versionada |
| Testes unitários | Vitest | Domínio e aplicação |
| Testes E2E | Playwright | Um teste por cenário de aceite P1 |
| Qualidade | ESLint + Prettier | Rodam no CI e no hook pós-edição |
| CI | GitHub Actions | lint → typecheck → testes → build |
| Deploy | Vercel | Preview por pull request; produção na main |
| Observabilidade | Vercel Analytics + logs do Supabase | Avaliar Sentry quando houver usuários reais |

## Estrutura de pastas

Orientada ao domínio. Cada contexto delimitado (`BC-`) é um módulo.

```
src/
  app/                         rotas Next.js (UI apenas; sem regra de negócio)
  components/ui/               componentes do design system
  contexts/<contexto>/
    domain/                    entidades, objetos de valor, eventos, invariantes (sem dependências externas)
    application/               casos de uso (um arquivo por comando)
    infrastructure/            repositórios Supabase, integrações
  shared/                      utilitários sem regra de negócio
supabase/migrations/
tests/                         unitários (espelham src/contexts)
e2e/                           Playwright, um arquivo por spec
```

## Regras de dependência

`app` → `application` → `domain`. `infrastructure` implementa interfaces definidas em `domain`. O `domain` não importa Next.js, Supabase nem nada externo.
