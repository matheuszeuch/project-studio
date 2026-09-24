# Modelo de dados: <escopo>

<!-- Dois usos:
     - docs/04-standards/data-model.md: esboço do banco inteiro no G4, derivado dos agregados.
       Assim que existirem migrações, este esboço dá lugar à visão gerada
       (docs/04-standards/data-model.generated.md) e ganha um aviso no topo apontando para ela.
     - docs/05-specs/<nnn>/data-model.md: só o que a feature cria ou muda. -->

**Agregados:** <AGG-xx>

## Tabelas

### <tabela>
Agregado: <AGG-xx> · Dono do dado: <quem cria e quem pode apagar>

| Coluna | Tipo | Nulo | Observação |
|---|---|---|---|
| id | uuid | não | |

Índices: <coluna(s) e o motivo, ligado a uma consulta real>

**Dado pessoal:** <nenhum / quais colunas, a base legal e o que acontece na exclusão da conta>

## Políticas de acesso (RLS)

| Tabela | Operação | Quem pode | Condição |
|---|---|---|---|
| | select | | |
| | insert | | |
| | update | | |
| | delete | | |

## Migrações

| Migração | O que faz | Caminho de volta |
|---|---|---|
