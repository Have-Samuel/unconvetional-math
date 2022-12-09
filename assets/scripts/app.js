const defaultValue = 0;
let currentResult = defaultValue;
const logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function readAndWrite(operator, resultBeforeCal, calNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
  ) {
  logEntry = {
    operation: operationIdentifier,
    prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  readAndWrite('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  readAndWrite('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  readAndWrite('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  readAndWrite('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
