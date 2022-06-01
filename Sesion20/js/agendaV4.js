function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email  = document.getElementById("email").value;
    var direccion  = document.getElementById("direccion").value;
    var sexo  = document.getElementById("sexo").value;
    //-----------------------//
    var datos={
        'movil': movil,
        'email':email,
        'direccion':direccion,
        'sexo':sexo,
    };
    //-----------------------//
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("sexo").value = "";
    alert("Datos guardados correctamente");
    actualizarDatos();

}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    var valor=JSON.parse(localStorage.getItem(nombre));
    document.getElementById("nombre").value=nombre;
    document.getElementById("movil").value= valor.movil;
    document.getElementById("email").value= valor.email;
    document.getElementById("direccion").value= valor.direccion;
    document.getElementById("sexo").value= valor.sexo;
}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
    alert("Datos eliminados correctamente");
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
    alert("Lista vacía");
}

function actualizarDatos() {
    var registro="";
    if (localStorage.length ===0) {
        registro += '<li>Vacío</li>';
    } else {
        for (var i=0; i <= localStorage.length -1; i++) {
            var key = localStorage.key(i);
            var datos_registrados=JSON.parse(localStorage.getItem(key));
            registro += '<li>' + '<span class= "nom">' + key + '</span>'
            + '<span class="nom">' + datos_registrados.movil + '</span>' + '<span class="nom">' 
            + datos_registrados.email + '</span>' + '<span class="nom">' + datos_registrados.direccion + '</span>' +
            '<span class="nom">' + datos_registrados.sexo + '</span>' +
            '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}

function limpiarDatos() {
    document.getElementById("form").reset();
}