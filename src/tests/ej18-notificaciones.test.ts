import { describe, it, expect, vi, afterEach } from "vitest";
import {
    Notificacion,
    NotificacionEmail,
    NotificacionSMS,
    NotificacionPush,
    enviarNotificaciones,
} from "./../parte 3/ej18-notificaciones.js";

afterEach(() => {
    vi.restoreAllMocks();
});

function logMensajeDe(notificacion: Notificacion, mensaje: string): string {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    notificacion.enviar(mensaje);
    const resultado = logSpy.mock.calls.map((call) => call.join(" ")).join(" | ");
    logSpy.mockRestore();
    return resultado;
}

describe("Ejercicio 18 - cada notificación se envía distinto", () => {
    it("NotificacionEmail menciona email y el mensaje", () => {
        const log = logMensajeDe(new NotificacionEmail(), "Hola");
        expect(log.toLowerCase()).toContain("email");
        expect(log).toContain("Hola");
    });

    it("NotificacionSMS menciona SMS y el mensaje", () => {
        const log = logMensajeDe(new NotificacionSMS(), "Hola");
        expect(log.toLowerCase()).toContain("sms");
        expect(log).toContain("Hola");
    });

    it("NotificacionPush menciona push y el mensaje", () => {
        const log = logMensajeDe(new NotificacionPush(), "Hola");
        expect(log.toLowerCase()).toContain("push");
        expect(log).toContain("Hola");
    });

    it("cada implementación produce un mensaje distinto", () => {
        const mensajes = [
            logMensajeDe(new NotificacionEmail(), "Hola"),
            logMensajeDe(new NotificacionSMS(), "Hola"),
            logMensajeDe(new NotificacionPush(), "Hola"),
        ];
        expect(new Set(mensajes).size).toBe(3);
    });
});

// Clase de prueba, para testear enviarNotificaciones() sin depender de que
// las subclases concretas ya estén implementadas.
class NotificacionStub extends Notificacion {
    enviar: (mensaje: string) => void;

    constructor() {
        super();
        this.enviar = vi.fn();
    }
}

describe("Ejercicio 18 - enviarNotificaciones", () => {
    it("llama a enviar(mensaje) en cada notificación recibida", () => {
        const n1 = new NotificacionStub();
        const n2 = new NotificacionStub();

        enviarNotificaciones([n1, n2], "Aviso importante");

        expect(n1.enviar).toHaveBeenCalledWith("Aviso importante");
        expect(n2.enviar).toHaveBeenCalledWith("Aviso importante");
    });

    it("funciona con un arreglo vacío sin romper", () => {
        expect(() => enviarNotificaciones([], "Hola")).not.toThrow();
    });

    it("funciona con notificaciones reales mezcladas, vía la referencia Notificacion[]", () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
        const notificaciones: Notificacion[] = [new NotificacionEmail(), new NotificacionSMS()];

        enviarNotificaciones(notificaciones, "Hola a todos");

        const mensajes = logSpy.mock.calls.map((call) => call.join(" "));
        expect(mensajes.some((m) => m.toLowerCase().includes("email"))).toBe(true);
        expect(mensajes.some((m) => m.toLowerCase().includes("sms"))).toBe(true);
    });
});
