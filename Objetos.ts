/************************/
//Objetos
//Los objetos se pueden crear mediante inferencia en sus propiedades

const persona = {
    name: 'Rubén',
    age: 30
}
persona.name = 56 //No se puede modificar el valor ya que se le ha indicado implicitamente que el parametro name es de tipo string
persona.altura //no existe el parametro hola en el objeto persona


/**Type Alias**/

//Creamos un tipo propio que definimos a nuestro gusto (Siempre en PascalCase)
type Heroe = {
    name: string,
    age: number
};

//Creamos el objeto tipandolo con el tipo que hemos definido
let heroe : Heroe = {
    name:'Thor',
    age: 1500
}

//En caso de utilizar una función que devuelva un objeto del tipo que hemos definido, se tipa el return con dicho tipo;
function createHeroe(name:string, age:number): Heroe{
    return {name, age}
}

const thor = createHeroe('Thor', 1500)




/**Optional Properties - Union Types - Template Union Types**/

//Union Types. Podemos acotar los valores posibles
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

//Template Union Types para su uso posterior
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Heroe2 = {
    name: string,
    age: number,
    isActive?:boolean, //Optional Property. Puede existir o no
    readonly id?:HeroId, //Optional Promerty de solo lectura. Puede existir o no, pero una vez se le asigna un valor, no se puede modificar.
    heroPowerScale?:HeroPowerScale, //Sus valores solo pueden ser los definidos en el tipo 
};



let heroe2 : Heroe2 = {
    name:'Thor',
    age: 1500,
    id : '654-651-9687-98456-96654',
}

function createHeroe2(hero:Heroe2): Heroe2{
    const {name, age} = hero
    return {name, age, isActive:true}
}

const thor2 = createHeroe2({name:'Thor', age: 1500})

thor2.id = 9584561968451968451268541 //!Error. Es Read Only

thor2.heroPowerScale = 'multiversal';



/**SE RECUERDA QUE TYPESCRIPT SE COMPILA Y SE CONVIERTE EN JAVASCRIPT
 * Limitaciones como readonly nos limitan como devs, pero al pasarlo a javascript desaparece
 * 
 * TYPESCRIPT NO SIRVE PARA VALIDAR DATOS EN TIEMPO DE EJECUCION
 */

//EXTENDER TIPOS
//Intersection Types. Podemos crear un tipo personalizado a partir de la unión de otros tipos

type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroProperties = {
    isActive?:boolean,
    readonly id?: HeroId
    heroPowerScale?:HeroPowerScale
};

type Heroe3 = HeroBasicInfo & HeroProperties; //Intersection Type

let heroe3 : Heroe3 = {
    name:'Thor',
    age: 1500,
    id : '654-651-9687-98456-96654'
}

function createHeroe3(input:HeroBasicInfo): Heroe3{
    const {name, age} = input
    return {name, age, isActive:true}
}

const thor3 = createHeroe3({name:'Thor', age: 1500});

thor3.heroPowerScale = 'multiversal';


/**Type Indexing**/
type PropiedadesHeroe = {
    isActive: boolean,
    address:{
        planet: string,
        city: string
    }
}

//Podemos extraer un parametro de un tipo definido para poder crear un objeto con las mismas caracteristicas.
const adressHero : PropiedadesHeroe['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}


/*Recuperar tipo a partir de un objeto*/
//Tambien se puede crear un tipo a partir de un objeto: Creamos el tipo Adress extrayendolo de 'adressHero' con la ayuda de typeof (typeof nos pemite realizar este tipo de acciones en Typescript)
type Adress = typeof adressHero;
//Creamos un objeto del tipo Adress
const thorAdress: Adress = {
    planet: 'Asgard',
    city: 'capital'
}


/*Recuperar tipo a partir de una función*/
//Creamos una función con un retorno de un objeto
function createAdress(){
    return {
        planeta: 'Tierra',
        ciudad: 'Barcelona'
    }
}

//Crear un tipo a partir del retorno de una función
type Adress2 = ReturnType<typeof createAdress>