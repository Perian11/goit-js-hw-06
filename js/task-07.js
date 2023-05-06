const fontSizeCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
 fontSizeCtrl .addEventListener("input", () => {
    const fontSize = fontSizeCtrl.value + "px";
    text.style.fontSize = fontSize;
 });






