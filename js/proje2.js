// Quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const themeSelect = document.getElementById('theme');
  const languageSelect = document.getElementById('language');
  const preferencesMenu = document.getElementById('preferences-menu');
  const preferencesButton = document.getElementById('preferences-button');
  const closePreferencesButton = document.getElementById('close-preferences');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Carregar preferências salvas
  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLanguage = localStorage.getItem('language') || 'pt-br';

  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeSelect.value = savedTheme;
  languageSelect.value = savedLanguage;

  // Abrir e fechar menu de preferências
  preferencesButton.addEventListener('click', () => {
    preferencesMenu.classList.add('open');
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
});
