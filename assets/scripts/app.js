const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const calDescription = `${currentResult} + ${userInput.value}`;
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
