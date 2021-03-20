import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import CardNavigator from '../utils/cardNavigator/cardNavigator';
import MainVisual from '../utils/mainVisual/mainVisual';

class Exhibition {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'exhibition-page';

    const key = 'EXHIBITION';
    const titleData = {
      subTitle: 'inspiring community of explorers',
      title: 'EXHIBITION & EVENT',
      description:
        'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration.',
    };

    this.wrapperElement.appendChild(
      new MainVisual({
        key,
        id: 'exhibition-main-visual',
        titleData,
        data: [
          { img: '/img/plan.png', text: 'Plan' },
          { img: '/img/exhibition.png', text: 'Exhibition' },
          { img: '/img/event.png', text: 'Event' },
        ],
        circleDesc: 'INSPIRING COMMUNITY OF EXPLORERS',
      }).instance
    );
    this.wrapperElement.appendChild(
      new CardNavigator({
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
      }).instance
    );
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default Exhibition;
