// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// How will you displayResult of a sum

// answer
function sum(num1, num2, fnToCall) { // change
  let result = num1 + num2;
  fnToCall(result);                  // change
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

sum(1, 2, displayResult);