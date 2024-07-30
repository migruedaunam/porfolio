function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;

    document.querySelector(".msg.box").style.display = "block";
    document.querySelector(".info").style.display = "none";
    }

    var boton1 = document.querySelector("#btn-encriptar");
    boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;

    document.querySelector(".msg.box").style.display = "block";
    document.querySelector(".info").style.display = "none"
    }

    var boton2 = document.querySelector("#btn-desencriptar");
    boton2.onclick = desencriptar;

function copiarTexto() {
    var textoSalida = document.querySelector(".text-input-salida");
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999); // Para dispositivos móviles

    navigator.clipboard.writeText(textoSalida.value)
    .then(() => {
        alert("Texto copiado al portapapeles!");
    })
    .catch(err => {
        alert("Hubo un error al copiar el texto: ", err);
    });
}  

    var botonCopiar = document.querySelector("#btn-copy");
    botonCopiar.onclick = copiarTexto;
