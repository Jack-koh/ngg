import Router from 'router/Router';
import View from 'page/View';
import { v4 as uuid } from 'uuid';
import './commonFunc.scss';

export class Link extends View {
  private uuid: string;
  private className: string;
  constructor(public data: { url?: string; child?: string; className?: string }) {
    super();
    this.uuid = uuid();
    this.className = data.className ?? '';
  }

  generateMarkup() {
    return `
      <div class="nav__link ${this.className} ${this.data.url ? 'link' : 'disabled'}" data-id="${this.uuid}">
        ${this.data.child ?? ''}
      </div>
    `;
  }

  addEvents = () => {
    const navLink = document.querySelector(`[data-id="${this.uuid}`);
    if (navLink) {
      (navLink as HTMLElement).onclick = () => {
        if (this.data.url) {
          const state = { pathname: this.data.url, previousPath: window.location.pathname };
          history.pushState(state, '', this.data.url);
          window.dispatchEvent(new Event('popstate'));
        }
      };
    }
  };
}

export const link = (data: { className?: string; url?: string; child?: string }) => {
  return new Link(data).getHtml();
};

export const pushState = (url: string) => {
  const state = { pathname: url, previousPath: window.location.pathname };
  history.pushState(state, '', url);
  window.dispatchEvent(new Event('popstate'));
};

// Markup Return
export const map = <T>(arr: T[], f?: (arg: T, index: number) => string) => {
  if (f) return arr.map(f).join('');
  return arr.join('');
};

export const con = (arg: { value: boolean; markup: string }): string => {
  if (!!arg.value) return arg.markup;
  return '';
};
