import { link } from 'utils/commonFunc';
import './button.scss';

class EnterButton {
  buttonElement: HTMLElement;
  constructor(linkArgs: { url: string; title: string }) {
    this.buttonElement = document.createElement('div');
    this.buttonElement.classList.add('section-button-wrapper');

    this.buttonElement.innerHTML = `
          ENTER
          <div class="section-button-sliding-bar"></div>
          <div class="section-button-arrow"></div>
      `;
    link(this.buttonElement, linkArgs);
  }

  get instance() {
    return this.buttonElement;
  }
}

export default EnterButton;
