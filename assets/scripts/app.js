const defaultValue = 0;
let currentResult = defaultValue;

function add(x, y) {
  const result = x + y;
  alert('The result is: ' +  result);
}
add(3, 6);
add(5, 6);

currentResult += 4 + 5 / (3 * 2 - 1);
const description = `(${defaultValue} + 4 + 5 / (3 * 2 - 1)`;

outputResult(currentResult, description);

addBtn.addEventListener('click', add);