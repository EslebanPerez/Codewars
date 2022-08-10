/**Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una vinculación
tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
dando como salida una cuadrícula con el alto y ancho dados.

 */

function tablero (num){
    let tablero=' ';
    for (let i = 1 ; i<=num; i++){
        for(let j = 1 ; j<=num ; j++){
            if( (i+j) % 2 == 0){
                tablero += ' '
            }else{tablero += '#'}
        }
        tablero+='\n';
    }
    console.log(tablero)
}

tablero(9);