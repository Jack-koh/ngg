import View from 'page/View';
import { mainUrls, subUrls } from 'utils/urlData';
import { link, map } from 'utils/commonFunc';
import './MobileHeader.scss';

export default class MobileHeader extends View {
  show: boolean;
  constructor() {
    super();
    this.show = false;
  }

  generateMarkup() {
    return `
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
                ${link({
                  url: '/whoweare',
                  child: 'WHO WE ARE',
                  className: 'main-nav-item',
                })}
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                ${map(subUrls['WHO WE ARE'], ({ url, title }) => {
                  return link({ url, child: title, className: 'sub-nav-item' });
                })}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                ${link({
                  url: '/explorer',
                  child: 'EXPLORER',
                  className: 'main-nav-item',
                })}
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                ${map(subUrls['EXPLORER'], ({ url, title }) => {
                  return link({ url, child: title, className: 'sub-nav-item' });
                })}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                ${link({
                  url: '/exhibition',
                  child: 'EXHIBITION',
                  className: 'main-nav-item',
                })}
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                ${map(subUrls['EXHIBITION'], ({ url, title }) => {
                  return link({ url, child: title, className: 'sub-nav-item' });
                })}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                ${link({
                  url: '/project',
                  child: 'PROJECT',
                  className: 'main-nav-item',
                })}
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                ${map(subUrls['PROJECT'], ({ url, title }) => {
                  return link({ url, child: title, className: 'sub-nav-item' });
                })}
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                ${link({
                  url: '/impact',
                  child: 'IMPACT',
                  className: 'main-nav-item',
                })}
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
