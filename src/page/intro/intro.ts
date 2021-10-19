import Section from './section/Section';
import View from 'page/View';
import { Header, Footer } from 'page';
import { map } from 'utils/commonFunc';
import ScrollNav from './scrollNav/ScrollNav';
import './Intro.scss';

type Data = {
  id: string;
  index: number;
  subtitle: string;
  title: string;
  description: string;
};

export class Intro extends View {
  data: Data[];
  constructor() {
    super();
    this.data = [
      {
        id: 'section-01',
        index: 0,
        subtitle: 'Science, exploration to change the world',
        title: 'NATIONAL GEOGRAPHIC',
        description:
          'National Geographic is an American digital cable and satellite television network that is owned by National Geographic Partners, majority-owned by 21st Century Fox with the remainder owned by the National Geographic Society.',
      },
      {
        id: 'section-02',
        index: 1,
        subtitle: 'Working for a Planet in Balance',
        title: 'WHO WE ARE',
        description:
          'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration.',
      },
      {
        id: 'section-03',
        index: 2,
        subtitle: 'Impact for the planet',
        title: 'EXPLORER',
        description: 'We fund and support groundbreaking scientists, conservationists, educators, and storytellers.',
      },
      {
        id: 'section-04',
        index: 3,
        subtitle: 'See explorers inpiring community',
        title: 'EXHIBITION & EVENT',
        description:
          'In the heart of Washington, D.C., National Geographic hosts world-class exhibitions, exclusive events, and an inspiring community of explorers.',
      },
      {
        id: 'section-05',
        index: 4,
        subtitle: 'Current portfolio',
        title: 'PROJECT',
        description: 'Explore our current portfolio of initiatives, and get the latest updates from them below.',
      },
    ];
  }

  generateMarkup = () => {
    const sections = map(this.data, (item) => new Section(item).getHtml());
    const nav = new ScrollNav().getHtml();
    const header = new Header('sticky').getHtml();
    const footer = new Footer().getHtml();
    return `
      ${header}
        <div id="intro-page-wrapper">
          ${sections + nav}
        </div>
      ${footer}
    `;
  };

  addEvents() {}
}
