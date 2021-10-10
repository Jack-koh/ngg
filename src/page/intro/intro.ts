import Header from 'components/header/mainHeader/Header';
import Footer from 'components/footer/footer';
import Section from './section/Section';
import data from './data';
import View from 'page/View';
import ScrollNav from './scrollNav/ScrollNav';

import './intro.scss';

class IntroPage extends View {
  constructor(params: any) {
    super(params);
    this.generateMarkup();
  }

  generateMarkup() {
    const sections = data.map((item) => new Section(item).getHtml()).join('');
    const nav = new ScrollNav().getHtml();
    const header = new Header().getHtml();
    const footer = new Footer().getHtml();
    this.markup = `${header}<div id="intro-page-wrapper">${sections + nav}</div>${footer}`;
  }

  addEvents() {}
}

export default IntroPage;
