let contenedorMatriz = document.querySelector("#contenedor-matriz");
let resetBoton = document.querySelector("#reseteo");

window.addEventListener("load", matrizBase);
window.addEventListener("click", cambiarTama);

function matrizBase(){
    setearBaseMatriz(16);
    llenarMatriz(16);
    
}

function setearBaseMatriz(size){
    contenedorMatriz.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

}

function llenarMatriz(size){
    for (let i = 0; i <size * size; i++){
        let elementoMatriz = document.createElement("div");
        elementoMatriz.classList ="elemento-matriz";
        elementoMatriz.addEventListener("mouseover", cambiarColor);
        contenedorMatriz.appendChild(elementoMatriz);
    }
}

function cambiarColor(e){
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
}

function cambiarTama(){
    let nuevoT = prompt("Ingresa el nuevo tamanho");

    if(nuevoT !==null){
        nuevoT =parseInt(nuevoT);
        if(nuevoT < 1 || nuevoT>64 || Number.isNaN(nuevoT)){
            alert("Ingresa un numero entre 1 a 64 ");
            cambiarTama();
        }else{
            limpiarMatriz();
            setearBaseMatriz(nuevoT);
            llenarMatriz(nuevoT);
        }
    }

}  
function limpiarMatriz() {
    let arrayMatriz = Array.from (contenedorMatriz.childNodes);
    arrayMatriz.forEach((element) => {
        contenedorMatriz.removeChild(element);
    });
}