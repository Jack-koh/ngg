import { Header, Footer } from 'page/common';
import EnterButton from 'components/common/button/button';
import { subUrls } from 'utils/urlData';
import { map } from 'utils/commonFunc';
import View from 'page/View';
import './Project.scss';

export class Project extends View {
  selected: string;
  data: { id: string; title: string; desc: string }[];
  constructor() {
    super();
    this.selected = 'beyond-yellow-stone';
    this.data = [
      {
        id: 'beyond-yellow-stone',
        title: 'Beyond Yellowstone',
        desc: 'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'big-cat',
        title: 'Big Cats Initiative',
        desc: 'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'last-wild-place',
        title: 'Last Wild Places',
        desc: 'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'year-of-the-bird',
        title: 'Year of the Bird',
        desc: 'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
      {
        id: 'pristine-seas',
        title: 'Pristine Seas',
        desc: 'Wildlife movement and migration is not just a story of enormous herds roaming across the open plains.',
      },
    ];
  }

  generateMarkup() {
    const header = new Header('sticky').getHtml();
    const footer = new Footer().getHtml();
    return `
      ${header}
        <div id="project-page">
          ${map(this.data, (el, i) => {
            const { url } = subUrls['PROJECT'][i];
            const button = new EnterButton({ url, text: 'ENTER', color: '#fff' });
            return `
                <div id="${el.id}" class="visaul-items">
                  <div class="visual-title-field">
                    <div class="visual-logo"></div>
                    <div class="visual-title">${el.title}</div>
                    ${button.getHtml()}
                  </div>
                  <div class="desc-field">
                    <div class="desc-title">${el.title}</div>
                    <div class="desc">
                      ${el.desc}
                    </div>
                  </div>
                </div>
              `;
          })}
        </div>
      ${footer}
    `;
  }
  addEvents() {
    const wrapper = document.getElementsByClassName('visaul-items');
    if (wrapper) {
      [...wrapper].forEach((el) => {
        (el as HTMLElement).onclick = () => {
          if (el.classList.contains('selected')) {
            el.classList.remove('selected');
          } else {
            const selected = document.getElementsByClassName('visaul-items selected');
            if (selected.length) selected[0].classList.remove('selected');
            el.classList.add('selected');
          }
        };
      });
    }
  }
}
