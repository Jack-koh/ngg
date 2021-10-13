import { Header, Footer } from "page/common";
import CardNavigator from "../utils/cardNavigator/CardNavigator";
import MainVisual from "../utils/mainVisual/MainVisual";
import View from "page/View";

export class Explorer extends View {
  cards: string;
  mainVisual: string;
  constructor() {
    super();
    const key = "EXPLORER";
    const cardData = {
      key,
      id: "explorer-card-navigator",
      data: [
        {
          img: "mainCateFindAnExplorer",
          text: "Find an explorer",
          desc:
            "For 130 years, we’ve founded groundbreaking scientists and explorers and shared.",
        },
        {
          img: "mainCateFieldMap",
          text: "Field map",
          desc: "travel through 130 years of national geographic histry.",
        },
        {
          img: "mainCateExplorerBlog",
          text: "blog",
          desc:
            "International Council of Advisors,and Education Foundation Board ensure optimal impact of our programs.",
        },
      ],
    };

    const mainData = {
      key,
      id: "explorer-main-visual",
      titleData: {
        subTitle: "Impact for the planet",
        title: "EXPLORER",
        description:
          "We fund and support groundbreaking scientists, conservationists, educators, and storytellers.",
      },
      data: [
        { img: "/img/find.png", text: "Explorer" },
        { img: "/img/fieldmap.png", text: "Field map" },
        { img: "/img/blog.png", text: "Blog" },
      ],
      circleDesc: "MAKING AN IMPACT FOR THE PLANET",
    };

    this.mainVisual = new MainVisual(mainData).getHtml();
    this.cards = new CardNavigator(cardData).getHtml();
  }

  generateMarkup() {
    const header = new Header("sticky").getHtml();
    const footer = new Footer().getHtml();

    return `
      ${header}
        <div id="explorer-page">
          ${this.mainVisual}
          ${this.cards}
        </div>
      ${footer}
    `;
  }

  addEvents() {}
}
