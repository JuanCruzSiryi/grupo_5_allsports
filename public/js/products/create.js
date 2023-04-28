const form = document.getElementById('formCreateProduct')

document.addEventListener('DOMContentLoaded', formulary)

function formulary (){
form.nameProduct.addEventListener ('blur', validationName);
form.descProduct.addEventListener ('blur', validationDesc)

}

function validationName (e){
 // let input = e.target
 // if (input.tagName == "INPUT"){ //  
e.preventDefault()

if (form.nameProduct.value.length < 5){
 // document.getElementById(p).innerHTML = "El nombre es obligatorio"

//  alert ("El nombre es obligatorio")
 nameProduct.innerHTML = '<p> El nombre es obligatorio </p>' 
 }
 }

function validationDesc (e){
 //  
 e.preventDefault()

if (form.descProduct.value.length < 20){

 alert ("La descripción debe contener al menos 20 caracteres")

            // let errorDesc = document.getElementById("error")
 // errorDesc.innerHTML = '<p class= "text-error"> El mail es obligatorio </p>'
 }
}


