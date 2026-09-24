---
name: event-storming
description: Conduz a fase de Domain-Driven Design (fase 3 do product-studio) com um event storming conversacional, produzindo eventos de domínio, glossário (linguagem ubíqua), contextos delimitados, mapa de contextos e agregados. Use quando o usuário disser "modelar o domínio", "event storming", "DDD", "glossário" ou "bounded contexts".
---

# Event storming conversacional

Modele o domínio com o usuário a partir das jornadas validadas. O resultado mais importante é o **glossário**: ele passa a ser o vocabulário obrigatório de código, UI, specs e marketing.

## Entradas

De `docs/01-discovery/`: `journeys.md` (to-be), `screen-map.md`, `insights.md` e `personas.md`. De `docs/02-positioning/`: `press-release.md`.

## Etapas

Grave o progresso em `docs/03-domain/_state.md`. Use os modelos de `references/ddd-templates.md`.

### 1. Eventos (big picture)

1. Proponha uma lista inicial de eventos de domínio no passado, derivada da jornada to-be. Exemplos: "Receita salva", "Coleção criada".
2. Pergunte ao usuário o que falta, o que está fora de ordem e o que acontece "quando dá errado".
3. Ordene numa linha do tempo e marque **pontos quentes** (dúvidas, conflitos, regras obscuras).

### 2. Comandos, atores e políticas

Para cada evento, identifique o comando que o dispara, o ator, as políticas ("sempre que X, então Y"), os sistemas externos e o modelo de leitura (o que o ator precisa ver para decidir).

### 3. Linguagem ubíqua

1. Extraia os substantivos e verbos do domínio.
2. Para cada termo, confirme com o usuário: definição, sinônimos a **evitar** e um exemplo real. Prefira os termos que os usuários usam nos insights.
3. Resolva ambiguidades. Uma mesma palavra com dois sentidos é sinal de dois contextos.

### 4. Contextos e agregados

1. Acione o `architect` com os eventos e o glossário. Ele propõe os contextos delimitados (`BC-`), o mapa de contextos e os agregados (`AGG-`) com invariantes.
2. Apresente ao usuário em linguagem de negócio e valide as regras de negócio (invariantes), não a técnica.

### 5. Cobertura

Confira se cada passo da jornada to-be e cada tela do mapa são cobertos por eventos e comandos. As lacunas viram pontos quentes a resolver.

## Encerramento

1. Acione o `engineering-lead` para revisar a consistência do modelo.
2. Acione a skill `gate-review` para o G3.

## Regras

- Máximo de 3 perguntas por rodada. Mostre o progresso: `Etapa: <n> · Eventos: X · Termos: Y · Pontos quentes abertos: Z`.
- Modele o MVP. Eventos de funcionalidades futuras ficam listados, marcados como "futuro".
