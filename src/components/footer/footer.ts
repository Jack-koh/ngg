class Footer {
  footerElement: HTMLElement;
  copyright: HTMLElement;
  footerLogo: HTMLElement;
  constructor() {
    this.footerElement = document.createElement('div');
    this.footerElement.id = 'footer-wrapper';

    this.copyright = document.createElement('div');
    this.copyright.id = 'footer-copyright';

    this.footerLogo = document.createElement('div');
    this.footerLogo.id = 'footer-logo';
  }
}
