import View from 'page/View';
import { map } from 'utils/commonFunc';
import './cardHeader.scss';
type cardData = {
  id: string;
  type: string;
  title: string;
  img: string;
  year: string;
  contentTitle: string;
  desc: string;
}[];

class CardHeader extends View {
  wrapperElement: HTMLElement;
  constructor(public props: { data: cardData; setCardWindow: (data: cardData) => void }) {
    super();
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'history-card-inner';

    const category = document.createElement('ul');
    category.id = 'history-category';

    const cateArr = [
      { id: 'all', title: 'All' },
      { id: 'organization', title: 'Organization' },
      { id: 'innovations', title: 'Innovations' },
      { id: 'discoveries', title: 'Discoveries' },
    ];

    cateArr.forEach((item) => {
      const cateItem = document.createElement('li');
      cateItem.id = item.id;
      cateItem.textContent = item.title;

      category.appendChild(cateItem);
    });

    this.wrapperElement.appendChild(category);
  }

  generateMarkup() {
    return `
      <div id="history-card-inner">
        <div id="prev">
          <img src="/img/prev01.jpg" alt="previous"/>
        </div>
        <ul id="history-category">
          ${map(
            [
              { id: 'all', title: 'All' },
              { id: 'organization', title: 'Organization' },
              { id: 'innovations', title: 'Innovations' },
              { id: 'discoveries', title: 'Discoveries' },
            ],
            (el) => `<li id=${el.id} class="history-category-list-item">${el.title}</li>`
          )}
        </ul>
      </div>
    `;
  }

  addEvents = () => {
    const prevButton = document.getElementById('prev');
    if (prevButton) {
      prevButton.onclick = () => {
        const container = document.getElementById('history-visual-container') as HTMLElement;
        container.style.transform = 'translateX(0)';
      };
    }

    const cateItems = document.getElementsByClassName('history-category-list-item') as HTMLCollectionOf<HTMLElement>;
    if (cateItems) {
      [...cateItems].forEach((el) => {
        el.onclick = () => {
          const { data, setCardWindow } = this.props;
          let cardData: cardData = [];
          if (el.id === 'all') cardData = data;
          if (el.id === 'organization') cardData = data.filter((el) => el.type === 'orga');
          if (el.id === 'innovations') cardData = data.filter((el) => el.type === 'inn');
          if (el.id === 'discoveries') cardData = data.filter((el) => el.type === 'dis');
          setCardWindow(cardData);
        };
      });
    }
  };

  get instance() {
    return this.wrapperElement;
  }
}

export default CardHeader;
