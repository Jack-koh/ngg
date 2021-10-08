import Header from "components/header/mainHeader/mainheader";
import Footer from "components/footer/footer";
import Section from "./section/Section";
import data from "./data";
import View from "page/View";
import ScrollNav from "./scrollNav/ScrollNav";

import "./intro.scss";

class IntroPage extends View {
  fragment: HTMLDivElement;
  markup: string;
  constructor(params: any) {
    super(params);
    this.fragment = document.createElement("div");
    this.fragment.id = "intro-page-wrapper";
    this.markup = "";

    this.generateMarkup();
    this.render(this.fragment, this.getHtml());
  }

  generateMarkup() {
    let html = "";
    data.map((item) => (html += new Section(item).getHtml()));
    html += new ScrollNav().getHtml();
    this.markup = html;
  }

  events() {}

  // get instance() {
  //   const header = new Header("sticky").instance;
  //   const footer = new Footer().instance;
  //   return [header, this.fragment, footer];
  // }
}

export default IntroPage;
// 버튼들
// const sideScrollBtns = document.createElement("div");
// sideScrollBtns.id = "scroll-button-wrapper";

// scrollData.forEach((scrollBtn, index) => {
//   const item = document.createElement("div");
//   item.classList.add("scroll-button", scrollBtn);
//   item.style.width = "40px";
//   item.style.height = "40px";

//   const sectionCollection = document.getElementsByClassName(
//     "intro-section"
//   );
//   item.addEventListener("click", () => {
//     const sectionItem = [...sectionCollection][index] as HTMLElement;
//     window.scrollTo({
//       left: 0,
//       top: sectionItem.offsetTop,
//       behavior: "smooth",
//     });
//   });
//   sideScrollBtns.appendChild(item);
// });

// this.fragment.appendChild(sideScrollBtns);
