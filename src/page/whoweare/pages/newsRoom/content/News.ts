import View from 'page/View';
import { map } from 'utils/commonFunc';
import './News.scss';

class News extends View {
  constructor(public data: { img: string; title: string; desc: string }[][]) {
    super();
  }

  generateMarkup() {
    return `
      <div class="ns-news-screen">
        ${map(this.data, (el) => {
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
    `;
  }
  addEvents() {}
}

export default News;
