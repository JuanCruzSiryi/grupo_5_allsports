// import validator from 'validator';

window.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('register-form')
  let firstNameError = this.document.querySelector('.firstNameError')
  let lastNameError = this.document.querySelector('.lastNameError')
  let emailError = this.document.querySelector('.emailError')
  let passwordError = this.document.querySelector('.passwordError')
  let termsError = this.document.querySelector('.termsError')

  console.log("Form: ", form);

  //Add register event
  form.addEventListener('submit', register);

  function register(evt) {
    // console.log("el elemento", evt.target);
    let errores = {}
    if(form.firstName.value.length < 2) errores.firstName = 'El Nombre debe tener más de 2 caracteres'
    if(form.lastName.value.length < 2) errores.lastName = 'El Apellio debe tener más de 2 caracteres'
    if(form.email.value.length < 2) errores.emai = 'El Email debe ser válido'
    if(form.password.value.length < 8) errores.password = 'La contraseña debe tener al menos 8 caracteres'
    if(!form.terms.checked) errores.terms = 'Debes aceptar los terminos'
    
    // console.log("is email?: ", validator.isEmail(form.email.value));


    console.log("errors", errores);
    if (Object.keys(errores).length >= 1) {
      evt.preventDefault();
      firstNameError.innerHTML = (errores.firstName) ? `<li> ${errores.firstName} </li>` : '';
      lastNameError.innerHTML = (errores.lastName) ? `<li> ${errores.lastName} </li>` : '';
      emailError.innerHTML = (errores.email) ? `<li> ${errores.email} </li>` : '';
      passwordError.innerHTML = (errores.password) ? `<li> ${errores.password} </li>` : '';
      termsError.innerHTML = (errores.terms) ? `<li> ${errores.terms} </li>` : '';
    } else {
      form.submit();
    }
    
  }
})

