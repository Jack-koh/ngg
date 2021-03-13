import { link } from 'utils/commonFunc';
import { subUrls } from 'utils/urlData';
import './subNavigator.scss';

class SubNavigator {
  subNavigatorElement: HTMLDivElement;
  columnsElement: HTMLDivElement;
  subNavigatorList: HTMLElement[];
  constructor() {
    this.subNavigatorElement = document.createElement('div');
    this.subNavigatorElement.id = 'sub-navigator';

    this.columnsElement = document.createElement('div');
    this.columnsElement.id = 'sub-nav-column-list';

    this.subNavigatorList = [];
    for (const key in subUrls) {
      const columnWrapper = document.createElement('ul');
      columnWrapper.id = key;
      columnWrapper.classList.add('nav-column');
      subUrls[key].forEach((nav) => {
        const item = document.createElement('li');
        item.classList.add('column-item');
        item.textContent = nav.title;
        link(item, nav.url);
        columnWrapper.appendChild(item);
      });

      this.subNavigatorList.push(columnWrapper);
    }
  }

  get instance(): HTMLDivElement {
    this.subNavigatorList.forEach((item) => this.columnsElement.appendChild(item));
    this.subNavigatorElement.appendChild(this.columnsElement);
    return this.subNavigatorElement;
  }
}

export default SubNavigator;
