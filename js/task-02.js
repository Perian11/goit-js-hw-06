// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const listItemEL = ingredients.map(element => {
  const list_item = document.createElement("li");
  list_item.classList.add("item");
  list_item.textContent = element;
  return list_item;
 
});
list.append(...listItemEL);

console.log(listItemEL);
