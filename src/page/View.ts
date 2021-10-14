import * as Pages from 'page';
import _ from 'utils/lodash';

export default abstract class View {
  setTitle(title: string) {
    document.title = title;
  }
  render(fragment: any, markup?: string) {
    if (markup !== undefined) fragment.innerHTML = markup;
  }
  getHtml(): string {
    _.debounce(this.addEvents, 0)();
    return this.generateMarkup();
  }
  public abstract generateMarkup(): string;
  public abstract addEvents(): void;
}
