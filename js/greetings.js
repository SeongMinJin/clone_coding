const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASS = "hidden";
const USER_NAME_KEY = "userName";
const savedUserName = localStorage.getItem(USER_NAME_KEY);


function onSubmitEvent(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.innerText = `Nice to meet you ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
}




if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASS);
} else {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Nice to meet you ${savedUserName} !`;
}

loginForm.addEventListener("submit", onSubmitEvent);


