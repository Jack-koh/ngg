import Header from 'components/header/mainHeader/Header';
import Footer from 'components/footer/footer';
import CardNavigator from '../utils/cardNavigator/CardNavigator';
import MainVisual from '../utils/mainVisual/MainVisual';
import View from 'page/View';

export class Explorer extends View {
  constructor() {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const key = 'EXPLORER';
    const header = new Header('sticky').getHtml();
    const footer = new Footer().getHtml();

    const mainVisual = new MainVisual({
      key,
      id: 'explorer-main-visual',
      titleData: {
        subTitle: 'Impact for the planet',
        title: 'EXPLORER',
        description:
          'We fund and support groundbreaking scientists, conservationists, educators, and storytellers.',
      },
      data: [
        { img: '/img/find.png', text: 'Explorer' },
        { img: '/img/fieldmap.png', text: 'Field map' },
        { img: '/img/blog.png', text: 'Blog' },
      ],
      circleDesc: 'MAKING AN IMPACT FOR THE PLANET',
    }).getHtml();

    const cards = new CardNavigator({
      key,
      id: 'explorer-card-navigator',
      data: [
        {
          img: 'mainCateFindAnExplorer',
          text: 'Find an explorer',
          desc: 'For 130 years, we’ve founded groundbreaking scientists and explorers and shared.',
        },
        {
          img: 'mainCateFieldMap',
          text: 'Field map',
          desc: 'travel through 130 years of national geographic histry.',
        },
        {
          img: 'mainCateExplorerBlog',
          text: 'blog',
          desc:
            'International Council of Advisors,and Education Foundation Board ensure optimal impact of our programs.',
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
