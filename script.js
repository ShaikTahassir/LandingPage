const year = document.getElementById('year');
const homeButton = document.querySelector('.home-button');

year.textContent = new Date().getFullYear();

function toggleHomeButton() {
  homeButton.classList.toggle('visible', window.scrollY > 500);
}

window.addEventListener('scroll', toggleHomeButton, { passive: true });
toggleHomeButton();
