/**

Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
triángulo:
#
##
###
####
#####
######
#######

*/

function triangle(number){
    for ( let i='#' ; i.length<number ; i+='#' ){
        console.log(i);
    }
}

triangle(8);