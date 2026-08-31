/**
 * TESTS - PRÁCTICA 1 (TypeScript: tipos, arrays y callbacks)
 *
 * No modificar este archivo. Corré `npm test` para ver el progreso.
 *
 * Al principio todos los tests van a fallar (las funciones tiran
 * `Error("Implementar")`). A medida que completes cada función en
 * `ejercicios.ts`, su bloque de tests correspondiente debería pasar.
 *
 * Los valores esperados NO están "pisados a mano": se calculan acá mismo
 * a partir de los datos reales de `db.ts`, así que valen para cualquier
 * base de alumnos que le pongan.
 */

import { describe, it, expect } from "vitest";
import { alumnos, type Alumno } from "../models/db.js";
import * as ej from "../parte 1/ejercicios.js";

// -----------------------------------------------------------------------------
// Alumnos de prueba chicos y controlados, para los casos donde conviene
// no depender de los 1000 registros de la base real (empates, vacíos, etc).
// -----------------------------------------------------------------------------
const chicos: Alumno[] = [
    { legajo: 101, nombre: "Ana", apellido: "Pérez", edad: 20, email: "a@x.com", nota: 8, ciudad: "Rosario" },
    { legajo: 102, nombre: "Beto", apellido: "Gómez", edad: 17, email: "b@x.com", nota: 5, ciudad: "Rosario" },
    { legajo: 103, nombre: "Ana", apellido: "Ríos", edad: 22, email: "c@x.com", nota: 6, ciudad: "Córdoba" },
    { legajo: 104, nombre: "Caro", apellido: "Díaz", edad: 30, email: "d@x.com", nota: 8, ciudad: "Córdoba" },
];
const vacio: Alumno[] = [];

describe("Ejercicio 1 - obtenerNombres", () => {
    it("devuelve solo los nombres, en el mismo orden", () => {
        expect(ej.obtenerNombres(chicos)).toEqual(["Ana", "Beto", "Ana", "Caro"]);
    });

    it("funciona sobre la base completa (1000 alumnos)", () => {
        const esperado = alumnos.map((a) => a.nombre);
        expect(ej.obtenerNombres(alumnos)).toEqual(esperado);
    });

    it("no modifica el arreglo original", () => {
        const copia = [...chicos];
        ej.obtenerNombres(chicos);
        expect(chicos).toEqual(copia);
    });
});

describe("Ejercicio 2 - obtenerNombresCompletos", () => {
    it("concatena nombre y apellido", () => {
        expect(ej.obtenerNombresCompletos(chicos)).toEqual([
            "Ana Pérez",
            "Beto Gómez",
            "Ana Ríos",
            "Caro Díaz",
        ]);
    });

    it("funciona sobre la base completa", () => {
        const esperado = alumnos.map((a) => `${a.nombre} ${a.apellido}`);
        expect(ej.obtenerNombresCompletos(alumnos)).toEqual(esperado);
    });
});

describe("Ejercicio 3 - obtenerMayoresDeEdad", () => {
    it("filtra alumnos con 18 años o más", () => {
        const resultado = ej.obtenerMayoresDeEdad(chicos);
        expect(resultado.map((a) => a.legajo)).toEqual([101, 103, 104]);
    });

    it("coincide con el filtro esperado en la base completa", () => {
        const esperado = alumnos.filter((a) => a.edad >= 18);
        expect(ej.obtenerMayoresDeEdad(alumnos)).toEqual(esperado);
    });

    it("devuelve arreglo vacío si nadie es mayor de edad", () => {
        expect(ej.obtenerMayoresDeEdad([chicos[1]!])).toEqual([]);
    });
});

describe("Ejercicio 4 - obtenerAprobados", () => {
    it("filtra alumnos con nota >= 6", () => {
        const resultado = ej.obtenerAprobados(chicos);
        expect(resultado.map((a) => a.legajo)).toEqual([101, 103, 104]);
    });

    it("coincide con el filtro esperado en la base completa", () => {
        const esperado = alumnos.filter((a) => a.nota >= 6);
        expect(ej.obtenerAprobados(alumnos)).toEqual(esperado);
    });
});

describe("Ejercicio 5 - calcularPromedio", () => {
    it("calcula el promedio de un grupo chico", () => {
        // (8 + 5 + 6 + 8) / 4 = 6.75
        expect(ej.calcularPromedio(chicos)).toBeCloseTo(6.75, 5);
    });

    it("devuelve 0 si el arreglo está vacío", () => {
        expect(ej.calcularPromedio(vacio)).toBe(0);
    });

    it("coincide con el promedio esperado en la base completa", () => {
        const esperado = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;
        expect(ej.calcularPromedio(alumnos)).toBeCloseTo(esperado, 5);
    });
});

