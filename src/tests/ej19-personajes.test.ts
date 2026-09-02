import { describe, it, expect } from "vitest";
import { Personaje, Guerrero, Mago, Arquero } from "./../parte 3/ej19-personajes.js";

describe("Ejercicio 19 - Guerrero (ataque físico)", () => {
    it("hace daño igual a su ataque", () => {
        const guerrero = new Guerrero("Conan", 100, 10);
        const objetivo = new Guerrero("Muñeco", 50, 0);
        guerrero.atacar(objetivo);
        expect(objetivo.vida).toBe(40);
    });
});

describe("Ejercicio 19 - Mago (ataque mágico)", () => {
    it("hace 1.5x de daño respecto a su ataque", () => {
        const mago = new Mago("Gandalf", 80, 10);
        const objetivo = new Guerrero("Muñeco", 50, 0);
        mago.atacar(objetivo);
        expect(objetivo.vida).toBe(35); // 50 - round(10*1.5)=15
    });
});

describe("Ejercicio 19 - Arquero (ataque a distancia)", () => {
    it("hace 0.8x de daño respecto a su ataque", () => {
        const arquero = new Arquero("Legolas", 90, 10);
        const objetivo = new Guerrero("Muñeco", 50, 0);
        arquero.atacar(objetivo);
        expect(objetivo.vida).toBe(42); // 50 - round(10*0.8)=8
    });
});

describe("Ejercicio 19 - la vida nunca baja de 0", () => {
    it("un ataque letal deja la vida en 0, no en negativo", () => {
        const guerrero = new Guerrero("Conan", 100, 1000);
        const objetivo = new Guerrero("Muñeco", 5, 0);
        guerrero.atacar(objetivo);
        expect(objetivo.vida).toBe(0);
    });
});

describe("Ejercicio 19 - batalla con referencias Personaje", () => {
    it("cada personaje ataca distinto aunque se lo referencie como Personaje", () => {
        const guerrero: Personaje = new Guerrero("Conan", 100, 10);
        const mago: Personaje = new Mago("Gandalf", 80, 10);
        const arquero: Personaje = new Arquero("Legolas", 90, 10);

        const objetivoDeGuerrero = new Guerrero("Muñeco1", 50, 0);
        const objetivoDeMago = new Guerrero("Muñeco2", 50, 0);
        const objetivoDeArquero = new Guerrero("Muñeco3", 50, 0);

        guerrero.atacar(objetivoDeGuerrero);
        mago.atacar(objetivoDeMago);
        arquero.atacar(objetivoDeArquero);

        expect(objetivoDeGuerrero.vida).toBe(40);
        expect(objetivoDeMago.vida).toBe(35);
        expect(objetivoDeArquero.vida).toBe(42);
    });

    it("una lista de Personaje puede atacarse entre sí en orden", () => {
        const participantes: Personaje[] = [
            new Guerrero("Conan", 100, 10),
            new Mago("Gandalf", 80, 10),
        ];

        participantes[0]!.atacar(participantes[1]!);
        expect(participantes[1]!.vida).toBe(80 - 10);
    });
});
