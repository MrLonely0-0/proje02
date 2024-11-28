document.addEventListener('DOMContentLoaded', () => {
    // Elementos de Preferências
    const themeSelect = document.getElementById('theme');
    const languageSelect = document.getElementById('language');
    const preferencesMenu = document.getElementById('preferences-menu');
    const preferencesButton = document.getElementById('preferences-button');
    const closePreferencesButton = document.getElementById('close-preferences');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Produtos disponíveis
    const produtos = [
      { nome: "Cheeseburger", preco: 15, imagem: "img/cheeseburger.jpg" },
      { nome: "X-Bacon", preco: 18, imagem: "img/xbacon.jpg" }
    ];
  
    // Carregar preferências salvas
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'pt-br';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeSelect.value = savedTheme;
    languageSelect.value = savedLanguage;
  
    // Abrir e fechar menu de preferências
    preferencesButton.addEventListener('click', () => {
      preferencesMenu.classList.toggle('open');
    });
  
    closePreferencesButton.addEventListener('click', () => {
      preferencesMenu.classList.remove('open');
    });
  
    // Alterar tema
    themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      document.body.classList.toggle('dark-mode', theme === 'dark');
      localStorage.setItem('theme', theme);
    });
  
    // Alterar idioma
    languageSelect.addEventListener('change', (e) => {
      const language = e.target.value;
      localStorage.setItem('language', language);
    });
  
    // Alternar menu em dispositivos móveis
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Gerar produtos na página inicial
    const container = document.getElementById('produtos');
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('produto');
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>
      `;
      container.appendChild(card);
    });
  
    // Adicionar item ao carrinho
    window.adicionarAoCarrinho = (nome, preco) => {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      carrinho.push({ nome, preco });
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      alert(`${nome} adicionado ao carrinho!`);
    };
  });
  