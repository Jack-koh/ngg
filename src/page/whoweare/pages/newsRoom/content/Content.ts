import View from 'page/View';
import HeadLine from './HeadLine';
import News from './News';
import { release, blog } from './newsData';
import './Content.scss';

class Content extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const rel = {
      headLine: new HeadLine('PRESS RELEASES').getHtml(),
      contents: new News([...release, ...release]).getHtml(),
    };

    const bl = {
      headLine: new HeadLine('INSIDE NAT GEO BLOG').getHtml(),
      contents: new News([...blog, ...blog]).getHtml(),
    };

    return `
      <div id="ns-section2">
        <div id="ns-section2In">
          <div id="container">
            <div class="news">
              ${bl.headLine}
              ${bl.contents}
            </div>

            <div class="news">
              ${rel.headLine}
              ${rel.contents}
            </div>
          </div>
        </div>
      </div>
      
    `;
  }

  addEvents() {}
}

export default Content;
