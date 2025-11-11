# 🚀 Guia de Deploy - Labclin

Este documento contém instruções detalhadas para fazer deploy do site Labclin em produção.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- [ ] Todos os testes passam (`npm run test`)
- [ ] Build local funciona (`npm run build && npm run preview`)
- [ ] Lint passa sem erros (`npm run lint`)
- [ ] Variáveis de ambiente estão configuradas
- [ ] Google Analytics ID está configurado (se aplicável)
- [ ] Sentry DSN está configurado (se aplicável)

## 🌐 Opções de Deploy

### Opção 1: Deploy via Lovable (Recomendado)

A maneira mais simples de fazer deploy é através do painel Lovable.

#### Passos:

1. **Acesse o Projeto Lovable**
   - URL: https://lovable.dev/projects/94b59b67-ebd6-4495-a786-6c9fe9d64bab

2. **Configure Variáveis de Ambiente**
   ```
   Project Settings > Environment Variables
   ```
   
   Adicione as seguintes variáveis:
   ```
   VITE_WHATSAPP_NUMBER=5532991990239
   VITE_CONTACT_EMAIL=llabclin3@gmail.com
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
   VITE_ENVIRONMENT=production
   ```

3. **Publique o Site**
   - Clique em "Share" no canto superior direito
   - Selecione "Publish"
   - Aguarde o build finalizar
   - Site estará disponível em `https://seu-projeto.lovable.app`

4. **Configure Domínio Customizado (Opcional)**
   ```
   Project > Settings > Domains > Connect Domain
   ```
   
   - Adicione seu domínio (ex: `labclinmg.com.br`)
   - Configure DNS conforme instruções
   - Aguarde propagação (pode levar até 48h)

### Opção 2: Deploy Manual (Vercel)

#### Pré-requisitos:
- Conta na Vercel
- Vercel CLI instalado (`npm i -g vercel`)

#### Passos:

1. **Login na Vercel**
   ```bash
   vercel login
   ```

2. **Primeiro Deploy**
   ```bash
   vercel
   ```
   
   Responda as perguntas:
   - Set up and deploy? `Y`
   - Which scope? `Selecione sua conta`
   - Link to existing project? `N`
   - Project name? `labclin`
   - Directory? `./`

3. **Configure Variáveis de Ambiente**
   ```bash
   vercel env add VITE_WHATSAPP_NUMBER
   vercel env add VITE_CONTACT_EMAIL
   vercel env add VITE_GA_TRACKING_ID
   vercel env add VITE_SENTRY_DSN
   vercel env add VITE_ENVIRONMENT
   ```

4. **Deploy para Produção**
   ```bash
   vercel --prod
   ```

### Opção 3: Deploy Manual (Netlify)

#### Pré-requisitos:
- Conta na Netlify
- Netlify CLI instalado (`npm i -g netlify-cli`)

#### Passos:

1. **Login na Netlify**
   ```bash
   netlify login
   ```

2. **Build Local**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Configure Variáveis de Ambiente**
   - Acesse: Site Settings > Environment Variables
   - Adicione todas as variáveis do `.env.example`

### Opção 4: Deploy Manual (Outros Hosts)

Para outros hosts (AWS S3, CloudFlare Pages, GitHub Pages, etc.):

1. **Build de Produção**
   ```bash
   npm run build
   ```

