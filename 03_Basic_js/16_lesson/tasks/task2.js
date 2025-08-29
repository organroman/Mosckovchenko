// Сделать форму логина с сохранением данных в localStorage.
const body = document.querySelector("body");

const nicknameInput = document.createElement("input");
nicknameInput.id = "nickname";
const nicknameLabel = document.createElement("label");
nicknameLabel.htmlFor = "nickname";
nicknameLabel.innerText = "Nickname";
body.append(nicknameLabel);
body.append(nicknameInput);

const passwordInput = document.createElement("input");
passwordInput.id = "password";
const passwordLabel = document.createElement("label");
passwordLabel.htmlFor = "password";
passwordLabel.innerText = "Password";
body.append(passwordLabel);
body.append(passwordInput);

const button = document.createElement("button");
button.innerText = "Save";
body.append(button);

const nicknameLure = localStorage.getItem("nickname");
if (nicknameLure != null) {
  nicknameInput.value = nicknameLure;
}

const passwordLure = localStorage.getItem("password");
if (passwordLure != null) {
  passwordInput.value = passwordLure;
}
button.addEventListener("click", (e) => {
  const nicknameValue = nicknameInput.value.trim();
  const password = passwordInput.value.trim();
  const message = document.createElement("p");
  body.append(message);
  if (!nicknameValue || !password) {
    message.textContent = "Заповни поле по-братськи";
    message.style.color = "red ";
    return;
  }
  localStorage.setItem("nickname", nicknameValue);
  localStorage.setItem("password", password);
  message.textContent = "Saved";
  message.style.color = "green";
  nicknameInput.value = ``;
  passwordInput.value = ``;
});
