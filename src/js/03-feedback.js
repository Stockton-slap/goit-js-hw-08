import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  let inputMsg = refs.input.value;
  let textareaMsg = refs.textarea.value;

  const obj = {
    email: inputMsg,
    message: textareaMsg,
  };

  const stringifyJSON = JSON.stringify(obj);
  console.log(stringifyJSON);
  localStorage.setItem(LOCALSTORAGE_KEY, stringifyJSON);
}

const inputData = localStorage.getItem(LOCALSTORAGE_KEY);

if (inputData) {
  const parseJSON = JSON.parse(inputData);

  refs.input.value = parseJSON.email;
  refs.textarea.value = parseJSON.message;
} else {
  refs.input.value = '';
  refs.textarea.value = '';
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: refs.input.value, message: refs.textarea.value });

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
