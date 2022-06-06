const carrito = document.getElementById("carrito");
const listaProductos= document.getElementById("lista_productos");
const contenedorCarrito= document.getElementById("lista_carrito");
const vaciarCarritoBtn= document.getElementById("vaciar_carrito");

let articuloCarrito =[];

cargarEventListeners();

function cargarEventListeners() {
    listaProductos.addEventListener('click',agregarProducto);
    carrito.addEventListener('click', eliminarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarCarrito')) {
        const producto=e.target.parentElement.parentElement;
        leerDatosProductos(producto);
    }
}

function leerDatosProductos(producto) {
    const infoProducto ={
        imagen: producto.getElementById("imagen").src,
        titulo: producto.getElementById("h4").textContent,
        precio: producto.getElementById(".precio span").textContent,
        id: producto.getElementById("a").getAttribute("data-id"),
        cantidad: 1
    }

    if (articuloCarrito.some(producto => producto.id === infoProducto.id)) {
        const productos = articuloCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        })
        articuloCarrito = [...productos];
    } else {
        articuloCarrito =[...articuloCarrito, infoProducto];
    }
}

function eliminarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrarProducto')) {
        const productoId = e.target.getAttribute('data-id')
        articuloCarrito = articuloCarrito.filter(producto => producto.id !== productoId);
        carritoHTML();
    }
}

function carritoHTML() {
    vaciarCarrito();
    articuloCarrito.forEach(producto =>{
        const row=document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrarProducto" data-id="${producto.id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);    
    });
}

function  vaciarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}