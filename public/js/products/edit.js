const form = document.getElementById('formEditProduct')

document.addEventListener('DOMContentLoaded', formulary)

function formulary (){
    form.name.addEventListener ('blur', validationName);
    form.description.addEventListener ('blur', validationDesc)
    form.discount.addEventListener ('blur', validationDisc)
    form.price.addEventListener ('blur', validationPrice)
    form.image.addEventListener ('blur', validationImage)

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

   // FALTA CORREGIR!!!!!!!!!

   function validationImage (e){ 
    e.preventDefault()
    let errorImage = document.querySelector('.imageError')
  
   if (!form.image.value == "JPG" || "JPEG" ||"PNG" || "GIT"){
   
    errorImage.innerHTML ="El archivo solo puede ser JPG, JPEG, PNG o GIF"

   }else{
       errorImage.innerHTML = ''            
    }
   }
   }