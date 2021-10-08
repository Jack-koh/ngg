import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import SubHeader from 'components/header/subHeader/contentHeader';
import list from './data';
const subHeader = new SubHeader();
import './leaderDetail.scss';

class LeadersDetail {
  step: number;
  wrapperElement: HTMLElement;
  constructor() {
    this.step = 0;
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'about-us-leader-detail';
    this.wrapperElement.appendChild(subHeader.instance);
    this.wrapperElement.appendChild(this.buttons());
    this.render();
  }

  render() {
    this.wrapperElement.appendChild(this.detailContent());
  }

  buttons() {
    const buttons = document.createElement('div');
    buttons.id = 'buttons';
    const prev = document.createElement('p');
    const next = document.createElement('p');
    prev.id = 'prev';
    next.id = 'next';

    prev.innerHTML = `
      <div class="button-cont">
        <span class="thum">
          <img src="${list[Math.abs(list.length - (list.length + this.step + 1))].image}" alt="jo"/>
        </span>
        <span class="desc">
          <span class="name">${list[this.step + 1].name}</span>
          <span class="position">Chief Scientist and Senior Vice President</span>
        </span>
      </div>
      <span class="togArrow">
        <img src="../../img/togarrow.png" alt="togArrow"/>
      </span>
    `;

    next.innerHTML = `
      <div class="button-cont">
        <span class="thum">
          <img src="${list[Math.abs(list.length - (list.length + this.step - 1))].image}" alt="jo"/>
        </span>
        <span class="desc">
          <span class="name">Jonathan Baillie </span>
          <span class="position">Chief Scientist and Senior Vice President</span>
        </span>
      </div>
      <span class="togArrow">
        <img src="../../img/togarrow.png" alt="togArrow"/>
      </span>
    `;

    prev.addEventListener('click', () => {
      this.step--;
      this.render();
    });

    next.addEventListener('click', () => {
      this.step++;
      this.render();
    });

    buttons.appendChild(prev);
    buttons.appendChild(next);

    return buttons;
  }

  detailContent() {
    const detailContent = document.createElement('div');
    detailContent.id = 'leader-detail-content';
    detailContent.innerHTML = `
      <div id="spaceIn">
        <div id="portrait">
          <div id="left">
              <div id="frame">
                  <div class="line">
                      <div id="photo">
                          <img src="${list[this.step].image}"/>
                      </div>
                  </div>
              </div>
              <div class="nameBox">
                  <h4>ANGELO GRIMA</h4>
                  <p>Executive Vice President, General Counsel</p>
              </div>
          </div>
          <div id="right">
              <div id="rightIn">
                  ${list[this.step].desc}
              </div>
          </div>
        </div>
      </div>
    `;
    return detailContent;
  }

  get instance() {
    const header = new Header().instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default LeadersDetail;
