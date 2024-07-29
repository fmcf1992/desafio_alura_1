
function desactivar_div_imagen_lupa(){
    let desactivar = document.getElementById('div__imagen');
    desactivar.style.display = 'none';
}

function activar_div_imagen_lupa(){
    let activar = document.getElementById('div__imagen');
    activar.style.display = 'flex';
}
function activar_resultado(){
    let activar = document.getElementById('div__resultado');
    console.log(activar);
    activar.style.display = 'flex';
    activar.style.flexDirection = 'column';
    activar.style.justifyContent='space-between';
    activar.style.height = '100%';
}
function desactivar_resultado(){
    let desactivar = document.getElementById('div__resultado');

    desactivar.style.display = 'none';

}

function encriptar() {
    let texto = document.getElementById('input__ingresado__id').value.toLowerCase();
    if(texto.length >0){
        let encryptedText = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        desactivar_div_imagen_lupa();
        activar_resultado();
        document.getElementById('texto_resultado').textContent = encryptedText;
    }else{
        alert('Ingresar texto a encriptar');
    }
    
};
function desencriptar() {
    texto = document.getElementById('input__ingresado__id').value.toLowerCase();
    if(texto.length >0){
        let encryptedText = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('texto_resultado').textContent = encryptedText;
    }else{
        alert('Ingresar texto a desencriptar');
    }
    
};
function copiar() {
    var textToCopy = document.getElementById('texto_resultado').value;
    console.log(textToCopy);
    
    // Seleccionar el texto del campo de entrada
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // Para móviles

    // Ejecutar el comando de copiar
    document.execCommand('copy');

};

desactivar_resultado();
activar_div_imagen_lupa();
