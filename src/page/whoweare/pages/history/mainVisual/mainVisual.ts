import EnterButton from 'components/common/button/button';
import './mainVisual.scss';

class MainVisual {
  videoElement: HTMLElement;
  constructor() {
    this.videoElement = document.createElement('div');
    this.videoElement.id = 'videoWrap';
    const titleEl = document.createElement('div');
    titleEl.id = 'history-title';
    titleEl.innerHTML = `
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
    `;
    this.videoElement.innerHTML = `
      <video id="myVideo" muted autoplay playsinline loop>
        <source src="/video/historyBg.mp4" type="video/mp4"/>
      </video>
    `;
    const button = new EnterButton({ text: 'EXPLORE' }).instance;
    button.onclick = () => {
      const container = document.getElementById('history-visual-container') as HTMLElement;
      container.style.transform = 'translateX(-50%)';
    };
    titleEl.appendChild(button);
    this.videoElement.appendChild(titleEl);
  }

  get instance() {
    return this.videoElement;
  }
}

export default MainVisual;
