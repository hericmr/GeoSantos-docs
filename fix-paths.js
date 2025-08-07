const fs = require('fs');
const path = require('path');

// Função para corrigir os caminhos no HTML
function fixPaths() {
  const htmlPath = path.join(__dirname, 'out', 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.log('❌ Arquivo index.html não encontrado em out/');
    return;
  }

  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Corrigir caminhos dos assets
  html = html.replace(
    /href="\/GeoSantos-docs\/_next\//g,
    'href="/_next/'
  );
  
  html = html.replace(
    /src="\/GeoSantos-docs\/_next\//g,
    'src="/_next/'
  );
  
  // Corrigir caminhos das imagens
  html = html.replace(
    /src="\/assets\//g,
    'src="/GeoSantos-docs/assets/'
  );
  
  html = html.replace(
    /href="\/assets\//g,
    'href="/GeoSantos-docs/assets/'
  );
  
  fs.writeFileSync(htmlPath, html);
  console.log('✅ Caminhos corrigidos no index.html');
}

// Executar a correção
fixPaths(); 