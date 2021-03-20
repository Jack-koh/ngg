import './cardWindow.scss';
import Modal from 'components/common/modal/modal';

class CardWindow {
  cardsWindow: HTMLElement;
  constructor(
    data: {
      id: string;
      type: string;
      title: string;
      img: string;
      year: string;
      contentTitle: string;
      desc: string;
    }[]
  ) {
    this.cardsWindow = document.createElement('ul');
    this.cardsWindow.id = 'history-card-window';
    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p class="imgFrame"><img src="${item.img}" alt="image06" alt="${item.id}"/></p>
        <p class="blackC" />
        <p class="title">${item.title}</p>
      `;
      li.onclick = () => {
        const { year, contentTitle, desc, img } = item;
        const modal = new Modal({ year, title: contentTitle, desc, img });
        modal.render();
      };
      this.cardsWindow.appendChild(li);
    });
  }

  get instance() {
    return this.cardsWindow;
  }
}

export default CardWindow;
