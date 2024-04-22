
let jugadas = 6;
let palabra = "CONDE";

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    jugadas--
    if (jugadas==0){
        terminar("PERDISTE!😖")
    }
    if (palabra == INTENTO) {
        terminar('GANASTE😀!')
    } else{
        let fila = document.createElement("div")
        console.log(fila)
    for (const i in INTENTO){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerText = INTENTO[i]
        fila.appendChild(letra)
        console.log(fila)
        if (INTENTO[i]==palabra[i]){
            console.log(INTENTO[i], "VERDE")
            letra.style.background = "#0cdb5b"
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
            letra.style.background = "#e2fa0b"
        } else {
            console.log(INTENTO[i], "GRIS")
            letra.style.background = "#grey"
        }
    }
    let grilla = document.getElementById("grid")
    grilla.appendChild(fila)
}
}
	function terminar(mensaje){
        const input = document.getElementById("guess-input")
        input.disabled = true;
        button.disabled = true;
      let p = document.getElementById("guesses") 
      p.innerText = mensaje
        console.log("<h1>GANASTE!</h1>")

    }