# Tasks <nnn>: <Nome da feature>

**Plan:** ./plan.md

Formato: `- [ ] T001 [P] [US1] Descrição com o caminho exato do arquivo`
- `[P]`: pode rodar em paralelo (arquivos diferentes, sem dependência de tarefa pendente)
- `[USn]`: a história atendida
- Testes vêm antes da implementação e precisam falhar primeiro

## Fase 1 — Preparação
- [ ] T001 <migração / estrutura / configuração>

## Fase 2 — Fundação (bloqueia as histórias)
- [ ] T002 <entidades e invariantes do domínio compartilhadas pelas histórias>

## Fase 3 — US-1 (P1) 🎯 MVP da feature
**Teste independente:** <da spec>
- [ ] T003 [P] [US1] Teste unitário do domínio em tests/...
- [ ] T004 [P] [US1] Teste E2E do cenário 1 em e2e/...
- [ ] T005 [US1] Implementar <caso de uso> em src/contexts/.../application/...
- [ ] T006 [US1] Implementar <tela> em src/app/...
**Checkpoint:** US-1 funcionando e testável sozinha.

## Fase 4 — US-2 (P2)
…

## Fase final — Acabamento
- [ ] Txxx Checagem de acessibilidade (axe) nas telas novas
- [ ] Txxx Atualizar glossário, ADRs e CLAUDE.md, se necessário
- [ ] Txxx Conferir a Definition of Done

## Dependências
<Ordem entre fases e oportunidades de paralelismo.>
