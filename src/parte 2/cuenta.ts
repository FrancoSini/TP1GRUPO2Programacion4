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
        if (saldoInicial < 0) {
        throw new Error("El saldo inicial no puede ser negativo");
    }
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        // TODO: no se pueden depositar valores negativos -> throw new Error(...)
        if (monto < 0) {
            throw new Error("No se pueden depositar montos negativos");
        }
        this.saldo += monto;
    }

    retirar(monto: number): void {
        // TODO: no se pueden retirar valores negativos, ni retirar más
        // dinero del disponible -> throw new Error(...)
        if (monto < 0) {
            throw new Error("No se pueden retirar montos negativos");
        }
        if (monto > this.saldo) {
            throw new Error("No hay saldo suficiente para retirar ese monto");
        }
        this.saldo -= monto;
    }

    consultarSaldo(): number {
        // TODO
        return this.saldo;
    }
}
