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

function sqrt(num) {
  return Math.sqrt(num);
}

function calculate(expression) {
  const tokens = expression.split(" ");
  let num1;
  let num2;
  let operator;
  if (tokens.length = 3) {
    num1 = Number(token[0]);
    num2 = Number(token[2]);
    operator = token[1];
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Not a number. Try again please!")
      return
    }
    } else if (tokens.length = 2) {
      operator = token[0]
      num1 = Number(token[1])
      if (Number.isNaN(num1)) {
        alert("Not a number. Try again please!")
        return
      }
    } else{
      alert("Not a valid expression. Please input one operation at a time.")
      return
    }
    if (operator === "+") {
      sum(num1, num2);
    } else if (operator === "-") {
      difference(num1, num2);
    } else if (operator === "/") {
      quotient(num1, num2);
    } else if (operator === "*") {
      product(num1, num2);
    } else if (operator === "**") {
      power(num1, num2);
    } else if (operator === "%") {
      remainder(num1, num2);
    } else if (operator === "sqrt") {
      sqrt(num1);
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
