import './cardWindow.scss';
class CardWindow {
  cardsWindow: HTMLElement;
  constructor(data: { id: string; type: string; title: string; img: string }[]) {
    this.cardsWindow = document.createElement('ul');
    this.cardsWindow.id = 'history-card-window';

    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p class="imgFrame"><img src="${item.img}" alt="image06" alt="${item.id}"/></p>
        <p class="blackC" />
        <p class="title">${item.title}</p>
      `;
      this.cardsWindow.appendChild(li);
    });
  }

  get instance() {
    return this.cardsWindow;
  }
}

export default CardWindow;
