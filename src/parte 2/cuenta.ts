/**
 * EJERCICIO 11 - Clase Cuenta
 * ---------------------------------------------------------------------------
 * El saldo no debe poder modificarse directamente desde afuera de la clase:
 * por eso es `private`. Solo se modifica a través de depositar/retirar.
 */
export class Cuenta {
    public numero: number;
    public titular: string;
    private saldo: number;

    constructor(numero: number, titular: string, saldoInicial: number = 0) {
        // TODO: asignar numero y titular. Validar que saldoInicial no sea
        // negativo (si lo es, lanzar un error) y asignarlo a saldo.
        throw new Error("Implementar");
    }

    depositar(monto: number): void {
        // TODO: no se pueden depositar valores negativos -> throw new Error(...)
        throw new Error("Implementar");
    }

    retirar(monto: number): void {
        // TODO: no se pueden retirar valores negativos, ni retirar más
        // dinero del disponible -> throw new Error(...)
        throw new Error("Implementar");
    }

    consultarSaldo(): number {
        // TODO
        throw new Error("Implementar");
    }
}
