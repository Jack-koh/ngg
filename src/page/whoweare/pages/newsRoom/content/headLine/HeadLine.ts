import View from 'page/View';
import _ from 'utils/lodash';
import './HeadLine.scss';

class HeadLine extends View {
  constructor(public id: string, public title: string) {
    super();
  }

  generateMarkup() {
    return `
      <div class="ns-headline">
        <h3>${this.title}</h3>
        <div class="btn">
          <div class="btnWrap">
            <p id="${this.id}-prev">
              <img src="/public/img/prev01.jpg" alt="prev">
            </p>
            <p id="${this.id}-next">
              <img src="/public/img/next01.jpg" alt="next">
            </p>
          </div>
        </div>
      </div>
    `;

    //  <p>
    //     <a href="News.html" title="allbtn">
    //       <img src="/public/img/all.jpg" alt="all">
    //     </a>
    //   </p>
  }

  addEvents = () => {
    const prev = document.getElementById(`${this.id}-prev`) as HTMLElement;
    const next = document.getElementById(`${this.id}-next`) as HTMLElement;
    const screen = document.getElementById(`${this.id}-ul`) as HTMLElement;
    prev.onclick = () => {
      screen.style.marginLeft = '0';
      screen.style.transition = 'margin-left 0.3s ease';
      const afterEffect = _.debounce(() => {
        const last = screen.getElementsByTagName('ul');
        screen.prepend(last[last.length - 1]);
        screen.style.marginLeft = '-100%';
        screen.style.transition = 'none';
      }, 300);
      afterEffect();
    };

    next.onclick = () => {
      screen.style.marginLeft = '-200%';
      screen.style.transition = 'margin-left 0.3s ease';
      const afterEffect = _.debounce(() => {
        const first = screen.getElementsByTagName('ul');
        screen.appendChild(first[0]);
        screen.style.marginLeft = '-100%';
        screen.style.transition = 'none';
      }, 300);
      afterEffect();
    };
  };
}

export default HeadLine;
