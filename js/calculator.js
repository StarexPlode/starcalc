const display = document.querySelector("#display")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    const btn = e.target.closest("button")

    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
        clearDisplay();
    }

    if (action === "equals") {
        calculate();
    }

    if (value) {
        appendValue(value);
    }
})

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}
