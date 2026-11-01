
let precioCafe = 4500;
let precioCapuccino = 5200;
let precioLatte = 5800;
let precioMedialunas = 3200;
let precioTostadas = 4000;
let precioAvocado = 5500;


// FUNCIONES

function login() {
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
}


//FUNCIÓN DEFINIDA + RETURN
function calcular_total_bruto (a, b) { 
    let totalBruto = a + b
    console.log ("El precio bruto total es: $" + totalBruto);
    return totalBruto
}

//FUNCION FLECHA
const precioConIva = (a, b) => a * b; { 
        
}


function tomarPedido() {
    let pedido = true;
    let subtotal = 0
    let total = 0 
    let intentos = 0
    while (pedido) {
        let carta = parseInt(prompt("1. Café con leche\n2. Capuccino Italiano\n3. Latte en tazón"))
        switch (carta) {
                case 1:
                    subtotal += precioCafe 
                    break
                case 2:
                    subtotal += precioCapuccino
                    break
                case 3:
                    subtotal += precioLatte
                    break
                default: alert ("Opción no válida. Seleccione una opción correcta.");
            }

        let cartaConfirmacion = confirm("¿Desea acompañar su bebida?");
            
            if (cartaConfirmacion) {
                let carta1 = parseInt(prompt("1.Medialunas\n2. Tostadas con queso y mermelada\n3. Avocado Toast"))
                switch (carta1) {
                    case 1:
                        total = calcular_total_bruto(subtotal, precioMedialunas);
                        console.log ("Café con leche: $ " + subtotal);
                        console.log ("Medialunas: $ " + precioMedialunas);
                        console.log ("Iva 21%: $ " + total * 0.21);
                        alert ("Precio total del pedido: $ " + precioConIva(total, 1.21));
                        break
                    case 2:
                        total = calcular_total_bruto(subtotal, precioTostadas);
                        console.log ("Café con leche: $ " + subtotal);
                        console.log ("Medialunas: $ " + precioTostadas);
                        console.log ("Iva 21%: $ " + total * 0.21);
                        alert ("Precio total del pedido: $ " + precioConIva(total, 1.21));
                        break
                    case 3:
                        total = calcular_total_bruto(subtotal, precioAvocado);
                        console.log ("Café con leche: $ " + subtotal);
                        console.log ("Medialunas: $ " + precioAvocado);
                        console.log ("Iva 21%: $ " + total * 0.21);
                        alert ("Precio total del pedido: $ " + precioConIva(total, 1.21));
                        break
                    default: alert ("Opción no válida. Seleccione una opción correcta.");
                }
                
            }
        
            else {
                switch (carta) {
                    case 1:
                        console.log ("Café con leche: $ " + precioCafe);
                        console.log ("Iva 21%: $ " + (subtotal * 0.21));
                        alert ("Precio total del pedido: $ " + precioConIva(subtotal, 1.21));

                        break
                    case 2:
                        console.log ("Capuccino: $ " + precioCapuccino);
                        console.log ("Iva 21%: $ " + (subtotal * 0.21));
                        alert ("Precio total del pedido: $ " + precioConIva(subtotal, 1.21));
                        break
                    case 3:
                        console.log ("Latte en tazón: $ " + precioLatte);
                        console.log ("Iva 21%: $ " + (subtotal * 0.21));
                        alert ("Precio total del pedido: $ " + precioConIva(subtotal, 1.21));
                        break
                    default: alert ("Opción no válida. Seleccione una opción correcta.");
                }
            }

            pedido = false;
    }
}



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
login();


alert("Seleccione la bebida que desea pedir:");
tomarPedido();

alert("Gracias por elegirnos!");