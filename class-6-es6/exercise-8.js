// Definimos un objeto que representa la información de una película
const pelicula = {
  titulo: 'Ejemplo de Película',
  genero: 'Drama',
  anioEstreno: 2022,
}

// Utilizamos destructuring para extraer la información en variables separadas
const { titulo, genero, anioEstreno } = pelicula

// Mostramos la información en la consola
console.log(`Título: ${titulo}`)
console.log(`Género: ${genero}`)
console.log(`Año de Estreno: ${anioEstreno}`)
