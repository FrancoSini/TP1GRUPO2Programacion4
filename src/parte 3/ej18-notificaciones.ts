/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: informar por consola (console.log) que se envía un email
        // con ese mensaje (mencionar "email").
        throw new Error("Implementar");
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: idem, mencionando "SMS"
        throw new Error("Implementar");
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: idem, mencionando "push"
        throw new Error("Implementar");
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    // TODO: enviar el mensaje a través de cada notificación recibida.
    throw new Error("Implementar");
}
