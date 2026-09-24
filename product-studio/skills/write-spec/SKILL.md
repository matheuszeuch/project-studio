---
name: write-spec
description: Escreve a especificação de uma feature (fase 5 do product-studio) no formato inspirado no GitHub Spec Kit — spec, plan e tasks — com rastreabilidade à descoberta e checagem da constitution. Use quando o usuário disser "especificar a feature X", "escrever a spec", "próxima feature", "planejar a implementação" ou "quebrar em tarefas".
---

# Spec-Driven Development

Transforme uma fatia de valor em spec → plan → tasks. A spec diz **o quê e por quê** (sem tecnologia). O plan diz **como**. As tasks dizem **em que ordem**. Os modelos estão em `references/`.

## Pré-requisitos

G4 aprovado no `docs/STATUS.md`. Antes disso, é possível rascunhar specs, mas não aprová-las.

## 1. Escolher a feature

Se o usuário não indicou, apresente as primeiras linhas de `docs/05-specs/roadmap.md` (tamanho e bloqueio de cada uma) e deixe o usuário escolher. Sem roadmap, acione o `product-lead` para propor a menor fatia que entrega valor ponta a ponta à persona primária, na ordem da jornada to-be. Feature de tamanho **G** é dividida antes da spec. Crie `docs/05-specs/<nnn-nome>/` e registre a feature no `STATUS.md` como `rascunho`.

## 2. spec.md (product-lead)

1. O `product-lead` redige a spec a partir de `references/spec-template.md`, usando o mapa de telas, as jornadas, o press release e o glossário.
2. Toda incerteza vira `[PRECISA ESCLARECER: pergunta]` dentro do texto. Não invente.
3. Conduza o **esclarecimento** com o usuário: no máximo 5 perguntas, 3 por rodada, priorizadas por impacto. Registre as respostas na seção "Esclarecimentos" e remova os marcadores.
4. Checagem de qualidade: sem detalhes de implementação, requisitos testáveis, critérios de sucesso mensuráveis e independentes de tecnologia.

## 3. plan.md (engineering-lead)

1. O `engineering-lead`, com o `architect`, redige `plan.md` a partir de `references/plan-template.md`.
2. **Checagem da constitution:** artigo por artigo, com ✅ ou uma violação justificada.
3. Artefatos de apoio, quando aplicáveis: `data-model.md` a partir de `references/data-model-template.md` (só o que a feature cria ou muda: tabelas, RLS, migrações com caminho de volta, dado pessoal) e contratos de API ou ações de servidor.
4. Novas decisões difíceis de reverter viram ADR.

## 4. tasks.md (engineering-lead)

1. Gere as tarefas a partir de `references/tasks-template.md`, agrupadas por história de usuário, para que cada história possa ser entregue e testada de forma independente.
2. Testes antes da implementação em cada história. Marque com `[P]` as tarefas paralelizáveis (arquivos diferentes, sem dependência).
3. Gere `acceptance.md`: os cenários de aceite em formato de roteiro de demonstração para o usuário.

## 5. Aprovação

1. Apresente ao usuário um resumo de 10 linhas: histórias, prioridades, o que fica de fora, riscos e número de tarefas.
2. Acione a skill `gate-review` (portão "Spec aprovada").
3. Com a aprovação, marque `**Status:** Aprovada` no topo da `spec.md` (o hook de guarda lê essa linha) e atualize o `STATUS.md`.
4. Ofereça seguir para a skill `build-feature`.
