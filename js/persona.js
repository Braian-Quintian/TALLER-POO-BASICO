class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        const mensaje1 = document.getElementById("mensaje1");
        mensaje1.textContent = `Hola soy ${this.nombre}, tengo ${this.edad} años y soy ${this.sexo}`;
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        const mensaje2 = document.getElementById("mensaje2");
        let mensaje = `Hola soy ${this.nombre}, tengo ${this.edad} años, soy ${this.sexo} y tengo la carrera de ${this.carrera}`;
        mensaje2.textContent = mensaje;
    }
}

const formPersona = document.querySelector("#formulario1");
formPersona.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const persona1 = new Persona(
        data.get("nombre"),
        data.get("edad"),
        data.get("sexo")
    );
    persona1.saludar();
});

const formEstudiante = document.querySelector("#formulario2");
formEstudiante.addEventListener("submit", (event) => {
    event.preventDefault();
    const dataPersona = new FormData(document.querySelector("#formulario1"));
    const dataEstudiante = new FormData(event.target);

    const persona1 = new Persona(
        dataPersona.get("nombre"),
        dataPersona.get("edad"),
        dataPersona.get("sexo")
    )

    estudiante1 = new Estudiante(
        persona1.nombre,
        persona1.edad,
        persona1.sexo,
        dataEstudiante.get("carrera")
    );

    persona1.saludar();
    estudiante1.estudiar();
});

const formMetodoEstatico = document.querySelector("#formulario3");
formMetodoEstatico.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataPersona = new FormData(document.querySelector("#formulario1"));
    const edad = parseInt(dataPersona.get("edad"));

    const mensaje3 = document.getElementById("mensaje3");
    mensaje3.textContent = `¿Es mayor de edad?: ${Persona.esMayorDeEdad(edad)}`;
});