let contentProducts = document.getElementById('products');
function getCart(){
  return JSON.parse(localStorage.getItem('cart') || "[]")
}

const renderProduct = (product) => {
  // contentProducts.innerHTML += `
  //   <h3>${product.name}</h3>
  //   <small>${product.price}</small>
  //   <img src="../images/products/${product.image}" width = "150">
  //   <br>
  //   `
  contentProducts.innerHTML += `
    <article class="main-article">
      <div class="article-image-container">
        <a href="/productDetail/${product.id}"><img class="article-image" src="/images/products/${product.image}" alt="" /></a>
        
        <div class="article-information-div">
          <p class="article-name">${product.name}</p>
          <h4 class="article-description">${product.description}</h4>    
          <div class="article-animation-container">
            <select class="product-size" name="size">
              <option value="" disabled selected>Seleccione una talle</option>
              <option value="1">37</option>
              <option value="2">38</option>
              <option value="2">39</option>
            </select>
            <button class="add-cart-button" 
              onclick="addToCart(this)"
              data-id="${product.id}"
              data-name="${product.name}"
              data-image="${product.image}"
              data-price="${product.price}">
              AÑADIR AL CARRITO
            </button>

          </div>
        </div>
      
      </div>
    </article>
    `
    
}

const renderProductInCart = (product) => {
  console.log("product", product);
  contentProducts.innerHTML += `
  <h3>${product.name}</h3>
  <small>${product.price}</small>
  <img src="../images/products/${product.image}" width = "150">
  <br>
  `
}

function productExist(product, cart) {
  return cart.find(item => item.id == product.id)
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}