import { link } from 'utils/commonFunc';
import { mainUrls } from 'utils/urlData';
// import { subUrls } from 'utils/urlData';
import './slider.scss';

class Slider {
  silder: HTMLElement;
  navgators: HTMLElement;
  mainLinks: HTMLElement[];
  constructor() {
    this.silder = document.createElement('div');
    this.silder.id = 'mob-nav-slider';

    this.navgators = document.createElement('div');
    this.navgators.id = 'mob-navigators';

    this.mainLinks = mainUrls.map((nav) => {
      const item = document.createElement('div');
      item.classList.add('nav-item');
      const mainNavItem = document.createElement('div');
      mainNavItem.classList.add('main-nav-item');
      mainNavItem.textContent = nav.title;
      link(mainNavItem, { url: nav.url, title: nav.title });

      const toggleBtn = document.createElement('div');
      toggleBtn.classList.add('toggle-btn');

      item.appendChild(mainNavItem);
      item.appendChild(toggleBtn);

      return item;
    });

    this.mainLinks.forEach((item) => {
      this.navgators.appendChild(item);
    });

    this.silder.appendChild(this.navgators);
  }

  get instance() {
    return this.silder;
  }
}

export default Slider;
