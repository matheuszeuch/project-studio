# Página "em breve", domínio e DNS

Publicar uma página "em breve" logo no começo garante o domínio no ar, testa o deploy e dá um endereço para o protótipo (fase 1). Não é código de produção: é um site estático provisório, fora das `productionPaths`, e não passa pelo G4.

## Arquivos

### `site/index.html`
Só o nome do produto e "Em breve". Sem descrição do produto, sem promessas (o posicionamento só existe depois do G2) e, em produtos regulados, nada com cara de anúncio.

```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title><Produto> — em breve</title>
<style>
  * { box-sizing: border-box; margin: 0; }
  body { min-height: 100vh; display: grid; place-items: center; padding: 24px; text-align: center;
         background: #111; color: #f5f5f5; font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  h1 { font-size: 2rem; margin-bottom: .5rem; }
  .soon { text-transform: uppercase; letter-spacing: .12em; font-size: .85rem; font-weight: 600; opacity: .8; }
</style>
</head>
<body>
<main><h1><Produto></h1><div class="soon">Em breve</div></main>
</body>
</html>
```

### `vercel.json`
Site estático, sem framework. `"framework": null` prevalece sobre o painel da Vercel e evita o erro "No Next.js version detected" quando o projeto foi criado com o preset Next.js e o repositório ainda não tem `package.json`.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "installCommand": "",
  "buildCommand": "rm -rf dist && mkdir -p dist/site && cp site/index.html dist/site/index.html && if [ -f prototype/index.html ]; then mkdir -p dist/poc && cp prototype/index.html dist/poc/index.html; fi",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/", "has": [{ "type": "host", "value": "poc.<dominio>" }], "destination": "/poc/index.html" },
    { "source": "/:path+", "has": [{ "type": "host", "value": "poc.<dominio>" }], "destination": "/poc/index.html" },
    { "source": "/", "destination": "/site/index.html" }
  ],
  "headers": [
    { "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
  ]
}
```

Armadilhas já vividas:
- **Nada de `index.html` na raiz de `dist/`.** A Vercel serve arquivos antes de aplicar rewrites; com um índice na raiz, o subdomínio `poc` mostraria o "em breve".
- **`/:path*` não casa com `/`.** Por isso há uma regra explícita para `/` no host `poc`.
- **Nunca publique a raiz do repositório** (`outputDirectory` fora de `dist/`): `docs/` tem charter, decisões e dados do cliente.
- **`noindex` em tudo** até o lançamento (G7).
- Ao começar o app (após o G4), remova `framework`, `installCommand`, `buildCommand`, `outputDirectory` e os rewrites, e registre no `STATUS.md`.

## Instruções ao usuário

O agente não configura domínio nem DNS sozinho (conta de terceiros, mudança externa). Entregue este passo a passo e confira depois.

1. **Vercel → Add New → Project**, importe o repositório do GitHub. O preset do painel não importa: o `vercel.json` manda.
2. **Settings → Domains** do projeto, adicione:
   - `<dominio>` (principal);
   - `www.<dominio>`, com redirecionamento para `<dominio>`;
   - `poc.<dominio>`, para o protótipo (fase 1);
   - opcional: `app.<dominio>`, reservado para o app.
3. **No provedor de DNS**, crie exatamente os registros que a tela de domínios da Vercel mostrar para cada nome (hoje, em geral, `CNAME` para um alvo `*.vercel-dns-0xx.com`; em provedores sem CNAME na raiz, `A` para o IP indicado).
   - **Cloudflare:** deixe o proxy **desligado** ("DNS only", nuvem cinza), senão a Vercel não emite o certificado. Ignore o aviso de "proxying is required".
4. Espere a Vercel mostrar **Valid Configuration** em todos os domínios.
5. **Se o domínio não abrir no seu computador** mas a Vercel diz que está válido, é cache de DNS negativo. No macOS:
   ```bash
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```
   Ou teste pelo celular no 4G.

## Verificação (sessão principal)

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://<dominio>/
curl -sS https://<dominio>/ | grep -o "<title>[^<]*"
curl -sS https://poc.<dominio>/ | grep -o "<title>[^<]*"
```
Se o `curl` local não resolver o nome, teste com `--resolve <dominio>:443:<ip>` usando o IP de `dig +short <dominio> @1.1.1.1`.

Registre no `STATUS.md`: domínio, subdomínios, provedor de DNS e a data em que ficou no ar.
