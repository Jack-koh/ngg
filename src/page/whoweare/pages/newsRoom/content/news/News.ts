import View from 'page/View';
import { link, map } from 'utils/commonFunc';
import './News.scss';

class News extends View {
  constructor(public id: string, public data: { img: string; title: string; desc: string }[][]) {
    super();
  }

  generateMarkup() {
    return `
      <div class="ns-news-screen" id="${this.id}-ul">
        ${map(this.data, (el, i) => {
          const addIndex = i === 0 || i === 2 ? 3 : 0;
          return `
            <ul>
              ${map(el, (item, i) => {
                return `
                  <li>
                    <div class="photoBox">
                      ${link({
                        url: `/whoweare/newsroom/article/${this.id}-${i + addIndex}`,
                        child: `<img src=${item.img} alt="news1">`,
                      })}
                    </div>
                    <h4>${item.title}</h4>
                    <p class="state">
                      0 comments <span class="slash">/</span> &nbsp;<img src="../../img/like.png" alt="like">&nbsp;13 <span class="slash">/</span> April 28,2018
                    </p>
                    ${link({
                      url: `/whoweare/newsroom/article/${this.id}-${i + addIndex}`,
                      className: 'desc',
                      child: item.desc,
                    })}
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
