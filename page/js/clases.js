//creamos una clase con los objetos del formulario que vamos a necesitar
class Usuario
{
    constructor(aNombre, apellido, fecha,horario,telefono)
    {
        this.aNombre = aNombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.fecha = fecha;
        this.horario = horario;
        this.telefono = telefono
    }
}

//lista de usuario
 const listaUsuario = JSON.parse(localStorage.getItem("listaUsuario")) || [];