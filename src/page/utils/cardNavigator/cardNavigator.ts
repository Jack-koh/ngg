import { con, map, link } from "utils/commonFunc";
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
  }

  generateMarkup() {
    const { id, key, data } = this.props;
    return `
      <div id="${id}" class="sub-card-nav-wrapper">
        ${map(subUrls[key], (el, i) => {
          return link({
            url: el.url,
            className: "sub-nav-card-item",
            child: `
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
            `,
          });
        })}
      </div>
    `;
  }
  addEvents() {}
}

export default CardNavigator;
