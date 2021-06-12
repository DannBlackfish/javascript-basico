//Codicionales: Saber si algo es verdadero o falso y hacer ciertas acciones con eso
//If: Lo que venga dentro del () es decir la condición debe ser verdad, por que todo lo que venga adentro de {} no va a pasar
if (true) {
    console.log("hola")
}
//Hola

if (false) {
    console.log("hola")
}
//undefined

//Aquí se puede ocupar otra etapa llamada else, si lo de arriba no es verdadero y quier hacer algo más
if (false) {
    console.log("hola")
} else {
    console.log("soy falso")
}

//Otro ejemplo digams que el primer paso no se cumple, pero antes de que entre el else quiero que pase algo, que se validen más cosas para esto es el else if, con esta si podemos seguir validando
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
}else {
    console.log("Aun no puedes votar")
}

//Operado ternario ? entonces : en caso de que no
condition ? true : false;

var numero = 1 

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"
