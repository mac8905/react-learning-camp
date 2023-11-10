// Crear un array de números
const numeros = [1, 2, 3, 4, 5]

// Utilizar el método map para duplicar cada número del array
const numerosDuplicados = numeros.map((numero) => numero * 2)

// Utilizar el método filter para filtrar los números pares del array duplicado
const numerosPares = numerosDuplicados.filter((numero) => numero % 2 === 0)

// Imprimir los arrays por consola
console.log('Array original:', numeros)
console.log('Array duplicado:', numerosDuplicados)
console.log('Números pares:', numerosPares)
