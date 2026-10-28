/*1. Obtener el primer elemento del array
Enunciado: Dado un array, retorna el primer elemento del mismo.*/

const frutas = ["pera", "naranja", "manzana", "melon"];

console.log(frutas[2])

/*2. Obtener el último elemento del array
Enunciado: Dado un array, retorna el último elemento del mismo.*/

let ultimo = frutas.pop()
console.log(ultimo)

/*3. Agregar un elemento al inicio del array
Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.*/
//frutas.unshift("higo");

console.log(frutas);


/*4. Eliminar el primer elemento del array
Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.*/

frutas.shift();
console.log(frutas);

/*5. Agregar un elemento al final del array
Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.*/

frutas.push("uva"); 
console.log(frutas);

/*6. Eliminar el último elemento del array
Enunciado: Elimina el último elemento de un array y devuelve el array resultante.*/

frutas.pop();
console.log(frutas);

/*7. Combinar dos arrays
Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.*/
let colores = ["rojo", "verde", "azul", "amarillo"];

let combinar = frutas.concat(colores);
console.log(combinar)

/*8. Encontrar si un array incluye un elemento
Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.*/

console.log(colores.includes("verde"));
console.log(colores.includes("negro"));

/*9. Buscar el índice de un elemento
Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.*/


/*10. Reemplazar un elemento en un array
Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.*/

colores.splice(2, 1, "rosa");
console.log(colores);

/*11. Sumar todos los elementos del array
Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.*/
let numeros = [1, 2, 3, 4];

let suma = numeros.reduce(function(acum, num) {
    return acum + num;
}, 0);
console.log(suma);

/*12. Multiplicar todos los elementos del array
Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.*/

numeros.forEach(function(num) {
    console.log(num *5);
});


/*13. Filtrar números mayores a un valor
Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.*/

const mayorQue = numeros.filter(function(num){
   return num >2;
});
console.log(mayorQue);

/*14. Verificar si todos los elementos son mayores a un número
Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.*/

const mayor = numeros.map(function(num){
    return num >2;
});
console.log(mayor);

/*15. Obtener el primer elemento que cumple una condición
Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.*/

const primerMayor = numeros.find(function(num){
   return num >1;
});
console.log(primerMayor);

/*16. Imprimir cada elemento del array
Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.*/

let lista = numeros.join("/");
console.log(lista);

/*17. Crear un array con el doble de cada número
Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.*/

let duplicar = numeros.map(function(num){
    return num * 2;
});
console.log(duplicar);

/*18. Convertir un array de nombres en mayúsculas
Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.*/