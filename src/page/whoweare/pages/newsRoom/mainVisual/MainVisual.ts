import View from 'page/View';
import { map, link } from 'utils/commonFunc';
import _ from 'utils/lodash';
import './MainVisual.scss';

let timer: ReturnType<typeof setInterval> | null = null;
class MainVisual extends View {
  frame: number;
  data: { img: string; title: string; desc: string }[];

  constructor() {
    super();
    this.frame = 0;
    if (timer) clearInterval(timer);
    this.data = [
      {
        img: '/img/images/newsMain_01.jpg',
        title: 'NATIONAL GEOGRAPHIC',
        desc: `National Geographic Celebrates World Environment Day and World Oceans Day with Full Week of Activities
        Highlighting the Need to Reduce Plastic Pollution and Improve Ocean Health`,
      },
      {
        img: '/img/images/newsMain_02.jpg',
        title: 'COMBAT ILLEGAL FISHING',
        desc: `To help celebrate World Oceans Day on June 8th, the National Geographic Society announced the winners of the
        Marine Protection Prize.`,
      },
      {
        img: '/img/images/newsMain_03.jpg',
        title: 'NEW STUDY REVEALS',
        desc: `As much as 54 percent of the high seas fishing industry would be unprofitable at its current scale without
        large government subsidies, according to a new study by researchers from the National Geographic Society`,
      },
      {
        img: '/img/images/newsMain_04.jpg',
        title: 'COLLEGE SCHOLARSHIP',
        desc: `Venkat Ranjan of San Ramon, California, a 13-year-old 8th-grader at Windemere Ranch Middle School, took top
        honors at the 30th annual National Geographic Bee held today at National Geographic headquarters in
        Washington, D.C. In addition to earning th...`,
      },
    ];
  }

  generateMarkup = () => {
    return `
      <div id="nsroom-mainVisual">
        <div id="visual">

          <ul id="visualIn">
            ${map(this.data, (item, i) => {
              return `
                <li class="visual" style="opacity: ${i ? '0' : '1'}">
                  <img src=${item.img} alt=${item.title} />
                </li>
              `;
            })}
          </ul>

          <img class="visualHeight" src="../../img/images/newsMain_01.jpg" alt="newsMain_01" />
          <p id="prev">
            <img src="/img/prev.png" alt="prevBtn" />
          </p>
          <p id="next">
            <img src="/img/next.png" alt="nextBtn" />
          </p>
        </div>

        <div id="newsTitle">
          <ul id="titleFade">
            ${map(this.data, (item, i) => {
              return `
                <li class="nsroom-main-visual-titles" style="opacity: ${i ? '0' : '1'}">
                  <div class="title">${item.title}</div>
                  <div class="desc">
                    <p class="bar"></p>
                    <p class="text">${item.desc}</p>
                  </div>
                  <div class="enterBtn">
                    ${link({
                      url: '/whoweare',
                      child: `
                        <div>
                          <span class="enter">read more</span>
                          <span class="slidingBar"></span>
                          <span class="arrow"></span>
                        </div>
                      `,
                    })}
                  </div>
                </li>
              `;
            })}
          </ul>
        </div>
      </div>
    `;
  };

  addEvents = () => {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const visuals = [...document.getElementsByClassName('visual')] as HTMLElement[];
    const titles = [...document.getElementsByClassName('nsroom-main-visual-titles')] as HTMLElement[];
    if (next && prev) {
      prev.onclick = () => {
        this.frame = this.frame === 0 ? visuals.length - 1 : this.frame - 1;
        visuals.forEach((el, i) => {
          el.style.opacity = this.frame === i ? '1' : '0';
        });

        titles.forEach((el, i) => {
          el.style.opacity = this.frame === i ? '1' : '0';
        });
      };

      next.onclick = () => {
        this.frame = this.frame === visuals.length - 1 ? 0 : this.frame + 1;
        visuals.forEach((el, i) => {
          el.style.opacity = this.frame === i ? '1' : '0';
        });

        titles.forEach((el, i) => {
          el.style.opacity = this.frame === i ? '1' : '0';
        });
      };

      timer = setInterval(function () {
        next.click();
      }, 8000);
    }
  };
}

export default MainVisual;
