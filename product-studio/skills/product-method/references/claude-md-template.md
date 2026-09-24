# <Nome do produto>

<Descrição em uma frase.>

## Método

Este projeto segue o plugin **product-studio**. A fase atual e os portões chegam no início da sessão. Leia os documentos **sob demanda**, pela pergunta que você precisa responder, e não todos antes de começar:

| Pergunta | Onde |
|---|---|
| Em que fase estamos, o que foi decidido? | `docs/STATUS.md` |
| Qual é a próxima feature? | `docs/05-specs/roadmap.md` |
| O que esta feature faz e como? | `docs/05-specs/<nnn>/` |
| O que significa este termo? | `docs/03-domain/glossary.md` |
| Que regra técnica vale? | `docs/04-standards/constitution.md` |
| Como é esta tela ou componente? | `docs/04-standards/design-system.md` (ou a pasta) |
| Por que foi decidido assim? | `docs/adr/` |

## Regras

- Toda conversa com o usuário acontece na sessão principal. Subagentes devolvem perguntas em `## Decisões necessárias`.
- Siga `docs/04-standards/constitution.md`. Em conflito entre este arquivo e a constitution, a constitution vence.
- Use exclusivamente os termos de `docs/03-domain/glossary.md` em código, UI e textos.
- Nenhum código de produção sem spec aprovada em `docs/05-specs/`.
- O código de `prototype/` nunca é reaproveitado em produção.
- Regra nova neste arquivo vira verificação (lint, hook ou teste) ou substitui outra. Este arquivo tem teto de tamanho.
- Código, nomes de arquivos e commits em inglês; documentação e UI em português, salvo decisão diferente na constitution.

## Comandos

<Preenchido na fase 4: instalar, rodar, testar, lint, deploy.>

## Glossário resumido

<Preenchido na fase 3: os 10 termos mais importantes, com link para o glossário completo.>
