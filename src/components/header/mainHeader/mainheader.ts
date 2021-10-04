import { link } from 'utils/commonFunc';
import MainNavigator from './mainNavigator/mainNavigator';
import SubNavigator from './subNavigator/subNavigator';
import HeaderInfo from './headerInfo/headerInfo';

import MobNavigator from './mobNavigator/mobNavigator';
import './mainHeader.scss';

class Header {
  headerElement: HTMLElement;
  subNavigator: HTMLDivElement;
  mainNavigator: HTMLElement;
  pointer: HTMLDivElement;
  constructor(public position?: string) {
    this.headerElement = document.createElement('header');
    this.headerElement.id = 'header-wrapper';
    this.headerElement.style.position = this.position || 'relative';

    this.subNavigator = new SubNavigator().instance;
    const navigator = new MainNavigator();

    this.mainNavigator = navigator.instance;
    this.pointer = navigator.pointerInstance;

    this.headerElement.addEventListener('mouseover', this.mouseOverHandler.bind(this));
    this.headerElement.addEventListener('mouseleave', this.mouseLeaveHandler.bind(this));

    this.headerElement.appendChild(new Logo().instance);
    this.headerElement.appendChild(this.mainNavigator);
    this.headerElement.appendChild(this.subNavigator);

    if (window.innerWidth > 1024) {
      this.headerElement.appendChild(new HeaderInfo().instance);
    } else {
      this.headerElement.appendChild(new MobNavigator().instance);
    }

    const resizeHandler = () => {
      const mobNavigator = document.getElementById('mobile-navigator')!;
      const headerInfo = document.getElementById('header-info')!;
      if (window.innerWidth > 1024) {
        if (this.headerElement.contains(mobNavigator)) this.headerElement.removeChild(mobNavigator);
        if (!this.headerElement.contains(headerInfo)) {
          this.headerElement.appendChild(new HeaderInfo().instance);
        }
      } else {
        if (this.headerElement.contains(headerInfo)) this.headerElement.removeChild(headerInfo);
        if (!this.headerElement.contains(mobNavigator)) {
          this.headerElement.appendChild(new MobNavigator().instance);
        }
      }
    };
    window.addEventListener('resize', resizeHandler);
  }

  private mouseOverHandler(e: MouseEvent) {
    const target = e.target as Node;
    if (this.mainNavigator.contains(target) || this.subNavigator.contains(target)) {
      this.pointer.style.display = 'block';
      this.subNavigator.style.height = '260px';
    } else {
      this.pointer.style.display = 'none';
      this.subNavigator.style.height = '0';
    }
  }

  private mouseLeaveHandler() {
    this.pointer.style.display = 'none';
    this.subNavigator.style.height = '0';
  }

  get instance() {
    return this.headerElement;
  }
}

export default Header;

class Logo {
  logoElement: HTMLElement;
  constructor() {
    this.logoElement = document.createElement('h1');
    this.logoElement.id = 'logo';
    link(this.logoElement, '/');
  }

  get instance() {
    return this.logoElement;
  }
}
