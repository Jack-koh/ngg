import Header from 'components/header/mainHeader/mainheader';
import Footer from 'components/footer/footer';
import ProjectVisual from './projectVisual/projectVisual';
import { subUrls } from 'utils/urlData';

interface Project {
  wrapperElement: HTMLElement;
}
class Project implements Project {
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'project-page';

    const data = [
      {
        id: 'beyond-yellow-stone',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'big-cat',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'last-wild-place',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'year-of-the-bird',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'pristine-seas',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
    ];

    data.forEach((item, index) => {
      const visuals = new ProjectVisual({ data: item, url: subUrls['PROJECT'][index] }).instance;
      this.wrapperElement.appendChild(visuals);
    });
  }

  get instance() {
    const header = new Header('sticky').instance;
    const footer = new Footer().instance;
    return [header, this.wrapperElement, footer];
  }
}

export default Project;
