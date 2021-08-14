
const email = document.getElementById("email");
const body = document.getElementById("body");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    alert(`email=${email.value}&body=${body.value}`)
})