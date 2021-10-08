export default abstract class {
  params?: any;
  fragment: null | HTMLElement;
  markup: string;
  constructor(params?: any) {
    this.params = params;
    this.fragment = null;
    this.markup = "";
  }

  setTitle(title: string) {
    document.title = title;
  }

  async render(fragment: any, markup?: string) {
    if (markup) fragment.innerHTML = markup;
    this.fragment = fragment;
  }

  getHtml(): string {
    return this.markup;
  }

  public abstract events(): void;
}
