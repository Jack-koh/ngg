class Leaders {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
  }

  get instance() {
    return this.wrapperElement;
  }
}
