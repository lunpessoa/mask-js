export default class ValidateCpf {
  constructor(element) {
    this.element = element instanceof HTMLInputElement ? element : document.querySelector(element);
  }

  init() {
    this.addEvent();
    this.addErrorMessage();
    return this;
  }

  clear(cpf) {
    return cpf.replace(/\D/g, '');
  }

  build(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  format(cpf) {
    const cleaned = this.clear(cpf);
    return this.build(cleaned);
  }

  onChange(element) {
    if (this.validate(element.value)) {
      element.value = this.format(element.value);
      element.classList.add('valid');
      element.classList.remove('invalid');
      element.nextElementSibling.classList.remove('show');
      return;
    }
    element.classList.add('invalid');
    element.classList.remove('valid');
    element.nextElementSibling.classList.add('show');
  }

  addEvent(event = 'change') {
    this.element.addEventListener(event, () => {
      this.onChange(this.element);
    });
  }

  validate(cpf) {
    const match = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return match && match[0] === cpf;
  }

  addErrorMessage() {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-text');
    errorElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling);
  }
}
