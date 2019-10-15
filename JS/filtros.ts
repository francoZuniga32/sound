let productosFiltro:Producto[] = [...productos];

for (let i = 0; i < productosFiltro.length; i++) {
    console.log(productosFiltro[i].getNombre);
    $("#cuerpo").append("<div class=\"card\"><div class=\"card-body\"><p>"+productosFiltro[i].getNombre+"</p><p>"+productos[i].getPrecio+"</p></div></div>");
}

function categorizado() {
    $("#cuerpo").empty();
    productosFiltro = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].getPrecio <= 250) {
            productosFiltro.push(productos[i]);
        }
    }
    for (let i = 0; i < productosFiltro.length; i++) {
        $("#cuerpo").append("<div class=\"card\"><div class=\"card-body\"><p>"+productosFiltro[i].getNombre+"</p><p>"+productos[i].getPrecio+"</p></div></div>");
    }
}

function tageado() {
}

function precios() {
}

function buscado() {
}

function filtros() {
    
}
