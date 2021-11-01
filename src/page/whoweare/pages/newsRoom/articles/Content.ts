import View from 'page/View';
import { data } from './data';
import './Content.scss';

export default class Content extends View {
  step: number;
  constructor() {
    super();
    const location = history.state?.pathname.split('/') ?? null;
    const id = location ? location[location.length - 1] : 0;
    const arr = id.split('-');
    const index = arr.pop();
    const cate = arr.pop();
    this.step = cate === 'press' ? +index + 6 : +index;
  }

  generateMarkup() {
    const { title, subTitle, markup } = data[this.step];
    return `
      <div id="ns-article-content">
        <div class="title">
          ${title}
        </div>
        <div class="sub-title">
          ${subTitle}
        </div>

        <div class="ns-article-content-markup">
          ${markup}
        </div>
      </div>
    `;
  }

  addEvents() {}
}
