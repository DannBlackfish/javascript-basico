var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//La tarea es saludar a cada uno de los estudiantes
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

//FOR
//for la estructura es muy similar a una funcion, se divide en tres pasos i++(incrementa el valor de un número de uno en uno)
//La forma en que nosotros los vamos a saludar es generando un for que es un loop en el cual hacemos ua variable inicial que es cero, mientras ese variable de i semenor a la longitud de nuestro array vamos a mandar a llamar nuestra funcion y enesa funcion llamaos como aprametro el array en posicion de i es el index
//Como lo lee en Maria(cuatro letras)¿Cero es menor a cuatro? Si lo es entonces nombra estudiante en la posicion 0, ahora para la siguiente vez el i++ hace que no valga cero, ahora vale 1, i es menor a la longitud del array(4) si entonces se sigue cumpliendo, hasta que llega al cuarto elemnto ahí para por que siquisieras pasar al quinto elemento ya no es menor al array 

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//FOR ...OF
//tnemos un array de estudiantes y vamos a llamar a cada estudiante
//En parametro esta como estudiante
//Nos trae cada estudiante de nuestro array de estudiantes
//El primero (estudiante) es un singular de un array(estudiantes). El primero(estudiante) se vuelve el index. Cuando ya no hay estuidantes ya no pasa nada
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

//WHILE
//Mientras lo que este adentro() sea verdad se genera el loop
//Mientras la longitud del array sea mayor a cero lo de adentro de while va a pasar
//Cuando entra al último ciclo la longitud ya no es mayor a cero es igual a cero se rompe el ciclo y ya no se generan mas tareas
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}
