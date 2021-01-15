import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import CardNavigator from './cardNavigator/cardNavigator';
import MainVisual from './mainVisual/mainVisual';

class WhoWeAre {
  whoWeAreWrapperElement: HTMLElement;
  constructor() {
    this.whoWeAreWrapperElement = document.createElement('div');
    this.whoWeAreWrapperElement.appendChild(new MainVisual().instance);
    this.whoWeAreWrapperElement.id = 'who-we-are-page';
    this.whoWeAreWrapperElement.appendChild(new CardNavigator().instance);
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.whoWeAreWrapperElement, footer];
  }
}

export default WhoWeAre;
