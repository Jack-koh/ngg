import View from 'page/View';
import { link } from 'utils/commonFunc';
import './Aside.scss';

class Aside extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    return `
      <div id="aside">
        <div id="asideIn">
          <div id="ad">
            <strong>Advertisement</strong>
              ${link({
                url: '/exhibition/visitorplan',
                child: '<p id="leftAd"><img src="/public/img/images/leftAd.jpg" alt="advertise"></p>',
              })}
              ${link({
                url: '/exhibition/event',
                child: '<p id="rightAd"><img src="/public/img/images/evebtAd.jpg" alt="advertise"></p>',
              })}
          </div>
        </div>
      </div>
    `;
  }

  addEvents() {}
}

export default Aside;
