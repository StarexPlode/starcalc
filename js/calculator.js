if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
const display = document.querySelector("#display")
const buttons = document.querySelector(".buttons")


buttons.addEventListener("click", (e) => {
    const btn = e.target.closest("button")
    if (!btn) return;

    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (action === "clear") {
        clearDisplay();
    }

    if (action === "equals") {
        if (display.value === "") return;
        calculate();
    }

    if (action === "backspace") {
        backspace();
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
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error"

        setTimeout(() => {
            display.value = "";
        }, 1000)

        console.log(error)
    }
}

function backspace() {
    display.value = display.value.slice(0, -1)
}