const textoArea = document.querySelector(".texto-area")
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const informacion = document.querySelector(".informacion");
copia.style.display = "none"

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function validarTexto(){
    let textoEscrito = document.querySelector(".texto-area").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        informacion.classList.remove("informacion");
        informacion.classList.add("error");
        setTimeout(() => {
            informacion.classList.remove("error");
            informacion.classList.add("informacion");
        }, 1000);
        return true;
    }else {
        informacion.classList.remove("error");
        informacion.classList.add("informacion");
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
    const textoEncriptado = encriptar(textoArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    textoArea.value = "";
    copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    if(!validarTexto()) {
    const textoEncriptado = desencriptar(textoArea.value)
    mensaje.value = textoEncriptado
    textoArea.value = "";
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
