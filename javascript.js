let textoExtra = document.getElementById("texto_extra");
let puntos = document.getElementById("puntos");
let boton = document.getElementById("boton");

boton.onclick = function() {

    if (textoExtra.style.display === "none" || textoExtra.style.display === "") {
        textoExtra.style.display = "inline"; 
        puntos.style.display = "none";       
        boton.textContent = "Ver menos";
        
    } else {
        textoExtra.style.display = "none";   
        puntos.style.display = "inline";     
        boton.textContent = "Ver más";       
    }
}   