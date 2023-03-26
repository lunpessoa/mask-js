import ValidateCpf from './modules/cpf-validator.js';
import InputMask from './modules/mask.js';

const validateCpf = new ValidateCpf('#cpf');
validateCpf.init();

const maskInputs = document.querySelectorAll('[data-pattern]');

maskInputs.forEach((input) => {
  const mask = new InputMask(input);
  mask.init();
});
