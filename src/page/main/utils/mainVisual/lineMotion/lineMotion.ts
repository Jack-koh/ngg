import './lineMotion.scss';

class LineMotion {
  motionElement: HTMLElement;
  constructor(id: string, lineData: string[]) {
    this.motionElement = document.createElement('div');
    this.motionElement.id = 'visual-line-motion';
    this.motionElement.classList.add(id);

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
