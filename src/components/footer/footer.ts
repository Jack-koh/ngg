import { link } from "utils/commonFunc";
import View from "page/View";
import "components/footer/footer.scss";

export default class Footer extends View {
  constructor() {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    this.markup = `
      <div id="footer-wrapper">
        <div id="footer-copyright">
          'National Geographic Society is a 501 (c)(3) organization. ©Jack.koh All rights reserved. See my work at https://www.Jacky.co.kr';
        </div>
        <div id="footer-logo"></div>
      </div>
    `;
  }

  addEvents() {
    const logo = document.getElementById("footer-logo");
    // if (logo) link(logo, "/");
  }
}
