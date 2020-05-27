//crear un arreglo
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; //sintaxis de un array

console.log(frutas);

//cuantos elementos tiene un array- longitud
console.log(frutas.length);

//acceder a un elemento en especifico con la posicion
console.log(frutas[2]);

//tipos de elementos: métodos, ayudan a generar un cambio en el array

//el push añade elementos al final del array
var masfrutas = frutas.push("Uvas");

//elimina el ultimo elemento del array 
var ultimo = frutas.pop("Uvas");

//agrega un elemento al inicio del array
var nuevalongitud = frutas.unshift("Uvas");

//elimina el elemento que este al inicio del array
var borrarfruta = frutas.shift("Uvas");

//busca la posicion del un elemento en el array
var posicion = frutas.indexOf("Cereza");