const rollButton = document.getElementById("rollButton");
const resultElement = document.getElementById("result");

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    resultElement.textContent = `Result: ${randomNumber}`;
}

rollButton.addEventListener("click", rollDice);
