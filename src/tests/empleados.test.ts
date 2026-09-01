import { describe, it, expect } from "vitest";
import {
    Empleado,
    EmpleadoTiempoCompleto,
    EmpleadoMedioTiempo,
    EmpleadoPorComision,
} from "../parte 3/empleados.js";

describe("Ejercicio 13 - EmpleadoTiempoCompleto", () => {
    it("cobra el sueldo básico", () => {
        const empleado = new EmpleadoTiempoCompleto("Juan", "Pérez", 1, 500000);
        expect(empleado.calcularSueldo()).toBe(500000);
        expect(empleado.nombre).toBe("Juan");
        expect(empleado.apellido).toBe("Pérez");
        expect(empleado.legajo).toBe(1);
    });
});

describe("Ejercicio 13 - EmpleadoMedioTiempo", () => {
    it("cobra horas trabajadas por valor hora", () => {
        const empleado = new EmpleadoMedioTiempo("Ana", "García", 2, 80, 1500);
        expect(empleado.calcularSueldo()).toBe(80 * 1500);
    });

    it("con 0 horas trabajadas cobra 0", () => {
        const empleado = new EmpleadoMedioTiempo("Ana", "García", 2, 0, 1500);
        expect(empleado.calcularSueldo()).toBe(0);
    });
});

describe("Ejercicio 13 - EmpleadoPorComision", () => {
    it("cobra un porcentaje de sus ventas", () => {
        const empleado = new EmpleadoPorComision("Pedro", "Ruiz", 3, 200000, 10);
        expect(empleado.calcularSueldo()).toBe(20000);
    });

    it("con 0% de comisión cobra 0", () => {
        const empleado = new EmpleadoPorComision("Pedro", "Ruiz", 3, 200000, 0);
        expect(empleado.calcularSueldo()).toBe(0);
    });
});

describe("Ejercicio 13 - polimorfismo", () => {
    it("un arreglo de Empleado mixto calcula el total de la nómina", () => {
        const empleados: Empleado[] = [
            new EmpleadoTiempoCompleto("Juan", "Pérez", 1, 500000),
            new EmpleadoMedioTiempo("Ana", "García", 2, 80, 1500),
            new EmpleadoPorComision("Pedro", "Ruiz", 3, 200000, 10),
        ];

        const totalNomina = empleados.reduce((acc, e) => acc + e.calcularSueldo(), 0);
        expect(totalNomina).toBe(500000 + 80 * 1500 + 20000);
    });

    it("cada empleado calcula su sueldo según su propio tipo", () => {
        const empleados: Empleado[] = [
            new EmpleadoTiempoCompleto("Juan", "Pérez", 1, 100),
            new EmpleadoMedioTiempo("Ana", "García", 2, 10, 10),
        ];
        expect(empleados.map((e) => e.calcularSueldo())).toEqual([100, 100]);
    });
});
