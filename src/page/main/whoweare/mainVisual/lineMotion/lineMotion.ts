import './lineMotion.scss';

class LineMotion {
  motionElement: HTMLElement;
  constructor() {
    this.motionElement = document.createElement('div');
    this.motionElement.id = 'line-motion';

    const lineData = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

    lineData.forEach((item) => {
      const lineItem = document.createElement('div');
      lineItem.classList.add('quarter');
      lineItem.id = item;
      lineItem.innerHTML = `
            <div class="line-wrap">
              <div class="line"></div>
            </div>
            <div class="circle-wrap">
              <div class="small-circle">
              <p></p>
              </div>
            </div>
        `;

      this.motionElement.appendChild(lineItem);
    });
  }

  get instance() {
    return this.motionElement;
  }
}

export default LineMotion;
