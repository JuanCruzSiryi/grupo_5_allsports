const comprarBtn = document.querySelector(".btnComprar");
const closeBtn = document.querySelector('.close');
const carritoPopup = document.querySelector(".carritoPopup");
const cantidadBtn = document.getElementById("cantidadBtn");

closeBtn.addEventListener('click', () => {
    carritoPopup.style.display = 'none';
});

comprarBtn.addEventListener("click", () => {
    const producto = "Adidas Galaxy 5";
    const cantidad = 1;
    const precio = 34000;
    const metodoPago = "Tarjeta de crédito";
    const total = cantidad * precio;

    carritoPopup.style.display = "block";

    carritoPopup.innerHTML = `
    <h2>Detalles de la compra</h2>
    <p>Producto: ${producto}</p>
    <p>Cantidad: ${cantidad}</p>
    <p>Precio: $${precio.toFixed(2)}</p>
    <p>Método de pago: ${metodoPago}</p>
    <p>Total: $${total.toFixed(2)}</p>
  `;
});

cantidadBtn.addEventListener("click", mostrarDesplegable);

var desplegableCreado = false;

function mostrarDesplegable() {
    if (!desplegableCreado) {
        const cantidadSelect = document.createElement("select");
        cantidadSelect.setAttribute("id", "cantidad-select");

        for (let i = 1; i <= 10; i++) {
            const option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerText = i;
            cantidadSelect.appendChild(option);
        }

        const cantidadBtn = document.getElementById("cantidadBtn");
        cantidadBtn.parentNode.insertBefore(cantidadSelect, cantidadBtn.nextSibling);
        desplegableCreado = true;
    }
}
