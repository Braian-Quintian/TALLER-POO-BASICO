class Empleado {
    constructor(nombre, edad, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.idEmpleado = Empleado.generarIdEmpleado();
    }

    calcularSalarioAnual() {
        return this.sueldo * 12;
    }

    static generarIdEmpleado() {
        if (!Empleado.lastId) {
            Empleado.lastId = 0;
        }
        Empleado.lastId++;
        return Empleado.lastId;
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnual() {
        const salarioMensualConBono = this.sueldo * 1.1;
        return salarioMensualConBono * 12;
    }
}

const formEmpleado = document.querySelector("#formulario1");
formEmpleado.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataEmpleado = new FormData(formEmpleado);
    const nombre = dataEmpleado.get("nombre");
    const edad = dataEmpleado.get("edad");
    const sueldo = dataEmpleado.get("sueldo");

    const empleado = new Empleado(nombre, edad, sueldo);
    const salarioAnual = empleado.calcularSalarioAnual();

    const formatter = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" });
    const salarioFormateado = formatter.format(salarioAnual);

    document.getElementById("mensaje1").textContent = `Salario Anual de ${empleado.nombre} (Edad: ${empleado.edad}): ${salarioFormateado}`;
});

const formGerente = document.querySelector("#formulario2");
formGerente.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataGerente = new FormData(formGerente);
    const nombreGerente = dataGerente.get("nombreGerente");
    const edadGerente = dataGerente.get("edadGerente");
    const sueldoGerente = dataGerente.get("sueldoGerente");
    const departamento = dataGerente.get("departamento");

    const gerente = new Gerente(nombreGerente, edadGerente, sueldoGerente, departamento);
    const salarioAnual = gerente.calcularSalarioAnual();

    const formatter = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" });
    const salarioFormateado = formatter.format(salarioAnual);

    document.getElementById("mensaje2").textContent = `Salario Anual del gerente ${gerente.nombre} (Edad: ${gerente.edad}) en el Departamento: ${gerente.departamento} es de: ${salarioFormateado}`;
});

const formGenerarIdEmpleado = document.querySelector("#formulario3");
formGenerarIdEmpleado.addEventListener("submit", (event) => {
    event.preventDefault();

    const idEmpleado = Empleado.generarIdEmpleado();
    document.getElementById("idEmpleado").textContent = `El ID generado para el empleado es: ${idEmpleado}`;
});
