import { Header, Footer } from 'page/common';
import CardNavigator from '../utils/cardNavigator/CardNavigator';
import MainVisual from '../utils/mainVisual/MainVisual';
import View from 'page/View';

export class WhoWeAre extends View {
  mainVisual: string;
  cards: string;
  constructor() {
    super();
    const key = 'WHO WE ARE';
    const visualData = {
      key,
      id: 'who-we-are-main-visual',
      titleData: {
        subTitle: 'Working for a Planet in Balance',
        title: 'WHO WE ARE',
        description:
          'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration',
      },
      data: [
        { img: '/public/img/aboutIcon.png', text: 'About us' },
        { img: '/public/img/historyIcon.png', text: 'History' },
        { img: '/public/img/leadershipIcon.png', text: 'Leadership' },
        { img: '/public/img/newsroomIcon.png', text: 'News room' },
      ],
    };
    const cardsData = {
      key,
      id: 'who-we-are-card-navigator',
      data: [
        {
          img: 'mainCateAbout',
          text: 'About us',
          desc: 'For 130 years, we’ve founded groundbreaking scientists and explorers and shared.',
        },
        {
          img: 'mainCateHistory',
          text: 'History',
          desc: 'travel through 130 years of national geographic histry.',
        },
        {
          img: 'mainCateLeadership',
          text: 'Leadership',
          desc:
            'International Council of Advisors,and Education Foundation Board ensure optimal impact of our programs.',
        },
        {
          img: 'mainCateNewroom',
          text: 'News room',
          desc: 'National geographic- archive News, press, release.',
        },
      ],
    };
    this.cards = new CardNavigator(cardsData).getHtml();
    this.mainVisual = new MainVisual(visualData).getHtml();
  }

  generateMarkup() {
    const key = 'WHO WE ARE';
    const header = new Header('sticky').getHtml();
    const footer = new Footer().getHtml();

    return `
      ${header}
      <div id="who-we-are-page">
        ${this.mainVisual}
        ${this.cards}
      </div>
      ${footer}
    `;
  }
  addEvents() {}
}