2. **Upload da Pasta dist/**
   - Faça upload de todo o conteúdo da pasta `dist/` para seu servidor
   - Configure servidor para SPA (Single Page Application)

3. **Configuração do Servidor**

   **Nginx** (nginx.conf):
   ```nginx
   server {
     listen 80;
     server_name labclinmg.com.br;
     root /var/www/labclin/dist;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }

     # Cache assets
     location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }

     # Gzip
     gzip on;
     gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

   **Apache** (.htaccess):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>

   # Cache assets
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access 1 year"
     ExpiresByType image/jpeg "access 1 year"
     ExpiresByType image/gif "access 1 year"
     ExpiresByType image/png "access 1 year"
     ExpiresByType text/css "access 1 month"
     ExpiresByType application/javascript "access 1 month"
   </IfModule>
   ```

## 🔒 Variáveis de Ambiente em Produção

### Obrigatórias:
```env
VITE_WHATSAPP_NUMBER=5532991990239
VITE_CONTACT_EMAIL=llabclin3@gmail.com
VITE_ENVIRONMENT=production
```

### Opcionais mas Recomendadas:
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX    # Google Analytics
VITE_SENTRY_DSN=https://xxxxx        # Error tracking
```

**⚠️ IMPORTANTE**: 
- Nunca commite `.env.local` no Git
- Use `.env.example` como referência
- Configure variáveis diretamente no painel do host

## ✅ Checklist Pré-Deploy

### Código
- [ ] Todos os testes passam (`npm run test`)
- [ ] Cobertura de testes ≥70%
- [ ] Lint sem erros (`npm run lint`)
- [ ] Build local funciona (`npm run build`)
- [ ] Preview funciona (`npm run preview`)

### SEO
- [ ] Sitemap.xml atualizado
- [ ] Robots.txt configurado
- [ ] Meta tags em todas as páginas
- [ ] Open Graph tags configuradas
- [ ] Structured data (JSON-LD) implementado

### Performance
- [ ] Imagens otimizadas (lazy loading)
- [ ] Code splitting implementado
- [ ] Bundle size otimizado (<500KB inicial)
- [ ] Lighthouse score >90 em todas as métricas

### Segurança
- [ ] HTTPS configurado
- [ ] Headers de segurança configurados
- [ ] Inputs sanitizados
- [ ] Rate limiting implementado
- [ ] Secrets via env vars

### Analytics
- [ ] Google Analytics configurado
- [ ] Eventos customizados testados
- [ ] Web Vitals tracking funcionando
- [ ] Sentry configurado (opcional)

### Conteúdo
- [ ] Textos revisados (sem erros)
- [ ] Links testados (sem 404)
- [ ] Formulários testados
- [ ] WhatsApp links funcionando
- [ ] Telefones e emails corretos

## 🔄 Procedimento de Rollback

Se algo der errado após o deploy:

### Via Lovable:
1. Acesse: Project > Deployments
2. Selecione o deployment anterior estável
3. Clique em "Rollback to this version"

### Via Vercel:
```bash
# Liste deployments
vercel ls

# Faça rollback para deployment específico
vercel rollback [deployment-url]
```

### Via Netlify:
1. Site Settings > Deploys
2. Selecione deploy anterior
3. Clique em "Publish deploy"

### Manual:
1. Faça checkout do commit anterior estável
   ```bash
   git checkout [commit-hash]
   ```
2. Refaça o build
   ```bash
   npm run build
   ```
3. Faça deploy novamente

## 📊 Monitoramento Pós-Deploy

### Imediatamente Após Deploy:

1. **Teste Funcional**
   - [ ] Página inicial carrega
   - [ ] Navegação funciona
   - [ ] Formulários enviam
   - [ ] Links WhatsApp funcionam
   - [ ] Resultados carregam (iframe)

2. **Teste em Dispositivos**
   - [ ] Desktop (Chrome, Firefox, Safari)
   - [ ] Mobile (iOS Safari, Android Chrome)
   - [ ] Tablet

3. **Verifique Analytics**
   - [ ] Google Analytics recebendo eventos
   - [ ] Web Vitals sendo coletados
   - [ ] Nenhum erro no console

4. **Teste Performance**
   - [ ] Lighthouse Desktop >90
   - [ ] Lighthouse Mobile >90
   - [ ] PageSpeed Insights >90

### Primeiras 24 Horas:

- Monitore Sentry para erros
- Verifique Google Analytics para tráfego
- Monitore Web Vitals
- Verifique logs do servidor
- Teste formulários de contato

### Primeira Semana:

- Analise métricas de conversão
- Verifique taxa de rejeição
- Identifique páginas com problemas
- Otimize páginas lentas

## 🐛 Troubleshooting

### Build Falha

```bash
# Limpe cache e reinstale dependências
rm -rf node_modules dist
npm install
npm run build
```

### Variáveis de Ambiente Não Carregam

- Verifique se variáveis começam com `VITE_`
- Reinicie servidor de desenvolvimento
- No build: variáveis são substituídas em tempo de build
- Recrie o build após alterar variáveis

### Rotas Não Funcionam (404)

Configure servidor para SPA (ver seção de configuração acima)

### Analytics Não Funciona

- Verifique se `VITE_GA_TRACKING_ID` está configurado
- Verifique console para erros
- Teste em modo anônimo (sem ad blockers)

### Performance Ruim

```bash
# Analise bundle
npm run build -- --mode production
npx vite-bundle-visualizer
```

## 📞 Suporte

Em caso de problemas:

1. Verifique logs do servidor
2. Consulte documentação do host
3. Entre em contato com suporte Lovable
4. Revise este documento

---

**Última atualização**: 2025-01-20

**Responsável**: Equipe de Desenvolvimento Labclin
