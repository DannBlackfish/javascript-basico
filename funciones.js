//Declarativas al declarar la palabra function(palabra reservada) estamos ya declarando una función. Número de parametros que necesito para que funcione.
function miFuncion() {
    return 3;
}

miFuncion()

//Expresión (o anonimas) generamos una variable que adentro tiene una función. Los parámetros sirven para cuando se quieren llamar afuera 

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();