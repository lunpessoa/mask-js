export default class InputMask {
  constructor(element) {
    this.element = element instanceof HTMLInputElement ? element : document.querySelector(element);
    this.pattern = this.element.dataset.pattern;
    return this;
  }

  init() {
    this.addEvent();
    return this;
  }

  clear(text) {
    return text.replace(/\D/g, '');
  }

  build(text) {
    let word = '';
    let i = 0;
    let j = 0;
    while (i < this.pattern.length && j < text.length) {
      if (/[Xx]/g.test(this.pattern[i])) {
        word += text[j];
        j++;
        i++;
      } else {
        word += this.pattern[i];
        i++;
      }
    }
    return word;
  }

  format(text) {
    const cleaned = this.clear(text);
    return this.build(cleaned);
  }

  onChange(element) {
    element.value = this.format(element.value);
  }

  addEvent(event = 'input') {
    this.element.addEventListener(event, () => {
      this.onChange(this.element);
    });
  }
}
