import View from 'page/View';
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
                <div class="main-nav-item">WHO WE ARE</div>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                <div class="sub-nav-item">ABOUT US</div>
                <div class="sub-nav-item">HISTORY</div>
                <div class="sub-nav-item">LEADER SHIP</div>
                <div class="sub-nav-item">NEWS ROOM</div>
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <div class="main-nav-item">EXPLORER</div>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                <div class="sub-nav-item">EXPLORERS</div>
                <div class="sub-nav-item">FIELD MAP</div>
                <div class="sub-nav-item">EXPLORER BLOG</div>
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <div class="main-nav-item">EXHIBITION</div>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                <div class="sub-nav-item">VISITOR PLAN</div>
                <div class="sub-nav-item">EXHIBITION</div>
                <div class="sub-nav-item">EVENT</div>
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <div class="main-nav-item">PROJECT</div>
                <div class="toggle-btn"></div>
              </div>
              <div class="sub-nav-field">
                <div class="sub-nav-item">BEYOND STONE</div>
                <div class="sub-nav-item">BIG CAT</div>
                <div class="sub-nav-item">LAST WILD</div>
                <div class="sub-nav-item">YEAR OF BIRD</div>
                <div class="sub-nav-item">PRISTINE SEAS</div>
              </div>
            </div>

            <div class="nav-item">
              <div class="main-nav-row">
                <div class="main-nav-item">IMPACT</div>
                <div class="toggle-btn"></div>
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
    }
  };
}
