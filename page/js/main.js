//PAG DE TRABAJOS
//Ventana Modal, al clickear una imagen, se agranda

//const {reset} = require("nodemon");

document.addEventListener("click",function (e) {
    if(e.target.classList.contains("galeria-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('galeria-modal'));
        myModal.show();
    }
});

//Formulario
//Llamamos a la funcion para permitir iniciar el relleno del formulario
function inicio(){
    escribirBienvenida();
    obtenerDatos();
    showHour()
}

// creamos un titulo de bienvenida a la pag
//lo adherimos al html (manipulacion del Dom)
function escribirBienvenida(){
    let myH1 = document.createElement("h1");
    myH1.className="promo";
    myH1.innerHTML = "¡¡Bienvenida a la Reserva de turnos online!!";
    let parentDiv = document.querySelector(".formulario").parentNode;
    let newNodo = document.querySelector(".formulario");
    parentDiv.insertBefore(myH1, newNodo);  
}

//obtenemos los input para completarlos 
//le agregamos un eventos dependiendo la condicion que cumpla
//le damos estilos con css
function obtenerDatos(){
   let inputs = document.getElementsByClassName("formulario__input");
  for(let i =0; i < inputs.length; i++){  
   inputs[i].addEventListener(`keyup`, function(){
    this.value.length>=1 ?
    this.nextElementSibling.classList.add(`fijar`)
    :
    this.nextElementSibling.classList.remove(`fijar`)
        
});
}
}

//Llamamos a una api del forario actual, de manera externa  
//lo adherimos al html (manipulacion del Dom)

function showHour(){
    fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
    .then(response => response.json())
    .then((json) => {mostrarHora(json)})
}


function mostrarHora(obj){
    let hora = obj.datetime.slice(11,16);
    const form =document.querySelector(".formulario");
    form.insertAdjacentHTML('afterend', 
    `<p class="p__api">Zona horaria: Argentina, Buenos Aires ${hora} hs</p>`)
}