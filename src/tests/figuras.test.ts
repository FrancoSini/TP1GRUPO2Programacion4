import { describe, it, expect } from "vitest";
import { Figura, Circulo, Rectangulo, Cuadrado } from "../parte 3/figuras.js";

describe("Ejercicio 12 - Circulo", () => {
    it("calcula el área correctamente", () => {
        const circulo = new Circulo(3);
        expect(circulo.calcularArea()).toBeCloseTo(Math.PI * 3 * 3, 5);
    });

    it("calcula el perímetro correctamente", () => {
        const circulo = new Circulo(3);
        expect(circulo.calcularPerimetro()).toBeCloseTo(2 * Math.PI * 3, 5);
    });

    it("es una Figura", () => {
        expect(new Circulo(1)).toBeInstanceOf(Figura);
    });
});

describe("Ejercicio 12 - Rectangulo", () => {
    it("calcula el área correctamente", () => {
        const rectangulo = new Rectangulo(4, 5);
        expect(rectangulo.calcularArea()).toBe(20);
    });

    it("calcula el perímetro correctamente", () => {
        const rectangulo = new Rectangulo(4, 5);
        expect(rectangulo.calcularPerimetro()).toBe(18);
    });
});

describe("Ejercicio 12 - Cuadrado", () => {
    it("calcula el área correctamente", () => {
        const cuadrado = new Cuadrado(6);
        expect(cuadrado.calcularArea()).toBe(36);
    });

    it("calcula el perímetro correctamente", () => {
        const cuadrado = new Cuadrado(6);
        expect(cuadrado.calcularPerimetro()).toBe(24);
    });
});

describe("Ejercicio 12 - polimorfismo", () => {
    it("calcula el área total de un arreglo de Figura mixto", () => {
        const figuras: Figura[] = [new Circulo(3), new Rectangulo(4, 5), new Cuadrado(6)];

        const areaTotal = figuras.reduce((acc, f) => acc + f.calcularArea(), 0);
        const esperado = Math.PI * 3 * 3 + 20 + 36;

        expect(areaTotal).toBeCloseTo(esperado, 5);
    });

    it("cada figura del arreglo responde calcularArea/calcularPerimetro según su propio tipo", () => {
        const figuras: Figura[] = [new Circulo(1), new Cuadrado(4)];
        const areas = figuras.map((f) => f.calcularArea());
        expect(areas[0]).toBeCloseTo(Math.PI, 5);
        expect(areas[1]).toBe(16);
    });
});
