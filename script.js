// Навигационная система
const pages = {
    main: document.getElementById('mainPage'),
    page1: document.getElementById('page1'),
    page2: document.getElementById('page2'),
    page3: document.getElementById('page3'),
    page4: document.getElementById('page4')
};

const buttons = {
    main: document.getElementById('btnMain'),
    page1: document.getElementById('btnPage1'),
    page2: document.getElementById('btnPage2'),
    page3: document.getElementById('btnPage3'),
    page4: document.getElementById('btnPage4')
};

// Функция переключения страниц
function switchPage(targetPage, clickedButton) {
    // Скрыть все страницы
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Показать выбранную страницу
    pages[targetPage].classList.add('active');
    
    // Обновить состояние кнопок
    Object.values(buttons).forEach(btn => {
        btn.classList.remove('active');
        btn.disabled = false;
    });
    
    clickedButton.classList.add('active');
    clickedButton.disabled = true;
}

// Назначение обработчиков
buttons.main.addEventListener('click', () => switchPage('main', buttons.main));
buttons.page1.addEventListener('click', () => switchPage('page1', buttons.page1));
buttons.page2.addEventListener('click', () => switchPage('page2', buttons.page2));
buttons.page3.addEventListener('click', () => switchPage('page3', buttons.page3));
buttons.page4.addEventListener('click', () => switchPage('page4', buttons.page4));

let balance = 0; // Начальный баланс
let level = 1; // Начальный уровень
let clickValue = 1 // Начальное значение клика
let clicksToNextLevel = 50; // Кликов до следующего уровня (для уровня 1)

// Обновляем отображение баланса, уровня и значения клика
function updateUI() {
    document.getElementById('balance').textContent = balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 });
    document.getElementById('level').textContent = level;
    document.getElementById('clickValue').textContent = clickValue.toFixed(2);
}

// Обработка клика
document.getElementById('clickArea').addEventListener('click', function() {
    balance += clickValue; // Увеличиваем баланс на значение клика
    updateUI();

    // Проверяем, достигнут ли следующий уровень
    if (balance >= clicksToNextLevel) {
        levelUp();
    }
});

// Повышение уровня
function levelUp() {
    level++;
    clickValue *= 1.2; // Увеличиваем значение клика на 20%
    clicksToNextLevel = Math.floor(clicksToNextLevel * 2); // Увеличиваем количество кликов до следующего уровня на 200%
    updateUI();
}

// Инициализация
switchPage('main', buttons.main);