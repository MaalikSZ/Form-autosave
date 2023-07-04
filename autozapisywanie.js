const form = document.querySelector('form');

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');

const saveFormData = () => {
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
};

const loadFormData = () => {
  const savedData = localStorage.getItem('formData');

  if (savedData) {
    const formData = JSON.parse(savedData);
    inputName.value = formData.name;
    inputEmail.value = formData.email;
    inputPhone.value = formData.phone;
  }
};

inputName.addEventListener('input', saveFormData);
inputEmail.addEventListener('input', saveFormData);
inputPhone.addEventListener('input', saveFormData);

document.addEventListener('DOMContentLoaded', loadFormData);
