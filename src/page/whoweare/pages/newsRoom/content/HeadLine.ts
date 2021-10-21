import View from 'page/View';
import './HeadLine.scss';

class HeadLine extends View {
  constructor(public title: string) {
    super();
  }

  generateMarkup() {
    return `
      <div class="ns-headline">
        <h3>${this.title}</h3>
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
    `;
  }

  addEvents() {}
}

export default HeadLine;
