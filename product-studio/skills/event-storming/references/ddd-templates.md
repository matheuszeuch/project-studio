# Modelos de DDD

## event-storming.md
| Ordem | Evento (EVT) | Comando | Ator | Política | Modelo de leitura | Contexto (BC) | Ponto quente |
|---|---|---|---|---|---|---|---|
| 1 | EVT-01 Receita salva | Salvar receita | Cozinheiro | Se for a primeira receita → sugerir criar coleção | Lista de receitas | BC-01 | |

## glossary.md
| Termo | Definição | Evitar | Exemplo | Contexto | Nome no código |
|---|---|---|---|---|---|
| Receita | <definição> | "prato", "post" | <exemplo real> | BC-01 | `Recipe` |

O "Nome no código" é o identificador em inglês usado no código. É obrigatório e único por contexto.

## context-map.md
```
## BC-01 — <nome>
Responsabilidade: <uma frase>
Termos principais: <lista>
Agregados: AGG-01, AGG-02

## Relações
BC-01 → BC-02: <cliente-fornecedor | conformista | camada anticorrupção | kernel compartilhado>, <motivo>
```

Inclua um diagrama Mermaid com os contextos e as relações.

## aggregates/<agregado>.md
```
# AGG-01 — <Nome> (BC-01)
Raiz: <entidade>
Entidades: <lista>
Objetos de valor: <lista>
Invariantes (regras que nunca podem ser violadas):
- INV-01: <regra de negócio>
Comandos aceitos: <lista>
Eventos emitidos: EVT-xx
Fronteira de consistência: <o que muda junto numa mesma transação>
```
