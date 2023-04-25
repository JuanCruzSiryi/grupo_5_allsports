
document.addEventListener('DOMContentLoaded', ()=>{
  renderCart()
});

const renderCart = () => {
  let cart = getCart();
  cart.forEach(product => {
    renderProductInCart(product)
    contentProducts.innerHTML += `
      <span>Cantidad: ${product.quantity}</span>
      <button onclick="removeItem(${product.id}, ${product.quantity})"
      > Eliminar </button>
    `
  });
  contentProducts.innerHTML += `
    <br>
    <br>
    <h3>Total: ${getTotal()}</h3>
    <button onclick="clearCart()"
    > Limpiar Carrito </button>
  `
}

function clearCart() {
  localStorage.clear()
  //location.href = 'cart.html'
  location.reload();
}

function removeItem(productId, qyt) {
  if(qyt > 2){
    let cart = getCart();
    let newCart = cart.filter(product => product.id != productId);
    saveCart(newCart);
  }
  location.reload();
}

function getTotal() {
  let cart = getCart();
  let total = 0;
  cart.forEach(product => {
    total += product.price * product.quantity;
  });
  return total;
}