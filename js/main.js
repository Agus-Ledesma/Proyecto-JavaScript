let nombreCompleto = prompt("Ingrese su nombre: ");
console.log("Nombre Completo: ", nombreCompleto);


let localidad = prompt("Ingrese su localidad: ");
console.log("Localidad: ",localidad);


let edad = prompt("Ingrese su edad: ");
edad = parseInt(edad); // Convertir la edad a un número entero//
console.log("Edad: ", edad);


let producto = prompt("Ingrese el producto que desea comprar: ");
console.log("Producto: ", producto);


let cantidad = prompt ("Ingrese la cantidad de productos que desea comprar: ");
cantidad = parseInt(cantidad); // Convertir la cantidad a un número entero//
console.log("Cantidad: ", cantidad);


let precioUnidad = prompt("Ingrese el precio unitario del producto: ");
precioUnidad = parseFloat(precioUnidad); // Convertir el precio unitario (string) a un número decimal//
console.log("Precio Unitario: ", precioUnidad);

const totalNeto = precioUnidad * cantidad;
console.log("Total Neto: ", totalNeto);

const iva = totalNeto * 0.21; // Calcular el IVA (21% del total neto)//
console.log("IVA: ", iva);

const totalConIva = totalNeto + iva; // Calcular el total con IVA//
console.log("Total con IVA: ", totalConIva);


alert("Hola " + nombreCompleto + ", " + "Bienvenido!"); 
alert("El precio total a pagar es: " + totalConIva + " (IVA incluido)");


