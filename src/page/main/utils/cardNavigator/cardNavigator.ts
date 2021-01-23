import { link } from 'utils/commonFunc';
import { subUrls } from 'utils/urlData';
import './cardNavigator.scss';

interface CardNavigator {
  navigatorElement: HTMLElement;
}

class CardNavigator implements CardNavigator {
  constructor(
    public props: { key: string; id: string; data: { img: string; text: string; desc: string }[] }
  ) {
    const { key, id, data } = props;
    this.navigatorElement = document.createElement('div');
    this.navigatorElement.id = id;
    this.navigatorElement.classList.add('sub-card-nav-wrapper');

    subUrls[key].forEach((nav, index) => {
      const subNavItem = document.createElement('div');
      link(subNavItem, { url: nav.url, title: nav.title });
      subNavItem.classList.add('sub-nav-card-item');
      subNavItem.innerHTML = `
          <div class="card-item" style="background-image: url(${data[index].img})">
            <div class="hover-color">

              <div class="top-move">
                <div class="number-icon">
                  <p>
                    <img src="/img/images/cateIcon.png" alt="number-icon"/>
                  </p>
                  <p class="number">${index + 1}</p>
                </div>
                <h3>${data[index].text}</h3>
              </div>

              <div class="vertical-bar"></div>

              <p class="desc">
                ${data[index].desc}
              </p>
              
            </div>
          </div>
        `;

      this.navigatorElement.appendChild(subNavItem);
    });
  }

  get instance() {
    return this.navigatorElement;
  }
}

export default CardNavigator;
