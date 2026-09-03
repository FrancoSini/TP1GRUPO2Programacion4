# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Interface permite definir varias veces en el mismo ambito para luego poder fuisonarse y combinarlas en una sola declaracion, es util para combinar dos tipos existentes de forma segura. Esto hace que interface sea ideal para trabajar con tipos que pueden ser extendidos por terceros como tipos del DOM o en el desarrollo de librerias.


## ¿Qué permite hacer `type` que `interface` no?

type es mucho mas versatil ya que funciona como un alias que puede presentar cualquier tipo, incluyendo, uniones, tuplas, tipos primitivos, tipos avanzados

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Si, ambas se pueden extender, en el caso de interface se extiende usando la palabra reservada 'extends' mientras que para el type se usa uniones/intersecciones (| o &).

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Eligiriamos interface ya que es una manera mas explicita de definir la clase y favorece a la claridad del codigo a tener que usar extends antes que utilizar la union.

