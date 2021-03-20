import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import Section from './section/Section';
import './intro.scss';
class IntroPage {
  introWrapperElement: HTMLDivElement;
  sectionElement: HTMLElement[];
  constructor() {
    this.introWrapperElement = document.createElement('div');
    this.introWrapperElement.id = 'intro-page-wrapper';

    const sectionData = [
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
        description:
          'We fund and support groundbreaking scientists, conservationists, educators, and storytellers.',
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
        description:
          'Explore our current portfolio of initiatives, and get the latest updates from them below.',
      },
    ];

    this.sectionElement = sectionData.map((item) => new Section(item).instance);
    this.sectionElement.forEach((section) => this.introWrapperElement.appendChild(section));

    const sideScrollBtns = document.createElement('div');
    sideScrollBtns.id = 'scroll-button-wrapper';
    const scrollData = ['scrollbtn01', 'scrollbtn02', 'scrollbtn03', 'scrollbtn04', 'scrollbtn05'];

    scrollData.forEach((scrollBtn, index) => {
      const item = document.createElement('div');
      item.classList.add('scroll-button', scrollBtn);
      item.style.width = '40px';
      item.style.height = '40px';
      const sectionCollection = document.getElementsByClassName('intro-section');
      item.addEventListener('click', () => {
        const sectionItem = [...sectionCollection][index] as HTMLElement;
        window.scrollTo({ left: 0, top: sectionItem.offsetTop, behavior: 'smooth' });
      });
      sideScrollBtns.appendChild(item);
    });
    this.introWrapperElement.appendChild(sideScrollBtns);
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.introWrapperElement, footer];
  }
}

export default IntroPage;
