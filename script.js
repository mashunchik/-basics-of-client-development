

// Приклад виклику функції userDialog() при кліку на елемент з класом "logo"
document.querySelector('.logo a').addEventListener('click', function() {
    function userDialog() {
        var userInput = prompt("Введіть ваше ім'я:");
    
        if (userInput) {
            alert("Привіт, " + userInput + "! Ласкаво просимо до нашого сайту!");
        } else {
            alert("Привіт! Ласкаво просимо до нашого сайту!");
        }
    
        var continueDialog = true;
    
        while (continueDialog) {
            var userChoice = confirm("Хочете дізнатися більше про наші екскурсії?");
    
            if (userChoice) {
                alert("Ми маємо багато цікавих екскурсій. Запрошуємо вас долучитися!");
                continueDialog = false;continueDialog = false;
            } else {
                alert("Дякуємо за відвідування нашого сайту!");
                continueDialog = false;
            }
        }
    }

    userDialog();
    });

// Оголошення функції для виведення інформації про розробника з параметрами
function displayDeveloperInfo(lastName, firstName, position = "Веб-розробник") {
    var infoContainer = document.getElementById('developer-info-container');
    var infoParagraph = document.createElement('p');
    infoParagraph.textContent = "Прізвище: " + lastName + ", Ім'я: " + firstName + ", Посада: " + position;
    infoContainer.appendChild(infoParagraph);
}

// Обробник події кліку на елементі з id "developer-info"
document.querySelector('#developer-info').addEventListener('click', function() {
    // Виклик функції з параметрами
    displayDeveloperInfo("Тильна", "Марія");
});


function compareStrings() {
    var str1 = prompt("Введіть перший рядок:");
    var str2 = prompt("Введіть другий рядок:");

    if (str1 === null || str2 === null) {
        alert("Ви відмінили введення.");
        return;
    }

    var num1 = parseInt(str1);
    var num2 = parseInt(str2);

    if (num1 > num2) {
        alert('Перший рядок більший: ' + str1);
    } else if (num2 > num1) {
        alert('Другий рядок більший: ' + str2);
    } else {
        alert('Рядки рівні за довжиною та символами.');
    }
}

// Отримуємо посилання на кнопку
var compareButton = document.getElementById('compare-button');

// Додаємо обробник події кліку на кнопку
compareButton.addEventListener('click', function() {
    // Викликаємо функцію compareStrings
    compareStrings();
});

// Зберігаємо початковий колір фону
var originalBackgroundColor = document.body.style.background;

// Змінюємо фон на новий колір 
document.body.style.background = "white";

// Встановлюємо таймер для повернення фону до початкового стану через 30 секунд
setTimeout(function() {
    document.body.style.background = originalBackgroundColor; // Повертаємо початковий колір фону
}, 30000); // 30000 мілісекунд = 30 секунд

// Отримуємо всі елементи з класом "tour" у розділі з ідентифікатором "tours1"
var tourElements = document.querySelectorAll('#tours1 .tour');

// Змінюємо колір тексту у всіх отриманих елементів
tourElements.forEach(function(element) {
    element.style.color = 'red'; // Змінюємо колір тексту на червоний
});

// Отримуємо посилання на кнопку
var redirectButton = document.querySelectorAll('#redirect-button')[0];

// Додаємо обробник події кліку на кнопку
redirectButton.addEventListener('click', function() {
    // Перенаправлення на іншу сторінку (наприклад, на Google)
    location.href = "https://www.google.com";
});

// Отримання елементів за допомогою querySelector або getElementById
var header = document.querySelector('header');
var mainContent = document.querySelector('.main-content');
var aboutSection = document.getElementById('about');
var contactSection = document.getElementById('contact');

// Використання властивостей DOM-вузла

// innerHTML: змінюємо вміст внутрішнього вмісту елемента
console.log('header.innerHTML:', header.innerHTML);

// outerHTML: змінюємо вміст зовнішнього вмісту елемента
console.log('mainContent.outerHTML:', mainContent.outerHTML);

// nodeValue / data: не застосовується для елементів, але може бути використано для текстових вузлів
var aboutTextNode = aboutSection.firstChild; // Отримання першого текстового вузла
console.log('aboutTextNode.nodeValue:', aboutTextNode.nodeValue);

// textContent: змінюємо текстовий вміст всіх дочірніх вузлів
console.log('contactSection.textContent:', contactSection.textContent);