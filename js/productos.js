const contenedor = document.getElementById("productos");

fetch("data/productos.json")
.then(respuesta => respuesta.json())
.then(productos =>{
    productos.forEach(producto => {
        contenedor.innerHTML +='<div class="col-md-4 mb4"> </div>'
    })
})