const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = input.getAttribute("data-length");
  const letterLength = input.value.length;
  if (letterLength === parseInt(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

