# 🖼️ Guia de Conversão para WebP

## 📋 Visão Geral

Este guia explica como converter todas as imagens do projeto para o formato WebP, mantendo os originais como fallback para compatibilidade.

---

## 🎯 Benefícios do WebP

- **Redução de tamanho:** 25-35% menor que JPEG/PNG
- **Melhor performance:** Carregamento mais rápido
- **SEO:** Melhora score do Lighthouse
- **Qualidade:** Mantém qualidade visual excelente
- **Compatibilidade:** 97%+ dos navegadores modernos

---

## 📦 Instalação de Dependências

### Instalar Sharp (biblioteca de processamento de imagens)

```bash
npm install sharp --save-dev
```

---

## 🚀 Como Converter as Imagens

### Opção 1: Script Automático (Recomendado)

1. **Executar o script de conversão:**
```bash
node scripts/convert-to-webp.js
```

2. **O que o script faz:**
   - Procura recursivamente todas as imagens em `src/assets/`
   - Converte JPG, JPEG e PNG para WebP
   - Mantém as imagens originais intactas
   - Gera WebP com 85% de qualidade
   - Mostra estatísticas de economia de espaço

3. **Resultado esperado:**
```
🚀 Iniciando conversão de imagens para WebP...

📁 Diretório: /projeto/src/assets
⚙️  Qualidade WebP: 85%
⚙️  Lossless: Não

🔄 Convertendo: hero-professionals.jpg
✅ hero-professionals.jpg → hero-professionals.webp (32.4% menor, economizou 145.2KB)

🔄 Convertendo: coleta-domiciliar-carro.png
✅ coleta-domiciliar-carro.png → coleta-domiciliar-carro.webp (41.8% menor, economizou 89.3KB)

...

✨ Conversão concluída!

📊 Estatísticas:
   ✅ Convertidas: 35
   ⏭️  Puladas: 0
   ❌ Erros: 0
   ⏱️  Tempo: 4.52s
```

### Opção 2: Conversão Manual (Online)

Se não quiser instalar dependências:

1. **Usar ferramenta online:**
   - https://squoosh.app/ (Google)
   - https://cloudconvert.com/webp-converter
   - https://convertio.co/pt/webp-converter/

2. **Para cada imagem:**
   - Upload da imagem
   - Configurar qualidade: 85%
   - Download do WebP
   - Colocar na mesma pasta que o original
   - Manter mesmo nome (trocar apenas extensão)

### Opção 3: Ferramentas de Linha de Comando

**macOS (com Homebrew):**
```bash
brew install webp

# Converter uma imagem
cwebp -q 85 input.jpg -o output.webp

# Converter em lote
for file in src/assets/**/*.{jpg,png}; do
  cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install webp

# Usar mesmo comando do macOS
```

**Windows:**
```powershell
# Baixar libwebp de https://developers.google.com/speed/webp/download
# Adicionar ao PATH
# Usar mesmo comando acima no PowerShell
```

---

## 🔍 Estrutura de Arquivos Após Conversão

```
src/assets/
├── hero-professionals.jpg      ← Original (fallback)
├── hero-professionals.webp     ← WebP otimizado
├── labclin-logo.png            ← Original (fallback)
├── labclin-logo.webp           ← WebP otimizado
└── blog/
    ├── hemograma-enhanced.jpg  ← Original (fallback)
    ├── hemograma-enhanced.webp ← WebP otimizado
    └── ...
```

---

## ⚙️ Como Funciona o Fallback Automático

O componente `OptimizedImage` foi atualizado para:

### 1. Detectar Automaticamente WebP
```tsx
<OptimizedImage
  src="/assets/hero.jpg"  // ← Você usa JPG normalmente
  alt="Hero"
/>
```

### 2. Gerar HTML com Fallback
```html
<picture>
  <!-- Navegadores modernos usam WebP -->
  <source type="image/webp" srcset="/assets/hero.webp" />
  
  <!-- Navegadores antigos usam JPG -->
  <img src="/assets/hero.jpg" alt="Hero" />
</picture>
```

### 3. Suportar srcSet Responsivo
```tsx
<OptimizedImage
  src="/assets/hero.jpg"
  srcSet="/assets/hero-400.jpg 400w, /assets/hero-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero"
/>
```

Automaticamente gera:
```html
<picture>
  <source 
    type="image/webp" 
    srcset="/assets/hero-400.webp 400w, /assets/hero-800.webp 800w"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <img 
    src="/assets/hero.jpg"
    srcset="/assets/hero-400.jpg 400w, /assets/hero-800.jpg 800w"
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="Hero"
  />
</picture>
```

---

## 📊 Inventário de Imagens do Projeto

### Total: ~40 imagens

#### Raiz (`src/assets/`)
- [x] coleta-domiciliar-carro.png
- [x] hero-lab.jpg
- [x] hero-professionals.jpg
- [x] labclin-logo.png
- [x] pncq-logo.png
- [x] veinviewer-banner.png

