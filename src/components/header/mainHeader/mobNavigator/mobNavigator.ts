import Slider from './slider/slider';
import './mobNavigator.scss';

class MobNavigator {
  mobileNavigator: HTMLElement;
  navigatorButton: HTMLElement;
  show: boolean;
  constructor() {
    this.show = false;
    this.mobileNavigator = document.createElement('div');
    this.mobileNavigator.id = 'mobile-navigator';

    this.navigatorButton = document.createElement('div');
    this.navigatorButton.id = 'mobile-navigator-button';
    this.navigatorButton.innerHTML = `
        <div></div>
          <span id="cross-first"></span>
          <span id="cross-second"></span>
        <div></div>
    `;

    const toggleHandler = () => {
      this.show = !this.show;
      this.mobileNavigator.classList.remove(!this.show ? 'show' : 'none');
      this.mobileNavigator.classList.add(this.show ? 'show' : 'none');
    };
    this.navigatorButton.addEventListener('click', toggleHandler);
    this.mobileNavigator.appendChild(this.navigatorButton);
    this.mobileNavigator.appendChild(new Slider().instance);
  }

  get instance() {
    return this.mobileNavigator;
  }
}

export default MobNavigator;
