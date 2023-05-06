//const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

let form = document.getElementById('form-login')
let emailError = this.document.querySelector('.emailError')
let passwordError = this.document.querySelector('.passwordError')
//let fileError = this.document.querySelector('.fileError')

window.addEventListener('DOMContentLoaded', contentLoaded)

function contentLoaded() {
  //Add register event
  form.addEventListener('submit', register);
}

function register(evt) {
  let errors = {}
  if(!validator.isEmail(form.useremail.value)) errors.email = 'Email no valido'
  if(form.userpassword.value.length < 4) errors.password = 'Contraseña incorrecta'
  // let image = form.image.files[0]
  // if (image) {
  //   if(!allowedExtensions.test(image.name)) errors.image = 'Formato de archivo no válido'
    
  // }

  console.log("errors", errors);
  if (Object.keys(errors).length >= 1) {
    evt.preventDefault();
    emailError.innerHTML = (errors.email) ? `${errors.email}` : '';
    passwordError.innerHTML = (errors.password) ? `${errors.password}` : '';
    //fileError.innerHTML = (errors.image) ? `<li> ${errors.image} </li>` : '';
  } else {
    form.submit();
  }
  
}
