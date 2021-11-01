import View from 'page/View';
import { Header, Footer, SubHeader } from 'page/common';
import Summary from './Summary';
import People from './People';
import { data } from './data';
import './Explorers.scss';

export class Explorers extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    const summary = new Summary().getHtml();
    const people = new People(data).getHtml();
    return `
      ${header}
      ${subHeader}
        <div id="explorer-explorers-content">
          ${summary}
          <div id="explorer-explorers-wrapper">
            <div class="list-wrapper">
              <ul id="explorers-list">
               ${people}
              </ul>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {}
}
