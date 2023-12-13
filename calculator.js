function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
  return num1 - num2;
}

function quotient(num1, num2) {
  return num1 / num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function sqrt(num1) {
  return Math.sqrt(num1);
}

function factorial(num1){
  let factorial = 1
      while (num1 > 0){
        factorial = factorial * num1
        num1 = num1 - 1
      }
      return factorial
}

function calculate(expression) {
  const tokens = expression.split(" ");
  let num1;
  let num2;
  let operator;
  if (tokens.length === 3) {
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    operator = tokens[1];
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Not a number. Try again please!")
      return
    }
  } else if (tokens.length === 2) {
      operator = tokens[0]
      num1 = Number(tokens[1])
      if (Number.isNaN(num1)) {
        alert("Not a number. Try again please!")
        return
      }
  } else{
      alert("Not a valid expression. Please input one operation at a time.")
      return
  }
  if (operator === "+") {
      return sum(num1, num2);
  } else if (operator === "-") {
      return difference(num1, num2);
  } else if (operator === "/") {
      return quotient(num1, num2);
  } else if (operator === "*") {
      return product(num1, num2);
  } else if (operator === "**") {
      return power(num1, num2);
  } else if (operator === "%") {
      return remainder(num1, num2);
  } else if (operator === "sqrt") {
      return sqrt(num1);
  } else if (operator === "!"){
      return factorial(num1)
  }else{
      alert("Unrecognized operator. Please try again.")
    }
  }

  /* **************** DO NOT EDIT THE CODE BELOW **************** */
  /* ************************************************************ */
  /* **************** DO NOT EDIT THE CODE BELOW **************** */

  // When the Submit button is clicked, this code calls your `calculate` function
  // and then inserts the result on the HTML page.
  document.querySelector('#submitButton').addEventListener('click', () => {
    const result = calculate(document.querySelector('#expression').value);
    if (result !== undefined) {
      document.querySelector('#answer').innerText = result;
    }
  });
