/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
количество элементов в `input` и нажимает кнопку `Создать`, после чего
рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
очищается.

Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
в `div#boxes`.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на
  10px

Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.*/

const divControls = document.querySelector('#controls');
const divControlsInput = document.querySelector('[type="number"]');
const divControlsButtonCreate = divControls.querySelector(
  '[data-action="render"]',
);
const divControlsButtonClear = divControls.querySelector(
  '[data-action="destroy"]',
);
const divBoxes = document.querySelector('#boxes');

//Вешаем слушателя на родительский элемент и через event.target.dataset.action определяем кнопку
divControls.addEventListener('click', event => {
  if (event.target.dataset.action == 'render') {
    destroyBoxes();
    createBoxes(divControlsInput.value);
  }

  if (event.target.dataset.action == 'destroy') {
    destroyBoxes();
  }
});

//Генерируем рандомный цвет
const divColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

//Функция генерации Div-ов
const createBoxes = amount => {
  const divArray = [];
  let divSize = 30;
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      divArray.push(document.createElement('div'));
      divArray[i].style.width = divSize + 'px';
      divArray[i].style.height = divSize + 'px';
      divArray[i].style.backgroundColor = divColor();
      divSize += 10;
    }
    divBoxes.append(...divArray);
  } else divBoxes.textContent = 'Число должно быть больше 0 и меньше 100';
};

//Функция удаления Div-ов из родительского
const destroyBoxes = () => {
  while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.firstChild);
  }
};
