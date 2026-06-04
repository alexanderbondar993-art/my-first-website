// 1. Находим кнопку и элемент body
const themeButton = document.querySelector('.theme-btn');
const bodyElement = document.querySelector('body');

// 2. Слушаем клик по кнопке
themeButton.addEventListener('click', function() {
    
    /* Метод toggle — это встроенный переключатель. 
       Если класса 'light-theme' у body нет — он его добавит (включит светлую тему).
       Если класс уже есть — он его удалит (вернет темную тему). */
    bodyElement.classList.toggle('light-theme');
    
    // 3. Меняем текст на кнопке в зависимости от текущей темы
    if (bodyElement.classList.contains('light-theme')) {
        themeButton.textContent = "Включить темную тему";
    } else {
        themeButton.textContent = "Переключить тему";
    }
});
