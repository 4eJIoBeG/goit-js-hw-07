/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
input), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `'незнакомец'`.*/

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleInputChange = event => {
  event.target.value
    ? (nameOutput.textContent = event.target.value)
    : (nameOutput.textContent = 'незнакомец');
};

nameInput.addEventListener('input', handleInputChange);
