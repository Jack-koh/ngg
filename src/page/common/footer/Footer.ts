import { link } from 'utils/commonFunc';
import View from 'page/View';
import './Footer.scss';

export class Footer extends View {
  constructor() {
    super();
  }

  generateMarkup = () => {
    return `
      <div id="footer-wrapper">
        <div id="footer-copyright">
          National Geographic Society is a 501 (c)(3) organization. ©Jack.koh All rights reserved. See my work at https://www.Jacky.co.kr
        </div>
        ${link({ url: '/', className: 'footer__logo' })}
      </div>
    `;
  };

  addEvents() {}
}
