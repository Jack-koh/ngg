class Router {
  location: string;
  body: HTMLElement;
  page: HTMLElement | HTMLElement[] | null;
  constructor(public routes: any) {
    this.body = document.querySelector('body')! as HTMLElement;
    this.page = null;
    this.location = history.state?.pathname || '/';
    this.insertPageToDom();

    window.addEventListener('popstate', () => {
      this.location = history.state?.pathname || '/';
      this.excution('remove');
      this.insertPageToDom();
      window.scrollTo(0, 0);
    });
  }

  insertPageToDom() {
    const Page = this.routes[this.location];
    if (Page) {
      this.page = new Page().instance;
      this.excution('append');
    } else {
      this.page = null;
    }
  }

  excution(type: 'append' | 'remove') {
    if (type === 'remove') {
      this.body.innerHTML = '';
    } else {
      if (Object.hasOwnProperty.call(this.page, 'length')) {
        (this.page as HTMLElement[]).forEach((element) => {
          this.body.appendChild(element);
        });
      } else {
        this.body.appendChild(this.page as HTMLElement);
      }
    }
  }
}

export default Router;
