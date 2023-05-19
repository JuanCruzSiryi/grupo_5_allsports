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
  if(logoutButton){
    logoutButton.addEventListener('click', logoutEvent);
  }
  getProducts(API).then(response => renderProducts(response.data));
})

// renderizar los productos
const renderProducts = (products) => {
  products.slice(0, Math.floor(products.length / 4) * 4).forEach((product, index) => {
    renderProduct(product, contentProducts);
    if(index < 4) renderProduct(product, newestProducts);
    if(index > 4 && index < 9) renderProduct(product, recommendedProducts);
  });
}



