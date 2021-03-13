import EnterButton from 'components/common/button/button';
import './projectVisual.scss';

interface ProjectVisual {
  wrapperElement: HTMLDivElement;
  titleElement: HTMLDivElement;
  descElement: HTMLDivElement;
}

class ProjectVisual implements ProjectVisual {
  constructor(props: {
    data: { id: string; title: string; desc: string };
    urlData: { url: string; title: string };
    setSelected: () => void;
  }) {
    const { data, urlData, setSelected } = props;
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = data.id;
    this.wrapperElement.classList.add('visaul-items');
    this.wrapperElement.addEventListener('click', setSelected.bind(this));

    const button = new EnterButton({ url: urlData.url, text: 'ENTER' }).instance;
    this.titleElement = document.createElement('div');
    this.titleElement.classList.add('visual-title-field');
    this.titleElement.innerHTML = `
      <div class="visual-logo"></div>
      <div class="visual-title">${data.title}</div>
    `;
    this.titleElement.appendChild(button);

    this.descElement = document.createElement('div');
    this.descElement.classList.add('desc-field');
    this.descElement.innerHTML = `
      <div class="desc-title">${data.title}</div>
      <div class="desc">${data.desc}</div>
    `;

    this.wrapperElement.appendChild(this.titleElement);
    this.wrapperElement.appendChild(this.descElement);
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default ProjectVisual;
