const items = document.querySelectorAll('.image-item');
let index = 0;
let locked = false;

function show(next) {
  if (locked || next === index) return;
  locked = true;

  items[index].classList.remove('active');
  items[index].classList.add('exit');

  index = (next + items.length) % items.length;

  items[index].classList.add('active');

  setTimeout(() => {
    items.forEach(i => i.classList.remove('exit'));
    locked = false;
  }, 900);
}

window.addEventListener('wheel', e => {
  if (e.deltaY > 0) {
    show(index + 1); // вниз → экран едет вверх
  } else {
    show(index - 1);
  }
});

document.querySelector('.arrow.down').onclick = () => show(index + 1);
document.querySelector('.arrow.up').onclick = () => show(index - 1);
