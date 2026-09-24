# Design system: <Produto>

<!-- Quando passar de ~300 linhas, divida em docs/04-standards/design-system/: um index.md (princípios, tom, tokens) e um arquivo por componente. Documento grande é lido inteiro a cada tarefa de UI. -->

## Princípios
3 princípios derivados do posicionamento (por exemplo, "sofisticado sem ser intimidador"). Cada um com uma frase de "significa" e outra de "não significa".

## Tom de voz
| Situação | Faça | Evite |
|---|---|---|
| Boas-vindas | | |
| Erro | | |
| Estado vazio | | |
| Sucesso | | |

## Tokens
```css
:root {
  /* cor */
  --color-bg: ;
  --color-surface: ;
  --color-text: ;
  --color-text-muted: ;
  --color-primary: ;
  --color-primary-contrast: ;
  --color-accent: ;
  --color-success: ;
  --color-warning: ;
  --color-danger: ;
  --color-border: ;
  /* tipografia */
  --font-display: ;
  --font-body: ;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-lg: 1.125rem; --text-xl: 1.5rem; --text-2xl: 2rem;
  /* espaçamento (base 4px) */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px;
  /* forma */
  --radius-sm: ; --radius-md: ; --radius-lg: ;
  --shadow-sm: ; --shadow-md: ;
}
```
Defina também a variante escura, se houver. Todo par texto/fundo deve ter contraste ≥ 4.5:1.

## Componentes base
| Componente | Variantes | Estados | Observação |
|---|---|---|---|
| Botão | primário, secundário, fantasma, perigo | normal, hover, foco, desabilitado, carregando | |
| Campo de texto | | | |
| Card | | | |
| Lista | | | |
| Barra de navegação | | | |
| Estado vazio | | | |
| Toast/feedback | | | |

## Padrões de tela
Navegação principal, cabeçalho, formulários, listas com busca e filtros, detalhe.

## Acessibilidade
Foco visível, alvos de 44px, rótulos, movimento reduzido respeitado.
