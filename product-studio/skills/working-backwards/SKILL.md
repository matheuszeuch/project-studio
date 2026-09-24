---
name: working-backwards
description: Conduz a fase de Working Backwards (fase 2 do product-studio), escrevendo o press release, o FAQ e a proposta de valor como se o produto já existisse, a partir dos artefatos da descoberta. Use quando o usuário disser "working backwards", "escrever o press release", "PR/FAQ", "proposta de valor" ou "posicionamento".
---

# Working Backwards

Escreva o futuro anúncio do produto antes de construí-lo. Se o press release não empolga, o produto também não vai empolgar. Esse texto vira a estrela-guia das specs e a matéria-prima das brochures.

## Entradas

`docs/00-charter/charter.md` e, de `docs/01-discovery/`, os arquivos `discovery-summary.md`, `problem-statement.md`, `personas.md`, `ideas.md` (escopo do MVP) e `test-results.md`.

## Passos

1. **Rascunho.** Acione o `marketing-writer` para escrever `press-release.md` a partir de `references/prfaq-template.md`, usando apenas o escopo do MVP.
2. **Teste do "e daí?".** Leia o press release com o usuário. Para cada parágrafo, pergunte: um cliente da persona primária se importaria? Corte o que não passar.
3. **FAQ externo.** Escreva de 5 a 8 perguntas que um usuário faria: preço, privacidade, diferença das alternativas, "funciona sem internet?".
4. **FAQ interno.** Escreva de 5 a 8 perguntas duras que um investidor ou sócio faria: por que vai funcionar, qual a hipótese mais arriscada, custo, o que acontece se um grande concorrente copiar, o que **não** vamos fazer.
5. **Proposta de valor.** Escreva `value-proposition.md` numa frase: *"Para [persona] que [necessidade], [produto] é [categoria] que [benefício principal]. Diferente de [alternativa], [diferencial]."*
6. **Checagem de coerência.** Acione o `product-lead` para cruzar tudo com o escopo do G1. Promessas fora do MVP são removidas ou marcadas como "futuro".
7. Encerre com a skill `gate-review` para o G2.

## Regras

- Linguagem do usuário, sem jargão técnico. Use os termos que aparecem nos insights.
- Números e citações ficam marcados como ilustrativos até existirem dados reais.
