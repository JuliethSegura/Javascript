var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//Método 1 filter: filtra una cosa especifica de un array, creando un array nuevo con ese valor
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

//Método 2 map: mapea todo el contenido del array sin modificarlos
var articulosMapeados = articulos.map(
    function(articulo) {
        return articulo.nombre; //traigame de los articulos el nombre de articulo
    }
)

articulosFiltrados
articulosMapeados