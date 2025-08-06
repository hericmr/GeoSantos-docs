# Plano de Desenvolvimento - Landing Page GeoSantos

## Objetivo

Criar uma landing page profissional e responsiva para o jogo GeoSantos, utilizando o conteúdo do arquivo `landingpage.md`. O design da página será inspirado na identidade visual do jogo, conforme as capturas de tela fornecidas.

## Tecnologias

- **Framework:** Next.js (com App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Renderização de Markdown:** `react-markdown` com `remark-gfm`
- **Ícones:** Lucide React

---

## Checklist e Passo a Passo

### ✅ 1. Estrutura Inicial e Configuração
- [X] Criar projeto Next.js com TypeScript e Tailwind CSS (`geosantos-lp`).
- [X] Mover o arquivo `landingpage.md` para a raiz do projeto.
- [ ] Instalar dependências para renderização de Markdown (`react-markdown`, `remark-gfm`).
- [ ] Instalar biblioteca de ícones (`lucide-react`).

### ☐ 2. Leitura e Renderização do Conteúdo
- [ ] Criar um script ou função para ler o conteúdo do `landingpage.md` no lado do servidor.
- [ ] Limpar a página inicial padrão do Next.js (`app/src/page.tsx`).
- [ ] Criar um componente React (`<MarkdownRenderer>`) para receber o conteúdo do Markdown e renderizá-lo usando `react-markdown`.
- [ ] Passar o conteúdo do `landingpage.md` para a página principal e exibi-lo usando o novo componente.

### ☐ 3. Estilização com Tailwind CSS (Inspirado no Jogo)
- [ ] **Layout Principal:**
    - Definir um layout de coluna única, centralizado e com largura máxima para boa legibilidade.
    - Usar um fundo escuro, similar ao do jogo (ex: `bg-gray-900` ou um tom de azul escuro).
    - Definir uma fonte padrão limpa e moderna (ex: `font-sans`).
- [ ] **Tipografia:**
    - Estilizar os cabeçalhos (`h1`, `h2`, `h3`) com tamanhos e cores que se destaquem, usando a paleta de cores do jogo (tons de azul e verde para acentos).
    - Estilizar parágrafos, links e listas para garantir a legibilidade.
    - Estilizar a formatação de `código` e `blockquote`.
- [ ] **Componentes do Markdown:**
    - **Imagens:** Garantir que as imagens do `landingpage.md` sejam exibidas corretamente, centralizadas e com uma borda sutil ou sombra.
    - **Tabelas:** Estilizar as tabelas com bordas, cores de fundo e espaçamento adequados para que fiquem claras e organizadas.
    - **Badges/Shields:** Assegurar que os badges do topo do arquivo sejam renderizados corretamente.
- [ ] **Header e Footer:**
    - Criar um cabeçalho simples com o título "GeoSantos" e talvez um link para o jogo.
    - Criar um rodapé com as informações do autor e links para o GitHub/LinkedIn.

### ☐ 4. Refinamento e Responsividade
- [ ] Adicionar ícones (`lucide-react`) onde fizer sentido (ex: links externos, seções).
- [ ] Revisar todo o espaçamento, margens e preenchimento para um layout coeso.
- [ ] Garantir que a página seja totalmente responsiva e funcione bem em dispositivos móveis, ajustando o tamanho da fonte e o layout conforme necessário.
- [ ] Fazer uma verificação final de acessibilidade (cores de contraste, etc.).

### ☐ 5. Limpeza e Finalização
- [ ] Remover arquivos e componentes de exemplo não utilizados do Next.js.
- [ ] Formatar todo o código usando o linter (`npm run lint`).
- [ ] Adicionar um `README.md` simples para o projeto da landing page.
