/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.*/
let parametro= parseInt(prompt("ingrese un parametro"));
function par(numero) {
  if (numero%2 === 0) {
    return "el numero es par"
  } else {
    return "el numero es impar"
  }
}
document.write("<br>"+ par(parametro));
document.write("<br>")

/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.*/
let texto2= prompt("ingrese un cadena de texto");
function cadenatex(cadena) {
 if (cadena === texto2.toUpperCase() ) {
    return "la cadena está formada por mayúsculas"
 }else if (cadena === texto2.toLowerCase() ) {
   return "la cadena está formada por minúsculas"
 }else {
   return "la cadena está formada por ambas"
 }
}
document.write(cadenatex(texto2));
document.write("<br>")

/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)*/
let base = parseInt(prompt("numero de la base"));
let altura = parseInt(prompt("numero de la altura"));
function perimetro(altura , base) {
  return 2 * (altura + base)
  
}
document.write(perimetro(base, altura))

/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y 
mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

let numero4= parseInt(prompt("ingrese un numero"));
function tabla(tablamultiplicar) {
  document.write("<table>")
  for (let i = 1; i <= 10; i++) {
    document.write("<tr>")
    document.write("<td>"+numero4+ "</td>")
    document.write("<td>"+ "*" +i+ "="+"</td>")
    document.write("<td>"+i * tablamultiplicar+"</td>")
    document.write("</tr>")
  }
  document.write("</table>")
}
tabla(numero4);
