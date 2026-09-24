# Changelog

## 1.1.0 — 2026-09-24
- Nova skill `adopt`: adoção de um produto existente por engenharia reversa (inventário fonte → artefato, move em commit isolado, cabeçalho de origem nos artefatos reconstruídos, gaps como `HYP-`), a partir da análise do Sistema Milestones
- Portão retroativo: `- [x] Gn … (retroativo AAAA-MM-DD)` conta como aprovado nos hooks e aparece como 🔁 no SessionStart. G0, G3 e G4 podem ser retroativos; G1 e G2 nunca
- `.product-studio.json` ganha `statusFile`, `specsDir`, `specApprovedStatus` e `unguardedPaths`. Specs em arquivo único (`<nnn>-nome.md`) passam a ser reconhecidas
- `product-method`, `gate-review`, `artifact-map` e `status-template` documentam a adoção

## 1.0.2 — 2026-09-23
- `product-method`: preparar o repositório agora publica uma página "em breve" logo no começo e entrega o passo a passo de domínio e DNS (Vercel + provedor de DNS, Cloudflare em "DNS only"), com verificação. Nova referência `references/coming-soon.md` com `site/index.html`, `vercel.json` estático (sem framework, rewrite do subdomínio `poc` para o protótipo, `noindex`) e as armadilhas vividas no Meus Charutos
- `kickoff`: pergunta por domínio, provedor de DNS e conta na Vercel
- `artifact-map`: `site/`, `vercel.json` e `prototype/` publicado em `poc.<dominio>`

## 1.0.1 — 2026-09-23
- Retro do Kickoff (Meus Charutos):
  - `product-method`: "preparar o repositório" aceita artefatos por zip/pasta e tem passo para repositório com código antigo (branch + tag de arquivo, push forçado com lease)
  - `gate-review`: checklist do G0 exige norte ligada à hipótese crítica, teste de comportamento do risco crítico, limiar e meta no critério de parada, privacidade (LGPD) e levantamento de produtos anteriores
  - `kickoff`: pergunta por antecedentes e dados de uso; template do charter com privacidade, orçamento com teto e critério de parada com meta

## 1.0.0 — 2026-09-23
- Método completo em 8 fases com portões e estado central em `docs/STATUS.md`
- 11 skills: product-method, kickoff, design-thinking, working-backwards, event-storming, define-standards, write-spec, build-feature, brochure, gate-review, retro
- 10 agentes: product-lead, ux-lead, engineering-lead, market-researcher, prototyper, marketing-writer, architect, test-engineer, implementer, reviewer
- Hooks (Claude Code): contexto da fase na abertura da sessão, guarda de código de produção sem G4/spec aprovada, ESLint pós-edição
- Stack padrão: Next.js + TypeScript + Supabase + Vercel; specs no formato inspirado no GitHub Spec Kit
- Autonomia: aprovação por spec e por feature pronta

## 0.1.0
- design-thinking, product-method, product-lead, prototyper
