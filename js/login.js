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
function appendValue(value) {
    display.value += value
    checkPasscode();
}

function checkPasscode() {
    if (display.value === passcode) {
        window.location.href = "calculator.html";
        doAction("clear");
    }
}
function doAction(action) {
    if (action === "clear") {
        display.value = ""
    }

    if (action === "backspace") {
        display.value = display.value.slice(0, -1);
    }
}