import View from 'page/View';
import newsData from './newsData';
import { map } from 'utils/commonFunc';
import './Content.scss';

class Content extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    return `
      <div id="ns-section2">
        <div id="ns-section2In">
          <div id="container">
            <div class="news">
              <div class="headline">
                <h3>PRESS RELEASES</h3>
                <div class="btn">
                  <div class="btnWrap">
                    <p id="newsPrev">
                      <a href="#none" title="prevbtn">
                        <img src="/img/prev01.jpg" alt="prev">
                      </a>	
                    </p>
                    <p id="newsNext">
                      <a href="#none" title="nextbtn">
                        <img src="/img/next01.jpg" alt="next">
                      </a>	
                    </p>
                    <p>
                      <a href="News.html" title="allbtn">
                        <img src="/img/all.jpg" alt="all">
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div id="news">
                ${map([...newsData, ...newsData], (el) => {
                  return `
                    <ul>
                      ${map(el, (item) => {
                        return `
                          <li>
                            <div class="photoBox">
                              <img src=${item.img} alt="news1">
                            </div>
                            <h4>${item.title}</h4>
                            <p class="state">
                              0 comments <span class="slash">/</span> &nbsp;<img src="../../img/like.png" alt="like">&nbsp;13 <span class="slash">/</span> April 28,2018
                            </p>
                            <p class="desc">
                              ${item.desc}
                            </p>
                          </li>
                        `;
                      })}
                    </ul>
                  `;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    `;
  }

  addEvents() {}
}

export default Content;
