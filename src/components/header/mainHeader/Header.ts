import { link } from 'utils/commonFunc';
import View from 'page/View';
import MobileHeader from './MobileHeader';
import HeaderInfo from './HeaderInfo';
import './Header.scss';

export default class Header extends View {
  constructor(public position?: string) {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const headerInfo = new HeaderInfo();
    const mobileHeader = new MobileHeader();
    this.markup = `
      <header id="header-wrapper" style="position:${this.position || 'relative'}">
        <h1 id="logo"></h1>
        <nav id="navigator">
          <ul id="navigator-items">
            <li class="nav-item">WHO WE ARE</li>
            <li class="nav-item">EXPLORER</li>
            <li class="nav-item">EXHIBITION</li>
            <li class="nav-item">PROJECT</li>
            <li class="nav-item">IMPACT</li>
            <div id="navigation-mouse-pointer"></div>
          </ul>
        </nav>
        <div id="sub-navigator">
          <div id="sub-nav-column-list">
            <ul id="WHO WE ARE" class="nav-column">
              <li class="column-item">ABOUT US</li>
              <li class="column-item">HISTORY</li>
              <li class="column-item">LEADER SHIP</li>
              <li class="column-item">NEWS ROOM</li>
            </ul>
            <ul id="EXPLORER" class="nav-column">
              <li class="column-item">EXPLORERS</li>
              <li class="column-item">FIELD MAP</li>
              <li class="column-item">EXPLORER BLOG</li>
            </ul>
            <ul id="EXHIBITION" class="nav-column">
              <li class="column-item">VISITOR PLAN</li>
              <li class="column-item">EXHIBITION</li>
              <li class="column-item">EVENT</li>
            </ul>
            <ul id="PROJECT" class="nav-column">
              <li class="column-item">BEYOND STONE</li>
              <li class="column-item">BIG CAT</li>
              <li class="column-item">LAST WILD</li>
              <li class="column-item">YEAR OF BIRD</li>
              <li class="column-item">PRISTINE SEAS</li>
            </ul>
          </div>
        </div>
        ${headerInfo.getHtml()}
        ${mobileHeader.getHtml()}
      </header>
    `;
  }
  addEvents() {
    const header = document.getElementById('header-wrapper');
    const navigator = document.getElementById('navigator');
    const subNavigator = document.getElementById('sub-navigator');
    const pointer = document.getElementById('navigation-mouse-pointer');
    const ulElement = document.getElementById('navigator-items');
    const logo = document.getElementById('logo');
    if (logo && header && navigator && subNavigator && pointer && ulElement) {
      header.addEventListener('mouseover', (e) => {
        const target = e.target as Node;
        if (navigator.contains(target) || subNavigator.contains(target)) {
          pointer.style.display = 'block';
          subNavigator.style.height = '260px';
        } else {
          pointer.style.display = 'none';
          subNavigator.style.height = '0';
        }
      });
      header.addEventListener('mouseleave', (e) => {
        const target = e.target as Node;
        if (navigator.contains(target) || subNavigator.contains(target)) {
          pointer.style.display = 'block';
          subNavigator.style.height = '260px';
        } else {
          pointer.style.display = 'none';
          subNavigator.style.height = '0';
        }
      });

      const navItem = navigator.getElementsByClassName('nav-item');
      [...navItem].forEach((el, i) => {
        el.addEventListener('mouseover', () => {
          const defaultWidth = ulElement.clientWidth / 5;
          pointer.style.left = `${defaultWidth * i}px`;
        });
      });

      link(logo, '/');
    }
  }
}
