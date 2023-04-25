const API = "http://localhost:3005/api/products";

// Listado de productos
const getProducts = async (api) =>{
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('algo fallo', error);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  // getProducts(API).then(data => renderProducts(data));
  getProducts(API).then(response => renderProducts(response.data));
})

// renderizar los productos
const renderProducts = (products) => {
  products.forEach(product => {
    renderProduct(product);
  });
}

// Agregar al carrito

const addToCart = (btn) => {
  let product = {
    id: btn.dataset.id,
    name: btn.dataset.name,
    image: btn.dataset.image,
    price: btn.dataset.price,
    quantity: 1
  }
  //obtener el carrito del local storage
  let cart = getCart();

  if(cart.length){
    // verificar si el producto ya existe
    let product_exist = productExist(product, cart);
    if(product_exist){
      // actualizar la cantidad
      cart.forEach(item => {
        if (item.id == product_exist.id ) {
          item.quantity++;
        }
      });
    }
    else {
      cart.push(product)
    }
  } else {
    cart.push(product);
  }
  // se actualiza local storage
  saveCart(cart);
}


