const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
const preguntas = 
[
  {
    pregunta: "1. Which are the best TV broadcasters?",
    respuestas: {
      A: "Televisa",
      B: "Tv azteca",
      C: "Imagen tv",
    },
    respuestaCorrecta: "A",
  },
  {
    pregunta: "2. Who is the most popular iptv provider?",
    respuestas: {
      A: "Bagdad",
      B: "Teher",
      C: "Kodi",
    },
    respuestaCorrecta: "C",
  },
  {
    pregunta: "3. What's the name of the TV service from the national PTT?",
    respuestas: {
      A: "Kodi",
      B: "TeamVOX",
      C: "EPG",
    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "4. Wich gadget help us to recive our Television's signal?",
    respuestas: {
      A: "IpTv, Open signal, Cable, Satelital ",
      B: "Infraestructuretion",
      C: "EPG",
    },
    respuestaCorrecta: "A",
  },
  {
    pregunta: "5. How many channels can you get in open Tv?",
    respuestas: {
      A: "20",
      B: "30",
      C: "40",
    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "6. What is the most common way to pay for television services?",
    respuestas: {
      A: "Annual licence",
      B: "Montly",
      C: "Pay per view",
    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "7. What is the minimum amount to pay for a TV service?",
    respuestas: {
      A: "< $500",
      B: "$500",
      C: "> $500",
    },
    respuestaCorrecta: "A",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];
    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`);  }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>` );});

  contenedor.innerHTML = preguntasYrespuestas.join("");}
mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;
    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;
      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";}});
  resultadoTest.innerHTML =
    "You have scored " +
    respuestasCorrectas +
    " out of a total of " +
    preguntas.length;
  }




botonRes.addEventListener("click", mostrarResultado);