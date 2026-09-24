---
name: brochure
description: Produz os materiais de marketing do produto (fase 7 do product-studio) — landing page, one-pager e pitch deck — a partir do press release, da proposta de valor, do glossário e do design system, prometendo apenas o que está entregue. Use quando o usuário disser "brochure", "landing page", "one-pager", "pitch deck", "materiais de lançamento" ou "material de marketing".
---

# Brochures

Os materiais são uma consequência do Working Backwards, não um projeto à parte. Mesma narrativa, mesmo vocabulário, mesma identidade visual.

## Entradas

- `docs/02-positioning/`: press release, FAQ e proposta de valor
- `docs/03-domain/glossary.md` e `docs/04-standards/design-system.md`
- `docs/STATUS.md`: somente features **aceitas** podem ser prometidas; o resto aparece como "em breve", no máximo

## Passos

1. **Pergunte** qual material e para qual público e canal. Por exemplo: um pitch deck para um investidor-anjo é diferente de um para um parceiro de distribuição.
2. **Mensagem.** Acione o `marketing-writer` para gerar a espinha narrativa a partir de `references/message-house.md`: mensagem central, 3 pilares, provas e chamada para ação. Valide com o usuário antes de produzir qualquer peça.
3. **Produza** conforme o material:

| Material | Guia | Formato no app Claude | Formato no Claude Code |
|---|---|---|---|
| Landing page | `references/landing-page.md` | Artifact publicado | Rota `/` ou projeto separado na Vercel |
| One-pager | `references/one-pager.md` | PDF | PDF |
| Pitch deck | `references/pitch-deck.md` | Tipo Slides, quando disponível | .pptx |

4. **Revisão.** O `product-lead` confere as promessas contra o `STATUS.md` e o glossário. O `ux-lead` confere a aderência ao design system.
5. Grave em `docs/06-marketing/<material>/` e registre no `STATUS.md`.
6. Quando os três materiais estiverem prontos, acione a skill `gate-review` para o G7.

## Regras

- Nenhum número inventado. Métricas e depoimentos ilustrativos são marcados como tal ou removidos.
- Imagens: capturas reais do produto ou ilustrações próprias. Nada de marcas, logos ou fotos de terceiros sem licença.
- Produtos regulados (bebidas, tabaco, saúde, finanças) exigem checar as restrições de publicidade aplicáveis com o usuário antes de publicar.
