import View from 'page/View';
import { Header, Footer, SubHeader } from 'page/common';
import { map, link } from 'utils/commonFunc';
import EnterButton from 'components/common/button/button';
import { data } from './data';
import './ExBlog.scss';

export class ExBlog extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();

    return `
      ${header}
      ${subHeader}
        <div id="ex-blog-wrapper">
          <div id="mainVisual">
            <div id="visual">
              <div id="visualImg"></div>
            </div>
            <div id="newsTitle">
              <div class="title">
                IDEAS &amp; INSIGHT<br />
                FROM EXPLORERS
                <p class="bar"></p>
              </div>
            </div>
          </div>

          <div id="ex-blog-container">
            <div id="ex-blog-container-in">
              <div class="headline">
                <h3>PRESS RELEASES</h3>
                <div class="btn">
                  <div class="btnWrap">
                    <p id="rowbtn">
                      <img src="/public/img/row.jpg" alt="row" />
                    </p>
                    <p id="gridbtn">
                      <img src="/public/img/grid.jpg" alt="grid" />
                    </p>
                  </div>
                </div>
              </div>

              <div id="blogs">
                <ul id="row" class="row">
                  ${map(data, (el, i) => {
                    const { title, detail, desc, img } = el;
                    return `
                      <li>
                        <div class="photoBox">
                          ${link({
                            url: `/whoweare/newsroom/article/ns-hl-inside-${i}`,
                            child: `<img src=${img} alt=${img} />`,
                          })}
                        </div>
                        <div class="info">
                          ${link({
                            url: `/whoweare/newsroom/article/ns-hl-inside-${i}`,
                            child: `<span class="blogTitle">${title}</span>`,
                          })}
                          <p class="state">${detail}</p>
                          <p class="desc">
                            ${desc}
                          </p>
                          <div id="utils">
                            <div class="enterBtn">
                              ${new EnterButton({
                                url: `/whoweare/newsroom/article/ns-hl-inside-${i}`,
                                text: 'READ MORE',
                              }).getHtml()}
                            </div>
                            <div class="share">
                              <img src="/public/img/share.jpg" alt="share" />
                              <img src="/public/img/facebook.jpg" alt="facebook" />
                              <img src="/public/img/twitter.jpg" alt="twitter" />
                            </div>
                          </div>
                        </div>
                      </li>
                    `;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {
    const rowbtn = document.getElementById('rowbtn');
    const gridbtn = document.getElementById('gridbtn');
    const row = document.getElementById('row');
    if (rowbtn && row)
      rowbtn.onclick = () => {
        row.classList.add('row');
        row.classList.remove('grid');
      };
    if (gridbtn && row)
      gridbtn.onclick = () => {
        row.classList.add('grid');
        row.classList.remove('row');
      };
  }
}
