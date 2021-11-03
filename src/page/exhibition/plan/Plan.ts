import { Header, Footer, SubHeader } from 'page/common';
import View from 'page/View';
import Pannel01 from './pannel/Pannel01';
import './Plan.scss';

export class Plan extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    const pannel01 = new Pannel01().getHtml();
    return `
      ${header}
      ${subHeader}
        <div id="exhibition-plan-page">
          <div id="section1">
            <div id="tabMenu">
              <ul id="exhibition-plan-tab">
                <li id="tab01" class="plan-selected">
                  Visitor information
                </li>
                <li id="tab02">
                  Group sale
                </li>
                <li id="tab03">
                  Ticket information
                </li>
                <li id="tab04">
                  Annual pass
                </li>
                <li id="tab05">
                  Museum store
                </li>
              </ul>
            </div>
          </div>
      
          <div id="section3">
            <ul id="plan-panel">
              ${pannel01}
            </ul>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {
    const tabs = document.getElementById('exhibition-plan-tab');
    if (tabs) {
      tabs.onclick = (e) => {
        const target = e.target as HTMLElement;
        const li = target.closest('li');
        [...tabs.children].forEach((el) => el.classList.remove('plan-selected'));
        li?.classList.add('plan-selected');
      };
    }
  }
}
