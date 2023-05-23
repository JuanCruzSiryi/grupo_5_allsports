let contentProducts = document.getElementById('products');
let newestProducts = document.getElementById('newest-products');
let recommendedProducts = document.getElementById('recommended-products');
let cartSummary = document.getElementById('cart-summary');
let logoutButton = document.getElementById('logout-button');
function getCart(){
  return JSON.parse(localStorage.getItem('cart') || "[]")
}

const renderProduct = (product, container) => {
  container.innerHTML += 
  `
    <article class="main-article">
      <div class="article-image-container">
        <a href="/productDetail/${product.id}"><img class="article-image" src="/images/products/${product.image}"/></a>
        
        <div class="article-information-div">
          <p class="article-name">${product.name}</p>
          ${ product.discount > 0 ? `
            <h4 class="article-discount-shipping"> ${parseInt(product.discount)}% </h4>
            <p class="article-price-neto">Antes: $${product.price}</p>` : ''
          }  
          <div class="article-price">
            <p class="article-discount">Precio: $${product.price - ((product.price* product.discount) / 100)}</p>
          </div>

          <h4 class="article-description">${product.description}</h4>

          <div class="article-animation-container">
            <button class="add-cart-button" 
              onclick="addToCart(this)"
              data-id="${product.id}"
              data-name="${product.name}"
              data-image="${product.image}"
              data-price="${product.price - ((product.price* product.discount) / 100)}">
               AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </article>
  `
    
}

const renderProductInCart = (product) => {
  
  const totalParcial=  product.price*product.quantity;
  contentProducts.innerHTML += 
  `
    <tr>
      <td class="product-cell">
        <div class="product-info">
          <img src="../images/products/${product.image}">
          <div class="product-details">
            <p>${product.name}</p>
          </div>
        </div>
      </td>
      <td>
        <div class="quantity-container">
          <button class="quantity-button minus-button" onclick="removeItem(${product.id}, ${product.quantity})">-</button>
          <input class="quantity-input" type="number" min="1" max="99" value=${product.quantity}>
          <button class="quantity-button plus-button" onclick="addItem(${product.id}, ${product.quantity})">+</button>
        </div>
      </td>
      <td class="price-cell">$${product.price}</td>
      <td class="total-cell">$${totalParcial.toFixed(2)}</td>
       <td class="delete-cell"><button class="delete-button" onclick="deleteItem(${product.id}, ${product.quantity})">Eliminar</button></td>
    </tr>
  `
}

function productExist(product, cart) {
  return cart.find(item => item.id == product.id)
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

  Swal.fire({
    icon: 'success',
    width: 150,
    showConfirmButton: false,
    backdrop: `
      url("https://media.tenor.com/KFwN-qERWW8AAAAi/foodpanda-panda.gif")
      left top
      no-repeat
    `,
    timer: 1500,
    didClose: () => {
      window.location.href = '/productCart';
    }
  })
  
  //location.href = '/productCart'
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function logoutEvent() {
  localStorage.clear()
}