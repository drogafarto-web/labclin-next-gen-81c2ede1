# 📝 Como Adicionar Scripts npm ao package.json

Como o `package.json` é gerenciado automaticamente, adicione estes scripts manualmente ou peça ao desenvolvedor para adicionar:

## Scripts para Adicionar

Adicionar na seção `"scripts"` do `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "convert:webp": "node scripts/convert-to-webp.js"
  }
}
```

## Uso Depois de Adicionar

```bash
# Converter todas as imagens para WebP
npm run convert:webp
```

## Alternativa: Rodar Diretamente

Se não quiser modificar o package.json, pode rodar diretamente:

```bash
# Rodar script de conversão
node scripts/convert-to-webp.js
```

---

**Nota:** O Sharp já está instalado no projeto (v0.34.5), então não precisa instalar dependências adicionais.
