class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad += 10;
    }

    static convertirKmHEnMph(velocidadKmH) {
        return velocidadKmH / 1.60934;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar() {
        this.velocidad += 20;
    }
}

const formVehiculo = document.querySelector("#formulario1");
formVehiculo.addEventListener("submit", (event) => {
    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;

    const vehiculo = new Vehiculo(marca, modelo, 0);
    vehiculo.acelerar();

    const mensaje = document.getElementById("mensaje1");
    mensaje.textContent = `El vehículo ${marca} de modelo ${modelo} se transporta a una aceleración de ${vehiculo.velocidad} km/h`;
});

const formCoche = document.querySelector("#formulario2");
formCoche.addEventListener("submit", (event) => {
    event.preventDefault();

    const marcaCoche = document.getElementById("marcaCoche").value;
    const modeloCoche = document.getElementById("modeloCoche").value;
    const combustible = document.getElementById("combustible").value;

    const coche = new Coche(marcaCoche, modeloCoche, 0, combustible);
    coche.acelerar();

    const mensaje = document.getElementById("mensaje2");
    mensaje.textContent = `El coche ${marcaCoche} de modelo ${modeloCoche} se transporta a una aceleración de ${coche.velocidad} km/h`;
});

const formConvertir = document.querySelector("#formulario3");
formConvertir.addEventListener("submit", (event) => {
    event.preventDefault();

    const velocidadKmH = parseFloat(document.getElementById("velocidadKmH").value);

    const velocidadMph = Vehiculo.convertirKmHEnMph(velocidadKmH);
    const mensaje = document.getElementById("mensaje3");
    mensaje.textContent = `La velocidad de ${velocidadKmH} km/h equivale a ${velocidadMph.toFixed(2)} mph`;
});
