// ==================================================
// ЛОГИКА 1: БЕЗОГОВОРОЧНАЯ ПРОВЕРКА ПАРОЛЯ
// ==================================================

// 1. Делаем первый запрос пароля
let answer = prompt("ДОСТУП ОГРАНИЧЕН. Как зовут сына? (4 буквы)");

/* 2. Цикл крутится бесконечно, пока ответ не станет правильным.
   Если пользователь нажимает "Отмена", prompt возвращает null, 
   что тоже не равно "JS", поэтому цикл продолжается. */
while (answer !== "Саша" & answer !== "саша") {
    answer = prompt("ДОСТУП ЗАБЛОКИРОВАН! Как зовут брата? (4 буквы)");
}

// 3. Сюда код доберется ТОЛЬКО если введен правильный ответ
alert("Правильно! Добро пожаловать на сайт.");

// 4. Находим контейнер карточек и принудительно возвращаем ему видимость через Flexbox
const mainContainer = document.querySelector('.container');
mainContainer.style.display = 'flex';


// ==================================================
// ЛОГИКА 2: ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (РАБОТАЕТ ПОСЛЕ ВХОДА)
// ==================================================
const themeButton = document.querySelector('.theme-btn');
const bodyElement = document.querySelector('body');

themeButton.addEventListener('click', function() {
    bodyElement.classList.toggle('light-theme');
    
    if (bodyElement.classList.contains('light-theme')) {
        themeButton.textContent = "Включить темную тему";
    } else {
        themeButton.textContent = "Переключить тему";
    }
});
