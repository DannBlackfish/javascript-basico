//Array lista accedemos con el array con el nombre que le hemos dado
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

//Con .length vamos a ver los elementos del array cual es su longitud, en este caso son cuatro eleemntos
console.log(frutas.length);

//Para acceder a cada elemento ponemos entre corchetes el número al que queremos acceder
console.log(frutas[0]);

//Cuando hablamos de arrays hay dos métodos:
//1. Mutar el contendio del array
//push agrega o empuja elementos al final del array, ahora frutas tiene el elemento uvas
var masFrutas = frutas.push("Uvas");

//pop elimina el último elemento del array
var ultimo = frutas.pop("Uvas");

//unshift agrega el elemento al inicio del array
//¿Para qué podemos usar el unshift? Nos confirman que va el presidnete y lo tenemos que agregar al inicio
var nuevaLongitud = frutas.unshift("Uvas");

//shift elimina el elemnto que este en el inicio
var borrarFruta = frutas.shift("Uvas");

//indexOf Nos ayuda a mutar el array pero mas que mutar es para saber la posición del elemtno que le pasemos de ese array 
var posicion = frutas.indexOf("Cereza")