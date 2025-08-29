const timeoutBtn = document.querySelector("#start-timeout");

timeoutBtn.addEventListener("click", () => {
  const timeoutResult = document.querySelector("#timeout-result");
  timeoutResult.textContent = "Waiting 5sec..";

  setTimeout(() => {
    timeoutResult.textContent = "Done!";
  }, 5000);
});

const startIntervaLBtn = document.querySelector("#start-setInterval");
const stopIntervaLBtn = document.querySelector("#stop-setInterval");

let counter = 0;
let intervalId;

startIntervaLBtn.addEventListener("click", () => {
  const intervalResult = document.querySelector("#interval-result");

  intervalId = setInterval(() => {
    counter++;
    intervalResult.textContent = `Counter: ${counter}`;
  }, 1000);
});

stopIntervaLBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

const saveLocalBtn = document.querySelector("#saveLocal");
saveLocalBtn.addEventListener("click", () => {
  const localInput = document.querySelector("#localInput");

  localStorage.setItem("username", localInput.value);
});

const loadLocalBtn = document.querySelector("#loadLocal");
loadLocalBtn.addEventListener("click", () => {
  const result = document.querySelector("#local-result");
  const value = localStorage.getItem("username");

  if (value) {
    result.textContent = `username: ${value}`;
  } else result.textContent = `No data found `;
});

document.querySelector("#clearLocal").addEventListener("click", () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("username");
  const result = document.querySelector("#local-result");
  result.textContent = `Cleared!`;
});

document.querySelector("#saveSession").addEventListener("click", () => {
  const sessionInput = document.querySelector("#sessionInput");
  sessionStorage.setItem("tempData", sessionInput.value);
});

document.querySelector("#loadSession").addEventListener("click", () => {
  const result = document.querySelector("#session-result");
  const value = sessionStorage.getItem("tempData");

  if (value) {
    result.textContent = `Session Data: ${value}`;
  } else result.textContent = `No data found `;
});

document.querySelector("#clearSession").addEventListener("click", () => {
  sessionStorage.removeItem("tempData");
  const result = document.querySelector("#session-result");
  result.textContent = `Cleared`;
});
