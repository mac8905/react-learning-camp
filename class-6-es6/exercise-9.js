// Definimos un objeto que representa la información de una película
const pelicula = {
  titulo: 'Ejemplo de Película',
  genero: 'Drama',
  anioEstreno: 2022,
}

// Utilizamos destructuring para extraer la información en variables separadas
const { titulo, genero, anioEstreno } = pelicula

// Creamos una función que toma un objeto de película y devuelve una cadena formateada
const obtenerInformacionPelicula = ({ titulo, genero, anioEstreno }) => {
  // Utilizamos template strings para construir la cadena de información
  return `Título: ${titulo}, Género: ${genero}, Año de Estreno: ${anioEstreno}`
}

// Llamamos a la función y mostramos la información en la consola
console.log(obtenerInformacionPelicula(pelicula))
