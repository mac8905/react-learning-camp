// Importamos la función elevarAlCuadrado del módulo
import { elevarAlCuadrado } from './exercise-11.js'

// Definimos una función async para poder usar await
async function calcularYImprimirResultado() {
  try {
    // Llamamos a la función elevarAlCuadrado con el número 5
    const resultado = await elevarAlCuadrado(5)

    // Imprimimos el resultado por consola
    console.log('Resultado:', resultado)
  } catch (error) {
    // Capturamos cualquier error que pueda ocurrir
    console.error(error)
  }
}

// Llamamos a la función async para ejecutar el código
calcularYImprimirResultado()
