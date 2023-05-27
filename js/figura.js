class Figura {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }

    calcularArea() {
        return this.area;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Rectangulo extends Figura {
    constructor(color, largo, ancho) {
        super(color);
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea() {
        return this.largo * this.ancho;
    }
}

let figura1;

const formFigura = document.querySelector("#formulario1");
formFigura.addEventListener("submit", (event) => {
    event.preventDefault();
    const color = document.getElementById("color").value;
    const area = document.getElementById("area").value;
    figura1 = new Figura(color, area);
    const mensaje1 = document.getElementById("mensaje1");
    mensaje1.textContent = `El color de la figura es ${color} y tiene un área de ${figura1.calcularArea()}`;
});

const formCirculo = document.querySelector("#formulario2");
formCirculo.addEventListener("submit", (event) => {
    event.preventDefault();
    const radio = document.getElementById("radio").value;
    const circulo1 = new Circulo(figura1.color, radio);
    const mensaje2 = document.getElementById("mensaje2");
    mensaje2.textContent = `El círculo tiene un color ${figura1.color} y su área es ${circulo1.calcularArea().toFixed(2)}`;
});

const formRectangulo = document.querySelector("#formulario3");
formRectangulo.addEventListener("submit", (event) => {
    event.preventDefault();
    const color = figura1.color;
    const largo = document.getElementById("largo").value;
    const ancho = document.getElementById("ancho").value;
    const rectangulo1 = new Rectangulo(color, largo, ancho);
    const mensaje3 = document.getElementById("mensaje3");
    mensaje3.textContent = `El rectángulo tiene un color ${color} y su área es: ${rectangulo1.calcularArea()}`;
});