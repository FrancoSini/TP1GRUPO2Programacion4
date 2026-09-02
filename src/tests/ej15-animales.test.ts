import { describe, it, expect, vi, afterEach } from "vitest";
import { Animal, Perro, Gato, Vaca, Pajaro, hacerSonidos } from "./../parte 3/ej15-animales.js";

afterEach(() => {
    vi.restoreAllMocks();
});

describe("Ejercicio 15 - sonidos de cada animal", () => {
    it("Perro dice Guau", () => {
        expect(new Perro("Rex", 3).hacerSonido()).toBe("Guau");
    });
    it("Gato dice Miau", () => {
        expect(new Gato("Michi", 2).hacerSonido()).toBe("Miau");
    });
    it("Vaca dice Muu", () => {
        expect(new Vaca("Lola", 5).hacerSonido()).toBe("Muu");
    });
    it("Pajaro dice Pío", () => {
        expect(new Pajaro("Piolín", 1).hacerSonido()).toBe("Pío");
    });
});

// Clase de prueba, solo para testear hacerSonidos() sin depender de que
// Perro/Gato/Vaca/Pajaro ya estén implementados.
class AnimalStub extends Animal {
    hacerSonido: () => string;

    constructor(nombre: string, edad: number, sonido: string) {
        super(nombre, edad);
        this.hacerSonido = vi.fn(() => sonido);
    }
}

describe("Ejercicio 15 - hacerSonidos", () => {
    it("llama a hacerSonido() de cada animal recibido", () => {
        const a1 = new AnimalStub("Rex", 3, "Guau-stub");
        const a2 = new AnimalStub("Michi", 2, "Miau-stub");

        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        hacerSonidos([a1, a2]);

        expect(a1.hacerSonido).toHaveBeenCalledTimes(1);
        expect(a2.hacerSonido).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalled();
    });

    it("usa el resultado de hacerSonido() en lo que informa por consola", () => {
        const a1 = new AnimalStub("Rex", 3, "Guau-stub");
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

        hacerSonidos([a1]);

        const mensajes = logSpy.mock.calls.map((call) => call.join(" "));
        expect(mensajes.some((m) => m.includes("Guau-stub"))).toBe(true);
    });

    it("funciona con un arreglo vacío sin romper", () => {
        expect(() => hacerSonidos([])).not.toThrow();
    });

    it("funciona con los animales reales, vía la referencia Animal[]", () => {
        const animales: Animal[] = [new Perro("Rex", 3), new Gato("Michi", 2)];
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

        hacerSonidos(animales);

        const mensajes = logSpy.mock.calls.map((call) => call.join(" "));
        expect(mensajes.some((m) => m.includes("Guau"))).toBe(true);
        expect(mensajes.some((m) => m.includes("Miau"))).toBe(true);
    });
});
