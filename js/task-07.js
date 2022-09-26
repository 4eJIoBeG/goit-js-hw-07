/*Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
(событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
`font-size`. В результате при перетаскивании ползунка будет меняться размер
текста.*/

const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener(
  'input',
  event => (spanText.style.fontSize = event.target.value + 'px'),
);
