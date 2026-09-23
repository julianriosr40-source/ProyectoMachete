// LOGICA DEL BOTON VER MAS
let textoExtra = document.getElementById("texto_extra");
let puntos = document.getElementById("puntos");
let boton = document.getElementById("boton");

if (boton !== null) {
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
}   
//Logica del boton ver mas 2
let textoExtra2 = document.getElementById("texto_extra2");
let puntos2 = document.getElementById("puntos2");
let boton2 = document.getElementById("boton2");

boton2.onclick = function() {

    if (textoExtra2.style.display === "none" || textoExtra2.style.display === "") {
        textoExtra2.style.display = "inline"; 
        puntos2.style.display = "none";       
        boton2.textContent = "Ver menos";
        
    } else {
        textoExtra2.style.display = "none";   
        puntos2.style.display = "inline";     
        boton2.textContent = "Ver más";       
    }
}   

// LOGICA DEL MENU HAMBURGUESA 
let botonHamburguesa = document.getElementById("boton_hamburguesa");
let menuNavegacion = document.getElementById("barra_navegacion");

if (botonHamburguesa !== null) {
    botonHamburguesa.onclick = function() {
        menuNavegacion.classList.toggle("menu_activo");
        if (menuNavegacion.classList.contains("menu_activo")) {
            botonHamburguesa.textContent = "✖"; 
        } else {
            botonHamburguesa.textContent = "🍔"; 
        }
    }
}   