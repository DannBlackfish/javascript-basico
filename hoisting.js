//Dos estados para una variable
var miNombre //declaro una variable
miNombre = "Daniela" //Se inicializa la variable agregandole un valor

//generalmente lo que se hace es declarar la variable e incializarla en ese mismo momento:
var miNombre = "Daniela"

//Un ejemplo de hoisting es cuando se llama primero una variable antes de declararla e inicializarla, javascript cuando lega a la linea del console.log, la guarda en memoria pero como no tiene un valor le agrega el valor de undefined:
console.log(miNombre)
var miNombre = "Diego"

//Hoisting en las funciones, por ejemplo si mando a llamar primero la funcion y luego inicializo la función y luego declaro la variable nos sale el Hola undefined, el primer hey() lo agarra como la variable de miNombre y como no tiene valor le agre un undefined
hey()
function hey(){
    console.log("Hola " + miNombre)
}

var miNombre = "Diego"
