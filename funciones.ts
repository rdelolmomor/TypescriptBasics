/******************************************************* FUNCIONES ***********************************************************/


//Por defecto las funciones no tienen inferencia, mientras no tengan contexto
function saluda(name, age:number){ //en principio typescript asocia a 'name' un tipo 'any'
    console.log(`Hola ${name}, tienes ${age} años`)
}


//javascript permite cambiar el nombre de la propiedad de un objeto mediante la notación con dos puntos : , por lo que para tipar objetos en una función se realiza de la siguiente forma
function saludar({name:nombre, age:edad, correo}:{name:string, age:number, correo:string} ){
    console.log(`Hola ${nombre}, tienes ${edad} años, y tu correo es: ${correo}`)
}

saludar({name:'Luis', age:25, correo:'holaMundo@gmail.com'})


//Por defecto Typescript si que tiene inferencia con los valores de retorno de las funciones. 
//No obstante se puede realizar el tipado de parametros de retorno de forma explicita.
//Para ello se realiza al principio de la función despues de los parentesis de los parametros de entrada
function saludart({name, age}):number{
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}

//Cuando una función no tiene un return (no devuelve nada) o su devolución no nos interesa se le indica con 'void'
function noDevuelvoNada(fraseMotivadora:string):void{
    console.log(`La frase motivadora de hoy es: ${fraseMotivadora}`)
}

//Cuando una funcion va a interrumpir su ejecución y no hay posibilidad de que nunca vaya a devolver nada utilizamos 'never'
function noDevuelvo(message:string): never {
    throw new Error(message) //throw evita que la función llegue a su fín 
}

/*********************/

//Tambien es posible tipar funciones pasadas como parametros
const sayHiFromFunction = (fn) => { //!Error, parametro tipo 'any'. Podría intentar tiparse como fn:Function para indicar que lo que recibe es una función, pero igualmente sería demasiado general
    fn('Rubén')
}
//El tipo 'Function' referido a funciones sería como el tipo 'any' referido a parametros. Debería indicarsele exactamente cual es la función que recibirá

//Función que recibe la función anterior como parametro y realiza una cosa
sayHiFromFunction((name) =>{ // !Error parametro tipo 'any'
    console.log(`Hola ${name}`)
});

//ALTERNATIVA CORRECTA AL EJEMPLO ANTERIOR

const sayHiFromFunction2 = (fn: (name:string) => string ) =>{//Se le indica que lo que va a recibir es una función con un parametro de entrada llamado name de tipo string, y un retorno de tipo string
    fn('Rubén')
}

sayHiFromFunction((name:string) =>{ //Aquí tambien se le indica que la función recibe un parametro name de tipo string
    return `Hola ${name}`;
});


/****Tipar Arrow Functions****/
const sumar = (a:number, b:number): number =>{
    return a + b
}

const restar: (a:number, b:number) => number = (a,b) =>{
    return a-b;
}

/**
 * Inferencia de tipos con las funciones cuando tienen un contexto
 * Funciones anonimas según el contexto
 * */
 
const avengers = ['spidey', 'Hulk', 'Thor'];

//Infiere gracias a que sabe que avengers es un array de strings, por lo que cada elemento es un string
avengers.forEach(avenger =>{
    console.log(avenger.toUpperCase())
})

