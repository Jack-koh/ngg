import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import CardNavigator from '../utils/cardNavigator/cardNavigator';
import MainVisual from '../utils/mainVisual/mainVisual';

class WhoWeAre {
  whoWeAreWrapperElement: HTMLElement;
  constructor() {
    this.whoWeAreWrapperElement = document.createElement('div');

    this.whoWeAreWrapperElement.id = 'who-we-are-page';

    const key = 'WHO WE ARE';
    const titleData = {
      subTitle: 'Working for a Planet in Balance',
      title: 'WHO WE ARE',
      description:
        'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration',
    };

    this.whoWeAreWrapperElement.appendChild(
      new MainVisual({
        key,
        id: 'who-we-are-main-visual',
        titleData,
        data: [
          { img: '/img/aboutIcon.png', text: 'About us' },
          { img: '/img/historyIcon.png', text: 'History' },
          { img: '/img/leadershipIcon.png', text: 'Leadership' },
          { img: '/img/newsroomIcon.png', text: 'News room' },
        ],
      }).instance
    );

    this.whoWeAreWrapperElement.appendChild(
      new CardNavigator({
        key,
        id: 'who-we-are-card-navigator',
        data: [
          {
            img: '/img/images/about.jpg',
            text: 'About us',
            desc:
              'For 130 years, we’ve founded groundbreaking scientists and explorers and shared.',
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
        ],
      }).instance
    );
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.whoWeAreWrapperElement, footer];
  }
}

export default WhoWeAre;
