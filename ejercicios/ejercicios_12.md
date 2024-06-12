# Ejercicios de JavaScript - Clase 12

## Operadores Ternarios

1. **Comparación básica**: Usa el operador ternario para decidir si una variable `x` es mayor que 10 y asigna el resultado a una nueva variable `resultado`.
2. **Asignación condicional**: Crea una variable `mensaje` que contenga "Mayor de edad" si una variable `edad` es mayor o igual a 18, de lo contrario "Menor de edad".
3. **Verificación de propiedad**: Usa el operador ternario para verificar si un objeto `persona` tiene una propiedad `nombre` y asigna "Nombre disponible" o "Nombre no disponible" a una variable `disponibilidad`.
4. **Evaluación de notas**: Dado un número `nota`, asigna "Aprobado" si es mayor o igual a 6, de lo contrario "Reprobado".
5. **Estado del usuario**: Crea una variable `estado` que sea "Activo" si una variable `isActive` es verdadera, de lo contrario "Inactivo".

## Operador Lógico && o AND

6. **Comprobación múltiple**: Usa el operador lógico && para verificar si dos variables `a` y `b` son verdaderas.
7. **Asignación condicional**: Usa el operador && para asignar un valor a una variable solo si otra variable no es `null` o `undefined`.
8. **Validación de formulario**: Verifica que dos campos `email` y `password` no estén vacíos antes de enviar un formulario.
9. **Condición con función**: Llama a una función `logIn()` solo si una variable `user` no es `null`.
10. **Acceso a propiedad**: Accede a una propiedad de un objeto `config` solo si `config` no es `undefined`.

## Operador Lógico || o OR

11. **Valor por defecto**: Usa el operador lógico || para asignar un valor por defecto a una variable `username` si esta es `null` o `undefined`.
12. **Selección de opción**: Asigna a una variable `selección` el valor de `opción1` si es verdadero, de lo contrario `opción2`.
13. **Verificación de conexión**: Usa el operador || para comprobar si una variable `connection` es `null` y asignar un valor por defecto.
14. **Asignación condicional**: Usa el operador || para asignar un valor a una variable solo si otra variable es `null` o `undefined`.
15. **Acceso a propiedad con valor por defecto**: Accede a una propiedad de un objeto `settings` o asigna un valor por defecto si `settings` es `null` o `undefined`.

## Operador Lógico ?? o Nullish

16. **Valor por defecto con nullish**: Usa el operador ?? para asignar un valor por defecto a una variable `usuario` si esta es `null` o `undefined`.
17. **Asignación condicional**: Usa el operador ?? para asignar un valor a una variable solo si otra variable es `null` o `undefined`.
18. **Verificación de dato**: Usa el operador ?? para verificar si una variable `dato` es `null` o `undefined` y asignar un valor alternativo.
19. **Selección de opción con nullish**: Asigna a una variable `resultado` el valor de `input` si no es `null` o `undefined`, de lo contrario asigna "Sin datos".
20. **Valor por defecto en objeto**: Usa el operador ?? para asignar un valor por defecto a una propiedad de un objeto `config`.

## Acceso Condicional a un Objeto

21. **Acceso seguro a propiedad**: Usa el operador `?.` para acceder a una propiedad `nombre` de un objeto `persona` solo si `persona` no es `null` o `undefined`.
22. **Acceso a método**: Usa el operador `?.` para llamar a un método `getDetails` de un objeto `user` solo si `user` no es `null` o `undefined`.
23. **Acceso a propiedad anidada**: Usa el operador `?.` para acceder a una propiedad `direccion.ciudad` de un objeto `usuario` solo si `direccion` no es `null` o `undefined`.
24. **Verificación de propiedad**: Usa el operador `?.` para verificar si una propiedad `email` de un objeto `cliente` existe y asigna "Email disponible" o "Email no disponible" a una variable `estadoEmail`.
25. **Acceso condicional a array**: Usa el operador `?.` para acceder al primer elemento de un array `items` solo si `items` no es `null` o `undefined`.

## Desestructuración de Objetos

26. **Extracción de propiedades**: Usa desestructuración para extraer las propiedades `nombre` y `edad` de un objeto `persona`.
27. **Asignación a nuevas variables**: Usa desestructuración para extraer las propiedades `marca` y `modelo` de un objeto `auto` y asignarlas a nuevas variables `carBrand` y `carModel`.
28. **Valores por defecto**: Usa desestructuración para extraer una propiedad `pais` de un objeto `usuario` y asigna un valor por defecto "Desconocido".
29. **Desestructuración anidada**: Usa desestructuración para extraer la propiedad `ciudad` de un objeto `direccion` anidado en un objeto `cliente`.
30. **Rest en desestructuración**: Usa desestructuración para extraer una propiedad `nombre` de un objeto `persona` y agrupar el resto de las propiedades en un objeto `resto`.

## Desestructuración de Objetos en Parámetros

31. **Parámetros desestructurados**: Crea una función `mostrarInfo({ nombre, edad })` que reciba un objeto y use desestructuración en los parámetros para acceder a `nombre` y `edad`.
32. **Parámetros con valores por defecto**: Crea una función `saludar({ nombre = "Invitado" })` que reciba un objeto y use desestructuración con un valor por defecto para `nombre`.
33. **Desestructuración en parámetros anidados**: Crea una función `obtenerCiudad({ direccion: { ciudad } })` que reciba un objeto con una propiedad `direccion` y extraiga `ciudad`.
34. **Parámetros rest en funciones**: Crea una función `procesarDatos({ id, ...resto })` que reciba un objeto y use desestructuración para extraer `id` y agrupar el resto de las propiedades en `resto`.
35. **Desestructuración con alias en parámetros**: Crea una función `mostrarProducto({ nombre: productName, precio: productPrice })` que reciba un objeto y use desestructuración con alias para `nombre` y `precio`.

## Desestructuración de Arrays

36. **Extracción de elementos**: Usa desestructuración para extraer el primer y segundo elemento de un array `numeros`.
37. **Valores por defecto en arrays**: Usa desestructuración para extraer el primer y segundo elemento de un array `colores`, asignando un valor por defecto "N/A" al segundo elemento.
38. **Saltarse elementos**: Usa desestructuración para extraer el primer y tercer elemento de un array `frutas`, saltándote el segundo elemento.
39. **Rest en desestructuración de arrays**: Usa desestructuración para extraer el primer elemento de un array `nombres` y agrupar el resto en un array `resto`.
40. **Desestructuración anidada de arrays**: Usa desestructuración para extraer el segundo elemento de un array anidado `[[1, 2], [3, 4], [5, 6]]`.



