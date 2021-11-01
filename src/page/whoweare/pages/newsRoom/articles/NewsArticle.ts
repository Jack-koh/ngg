import View from 'page/View';
import { Header, Footer, SubHeader } from 'page/common';
import Content from './Content';

export class NewsArticle extends View {
  constructor() {
    super();
  }
  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    const content = new Content().getHtml();
    return `
      ${header}
      ${subHeader}
      ${content}
      ${footer}
    `;
  }

  addEvents() {}
}
