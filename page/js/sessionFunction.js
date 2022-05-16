
function register(event) {
    // previene comportamiento por defecto del evento
 	//(en este caso, recargar la pagina)
	event.preventDefault();

 	const aNombre = event.target[0].value;
 	const apellido = event.target[1].value;
 	const fecha = event.target[2].value;
 	const horario = event.target[3].value;
 	const telefono = event.target[4].value;
 
    //en caso que uno de los campos no este completo, el formulario se reiniciara y no se enviara
    if(!aNombre || !apellido || !fecha || !horario || !telefono) {
 	    event.target.reset();
		// se presenta un mensaje advirtiendo que hubo un error
 		return showMessage("Hubo un error, intente de nuevo", "error")
 	}

    
 	//Cada usuario que ingrese, subira los datos en un  nuevo array
 	let nuevoUsuario = new Usuario(aNombre,apellido,fecha,horario,telefono);
 	listaUsuario.push(nuevoUsuario);
 	//Ese array sera ordenado por fecha y horarios
    ordenarDiaHorario();
 	// se guardara el usuario y los datos ingresados en el localStorage(almacenamiento local)
 	updateLocalStorage();
 	// Se visualizara un mensaje en caso correcto del registro
 	showMessage("Registro exitoso", "success");
    event.target.reset();
	actualizar();
}

//Se utiliza una funcion de orden superior con el metodo sort para ordenar el array
function ordenarDiaHorario()
{
    listaUsuario.sort(function(a,b)
 	{ return  a.fecha < b.fecha ? -1 
 		    : a.horario < b.horario ? -1
 		    : 1;
 	});
}

function updateLocalStorage() {
 	localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
}

// funciones del dom
function showMessage(message, type) {
	Toastify({
		text: message,
		duration: 2500,
		gravity: "bottom",
		position: "center",
		stopOnFocus: true, // Prevents dismissing of toast on hover
		className: type,
	}).showToast();
}

//Actualizacion de la pag
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    location.reload();
})

