---
name: retro
description: Conduz uma retrospectiva curta ao fim de uma fase do método product-studio e transforma os aprendizados em melhorias concretas no próprio plugin (skills, agentes, checklists, templates). Use quando o usuário disser "vamos fazer a retro", "o que melhorar no método", "retrospectiva da fase" ou após a aprovação de um portão.
---

# Retro do método

O objetivo é melhorar **o método**, não o produto. Aprendizados sobre o produto vão para os artefatos da fase.

## Passos

1. **Colete evidências** antes de perguntar. Releia o `STATUS.md`, o `_state.md` da fase, os retornos a fases anteriores e as ressalvas aceitas no portão.
2. **Pergunte ao usuário**, com no máximo 3 perguntas por rodada:
   - O que funcionou bem e deve ser mantido?
   - Onde houve atrito, repetição ou perda de tempo?
   - Que pergunta, checagem ou artefato faltou e teria evitado retrabalho?
   - Algo foi burocrático sem gerar valor?
3. **Traduza cada aprendizado numa mudança concreta** no plugin:

   | # | Aprendizado | Mudança proposta | Arquivo do plugin | Impacto |
   |---|---|---|---|---|

   O impacto é alto, médio ou baixo. Prefira **remover** a adicionar: um método enxuto é um método usado.
4. **Registre** em `docs/retros/<fase>-retro.md`.
5. **Aplique, se o usuário aprovar.** Se o plugin estiver editável no ambiente, edite os arquivos, incremente a versão em `plugin.json` (patch para ajustes, minor para skill ou agente novo) e registre no `CHANGELOG.md` do plugin. Se não estiver editável, entregue a lista de mudanças pronta para aplicar depois.

## Regras

- Máximo de 5 mudanças por retro. Priorize as de maior impacto.
- Uma mudança que só serve a este produto não entra no plugin. Ela vai para o `CLAUDE.md` do projeto.
