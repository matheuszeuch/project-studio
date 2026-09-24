# Constitution: <Produto>

**Versão:** 1.0 · **Aprovada em:** <data>

Estes artigos são inegociáveis. Todo `plan.md` faz a checagem da constitution; uma violação precisa de justificativa aprovada pelo usuário.

**Convenção que importa vira verificação.** Cada artigo diz como é verificado: `lint`, `hook`, `teste` ou `revisão`. Um artigo verificado só por revisão precisa de motivo, porque regra escrita em texto se perde com o tempo. As verificações mecânicas rodam no CI e, quando cabe, logo após cada edição (`postEditCommands` no `.product-studio.json`).

## Artigo I — Spec antes de código
Nenhum código de produção sem spec aprovada. O código implementa a spec; se a spec estiver errada, corrige-se a spec primeiro.

**Verificação:** hook de guarda do product-studio.

## Artigo II — Testes primeiro
Todo cenário de aceite vira teste automatizado antes da implementação. O teste precisa falhar antes e passar depois.

**Verificação:** revisão (o test-engineer confirma que o teste falha antes).

## Artigo III — Linguagem ubíqua
Código, UI e documentação usam os termos do glossário. Um termo novo exige atualização do glossário antes do uso.

**Verificação:** revisão; lint de termos proibidos do glossário, se houver.

## Artigo IV — Domínio isolado
Regras de negócio vivem em `domain/` e não dependem de framework, banco ou UI.

**Verificação:** lint de fronteiras de importação (por exemplo, dependency-cruiser ou regra do ESLint).

## Artigo V — Simplicidade
Resolva o problema da spec, não problemas hipotéticos. Nenhuma abstração sem pelo menos dois usos reais. Nenhuma dependência nova sem ADR.

**Verificação:** revisão.

## Artigo VI — Segurança e privacidade por padrão
Row Level Security em toda tabela. Nenhum segredo no código. Dados pessoais apenas quando uma spec justificar.

**Verificação:** teste de RLS por tabela; `deny` de leitura de `.env` nas permissões do Claude.

## Artigo VII — Acessibilidade
WCAG 2.2 AA: contraste, foco visível, alvos de toque de 44px, rótulos acessíveis.

**Verificação:** teste (axe no Playwright).

## Artigo VIII — Observável e reversível
Toda mudança chega a produção por pull request com preview e pode ser revertida. Migrações têm caminho de volta.

**Verificação:** CI e revisão.

## Artigo IX — Tempo e aleatoriedade injetados
O domínio não lê o relógio nem gera identificadores sozinho: recebe um `Clock` e um gerador por parâmetro. Testes de regra que dependem de data ficam determinísticos.

**Verificação:** lint (proibir `new Date()` e `Date.now()` em `domain/`).

## Artigo X — Segredos e dados sensíveis fora do contexto
Segredos nunca são lidos por inteiro nem reproduzidos numa sessão de IA. Logs e observabilidade registram só metadados técnicos, nunca conteúdo do usuário.

**Verificação:** `deny` de `Read(./.env*)` nas permissões do Claude; revisão dos pontos de log.

<!-- Adicione, ajuste ou remova artigos com o usuário. Menos é mais. -->
