// Crear un módulo utilizando la sintaxis de ES6
// Se exporta una función llamada "elevarAlCuadrado"
export function elevarAlCuadrado(numero) {
  // Retorna una nueva promesa que toma dos parámetros: resolve y reject
  return new Promise((resolve, reject) => {
    // Verifica si el parámetro es un número
    if (typeof numero === 'number') {
      // Calcula el resultado elevando el número al cuadrado
      const resultado = Math.pow(numero, 2)

      // Resuelve la promesa con el resultado
      resolve(resultado)
    } else {
      // Si el parámetro no es un número, rechaza la promesa con un mensaje de error
      reject('Error: El parámetro no es un número')
    }
  })
}

// Ejemplo de uso del módulo
// Llamamos a la función "elevarAlCuadrado" con un número
elevarAlCuadrado(5)
  .then((resultado) => {
    // La promesa se resuelve correctamente, imprimimos el resultado
    console.log('Resultado:', resultado)
  })
  .catch((error) => {
    // La promesa es rechazada, imprimimos el mensaje de error
    console.error(error)
  })
