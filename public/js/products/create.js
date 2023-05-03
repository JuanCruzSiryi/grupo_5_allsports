const form = document.getElementById("formCreateProduct");
let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
let errorName = document.querySelector(".nameProductError");
let errorDesc = document.querySelector(".descProductError");
let errorDisc = document.querySelector(".discountError");
let errorPrice = document.querySelector(".priceError");
let errorImage = document.querySelector(".imageError");

document.addEventListener("DOMContentLoaded", formulary);

function formulary() {
  form.nameProduct.addEventListener("blur", validationName);
  form.nameProduct.addEventListener("change", validationName);
  form.descProduct.addEventListener("blur", validationDesc);
  form.descProduct.addEventListener("change", validationDesc);
  form.discount.addEventListener("blur", validationDisc);
  form.discount.addEventListener("change", validationDisc);
  form.priceProduct.addEventListener("blur", validationPrice);
  form.priceProduct.addEventListener("change", validationPrice);
  form.image.addEventListener("change", validationImage);
  
  form.addEventListener("submit", submitButton);
}

function validationName(e) {
  if (form.nameProduct.value.length < 5 || form.nameProduct.value.length == 0) {
    errorName.innerHTML = "El nombre debe contener al menos 5 caracteres";
  } else {
    errorName.innerHTML = "";
  }
}

function validationDesc(e) {
  if (form.descProduct.value.length < 20) {
    errorDesc.innerHTML = "La descripción debe contener al menos 20 caracteres";
  } else {
    errorDesc.innerHTML = "";
  }
}

function validationDisc(e) {
  if (form.discount.value > 99) {
    errorDisc.innerHTML = "El descuento no puede ser mayor a 99%";
  } else {
    errorDisc.innerHTML = "";
  }
}

function validationPrice(e) {
  if (form.priceProduct.value < 1 || form.priceProduct.value == "") {
    errorPrice.innerHTML = "El precio no puede ser $0";
  } else {
    errorPrice.innerHTML = "";
  }
}

function validationImage(e) {
  let filePath = this.value;
  // let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
  if (filePath && !allowedExtensions.exec(filePath)) {
    errorImage.innerHTML = "El archivo solo puede ser .JPG, .JPEG, .PNG o .GIF";

    //fileInput.value = '';
    return false;
  } else {
    errorImage.innerHTML = "";
  }
}

// function validationButton(e) {
//   e.preventDefault();
//   validationName(e);
//   validationDesc(e);
//   validationPrice(e);
//   validationDisc(e);
//   validationName(e);
//   validationImage(e);
// }

function submitButton(e) {
  let errors = {}
  if(form.nameProduct.value.length < 5) errors.name = 'El nombre debe contener al menos 5 caracteres'
  if(form.descProduct.value.length < 20) errors.description = 'La descripción debe contener al menos 20 caracteres'
  if(form.priceProduct.value < 1) errors.price = 'El precio debe ser mayor que cero'
  if(form.discount.value.length < 1 || form.discount.value < 0 || form.discount.value > 99) errors.discount = 'El descuento debe ser un valor entre 0 y 99'
  
  let image = form.image.files[0]
  if (image) {
    if(!allowedExtensions.test(image.name)) errors.image = 'Formato de archivo no válido'
    
  }

  console.log("errors", errors);
  if (Object.keys(errors).length >= 1) {
    e.preventDefault();
    errorName.innerHTML = (errors.name) ? `<li> ${errors.name} </li>` : '';
    errorDesc.innerHTML = (errors.description) ? `<li> ${errors.description} </li>` : '';
    errorDisc.innerHTML = (errors.discount) ? `<li> ${errors.discount} </li>` : '';
    errorPrice.innerHTML = (errors.price) ? `<li> ${errors.price} </li>` : '';
    errorImage.innerHTML = (errors.image) ? `<li> ${errors.image} </li>` : '';
  } else {
    form.submit();
  }
}
