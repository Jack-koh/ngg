import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import SubHeader from 'components/header/subHeader/contentHeader';
const subHeader = new SubHeader();
import './leaderDetail.scss';

class LeadersDetail {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'about-us-leader-detail';
    this.wrapperElement.appendChild(subHeader.instance);
  }

  get instance() {
    const header = new Header().instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default LeadersDetail;
