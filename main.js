document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.image-item');
    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;
    
    // Функция для смены изображений
    function changeImage(direction) {
        if (isScrolling) return;
        
        isScrolling = true;
        
        // Убираем активный класс с текущего изображения
        imageItems[currentIndex].classList.remove('active');
        imageItems[currentIndex].classList.add('exit');
        
        // Определяем индекс следующего изображения
        if (direction === 'down') {
            currentIndex = (currentIndex + 1) % imageItems.length;
        } else {
            currentIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
        }
        
        // Показываем следующее изображение
        setTimeout(() => {
            // Убираем класс exit со всех изображений
            imageItems.forEach(item => {
                item.classList.remove('exit');
            });
            
            // Активируем новое изображение
            imageItems[currentIndex].classList.add('active');
            
            // Сбрасываем флаг скроллинга
            setTimeout(() => {
                isScrolling = false;
            }, 300);
        }, 500);
    }
    
    // Обработчик колеса мыши
    window.addEventListener('wheel', function(e) {
        // Предотвращаем слишком быструю смену
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                // Скролл вниз
                changeImage('down');
            } else {
                // Скролл вверх
                changeImage('up');
            }
        }, 100);
    });
    
    // Обработчик клавиш для навигации
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            changeImage('down');
        } else if (e.key === 'ArrowUp') {
            changeImage('up');
        }
    });
    
    // Активируем первое изображение
    imageItems[0].classList.add('active');
});
