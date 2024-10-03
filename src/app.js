/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variables con las ids de las etiquetas a modificar
  const btn = document.getElementById("boton-excusa"),
    excusa = document.getElementById("Excusa-Generada");

  //Funcion Numero Aleatorio
  const NumRandom = (n) => {
    n = n - 1;
    let numrandom = Math.floor(Math.random() * n);
    return numrandom;
  };

  //Funcion Generador de Excusas
  const GenerarExcusa = () => {
    return `${quien[NumRandom(quien.length)]} 
  ${accion[NumRandom(accion.length)]} 
  ${objeto[NumRandom(objeto.length)]} 
  ${cuando[NumRandom(cuando.length)]}`;
  };

  //Excusas
  let quien = [
      "Batman",
      "El cafe",
      "El Var alias isra",
      "La policia",
      "Mi amigo imaginario",
      "El perro de la vecina de mi tia",
      "El profesor juanjo",
      "El fantasma",
      "El amigo de mi amigo de un conocido",
      "El enfermito que le gusta C++",
      "El programador rarito",
      "La profesora",
      "El niño rarito de los juegos",
      "El loco que solo juega valorant",
      "La persona que acaba de generar esta excusa",
      "Los duedes",
    ],
    accion = [
      "rompio",
      "daño",
      "pinto",
      "mojo",
      "se comio",
      "robo",
      "vendio",
      "trituro",
      "tiro mercurio en",
      "encripto",
      "tiro",
      "ensucio",
      "desaparecio",
    ],
    objeto = [
      "mi casa",
      "mi teclado",
      "mi raton",
      "mi telefono",
      "mis zapatos",
      "el coche de la esposa de mi papa",
      "mi mano",
      "la alarma mia",
      "la almohada de mi cama",
      "mi github",
      "la camida",
    ],
    cuando = [
      "hoy",
      "ayer",
      "ahorita mismo",
      "mientras estaba usando var",
      "cuando estaba viendo batman",
      ", Estaba dumiendo! lo juro",
      "yo estaba solucionando conflictos y no me di cuenta",
      "no tengo pruebas, soy inocente!",
      ". No es culpa mia",
      "mientras estaba tomando mi cafe",
    ];

  //Eventos para generar la excusa
  btn.addEventListener("click", function() {
    excusa.textContent = "";
    excusa.textContent = `${GenerarExcusa()}`;
  });

  excusa.addEventListener("click", function() {
    excusa.textContent = "";
    excusa.textContent = `${GenerarExcusa()}`;
  });
};
