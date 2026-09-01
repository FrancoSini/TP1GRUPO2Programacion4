import { describe, it, expect } from "vitest";
import { Alumno, type Materia } from "../parte 2/clase-alumno.js";

describe("Ejercicio 8 - Alumno básico", () => {
    it("asigna los atributos recibidos en el constructor", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        expect(alumno.legajo).toBe(1);
        expect(alumno.nombre).toBe("Juan");
        expect(alumno.apellido).toBe("Pérez");
        expect(alumno.email).toBe("juan@mail.com");
    });

    it("getNombreCompleto concatena nombre y apellido", () => {
        const alumno = new Alumno(2, "María", "García", 22, "maria@mail.com");
        expect(alumno.getNombreCompleto()).toBe("María García");
    });

    it("esMayorDeEdad devuelve true con 18 años o más", () => {
        const alumno = new Alumno(3, "Pedro", "Ruiz", 18, "pedro@mail.com");
        expect(alumno.esMayorDeEdad()).toBe(true);
    });

    it("esMayorDeEdad devuelve false con menos de 18 años", () => {
        const alumno = new Alumno(4, "Lucía", "Díaz", 16, "lucia@mail.com");
        expect(alumno.esMayorDeEdad()).toBe(false);
    });

    it("se pueden crear varios alumnos y guardarlos en un arreglo", () => {
        const alumnos: Alumno[] = [
            new Alumno(10, "A", "Uno", 20, "a@mail.com"),
            new Alumno(11, "B", "Dos", 21, "b@mail.com"),
            new Alumno(12, "C", "Tres", 22, "c@mail.com"),
        ];
        expect(alumnos).toHaveLength(3);
        expect(alumnos.map((a) => a.getNombreCompleto())).toEqual([
            "A Uno",
            "B Dos",
            "C Tres",
        ]);
    });
});

describe("Ejercicio 9 - encapsulamiento de edad", () => {
    it("getEdad devuelve la edad pasada al constructor", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        expect(alumno.getEdad()).toBe(30);
    });

    it("setEdad actualiza la edad", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        alumno.setEdad(45);
        expect(alumno.getEdad()).toBe(45);
    });

    it("setEdad afecta el resultado de esMayorDeEdad", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        alumno.setEdad(15);
        expect(alumno.esMayorDeEdad()).toBe(false);
    });

    it("setEdad rechaza edades negativas", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        expect(() => alumno.setEdad(-1)).toThrow();
        expect(alumno.getEdad()).toBe(30); // no cambió
    });

    it("setEdad rechaza edades mayores a 120", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        expect(() => alumno.setEdad(121)).toThrow();
        expect(alumno.getEdad()).toBe(30); // no cambió
    });

    it("setEdad acepta los límites válidos (0 y 120)", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 30, "juan@mail.com");
        alumno.setEdad(0);
        expect(alumno.getEdad()).toBe(0);
        alumno.setEdad(120);
        expect(alumno.getEdad()).toBe(120);
    });
});

describe("Ejercicio 10 - materias", () => {
    const materia1: Materia = { codigo: 1, nombre: "Programación III", horas: 96 };
    const materia2: Materia = { codigo: 2, nombre: "Bases de Datos", horas: 64 };

    it("empieza sin materias", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        expect(alumno.cantidadMaterias()).toBe(0);
        expect(alumno.getMaterias()).toEqual([]);
    });

    it("agregarMateria suma una materia inscripta", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        alumno.agregarMateria(materia1);
        expect(alumno.cantidadMaterias()).toBe(1);
        expect(alumno.estaInscripto(1)).toBe(true);
        expect(alumno.estaInscripto(99)).toBe(false);
    });

    it("agregarMateria puede sumar varias", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        alumno.agregarMateria(materia1);
        alumno.agregarMateria(materia2);
        expect(alumno.cantidadMaterias()).toBe(2);
        expect(alumno.getMaterias().map((m) => m.codigo).sort()).toEqual([1, 2]);
    });

    it("getMaterias no expone el arreglo interno (devuelve una copia)", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        alumno.agregarMateria(materia1);
        const materias = alumno.getMaterias();
        materias.push(materia2); // modificar la copia no debería afectar al alumno
        expect(alumno.cantidadMaterias()).toBe(1);
    });

    it("quitarMateria elimina la materia y la devuelve", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        alumno.agregarMateria(materia1);
        alumno.agregarMateria(materia2);

        const quitada = alumno.quitarMateria(1);
        expect(quitada).toEqual(materia1);
        expect(alumno.cantidadMaterias()).toBe(1);
        expect(alumno.estaInscripto(1)).toBe(false);
        expect(alumno.estaInscripto(2)).toBe(true);
    });

    it("quitarMateria devuelve undefined si el código no existe", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", 20, "juan@mail.com");
        alumno.agregarMateria(materia1);
        expect(alumno.quitarMateria(999)).toBeUndefined();
        expect(alumno.cantidadMaterias()).toBe(1);
    });
});
