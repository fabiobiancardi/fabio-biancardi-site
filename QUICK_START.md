# Guia Rápido - Deploy no Netlify

## 5 Passos Simples para Colocar seu Site no Ar

### 1. Prepare o GitHub
```bash
# Clone ou crie um repositório
git init
git add .
git commit -m "Site Cybersecurity"
git push origin main
```

### 2. Acesse Netlify
- Vá para [netlify.com](https://netlify.com)
- Clique em "Sign up with GitHub"
- Autorize o acesso

### 3. Crie um Novo Site
- Clique em "New site from Git"
- Selecione seu repositório
- Netlify detectará automaticamente:
  - Build command: `pnpm build`
  - Publish directory: `dist`

### 4. Aguarde o Deploy
- Netlify fará o build automaticamente
- Você receberá um URL como: `seu-site.netlify.app`
- Teste o site neste URL

### 5. Conecte seu Domínio
- Em "Site settings" → "Domain management"
- Clique em "Add custom domain"
- Digite: `fabiobiancardi.com.br`
- Configure os registros DNS no seu provedor

## Registros DNS Necessários

Adicione no seu provedor de domínio:

**Para www:**
- Tipo: CNAME
- Nome: www
- Valor: seu-site.netlify.app

**Para raiz (opcional):**
- Tipo: A
- Nome: @
- Valor: 75.2.60.5

## Próximas Atualizações

Para atualizar o site:
```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Netlify fará deploy automaticamente!

## Suporte

- Documentação: https://docs.netlify.com
- Status: https://www.netlify.com/status

---

**Dica:** O plano gratuito do Netlify é perfeito para portfólios e sites estáticos. Você pode fazer upgrade quando precisar de recursos adicionais.
