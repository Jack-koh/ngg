import View from "page/View";
import "./ScrollNav.scss";

export default class ScrollNav extends View {
  getHtml() {
    return `
      <div id="scroll-button-wrapper">
        ${[...new Array(5)]
          .map((_, i) => {
            return `<div class="scroll-button scrollbtn0${i + 1}"></div>`;
          })
          .join("")}
      </div>
    `;
  }

  events() {
    const navItems = document.getElementsByClassName("scroll-button");
    console.log(navItems);
  }
}
