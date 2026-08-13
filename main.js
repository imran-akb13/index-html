const firstProduct = document.querySelector('.product');
const allProducts = document.querySelectorAll('.product');
const paintOneButton = document.querySelector('.controls__paint-one');
const paintAllButton = document.querySelector('.controls__paint-all');
const goGoogleButton = document.querySelector('.controls__go-google');
const notifyButton = document.querySelector('.controls__notify');
const toggleButton = document.querySelector('.controls__toggle');
const pageTitle = document.querySelector('.catalog__title');

const highlightColor = '#ffd6a5';
const highlightColorAll = '#caffbf';

// Задача 2: перекрасить первую карточку
paintOneButton.addEventListener('click', () => {
    firstProduct.style.backgroundColor = highlightColor;
});

// Задача 3: перекрасить все карточки
paintAllButton.addEventListener('click', () => {
    allProducts.forEach(item => {
        item.style.backgroundColor = highlightColorAll;
    });
});

// Задача 4: открыть Google
function goToGoogle() {
    const wantsToGo = confirm('Перейти на Google?');
    if (wantsToGo) {
        window.open('https://www.google.com');
    } else {
        return;
    }
}
goGoogleButton.addEventListener('click', goToGoogle);

// Задача 5: console.log + alert
function showNotification(text) {
    console.log(text);
    alert(text);
}
notifyButton.addEventListener('click', () => {
    showNotification('Домашнее задание №6');
});

// Задача 6: слушатель на заголовок — контент в консоль при наведении
pageTitle.addEventListener('mouseenter', () => {
    console.log(pageTitle.textContent);
});

// Задача 7: кнопка с переключением цвета через classList.toggle
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('controls__toggle--active');
});