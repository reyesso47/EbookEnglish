//arreglo con respuestas correctas
let correctas = [1,2,2,2,1,2,1,1];

//srreglo con las resp del usuario
let opcion_elegida={};
let cantidad_correctas=0;

//funcion que toma el num de ? y el input elegido de la ?
function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

	//cambia colores, fondo y crea el id para seleccionar la seccion correspondiente
    id="p" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNodes.style.backgroundColor = "cec#0fc";
}



//f q compara los arreglos para encontrar lso aciertos

function corregir(){
    cantidad_correctas = 0 ;
    for(i=0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas *100/8 + '%';
}