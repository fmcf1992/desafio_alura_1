function ingresandoPalabras(input){
        // Convertir el texto a minúsculas
        let texto = input.value.toLowerCase();
        // Reemplazar los caracteres con acentos por sus equivalentes sin acento
        texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        input.value = texto;
}

function desactivar_div_imagen_lupa(){
    let desactivar = document.getElementById('div__imagen');
    desactivar.style.display = 'none';
};

function activar_div_imagen_lupa(){
    let activar = document.getElementById('div__imagen');
    activar.style.display = 'flex';
};

function activar_resultado(){
    let activar = document.getElementById('div__resultado');
    activar.style.display = 'flex';
    activar.style.flexDirection = 'column';
    activar.style.justifyContent='space-between';
    activar.style.height = '100%';
};

function desactivar_resultado(){
    let desactivar = document.getElementById('div__resultado');
    desactivar.style.display = 'none';
};

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
        let remplazando = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
            desactivar_div_imagen_lupa();
            activar_resultado();
        document.getElementById('texto_resultado').textContent = remplazando;
    }else{
        alert('Ingresar texto a desencriptar');
    }  
};

// function copiar() {
//     // Obtener el texto del campo de entrada
//     let copiado = document.getElementById('texto_resultado').textContent;
//     console.log(copiado);

//     // Usar la API del portapapeles para copiar el texto
//     navigator.clipboard.writeText(copiado).then(() => {
//         console.log('Texto copiado al portapapeles!');
//     }).catch((error) => {
//         console.error('Error al copiar el texto: ', error);
//     });

// };


function copiarResultado() {
    // Obtener el texto del párrafo
    const textToCopy = document.getElementById('texto_resultado').textContent;
    
    // Crear un elemento temporal de texto
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    
    // Establecer el valor del elemento temporal con el texto del párrafo
    tempInput.value = textToCopy;
    
    // Seleccionar el texto del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copiar el texto al portapapeles
    document.execCommand('copy');
    
    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
    
    // Mensaje de éxito en consola
    console.log('Texto copiado al portapapeles!');
}

desactivar_resultado();
activar_div_imagen_lupa();
