const defaultValue = 0;
let currentResult = defaultValue;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
