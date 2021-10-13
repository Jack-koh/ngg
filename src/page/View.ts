import _ from "utils/lodash";

export default abstract class View {
  params?: any;
  constructor(params?: any) {
    this.params = params;
  }

  setTitle(title: string) {
    document.title = title;
  }

  render(fragment: any, markup?: string) {
    if (markup) fragment.innerHTML = markup;
  }

  getHtml(): string {
    _.debounce(this.addEvents, 0)();
    return this.generateMarkup();
  }

  public abstract generateMarkup(): string;
  public abstract addEvents(): void;
}
