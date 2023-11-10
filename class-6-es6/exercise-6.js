// Definición de la función que toma un array de números y devuelve la suma de ellos
const sumarArray = (numeros) => {
  // Utilizando el método reduce para sumar los elementos del array
  const suma = numeros.reduce((acumulador, numero) => {
    // Sumar el número actual al acumulador
    return acumulador + numero
  }, 0) // El segundo parámetro de reduce establece el valor inicial del acumulador, en este caso, 0

  // Devolver la suma total
  return suma
}

// Ejemplo de uso
const arrayDeNumeros = [1, 2, 3, 4, 5]
const resultado = sumarArray(arrayDeNumeros)

// Imprimir el resultado
console.log(resultado) // Salida esperada: 15 (1 + 2 + 3 + 4 + 5)
