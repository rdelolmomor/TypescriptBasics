
//Arrays

const languajes = [] //!Error, no se puede introducir un tipo string ya que interpreta que el array siempre tiene que estar vacío
languajes.push('Javascript') 

//Hay que indicarle el tipo de datos que tiene que tener el array.
const lenguajes: string[] = [];
//Tambien se puede hacer con  'lenguajes: Array<string>'
lenguajes.push('Javascript')
lenguajes.push('Borland')
lenguajes.push('C++')
lenguajes.push(false)//!Error. Solo permite strings en el array


//Para arrays de varios tipos se indican entre parentesis con corchetes vaciós despues del cierre del parentesis
const lenguas: (string | number)[] = []
lenguas.push('Castellano')
lenguas.push(3);

//Tambien se puede crear un array de un tipo de datos personalizado
type DataAdress = {
    direccion:string,
    ciudad:string,
    pais:string
}

const direcciones: DataAdress[] = []

direcciones.push({direccion:'Calle falsa 123', ciudad:'Madrid', pais: 'España'});

//Se pueden crear matrices 
type ColorRGB = [number,number,number]

const blancoRGB: ColorRGB = [255,255,255]


/* Ahora supongamos un 3 en raya
[X 0 X],
[0 X 0],
[X   0]
*/

//Podemos empezar creando un tipo personalizado que contemple los tres valores posibles 'X', '0' o vacío
type CellValue = 'X' | 'O' | '';

//Podemos utilizar una tupla para describir el tipo de tablero y en cada posición le indicamos el tipo que hemos creado anteriormente
type GameBoard = [
[CellValue,CellValue,CellValue],
[CellValue,CellValue,CellValue],
[CellValue,CellValue,CellValue]
]
//Una tupla es un array con un limite fijado. Un ejemplo facil de tupla es el uso del hook de React 'useState', que siempre devuelve un array de 2 posiciones.

//De esta forma al definir el juego, hemos controlado, tanto el tamaño del tablero como los posibles valores
const gameBoard:GameBoard = [
    ['X', 'O','O'],
    ['', 'X','O'],
    ['X', 'O','']
]



