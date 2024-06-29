let intentos = 6
//let palabra = "APPLE"

let listaPalabras = ["APPLE", "HOUSE", "MOUSE", "TRACE"];

let posicion = Math.floor(Math.random()*listaPalabras.length)
let palabra = listaPalabras[posicion];

let intento = document.getElementById("guess-input").value;

console.log(intento);

const BUTTON = document.getElementById("guess-button")

BUTTON.addEventListener("click", intentar)

function intentar(){
    console.log("click!")
    const intento = leerIntento();
    intentos = intentos - 1
    console.log("te quedan ", intentos, " intentos");
    
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    console.log(ROW)
    

    for (let i in intento){
        //console.log(intento[i]);
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = intento[i];
        //console.log(SPAN);
        
        if(palabra[i]===intento[i]){
            SPAN.style.backgroundColor = "#79b851";
            console.log(intento[i],"verde");
        }else if(palabra.includes(intento[i])){
            SPAN.style.backgroundColor = "#f3c237";
            console.log(intento[i], "amarillo");
        }else{
            SPAN.style.backgroundColor = "#a4aec4";
            console.log(intento[i], "gris")
        }
        console.log(SPAN);
        ROW.appendChild(SPAN);
        GRID.appendChild(ROW);
    }
    if(intento===palabra){
        console.log("ganaste");
        terminar("<h1>GANASTE!😀</h1>")
    }
    if (intentos == 0){
        console.log("perdiste");
        terminar("<h1>PERDISTE!😖</h1>")
    }
}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}