describe("Ejercicio 6 - obtenerMejorAlumno", () => {
    it("devuelve el alumno con la nota más alta", () => {
        const resultado = ej.obtenerMejorAlumno(chicos);
        expect(resultado?.legajo).toBe(101); // primer alumno con nota 8 (empate)
    });

    it("devuelve undefined si el arreglo está vacío", () => {
        expect(ej.obtenerMejorAlumno(vacio)).toBeUndefined();
    });

    it("coincide con el máximo esperado en la base completa", () => {
        const notaMaxima = Math.max(...alumnos.map((a) => a.nota));
        expect(ej.obtenerMejorAlumno(alumnos)?.nota).toBe(notaMaxima);
    });
});

describe("Ejercicio 7 - buscarPorLegajo", () => {
    it("encuentra un alumno existente", () => {
        expect(ej.buscarPorLegajo(chicos, 103)?.nombre).toBe("Ana");
        expect(ej.buscarPorLegajo(chicos, 103)?.apellido).toBe("Ríos");
    });

    it("devuelve undefined si no existe", () => {
        expect(ej.buscarPorLegajo(chicos, 999)).toBeUndefined();
    });

    it("funciona sobre la base completa", () => {
        const objetivo = alumnos[500]!;
        expect(ej.buscarPorLegajo(alumnos, objetivo.legajo)).toEqual(objetivo);
    });
});

describe("Ejercicio 8 - buscarPorNombre", () => {
    it("devuelve el primer alumno con coincidencia exacta", () => {
        expect(ej.buscarPorNombre(chicos, "Ana")?.legajo).toBe(101);
    });

    it("no hace coincidencias parciales", () => {
        expect(ej.buscarPorNombre(chicos, "An")).toBeUndefined();
    });

    it("devuelve undefined si no existe", () => {
        expect(ej.buscarPorNombre(chicos, "Zoe")).toBeUndefined();
    });
});

describe("Ejercicio 9 - existeDesaprobado", () => {
    it("devuelve true si hay al menos un desaprobado", () => {
        expect(ej.existeDesaprobado(chicos)).toBe(true); // Beto tiene 5
    });

    it("devuelve false si todos aprobaron", () => {
        const todosOk = chicos.filter((a) => a.nota >= 6);
        expect(ej.existeDesaprobado(todosOk)).toBe(false);
    });

    it("devuelve false con arreglo vacío", () => {
        expect(ej.existeDesaprobado(vacio)).toBe(false);
    });
});

describe("Ejercicio 10 - todosAprobaron", () => {
    it("devuelve false si hay algún desaprobado", () => {
        expect(ej.todosAprobaron(chicos)).toBe(false);
    });

    it("devuelve true si todos tienen nota >= 6", () => {
        const todosOk = chicos.filter((a) => a.nota >= 6);
        expect(ej.todosAprobaron(todosOk)).toBe(true);
    });

    it("devuelve true con arreglo vacío (vacuously true)", () => {
        expect(ej.todosAprobaron(vacio)).toBe(true);
    });
});

describe("Ejercicio 11 - cantidadAprobados", () => {
    it("cuenta los aprobados de un grupo chico", () => {
        expect(ej.cantidadAprobados(chicos)).toBe(3);
    });

    it("coincide con la cantidad esperada en la base completa", () => {
        const esperado = alumnos.filter((a) => a.nota >= 6).length;
        expect(ej.cantidadAprobados(alumnos)).toBe(esperado);
    });
});

describe("Ejercicio 12 - sumarEdades", () => {
    it("suma las edades de un grupo chico", () => {
        expect(ej.sumarEdades(chicos)).toBe(20 + 17 + 22 + 30);
    });

    it("devuelve 0 con arreglo vacío", () => {
        expect(ej.sumarEdades(vacio)).toBe(0);
    });

    it("coincide con la suma esperada en la base completa", () => {
        const esperado = alumnos.reduce((acc, a) => acc + a.edad, 0);
        expect(ej.sumarEdades(alumnos)).toBe(esperado);
    });
});

describe("Ejercicio 13 - obtenerAlumnosDeCiudad", () => {
    it("filtra por ciudad exacta", () => {
        const resultado = ej.obtenerAlumnosDeCiudad(chicos, "Córdoba");
        expect(resultado.map((a) => a.legajo)).toEqual([103, 104]);
    });

    it("devuelve vacío si nadie es de esa ciudad", () => {
        expect(ej.obtenerAlumnosDeCiudad(chicos, "Neuquén")).toEqual([]);
    });

    it("coincide con el filtro esperado en la base completa", () => {
        const esperado = alumnos.filter((a) => a.ciudad === "Bahía Blanca");
        expect(ej.obtenerAlumnosDeCiudad(alumnos, "Bahía Blanca")).toEqual(esperado);
    });
});

