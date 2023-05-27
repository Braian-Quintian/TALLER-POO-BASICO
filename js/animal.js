class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        const mensaje1 = document.getElementById("mensaje1");
        mensaje1.textContent = `El ${this.nombre} está haciendo un sonido.`;
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    moverCola() {
        const mensaje2 = document.getElementById("mensaje2");
        mensaje2.textContent = `El perro ${this.nombre} de raza ${this.raza} está moviendo la cola.`;
    }
}

const formAnimal = document.querySelector("#formulario1");
formAnimal.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const nombreAnimal = data.get("nombreAnimal");
    const edadAnimal = data.get("edadAnimal");

    const animal1 = new Animal(nombreAnimal, edadAnimal);
    animal1.hacerSonido();
});

const formPerro = document.querySelector("#formulario2");
formPerro.addEventListener("submit", (event) => {
    event.preventDefault();
    const dataAnimal = new FormData(document.querySelector("#formulario1"));
    const nombreAnimal = dataAnimal.get("nombreAnimal");
    const edadAnimal = dataAnimal.get("edadAnimal");

    const dataPerro = new FormData(event.target);
    const razaPerro = dataPerro.get("razaPerro");

    const perro1 = new Perro(nombreAnimal, edadAnimal, razaPerro);
    perro1.hacerSonido();
    perro1.moverCola();
});