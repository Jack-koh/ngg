import InfoSlider from './infoSlider/InfoSlider';

import './headerInfo.scss';

class HeaderInfo {
  headerInfoElement: HTMLElement;
  infoDescription: HTMLElement;
  infoButton: HTMLElement;
  show: boolean;
  constructor() {
    this.show = false;
    this.headerInfoElement = document.createElement('div');
    this.headerInfoElement.id = 'header-info';

    this.infoDescription = document.createElement('div');
    this.infoDescription.id = 'description';
    this.infoDescription.innerHTML = `
        <div id="finance">financial summery</div>
        <div id="cost">73,696</div>
    `;

    this.infoButton = document.createElement('div');
    this.infoButton.id = 'info-button';
    this.infoButton.innerHTML = `<img src='/img/ico_plus.png' alt='info-icon'/>`;
    const slider = new InfoSlider().instance;
    const toggleHandler = () => {
      this.show = !this.show;
      slider.classList.remove(!this.show ? 'show' : 'none');
      slider.classList.add(this.show ? 'show' : 'none');
    };
    this.infoButton.addEventListener('click', toggleHandler);

    this.headerInfoElement.appendChild(this.infoDescription);
    this.headerInfoElement.appendChild(this.infoButton);
    this.headerInfoElement.appendChild(slider);

    const resizeHandler = () => {
      if (window.innerWidth <= 1024) {
        slider.classList.remove('show');
        this.show = false;
      }
    };
    window.addEventListener('resize', resizeHandler);
  }

  get instance() {
    return this.headerInfoElement;
  }
}

export default HeaderInfo;
