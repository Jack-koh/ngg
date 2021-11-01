import { map } from 'utils/commonFunc';
import Modal from 'components/common/modal/modal';
import cardData from './cardData';
import View from 'page/View';
import './HistoryCard.scss';

type CardData = {
  id: string;
  type: string;
  title: string;
  img: string;
  year: string;
  contentTitle: string;
  desc: string;
};

class HistoryCard extends View {
  constructor() {
    super();
  }

  generateMarkup = () => {
    return `
      <div id="history-card-wrapper">
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
        <ul id="history-card-window">
          ${map(cardData, (item) => {
            return `
              <li class="history-card-item">
                <div class="imgFrame"><div class="img ${item.img}"/></div>
                <p class="blackC" />
                <p class="title">${item.title}</p>
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  };

  addEvents = () => {
    const prevButton = document.getElementById('prev');
    if (prevButton) {
      prevButton.onclick = () => {
        const container = document.getElementById('history-visual-container') as HTMLElement;
        container.style.transform = 'translateX(0)';
      };
    }

    const cateItems = document.getElementsByClassName('history-category-list-item') as HTMLCollectionOf<HTMLElement>;
    const cardWindow = document.getElementById('history-card-window') as HTMLElement;
    let data: CardData[] = cardData;
    if (cateItems) {
      [...cateItems].forEach((el) => {
        el.onclick = () => {
          if (el.id === 'all') data = cardData;
          if (el.id === 'organization') data = cardData.filter((el) => el.type === 'orga');
          if (el.id === 'innovations') data = cardData.filter((el) => el.type === 'inn');
          if (el.id === 'discoveries') data = cardData.filter((el) => el.type === 'dis');

          cardWindow.innerHTML = map(data, (item) => {
            return `
              <li class="history-card-item">
                <div class="imgFrame">
                  <div class="img ${item.img}"/>
                </div>
                <p class="blackC" />
                <p class="title">${item.title}</p>
              </li>
            `;
          });
        };
      });
    }

    const cards = document.getElementsByClassName('history-card-item');
    [...cards].forEach((el, i) => {
      (el as HTMLElement).onclick = () => {
        console.log(data);
        const { year, contentTitle, desc, img } = data[i];
        const modal = new Modal({ year, title: contentTitle, desc, img });
        modal.render();
      };
    });
  };
}

export default HistoryCard;
