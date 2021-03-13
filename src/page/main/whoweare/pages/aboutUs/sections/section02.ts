import './section02.scss';
class AboutUsSection02 {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'section2';
    this.wrapperElement.textContent = 'Working for a Planet in Balance';
  }
  get instance() {
    return this.wrapperElement;
  }
}

export default AboutUsSection02;
