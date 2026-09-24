---
name: build-feature
description: Implementa uma feature com spec aprovada (fase 6 do product-studio), executando de forma autônoma o ciclo teste → implementação → revisão para todas as tarefas e apresentando a feature pronta para aceite do usuário. Use quando o usuário disser "implementar a feature X", "construir a spec", "rodar as tarefas", "desenvolver" ou "continuar a implementação".
---

# Construção de feature

**Autonomia combinada:** o usuário aprova a spec e depois a feature pronta. Entre esses dois momentos, o time trabalha sozinho. Só interrompa o usuário por um bloqueio real (veja "Quando parar").

## Pré-requisitos

- G4 marcado no `docs/STATUS.md`
- `spec.md` com `**Status:** Aprovada`, além de `plan.md` e `tasks.md` prontos

Sem isso, recuse e ofereça a skill `write-spec`. No Claude Code, o hook de guarda bloqueia a escrita em código de produção de qualquer forma.

## Ciclo

Acione o `engineering-lead` com o caminho da feature. Ele coordena:

1. **Branch:** `feat/<nnn>-<nome>`.
2. **Por história (P1 primeiro), por tarefa, na ordem do `tasks.md`:**
   1. `test-engineer` escreve os testes da tarefa. Confirme que **falham**.
   2. `implementer` escreve o mínimo de código para passar, seguindo o plan, a constitution e o glossário.
   3. Rode lint, typecheck e testes. Se falhar, o `implementer` corrige, com no máximo 3 tentativas. Depois disso, é bloqueio.
   4. Marque a tarefa `[x]` no `tasks.md` e faça um commit pequeno (`feat(<contexto>): T00n <descrição>`).
   5. Tarefas `[P]` independentes podem rodar em paralelo, em worktrees isolados.
3. **Checkpoint de história:** rode os testes E2E dos cenários daquela história.
4. **Revisão:** ao fim de todas as histórias, o `reviewer` analisa o diff completo contra a spec, a constitution, a segurança e o glossário. Problemas de severidade alta voltam para o `implementer`. Repita até não haver nenhum.
5. **Definition of Done:** confira item a item em `docs/04-standards/definition-of-done.md`.
6. **Preview:** abra um pull request e obtenha a URL de preview (Vercel).

## Apresentação para aceite

Mostre ao usuário, de forma curta:

- O que foi entregue, por história, e o link do preview
- O roteiro de demonstração do `acceptance.md`, para ele testar em 3 a 5 minutos
- As decisões tomadas sozinho durante a implementação (máximo 5)
- A dívida assumida, se houver

Depois, acione a skill `gate-review` (portão "Aceite de feature"). Com a aprovação:

1. Faça o merge e marque a feature como `aceita` no `STATUS.md`.
2. Tire a feature de `docs/05-specs/roadmap.md` e revise a ordem das próximas, se a entrega mudou alguma dependência.
3. Atualize `docs/01-discovery/screen-map.md` se a feature criou, removeu ou mudou telas.
4. Regenere `docs/04-standards/data-model.generated.md` se houve migração.
5. Apresente as primeiras linhas do roadmap e espere o usuário escolher a próxima. Não comece a próxima feature por conta própria.

## Quando parar e perguntar

- A spec está ambígua ou contraditória num ponto que muda o comportamento visível ao usuário
- Uma violação da constitution parece inevitável
- É necessária uma dependência nova ou uma decisão que exige ADR
- Houve 3 falhas seguidas na mesma tarefa
- Um teste de aceite só passa se o próprio teste for alterado. **Nunca** altere um teste de aceite para fazê-lo passar sem aprovação.

Nesses casos, pare, grave o estado no `tasks.md` e apresente o bloqueio com opções e uma recomendação.

## Retomada

Se a sessão cair, o `tasks.md` é o estado: continue da primeira tarefa sem `[x]`.
