import { link } from 'utils/commonFunc';
import { mainUrls } from 'utils/urlData';
import './mainNavigator.scss';

class MainNavigator {
  navigatorElement: HTMLElement;
  ulElement: HTMLElement;
  listItems: HTMLElement[];
  mousePoniner: HTMLDivElement;

  constructor() {
    this.navigatorElement = document.createElement('nav');
    this.navigatorElement.id = 'navigator';

    this.ulElement = document.createElement('ul');
    this.ulElement.id = 'navigator-items';

    this.mousePoniner = document.createElement('div');
    this.mousePoniner.id = 'navigation-mouse-pointer';

    this.listItems = mainUrls.map((nav, index) => {
      const item = document.createElement('li');
      item.classList.add('nav-item');
      item.textContent = nav.title;
      item.addEventListener('mouseover', () => {
        const defaultWidth = this.ulElement.clientWidth / 5;
        this.mousePoniner.style.left = `${defaultWidth * index}px`;
      });
      link(item, { url: nav.url, title: nav.title });
      return item;
    });
  }

  get pointerInstance(): HTMLDivElement {
    return this.mousePoniner;
  }

  get instance(): HTMLElement {
    this.listItems.forEach((item) => this.ulElement.appendChild(item));
    this.ulElement.appendChild(this.mousePoniner);
    this.navigatorElement.appendChild(this.ulElement);
    return this.navigatorElement;
  }
}

export default MainNavigator;
