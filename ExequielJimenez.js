class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName = () => { return `${this.nombre} ${this.apellido}` }
    addMascota = (nuevamascota) => { this.mascotas.push(nuevamascota) }
    countMascotas = () => { return this.mascotas.length }
    addBook = (nuevonombre, nuevoAutor) => { this.libros.push({ nombre: nuevonombre, autor: nuevoAutor }) }
    getBookNames = () => { return this.libros.map((el) => el.nombre) }
}

const usuario1 = new Usuario("Juan", "Perez", [{ nombre: "El banquete", autor: "Platon" }, { nombre: "Metafisica", autor: "Aristoteles" }], ["perro", "gato"]);

console.log(usuario1.getFullName())
usuario1.addMascota("canario")
console.log(usuario1.countMascotas())
usuario1.addBook("Iliada", "Homero")
console.log(usuario1.getBookNames())

