import VisualTitle from 'utils/visualTitle/visualTitle';
import LineMotion from './lineMotion/lineMotion';
import { link } from 'utils/commonFunc';
import { subUrls } from 'utils/urlData';
import './mainVisual.scss';

class MainVisual {
  mainVisual: HTMLElement;
  circleNav: HTMLElement;

  constructor() {
    this.mainVisual = document.createElement('div');
    this.mainVisual.id = 'who-we-are-main-visual';
    this.circleNav = document.createElement('div');
    this.circleNav.classList.add('sub-circle-nav');

    const navData = [
      { img: '/img/aboutIcon.png', text: 'About us' },
      { img: '/img/historyIcon.png', text: 'History' },
      { img: '/img/leadershipIcon.png', text: 'Leadership' },
      { img: '/img/newsroomIcon.png', text: 'News room' },
    ];

    subUrls['WHO WE ARE'].forEach((nav, index) => {
      const subNavItem = document.createElement('div');
      link(subNavItem, { url: nav.url, title: nav.title });
      subNavItem.classList.add('sub-nav-circle-item');
      subNavItem.innerHTML = `
        <div class="circle-wrapper">
          <div class="sub-nav">
            <img src=${navData[index].img} alt='about-icon' />
          </div>
        </div>
        <div class="nav-title">${navData[index].text}</div>
      `;

      this.circleNav.appendChild(subNavItem);
    });
    this.circleNav.appendChild(new LineMotion().instance);

    this.mainVisual.appendChild(
      new VisualTitle({
        subTitle: 'Working for a Planet in Balance',
        title: 'WHO WE ARE',
        description:
          'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration',
      }).instance
    );
    this.mainVisual.appendChild(this.circleNav);
  }

  get instance() {
    return this.mainVisual;
  }
}

export default MainVisual;
