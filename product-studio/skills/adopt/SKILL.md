---
name: adopt
description: Adota um produto que já existe no método product-studio, reconstruindo por engenharia reversa os artefatos de docs/ (charter, descoberta, posicionamento, domínio, padrões, specs e ADRs) a partir do código e dos documentos atuais, marcando o que não tem evidência como hipótese e fechando por retroativo só os portões que descrevem o que já está construído. Use quando o usuário disser "adotar o método num projeto existente", "aplicar o product-studio no meu app", "engenharia reversa dos docs" ou "migrar a documentação para o formato do product-studio".
---

# Adoção de produto existente

O método começa do zero. Um produto que já tem código, specs e decisões não precisa refazer as fases: precisa ter os artefatos reconstruídos, com a origem de cada um declarada e com os buracos à vista.

**Princípio:** reconstruir descreve o que foi construído; não prova que era o certo. Tudo o que não tem evidência primária vira hipótese.

## Pré-requisitos

- O repositório existe e o usuário quer a estrutura de `docs/` do método (`references/artifact-map.md` da skill `product-method`).
- Não existe arquivo de status ainda. Se existir, trate como retomada.

## 1. Proteger o projeto antes de criar o status

Os hooks passam a agir assim que o arquivo de status existe. Num projeto adotado, o guard bloquearia o código até os portões serem marcados.

1. Crie primeiro o `.product-studio.json`, respeitando as convenções do projeto:
   - `statusFile`: se o plugin ainda estiver instalado com outra versão, ou se o projeto preferir outro nome.
   - `specsDir` e `specApprovedStatus`: onde as specs vivem hoje e qual texto marca uma spec como aprovada (por exemplo, `["aceita"]`). Specs em arquivo único (`<nnn>-nome.md`) são aceitas.
   - `productionPaths` e `unguardedPaths`: as pastas de código de produção e as exceções (scripts operacionais, por exemplo).
2. Só depois crie o arquivo de status.

## 2. Inventário (sem escrever artefatos)

Levante o que existe e monte uma tabela, uma linha por artefato do mapa:

| Artefato | Fonte no projeto | Situação | Observação |
|---|---|---|---|
| `00-charter/charter.md` | <arquivos> | reconstruível / parcial / sem fonte / só mover | <o que falta> |

Regras do inventário:

- **Só mover:** o artefato já existe com outro nome ou lugar (specs, ADRs, glossário, auditorias como retros).
- **Reconstruível:** a informação existe espalhada e pode ser consolidada sem inventar.
- **Parcial:** parte existe; o que falta vira hipótese ou pendência.
- **Sem fonte:** não há material. Não gere o artefato. Ele entra na lista de gaps.
- Insights, resultados de teste e entrevistas **nunca** são reconstruíveis a partir de código ou de documentos internos. Sem registro de conversa, dado de uso ou observação, eles são gaps.

Apresente o inventário, a lista de gaps e a proposta de portões (passo 5) ao usuário. Nenhum arquivo é escrito antes da aprovação.

## 3. Mover (commit isolado)

1. Mova com `git mv` o que for "só mover", e reescreva os caminhos em todo o repositório (links de documentos, cabeçalhos de componentes, scripts, `CLAUDE.md`, agentes).
2. Rode os lints e um verificador de links quebrados.
3. Faça um commit que contém **só** o movimento e a reescrita de caminhos. Nenhuma mudança de conteúdo no mesmo diff.

Não renumere IDs existentes. Se o projeto já cita IDs no código (por exemplo, regras numeradas globais), eles continuam valendo; os prefixos do método (`FR-`, `SC-`) só entram em specs novas.

## 4. Reconstruir (commits por fase)

Para cada artefato "reconstruível" ou "parcial", gere o arquivo no modelo da fase correspondente, com este cabeçalho logo abaixo do título:

```markdown
> **Origem:** reconstruído por engenharia reversa em <AAAA-MM-DD> a partir de <arquivos>.
> Descreve o produto construído, não uma descoberta. Itens sem evidência primária estão marcados como `HYP-`.
```

Regras:

- Cite a fonte de cada afirmação relevante (arquivo e seção).
- Afirmação sem fonte vira `HYP-xx` em `01-discovery/hypotheses.md`, com o status `não validada`.
- Personas e jornadas reconstruídas descrevem quem o produto atende e o caminho que ele oferece. Diga isso no texto.
- Documentos grandes são divididos na reconstrução (um agregado por arquivo, um contexto por glossário), não copiados inteiros.
- Um commit por fase (`docs: reconstrói 03-domain a partir de <fonte>`).

## 5. Portões

| Portão | Pode ser retroativo? | Condição |
|---|---|---|
| G0 | Sim | O usuário aprova o charter reconstruído. Métrica norte e critério de parada ausentes são preenchidos com ele antes, ou ficam como ressalva registrada. |
| G1 | **Não** | Exige evidência primária. Fica aberto até a skill `design-thinking` cobrir os gaps. |
| G2 | Não | Depende do G1. O posicionamento reconstruído fica como rascunho. |
| G3 | Sim | O domínio reconstruído bate com o código. |
| G4 | Sim | Os padrões reconstruídos são os que o código e os lints já aplicam. |

Marque o portão retroativo assim, sem mudar o formato do checkbox:

```markdown
- [x] G3 Domínio — modelo aprovado (retroativo AAAA-MM-DD)
```

Os hooks contam esse portão como aprovado e o SessionStart o exibe como 🔁. Registre cada um no "Registro de decisões", com a fonte usada.

## 6. Fechar

1. Atualize a "Fase atual" para a fase real do produto (normalmente 5 ou 6), mesmo com o G1 aberto, e registre isso como decisão.
2. Atualize o `CLAUDE.md` do projeto para apontar para a nova estrutura, sem apagar regras próprias que o método não cobre.
3. Apresente ao usuário: o que foi movido, o que foi reconstruído, a lista de gaps e o plano para cobri-los (normalmente `design-thinking` nas etapas de Empatia e Teste).
4. Ofereça a skill `retro`: projetos adotados costumam trazer práticas que o método não tem.

## Quando parar e perguntar

- Duas fontes internas se contradizem sobre o mesmo fato (por exemplo, o público-alvo mudou e só um documento foi atualizado).
- Um artefato só pode ser gerado inventando conteúdo.
- O move exigiria alterar código de produção além de caminhos em comentários e scripts.
- Parte do projeto está congelada ou fora de uso: pergunte se ela entra na adoção.
