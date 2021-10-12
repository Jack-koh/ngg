import { link } from "utils/commonFunc";
import { subUrls } from "utils/urlData";
import View from "page/View";
import "./CardNavigator.scss";

class CardNavigator extends View {
  constructor(
    public props: {
      key: string;
      id: string;
      data: { img: string; text: string; desc: string }[];
    }
  ) {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const { id, key, data } = this.props;
    this.markup = `
      <div id="${id}" class="sub-card-nav-wrapper">
        ${subUrls[key]
          .map((el, i) => {
            return `
            <a href="${el.url}" class="sub-nav-card-item">
              <div class="card-item ${data[i].img}">
                <div class="hover-color">
                  <div class="top-move">
                    <div class="number-icon">
                      <p>
                        <img src="/img/cateIcon.png" alt="number-icon"/>
                      </p>
                      <p class="number">${i + 1}</p>
                    </div>
                    <h3>${data[i].text}</h3>
                  </div>

                  <div class="vertical-bar"></div>

                  <p class="desc">
                    ${data[i].desc}
                  </p>
                </div>
              </div>
            </a>
          `;
          })
          .join("")}
      </div>
    `;
  }
  addEvents() {}
}

export default CardNavigator;
