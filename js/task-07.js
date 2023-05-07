const fontSizeCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const initialFontSize = fontSizeCtrl.value + "px";
text.style.fontSize = initialFontSize;

fontSizeCtrl.addEventListener("input", () => {
   const fontSize = fontSizeCtrl.value + "px";
   text.style.fontSize = fontSize;
});
