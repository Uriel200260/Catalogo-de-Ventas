const contenedor = document.getElementById("productos");

fetch("data/productos.json")

    .then(respuesta => respuesta.json())

    .then(productos => {

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

    });