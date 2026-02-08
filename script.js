const items = document.querySelectorAll('.image-item');
let index = 0;
let locked = false;

function show(next) {
  if (locked || next === index) return;
  locked = true;

  items[index].classList.remove('active');
  items[index].classList.add('exit');

  // Зацикливание
  index = (next + items.length) % items.length;

  items[index].classList.add('active');

  setTimeout(() => {
    items.forEach(i => i.classList.remove('exit'));
    locked = false;
  }, 900);
}

// Стрелки
document.querySelector('.arrow.down').onclick = () => show(index + 1);
document.querySelector('.arrow.up').onclick = () => show(index - 1);

// Скролл колесом
let wheelLock = false;
window.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;

    if (e.deltaY > 0) {
      show(index + 1);
    } else {
      show(index - 1);
    }

    setTimeout(() => (wheelLock = false), 1000);
  },
  { passive: false }
);
