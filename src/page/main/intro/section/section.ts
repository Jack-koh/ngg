import _ from 'utils/lodash';
import { mainUrls } from 'utils/urlData';
import EnterButton from 'components/common/button/button';
import './section.scss';
import './sectionRP.scss';

class Section {
  sectionElement: HTMLElement;
  titleElement: HTMLElement;
  constructor(
    public data: { id: string; index: number; subtitle: string; title: string; description: string }
  ) {
    const { id, subtitle, title, description } = this.data;
    this.sectionElement = document.createElement('section');
    this.sectionElement.id = id;
    this.sectionElement.classList.add('intro-section');

    this.titleElement = document.createElement('div');
    this.titleElement.classList.add('section-title-field', `field-${id}`);
    this.titleElement.innerHTML = `
        <div class="subtitle">${subtitle}</div>
        <div class="title">${title}</div>
        <div class="description">${description}</div>
      `;

    this.sectionElement.appendChild(this.titleElement);
    if (id === 'section-01') {
      utils.fadingBackground(this.sectionElement);
      utils.circleAnimation(this.sectionElement);
      utils.scrollAnimation(this.sectionElement);
    } else {
      const inspection = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        const { target } = entry;
        entry.target.classList.add('show');
        observer.unobserve(target);
      });

      inspection.observe(this.titleElement);
      const button = new EnterButton({ url: mainUrls[data.index - 1].url, text: 'ENTER' }).instance;
      this.titleElement.appendChild(button);
    }

    if (id === 'section-03') utils.videoBackground(this.sectionElement);
  }

  get instance() {
    return this.sectionElement;
  }
}

export default Section;

const utils = {
  scrollAnimation(target: HTMLElement) {
    const scrollElement = document.createElement('div');
    scrollElement.id = 'scroll-element-wrapper';
    scrollElement.innerHTML = `
        <div class="scroll-text">SCROLL</div>
        <div id="scroll-animation-wrapper">
            <div class="down-scroll"></div>
        </div>
    `;
    target.appendChild(scrollElement);
  },
  fadingBackground(target: HTMLElement) {
    const backgrounds = ['mainVisual_011', 'mainVisual_012', 'mainVisual_013', 'mainVisual_014'];
    const bgElementsWrapper = document.createElement('div');
    bgElementsWrapper.id = 'section-01-bg-wrapper';
    backgrounds.forEach((bg, index) => {
      const bgboard = document.createElement('div');
      bgboard.classList.add('background-item');
      bgboard.style.opacity = index === 0 ? '1' : '0';
      bgboard.style.background = `url(/img/images/${bg}.jpg) no-repeat center/cover`;
      bgElementsWrapper.appendChild(bgboard);
    });
    target.prepend(bgElementsWrapper);

    setInterval(() => {
      const bgItems = [...bgElementsWrapper.getElementsByClassName('background-item')];
      (bgItems[0] as HTMLElement).style.opacity = '0';
      (bgItems[1] as HTMLElement).style.opacity = '1';
      const append = _.debounce(() => {
        bgElementsWrapper.appendChild(bgItems[0]);
      }, 4000);
      append();
    }, 7000);
  },
  circleAnimation(target: HTMLElement) {
    const circleElementWrapper = document.createElement('div');
    circleElementWrapper.id = 'animation-circle-wrapper';
    [...new Array(3)].forEach((_, index: number) => {
      const circleItem = document.createElement('div');
      circleItem.classList.add('circle-item', `circle-${index}`);
      circleElementWrapper.appendChild(circleItem);
    });

    target.appendChild(circleElementWrapper);
  },
  videoBackground(target: HTMLElement) {
    const video = document.createElement('video');
    video.classList.add('video-background');
    video.autoplay = true;
    video.preload = 'auto';
    video.muted = true;
    video.loop = true;

    const source = document.createElement('source');
    source.src = '/img/earth.mp4';
    video.appendChild(source);
    target.appendChild(video);
  },
};
