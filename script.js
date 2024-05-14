function excursionNewsletter() {
  var validInput = false;

  
  var newsletterQuestion = confirm("Бажаєте отримувати новини про екскурсії?");
  while (!validInput) {
      
      if (newsletterQuestion) {
          var userEmail = prompt("Введіть ваш емейл для підписки на розсилку:");

          if (userEmail === null) {
              alert("Дякуємо за ваш вибір. Ви не будете отримувати новини про екскурсії.");
              break; // Вихід з циклу, якщо користувач натиснув "Скасувати"
          }

          if (userEmail !== "") {
              if (validateEmail(userEmail)) {
                  alert("Дякуємо за підписку! Ваш емейл " + userEmail + " успішно доданий до розсилки новин про екскурсії.");
                  validInput = true;
              } else {
                  alert("Введене значення не коректне. Будь ласка, введіть дійсний емейл.");
              }
          } else {
              alert("Введіть ваш емейл для підписки на розсилку.");
          }
      } else {
          alert("Дякуємо за ваш вибір. Ви не будете отримувати новини про екскурсії.");
          validInput = true;
      }
  }
}

// Функція для перевірки правильності формату емейла
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}



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

  var length1 = str1.length;
  var length2 = str2.length;

  if (length1 > length2) {
      alert('Перший рядок більший: ' + str1);
  } else if (length2 > length1) {
      alert('Другий рядок більший: ' + str2);
  } else {
      alert('Рядки рівні.');
  }
}
// Отримуємо посилання на кнопку
var compareButton = document.getElementById('compare-button');

// Додаємо обробник події кліку на кнопку
compareButton.addEventListener('click', function() {
  // Викликаємо функцію compareStrings
  compareStrings();
});




// Отримання елемента за id
var detailsBtn = document.getElementById('detailsBtn');

// Перший обробник подій
detailsBtn.addEventListener('click', function() {
  // Виклик алерту з повідомленням
  alert('Це другий обробник події. Натисніть "OK", щоб продовжити.');
});

// Другий обробник подій
detailsBtn.addEventListener('click', function() {
  // Перенаправлення на іншу сторінку після натискання "OK"
  window.location.href = "https://espreso.tv/viznachni-mistsya-ukraini-divovizhni-lokatsii-yaki-vi-mayte-vidvidati";
});



var btnElements = document.querySelectorAll(".btn");
btnElements.forEach(function(element) {
  
  element.style.borderRadius = "5px"; // Зміна радіусу кутів
 
});



// Створюємо новий елемент параграфу
var paragraph = document.createElement("p");

// Створюємо текстовий вузол
var paragraphText = document.createTextNode("Зв'яжіться з нами для отримання додаткової інформації!");

// Додаємо текстовий вузол в елемент параграфу
paragraph.append(paragraphText);

// Отримуємо блок контактів
var contactContainer = document.getElementById('contact');

// Вставляємо параграф вкінці блоку контактів
contactContainer.querySelector('.container').append(paragraph);











// Створення нового розділу
var newSection = document.createElement('section');
newSection.classList.add('additional-section'); // Додаємо клас для стилізації

// Створення заголовка
var newHeader = document.createElement('h2');
newHeader.textContent = "222222222";

// Додавання заголовка до нового розділу
newSection.appendChild(newHeader);

// Отримання посилання на футер
var footer = document.querySelector('footer');

// Вставляємо новий розділ після футера
footer.after(newSection);

// Створення параграфу
var newParagraph = document.createElement('p');
newParagraph.textContent = "111111111";

// Отримання посилання на новий розділ
var additionalSection = document.querySelector('.additional-section');

// Додаємо параграф до нового розділу
additionalSection.prepend(newParagraph);
additionalSection.style.textAlign = "center";



// Зміна вмісту нового параграфа за допомогою nodeValue
newParagraph.firstChild.nodeValue = "Адреса:";

// Зміна вмісту нового заголовка за допомогою data
newHeader.firstChild.data = "Київ, вул. Шевченка, 30";



var bannerHeading = document.querySelector('.banner h1');
bannerHeading.textContent = 'Досліджуйте відомі та невідомі місця!';

var aboutText = document.querySelector('.about-text');
aboutText.innerHTML = '<h2>Про нас</h2><p>Ми - компанія, що спеціалізується на проведенні захоплюючих екскурсій як по відомим, так і по маловідомим місцям. Наша мета - допомогти вам відкрити нові області та зробити ваше подорожування незабутнім.</p><p>З нашими професійними гідами та комфортною атмосферою ви отримаєте найкращий досвід подорожей.</p>';

var followButton = document.querySelector('.follow button');

followButton.outerHTML = '<button class="btn" onclick="excursionNewsletter()">Підписатись</button>';





const draggable = document.getElementById('draggable');
const container1 = document.getElementById('container1');

let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - container1.getBoundingClientRect().left - offsetX;
    const y = e.clientY - container1.getBoundingClientRect().top - offsetY;
    const maxX = container1.offsetWidth - draggable.offsetWidth;
    const maxY = container1.offsetHeight - draggable.offsetHeight;
    const boundedX = Math.min(Math.max(x, 0), maxX);
    const boundedY = Math.min(Math.max(y, 0), maxY);
    draggable.style.left = `${boundedX}px`;
    draggable.style.top = `${boundedY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});



function handleClick() {
  alert("Подія оброблена через атрибут");
  
}


// Отримуємо посилання на елемент за його id
var btn = document.getElementById("btn");
      
// Призначаємо обробник події через властивість
btn.onclick = function() {
  alert("Подія оброблена через властивість");
}