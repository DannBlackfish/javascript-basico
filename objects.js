//La variable es un objeto, {} esto es un bojeto es una vairable su nombre es objeto y su valor es objeto.
//¿Cómo se accede a la información de este objeto? se usa el punto y la palabra clave 
//Cuando estamos trabajando al estrucutra de un objeto podemos agregar una propiedad que es una funcion, se le llama método, el this es una variable que hace referencia al boejto, hace referencia a su padre es decir al objeto, esta es la forma en la que podemos acceder this como referencia miAuto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: "2020",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

miAuto.annio; //2020

//FUNCION CONSTRUCTORA
//new genera una nueva instancia de nuestra funcion constructoria instancia = genera un objeto que deriva de otro objeto
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model C", 2018);
var autoNuevo3 = new auto("Toyota", "Crolla", 2020);



