let contentProducts = document.getElementById('products');
function getCart(){
  return JSON.parse(localStorage.getItem('cart') || "[]")
}

const renderProduct = (product) => {
  contentProducts.innerHTML += `
    <h3>${product.title}</h3>
    <small>${product.price}</small>
    <img src="${product.image}" width = "150">
    <br>
  `
}

function productExist(product, cart) {
  return cart.find(item => item.id == product.id)
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}