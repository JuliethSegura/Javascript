//Los bojetos se manejan con propiedades: palabras claves y valores

//Generar un objeto creando una variable 
var miGold = {
    marca: "Asus",
    modelo: "Asus VivoBook S14",
    color: "Dorado",
    annio: 2018,
    tamannio: "Mini",
    detalleDemiGold: function() {
        console.log(`PC ${this.modelo} ${this.annio}`);
        console.log(`PC ${this.color} ${this.marca}`);
    }
};
//Para acceder a un objeto en especifico
miGold.color
miGold.marca
miGold.annio

//Para acceder a un objeto con la funcion
miGold.detalleDemiGold();