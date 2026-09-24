# Definition of Done

Uma feature só é apresentada ao usuário para aceite quando **todos** os itens estiverem cumpridos.

## Funcional
- [ ] Todos os cenários de aceite da spec passam em testes automatizados
- [ ] Critérios de sucesso (`SC-`) verificáveis estão instrumentados ou demonstrados
- [ ] Estados de vazio, carregamento, erro e sucesso implementados

## Qualidade
- [ ] Lint, typecheck e todos os testes passando no CI
- [ ] Cobertura de testes do `domain/` do contexto afetado ≥ 90%
- [ ] Revisão do `reviewer` sem problemas de severidade alta
- [ ] Nenhum `TODO` sem tarefa correspondente

## Produto e UX
- [ ] Termos da UI conferidos com o glossário
- [ ] Design system respeitado (sem cores ou espaçamentos fora dos tokens)
- [ ] Checagem de acessibilidade (axe no Playwright) sem violações sérias
- [ ] Funciona em celular (390px) e desktop

## Entrega
- [ ] Preview publicado
- [ ] Migrações aplicadas no preview, com caminho de volta
- [ ] `STATUS.md` e `tasks.md` atualizados
- [ ] Glossário e ADRs atualizados, se algo mudou
