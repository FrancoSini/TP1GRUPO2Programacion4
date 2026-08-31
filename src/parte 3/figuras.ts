/**
 * EJERCICIO 12 - Clase abstracta Figura
 * ---------------------------------------------------------------------------
 * `Figura` no se puede instanciar directamente: cada subclase debe
 * implementar calcularArea() y calcularPerimetro() a su manera.
 * Ahí aparece el polimorfismo: un mismo arreglo `Figura[]` puede contener
 * círculos, rectángulos y cuadrados, y a cada uno se le puede pedir su área
 * sin saber de qué tipo concreto es.
 */
export abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

export class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        // TODO: área = π * radio²
        throw new Error("Implementar");
    }

    calcularPerimetro(): number {
        // TODO: perímetro (circunferencia) = 2 * π * radio
        throw new Error("Implementar");
    }
}

export class Rectangulo extends Figura {
    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }

    calcularArea(): number {
        // TODO: área = base * altura
        throw new Error("Implementar");
    }

    calcularPerimetro(): number {
        // TODO: perímetro = 2 * (base + altura)
        throw new Error("Implementar");
    }
}

export class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        // TODO: área = lado²
        throw new Error("Implementar");
    }

    calcularPerimetro(): number {
        // TODO: perímetro = 4 * lado
        throw new Error("Implementar");
    }
}
