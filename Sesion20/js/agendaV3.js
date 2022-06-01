function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email  = document.getElementById("email").value;
    //-----------------------//
    var datos={
        'movil': movil,
        'email':email,
    };
    //-----------------------//
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    
    actualizarDatos();

}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    var valor=JSON.parse(localStorage.getItem(nombre));
    document.getElementById("nombre").value=nombre;
    document.getElementById("movil").value= valor.movil;
    document.getElementById("email").value= valor.email;
}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
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
            + datos_registrados.email + '</span>' +
            '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}