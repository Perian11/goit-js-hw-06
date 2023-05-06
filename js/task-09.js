function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector("button");
const textElement = document.querySelector(".color");
buttonElement.addEventListener("click", buttonClick);
function buttonClick() {
  const color = getRandomHexColor();
  textElement.textContent = "-";
  bodyElement.style.backgroundColor = color;
  textElement.textContent += color;
}
