import { link } from 'utils/commonFunc';
import { subUrls } from 'utils/urlData';
import './cardNavigator.scss';

class CardNavigator {
  navigatorElement: HTMLElement;
  constructor() {
    this.navigatorElement = document.createElement('div');
    this.navigatorElement.id = 'card-navigator';

    const navData = [
      {
        img: '/img/images/about.jpg',
        text: 'About us',
        desc: 'For 130 years, we’ve founded groundbreaking scientists and explorers and shared.',
      },
      {
        img: '/img/images/history.jpg',
        text: 'History',
        desc: 'travel through 130 years of national geographic histry.',
      },
      {
        img: '/img/images/leadership.jpg',
        text: 'Leadership',
        desc:
          'International Council of Advisors,and Education Foundation Board ensure optimal impact of our programs.',
      },
      {
        img: '/img/images/newroom.jpg',
        text: 'News room',
        desc: 'National geographic- archive News, press, release.',
      },
    ];

    subUrls['WHO WE ARE'].forEach((nav, index) => {
      const subNavItem = document.createElement('div');
      link(subNavItem, { url: nav.url, title: nav.title });
      subNavItem.classList.add('sub-nav-card-item');
      subNavItem.innerHTML = `
          <div class="card-item">
            <div class="hover-color">

              <div class="top-move">
                <div class="number-icon">
                  <p>
                    <img src="/img/images/cateIcon.png" alt="number-icon"/>
                  </p>
                  <p class="number">${index + 1}</p>
                </div>
                <h3>${navData[index].text}</h3>
              </div>

              <div class="vertical-bar"></div>

              <p class="desc">
                ${navData[index].desc}
              </p>
              
            </div>

            <div class="bg-img">
              <img src=${navData[index].img} alt="about" />
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
