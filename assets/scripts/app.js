const defaultValue = 0;
let currentResult = defaultValue;

function add(x, y) {
  const result = x + y;
  return result;
}
currentResult = add(3, 6);

const description = `(${defaultValue} + 4 + 5 / (3 * 2 - 1)`;

outputResult(currentResult, description);

addBtn.addEventListener('click', add);