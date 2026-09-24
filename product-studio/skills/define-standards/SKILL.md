---
name: define-standards
description: Conduz a fase de Padrões (fase 4 do product-studio), definindo constitution, stack, estrutura de código, Definition of Done, design system e ADRs, e preparando o esqueleto do repositório com lint, testes e CI. Use quando o usuário disser "definir padrões", "constitution", "design system", "escolher a stack", "Definition of Done" ou "preparar o esqueleto".
---

# Definição de padrões

Congele as regras do jogo antes do desenvolvimento pesado. Tudo que for definido aqui é aplicado pelos agentes e, no Claude Code, pelos hooks.

## Entradas

O charter, o G1 (personas, protótipo, mapa de telas), o G2 (press release) e o G3 (glossário, contextos, agregados).

## Passos

1. **Stack.** Parta da stack padrão em `references/default-stack.md`. Acione o `architect` para verificar se algum requisito do produto justifica uma exceção (offline pesado, tempo real, hardware, regulação). Exceções exigem um ADR. Sem exceções, registre `ADR-001-stack-padrao.md` confirmando a stack.
2. **Estrutura de código.** O `architect` mapeia os contextos do domínio (`BC-`) para a estrutura de pastas definida na stack padrão.
3. **Constitution.** Monte `constitution.md` a partir de `references/constitution-template.md`. Revise cada artigo com o usuário: manter, ajustar ou remover. Artigos são poucos e inegociáveis; preferências vão para o `CLAUDE.md`. Para cada artigo, defina a **verificação** (lint, hook, teste ou revisão). Prefira a mecânica: o que só está escrito se perde.
4. **Definition of Done.** Monte `definition-of-done.md` a partir de `references/dod-template.md`, com o `product-lead`.
5. **Design system.** Acione o `ux-lead` para criar `design-system.md` a partir de `references/design-system-template.md`. Ele parte do aprendizado do protótipo e do posicionamento, não do visual do protótipo. Apresente ao usuário uma página de amostra (Artifact) com paleta, tipografia e componentes base.
6. **Esboço do modelo de dados.** O `architect` escreve `docs/04-standards/data-model.md` a partir de `../write-spec/references/data-model-template.md`: as tabelas previstas, derivadas dos agregados (`AGG-`), o dono de cada dado, os dados pessoais e as políticas de acesso. É um esboço para o esqueleto e as primeiras specs; o detalhe de cada tabela nasce no `data-model.md` da feature que a cria.
7. **Roadmap.** O `product-lead` escreve `docs/05-specs/roadmap.md` a partir de `../write-spec/references/roadmap-template.md`: a ordem das features do MVP, na ordem da jornada to-be, com tamanho e dependências.
8. **Esqueleto do repositório** (Claude Code). O `engineering-lead` cria o projeto vazio com a stack, lint, formatação, testes (um teste de exemplo), CI e `.product-studio.json`. O CI precisa passar. Inclua:
   - as verificações mecânicas dos artigos da constitution, no CI e em `postEditCommands` quando forem rápidas;
   - um script que gera `docs/04-standards/data-model.generated.md` a partir do banco local (tabelas, colunas e políticas de RLS), para substituir o esboço quando houver migrações. Um documento de banco escrito à mão em paralelo às migrações diverge;
   - `docLimits` no `.product-studio.json`, se os tetos padrão não servirem.
9. **CLAUDE.md.** Atualize os comandos (instalar, rodar, testar, lint, deploy) e o glossário resumido.
10. Encerre com a skill `gate-review` para o G4.

## Regras

- Registre como ADR, a partir de `references/adr-template.md`, toda decisão difícil de reverter.
- Se esta fase rodar no app Claude, sem repositório, produza os documentos e deixe o passo 6 marcado como pendente no `STATUS.md`. O G4 só fecha com o esqueleto no CI.
