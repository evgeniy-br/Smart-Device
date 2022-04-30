// Local Storage

const inputFields = document.querySelectorAll('input:not(input[type="checkbox"])');
const textareas = document.querySelectorAll('textarea');

inputFields.forEach((inputField) => {
  const key = inputField.id;
  inputField.value = localStorage.getItem(key);
  inputField.addEventListener('input', () => {
    localStorage.setItem(key, inputField.value);
  });
});

textareas.forEach((textarea) => {
  const key = textarea.id;
  textarea.value = localStorage.getItem(key);
  textarea.addEventListener('input', () => {
    localStorage.setItem(key, textarea.value);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), (input) => {
    let keyCode;
    function Mask(event) {
      let pos = this.selectionStart;
      if (pos < 3) {
        event.preventDefault();
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }
    }
    input.addEventListener('input', Mask, false);
    input.addEventListener('focus', Mask, false);
    input.addEventListener('blur', Mask, false);
    input.addEventListener('keydown', Mask, false);
  });
});
