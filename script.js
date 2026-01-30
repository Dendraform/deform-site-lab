const items = document.querySelectorAll('.image-item');
let index = 0;
let locked = false;

function show(next) {
  if (locked || next === index) return;
  locked = true;

  // Убираем активный класс с текущего изображения
  items[index].classList.remove('active');
  items[index].classList.add('exit');

  // Циклический переход
  index = (next + items.length) % items.length;

  // Активируем новое изображение
  items[index].classList.add('active');

  // Сброс классов exit после анимации
  setTimeout(() => {
    items.forEach(i => i.classList.remove('exit'));
    locked = false;
  }, 900);
}

// Клики по стрелкам
document.querySelector('.arrow.down').onclick = () => show(index + 1);
document.querySelector('.arrow.up').onclick = () => show(index - 1);

// Скролл мышью
let wheelLock = false;
window.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;

    if (e.deltaY > 0) show(index + 1);
    else show(index - 1);

    setTimeout(() => (wheelLock = false), 1000);
  },
  { passive: false }
);

