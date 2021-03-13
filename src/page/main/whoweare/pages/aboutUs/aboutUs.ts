import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import Section01 from './sections/section01';
import Section02 from './sections/section02';
import Section03 from './sections/section03';
import './aboutUs.scss';

class AboutUs {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'about-us-page';
    const section01 = new Section01();
    const section02 = new Section02();
    const section03 = new Section03();
    this.wrapperElement.appendChild(section01.instance);
    this.wrapperElement.appendChild(section02.instance);
    this.wrapperElement.appendChild(section03.instance);
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default AboutUs;
