const defaultValue = 0;
let currentResult = defaultValue;

currentResult += 4 + 5 / (3 * 2 - 1);
const description = `(${defaultValue} + 4 + 5 / (3 * 2 - 1)`;
const errorMessage = 'AnotherTxt! \n '  + ' Whehter';

outputResult(currentResult, errorMessage);