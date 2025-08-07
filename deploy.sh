#!/bin/bash

echo "🚀 Iniciando deploy do GeoSantos Landing Page..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Por favor, instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não está instalado. Por favor, instale o npm primeiro."
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

echo "🔨 Construindo o projeto..."
npm run build

echo "🔧 Corrigindo caminhos dos assets..."
node fix-paths.js

echo "📤 Fazendo deploy para GitHub Pages..."
npm run deploy

echo "✅ Deploy concluído!"
echo "🌐 Seu site está disponível em: https://hericmr.github.io/GeoSantos-docs"
echo ""
echo "💡 Dicas:"
echo "   - Pode levar alguns minutos para as mudanças aparecerem"
echo "   - Verifique se o repositório tem GitHub Pages habilitado"
echo "   - Certifique-se de que a branch gh-pages foi criada" 