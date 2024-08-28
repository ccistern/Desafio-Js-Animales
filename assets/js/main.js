import Leon from "./model/Leon.js";
import Lobo from "./model/Lobo.js";
import Oso from "./model/Oso.js";
import Serpiente from "./model/Serpiente.js";
import Aguila from "./model/Aguila.js";
import { consumoAnimales, buscarPorNombre } from "./service/animalesService.js"

const animales = [];

let img = "";
let nombre = "";
let sonido = "";
let comentarios = "";
let edad = "";

const datos = await consumoAnimales();

const selectTipoAnimal = document.querySelector("#animal");
const selectEdadAnimal = document.querySelector("#edad");
const txtComentarios = document.querySelector("#comentarios");
const buttonAgregar = document.querySelector('#btnRegistrar');

window.togglePlay = togglePlay;

function togglePlay(sonido) {
    var audio = document.querySelector('#audio');
    audio.src = sonido;

    if (!audio.paused && audio.duration > 0) {
        audio.pause();
    } else {
        audio.play();
    }
}

//Evento Captura cambio de animal
selectTipoAnimal.addEventListener('change', () => {
    let animalSeleccionado = document.querySelector("#animal").value;
    const animalEncontrado = buscarPorNombre(animalSeleccionado, datos.animales)
    console.log(animalEncontrado);

    img = animalEncontrado.imagen;
    nombre = animalEncontrado.name;
    sonido = animalEncontrado.sonido;

    let divPreview = document.querySelector("#preview");
    divPreview.innerHTML = `<img src="assets/imgs/${img}" class="w-100 h-100"></img>`
});

//Evento captura cambio de edad
selectEdadAnimal.addEventListener('change', () => {
    edad = document.querySelector("#edad").value;
});

//Evento captura cambio en comentarios
txtComentarios.addEventListener('change', () => {
    comentarios = document.querySelector("#comentarios").value;
});

//Evebto captura botton agregar
buttonAgregar.addEventListener('click', () => {
    let animal;
    switch (nombre) {
        case "Leon": animal = new Leon(nombre, edad, img, comentarios, sonido);
            break;
        case "Lobo": animal = new Lobo(nombre, edad, img, comentarios, sonido);
            break;
        case "Oso": animal = new Oso(nombre, edad, img, comentarios, sonido);
            break;
        case "Serpiente": animal = new Serpiente(nombre, edad, img, comentarios, sonido);
            break;
        case "Aguila": animal = new Aguila(nombre, edad, img, comentarios, sonido);
            break;
    }
    console.log(animal)
    animales.push(animal);

    let listaAnimalesAgregados = document.querySelector('#Animales .row');
    listaAnimalesAgregados.innerHTML = listaAnimalesAgregados.innerHTML + `<div class="col-md-3 w-100 m-3">
            <div class="w-100">
              <div class="w-100 h-100"><img id="sonidoanimal" src="./assets/imgs/${animal.img}" class="w-100"></div>
              <div>
                <img src="./assets/imgs/audio.svg" class="w-50" onclick=togglePlay("./assets/sounds/${animal.sonido}")>
              </div>
            </div>
          </div>`;

    // sonidoanimal = document.querySelector('#sonidoanimal');
    // sonidoanimal.addEventListener('click',() => {
    // })

    console.log(animales);

});





