// import validator from 'validator';

window.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('register-form')
  let firstNameError = this.document.querySelector('.firstNameError')
  let lastNameError = this.document.querySelector('.lastNameError')
  let emailError = this.document.querySelector('.emailError')

  console.log("Form: ", form);

  //Add register event
  form.addEventListener('submit', register);

  function register(evt) {
    console.log("Botooooon ## 2");
    // console.log("el elemento", evt.target);
    let errores = {}
    if(form.firstName.value.length < 2) errores.firstName = 'El Nombre debe tener más de 2 caracteres'
    if(form.lastName.value.length < 2) errores.lastName = 'El Apellio debe tener más de 2 caracteres'
    if(form.email.value.length < 2) errores.email = 'El Email debe ser válido'
    
    // console.log("is email?: ", validator.isEmail(form.email.value));


    console.log("errors", errores);
    if (Object.keys(errores).length >= 1) {
      evt.preventDefault();
      firstNameError.innerHTML = (errores.firstName) ? `<li> ${errores.firstName} </li>` : '';
      lastNameError.innerHTML = (errores.lastName) ? `<li> ${errores.lastName} </li>` : '';
      emailError.innerHTML = (errores.email) ? `<li> ${errores.email} </li>` : '';
    } else {
      form.submit();
    }
    
  }
})

