import Header from 'components/header/mainHeader/Header';
import Footer from 'components/footer/footer';
import SubHeader from 'components/header/subHeader/contentHeader';
import Section01 from './sections/section01';
import Leaders from './sections/leaders';
import './leaderShip.scss';

class LeaderShip {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'leadership-us-page';
    const subHeader = new SubHeader();
    const section01 = new Section01();
    const leaders = new Leaders();
    this.wrapperElement.appendChild(subHeader.instance);
    this.wrapperElement.appendChild(section01.instance);
    this.wrapperElement.appendChild(leaders.instance);
  }

  get instance() {
    return [this.wrapperElement];
  }
}

export default LeaderShip;
