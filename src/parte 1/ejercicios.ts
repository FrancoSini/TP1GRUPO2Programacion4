/**
 * PRÁCTICA 1 - TYPESCRIPT: TIPOS, ARRAYS Y CALLBACKS
 *
 * INSTRUCCIONES GENERALES
 * -----------------------
 * - No modificar db.ts.
 * - Importar los datos desde ./db.js (si el proyecto usa NodeNext/ESM)
 *   o adaptar la extensión según la configuración del proyecto.
 * - Completar únicamente las funciones marcadas con TODO.
 * - Evitar modificar los arreglos originales.
 * - Resolver los ejercicios utilizando métodos de arrays siempre que sea posible.
 * - Se espera el uso de map, filter, find, some, every y reduce.
 * - En los ejercicios con callbacks, la función debe recibir el callback como parámetro.
 *
 * La base contiene 1000 alumnos.
 */

import { alumnos, type Alumno } from "../models/db.js";

// -----------------------------------------------------------------------------
// EJERCICIO 1 - Obtener nombres
// -----------------------------------------------------------------------------
// Implementar una función que reciba un arreglo de alumnos y devuelva un arreglo
// que contenga únicamente los nombres de los alumnos.
//
// Ejemplo:
// obtenerNombres(alumnos)
// -> ["Juan", "María", "Pedro", ...]
export function obtenerNombres(alumnos: Alumno[]): string[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 2 - Obtener nombres completos
// -----------------------------------------------------------------------------
// Devolver un arreglo con el nombre y apellido de cada alumno.
//
// Ejemplo:
// ["Juan Pérez", "María García", ...]
export function obtenerNombresCompletos(alumnos: Alumno[]): string[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 3 - Alumnos mayores de edad
// -----------------------------------------------------------------------------
// Devolver solamente los alumnos que tengan 18 años o más.
export function obtenerMayoresDeEdad(alumnos: Alumno[]): Alumno[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 4 - Alumnos aprobados
// -----------------------------------------------------------------------------
// Un alumno aprueba cuando su nota es mayor o igual a 6.
// Devolver los alumnos aprobados.
export function obtenerAprobados(alumnos: Alumno[]): Alumno[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 5 - Promedio
// -----------------------------------------------------------------------------
// Calcular el promedio de las notas de todos los alumnos.
// Utilizar reduce.
//
// Si el arreglo está vacío, devolver 0.
export function calcularPromedio(alumnos: Alumno[]): number {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 6 - Mejor alumno
// -----------------------------------------------------------------------------
// Devolver el alumno que tenga la nota más alta.
// Si el arreglo está vacío, devolver undefined.
export function obtenerMejorAlumno(alumnos: Alumno[]): Alumno | undefined {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 7 - Buscar por legajo
// -----------------------------------------------------------------------------
// Buscar un alumno por su número de legajo.
// Si no existe, devolver undefined.
export function buscarPorLegajo(
    alumnos: Alumno[],
    legajo: number
): Alumno | undefined {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 8 - Buscar por nombre
// -----------------------------------------------------------------------------
// Buscar el primer alumno cuyo nombre coincida con el recibido.
// La comparación debe ser exacta.
export function buscarPorNombre(
    alumnos: Alumno[],
    nombre: string
): Alumno | undefined {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 9 - ¿Existe algún alumno desaprobado?
// -----------------------------------------------------------------------------
// Devolver true si existe al menos un alumno con nota menor a 6.
// Resolver utilizando some.
export function existeDesaprobado(alumnos: Alumno[]): boolean {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 10 - ¿Todos aprobaron?
// -----------------------------------------------------------------------------
// Devolver true solamente si todos los alumnos tienen nota mayor o igual a 6.
// Resolver utilizando every.
export function todosAprobaron(alumnos: Alumno[]): boolean {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 11 - Cantidad de alumnos aprobados
// -----------------------------------------------------------------------------
// Devolver la cantidad de alumnos aprobados.
// Resolver utilizando filter y length.
export function cantidadAprobados(alumnos: Alumno[]): number {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 12 - Suma de edades
// -----------------------------------------------------------------------------
// Calcular la suma de las edades de todos los alumnos.
// Resolver utilizando reduce.
export function sumarEdades(alumnos: Alumno[]): number {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 13 - Alumnos de una ciudad
// -----------------------------------------------------------------------------
// Devolver los alumnos que pertenezcan a la ciudad recibida.
export function obtenerAlumnosDeCiudad(
    alumnos: Alumno[],
    ciudad: string
): Alumno[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 14 - Promedio de una ciudad
// -----------------------------------------------------------------------------
// Calcular el promedio de notas de los alumnos de una determinada ciudad.
// Si no hay alumnos en esa ciudad, devolver 0.
//
// Se recomienda reutilizar funciones anteriores.
export function calcularPromedioPorCiudad(
    alumnos: Alumno[],
    ciudad: string
): number {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 15 - Transformación con callback
// -----------------------------------------------------------------------------
// Implementar una función genérica que reciba un arreglo y un callback.
// Debe devolver un nuevo arreglo aplicando el callback a cada elemento.
//
// Ejemplo:
// transformar([1, 2, 3], n => n * 2)
// -> [2, 4, 6]
export function transformar<T, R>(
    elementos: T[],
    callback: (elemento: T) => R
): R[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 16 - Filtrar con callback
// -----------------------------------------------------------------------------
// Implementar una función genérica que reciba un arreglo y un callback.
// Debe devolver solamente los elementos para los cuales el callback devuelva true.
//
// Ejemplo:
// filtrar([1, 2, 3, 4], n => n % 2 === 0)
// -> [2, 4]
export function filtrar<T>(
    elementos: T[],
    callback: (elemento: T) => boolean
): T[] {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 17 - Buscar con callback
// -----------------------------------------------------------------------------
// Implementar una función genérica que devuelva el primer elemento que cumpla
// el criterio indicado por el callback.
//
// Si ningún elemento cumple, devolver undefined.
export function buscar<T>(
    elementos: T[],
    callback: (elemento: T) => boolean
): T | undefined {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 18 - Calcular con callback
// -----------------------------------------------------------------------------
// Implementar una función que reciba alumnos y un callback que indique qué valor
// numérico obtener de cada alumno. Luego debe sumar todos esos valores.
//
// Ejemplos:
// calcularTotal(alumnos, alumno => alumno.edad)
// calcularTotal(alumnos, alumno => alumno.nota)
export function calcularTotal(
    alumnos: Alumno[],
    callback: (alumno: Alumno) => number
): number {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 19 - Agrupar alumnos por ciudad
// -----------------------------------------------------------------------------
// Crear un objeto donde cada propiedad sea una ciudad y su valor sea el arreglo
// de alumnos que pertenecen a esa ciudad.
//
// Ejemplo conceptual:
//
// {
//   "Bahía Blanca": [ ... ],
//   "Córdoba": [ ... ],
//   "Rosario": [ ... ]
// }
//
// Resolver utilizando reduce.
export function agruparPorCiudad(
    alumnos: Alumno[]
): Record<string, Alumno[]> {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// EJERCICIO 20 - Estadísticas generales
// -----------------------------------------------------------------------------
// Implementar una función que devuelva un objeto con:
//
// - cantidadTotal
// - cantidadAprobados
// - cantidadDesaprobados
// - promedio
// - mejorAlumno
//
// Se recomienda reutilizar las funciones anteriores.
export interface Estadisticas {
    cantidadTotal: number;
    cantidadAprobados: number;
    cantidadDesaprobados: number;
    promedio: number;
    mejorAlumno: Alumno | undefined;
}

export function obtenerEstadisticas(
    alumnos: Alumno[]
): Estadisticas {
    // TODO
    throw new Error("Implementar");
}

// -----------------------------------------------------------------------------
// PRUEBAS MANUALES
// -----------------------------------------------------------------------------
// Descomentar estas líneas cuando se hayan implementado las funciones.
//
// console.log(obtenerNombres(alumnos).slice(0, 10));
// console.log(obtenerNombresCompletos(alumnos).slice(0, 10));
// console.log(obtenerMayoresDeEdad(alumnos).length);
// console.log(obtenerAprobados(alumnos).length);
// console.log(calcularPromedio(alumnos));
// console.log(obtenerMejorAlumno(alumnos));
// console.log(buscarPorLegajo(alumnos, 500));
// console.log(existeDesaprobado(alumnos));
// console.log(todosAprobaron(alumnos));
// console.log(cantidadAprobados(alumnos));
// console.log(sumarEdades(alumnos));
// console.log(obtenerAlumnosDeCiudad(alumnos, "Bahía Blanca").length);
// console.log(calcularPromedioPorCiudad(alumnos, "Bahía Blanca"));
// console.log(agruparPorCiudad(alumnos));
// console.log(obtenerEstadisticas(alumnos));
