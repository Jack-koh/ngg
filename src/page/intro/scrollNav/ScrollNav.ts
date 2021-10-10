import View from 'page/View';
import './ScrollNav.scss';

export default class ScrollNav extends View {
  constructor() {
    super();
    this.generateMarkup();
  }
  generateMarkup() {
    this.markup = `
      <div id="scroll-button-wrapper">
        ${[...new Array(5)]
          .map((_, i) => `<div class="scroll-button scrollbtn0${i + 1}"></div>`)
          .join('')}
      </div>
    `;
  }

  addEvents() {
    const sections = document.getElementsByClassName('intro-section');
    const buttons = document.getElementsByClassName('scroll-button');

    [...buttons].forEach((el, i) => {
      el.addEventListener('click', () => {
        const section = sections[i] as HTMLElement;
        window.scrollTo({ left: 0, top: section.offsetTop, behavior: 'smooth' });
      });
    });
  }
}
