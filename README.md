# Labclin - Laboratório de Análises Clínicas 🔬

Site institucional moderno e otimizado para o Labclin, laboratório de análises clínicas com mais de 58 anos de tradição em Rio Pomba/MG e região.

## 📋 Sobre o Projeto

Plataforma web completa desenvolvida com React, TypeScript e Tailwind CSS, oferecendo:

- 🏥 Informações sobre exames e serviços
- 📍 Localização de unidades (Rio Pomba, Guarani, Mercês, Silveirânia)
- 📅 Agendamento online via WhatsApp
- 🏠 Solicitação de coleta domiciliar
- 📊 Acesso a resultados de exames
- 📝 Blog com conteúdo educativo
- 📱 Design 100% responsivo
- ♿ Acessibilidade WCAG 2.1 AA
- 🚀 Performance otimizada (Lighthouse >90)

## 🛠️ Tecnologias

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form + Zod
- **Analytics**: Google Analytics 4
- **Error Tracking**: Sentry (opcional)
- **Testing**: Vitest, Testing Library
- **SEO**: React Helmet, Structured Data (JSON-LD)

## 🚀 Setup Local

### Pré-requisitos

- Node.js 18+ e npm
- Git

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/labclin.git
cd labclin

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

## 📝 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
# Contato Principal
VITE_WHATSAPP_NUMBER=5532991990239
VITE_CONTACT_EMAIL=llabclin3@gmail.com

# Google Analytics 4 (opcional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Sentry Error Tracking (opcional)
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# Ambiente
VITE_ENVIRONMENT=production
```

**⚠️ IMPORTANTE**: Nunca commite o arquivo `.env.local` no Git!

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento (porta 8080)

# Build
npm run build           # Cria build de produção otimizado
npm run preview         # Preview do build de produção

# Qualidade de Código
npm run lint            # Executa ESLint
npm run type-check      # Verifica tipos TypeScript

# Testes
npm run test            # Executa testes com Vitest
npm run test:ui         # Executa testes com UI interativa
npm run test:coverage   # Gera relatório de cobertura de testes
```

## 🏗️ Estrutura do Projeto

```
src/
├── assets/              # Imagens, ícones, recursos estáticos
│   ├── blog/           # Imagens de posts do blog
│   ├── convenios/      # Logos de convênios
│   ├── exames/         # Ícones de exames
│   └── gallery/        # Fotos das instalações
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes shadcn/ui
│   ├── cards/          # Cards específicos
│   └── forms/          # Componentes de formulário
├── config/             # Arquivos de configuração
│   └── constants.ts    # Constantes da aplicação
├── hooks/              # Custom React Hooks
├── lib/                # Utilitários e configurações
│   ├── analytics.ts    # Google Analytics wrapper
│   ├── logger.ts       # Sistema de logging estruturado
│   ├── validators.ts   # Schemas Zod de validação
│   └── utils.ts        # Funções utilitárias
├── pages/              # Páginas da aplicação (rotas)
│   └── blog/           # Posts do blog
├── utils/              # Funções utilitárias
│   ├── formatters.ts   # Formatadores de dados
│   └── sanitizers.ts   # Sanitização de inputs
└── main.tsx            # Entry point da aplicação
```

## 🎨 Design System

O projeto utiliza um design system baseado em tokens semânticos CSS:

- **Cores**: Definidas em `src/index.css` usando HSL
- **Componentes**: shadcn/ui customizados em `src/components/ui/`
- **Tailwind**: Configuração em `tailwind.config.ts`

### Temas (Light/Dark)

```tsx
// Cores são gerenciadas automaticamente pelo next-themes
// Tokens disponíveis:
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground
--card, --popover, --border, --input, --ring
```

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Executar com UI interativa
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

Cobertura mínima exigida: 70% (linhas, funções, branches, statements)

## 📊 SEO e Analytics

### SEO

- ✅ Meta tags otimizadas (title, description, keywords)
- ✅ Open Graph tags para redes sociais
- ✅ Structured Data (JSON-LD) para LocalBusiness
- ✅ Sitemap.xml e robots.txt
- ✅ Canonical URLs
- ✅ Lazy loading de imagens
- ✅ Performance otimizada (code splitting)

### Analytics

Eventos rastreados:
- `page_view` - Visualizações de página
- `form_submit` - Envio de formulários
- `whatsapp_click` - Cliques no botão WhatsApp
- `checkup_generated` - Geração de checkup personalizado
- Web Vitals (CLS, INP, FCP, LCP, TTFB)

## 🚀 Deploy

Para instruções detalhadas de deploy, consulte [DEPLOY.md](./DEPLOY.md)

### Deploy Rápido via Lovable

1. Acesse [Lovable Project](https://lovable.dev/projects/94b59b67-ebd6-4495-a786-6c9fe9d64bab)
2. Clique em "Share" → "Publish"
3. Configure variáveis de ambiente no painel
4. Clique em "Deploy"

### Deploy Manual

```bash
# 1. Build de produção
npm run build

# 2. Preview local do build
npm run preview

# 3. Deploy da pasta dist/ para seu hosting preferido
```

## 🔒 Segurança

- ✅ Sanitização de inputs com DOMPurify
- ✅ Validação de formulários com Zod
- ✅ Rate limiting no cliente
- ✅ Content Security Policy
- ✅ HTTPS obrigatório em produção
- ✅ Secrets via variáveis de ambiente

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Propriedade do Labclin - Laboratório de Análises Clínicas Ltda.

## 📞 Contato

- **WhatsApp**: (32) 99199-0239
- **Email**: llabclin3@gmail.com
- **Site**: https://labclinmg.com.br

## 🔗 Links Úteis

- [Lovable Project](https://lovable.dev/projects/94b59b67-ebd6-4495-a786-6c9fe9d64bab)
- [Documentação Lovable](https://docs.lovable.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
