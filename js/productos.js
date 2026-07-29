const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscar");
const categoria = document.getElementById("categoria");

let listaProductos = [];

//Cargar productos
fetch("data/productos.json")
    .then(respuesta => respuesta.json())
    .then(productos => {
        listaProductos = productos;
        mostrarProductos(listaProductos);
    });

//Funcion para mostrar productos
function mostrarProductos(productos) {

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow h-100">

                <img src="${producto.imagen}"
                     class="card-img-top">

                <div class="card-body">

                    <h5>${producto.nombre}</h5>

                    <p>${producto.descripcion}</p>

                    <h4 class="text-success">

                        $${producto.precio}

                    </h4>

                    <h6>
                    <p>${producto.estado}</p>
                    </h6>

                    <button
                        class="btn btn-primary w-100">

                        Ver más

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

//Funcion para aplicar los filtros
function aplicarFiltros() {

    const texto = buscador ? buscador.value.toLowerCase() : "";
    const categoriaSeleccionada = categoria ? categoria.value : "Todas";

    const filtrados = listaProductos.filter(producto => {
        const coincideTexto =
            producto.nombre.toLowerCase().includes(texto) ||
            producto.descripcion.toLowerCase().includes(texto);

        const coincideCategoria =
            categoriaSeleccionada === "Todas" ||
            producto.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    mostrarProductos(filtrados);
}

//Evento del Buscador en tiempo real
if(buscador){
    buscador.addEventListener("keyup",aplicarFiltros);
}

//Evento del selector de categorias
if(categoria){
    categoria.addEventListener("change",aplicarFiltros)
}

