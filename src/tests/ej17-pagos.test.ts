import { describe, it, expect, vi, afterEach } from "vitest";
import {
    TarjetaCredito,
    Transferencia,
    MercadoPago,
    Efectivo,
    procesarPago,
    type MetodoPago,
} from "./../parte 3/ej17-pagos.js";

afterEach(() => {
    vi.restoreAllMocks();
});

function logMensajeDe(metodo: MetodoPago, monto: number): string {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    metodo.pagar(monto);
    const mensaje = logSpy.mock.calls.map((call) => call.join(" ")).join(" | ");
    logSpy.mockRestore();
    return mensaje;
}

describe("Ejercicio 17 - cada método de pago informa el pago", () => {
    it("TarjetaCredito.pagar informa el monto por consola", () => {
        const mensaje = logMensajeDe(new TarjetaCredito(), 100);
        expect(mensaje.length).toBeGreaterThan(0);
        expect(mensaje).toContain("100");
        expect(mensaje.toLowerCase()).toContain("tarjeta");
    });

    it("Transferencia.pagar informa el monto por consola", () => {
        const mensaje = logMensajeDe(new Transferencia(), 200);
        expect(mensaje).toContain("200");
        expect(mensaje.toLowerCase()).toContain("transfer");
    });

    it("MercadoPago.pagar informa el monto por consola", () => {
        const mensaje = logMensajeDe(new MercadoPago(), 300);
        expect(mensaje).toContain("300");
        expect(mensaje.toLowerCase()).toContain("mercado");
    });

    it("Efectivo.pagar informa el monto por consola", () => {
        const mensaje = logMensajeDe(new Efectivo(), 400);
        expect(mensaje).toContain("400");
        expect(mensaje.toLowerCase()).toContain("efectivo");
    });

    it("cada implementación produce un mensaje distinto (no son todas iguales)", () => {
        const mensajes = [
            logMensajeDe(new TarjetaCredito(), 100),
            logMensajeDe(new Transferencia(), 100),
            logMensajeDe(new MercadoPago(), 100),
            logMensajeDe(new Efectivo(), 100),
        ];
        expect(new Set(mensajes).size).toBe(4);
    });
});

describe("Ejercicio 17 - procesarPago", () => {
    it("delega el pago al método recibido, sin importar cuál sea", () => {
        const metodoFalso: MetodoPago = { pagar: vi.fn() };
        procesarPago(metodoFalso, 250);
        expect(metodoFalso.pagar).toHaveBeenCalledTimes(1);
        expect(metodoFalso.pagar).toHaveBeenCalledWith(250);
    });

    it("funciona igual con cualquier implementación concreta de MetodoPago", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        expect(() => procesarPago(new Efectivo(), 50)).not.toThrow();
        expect(logSpy).toHaveBeenCalled();
    });
});
