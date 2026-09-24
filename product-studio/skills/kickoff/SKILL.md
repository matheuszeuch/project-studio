---
name: kickoff
description: Conduz o Kickoff (fase 0) de um produto novo no método product-studio, entrevistando o usuário para produzir o charter com objetivo, público, restrições, métricas, riscos e critério de parada. Use quando o usuário disser "novo produto", "kickoff", "vamos começar o app X" ou "definir o charter".
---

# Kickoff

Produza, em uma conversa curta (15 a 30 minutos), o charter que ancora todas as decisões seguintes. Não é descoberta de problema: é o enquadramento estratégico.

## Passos

1. Se `docs/STATUS.md` não existir, crie-o a partir de `../product-method/references/status-template.md`.
2. Entreviste o usuário em rodadas de no máximo 3 perguntas, usando AskUserQuestion com opções quando fizer sentido. Cubra:
   - **Intenção:** por que este produto, por que agora, por que você
   - **Antecedentes:** já existe (ou existiu) um produto, protótipo ou planilha para isso? Alguém usou? Há dados de uso ou motivo do abandono? Isso é evidência de descoberta, não só spec.
   - **Ambição:** projeto pessoal, negócio, ativo de portfólio? Qual o horizonte?
   - **Público inicial**, e para quem o produto explicitamente **não** é
   - **Presença:** já tem domínio? Em que provedor está o DNS? Já tem conta na Vercel? (Alimenta a página "em breve" de `../product-method/references/coming-soon.md`.)
   - **Restrições:** tempo disponível por semana, orçamento (valor ou teto, e quem paga), prazo, plataformas, privacidade (LGPD, se houver dados pessoais), regulação (por exemplo, restrições de publicidade de produtos regulados)
   - **Métrica norte** e 2 a 3 métricas de apoio. A norte precisa medir a hipótese crítica (ex.: se o risco é "o grupo não usa", meça pessoas ativas, não volume total)
   - **Riscos:** qual hipótese, se falsa, mata o produto? Como validá-la com **comportamento** (ex.: teste concierge), não só intenção (entrevista, protótipo)?
   - **Critério de parada:** o que faria desistir ou pivotar, com **limiar numérico** e data de reavaliação com meta
3. Desafie ambição e restrições incompatíveis (por exemplo, escopo grande com 4 horas por semana) e peça uma escolha.
4. Escreva `docs/00-charter/charter.md` a partir de `references/charter-template.md`.
5. Encerre com a skill `gate-review` para o G0.

## Saída

Charter de 1 página. Se passar disso, está detalhado demais para esta fase.
