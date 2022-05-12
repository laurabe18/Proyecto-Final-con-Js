//Ventana Modal, al clickear una imagen, se agranda

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
    mostrarDatos();
    showHour()
}

// creamos un titulo de bienvenida a la pag
//lo adherimos al html (manipulacion del Dom)
function escribirBienvenida(){
    let myH1 = document.createElement("h1");
    myH1.innerHTML = "¡¡Bienvenida a la Reserva de turnos online!!";
    let parentDiv = document.querySelector(".formulario").parentNode;
    let newNodo = document.querySelector(".formulario");
    parentDiv.insertBefore(myH1, newNodo);  
}

//obtenemos los input para completarlos 
//le agregamos un eventos dependiendo la condicion que cumpla
//le damos estilos con css
function mostrarDatos(){
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

let nodoformulario= document.querySelector(".formulario");
   nodoformulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    document.querySelector("#enviar").value="Enviado"
});

//Llamamos a una api del forario actual, de manera externa  
//lo adherimos al html (manipulacion del Dom)

function showHour(container1,container2){
    fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
    .then(response => response.json())
    .then((json) => {mostrarHora(json,container1,container2)})
}

function mostrarHora(obj){
    let hora = obj.datetime.slice(11,16);
    const form =document.querySelector(".formulario");
    form.insertAdjacentHTML('afterend', `<p class="p__api">Zona horaria: Argentina, Buenos Aires ${hora} hs</p>`);
    
}

