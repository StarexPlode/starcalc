const buttons = document.querySelector(".buttons");
const display = document.querySelector("#display");

const passcode = "1234";

buttons.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (value) {
        appendValue(value);
    }
    if (action) {
        doAction(action);
    }
})

let mode = "input";

function appendValue(value) {

    if (mode === "error") return;

    display.value += value;
    checkPasscode();
}

function checkPasscode() {
    if (display.value === passcode) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "calculator.html";
        doAction("clear");
    }
    else showError();
}
function doAction(action) {
    if (action === "clear") {
        display.value = ""
    }

    if (action === "backspace") {
        display.value = display.value.slice(0, -1);
    }
}

function showError() {
    if (display.value.length === passcode.length && display.value !== passcode) {
        doAction("clear");
        appendValue("Wrong Passcode!");
        mode = "error";
        setTimeout(() => {
            doAction("clear")
            mode = "input";
        }, 2000)
    }
}