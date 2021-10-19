import { Header, Footer, SubHeader } from 'page/common';
import MainVisual from './mainVisual/mainVisual';
import EnterButton from 'components/common/button/button';
import HistoryCard from './historyCard/HistoryCard';
import View from 'page/View';
import './history.scss';

export class History extends View {
  constructor() {
    super();
    // const subHeader = new SubHeader().instance;

    const visualContainer = document.createElement('div');
    visualContainer.id = 'history-visual-container';

    const mainVisual = new MainVisual().instance;
    // const historyCard = new HistoryCard().instance;
    // visualContainer.appendChild(mainVisual);
    // visualContainer.appendChild(historyCard);
    // this.wrapperElement.appendChild(subHeader);
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const footer = new Footer().getHtml();
    const subHeader = new SubHeader().getHtml();

    return `
      ${header}
        <div id="history-page">
          ${subHeader}
          <div id="history-visual-container">
            <div id="videoWrap">
              <video id="myVideo" muted autoplay playsinline loop>
                <source src="/video/historyBg.mp4" type="video/mp4"/>
              </video>
              <div id="history-title">
                <span class="subtitle">Introduce</span>
                <div class="hr">
                  <span class="hrLine">
                    <span class="innerCircle"></span>
                  </span>
                </div>
                <strong class="title">history</strong>
                <p class="desc">
                  <span class="orange">can explore this fascinating history</span>
                </p>
                ${new EnterButton({
                  text: 'EXPLORE',
                  color: '#fff',
                  className: 'history-main-visual-button',
                }).getHtml()}
              </div>
            </div>
          </div>

        </div>
      ${footer}
    `;
  }

  addEvents() {
    const button = document.getElementsByClassName('history-main-visual-button')[0];
    if (button) {
      button.addEventListener('click', () => {
        const container = document.getElementById('history-visual-container') as HTMLElement;
        container.style.transform = 'translateX(-50%)';
      });
    }
  }
}

export default History;
