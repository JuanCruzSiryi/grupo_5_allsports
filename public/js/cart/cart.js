
document.addEventListener('DOMContentLoaded', ()=>{
  if(logoutButton){
    logoutButton.addEventListener('click', logoutEvent);
  }
  renderCart()
});

const renderCart = () => {
  let cart = getCart();
  cart.forEach(product => {
    renderProductInCart(product)
  });
  
  cartSummary.innerHTML += `
    <div class="total">
      <p>Total</p>
      <p>$${getTotal()}</p>
    </div>
    <button class="checkout-button" onclick="endCart()">Finalizar compra</button>
    <button class="delete-button" onclick="clearCart()"
    > Limpiar Carrito </button>
  `
}

function endCart(){
  // alert("¡Compra exitosa!")
  let cart = getCart();
  console.log(cart);
  if (cart.length>0) {
    Swal.fire({
      icon: 'success',
      title: '¡Compra exitosa!',
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        localStorage.clear()
        window.location.href = "/";
      }
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '!No tienes productos en el carrito!'
    })
  }
}

function clearCart() {
  localStorage.clear()
  //location.href = 'cart.html'
  location.reload();
}

function deleteItem(productId, qyt) {
  let cart = getCart();
  let newCart = cart.filter(product => product.id != productId);
  saveCart(newCart);
  location.reload();
}

function addItem(productId, qyt) {
  let cart = getCart();
  let newCart = cart.map(product => {
    if (product.id == productId) {
      console.log(product);
      product.quantity++;
    }
    return product; 
  });
  saveCart(newCart);
  location.reload();
}

function removeItem(productId, qyt) {
  let cart = getCart();
  if(qyt > 0) {
    let newCart = cart.map(product => {
      if (product.id == productId) {
        console.log(product);
        product.quantity--;
      }
      return product; 
    });
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
  return total.toFixed(2);
}