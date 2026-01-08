function setLanguage(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// idioma padrão
setLanguage('pt');