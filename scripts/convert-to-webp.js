#!/usr/bin/env node

/**
 * Script para converter todas as imagens JPG e PNG para WebP
 * Mantém os originais como fallback
 * 
 * Uso: node scripts/convert-to-webp.js
 * 
 * Requer: npm install sharp --save-dev
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurações de qualidade
const WEBP_QUALITY = 85; // 85% de qualidade para WebP
const WEBP_LOSSLESS = false; // false = compressão com perda (menor tamanho)

// Diretórios para processar
const ASSETS_DIR = join(__dirname, '..', 'src', 'assets');

// Extensões suportadas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Processa recursivamente todos os arquivos em um diretório
 */
async function processDirectory(dirPath) {
  const entries = await readdir(dirPath);
  const results = {
    converted: 0,
    skipped: 0,
    errors: 0
  };

  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      // Processar subdiretório
      const subResults = await processDirectory(fullPath);
      results.converted += subResults.converted;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
    } else if (stats.isFile()) {
      // Processar arquivo de imagem
      const ext = extname(fullPath).toLowerCase();
      
      if (IMAGE_EXTENSIONS.includes(ext)) {
        try {
          await convertToWebP(fullPath);
          results.converted++;
        } catch (error) {
          console.error(`❌ Erro ao converter ${fullPath}:`, error.message);
          results.errors++;
        }
      }
    }
  }

  return results;
}

/**
 * Converte uma imagem para WebP
 */
async function convertToWebP(imagePath) {
  const ext = extname(imagePath);
  const webpPath = imagePath.replace(ext, '.webp');
  
  // Verificar se WebP já existe
  try {
    await stat(webpPath);
    console.log(`⏭️  Pulando ${basename(imagePath)} (WebP já existe)`);
    return;
  } catch (error) {
    // WebP não existe, pode converter
  }

  console.log(`🔄 Convertendo: ${basename(imagePath)}`);

  // Converter para WebP
  await sharp(imagePath)
    .webp({
      quality: WEBP_QUALITY,
      lossless: WEBP_LOSSLESS,
      nearLossless: false,
      effort: 6, // 0-6, quanto maior mais lento mas melhor compressão
    })
    .toFile(webpPath);

  // Obter tamanhos para comparação
  const originalStats = await stat(imagePath);
  const webpStats = await stat(webpPath);
  const savedPercent = (((originalStats.size - webpStats.size) / originalStats.size) * 100).toFixed(1);
  const savedKB = ((originalStats.size - webpStats.size) / 1024).toFixed(1);

  console.log(
    `✅ ${basename(imagePath)} → ${basename(webpPath)} ` +
    `(${savedPercent}% menor, economizou ${savedKB}KB)`
  );
}

/**
 * Função principal
 */
async function main() {
  console.log('🚀 Iniciando conversão de imagens para WebP...\n');
  console.log(`📁 Diretório: ${ASSETS_DIR}`);
  console.log(`⚙️  Qualidade WebP: ${WEBP_QUALITY}%`);
  console.log(`⚙️  Lossless: ${WEBP_LOSSLESS ? 'Sim' : 'Não'}\n`);

  const startTime = Date.now();

  try {
    const results = await processDirectory(ASSETS_DIR);
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('\n✨ Conversão concluída!\n');
    console.log(`📊 Estatísticas:`);
    console.log(`   ✅ Convertidas: ${results.converted}`);
    console.log(`   ⏭️  Puladas: ${results.skipped}`);
    console.log(`   ❌ Erros: ${results.errors}`);
    console.log(`   ⏱️  Tempo: ${duration}s`);

    if (results.errors > 0) {
      console.log('\n⚠️  Houve erros durante a conversão. Verifique as mensagens acima.');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Erro fatal:', error);
    process.exit(1);
  }
}

// Executar
main();
