import CardWindow from './cardwindow/cardWindow';
import CardHeader from './cardheader/cardHeader';
import cardData from './cardWindow/cardData';
import './historyCard.scss';

type cardData = {
  id: string;
  type: string;
  title: string;
  img: string;
  year: string;
  contentTitle: string;
  desc: string;
}[];

class HistoryCard {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'history-card-wrapper';
    const cardHeader = new CardHeader({ data: cardData, setCardWindow: this.setCardWindow }).instance;

    this.wrapperElement.appendChild(cardHeader);
    this.setCardWindow(cardData);
  }

  setCardWindow = (cardData: cardData) => {
    const prevWindow = document.getElementById('history-card-window');
    if (prevWindow) this.wrapperElement.removeChild(prevWindow);
    const cardWindow = new CardWindow(cardData).instance;
    if (this.wrapperElement) this.wrapperElement.appendChild(cardWindow);
  };

  get instance() {
    return this.wrapperElement;
  }
}

export default HistoryCard;
