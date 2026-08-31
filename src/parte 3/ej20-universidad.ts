/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */

export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    inscribirAlumno(alumno: Alumno): void {
        // TODO: agregar el alumno si no está ya inscripto (comparar por legajo).
        throw new Error("Implementar");
    }

    quitarAlumno(alumno: Alumno): void {
        // TODO: quitar el alumno de la lista, si está.
        throw new Error("Implementar");
    }

    asignarDocente(docente: Docente): void {
        // TODO: agregar el docente si no está ya asignado (comparar por legajo).
        throw new Error("Implementar");
    }

    getAlumnosInscriptos(): Alumno[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    getDocentesAsignados(): Docente[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(legajo: number, nombre: string, apellido: string, email: string) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        // TODO: agregar la materia a este alumno (si no estaba ya) y avisarle
        // a la materia llamando a materia.inscribirAlumno(this).
        throw new Error("Implementar");
    }

    quitarMateria(materia: Materia): void {
        // TODO: quitar la materia de este alumno y avisarle a la materia
        // llamando a materia.quitarAlumno(this).
        throw new Error("Implementar");
    }

    getMaterias(): Materia[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    obtenerInformacion(): string {
        // TODO: devolver un string que incluya nombre, apellido, legajo y
        // la cantidad de materias inscriptas, mencionando "Alumno".
        throw new Error("Implementar");
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    asignarMateria(materia: Materia): void {
        // TODO: agregar la materia a este docente (si no estaba ya) y
        // avisarle a la materia llamando a materia.asignarDocente(this).
        throw new Error("Implementar");
    }

    getMateriasAsignadas(): Materia[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    obtenerInformacion(): string {
        // TODO: devolver un string que incluya nombre, apellido, legajo y
        // especialidad, mencionando "Docente".
        throw new Error("Implementar");
    }
}
