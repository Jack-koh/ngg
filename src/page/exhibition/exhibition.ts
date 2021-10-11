import Header from 'components/header/mainHeader/Header';
import Footer from 'components/footer/footer';
import CardNavigator from '../utils/cardNavigator/CardNavigator';
import MainVisual from '../utils/mainVisual/MainVisual';
import View from 'page/View';

export class Exhibition extends View {
  constructor() {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const key = 'EXHIBITION';
    const header = new Header('sticky').getHtml();
    const footer = new Footer().getHtml();

    const mainVisual = new MainVisual({
      key,
      id: 'exhibition-main-visual',
      titleData: {
        subTitle: 'inspiring community of explorers',
        title: 'EXHIBITION & EVENT',
        description:
          'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration.',
      },
      data: [
        { img: '/img/plan.png', text: 'Plan' },
        { img: '/img/exhibition.png', text: 'Exhibition' },
        { img: '/img/event.png', text: 'Event' },
      ],
      circleDesc: 'INSPIRING COMMUNITY OF EXPLORERS',
    }).getHtml();

    const cards = new CardNavigator({
      key,
      id: 'exhibition-card-navigator',
      data: [
        {
          img: 'mainCatePlan',
          text: 'Plan Your Visit',
          desc:
            'The National Geographic Museum hosts a variety of rotating exhibitions and programs year-round. To see what the museum is currently offering',
        },
        {
          img: 'mainCateExhibition',
          text: 'Exhibition',
          desc:
            'The National Geographic Museum is great for all ages and features a wide range of changing exhibitions',
        },
        {
          img: 'mainCateEvent',
          text: 'Event',
          desc:
            'Get closer to the edge of your seat with National Geographic events in D.C.! Enjoy live talks with National Geographic explorers, happy hours, and more.',
        },
      ],
    }).getHtml();

    this.markup = `
      ${header}
      <div id="explorer-page">
        ${mainVisual}
        ${cards}
      </div>
      ${footer}
    `;
  }

  addEvents() {}
}
