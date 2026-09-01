import { describe, it, expect } from "vitest";
import {
    Empleado,
    EmpleadoFijo,
    EmpleadoPorHora,
    EmpleadoComision,
    calcularSueldos,
} from "./../parte 3/ej16-sueldos.js";

describe("Ejercicio 16 - EmpleadoFijo", () => {
    it("cobra el sueldo mensual fijo", () => {
        const empleado = new EmpleadoFijo("Juan", "Pérez", 1, 500000);
        expect(empleado.calcularSueldo()).toBe(500000);
    });
});

describe("Ejercicio 16 - EmpleadoPorHora", () => {
    it("cobra horas trabajadas por valor hora", () => {
        const empleado = new EmpleadoPorHora("Ana", "García", 2, 80, 1500);
        expect(empleado.calcularSueldo()).toBe(120000);
    });
});

describe("Ejercicio 16 - EmpleadoComision", () => {
    it("cobra un porcentaje de sus ventas", () => {
        const empleado = new EmpleadoComision("Pedro", "Ruiz", 3, 200000, 10);
        expect(empleado.calcularSueldo()).toBe(20000);
    });
});

// Clase de prueba, para testear calcularSueldos() sin depender de que las
// subclases concretas ya estén implementadas.
class EmpleadoStub extends Empleado {
    calcularSueldo: () => number;

    constructor(nombre: string, apellido: string, legajo: number, sueldo: number) {
        super(nombre, apellido, legajo);
        this.calcularSueldo = () => sueldo;
    }
}

describe("Ejercicio 16 - calcularSueldos", () => {
    it("suma el sueldo de todos los empleados usando reduce", () => {
        const empleados: Empleado[] = [
            new EmpleadoStub("A", "Uno", 1, 100),
            new EmpleadoStub("B", "Dos", 2, 250),
            new EmpleadoStub("C", "Tres", 3, 30),
        ];
        expect(calcularSueldos(empleados)).toBe(380);
    });

    it("devuelve 0 con un arreglo vacío", () => {
        expect(calcularSueldos([])).toBe(0);
    });

    it("funciona con empleados reales mezclados, vía la referencia Empleado[]", () => {
        const empleados: Empleado[] = [
            new EmpleadoFijo("Juan", "Pérez", 1, 500000),
            new EmpleadoPorHora("Ana", "García", 2, 80, 1500),
            new EmpleadoComision("Pedro", "Ruiz", 3, 200000, 10),
        ];
        expect(calcularSueldos(empleados)).toBe(500000 + 120000 + 20000);
    });
});
