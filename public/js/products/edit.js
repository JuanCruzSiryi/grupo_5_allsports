const form = document.getElementById('formEditProduct')

document.addEventListener('DOMContentLoaded', formulary)

function formulary (){
    form.name.addEventListener ('blur', validationName);
    form.description.addEventListener ('blur', validationDesc)
    let firstNameError = this.document.querySelector('.firstNameError')
    let lastNameError = this.document.querySelector('.lastNameError')


}

function validationName (e){
 // let input = e.target
 // if (input.tagName == "INPUT"){ //  
e.preventDefault()

if (form.name.value.length < 5){
 // document.getElementById(p).innerHTML = "El nombre es obligatorio"

 alert ("El nombre es obligatorio")
//  firstNameError.innerHTML = '<p> El nombre es obligatorio </p>' 
 }
 }

function validationDesc (e){
 //  
 e.preventDefault()

if (form.description.value.length < 20){

 alert ("La descripción debe contener al menos 20 caracteres")

            // let errorDesc = document.getElementById("error")
 // errorDesc.innerHTML = '<p class= "text-error"> El mail es obligatorio </p>'
 }
}
