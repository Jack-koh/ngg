import View from 'page/View';
import Circles from './Circles';
import './MainVisual.scss';

type Props = {
  key: string;
  id: string;
  titleData: { subTitle: string; title: string; description: string };
  data: { img: string; text: string }[];
  circleDesc?: string;
};

class MainVisual extends View {
  constructor(public props: Props) {
    super();
  }

  generateMarkup() {
    const { id, titleData, circleDesc } = this.props;
    const circles = new Circles(this.props).getHtml();
    return `
        <div id="${id}" class="page-main-visual">
        <div class="main-visual-title-feld">
          <div class="subtitle">${titleData.subTitle}</div>
          <div class="title">${titleData.title}</div>
          <div class="description">
            ${titleData.description}
          </div>
        </div>
        <div class="sub-circle-nav">
          ${circles}
          ${circleDesc ? `<div class="circle-nav-description">${circleDesc}</div>` : ''}
        </div>
      </div>
    `;
  }
  addEvents() {}
}

export default MainVisual;
