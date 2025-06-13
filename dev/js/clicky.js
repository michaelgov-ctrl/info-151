import random from 'random';
import isOdd from 'is-odd';

// burger
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('show');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('show');
  });
});

// clickable boxes
document.querySelectorAll('.card[data-link]').forEach(card => {
  card.addEventListener('click', e => {
    window.location.href = card.dataset.link;
  });
});

// 2 JS lib requirement - jumping box
const box = document.getElementById('jump-box');

function jumpBox() {
  const maxX = window.innerWidth - box.offsetWidth;
  const maxY = window.innerHeight - box.offsetHeight;

  const x = random.int(0, maxX);
  const y = random.int(0, maxY);

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;

  box.style.background = isOdd(x) ? 'tomato' : 'lightblue';
}

setInterval(jumpBox, 3000);