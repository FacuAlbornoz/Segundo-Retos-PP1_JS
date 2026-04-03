
// console.log("Hola Mundo");

// let nombre = "Facundo";
// var edad = 26;
// const dni = 42048718;

// if(edad > 18) {
//     var apellido = "Albornoz";
//     console.log(nombre);
// }

// console.log(apellido);

// para comentar ctr + k + c (debo seleccionar primero lo que quiero comentar)
// para comentar ctr + k + u (debo seleccionar primero lo que quiero descomentar comentar)

const nombre = prompt("Ingrese su nombre");
const edad = parseInt(prompt("Ingrese su edad"));
const cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar"));

console.log("Datos ingresados:");
console.log("Nombre: "+nombre, ", Edad: "+edad, ", Cantidad Entradas: "+ cantidadEntradas+".");

if (nombre == ""){
    console.log("El nombre no puede estar vacio.");
} else if (edad < 18){
    console.log("Lo siento, no puedes comprar entradas si eres menor");

} else if (cantidadEntradas <= 0 ) {
    console.log("No has seleccionado ninguna entrada.");
} else {
    console.log("Compra Valida");
    
    const precioEntrada = 1000;
    
    let total = precioEntrada * cantidadEntradas;

    console.log("Total a pagar: $" + total);

    total = total + 500

    console.log("Total con recargo: $" + total);

    console.log("Hola "+ nombre + ", su compra de " + cantidadEntradas + " entradas ha sido procesada. El total a pagar es: $" + total)
    console.log(`Hola ${nombre}, su compra de ${cantidadEntradas} entradas ha sido procesada. El total a pagar es: $${total}`)

    {
        let tipoCliente = "Regular";
        if (cantidadEntradas >= 5) {
            tipoCliente = "VIP";
            total = total * 0.9;
            console.log("Felicidades! Has obtenido un descuento del 10% por comprar 5 o mas entradas.");
        }
        console.log(`Tipo de cliente: ${tipoCliente}`);
    }
    console.log(`No funciona ${tipoCliente} fuera del bloque, ya que es una variable de bloque (let).`);
}