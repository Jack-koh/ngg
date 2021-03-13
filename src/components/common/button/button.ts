import { link } from 'utils/commonFunc';
import './button.scss';

class EnterButton {
  buttonElement: HTMLElement;
  constructor(props: { url: string; text: string }) {
    const { url, text } = props;
    this.buttonElement = document.createElement('div');
    this.buttonElement.classList.add('enter-button-wrapper');

    this.buttonElement.innerHTML = `
          ${text}
          <div class="section-button-sliding-bar"></div>
          <div class="section-button-arrow"></div>
      `;
    link(this.buttonElement, url);
  }

  get instance() {
    return this.buttonElement;
  }
}

export default EnterButton;