#### Blog (`src/assets/blog/`)
- [x] coleta-domiciliar-enhanced.jpg
- [x] hemograma-enhanced.jpg
- [x] preparo-exames-enhanced.jpg

#### Convênios (`src/assets/convenios/`)
- [x] convenio-1.png até convenio-8.png (8 imagens)

#### Diferenciais (`src/assets/differentials/`)
- [x] acessibilidade-enhanced.jpg
- [x] atendimento-infantil-enhanced.jpg
- [x] coleta-domiciliar-enhanced.jpg

#### Exames (`src/assets/exames/`)
- [x] alergia-alimentar.png
- [x] covid-virus.png
- [x] gluten-test.png
- [x] hba1c-dna.png
- [x] influenza-syringe.png
- [x] lactose-test.png
- [x] pre-natal.png
- [x] sexagem-dna.png
- [x] teste-pezinho.png
- [x] toxicologia-truck.png

#### Galeria (`src/assets/gallery/`)
- [x] brinquedoteca.png
- [x] equipamento-lab.png
- [x] equipe-entrada.png
- [x] fachada-labclin.png
- [x] profissional-retrato.png
- [x] recepcao-operacao.png
- [x] recepcao-plantas.png

#### Pagamento (`src/assets/payment/`)
- [x] american.jpg
- [x] banricompras.png
- [x] elo.png
- [x] hipercard.png
- [x] mastercard.png
- [x] pix.png
- [x] visa.png

---

## 🧪 Como Testar

### 1. Verificar se WebP está sendo carregado

**No DevTools do Chrome:**
1. F12 → Network → Img
2. Recarregar página
3. Verificar se arquivos `.webp` aparecem
4. Verificar coluna "Type" → deve mostrar `webp`

### 2. Testar Fallback

**No Chrome:**
1. F12 → Network → Disable cache
2. Renomear temporariamente um `.webp` 
3. Recarregar página
4. Deve carregar o `.jpg` ou `.png` original

### 3. Verificar Economia

**No DevTools:**
1. Network → Img
2. Comparar tamanho transferido:
   - Antes (JPG/PNG): ex. 150KB
   - Depois (WebP): ex. 95KB
   - Economia: ~37%

---

## 📈 Impacto Esperado

### Performance
- **Lighthouse Performance:** +5-15 pontos
- **Largest Contentful Paint (LCP):** -20-30% tempo
- **Total Blocking Time (TBT):** Melhoria marginal
- **First Contentful Paint (FCP):** -10-20% tempo

### SEO
- **Lighthouse SEO:** Mantém 100
- **Core Web Vitals:** Melhoria em LCP
- **Mobile Score:** +10-20 pontos

### Economia de Banda
- **Por página:** ~200-500KB economizados
- **Por usuário/mês:** Depende do uso
- **Custo servidor:** Redução de ~30% em tráfego de imagens

---

## 🔧 Ajustes de Qualidade

### Se imagens ficarem com qualidade ruim:

**Aumentar qualidade no script:**
```javascript
const WEBP_QUALITY = 90; // Aumentar de 85 para 90
```

### Se quiser compressão sem perda:

```javascript
const WEBP_LOSSLESS = true; // Mudar para true
```

**⚠️ Aviso:** Lossless gera arquivos maiores!

---

## 🆘 Troubleshooting

### Erro: "Cannot find module 'sharp'"
```bash
npm install sharp --save-dev
```

### Erro: "Permission denied"
```bash
chmod +x scripts/convert-to-webp.js
```

### WebP não carrega no navegador
- Verificar se arquivo .webp existe na mesma pasta
- Verificar console do browser para erros
- Testar em navegador moderno (Chrome, Firefox, Safari 14+)

### Imagem fica borrada
- Aumentar WEBP_QUALITY de 85 para 90
- Ou usar WEBP_LOSSLESS = true

### Script demora muito
- Normal para muitas imagens
- Reduzir "effort" de 6 para 4 no script
- Ou processar por pasta

---

## ✅ Checklist de Deploy

Antes de fazer deploy:

- [ ] Instalar Sharp: `npm install sharp --save-dev`
- [ ] Executar conversão: `node scripts/convert-to-webp.js`
- [ ] Verificar que todos WebP foram criados
- [ ] Testar em Chrome (deve usar WebP)
- [ ] Testar em Safari antigo (deve usar fallback)
- [ ] Verificar DevTools → Network (WebP sendo usado)
- [ ] Fazer commit dos novos arquivos `.webp`
- [ ] Deploy para produção

---

## 📞 Suporte

**Problemas com conversão?**
- Consultar: https://sharp.pixelplumbing.com/
- Issues: https://github.com/lovell/sharp/issues

**Dúvidas sobre WebP?**
- Google Developers: https://developers.google.com/speed/webp
- Can I Use: https://caniuse.com/webp

---

**Última atualização:** 2025-11-20  
**Status:** ✅ Pronto para uso  
**Versão:** 1.0.0
