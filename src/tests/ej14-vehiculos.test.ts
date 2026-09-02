import { describe, it, expect, vi, afterEach } from "vitest";
import { Vehiculo, Auto, Moto, Camion } from "./../parte 3/ej14-vehiculos.js";

afterEach(() => {
    vi.restoreAllMocks();
});

describe("Ejercicio 14 - Auto", () => {
    it("acelerar() menciona 'auto'", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        new Auto("Toyota", "Corolla").acelerar();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(String(logSpy.mock.calls[0]?.join(" ")).toLowerCase()).toContain("auto");
    });
});

describe("Ejercicio 14 - Moto", () => {
    it("acelerar() menciona 'moto'", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        new Moto("Honda", "CB1000").acelerar();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(String(logSpy.mock.calls[0]?.join(" ")).toLowerCase()).toContain("moto");
    });
});

describe("Ejercicio 14 - Camion", () => {
    it("acelerar() menciona 'camión'", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        new Camion("Scania", "R500").acelerar();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(String(logSpy.mock.calls[0]?.join(" ")).toLowerCase()).toContain("cami"); // camión / camion
    });
});

describe("Ejercicio 14 - polimorfismo", () => {
    it("cada vehículo del arreglo ejecuta SU PROPIO acelerar(), no el de Vehiculo", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        const vehiculos: Vehiculo[] = [
            new Auto("Toyota", "Corolla"),
            new Moto("Honda", "CB1000"),
            new Camion("Scania", "R500"),
        ];

        vehiculos.forEach((v) => v.acelerar());

        expect(logSpy).toHaveBeenCalledTimes(3);
        const mensajes = logSpy.mock.calls.map((call) => String(call.join(" ")).toLowerCase());
        expect(mensajes[0]).toContain("auto");
        expect(mensajes[1]).toContain("moto");
        expect(mensajes[2]).toContain("cami");
    });

    it("frenar() no está sobreescrito y usa el de Vehiculo en todas las subclases", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        new Auto("Toyota", "Corolla").frenar();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(String(logSpy.mock.calls[0]?.join(" ")).toLowerCase()).toContain("frenando");
    });
});
