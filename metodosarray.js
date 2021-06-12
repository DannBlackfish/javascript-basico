var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Television", costo: 2500 },
    { nombre: "celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 2500 },
    { nombre: "Audifonos", costo: 1700 }
];

//Métodos que nos va a yudar a recorrer el array: 
//FILTER:
//Valida si algo es verdad o falso y lo mete en un  nuevo array si cumplen con la validacion
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//MAP
//Me ayuda a mapear ciertos articulos, genera un nuevo array
var nombreArticulos = articulo.map(function(articulo){
    return articulo.nombre
});

//FIND
//Nos ayudana  encotnrar algo adentro, no modifica el array que ya tengo genera uno nuevo, valida con tur o false
var encuentraArticulo = articulos.find(function (articulo){
    return articulo.nombre === "Laptop"
});

//FOREACH
//No me genera un nuevo array solo hace el filtrado sobre el array sin modificarlo y manda cosas
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//SOME
//valida con verdadero o falso, regresa un boolean, este método solo regresa si es verdadero o falso
var articulosBaratos = articulos.some(function (articulo){
    return articulo.costo <= 700;
});