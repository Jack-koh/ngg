import _ from 'utils/lodash';
import { mainUrls } from 'utils/urlData';
import EnterButton from 'components/common/button/button';
import View from 'page/View';
import './section.scss';
import './sectionRP.scss';

type Data = {
  id: string;
  index: number;
  subtitle: string;
  title: string;
  description: string;
};

export default class Section extends View {
  constructor(public data: Data) {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const data = this.data;
    const backgrounds = ['mainVisual_011', 'mainVisual_012', 'mainVisual_013', 'mainVisual_014'];
    this.markup = `
      <section id=${data.id} class="intro-section">
        ${
          data.id === 'section-01'
            ? `
          <div id="section-01-bg-wrapper">
            ${backgrounds.map((el) => `<div class="background-item ${el}"></div>`).join('')}
          </div>
          <div id="animation-circle-wrapper">
            ${[...new Array(3)]
              .map((_, i) => `<div class="circle-item circle-${i}"></div>`)
              .join('')}
          </div>
          <div id="scroll-element-wrapper">
            <div class="scroll-text">SCROLL</div>
            <div id="scroll-animation-wrapper">
              <div class="down-scroll"></div>
            </div>
          </div>
          `
            : ''
        }
        ${
          data.id === 'section-03'
            ? `
            <video class="video-background" autoplay preload="auto" muted loop>
              <source src="/img/earth.mp4">
            </video>
          `
            : ''
        }
        <div id="field-${data.id}" class="section-title-field">
          <div class="subtitle">
            ${data.subtitle}
          </div>
          <div class="title">
            ${data.title}
          </div>
          <div class="description">
            ${data.description}
          </div>
          ${
            this.data.index - 1 > -1
              ? new EnterButton({ url: mainUrls[this.data.index - 1].url, text: 'ENTER' }).getHtml()
              : ''
          }
        </div>
      </section>
    `;
  }

  addEvents = () => {
    const fadingBackground = () => {
      setInterval(() => {
        const bgWrapper = document.getElementById('section-01-bg-wrapper');
        if (bgWrapper) {
          const bgItems = [...bgWrapper.getElementsByClassName('background-item')];
          (bgItems[0] as HTMLElement).style.opacity = '0';
          (bgItems[1] as HTMLElement).style.opacity = '1';
          const append = _.debounce(() => {
            bgWrapper.appendChild(bgItems[0]);
          }, 4000);
          append();
        }
      }, 7000);
    };

    const observer = () => {
      const inspection = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        const { target } = entry;
        entry.target.classList.add('show');
        observer.unobserve(target);
      });
      const title = document.getElementById(`field-${this.data.id}`);
      if (title) inspection.observe(title);
    };

    fadingBackground();
    observer();
  };
}
