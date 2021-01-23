import './visualTitle.scss';

class VisualTitle {
  visualTitleElement: HTMLElement;
  constructor(public props: { subTitle: string; title: string; description: string }) {
    this.visualTitleElement = document.createElement('div');
    this.visualTitleElement.classList.add('main-visual-title-feld');

    this.visualTitleElement.innerHTML = `
        <div class="subtitle">${this.props.subTitle}</div>
        <div class="title">${this.props.title}</div>
        <div class="description">${this.props.description}</div>
    `;
  }

  get instance() {
    return this.visualTitleElement;
  }
}

export default VisualTitle;
