// Elementos del DOM
let display = document.getElementById('display')

// Variables de la calculadora
let currentInput = ''
let currentOperation = ''
let ans = 0

// Función para añadir un valor al display
function appendToDisplay(value) {
  if (value === 'ANS') {
    currentInput = ans.toString()
  } else {
    currentInput =
      currentInput === '0' && value !== '.' ? value : currentInput + value
  }
  display.textContent = currentInput
}

// Función para realizar una operación
function operate(operation) {
  if (currentOperation !== '') {
    calculate()
  }
  currentOperation = operation
  ans = Number(currentInput)
  currentInput = ''
}

// Función para realizar el cálculo
function calculate() {
  if (currentOperation !== '' && currentInput !== '') {
    let secondOperand = Number(currentInput)

    switch (currentOperation) {
      case '+':
        ans = sum(ans, secondOperand)
        break
      case '-':
        ans = subtract(ans, secondOperand)
        break
      case '*':
        ans = multiply(ans, secondOperand)
        break
      case '/':
        ans = divide(ans, secondOperand)
        break
      default:
        break
    }

    currentOperation = ''
    currentInput = ''
    display.textContent = ans
  }
}

// Función para limpiar el display y reiniciar la calculadora
function clearDisplay() {
  currentInput = ''
  currentOperation = ''
  ans = 0
  display.textContent = '0'
}

// Operaciones matemáticas
function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    alert('Error: Cannot divide by zero')
    clearDisplay()
    return 0
  } else {
    return a / b
  }
}
