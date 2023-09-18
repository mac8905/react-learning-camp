function sum(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function calculator(a, b, operation) {
  // operation valid values -> '+', '-', '*', '/'
  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('The input value is not a number')
    }

    a = Number(a)
    b = Number(b)

    switch (operation) {
      case '+':
        console.log(sum(a, b))
        break
      case '-':
        console.log(substract(a, b))
        break
      case '*':
        console.log(multiply(a, b))
        break
      case '/':
        console.log(divide(a, b))
        break
      default:
        throw new Error('Invalid operation')
    }
  } catch (error) {
    console.log(error.message)
  }
}

// whenever an operation cannot be processed by the calculator function, it should throw the following generic error
// throw new Error('Invalid operation')

// example call

calculator(1, 2, '+') // should work --> 3
calculator('1', 2, '+') // should work --> 3

calculator('a', 1, '+') // shouldn't be processed --> The input value is not a number
calculator(1, 2, 'hi') // shouldn't be processed --> Invalid operation

// operation could be the following -> number, string, [], {}, -infinity, infinity, NaN and you need to validate
// a,b could be the following -> number, string and you need to validate
