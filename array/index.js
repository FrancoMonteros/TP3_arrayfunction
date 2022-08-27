/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/
let meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let lista=1;
for(let i=0; i<meses.length; i++){
    
    document.write("<br>" + lista + " Mes: "+meses[i]);
    lista++;
}
/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/


/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.*/
