/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
значение счетчика на `1`.

- Создай переменную `counterValue` в которой будет хранится текущее значение
  счетчика.
- Создай функции `increment` и `decrement` для увеличения и уменьшения значения
  счетчика
- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterLink = document.querySelector('#value');

let counterValue = Number(document.querySelector('#value').textContent);

const decrement = () => (counterLink.textContent = counterValue -= 1);
const increment = () => (counterLink.textContent = counterValue += 1);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
