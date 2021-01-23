import VisualTitle from 'page/main/utils/visualTitle/visualTitle';
import LineMotion from './lineMotion/lineMotion';
import { link } from 'utils/commonFunc';
import { subUrls } from 'utils/urlData';
import './mainVisual.scss';

interface MainVisual {
  mainVisual: HTMLElement;
  circleNav: HTMLElement;
  circleNavDesc: HTMLElement | null;
}

class MainVisual implements MainVisual {
  constructor(
    public props: {
      key: string;
      id: string;
      titleData: { subTitle: string; title: string; description: string };
      data: { img: string; text: string }[];
      circleDesc?: string;
    }
  ) {
    const { key, id, titleData, data, circleDesc } = props;
    this.mainVisual = document.createElement('div');
    this.mainVisual.id = id;
    this.mainVisual.classList.add('page-main-visual');
    this.circleNav = document.createElement('div');
    this.circleNav.classList.add('sub-circle-nav');

    subUrls[key].forEach((nav, index) => {
      const subNavItem = document.createElement('div');
      link(subNavItem, { url: nav.url, title: nav.title });
      subNavItem.classList.add('sub-nav-circle-item');
      subNavItem.innerHTML = `
        <div class="circle-wrapper">
          <div class="sub-nav">
            <img src=${data[index].img} alt='about-icon' />
          </div>
        </div>
        <div class="nav-title">${data[index].text}</div>
      `;

      this.circleNav.appendChild(subNavItem);
    });

    let lineData = ['left-bottom', 'right-bottom'];
    if (key === 'WHO WE ARE') {
      lineData = ['left-top', 'right-top', ...lineData];
    } else {
      lineData = ['top', ...lineData];
    }

    this.circleNav.appendChild(new LineMotion(id, lineData).instance);

    this.mainVisual.appendChild(new VisualTitle(titleData).instance);
    this.mainVisual.appendChild(this.circleNav);

    if (circleDesc) {
      this.circleNavDesc = document.createElement('div');
      this.circleNavDesc.classList.add('circle-nav-description');
      this.circleNavDesc.textContent = circleDesc;
      this.circleNav.appendChild(this.circleNavDesc);
    }
  }

  get instance() {
    return this.mainVisual;
  }
}

export default MainVisual;
