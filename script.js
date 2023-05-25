
var texto;
var encriptado;
var desencriptado;
var acentos;
var si = true;
texto = document.getElementById("texto_inicial");

//Funciones de encriptado
//Este codigo lo quise hacer lo más autónomo posible, sin usar tantas funciones
function pasarArray(cadena, separador) {
    var arrayDeCadena = cadena.split(separador);
    return arrayDeCadena;
}

function evaluarMayusculaEncrip() {

    var HayMayusculaEncriptado = true;

    encriptado = pasarArray(texto.value, "");
    for (var i = 0; i <= encriptado.length - 1; i++) {

        if (encriptado[i] == encriptado[i].toUpperCase()) {
            alert('Ingrese solo lestras minúsculas');
            HayMayusculaEncriptado = true;
            break;
        } else {
            HayMayusculaEncriptado = false;
        }
    } return HayMayusculaEncriptado;
}

function final() {

    if (evaluarMayusculaEncrip() == false) {

        for (var i = 0; i <= encriptado.length - 1; i++) {

            let a = "ai";
            let e = "enter";
            let y = "imes";
            let o = "ober";
            let u = "ufat";


            if (encriptado[i] == "a") {
                encriptado[i] = a;
            } else if (encriptado[i] == "e") {
                encriptado[i] = e;
            } else if (encriptado[i] == "i") {
                encriptado[i] = y;
            } else if (encriptado[i] == "o") {
                encriptado[i] = o;
            } else if (encriptado[i] == "u") {
                encriptado[i] = u;
            } else {
                encriptado[i] = encriptado[i];
            }

        }

        encriptado = encriptado.toString();
        encriptado = encriptado.replace(/,/g, "");

        document.getElementById("texto_final").value = encriptado;
    }

    else {
        document.getElementById("texto_final").value = "Hubo un error";
    }
}

//Funciones de desencriptado
//Este codigo va a ser más coto, usando funciones

function evaluarMayusculaDesc() {

    var HayMayusculaDesc = true;

    encriptado = pasarArray(texto.value, "");
    for (var i = 0; i <= encriptado.length - 1; i++) {

        if (encriptado[i] == encriptado[i].toUpperCase()) {
            alert('Ingrese solo lestras minúsculas');
            HayMayusculaDesc = true;
            break;
        } else {
            HayMayusculaDesc = false;
        }
    } return HayMayusculaDesc;
}

function desencriptar() {

    desencriptado=texto.value;

    if(evaluarMayusculaDesc()==false){
    desencriptado = desencriptado.replace(/(ai|enter|imes|ober|ufat)/g, function (palabra) {
        switch (palabra) {
            case 'ai': return "a";
            case 'enter': return "e";
            case 'imes': return "i";
            case 'ober': return "o";
            case 'ufat': return "u";
            default: break;
        }
    }
    )

    document.getElementById("texto_final").value = desencriptado;}

    else{
        document.getElementById("texto_final").value = "Hubo un error";
    }

}


//Funciones de borrado

function borrar() {
    document.getElementById("texto_inicial").value = "";
    document.getElementById("texto_final").value = "";
};

// Funciones de copiar

function copiar() {
    var copiarTexto = document.getElementById("texto_final").value
    navigator.clipboard.writeText(copiarTexto);
}

