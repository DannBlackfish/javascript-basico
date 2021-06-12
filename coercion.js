//coerción explicita
var a = 20;;
var b = a + "";
console.log(b)
//es un string 

//queremos que el 20 se vuelva un string sin tener que concatenarlo
var c = String(a)
console.log(c)
//el valor de c es un 20 string, obligue que se convirtiera en un valor