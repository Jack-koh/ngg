import _ from 'utils/lodash';

export default abstract class {
  params?: any;
  markup: string;
  constructor(params?: any) {
    this.params = params;
    this.markup = '';
  }

  setTitle(title: string) {
    document.title = title;
  }

  render(fragment: any, markup?: string) {
    if (markup) fragment.innerHTML = markup;
  }

  getHtml(): string {
    _.debounce(this.addEvents, 0)();
    return this.markup;
  }

  public abstract generateMarkup(): void;
  public abstract addEvents(): void;
}
