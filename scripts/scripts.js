const links = document.querySelectorAll('nav ul li a');
const path = window.location.pathname;

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  const normalizedLink = linkPath === '/index.html' ? '/' : linkPath;
  if (normalizedLink === path) {
    link.classList.add('ativo');
  }
});