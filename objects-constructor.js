function PC(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo
    this.annio = annio;
}

//Crear objetos
var objectmarca = ["Asus", "Hp", "Apple", "Acer"];
var objectmodelo = ["asus vivobook s14 x411u", "Hp 14-ck 0048la", "MacBook Air"];
var objectannio = [2018, 2018, 2020];
var computers = [];

for (var i = 0; i < objectmarca, i < objectmodelo, i < objectannio; i++) {
    computers[i] = new PC(this.objectmarca[i], this.objectmodelo[i], this.objectannio[i]);
}