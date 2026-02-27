const form = document.querySelector(".form");
const id = document.querySelector("#id");
const pass = document.querySelector("#password");

const correctId = "admin";
const correctPass = "1234";

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const enteredId = id.value.trim();
    const enteredPass = pass.value.trim();
    
    if (enteredId === correctId && enteredPass === correctPass) {
        window.location.href = "calculator.html";
    } else {
        errorDisplay();
    }
})

function errorDisplay() {
        id.type = "text";
        id.value = "Error";

        pass.type = "text";
        pass.value = "Error"

        setTimeout(() => {
            id.value = "";
            pass.value = "";

            id.type = "password";
            pass.type = "password";
        }, 1000)
}