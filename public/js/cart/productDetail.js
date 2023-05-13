const addButton = document.getElementById('cart-button');

document.addEventListener('DOMContentLoaded', ()=>{
  console.log("button", addButton);
  addButton.addEventListener('click', (evt)=>{
    addToCart(evt.target);
  })
})