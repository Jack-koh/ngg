import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import SubHeader from 'components/header/subHeader/contentHeader';
import MainVisual from './mainVisual/mainVisual';
import HistoryCard from './historyCard/HistoryCard';
import './history.scss';

class History {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'history-page';
    const subHeader = new SubHeader().instance;
    const mainVisual = new MainVisual().instance;
    const historyCard = new HistoryCard().instance;
    const visualContainer = document.createElement('div');
    visualContainer.id = 'history-visual-container';
    visualContainer.appendChild(mainVisual);
    visualContainer.appendChild(historyCard);
    this.wrapperElement.appendChild(subHeader);
    this.wrapperElement.appendChild(visualContainer);
  }

  get instance() {
    const header = new Header().instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default History;
