import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const dataFromLocalStorage = JSON.parse(localStorage.getItem(KEY));
form.elements.email.value = dataFromLocalStorage?.email || '';
form.elements.message.value = dataFromLocalStorage?.message || '';

const formData = {};

function onFormSubmit(e) {
  e.preventDefault();

  const dataLocal = localStorage.getItem(KEY);

  const autDataLocalStorage = JSON.parse(dataLocal);

  localStorage.removeItem(KEY);
  e.currentTarget.reset();
  console.log(autDataLocalStorage);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  const dataFromLocalStorage = JSON.parse(localStorage.getItem(KEY));
  localStorage.setItem(
    KEY,
    JSON.stringify({ ...dataFromLocalStorage, [e.target.name]: e.target.value })
  );
}