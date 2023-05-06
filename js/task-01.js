const categoriesLiItem = document.querySelectorAll("#categories h2");
console.log("Number of categories:", categoriesLiItem.length);

categoriesLiItem.forEach(category => {
  console.log("Category: ", category.textContent);
  const categoriesItem = category.nextElementSibling.children;
  console.log("Elements:", categoriesItem.length);
})


