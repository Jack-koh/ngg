import View from "page/View";
import "./lineMotion.scss";

export default class LineMotion extends View {
  constructor(public id: string, public lineData: string[]) {
    super();
  }

  generateMarkup() {
    return `
      <div id="visual-line-motion" class="${this.id}">
        ${this.lineData
          .map((el) => {
            return `
              <div id="${el}" class="quarter">
                <div class="line-wrap">
                  <div class="line"></div>
                </div>
                <div class="circle-wrap">
                  <div class="small-circle">
                  <p></p>
                  </div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  addEvents() {}
}
