document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".scroll-section");
  const arrows = {
    up: document.querySelector(".arrow.up"),
    down: document.querySelector(".arrow.down")
  };

  let current = 0;
  let scrolling = false;

  function activateSection(index) {
    sections.forEach((sec, i) => {
      sec.classList.toggle("active", i === index);
    });
  }

  function scrollToSection(index) {
    if (index < 0) index = 0;
    if (index >= sections.length) index = sections.length - 1;
    scrolling = true;
    sections[index].scrollIntoView({behavior: "smooth"});
    activateSection(index);
    current = index;
    setTimeout(() => scrolling = false, 1000);
  }

  // Инициализация первой секции
  activateSection(current);

  // Скролл колесиком
  window.addEventListener("wheel", e => {
    if (scrolling) return;
    if (e.deltaY > 0) scrollToSection(current + 1);
    else scrollToSection(current - 1);
  });

  // Стрелки
  arrows.down.addEventListener("click", () => scrollToSection(current + 1));
  arrows.up.addEventListener("click", () => scrollToSection(current - 1));
});
