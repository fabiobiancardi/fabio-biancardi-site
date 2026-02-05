# Guia de Deploy no Netlify - Fabio Biancardi Site

Este documento contém instruções passo a passo para hospedar seu site no Netlify usando o plano gratuito e conectar seu domínio personalizado `fabiobiancardi.com.br`.

## Pré-requisitos

- Conta no GitHub com o repositório do projeto
- Conta no Netlify (gratuita)
- Acesso ao painel de controle do seu domínio `fabiobiancardi.com.br`

## Passo 1: Preparar o Repositório no GitHub

1. Faça login em sua conta GitHub
2. Crie um novo repositório chamado `fabio-biancardi-site`
3. Clone o repositório localmente:
   ```bash
   git clone https://github.com/seu-usuario/fabio-biancardi-site.git
   cd fabio-biancardi-site
   ```

4. Copie todos os arquivos do projeto para o repositório
5. Faça commit e push:
   ```bash
   git add .
   git commit -m "Initial commit: Cybersecurity portfolio site"
   git push origin main
   ```

## Passo 2: Conectar ao Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" e escolha "GitHub" como opção de login
3. Autorize o Netlify a acessar seus repositórios GitHub
4. Clique em "New site from Git"
5. Selecione seu repositório `fabio-biancardi-site`

## Passo 3: Configurar Build no Netlify

Na tela de configuração do build:

- **Branch to deploy:** `main`
- **Build command:** `pnpm build`
- **Publish directory:** `dist`

Clique em "Deploy site"

## Passo 4: Configurar Domínio Personalizado

Após o deploy inicial:

1. Vá para a aba "Site settings" no painel do Netlify
2. Clique em "Domain management"
3. Clique em "Add custom domain"
4. Digite seu domínio: `fabiobiancardi.com.br`
5. Clique em "Verify"
6. Siga as instruções para configurar os registros DNS

### Configurar DNS no seu provedor de domínio

Você precisará adicionar um registro CNAME no seu provedor de domínio:

- **Tipo:** CNAME
- **Nome/Host:** `www` (ou deixe em branco para raiz)
- **Valor:** `seu-site.netlify.app`

Se quiser usar o domínio raiz (`fabiobiancardi.com.br`), adicione um registro A:

- **Tipo:** A
- **Nome/Host:** `@` (raiz)
- **Valor:** `75.2.60.5` (ou o IP fornecido pelo Netlify)

## Passo 5: Ativar HTTPS

O Netlify ativa HTTPS automaticamente com certificado SSL gratuito. Você pode verificar em:
- Site settings → Domain management → HTTPS

## Passo 6: Configurações Recomendadas

### Redirecionamento de WWW

No arquivo `netlify.toml` (crie na raiz do projeto):

```toml
[[redirects]]
  from = "https://www.fabiobiancardi.com.br/*"
  to = "https://fabiobiancardi.com.br/:splat"
  status = 301
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Otimizações de Performance

1. **Minificação:** Ativada por padrão no Netlify
2. **Cache:** Configurado automaticamente
3. **Compressão:** Gzip habilitado por padrão

## Passo 7: Monitoramento e Manutenção

### Visualizar Logs de Deploy

1. Acesse o painel do Netlify
2. Clique em "Deploys"
3. Selecione o deploy para ver os logs

### Atualizar o Site

Para atualizar o site após fazer mudanças:

1. Faça as alterações localmente
2. Commit e push para GitHub:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```

3. O Netlify fará deploy automaticamente

## Troubleshooting

### Erro: "Build failed"

Verifique os logs de build no painel do Netlify. Geralmente causado por:
- Dependências não instaladas: Execute `pnpm install`
- Erros de sintaxe: Verifique o arquivo com erro

### Domínio não funciona

1. Aguarde 24-48 horas para propagação DNS
2. Verifique se os registros DNS estão corretos
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Site mostra "Page Not Found"

Certifique-se de que o arquivo `netlify.toml` está configurado corretamente para redirecionar para `index.html`

## Suporte

- **Documentação Netlify:** https://docs.netlify.com
- **Comunidade Netlify:** https://community.netlify.com
- **Status Netlify:** https://www.netlify.com/status

## Próximos Passos

1. Teste todas as seções do site (Sobre, Experiência, Habilidades)
2. Verifique a responsividade em dispositivos móveis
3. Teste os links de contato
4. Configure analytics (opcional)
5. Monitore o desempenho do site

---

**Nota:** O plano gratuito do Netlify inclui:
- 100 GB de largura de banda por mês
- Builds ilimitados
- HTTPS gratuito
- Suporte comunitário

Para mais recursos, você pode fazer upgrade para um plano pago quando necessário.
