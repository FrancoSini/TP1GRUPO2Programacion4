/**
 * EJERCICIO 16 - Sistema de empleados
 * ---------------------------------------------------------------------------
 * Acá se combinan: abstract + herencia + polimorfismo + reduce.
 *
 * Nota: esta clase `Empleado` es independiente de la de
 * `empleados.ts` (Parte 2) — no la reutilices, son ejercicios distintos.
 */
export abstract class Empleado {
    constructor(
        public nombre: string,
        public apellido: string,
        public legajo: number
    ) {}

    abstract calcularSueldo(): number;
}

export class EmpleadoFijo extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private sueldoMensual: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: cobra el sueldo mensual, sin más cálculo.
        throw new Error("Implementar");
    }
}

export class EmpleadoPorHora extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private horas: number,
        private valorHora: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: sueldo = horas * valorHora
        throw new Error("Implementar");
    }
}

export class EmpleadoComision extends Empleado {
    constructor(
        nombre: string,
        apellido: string,
        legajo: number,
        private ventas: number,
        private porcentajeComision: number
    ) {
        super(nombre, apellido, legajo);
    }

    calcularSueldo(): number {
        // TODO: sueldo = ventas * (porcentajeComision / 100)
        throw new Error("Implementar");
    }
}

/**
 * Costo total de sueldos de todos los empleados recibidos.
 * Resolver utilizando reduce.
 */
export function calcularSueldos(empleados: Empleado[]): number {
    // TODO
    throw new Error("Implementar");
}
