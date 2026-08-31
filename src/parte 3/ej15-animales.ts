/**
 * EJERCICIO 15 - Animales
 * ---------------------------------------------------------------------------
 * Objetivo: demostrar polimorfismo mediante una referencia del tipo de la
 * clase padre (`Animal`), sin saber de qué animal concreto se trata.
 */
export abstract class Animal {
    constructor(
        public nombre: string,
        public edad: number
    ) {}

    abstract hacerSonido(): string;
}

export class Perro extends Animal {
    hacerSonido(): string {
        // TODO: devolver "Guau"
        throw new Error("Implementar");
    }
}

export class Gato extends Animal {
    hacerSonido(): string {
        // TODO: devolver "Miau"
        throw new Error("Implementar");
    }
}

export class Vaca extends Animal {
    hacerSonido(): string {
        // TODO: devolver "Muu"
        throw new Error("Implementar");
    }
}

export class Pajaro extends Animal {
    hacerSonido(): string {
        // TODO: devolver "Pío"
        throw new Error("Implementar");
    }
}

/**
 * Recorre los animales y, para cada uno, informa por consola (console.log)
 * su nombre junto con el resultado de `animal.hacerSonido()`.
 */
export function hacerSonidos(animales: Animal[]): void {
    // TODO
    throw new Error("Implementar");
}
