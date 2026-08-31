import { describe, it, expect } from "vitest";
import { Cuenta } from "../parte 2/cuenta.js";

describe("Ejercicio 11 - Cuenta", () => {
    it("se crea con el saldo inicial indicado", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        expect(cuenta.consultarSaldo()).toBe(1000);
        expect(cuenta.numero).toBe(1);
        expect(cuenta.titular).toBe("Juan Pérez");
    });

    it("si no se indica saldo inicial, arranca en 0", () => {
        const cuenta = new Cuenta(2, "Ana García");
        expect(cuenta.consultarSaldo()).toBe(0);
    });

    it("depositar suma al saldo", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        cuenta.depositar(500);
        expect(cuenta.consultarSaldo()).toBe(1500);
    });

    it("depositar rechaza montos negativos", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        expect(() => cuenta.depositar(-100)).toThrow();
        expect(cuenta.consultarSaldo()).toBe(1000); // no cambió
    });

    it("retirar resta del saldo", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        cuenta.retirar(300);
        expect(cuenta.consultarSaldo()).toBe(700);
    });

    it("retirar rechaza montos negativos", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        expect(() => cuenta.retirar(-50)).toThrow();
        expect(cuenta.consultarSaldo()).toBe(1000);
    });

    it("retirar rechaza retirar más de lo disponible", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        expect(() => cuenta.retirar(1500)).toThrow();
        expect(cuenta.consultarSaldo()).toBe(1000); // no cambió
    });

    it("permite retirar exactamente el saldo disponible", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        cuenta.retirar(1000);
        expect(cuenta.consultarSaldo()).toBe(0);
    });

    it("varias operaciones combinadas quedan consistentes", () => {
        const cuenta = new Cuenta(1, "Juan Pérez", 1000);
        cuenta.depositar(200);
        cuenta.retirar(150);
        cuenta.depositar(50);
        expect(cuenta.consultarSaldo()).toBe(1000 + 200 - 150 + 50);
    });
});
