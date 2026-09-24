# Checklists dos portões

## G0 — Kickoff
- [ ] Objetivo do produto em uma frase
- [ ] Para quem (público inicial) e para quem não é
- [ ] Restrições: prazo, orçamento (valor ou teto), plataformas, privacidade (LGPD), regulação
- [ ] Métrica norte (North Star) que mede a hipótese crítica, e 2 a 3 métricas de apoio
- [ ] Riscos principais, com a hipótese mais arriscada identificada e um teste de comportamento para validá-la
- [ ] Critério de parada com limiar numérico e data de reavaliação com meta
- [ ] Produtos anteriores identificados, com dados de uso levantados ou pendência registrada
- [ ] `docs/STATUS.md` criado

## G1 — Design Thinking
- [ ] Persona primária definida e 2 a 4 segmentos mapeados
- [ ] Pelo menos 8 insights, classificados como fato ou hipótese
- [ ] Varredura de mercado com alternativas atuais e lacunas (`market-scan.md`)
- [ ] Declaração do problema aprovada, com métrica de sucesso
- [ ] Jornadas as-is e to-be
- [ ] HMW priorizadas
- [ ] Escopo do MVP: dentro, fora, talvez depois
- [ ] Mapa de telas, com cada tela ligada a um INS ou HMW
- [ ] Protótipo navegável cobrindo a jornada to-be
- [ ] Teste com 3 a 5 pessoas reais, com síntese registrada
- [ ] Hipóteses atualizadas após o teste
- [ ] `discovery-summary.md` escrito

## G2 — Working Backwards
- [ ] Press release de 1 página, com título, subtítulo, problema, solução, citação de usuário e chamada para ação
- [ ] FAQ externo (usuário) e interno (viabilidade, riscos, custos)
- [ ] Proposta de valor: para quem, problema, benefício principal, diferencial
- [ ] Consistência com o problema e o escopo do G1
- [ ] Nenhuma promessa fora do escopo do MVP, ou promessa marcada como "futuro"

## G3 — Domínio
- [ ] Event storming com eventos (`EVT-`), comandos, atores, políticas e pontos quentes
- [ ] Glossário com definição, sinônimos proibidos e exemplo para cada termo
- [ ] Contextos delimitados (`BC-`) e mapa de contextos com as relações
- [ ] Agregados (`AGG-`) com invariantes e fronteiras de consistência
- [ ] Cada jornada to-be coberta por eventos do domínio
- [ ] Termos validados com o vocabulário real dos usuários (INS)

## G4 — Padrões
- [ ] `constitution.md` com os artigos aprovados
- [ ] `stack.md`: stack padrão confirmada ou exceções registradas em ADR
- [ ] Estrutura de pastas do código definida, refletindo os contextos do domínio
- [ ] `definition-of-done.md`
- [ ] `design-system.md`: tokens (cor, tipografia, espaçamento), componentes base, tom de voz, acessibilidade
- [ ] ADRs das decisões estruturais
- [ ] `CLAUDE.md` atualizado (comandos, glossário resumido)
- [ ] Repositório com lint, testes e CI configurados e rodando (esqueleto vazio passa no CI)

## Spec aprovada (por feature)
- [ ] Histórias de usuário priorizadas (P1, P2, P3), cada uma testável de forma independente
- [ ] Cenários de aceite em Dado/Quando/Então
- [ ] Requisitos funcionais (`FR-`) rastreáveis a INS, HMW ou SCR
- [ ] Critérios de sucesso (`SC-`) mensuráveis
- [ ] Nenhum `[PRECISA ESCLARECER]` restante
- [ ] Plan com a checagem da constitution sem violações (ou violações justificadas)
- [ ] Tasks ordenadas, com marcação de paralelismo `[P]` e testes antes da implementação

## Aceite de feature
- [ ] Todos os cenários de aceite passando (testes automatizados)
- [ ] Definition of Done cumprida
- [ ] Revisão do reviewer sem problemas de severidade alta
- [ ] Demonstração apresentada ao usuário (preview, capturas ou roteiro de teste manual)

## G7 — Lançamento
- [ ] Landing page, one-pager e pitch deck coerentes com o press release e o glossário
- [ ] Nenhuma promessa além do que está aceito e em produção
- [ ] Chamada para ação e canal de contato definidos
