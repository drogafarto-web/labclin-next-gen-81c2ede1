#!/usr/bin/env node

/**
 * Script para converter todas as imagens JPG e PNG para WebP
 * Processa tanto /src/assets/ quanto /public/images/
 * Mantém os originais como fallback
 * 
 * Uso: node scripts/convert-to-webp.js
 * 
 * Requer: npm install sharp --save-dev
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurações de qualidade
const WEBP_QUALITY = 85;
const WEBP_LOSSLESS = false;

// Diretórios para processar
const DIRECTORIES = [
  join(__dirname, '..', 'src', 'assets'),
  join(__dirname, '..', 'public', 'images'),
];

// Extensões suportadas
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Processa recursivamente todos os arquivos em um diretório
 */
async function processDirectory(dirPath) {
  let entries;
  try {
    entries = await readdir(dirPath);
  } catch (error) {
    console.log(`⚠️  Diretório não encontrado: ${dirPath}`);
    return { converted: 0, skipped: 0, errors: 0, savedBytes: 0 };
  }

  const results = {
    converted: 0,
    skipped: 0,
    errors: 0,
    savedBytes: 0
  };

  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subResults = await processDirectory(fullPath);
      results.converted += subResults.converted;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
      results.savedBytes += subResults.savedBytes;
    } else if (stats.isFile()) {
      const ext = extname(fullPath).toLowerCase();
      
      if (IMAGE_EXTENSIONS.includes(ext)) {
        try {
          const saved = await convertToWebP(fullPath);
          if (saved > 0) {
            results.converted++;
            results.savedBytes += saved;
          } else {
            results.skipped++;
          }
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
 * @returns {number} Bytes economizados (0 se pulou)
 */
async function convertToWebP(imagePath) {
  const ext = extname(imagePath);
  const webpPath = imagePath.replace(ext, '.webp');
  
  // Verificar se WebP já existe
  try {
    await stat(webpPath);
    console.log(`⏭️  Pulando ${basename(imagePath)} (WebP já existe)`);
    return 0;
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
      effort: 6,
    })
    .toFile(webpPath);

  // Obter tamanhos para comparação
  const originalStats = await stat(imagePath);
  const webpStats = await stat(webpPath);
  const savedBytes = originalStats.size - webpStats.size;
  const savedPercent = ((savedBytes / originalStats.size) * 100).toFixed(1);
  const savedKB = (savedBytes / 1024).toFixed(1);

  console.log(
    `✅ ${basename(imagePath)} → ${basename(webpPath)} ` +
    `(${savedPercent}% menor, economizou ${savedKB}KB)`
  );

  return savedBytes;
}

/**
 * Função principal
 */
async function main() {
  console.log('🚀 Iniciando conversão de imagens para WebP...\n');
  console.log(`⚙️  Qualidade WebP: ${WEBP_QUALITY}%`);
  console.log(`⚙️  Lossless: ${WEBP_LOSSLESS ? 'Sim' : 'Não'}\n`);

  const startTime = Date.now();
  const totalResults = {
    converted: 0,
    skipped: 0,
    errors: 0,
    savedBytes: 0
  };

  for (const dir of DIRECTORIES) {
    console.log(`\n📁 Processando: ${dir}\n`);
    const results = await processDirectory(dir);
    totalResults.converted += results.converted;
    totalResults.skipped += results.skipped;
    totalResults.errors += results.errors;
    totalResults.savedBytes += results.savedBytes;
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const savedMB = (totalResults.savedBytes / (1024 * 1024)).toFixed(2);

  console.log('\n✨ Conversão concluída!\n');
  console.log(`📊 Estatísticas:`);
  console.log(`   ✅ Convertidas: ${totalResults.converted}`);
  console.log(`   ⏭️  Puladas: ${totalResults.skipped}`);
  console.log(`   ❌ Erros: ${totalResults.errors}`);
  console.log(`   💾 Espaço economizado: ${savedMB}MB`);
  console.log(`   ⏱️  Tempo: ${duration}s`);

  if (totalResults.errors > 0) {
    console.log('\n⚠️  Houve erros durante a conversão. Verifique as mensagens acima.');
    process.exit(1);
  }
}

main();
