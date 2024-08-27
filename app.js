const textoOriginal = document.getElementById('texto-original');
const textoEncriptado = document.getElementById('texto-encriptado');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar = document.getElementById('copiar');
const mensajeValidacion = document.querySelector('.mensaje-validacion');

function encriptarTexto() {
  if (validarTexto(textoOriginal.value)) {
    let texto = textoOriginal.value.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    textoEncriptado.value = texto;
  }
}

function desencriptarTexto() {
  let texto = textoEncriptado.value;
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  textoOriginal.value = texto;
}

function validarTexto(texto) {
  // Verifica si el texto contiene mayúsculas o caracteres especiales
  if (/[A-Z]/.test(texto) || !/^[a-z\s]+$/.test(texto)) {
    mensajeValidacion.style.display = 'block';
    return false;
  } else {
    mensajeValidacion.style.display = 'none';
    return true;
  }
}

function copiarTexto() {
  textoEncriptado.select();
  document.execCommand('copy');
}

btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);