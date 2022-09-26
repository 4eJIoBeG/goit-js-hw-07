/*Напиши скрипт, который для каждого элемента массива `ingredients` создаст
отдельный `li`, после чего вставит все `li` за одну операцию в список
`ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`. */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(
  ...ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    return listItem;
  }),
);
