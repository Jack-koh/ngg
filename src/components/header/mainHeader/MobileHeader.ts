import View from 'page/View';
import { mainUrls, subUrls } from 'utils/urlData';
import './MobileHeader.scss';

export default class MobileHeader extends View {
  show: boolean;
  constructor() {
    super();
    this.show = false;
    this.generateMarkup();
  }

  generateMarkup() {
    this.markup = `
      <div id="mobile-navigator">
        <div id="mobile-navigator-button">
          <div></div>
          <span id="cross-first"></span>
          <span id="cross-second"></span>
          <div></div>
        </div>
        <div id="mob-nav-slider">
          <div id="mob-navigators">
            <div class="nav-item">
              <div class="main-nav-row">
                <a href="/whoweare" class="main-nav-item">WHO WE ARE</a>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
              ${subUrls['WHO WE ARE']
                .map(({ url, title }) => {
                  return `<div class="sub-nav-item"><a href="${url}">${title}</a></div>`;
                })
                .join('')}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <a href="/explorer" class="main-nav-item">EXPLORER</a>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
              ${subUrls['EXPLORER']
                .map(({ url, title }) => {
                  return `<div class="sub-nav-item"><a href="${url}">${title}</a></div>`;
                })
                .join('')}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <a href="/exhibition" class="main-nav-item">EXHIBITION</a>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
              ${subUrls['EXHIBITION']
                .map(({ url, title }) => {
                  return `<div class="sub-nav-item"><a href="${url}">${title}</a></div>`;
                })
                .join('')}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <a href="/project" class="main-nav-item">PROJECT</a>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
              ${subUrls['PROJECT']
                .map(({ url, title }) => {
                  return `<div class="sub-nav-item"><a href="${url}">${title}</a></div>`;
                })
                .join('')}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <a href="/impact" class="main-nav-item">IMPACT</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }
  addEvents = () => {
    const button = document.getElementById('mobile-navigator-button');
    const navigator = document.getElementById('mobile-navigator');
    if (button && navigator) {
      button.addEventListener('click', () => {
        this.show = !this.show;
        navigator.classList.remove(!this.show ? 'show' : 'none');
        navigator.classList.add(this.show ? 'show' : 'none');
      });

      const navItems = navigator.getElementsByClassName('nav-item');
      if (navItems) {
        [...navItems].forEach((el) => {
          const toggle = el.getElementsByClassName('toggle-btn')[0];
          if (toggle) {
            toggle.addEventListener('click', function () {
              const wrapper = toggle.closest('.nav-item');
              if (wrapper?.classList.contains('show')) {
                wrapper.classList.remove('show');
              } else {
                [...navItems].forEach((item) => {
                  item.classList.remove('show');
                  wrapper?.classList.add('show');
                });
              }
            });
          }
        });
      }
    }
  };
}
