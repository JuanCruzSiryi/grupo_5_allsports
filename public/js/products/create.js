const form = document.getElementById('formCreateProduct')

document.addEventListener('DOMContentLoaded', formulary)

function formulary (){
   form.nameProduct.addEventListener ('blur', validationName);
   form.nameProduct.addEventListener ('change',  validationName);
   form.descProduct.addEventListener ('blur', validationDesc)
   form.descProduct.addEventListener ('change', validationDesc)
   form.discount.addEventListener ('blur', validationDisc)
   form.discount.addEventListener ('change', validationDisc)
   form.priceProduct.addEventListener ('blur', validationPrice)
   form.priceProduct.addEventListener ('change', validationPrice)
   form.image.addEventListener ('change', validationImage)
   form.image.addEventListener ('blur', validationImage)

   form.addEventListener('submit', register)


}

function validationName (e){
e.preventDefault()
let errorName = document.querySelector('.nameProductError')
   
if (form.nameProduct.value.length < 5 || form.nameProduct.value.length == 0 ){
   errorName.innerHTML = 'El nombre debe contener al menos 5 caracteres'
 } else{
   errorName.innerHTML = ''
 }
 }

 function validationDesc (e){
    e.preventDefault()
    let errorDesc = document.querySelector('.descProductError')
   
 if (form.descProduct.value.length < 20){

      errorDesc.innerHTML = 'La descripción debe contener al menos 20 caracteres'
 } else{
      errorDesc.innerHTML = ''
 }
 }

 function validationDisc (e){  
  e.preventDefault()
  let errorDisc = document.querySelector('.discountError')
 
  if (form.discount.value > 99){
 
   errorDisc.innerHTML ="El descuento no puede ser mayor a 99%"
 
}else{
        errorDisc.innerHTML = ''
  }
 }
 
 function validationPrice (e){ 
    e.preventDefault()
    let errorPrice = document.querySelector('.priceError')
  
   if (form.priceProduct.value < 1){
   
      errorPrice.innerHTML = 'El precio no puede ser $0'
    }else{
      errorPrice.innerHTML = ''
    }
   }
   
     function validationImage (e){ 
      e.preventDefault()
      
      let errorImage = document.querySelector('.imageError')
     
      var filePath = this.value;
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
      if(!allowedExtensions.exec(filePath)){
          
          errorImage.innerHTML = 'El archivo solo puede ser .JPG, .JPEG, .PNG o .GIF'
          
          fileInput.value = '';
          return false;
      }else{
          errorImage.innerHTML = '' 
      
      }
     }
  
     function register (e){
         validationName
         validationDesc
         validationDisc
         validationName
         validationImage
      
     }