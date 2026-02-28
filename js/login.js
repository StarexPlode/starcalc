const display = document.querySelector("#display")
const buttons = document.querySelector(".buttons")

const passcode = "1234";

buttons.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (value) {
        insertValue(value);
    }
    if (action) {
        doAction(action);
    }

    checkPasscode()
})

let displayMode = "input"

function insertValue(value) {
    if (displayMode === "error") return;

    display.value += value;
}
function doAction(action) {
    if (displayMode === "error") return;

    if (action === "clear") {
        display.value = ""
    }
    if (action === "backspace") {
        display.value = display.value.slice(0, -1)
    }
}
function checkPasscode() {
    if (display.value.length !== passcode.length) return;

    if (display.value === passcode) {
        doAction("clear");
        window.location.href = "calculator.html";
    }

    else if (display.value !== passcode) {
        doAction("clear");
        display.value = "Wrong Passcode!";
        displayMode = "error";

        setTimeout(() => {
            display.value = "";
            displayMode = "input"
        }, 2000)
    }
}