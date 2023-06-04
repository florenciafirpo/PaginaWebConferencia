function calcularPrecio() {
    var total;
    let cantidad = cantidadEntradas();
    let categoria = personas();

    if (categoria === "1") {
      total = cantidad * (200 * 0.2);
    } else if (categoria === "2") {
      total = cantidad * (200 * 0.5);
    } else if (categoria === "3") {
      total = cantidad * (200 * 0.85);
    }

    const apuntarPrecio = document.getElementById("totalAPagar");
    apuntarPrecio.innerHTML = "Total a pagar: $" + total;
}

function personas() {
    const persona = document.getElementById("categoria");
    const categoria = persona.value;
    return categoria;
}

function cantidadEntradas() {
    const apuntadorPersonas = document.getElementById("cantidad");
    const valorEntradas = apuntadorPersonas.value;
    const numeroAsistentes = toNumber(valorEntradas);
    return numeroAsistentes;
}

function toNumber(valor) {
    const apuntadorValor = Number(valor);
    return apuntadorValor;
}