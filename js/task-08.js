const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onLogin);
function onLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("не всіполя заповнені");
    return;
  } else {
    const inputResult = { email: email.value, password: password.value };
    console.log(inputResult);
  }
  event.currentTarget.reset();
}
