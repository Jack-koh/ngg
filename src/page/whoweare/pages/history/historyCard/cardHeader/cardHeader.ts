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

class CardHeader {
  wrapperElement: HTMLElement;
  constructor(props: { data: cardData; setCardWindow: (data: cardData) => void }) {
    const { data, setCardWindow } = props;
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'history-card-inner';
    const category = document.createElement('ul');
    category.id = 'history-category';

    const prevButton = document.createElement('div');
    prevButton.id = 'prev';
    prevButton.innerHTML = '<img src="/img/prev01.jpg" alt="previous"/>';
    prevButton.onclick = () => {
      const container = document.getElementById('history-visual-container') as HTMLElement;
      container.style.transform = 'translateX(0)';
    };

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
      cateItem.onclick = () => {
        let cardData: cardData = [];
        if (item.id === 'all') cardData = data;
        if (item.id === 'organization') cardData = data.filter((el) => el.type === 'orga');
        if (item.id === 'innovations') cardData = data.filter((el) => el.type === 'inn');
        if (item.id === 'discoveries') cardData = data.filter((el) => el.type === 'dis');
        setCardWindow(cardData);
      };
      category.appendChild(cateItem);
    });

    this.wrapperElement.appendChild(prevButton);
    this.wrapperElement.appendChild(category);
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default CardHeader;
