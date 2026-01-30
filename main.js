document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".scroll-section");
  let current = 0;
  let scrolling = false;

  function scrollToSection(index) {
    if(index < 0) index = 0;
    if(index >= sections.length) index = sections.length - 1;
    scrolling = true;
    sections[index].scrollIntoView({behavior: "smooth"});
    current = index;
    setTimeout(() => scrolling = false, 1000);
  }

  window.addEventListener("wheel", e => {
    if(scrolling) return;
    if(e.deltaY > 0) scrollToSection(current + 1);
    else scrollToSection(current - 1);
  });

  // Стрелки
  document.querySelector(".arrow.down").addEventListener("click", () => scrollToSection(current + 1));
  document.querySelector(".arrow.up").addEventListener("click", () => scrollToSection(current - 1));
});
