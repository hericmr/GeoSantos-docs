# GeoSantos Landing Page

Landing page pixel art para o jogo educativo GeoSantos sobre a cidade de Santos (SP).

## 🚀 Deploy Rápido

### Opção 1: Deploy Automático (Recomendado)
```bash
./deploy.sh
```

### Opção 2: Deploy Manual
```bash
# Instalar dependências
npm install

# Construir o projeto
npm run build

# Fazer deploy
npm run deploy
```

## 🔧 Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no GitHub

### Configuração do GitHub Pages

1. **Habilitar GitHub Pages**:
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

2. **Configurar Actions** (opcional):
   - O workflow `.github/workflows/deploy.yml` será executado automaticamente
   - Deploy acontece a cada push na branch main

## 📁 Estrutura do Projeto

```
geosantos-lp/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos pixel art
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── Header.tsx       # Cabeçalho
│       └── Footer.tsx       # Rodapé
├── public/
│   └── assets/              # Imagens e fontes
├── landingpage.md           # Conteúdo da landing page
├── next.config.js           # Configuração Next.js
└── package.json             # Dependências
```

## 🎨 Design System

O projeto usa um design system pixel art inspirado em jogos retrô:

- **Fontes**: Press Start 2P, VT323
- **Cores**: Azul (#57BDCD), Verde (#10b981), Laranja (#ff6600)
- **Estilo**: Pixel art com sombras e bordas definidas

## 🔗 Links

- **Site**: https://hericmr.github.io/GeoSantos-docs
- **Jogo**: https://hericmr.github.io/geosantos/
- **GitHub**: https://github.com/hericmr

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Testar build local
npm run start
```

## 📝 Notas Importantes

1. **basePath**: Configurado para `/GeoSantos-docs` em produção
2. **GitHub Pages**: Deploy automático via gh-pages
3. **Assets**: Otimizados para carregamento rápido
4. **Responsivo**: Funciona em desktop e mobile

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se o GitHub Pages está habilitado
- Confirme se a branch gh-pages existe
- Aguarde alguns minutos após o deploy

### Imagens não aparecem
- Verifique se os caminhos estão corretos
- Confirme se as imagens estão na pasta `public/assets/`

### Estilos não carregam
- Verifique se o Tailwind CSS está configurado
- Confirme se o `globals.css` está importado

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.
