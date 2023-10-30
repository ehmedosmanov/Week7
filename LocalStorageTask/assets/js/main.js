const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const formObj = {
    username: username.value,
    password: password.value,
  };

  localStorage.setItem("formObj", JSON.stringify(formObj));
});

let newObj = localStorage.getItem("formObj");
let user = JSON.parse(newObj);

console.log(user);

if(newObj) {
    username.value = user.username
    password.value = user.password
}