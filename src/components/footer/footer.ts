import { link } from 'utils/commonFunc';
import 'components/footer/footer.scss';

class Footer {
  footerElement: HTMLElement;
  copyright: HTMLElement;
  footerLogo: HTMLElement;
  constructor() {
    this.footerElement = document.createElement('div');
    this.footerElement.id = 'footer-wrapper';

    this.copyright = document.createElement('div');
    this.copyright.id = 'footer-copyright';
    this.copyright.textContent =
      'National Geographic Society is a 501 (c)(3) organization. ©Jack.koh All rights reserved. See my work at https://www.Jacky.co.kr';

    this.footerLogo = document.createElement('div');
    this.footerLogo.id = 'footer-logo';
    link(this.footerLogo, { title: 'index-page', url: '/' });

    this.footerElement.appendChild(this.copyright);
    this.footerElement.appendChild(this.footerLogo);
  }

  get instance() {
    return this.footerElement;
  }
}

export default Footer;
