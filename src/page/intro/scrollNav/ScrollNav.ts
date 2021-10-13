import View from "page/View";
import { map } from "utils/commonFunc";
import "./ScrollNav.scss";

export default class ScrollNav extends View {
  constructor() {
    super();
  }
  generateMarkup() {
    return `
      <div id="scroll-button-wrapper">
        ${map(
          [...new Array(5)],
          (_, i) => `<div class="scroll-button scrollbtn0${i + 1}"></div>`
        )}
      </div>
    `;
  }

  addEvents() {
    const sections = document.getElementsByClassName("intro-section");
    const buttons = document.getElementsByClassName("scroll-button");

    [...buttons].forEach((el, i) => {
      el.addEventListener("click", () => {
        const section = sections[i] as HTMLElement;
        window.scrollTo({
          left: 0,
          top: section.offsetTop,
          behavior: "smooth",
        });
      });
    });
  }
}
