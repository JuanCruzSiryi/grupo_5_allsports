const form = document.getElementById('formEditProduct')

document.addEventListener('DOMContentLoaded', formulary)

function formulary (){
    form.name.addEventListener ('change', validationName);
    form.description.addEventListener ('change', validationDesc)
    form.discount.addEventListener ('change', validationDisc)
    form.price.addEventListener ('change', validationPrice)
    form.image.addEventListener ('change', validationImage)

}

function validationName (e){

e.preventDefault()
let errorName = document.querySelector('.nameProductError')
    
if (form.name.value.length < 5){
    errorName.innerHTML = 'El nombre debe contener al menos 5 caracteres'
     } else{
       errorName.innerHTML = ''
     }
 }
    

function validationDesc (e){
 e.preventDefault()
 let errorDesc = document.querySelector('.descProductError')


if (form.description.value.length < 20){

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
   
   if (form.price.value == 0){
   
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