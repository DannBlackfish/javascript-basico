//El switch esta hecho para validar casos, si el caso es verdad el break ya no deja que pase a los demás casos. Si ninguno de los caso se cumple y ya no tengo caso para validar se genera el default el default ya no valida nada.
//Si no hay breaks hace todas las validaciones
var numero=1

switch (numero) {
    case 1: 
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez");
        break;
    case 100:
        console.log("soy 100");
        break;
    default:
        console.log("No soy nada");
}