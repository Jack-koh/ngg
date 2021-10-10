import Header from 'components/header/mainHeader/Header';
import Footer from 'components/footer/footer';
import ProjectVisual from './projectVisual/projectVisual';
import { subUrls } from 'utils/urlData';

interface Project {
  wrapperElement: HTMLElement;
  selected: string;
  data: { id: string; title: string; desc: string }[];
}
class Project implements Project {
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'project-page';
    this.selected = 'beyond-yellow-stone';

    this.data = [
      {
        id: 'beyond-yellow-stone',
        title: 'Beyond Yellowstone',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'big-cat',
        title: 'Big Cats Initiative',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'last-wild-place',
        title: 'Last Wild Places',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'year-of-the-bird',
        title: 'Year of the Bird',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'pristine-seas',
        title: 'Pristine Seas',
        desc:
          'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
    ];

    this.renderVisuals(this.data);
  }

  get instance() {
    return [this.wrapperElement];
  }

  setSelected() {
    if (this.wrapperElement.classList.contains('selected')) {
      this.wrapperElement.classList.remove('selected');
    } else {
      const selected = document.getElementsByClassName('visaul-items selected');
      if (selected.length) selected[0].classList.remove('selected');
      this.wrapperElement.classList.add('selected');
    }
  }

  renderVisuals(data: { id: string; title: string; desc: string }[]) {
    data.forEach((item, index) => {
      const visuals = new ProjectVisual({
        data: item,
        urlData: subUrls['PROJECT'][index],
        setSelected: this.setSelected,
      }).instance;
      this.wrapperElement.appendChild(visuals);
    });
  }
}

export default Project;
