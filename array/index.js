/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let lista = 1;
for (let i = 0; i < meses.length; i++) {

    document.write("<br>" + lista + " Mes: " + meses[i]);
    lista++;
}
document.write("<br>")
/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/
let ciudades = [];
let agregar;

do {
    agregar = prompt("Ingrese una ciudad ")
    if (agregar) {
        ciudades.push(agregar);
    }

} while (confirm("deseas agragar otra ciudad?"))


document.write("<br>El array generado es:" + ciudades)
document.write("<br>"[+ciudades.toString()]);
document.write("<br>La longitud del arreglo es: " + ciudades.length);
if (ciudades.length) {
    document.write("<br>La primera posicion es: " + ciudades[0]);
}

if (ciudades.length) {
    document.write("<br>La tercera posicion es: " + ciudades[2]);

}

if (ciudades.length) {
    document.write("<br>La ultima posicion es: " + ciudades[ciudades.length - 1]);
}
document.write("<br>")
ciudades.push("Paris");
document.write(ciudades.toString());

if (ciudades.length) {
    document.write("<br>La segunda posicion es: " + ciudades[1]);

}
document.write("<br>")
ciudades.splice(1, 1, "Barcelona");
document.write(ciudades.toString())
document.write("<br>")

/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.*/

let dados1;
let dados2;
let suma;
let resul_suma = [];
let resul_gral = 0;

for (i = 0; i < 50; i++) {
    dados1 = (Math.floor(Math.random() * 6) + 1)
    dados2 = (Math.floor(Math.random() * 6) + 1)

    suma = dados1 + dados2;
    resul_suma.push(suma);
    document.write("<br>" + resul_suma);
}
