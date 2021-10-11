import { link } from 'utils/commonFunc';
import View from 'page/View';
import MobileHeader from './MobileHeader';
import HeaderInfo from './HeaderInfo';
import { mainUrls, subUrls } from 'utils/urlData';
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
            ${mainUrls
              .map((urls) => `<li class="nav-item"><a href="${urls.url}">${urls.title}</a></li>`)
              .join('')}
            <div id="navigation-mouse-pointer"></div>
          </ul>
        </nav>
        <div id="sub-navigator">
          <div id="sub-nav-column-list">
            <ul id="WHO WE ARE" class="nav-column">
              ${subUrls['WHO WE ARE']
                .map((sub) => `<li class="column-item"><a href="${sub.url}">${sub.title}</a></li>`)
                .join('')}
            </ul>

            <ul id="EXPLORER" class="nav-column">
              ${subUrls['EXPLORER']
                .map((sub) => `<li class="column-item"><a href="${sub.url}">${sub.title}</a></li>`)
                .join('')}
            </ul>

            <ul id="EXHIBITION" class="nav-column">
              ${subUrls['EXHIBITION']
                .map((sub) => `<li class="column-item"><a href="${sub.url}">${sub.title}</a></li>`)
                .join('')}
            </ul>

            <ul id="PROJECT" class="nav-column">
              ${subUrls['PROJECT']
                .map((sub) => `<li class="column-item"><a href="${sub.url}">${sub.title}</a></li>`)
                .join('')}
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
