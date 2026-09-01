import { describe, it, expect } from "vitest";
import {
    crearAlumnoInterface,
    crearAlumnoType,
    type AlumnoInterface,
    type AlumnoType,
} from "../parte 2/ej07-tipos-interfaces.js";

describe("Ejercicio 7 - crearAlumnoInterface", () => {
    it("construye el objeto con los datos recibidos", () => {
        const alumno = crearAlumnoInterface(1, "Juan", "Pérez", 20, "juan@mail.com");
        expect(alumno).toEqual({
            legajo: 1,
            nombre: "Juan",
            apellido: "Pérez",
            edad: 20,
            email: "juan@mail.com",
        });
    });

    it("funciona con distintos valores", () => {
        const alumno = crearAlumnoInterface(99, "Ana", "Gómez", 31, "ana@mail.com");
        expect(alumno.legajo).toBe(99);
        expect(alumno.nombre).toBe("Ana");
        expect(alumno.apellido).toBe("Gómez");
        expect(alumno.edad).toBe(31);
        expect(alumno.email).toBe("ana@mail.com");
    });
});

describe("Ejercicio 7 - crearAlumnoType", () => {
    it("construye el objeto con los datos recibidos", () => {
        const alumno = crearAlumnoType(2, "Beto", "Ruiz", 25, "beto@mail.com");
        expect(alumno).toEqual({
            legajo: 2,
            nombre: "Beto",
            apellido: "Ruiz",
            edad: 25,
            email: "beto@mail.com",
        });
    });
});

describe("Ejercicio 7 - compatibilidad estructural", () => {
    it("un AlumnoType cumple la forma de AlumnoInterface y viceversa (chequeo de compilación)", () => {
        // Si esto compila, es porque interface y type describen la misma forma
        // de objeto (tipado estructural): TypeScript no distingue en runtime
        // entre uno y otro.
        const comoInterface: AlumnoInterface = crearAlumnoType(3, "Caro", "Díaz", 40, "caro@mail.com");
        const comoType: AlumnoType = crearAlumnoInterface(4, "Leo", "Sosa", 22, "leo@mail.com");

        expect(comoInterface.nombre).toBe("Caro");
        expect(comoType.nombre).toBe("Leo");
    });
});
