const cuentas = [
    {nombre:"Mali" ,saldo:200 ,password:"perro"},
    {nombre:"Gera" ,saldo:290 ,password:"gato"},
    {nombre:"Maui" ,saldo:67 ,password:"leon"},
]

let usuarioSeleccionado;

function ocultarSecciones (seccionOcultar, seccionMostrar) {
    seccionOcultar.style.display = "none";
    seccionMostrar.style.display = "block";
}

function ingresousuario (posicionUsuario) {
    ocultarSecciones(seccion_ingresousuario,seccion_claveusuario);
    usuarioSeleccionado = posicionUsuario;
}

function revisarPassword () {
    const valorIngresado = document.getElementById("password").value;
    if((usuarioSeleccionado === 0) && (valorIngresado === cuentas[0].password)) {
        ocultarSecciones(seccion_claveusuario,seccion_opcionescajero);
    } else if((usuarioSeleccionado === 1) && (valorIngresado === cuentas[1].password)) {
        ocultarSecciones(seccion_claveusuario,seccion_opcionescajero);
    } else if((usuarioSeleccionado === 2) && (valorIngresado === cuentas[2].password)) {
        ocultarSecciones(seccion_claveusuario,seccion_opcionescajero);
    } else {
        alert("Contraseña incorrecta, por favor intente nuevamente.");
    }
}

function versaldo () {
    ocultarSecciones(seccion_opcionescajero, seccion_versaldo);
    const mensajeSaldo = document.getElementById("mostrarSaldo");
    mensajeSaldo.innerText = "Tu saldo actual es: " + cuentas[usuarioSeleccionado].saldo;
}

function ingresarSaldo() {
    const monto = parseInt(document.getElementById("ingresarSaldo").value);
    const nuevoSaldo = cuentas[usuarioSeleccionado].saldo + monto;
    
    if(nuevoSaldo > 990 || nuevoSaldo < 10) {
        alert("ERROR! el nuevo saldo total no esta permitido. Debe ser mayor a $10 y menos de $990")
    } else {
        cuentas[usuarioSeleccionado].saldo = nuevoSaldo;
        const montoIngresado = document.getElementById("montoIngresado");
        const nuevoSaldoTotal = document.getElementById("nuevoSaldoTotal");
        montoIngresado.innerText = "El monto ingresado fue de " + monto;
        nuevoSaldoTotal.innerText = "El nuevo saldo total es de " + nuevoSaldo;
    }
}

function retirarSaldo() {
    const monto = parseInt(document.getElementById("montoRetirado").value);
    const nuevoSaldo = cuentas[usuarioSeleccionado].saldo - monto;
    
    if(nuevoSaldo > 990 || nuevoSaldo < 10) {
        alert("ERROR! el nuevo saldo total no esta permitido. Debe ser mayor a $10 y menos de $990")
    } else {
        cuentas[usuarioSeleccionado].saldo = nuevoSaldo;
        const montoRetirado = document.getElementById("cantidadRetirada");
        const nuevoSaldoTotal = document.getElementById("saldoTotalNuevo");
        montoRetirado.innerText = "El monto retirado fue de " + monto;
        nuevoSaldoTotal.innerText = "El nuevo saldo total es de " + nuevoSaldo;
    }

}

const seccion_bienvenida = document.getElementById("bienvenida");
const seccion_ingresousuario = document.getElementById("ingresousuario");
const seccion_claveusuario = document.getElementById("claveusuario");
const seccion_opcionescajero = document.getElementById("opcionescajero");
const seccion_versaldo = document.getElementById("versaldo");
const seccion_agregarsaldo = document.getElementById("agregarsaldo");
const seccion_retirarsaldo = document.getElementById("retirarsaldo");