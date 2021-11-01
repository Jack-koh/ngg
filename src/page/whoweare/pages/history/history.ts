import { Header, Footer, SubHeader } from 'page/common';
import EnterButton from 'components/common/button/button';
import HistoryCard from './historyCard/HistoryCard';
import View from 'page/View';
import './History.scss';

export class History extends View {
  constructor() {
    super();
    const visualContainer = document.createElement('div');
    visualContainer.id = 'history-visual-container';
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const footer = new Footer().getHtml();
    const subHeader = new SubHeader().getHtml();
    const historyCards = new HistoryCard().getHtml();
    const enterButton = new EnterButton({
      text: 'EXPLORE',
      color: '#fff',
      className: 'history-main-visual-button',
    }).getHtml();

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
                ${enterButton}
              </div>
            </div>
            ${historyCards}
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {
    const button = document.getElementsByClassName('history-main-visual-button')[0] as HTMLElement;
    button.onclick = () => {
      const container = document.getElementById('history-visual-container') as HTMLElement;
      container.style.transform = 'translateX(-50%)';
    };
  }
}
