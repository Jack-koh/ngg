import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import CardNavigator from '../utils/cardNavigator/cardNavigator';
import MainVisual from '../utils/mainVisual/mainVisual';

interface Explorer {
  wrapperElement: HTMLElement;
}

class Explorer implements Explorer {
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'explorer-page';

    const key = 'EXPLORER';
    const titleData = {
      subTitle: 'Impact for the planet',
      title: 'EXPLORER',
      description:
        'We fund and support groundbreaking scientists, conservationists, educators, and storytellers.',
    };

    this.wrapperElement.appendChild(
      new MainVisual({
        key,
        id: 'explorer-main-visual',
        titleData,
        data: [
          { img: '/img/find.png', text: 'Explorer' },
          { img: '/img/fieldmap.png', text: 'Field map' },
          { img: '/img/blog.png', text: 'Blog' },
        ],
        circleDesc: 'MAKING AN IMPACT FOR THE PLANET',
      }).instance
    );
    this.wrapperElement.appendChild(
      new CardNavigator({
        key,
        id: 'explorer-card-navigator',
        data: [
          {
            img: '/img/images/findAnExplorer.jpg',
            text: 'Find an explorer',
            desc:
              'For 130 years, we’ve founded groundbreaking scientists and explorers and shared.',
          },
          {
            img: '/img/images/fieldMap.jpg',
            text: 'Field map',
            desc: 'travel through 130 years of national geographic histry.',
          },
          {
            img: '/img/images/explorerBLog.jpg',
            text: 'blog',
            desc:
              'International Council of Advisors,and Education Foundation Board ensure optimal impact of our programs.',
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

export default Explorer;
