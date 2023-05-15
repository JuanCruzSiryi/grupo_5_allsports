//const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

let form = document.getElementById('register-form')
let firstNameError = this.document.querySelector('.firstNameError')
let lastNameError = this.document.querySelector('.lastNameError')
let emailError = this.document.querySelector('.emailError')
let passwordError = this.document.querySelector('.passwordError')
let termsError = this.document.querySelector('.termsError')
//let fileError = this.document.querySelector('.fileError')

window.addEventListener('DOMContentLoaded', contentLoaded)

function contentLoaded() {
  //Add register event
  form.addEventListener('submit', register);
}

function register(evt) {
  let errors = {}
  if(form.firstName.value.length < 2) errors.firstName = 'El Nombre debe tener más de 2 caracteres'
  if(form.lastName.value.length < 2) errors.lastName = 'El Apellido debe tener más de 2 caracteres'
  if(!validator.isEmail(form.email.value)) errors.email = 'El Email debe ser válido'
  if(form.password.value.length < 8) errors.password = 'La contraseña debe tener al menos 8 caracteres'
  if(!form.terms.checked) errors.terms = 'Debes aceptar los terminos'
  // let image = form.image.files[0]
  // if (image) {
  //   if(!allowedExtensions.test(image.name)) errors.image = 'Formato de archivo no válido'
    
  // }

  console.log("errors", errors);
  if (Object.keys(errors).length >= 1) {
    evt.preventDefault();
    firstNameError.innerHTML = (errors.firstName) ? `<li> ${errors.firstName} </li>` : '';
    lastNameError.innerHTML = (errors.lastName) ? `<li> ${errors.lastName} </li>` : '';
    emailError.innerHTML = (errors.email) ? `<li> ${errors.email} </li>` : '';
    passwordError.innerHTML = (errors.password) ? `<li> ${errors.password} </li>` : '';
    termsError.innerHTML = (errors.terms) ? `<li> ${errors.terms} </li>` : '';
    //fileError.innerHTML = (errors.image) ? `<li> ${errors.image} </li>` : '';
  } else {
    form.submit();
  }
  
}
