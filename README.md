# project-studio

Marketplace do plugin [`product-studio`](product-studio/README.md) para Claude Code e Claude Desktop.

## Instalar

```bash
claude plugin marketplace add matheuszeuch/project-studio
claude plugin install product-studio@project-studio
```

## Atualizar

```bash
claude plugin marketplace update project-studio
claude plugin update product-studio@project-studio
```

O histórico de versões está em [`product-studio/CHANGELOG.md`](product-studio/CHANGELOG.md). Toda mudança sobe o campo `version` em `product-studio/.claude-plugin/plugin.json`; sem isso, o Claude não enxerga a atualização.
