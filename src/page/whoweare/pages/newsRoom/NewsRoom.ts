import { Header, Footer, SubHeader } from 'page/common';
import MainVisual from './mainVisual/MainVisual';
import Content from './content/Content';
import View from 'page/View';

export class NewsRoom extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    // const Button = new EnterButton({ url: '/whoweare/history', text: 'READ MORE' }).getHtml();
    const mainVisual = new MainVisual().getHtml();
    const content = new Content().getHtml();

    return `
      ${header}
      ${subHeader}
      ${mainVisual}
      ${content}
      ${footer}
    `;
  }

  addEvents() {}
}
