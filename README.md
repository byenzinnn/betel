# Betel Corp - Landing Page

Landing page institucional em HTML puro com animações elegantes usando anime.js.

## 🎨 Design

- **Estilo:** Minimalismo corporativo sofisticado
- **Paleta:** Preto (#000000) + Branco (#FFFFFF) + Verde Limão (#CCFF00)
- **Tipografia:** Poppins (títulos) + Inter (corpo)
- **Animações:** anime.js para micro-interações e scroll animations

## 📁 Estrutura do Projeto

```
/project/
├── index.html          # Página principal
├── styles.css          # Todos os estilos
├── script.js           # Animações e interatividade
├── README.md           # Documentação
└── TEXTOS_INSTITUCIONAIS.md  # Conteúdo institucional
```

## 🚀 Como Usar

### Método 1: Abrir Diretamente

Simplesmente abra o arquivo `index.html` no seu navegador.

### Método 2: Servidor Local

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server instalado)
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## ✨ Recursos

### Animações

- ✅ Animação de entrada suave (fade in)
- ✅ Scroll-triggered animations em todas as seções
- ✅ Hover effects em cards e botões
- ✅ Parallax no hero section
- ✅ Micro-interações com ícones
- ✅ Menu mobile animado

### Seções

1. **Hero** - Apresentação impactante com CTA
2. **Quem Somos** - Introdução institucional
3. **Institucional** - Missão, Visão, Valores e Nosso Negócio
4. **Serviços** - O que fazemos
5. **Público** - Para quem atuamos
6. **Diferencial** - O que nos destaca
7. **Resultados** - Nosso impacto
8. **Processo** - Como trabalhamos
9. **CTA Final** - Call to action
10. **Footer** - Informações de contato

### Responsividade

- ✅ Mobile-first design
- ✅ Breakpoints otimizados
- ✅ Menu mobile com hamburger animado
- ✅ Imagens responsivas
- ✅ Tipografia fluida (clamp)

## 🎯 Tecnologias

- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, Custom Properties)
- JavaScript ES6+
- anime.js 3.2.2 (via CDN)
- Google Fonts (Poppins + Inter)

## 📝 Customização

### Cores

Edite as cores principais no `styles.css`:

```css
/* Verde Limão (Accent) */
background: #CCFF00;

/* Preto (Background) */
background: #000;

/* Cinza (Textos) */
color: #d1d5db;
```

### Fontes

As fontes são carregadas via Google Fonts. Para mudar:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

### Imagens

Substitua as URLs das imagens do Pexels pelas suas próprias:

```html
<!-- No HTML -->
<img src="sua-imagem.jpg" alt="Descrição">
```

### Animações

Ajuste as animações no `script.js`:

```javascript
anime({
    targets: '.elemento',
    opacity: [0, 1],
    duration: 800,  // Duração em ms
    delay: 200,     // Delay em ms
    easing: 'easeOutExpo'  // Tipo de easing
});
```

## 📧 Contato

Atualize os links de contato no HTML:

```html
<!-- Email -->
<a href="mailto:contato@betelcorp.com.br">

<!-- WhatsApp -->
<a href="https://wa.me/5511999999999">

<!-- LinkedIn -->
<a href="https://linkedin.com/company/betelcorp">
```

## 🎨 Anime.js

Este projeto usa anime.js para animações suaves. Documentação completa:
https://animejs.com/documentation/

### Exemplos de animações incluídas:

- Fade in/out
- Slide up/down
- Scale
- Rotate
- Parallax
- Stagger (animações sequenciais)
- Scroll-triggered animations

## 🌐 Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative o GitHub Pages nas configurações
4. Acesse: `https://seuusuario.github.io/repositorio`

### Netlify

1. Arraste a pasta para netlify.com/drop
2. Ou conecte seu repositório Git
3. Deploy automático!

### Vercel

```bash
npm i -g vercel
vercel
```

## 📱 Testes

Teste em diferentes dispositivos e navegadores:

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🔧 Otimizações

- Imagens do Pexels já são otimizadas
- CSS minificado para produção (opcional)
- JS minificado para produção (opcional)
- Lazy loading nas imagens (pode ser adicionado)

## 📄 Licença

© 2026 Betel Corp Consultoria e Captação. Todos os direitos reservados.

---

**Desenvolvido com HTML puro, CSS3 e anime.js**
