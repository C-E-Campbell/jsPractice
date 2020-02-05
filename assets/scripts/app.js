const defaultResult = 0;
let currentResult = defaultResult;

let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;

addBtn.addEventListener("click", add);

function add() {
  currentResult = currentResult + Number(userInput.value);
  outputResult(currentResult, calculationDescription);
}
