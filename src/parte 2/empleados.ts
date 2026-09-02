/**
 * EJERCICIO 13 - Clase abstracta Empleado
 * ---------------------------------------------------------------------------
 * Cada tipo de empleado calcula su sueldo de una forma distinta, pero todos
 * comparten nombre/apellido/legajo y el contrato calcularSueldo().
 */
export abstract class Empleado {
    constructor(
        public nombre: string,
        public apellido: string,
        public legajo: number
    ) {}

    abstract calcularSueldo(): number;
}

export class EmpleadoTiempoCompleto extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private sueldoBasico: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: cobra el sueldo básico, sin más cálculo.
        throw new Error("Implementar");
    }
}

export class EmpleadoMedioTiempo extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private horasTrabajadas: number,
        private valorHora: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: sueldo = horasTrabajadas * valorHora
        throw new Error("Implementar");
    }
}

export class EmpleadoPorComision extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private ventasTotales: number,
        private porcentajeComision: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: sueldo = ventasTotales * (porcentajeComision / 100)
        throw new Error("Implementar");
    }
}
