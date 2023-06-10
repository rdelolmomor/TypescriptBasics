/************************************************************TYPESCRIPT ****** CURSO BÁSICO****************************************************/


/**
 * Lenguaje de programación que se puede implementar sobre Javascript (es un superset de Javascript) y viene a otorgar más robustez a Javascript
 * incidiendo sobre todo en un tipado más estricto.
 * Typescript no funciona en el navegador, es compilado a Javascript.
 **Typescript no funciona en tiempo de ejecución, sino en tiempo de compilación. Typescript se compila y se convierte en Javascript en tiempo de ejecución.
 * Typescript no ahorra codigo, al contrario, añade codigo pero aporta robustez
 */




/************/

//INFERENCIA: En determinados casos, Typescript es capaz de deducir el tipo de un parametro sin necesidad de indicarselo explicitamente. Al asignarle un valor inicial, por ejemplo
let a = 'hola' //string
a = true //number
//Typescript otorga un tipado más estatico y no permite modificar el tipo del parametro una vez se le ha asignado implicita o explicitamente
console.log(typeof a) //Expected => number

//Otro caso de Inferencia: Está claro que al declarar el parametro 'resultado' y asignarle como valor inicial la suma de dos numeros, Typescript lo va a entender como tipo numerico.
let num1 = 3 //number
let num2 = 5 //number
let resultado = num1 + num2 //number

//Debemos evitar en lo posible declarar implicitamente el tipo de dato de un parametro, siempre que podamos.


/****************/
//Otros tipos de datos: 'any' y 'unknown'

//Cuando se declara un parametro y no se le indica un valor ni un tipado, Typescript asocia un tipo 'any' a ese dato, esto hace que ignore el tipado y actue como si una variable javascript se tratara
let tipoAny // 'any'
tipoAny = 45
tipoAny= false
tipoAny = ['uno','dos']

//Tipo de dato 'unknown' significa que typescript desconoce el tipo de dato que es. 
//Se limitan las operaciones hasta que se le indica el tipo. De esta forma se previene la propagación de datos inconsistentes.

let x : unknown;
//Se puede cambiar de tipo
x = 10;
x = false
x = '10';
//No permite que pueda ser asignada a otra variable tipada
let y: string = x;
//Habrá que indicar con que tipo queremos asignarsela a la nueva variable
let z: string = x as string;


