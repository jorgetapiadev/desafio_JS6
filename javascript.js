//js

function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;

    // expresiones regulares 
    const nombreExp = /^[a-zA-Z]\ üÜ'áéíóúÁÉÍÓÚñÑ\s]*{2,30}$/;
    const rutExp = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK]){6,10}$/gim;
    const numeroExp = /^[0-9]{1,3}$/;


    if (nombre.match(nombreExp)) {
        var letras = 1;
    }
    else {
        var letras = "E";

    }

    // if (nombre.match(mailformat)) {
    //     var femail = 1;
    // }
    // else {
    //     var femail = "E";

    // } 


    if ((nombre === "") || (apellidos === "") || (correo === "") || (usuario === "") || (pass === "") ||  (telefono === "")) {
        alert("todos los campos son obligatorios, completar!");
        return false;
    }
    else if (letras ===  "E") {
        alert("solo debe tener letras el nombre");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (apellidos.length > 80) {
        alert("El apellido es muy largo");
        return false;
    } else if (correo.length > 100) {
        alert("El correo electrónico es muy largo");
    }
/*      else if (femail ===  "E") {
        alert("No tiene formato email");
        return false; */
    else if (usuario.length > 20) {
        alert("El usuario es muy largo");
        return false;
    } else if (telefono.length > 10) {
        alert("El teléfono es muy largo");
        return false;
    } else if (isNaN(telefono)) {
        alert("Que el campo teléfono acepte solo datos numéricos.");
        return false;
    } else {
        alert(`Saludos humano ${nombre} ${apellidos}  Usuario: ${usuario} Contraseña:${pass}`);
        var resultado = `Registrado: ${nombre} ${apellidos}  Usuario:${usuario} Contraseña: *********`;
        document.getElementById("resultado").innerHTML = resultado;
        return false;
    }
    
}
