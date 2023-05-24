const addButton = document.getElementById('cart-button');
const addButtonMobile = document.getElementById('cart-button-mobile');

document.addEventListener('DOMContentLoaded', ()=>{
  addButton.addEventListener('click', (evt)=>{
    addToCart(evt.target);
  })
  addButtonMobile.addEventListener('click', (evt)=>{
    addToCart(evt.target);
  })
})