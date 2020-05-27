//Loops: son para hacer algo o una tarea repetidamente
var estudiantes = ["Fabian", "Maria", "Sergio", "Rosa"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiantes);
}