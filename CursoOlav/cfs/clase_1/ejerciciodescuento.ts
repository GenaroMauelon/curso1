import * as readlyneSync from "readline-sync"; 

let precioProducto = readlyneSync.questionInt("ingrese el precio del producto");

let precioDescuento: number = precioProducto*0.1;

let precioFinal: number = precioProducto - precioDescuento;


console.log("el precio final de su producto es: " + precioFinal);
