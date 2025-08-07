# 🚀 Guia de Deploy - GeoSantos Landing Page

## Problema Resolvido ✅

O site estava abrindo em texto puro porque os caminhos dos arquivos CSS e JavaScript estavam incorretos. Isso foi corrigido com:

1. **Script de correção automática** (`fix-paths.js`)
2. **Configuração correta do Next.js** (`next.config.js`)
3. **Workflow GitHub Actions** (`.github/workflows/deploy.yml`)

## 🔧 Como Fazer o Deploy

### Opção 1: Deploy Automático (Recomendado)
```bash
./deploy.sh
```

### Opção 2: Deploy Manual
```bash
# 1. Instalar dependências
npm install

# 2. Construir o projeto
npm run build

# 3. Corrigir caminhos dos assets
node fix-paths.js

# 4. Fazer deploy
npm run deploy
```

## 📋 Configuração do GitHub Pages

### 1. Habilitar GitHub Pages
- Vá para **Settings > Pages**
- **Source**: Deploy from a branch
- **Branch**: gh-pages
- **Folder**: / (root)

### 2. Configurar Actions (Opcional)
- O workflow `.github/workflows/deploy.yml` será executado automaticamente
- Deploy acontece a cada push na branch main

## 🔍 Verificação do Deploy

### URLs do Site
- **GitHub Pages**: https://hericmr.github.io/GeoSantos-docs
- **Jogo**: https://hericmr.github.io/geosantos/

### Como Verificar se Funcionou
1. Acesse a URL do site
2. Verifique se os estilos estão carregando (não deve aparecer texto puro)
3. Verifique se as imagens estão aparecendo
4. Teste a responsividade em diferentes dispositivos

## 🐛 Solução de Problemas

### Site ainda aparece em texto puro
1. Verifique se o script `fix-paths.js` foi executado
2. Confirme se os arquivos na pasta `out/` têm os caminhos corretos
3. Aguarde alguns minutos após o deploy

### Imagens não aparecem
1. Verifique se as imagens estão na pasta `public/assets/`
2. Confirme se os caminhos no HTML estão corretos
3. Teste se as imagens são acessíveis diretamente

### CSS não carrega
1. Verifique se o arquivo CSS existe em `out/_next/static/css/`
2. Confirme se o caminho no HTML está correto
3. Teste se o arquivo CSS é acessível diretamente

## 📁 Estrutura dos Arquivos

```
geosantos-lp/
├── out/                    # Arquivos de produção
│   ├── index.html         # Página principal (com caminhos corrigidos)
│   ├── _next/            # Assets do Next.js
│   └── assets/           # Imagens e outros recursos
├── fix-paths.js          # Script de correção de caminhos
├── deploy.sh             # Script de deploy automático
└── .github/workflows/    # Workflow do GitHub Actions
```

## 🎯 Resultado Esperado

Após o deploy correto, o site deve:
- ✅ Carregar com estilos pixel art
- ✅ Exibir imagens corretamente
- ✅ Ser responsivo
- ✅ Funcionar em todos os navegadores modernos

## 📞 Suporte

Se ainda houver problemas:
1. Verifique os logs do GitHub Actions
2. Confirme se a branch gh-pages foi criada
3. Teste localmente com `npm run dev`
4. Verifique se todos os arquivos estão no repositório 