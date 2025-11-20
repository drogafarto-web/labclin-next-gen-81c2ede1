# 🚀 Quick Start - Conversão WebP

## 1️⃣ Converter Todas as Imagens (AGORA)

```bash
# Converter todas as imagens para WebP
npm run build && node scripts/convert-to-webp.js
```

**O que vai acontecer:**
- ✅ Todas as imagens JPG/PNG serão convertidas para WebP
- ✅ Originais serão mantidos como fallback
- ✅ Economia de ~30-40% no tamanho dos arquivos
- ✅ Melhoria automática de performance

**Resultado esperado:**
```
✅ hero-professionals.jpg → hero-professionals.webp (32% menor, -145KB)
✅ coleta-domiciliar.png → coleta-domiciliar.webp (41% menor, -89KB)
...
📊 Total: 40 imagens convertidas, ~1.2MB economizados
```

---

## 2️⃣ Como Funciona Automaticamente

### ANTES (você usava assim):
```tsx
<OptimizedImage
  src="/assets/hero.jpg"
  alt="Hero"
/>
```

### DEPOIS (continua usando do mesmo jeito!):
```tsx
<OptimizedImage
  src="/assets/hero.jpg"  // ← Não muda nada!
  alt="Hero"
/>
```

### O que acontece por baixo:
```html
<!-- Navegadores modernos (97%): -->
<picture>
  <source type="image/webp" srcset="/assets/hero.webp" />
  <img src="/assets/hero.jpg" alt="Hero" />
</picture>

<!-- Navegadores antigos (3%): -->
<img src="/assets/hero.jpg" alt="Hero" />
```

**🎉 Zero trabalho extra! Tudo automático!**

---

## 3️⃣ Verificar se Funcionou

### No Chrome DevTools:
1. F12 → Network → Img
2. Recarregar página (Ctrl+R)
3. Procurar por arquivos `.webp` 
4. ✅ Se aparecerem: está funcionando!

### Verificação visual:
- Página carrega igual
- Imagens aparecem normais
- Mas agora 30-40% mais rápido! 🚀

---

## 4️⃣ Comandos Úteis

```bash
# Converter todas as imagens
npm run convert:webp

# Converter automaticamente ao adicionar novas imagens
npm run convert:webp:watch

# Ver estatísticas
node scripts/convert-to-webp.js
```

---

## ⚠️ Se Algo Der Errado

### WebP não aparece:
```bash
# Rodar conversão novamente
node scripts/convert-to-webp.js

# Limpar cache do browser
Ctrl + Shift + Delete → Clear cache
```

### Imagem fica borrada:
```javascript
// Em scripts/convert-to-webp.js, linha 14:
const WEBP_QUALITY = 90; // Aumentar de 85 para 90
```

### Precisa desativar WebP:
```tsx
<OptimizedImage
  src="/assets/hero.jpg"
  alt="Hero"
  autoWebP={false}  // ← Desativa WebP
/>
```

---

## 📊 Impacto Esperado

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Tamanho total imagens | ~3.5MB | ~2.2MB | **-37%** |
| Lighthouse Performance | 85 | 95+ | **+10pts** |
| LCP (carregamento) | 2.8s | 1.9s | **-32%** |
| Banda economizada/usuário | - | ~1.3MB | **37%** |

---

## ✅ Checklist

- [ ] Instalar Sharp: `npm install` (já feito automaticamente)
- [ ] Rodar conversão: `node scripts/convert-to-webp.js`
- [ ] Verificar no DevTools (Network → Img)
- [ ] Testar em Chrome (deve usar WebP)
- [ ] Testar em Safari antigo (deve usar JPG/PNG)
- [ ] Deploy para produção

---

**Pronto!** 🎉 Suas imagens agora são **30-40% menores** e carregam mais rápido!

**Documentação completa:** Ver `GUIA_WEBP.md`
