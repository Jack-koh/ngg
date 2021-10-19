import { link, map } from 'utils/commonFunc';
import MobileHeader from './MobileHeader';
import HeaderInfo from './HeaderInfo';
import { mainUrls, subUrls } from 'utils/urlData';
import View from 'page/View';
import './Header.scss';

export class Header extends View {
  constructor(public position?: string) {
    super();
  }

  generateMarkup() {
    const headerInfo = new HeaderInfo();
    const mobileHeader = new MobileHeader();
    return `
      <header id="header-wrapper" style="position:${this.position || 'relative'}">
        ${link({ url: '/', child: '<h1 id="logo"></h1>' })}
        <nav id="navigator">
          <ul id="navigator-items">
            ${map(mainUrls, ({ url, title }) => {
              return `<li class="nav-item">${link({ url, child: title })}</li>`;
            })}
            <div id="navigation-mouse-pointer"></div>
          </ul>
        </nav>
        <div id="sub-navigator">
          <div id="sub-nav-column-list">
            <ul id="WHO WE ARE" class="nav-column">
              ${map(
                subUrls['WHO WE ARE'],
                ({ url, title }) => `${link({ url, child: `<li class="column-item">${title}</li>` })}`
              )}
            </ul>

            <ul id="EXPLORER" class="nav-column">
              ${map(
                subUrls['EXPLORER'],
                ({ url, title }) => `${link({ url, child: `<li class="column-item">${title}</li>` })}`
              )}
            </ul>

            <ul id="EXHIBITION" class="nav-column">
              ${map(
                subUrls['EXHIBITION'],
                ({ url, title }) => `${link({ url, child: `<li class="column-item">${title}</li>` })}`
              )}
            </ul>

            <ul id="PROJECT" class="nav-column">
              ${map(
                subUrls['PROJECT'],
                ({ url, title }) => `${link({ url, child: `<li class="column-item">${title}</li>` })}`
              )}
            </ul>
          </div>
        </div>
        ${headerInfo.getHtml()}
        ${mobileHeader.getHtml()}
      </header>
    `;
  }

  addEvents() {
    const header = document.getElementById('header-wrapper') as HTMLElement;
    const navigator = document.getElementById('navigator') as HTMLElement;
    const subNavigator = document.getElementById('sub-navigator') as HTMLElement;
    const pointer = document.getElementById('navigation-mouse-pointer') as HTMLInputElement;
    const ulElement = document.getElementById('navigator-items') as HTMLElement;
    const logo = document.getElementById('logo') as HTMLElement;

    header.onmouseover = (e) => {
      {
        const target = e.target as Node;
        if (navigator.contains(target) || subNavigator.contains(target)) {
          pointer.style.display = 'block';
          subNavigator.style.height = '260px';
        } else {
          pointer.style.display = 'none';
          subNavigator.style.height = '0';
        }
      }
    };

    header.onmouseleave = (e) => {
      const target = e.target as Node;
      if (navigator.contains(target) || subNavigator.contains(target)) {
        pointer.style.display = 'block';
        subNavigator.style.height = '260px';
      } else {
        pointer.style.display = 'none';
        subNavigator.style.height = '0';
      }
    };

    const navItem = navigator.getElementsByClassName('nav-item');
    [...navItem].forEach((el, i) => {
      (el as HTMLElement).onmouseover = () => {
        const defaultWidth = ulElement.clientWidth / 5;
        pointer.style.left = `${defaultWidth * i}px`;
      };
    });
  }
}
