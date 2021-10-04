import './modal.scss';

class Modal {
  wrapperElement: HTMLElement;
  contentElement: HTMLElement;
  modalHeader: HTMLElement;
  cancleButton: HTMLImageElement;
  constructor(data: { year: string; title: string; desc: string; img: string }) {
    const { year, title, desc, img } = data;
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'modal-wrapper';

    this.contentElement = document.createElement('div');
    this.contentElement.id = 'modal-content-wrapper';
    this.modalHeader = document.createElement('div');
    this.modalHeader.id = 'modal-header';
    this.modalHeader.innerHTML = `
      <img src="/img/logob.png" alt="logo" />
    `;

    this.cancleButton = document.createElement('img');
    this.cancleButton.id = 'cancle-modal-button';
    this.cancleButton.src = '/img/cancle.jpg';
    this.cancleButton.alt = 'cancle';
    this.cancleButton.onclick = () => {
      const body = document.querySelector('body') as HTMLElement;
      body.removeChild(this.wrapperElement);
    };

    this.modalHeader.appendChild(this.cancleButton);
    this.contentElement.innerHTML = `
      <div id="modal-content">
        <div id="image-field">
          <img src=/${img}.jpg alt="timline" />
        </div>
        <div id="modal-conetent-context">
          <div class="year">${year}</div>
          <div class="title">${title}</div>
          <div class="content">${desc}</div>
        <div>
      </div>
    `;
    this.contentElement.prepend(this.modalHeader);
    this.wrapperElement.appendChild(this.contentElement);
  }
  render() {
    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(this.wrapperElement);
  }
}

export default Modal;
