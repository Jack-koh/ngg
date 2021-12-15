import View from 'page/View';
import { Header, Footer, SubHeader } from 'page/common';
import { map, link } from 'utils/commonFunc';
import './FieldMap.scss';

export class FieldMap extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();

    const area = ['southA', 'northA', 'pacific', 'afreeca', 'westAsia', 'asia', 'aust'];
    const news = [
      'National Geographic Society Announces Winners of Competition to...',
      'Most fishing on the high seas would be unprofitable...',
      'National Geographic Celebrates World Environment Day and World...',
      'Venkat Ranjan of California Wins 2018 National Geographic Bee...',
      'National Geographic Society Launches Global Endangered Species...',
    ];

    const explorers = [
      { url: '/explorer/explorers/9', name: 'BrianSkerry' },
      { url: '/explorer/explorers/10', name: 'AlbertLin' },
      { url: '/explorer/explorers/1', name: 'CarltonWardJr' },
      { url: '/explorer/explorers/6', name: 'EnricSala' },
    ];

    return `
      ${header}
      ${subHeader}
        <div id="explorer-field-map-wrapper">
          <div id="mapBg">
            <div id="ex-field-map-toolTip">
              <p id="searchImg"><img src="/public/img/search.jpg" alt="search" /></p>
              <p id="text">
                Check out<br />
                this area
              </p>
            </div>
            <div id="ex-field-map-circles">
              ${map(area, (className) => {
                return `
                  <div class=${className}>
                    <p></p>
                    <span> </span>
                  </div>
                `;
              })}
            </div>
            <p id="imgFrame">
              <img src="/public/img/images/fieldBg.jpg" alt="fieldBg" />
            </p>

            <div id="ex-field-map-slide">
              <div id="textArea">
                <p class="logoF"><img src="/public/img/logo.png" alt="logo" /></p>
                <h4>Will Wildlife Activity Exacerbate The Arctic Meltdown?</h4>
                <p id="desc">
                  Northern ecosystems have become increasingly important in regards to global carbon (C) circulation
                  with respect to feedbacks from arctic ecosystems and global climate change.
                </p>
              </div>
              <div id="explorers">
                <h4>Project explorers</h4>
                <div class="explorer">
                  <ul>
                    ${map(explorers, (el) => {
                      return `
                        <li>
                          <p class="photo">
                            ${link({
                              url: el.url,
                              child: `<img src="/public/img/images/explorers/${el.name}.png" alt="ex1"/>`,
                            })}
                          </p>
                          <p class="name">${el.name}</p>
                        </li>
                      `;
                    })}
                  </ul>
                </div>
              </div>
              <div id="news">
                <h4>Headlines</h4>
                ${map(news, (el, i) => {
                  return `
                    ${link({ url: `/whoweare/newsroom/article/ns-hl-inside-${i}`, child: el })}
                  `;
                })}
              </div>
              <p class="ex-field-map-cancle">
                <img src="/public/img/cancle.jpg" alt="cancle" />
              </p>
            </div>
          </div>

          <div class="title">
            <h3>FIELD MAP</h3>
            <div class="bar"></div>
            <p class="subtitle">
              Get to know the people and projects we’ve funded around the world. Grants across the globe.
            </p>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {
    const toolTip = document.getElementById('ex-field-map-toolTip') as HTMLElement;
    const circles = document.getElementById('ex-field-map-circles');
    const slide = document.getElementById('ex-field-map-slide') as HTMLElement;
    const cancel = document.getElementsByClassName('ex-field-map-cancle');
    if (circles) {
      [...circles?.children].forEach((el) => {
        const _node = el as HTMLElement;
        console.log(_node);
        _node.onmouseover = function (e) {
          toolTip.style.display = 'block';
          toolTip.style.left = `${_node.offsetLeft + _node.clientWidth + 20}px`;
          toolTip.style.top = `${_node.offsetTop - _node.clientHeight / 2}px`;
        };

        _node.onmouseout = function (e) {
          toolTip.style.display = 'none';
          toolTip.style.left = '0';
          toolTip.style.top = '0';
        };

        let toggle = false;

        _node.onclick = function () {
          slide.style.bottom = toggle ? '-300px' : '0';
          toggle = !toggle;
        };

        (cancel[0] as HTMLElement).onclick = function () {
          slide.style.bottom = '-300px';
        };
      });
    }
  }
}