describe("Ejercicio 14 - calcularPromedioPorCiudad", () => {
    it("calcula el promedio de una ciudad", () => {
        // Córdoba: (6 + 8) / 2 = 7
        expect(ej.calcularPromedioPorCiudad(chicos, "Córdoba")).toBeCloseTo(7, 5);
    });

    it("devuelve 0 si no hay alumnos en esa ciudad", () => {
        expect(ej.calcularPromedioPorCiudad(chicos, "Neuquén")).toBe(0);
    });

    it("coincide con el promedio esperado en la base completa", () => {
        const deLaCiudad = alumnos.filter((a) => a.ciudad === "Rosario");
        const esperado = deLaCiudad.reduce((acc, a) => acc + a.nota, 0) / deLaCiudad.length;
        expect(ej.calcularPromedioPorCiudad(alumnos, "Rosario")).toBeCloseTo(esperado, 5);
    });
});

describe("Ejercicio 15 - transformar", () => {
    it("aplica el callback a cada elemento", () => {
        expect(ej.transformar([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
    });

    it("funciona con tipos distintos de entrada/salida", () => {
        expect(ej.transformar(chicos, (a) => a.nombre.toUpperCase())).toEqual([
            "ANA",
            "BETO",
            "ANA",
            "CARO",
        ]);
    });

    it("devuelve arreglo vacío si la entrada está vacía", () => {
        expect(ej.transformar([] as number[], (n) => n * 2)).toEqual([]);
    });
});

describe("Ejercicio 16 - filtrar", () => {
    it("devuelve solo los elementos que cumplen el callback", () => {
        expect(ej.filtrar([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
    });

    it("funciona con objetos Alumno", () => {
        const resultado = ej.filtrar(chicos, (a) => a.edad < 18);
        expect(resultado.map((a) => a.legajo)).toEqual([102]);
    });
});

describe("Ejercicio 17 - buscar", () => {
    it("devuelve el primer elemento que cumple el criterio", () => {
        expect(ej.buscar([5, 8, 12, 3], (n) => n > 6)).toBe(8);
    });

    it("devuelve undefined si ninguno cumple", () => {
        expect(ej.buscar([1, 2, 3], (n) => n > 100)).toBeUndefined();
    });
});

describe("Ejercicio 18 - calcularTotal", () => {
    it("suma edades usando el callback", () => {
        expect(ej.calcularTotal(chicos, (a) => a.edad)).toBe(20 + 17 + 22 + 30);
    });

    it("suma notas usando el callback", () => {
        expect(ej.calcularTotal(chicos, (a) => a.nota)).toBeCloseTo(8 + 5 + 6 + 8, 5);
    });

    it("devuelve 0 con arreglo vacío", () => {
        expect(ej.calcularTotal(vacio, (a) => a.edad)).toBe(0);
    });
});

describe("Ejercicio 19 - agruparPorCiudad", () => {
    it("agrupa correctamente un grupo chico", () => {
        const resultado = ej.agruparPorCiudad(chicos);
        expect(Object.keys(resultado).sort()).toEqual(["Córdoba", "Rosario"]);
        expect(resultado["Rosario"]?.map((a) => a.legajo)).toEqual([101, 102]);
        expect(resultado["Córdoba"]?.map((a) => a.legajo)).toEqual([103, 104]);
    });

    it("cada alumno de la base completa aparece en su ciudad, una sola vez", () => {
        const resultado = ej.agruparPorCiudad(alumnos);
        const totalAgrupado = Object.values(resultado).reduce((acc, grupo) => acc + grupo.length, 0);
        expect(totalAgrupado).toBe(alumnos.length);

        const ciudadesEsperadas = new Set(alumnos.map((a) => a.ciudad));
        expect(new Set(Object.keys(resultado))).toEqual(ciudadesEsperadas);

        const muestra = alumnos[123]!;
        expect(resultado[muestra.ciudad]).toContainEqual(muestra);
    });
});

describe("Ejercicio 20 - obtenerEstadisticas", () => {
    it("calcula estadísticas correctas para un grupo chico", () => {
        const stats = ej.obtenerEstadisticas(chicos);
        expect(stats.cantidadTotal).toBe(4);
        expect(stats.cantidadAprobados).toBe(3);
        expect(stats.cantidadDesaprobados).toBe(1);
        expect(stats.promedio).toBeCloseTo(6.75, 5);
        expect(stats.mejorAlumno?.legajo).toBe(101);
    });

    it("los contadores son consistentes con el total, en la base completa", () => {
        const stats = ej.obtenerEstadisticas(alumnos);
        expect(stats.cantidadTotal).toBe(alumnos.length);
        expect(stats.cantidadAprobados + stats.cantidadDesaprobados).toBe(stats.cantidadTotal);

        const esperadoAprobados = alumnos.filter((a) => a.nota >= 6).length;
        expect(stats.cantidadAprobados).toBe(esperadoAprobados);

        const esperadoPromedio = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;
        expect(stats.promedio).toBeCloseTo(esperadoPromedio, 5);

        const notaMaxima = Math.max(...alumnos.map((a) => a.nota));
        expect(stats.mejorAlumno?.nota).toBe(notaMaxima);
    });
});
