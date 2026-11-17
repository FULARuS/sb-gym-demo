const controls = document.querySelector('.gallery-controls');
const photo = document.querySelector('#studio-photo');
const title = document.querySelector('#photo-title');
const choices = [...controls.querySelectorAll('button')];

controls.hidden = false;
controls.addEventListener('click', (event) => {
  const choice = event.target.closest('button[data-photo]');
  if (!choice || choice.getAttribute('aria-pressed') === 'true') return;

  for (const button of choices) {
    button.setAttribute('aria-pressed', String(button === choice));
  }
  photo.src = 'assets/' + choice.dataset.photo + '.webp';
  photo.alt = choice.dataset.alt;
  title.textContent = choice.dataset.title;
});
