# Constitution: <Produto>

**Versão:** 1.0 · **Aprovada em:** <data>

Estes artigos são inegociáveis. Todo `plan.md` faz a checagem da constitution; uma violação precisa de justificativa aprovada pelo usuário.

## Artigo I — Spec antes de código
Nenhum código de produção sem spec aprovada. O código implementa a spec; se a spec estiver errada, corrige-se a spec primeiro.

## Artigo II — Testes primeiro
Todo cenário de aceite vira teste automatizado antes da implementação. O teste precisa falhar antes e passar depois.

## Artigo III — Linguagem ubíqua
Código, UI e documentação usam os termos do glossário. Um termo novo exige atualização do glossário antes do uso.

## Artigo IV — Domínio isolado
Regras de negócio vivem em `domain/` e não dependem de framework, banco ou UI.

## Artigo V — Simplicidade
Resolva o problema da spec, não problemas hipotéticos. Nenhuma abstração sem pelo menos dois usos reais. Nenhuma dependência nova sem ADR.

## Artigo VI — Segurança e privacidade por padrão
Row Level Security em toda tabela. Nenhum segredo no código. Dados pessoais apenas quando uma spec justificar.

## Artigo VII — Acessibilidade
WCAG 2.2 AA: contraste, foco visível, alvos de toque de 44px, rótulos acessíveis.

## Artigo VIII — Observável e reversível
Toda mudança chega a produção por pull request com preview e pode ser revertida. Migrações têm caminho de volta.

<!-- Adicione, ajuste ou remova artigos com o usuário. Menos é mais. -->
