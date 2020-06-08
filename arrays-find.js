var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//Método 3 find: ayuda a encontrar algo dentro del array.
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

encuentraArticulo

//Método 4 forEach: hace el filtrado sobre el array sin modificarlo y devuelve cosas.
articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
});

//Método 5 some: regresa una validación de V o F según la validación

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});

articulosBaratos