
//DEFINICIÓN DE VARIABLES//
alert ("Complete los siguientes datos para registrarse");

let NombreCompleto = prompt ("Ingrese su Apellido y Nombre");
let FechaNacimiento = prompt ("Ingrese su Fecha de Nacimiento");
let Localidad = prompt ("Ingrese su Localidad");
let usuario = prompt ("Ingrese su Dirección de correo electrónico");
let contraseña = prompt ("Defina su Contraseña");

alert (NombreCompleto + ", se ha registrado correctamente");

console.log ("Nombre Completo: " + NombreCompleto);
console.log ("Localidad: " + Localidad);
console.log ("Fecha de Nacimiento: " + FechaNacimiento);
console.log ("Dirección de Correo Electrónico: " + usuario);
console.log ("Contraseña: " + contraseña);

alert ("Por favor INICIAR SESIÓN para continuar");

// //COMPARACIÓN DE DATOS y CONTROL DEL CICLO//

let login = true
let intentos = 0
const maxIntentos = 3

while (login && intentos < maxIntentos)  {
    let usuarioIngresado = prompt ("Correo Electrónico:");
    let contraseñaIngresada = prompt ("Contraseña:");

    if (usuarioIngresado === usuario && contraseñaIngresada === contraseña) {
        alert ("Bienvenido " + NombreCompleto + "!")
        console.log ("Acceso Correcto. Iniciando sesión...");
        login = false;
    } else {
        intentos++;
        
        if (intentos < maxIntentos) {
            alert ("Error al Inciar Sesión. Datos Incorrectos");
        } else {
            alert ("Máximos de intentos alcanzado. Cuenta Bloqueada");
            console.log ("Cuenta bloqueada por alcanzar el límte de intentos.")
        }
    }
}