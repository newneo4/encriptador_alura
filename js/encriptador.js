let verificar = true;
const valores = [
    ["e" ,"enter"],
    ["i" ,"imes"],
    ["a" ,"ai"],
    ["o" , "ober"],
    ["u" ,"ufat"]
];

function encript(texto){
    console.log(texto.length);
    
    if (/[A-Z0-9]/.test(texto)) {
        alert("Solo puedes usar letras minúsculas sin mayúsculas ni números!!");
    } else if(texto.length > 0){
        if(verificar == true){    
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("oculto").style.display = "block";
            verificar = false;
        }

        for(let [key,value] of valores){
            texto = texto.replaceAll(key, value);
        }
        document.getElementById("devolver-texto").textContent = texto;
    } else{
        document.getElementById("cambio-texto").textContent="No te quieras pasar de listo manito";
    }
}

function decript(texto){

    if (/[A-Z0-9]/.test(texto)) {
        alert("Solo puedes usar letras minúsculas sin mayúsculas ni números!!");
    } else if(texto.length > 0){
        if(verificar == true){    
            document.getElementById("animacion").style.animation;
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("oculto").style.display = "block";
            verificar = false;
        }
    
        const n_valores = [...valores].reverse()

        for(let [key,value] of n_valores){
            texto = texto.replaceAll(value,key);
        }
        document.getElementById("devolver-texto").textContent = texto;


    } else{
        document.getElementById("cambio-texto").textContent="No te quieras pasar de listo manito";
    }
}

function copy() {
    let copyText = document.querySelector("#devolver-texto");
    copyText.select();
    document.execCommand("copy");
}