// Definición de la clase Persona
class Persona {
  // Constructor que recibe nombre y edad como parámetros
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

// Definición de la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
  // Constructor que llama al constructor de la clase padre (Persona) y agrega la propiedad curso
  constructor(nombre, edad, curso) {
    super(nombre, edad) // Llamada al constructor de Persona
    this.curso = curso
  }
}

// Creación de un objeto Estudiante con información ficticia
const estudianteEjemplo = new Estudiante('Juan', 20, 'Matemáticas')

// Impresión de la información del estudiante por consola
console.log('Nombre:', estudianteEjemplo.nombre)
console.log('Edad:', estudianteEjemplo.edad)
console.log('Curso:', estudianteEjemplo.curso)
