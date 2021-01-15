import { link } from 'utils/commonFunc';
import { mainUrls } from 'utils/urlData';
import { subUrls } from 'utils/urlData';
import './slider.scss';

class Slider {
  silder: HTMLElement;
  navgators: HTMLElement;
  mainLinks: HTMLElement[];
  state: { toggle: string };
  constructor() {
    this.state = {
      toggle: '',
    };

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

      const mainNavRow = document.createElement('div');
      mainNavRow.classList.add('main-nav-row');
      mainNavRow.appendChild(mainNavItem);
      mainNavRow.appendChild(toggleBtn);
      item.appendChild(mainNavRow);

      const subNavField = document.createElement('div');
      const subUrl = subUrls[nav.title];
      toggleBtn.addEventListener('click', this.toggleHandler.bind(toggleBtn, nav, item));

      if (subUrl) {
        subUrl.forEach((subNav) => {
          subNavField.classList.add('sub-nav-field');
          const subNavItem = document.createElement('div');
          subNavItem.classList.add('sub-nav-item');
          subNavItem.textContent = subNav.title;
          link(subNavItem, { url: subNav.url, title: subNav.title });
          subNavField.appendChild(subNavItem);
        });
      }

      item.appendChild(subNavField);

      return item;
    });

    this.mainLinks.forEach((item) => {
      this.navgators.appendChild(item);
    });

    this.silder.appendChild(this.navgators);
  }

  toggleHandler = (nav: { title: string; url: string }, navItem: HTMLElement) => {
    const navItems = this.navgators.getElementsByClassName('show');
    [...navItems].forEach((item) => item.classList.remove('show'));
    if (this.state.toggle === nav.title) {
      this.state.toggle = '';
      navItem.classList.remove('show');
    } else {
      this.state.toggle = nav.title;
      navItem.classList.add('show');
    }
  };

  get instance() {
    return this.silder;
  }
}

export default Slider;
