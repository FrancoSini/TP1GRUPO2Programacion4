import { describe, it, expect } from "vitest";
import { Persona, Materia, Alumno, Docente } from "./../parte 3/ej20-universidad.js";

describe("Ejercicio 20 - Materia", () => {
    it("inscribirAlumno agrega un alumno a la lista", () => {
        const materia = new Materia(1, "Programación III", 96);
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");

        materia.inscribirAlumno(alumno);

        expect(materia.getAlumnosInscriptos()).toHaveLength(1);
        expect(materia.getAlumnosInscriptos()[0]?.legajo).toBe(1);
    });

    it("inscribirAlumno no duplica al mismo alumno (por legajo)", () => {
        const materia = new Materia(1, "Programación III", 96);
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");

        materia.inscribirAlumno(alumno);
        materia.inscribirAlumno(alumno);

        expect(materia.getAlumnosInscriptos()).toHaveLength(1);
    });

    it("quitarAlumno quita al alumno de la lista", () => {
        const materia = new Materia(1, "Programación III", 96);
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        materia.inscribirAlumno(alumno);

        materia.quitarAlumno(alumno);

        expect(materia.getAlumnosInscriptos()).toHaveLength(0);
    });

    it("asignarDocente agrega un docente y evita duplicados", () => {
        const materia = new Materia(1, "Programación III", 96);
        const docente = new Docente(10, "Laura", "Gómez", "laura@mail.com", "Backend");

        materia.asignarDocente(docente);
        materia.asignarDocente(docente);

        expect(materia.getDocentesAsignados()).toHaveLength(1);
        expect(materia.getDocentesAsignados()[0]?.especialidad).toBe("Backend");
    });

    it("getAlumnosInscriptos/getDocentesAsignados devuelven copias", () => {
        const materia = new Materia(1, "Programación III", 96);
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        materia.inscribirAlumno(alumno);

        const copia = materia.getAlumnosInscriptos();
        copia.push(new Alumno(2, "Otro", "Alumno", "otro@mail.com"));

        expect(materia.getAlumnosInscriptos()).toHaveLength(1);
    });
});

describe("Ejercicio 20 - Alumno", () => {
    it("guarda los datos básicos", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        expect(alumno.legajo).toBe(1);
        expect(alumno.nombre).toBe("Juan");
        expect(alumno.apellido).toBe("Pérez");
        expect(alumno.email).toBe("juan@mail.com");
    });

    it("inscribirse deja constancia en el alumno y en la materia", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        const materia = new Materia(1, "Programación III", 96);

        alumno.inscribirse(materia);

        expect(alumno.getMaterias()).toHaveLength(1);
        expect(alumno.getMaterias()[0]?.codigo).toBe(1);
        expect(materia.getAlumnosInscriptos()).toHaveLength(1);
        expect(materia.getAlumnosInscriptos()[0]?.legajo).toBe(1);
    });

    it("inscribirse dos veces en la misma materia no la duplica", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        const materia = new Materia(1, "Programación III", 96);

        alumno.inscribirse(materia);
        alumno.inscribirse(materia);

        expect(alumno.getMaterias()).toHaveLength(1);
    });

    it("quitarMateria la saca del alumno y de la materia", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        const materia = new Materia(1, "Programación III", 96);
        alumno.inscribirse(materia);

        alumno.quitarMateria(materia);

        expect(alumno.getMaterias()).toHaveLength(0);
        expect(materia.getAlumnosInscriptos()).toHaveLength(0);
    });

    it("obtenerInformacion incluye nombre, apellido y menciona 'alumno'", () => {
        const alumno = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        const info = alumno.obtenerInformacion();
        expect(info).toContain("Juan");
        expect(info).toContain("Pérez");
        expect(info.toLowerCase()).toContain("alumno");
    });
});

describe("Ejercicio 20 - Docente", () => {
    it("guarda los datos básicos, incluida la especialidad", () => {
        const docente = new Docente(10, "Laura", "Gómez", "laura@mail.com", "Backend");
        expect(docente.legajo).toBe(10);
        expect(docente.especialidad).toBe("Backend");
    });

    it("asignarMateria deja constancia en el docente y en la materia", () => {
        const docente = new Docente(10, "Laura", "Gómez", "laura@mail.com", "Backend");
        const materia = new Materia(1, "Programación III", 96);

        docente.asignarMateria(materia);

        expect(docente.getMateriasAsignadas()).toHaveLength(1);
        expect(materia.getDocentesAsignados()).toHaveLength(1);
        expect(materia.getDocentesAsignados()[0]?.legajo).toBe(10);
    });

    it("obtenerInformacion incluye nombre, apellido, especialidad y menciona 'docente'", () => {
        const docente = new Docente(10, "Laura", "Gómez", "laura@mail.com", "Backend");
        const info = docente.obtenerInformacion();
        expect(info).toContain("Laura");
        expect(info).toContain("Gómez");
        expect(info).toContain("Backend");
        expect(info.toLowerCase()).toContain("docente");
    });
});

describe("Ejercicio 20 - polimorfismo (Persona[])", () => {
    it("cada Persona informa distinto según su tipo real, referenciada como Persona", () => {
        const alumno1 = new Alumno(1, "Juan", "Pérez", "juan@mail.com");
        const alumno2 = new Alumno(2, "Ana", "García", "ana@mail.com");
        const docente1 = new Docente(10, "Laura", "Gómez", "laura@mail.com", "Backend");
        const docente2 = new Docente(11, "Pedro", "Ruiz", "pedro@mail.com", "Frontend");

        const personas: Persona[] = [alumno1, alumno2, docente1, docente2];
        const infos = personas.map((p) => p.obtenerInformacion());

        expect(infos[0]!.toLowerCase()).toContain("alumno");
        expect(infos[1]!.toLowerCase()).toContain("alumno");
        expect(infos[2]!.toLowerCase()).toContain("docente");
        expect(infos[3]!.toLowerCase()).toContain("docente");
        expect(infos[2]).toContain("Backend");
        expect(infos[3]).toContain("Frontend");
    });

    it("Alumno y Docente con el mismo nombre/apellido informan cosas distintas", () => {
        const alumno = new Alumno(1, "Sam", "Ríos", "sam@mail.com");
        const docente = new Docente(1, "Sam", "Ríos", "sam@mail.com", "IA");

        expect(alumno.obtenerInformacion()).not.toBe(docente.obtenerInformacion());
    });
});
