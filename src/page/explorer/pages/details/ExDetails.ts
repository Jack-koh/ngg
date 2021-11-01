import View from 'page/View';
import { Header, Footer, SubHeader } from 'page/common';
import { data } from './data';
import { map } from 'utils/commonFunc';
import './ExDetails.scss';

export class ExDetails extends View {
  id: number;
  constructor() {
    super();
    const location = history.state?.pathname.split('/') ?? null;
    this.id = location ? +location[location.length - 1] : 0;
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    const item = data[this.id];

    return `
      ${header}
      ${subHeader}
        <div id="ex-detail-wrapper">
          <div id="h3Wrap">
            <h3>${item.head}</h3>
          </div>

          <div id="ex-visual">
            <div id="explorerWrap">
              <div id="photo">
                <img src=${item.img} alt="ShivaniBhalla">
              </div>
              <div id="explorerDesc">
                <p id="area">${item.title.area}</p>
                <p class="bar"></p>
                <p id="name">${item.name}</p>
                <p id="role">${item.title.role}</p>
              </div>
            </div>
          </div>

          <div id="textArea">
            <h3>ABOUT ${item.name}</h3>
            <div>
              <p>${item.desc}</p>
            </div>
          </div>

          <div id="grantHistory">
            <div id="grantHistoryIn">
              <h3>HISTORY AT NATIONAL GEOGRAPHIC</h3>
              <ul>
                ${map(item.history, (item) => {
                  return `
                    <li>
                      <p class="year">${item.year}</p>
                      <p class="subject">
                        ${item.content} <span class="orange">See on Map.</span>
                      </p>
                    </li>
                  `;
                })}
              </ul>
            </div>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {}
}
