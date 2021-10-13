import _ from 'utils/lodash';
import { mainUrls } from 'utils/urlData';
import { con, map } from 'utils/commonFunc';
import EnterButton from 'components/common/button/button';
import View from 'page/View';
import './section.scss';

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
  }

  generateMarkup() {
    const data = this.data;
    const bgs = Array.from(new Array(4), (_, i) => `mainVisual_01${i + 1}`); // prettier-ignore
    return `
      <section id=${data.id} class="intro-section">
      ${con({
        value: data.id === 'section-01',
        markup: `
          <div id="section-01-bg-wrapper">
            ${map(bgs, (el) => `<div class="background-item ${el}"></div>`)}
          </div>
          <div id="animation-circle-wrapper">
            ${map([...new Array(3)], (_, i) => `<div class="circle-item circle-${i}"></div>`)}
          </div>
          <div id="scroll-element-wrapper">
            <div class="scroll-text">SCROLL</div>
            <div id="scroll-animation-wrapper">
              <div class="down-scroll"></div>
            </div>
          </div>
        `,
      })}
        ${con({
          value: data.id === 'section-03',
          markup: `
            <video class="video-background" autoplay preload="auto" muted loop>
              <source src="/img/earth.mp4">
            </video>
          `,
        })}
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
          ${con({
            value: this.data.index - 1 > -1,
            markup: new EnterButton({
              url: mainUrls[this.data.index - 1]?.url,
              text: 'ENTER',
              color: '#fff',
            }).getHtml(),
          })}
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
