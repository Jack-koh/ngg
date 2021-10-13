import View from "page/View";
import { subUrls } from "utils/urlData";
import LineMotion from "./lineMotion/lineMotion";
import { map, link } from "utils/commonFunc";

export default class Circles extends View {
  constructor(
    public props: {
      key: string;
      id: string;
      titleData: { subTitle: string; title: string; description: string };
      data: { img: string; text: string }[];
      circleDesc?: string;
    }
  ) {
    super();
  }

  generateMarkup() {
    const { key, data, id } = this.props;
    const lineData =
      key === "WHO WE ARE"
        ? ["left-top", "right-top", "left-bottom", "right-bottom"]
        : ["top", "left-bottom", "right-bottom"];
    const lines = new LineMotion(id, lineData).getHtml();

    return `
        ${map(subUrls[key], (el, i) => {
          return link({
            url: el.url,
            className: "sub-nav-circle-item",
            child: `
              <div class="circle-wrapper">
                <div class="sub-nav">
                  <img src="${data[i].img}" alt="about-icon" />
                </div>
              </div>
              <div class="nav-title">${data[i].text}</div>
            `,
          });
        })}
        ${lines}
    `;
  }
  addEvents() {}
}
