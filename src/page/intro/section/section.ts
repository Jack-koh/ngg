import _ from "utils/lodash";
import { mainUrls } from "utils/urlData";
import EnterButton from "components/common/button/button";
import View from "page/View";
import "./section.scss";
import "./sectionRP.scss";

type Data = {
  id: string;
  index: number;
  subtitle: string;
  title: string;
  description: string;
};

export default class Section extends View {
  constructor(public data: Data) {
    super();
    const { id, subtitle, title, description } = this.data;

    // if (id === "section-01") {
    //   utils.fadingBackground(this.sectionElement);
    //   utils.circleAnimation(this.sectionElement);
    //   utils.scrollAnimation(this.sectionElement);
    // } else {
    //   const inspection = new IntersectionObserver((entries, observer) => {
    //     const entry = entries[0];
    //     if (!entry.isIntersecting) return;
    //     const { target } = entry;
    //     entry.target.classList.add("show");
    //     observer.unobserve(target);
    //   });
    //   inspection.observe(this.titleElement);
    //   const button = new EnterButton({
    //     url: mainUrls[data.index - 1].url,
    //     text: "ENTER",
    //   }).instance;
    //   this.titleElement.appendChild(button);
    // }

    // if (id === "section-03") utils.videoBackground(this.sectionElement);
  }

  getHtml() {
    const data = this.data;
    return `
      <section id=${data.id} class="intro-section">
        <div class="section-title-field field-${data.id}">
          <div class="subtitle">
            ${data.subtitle}
          </div>
          <div>
            ${data.title}
          </div>
          <div class="description">
            ${data.description}
          </div>
        </div>
      </section>
    `;
  }

  events() {}
}

const utils = {
  scrollAnimation(target: HTMLElement) {
    const scrollElement = document.createElement("div");
    scrollElement.id = "scroll-element-wrapper";
    scrollElement.innerHTML = `
        <div class="scroll-text">SCROLL</div>
        <div id="scroll-animation-wrapper">
            <div class="down-scroll"></div>
        </div>
    `;
    target.appendChild(scrollElement);
  },

  fadingBackground(target: HTMLElement) {
    const backgrounds = [
      "mainVisual_011",
      "mainVisual_012",
      "mainVisual_013",
      "mainVisual_014",
    ];
    const bgElementsWrapper = document.createElement("div");
    bgElementsWrapper.id = "section-01-bg-wrapper";
    backgrounds.forEach((bg, index) => {
      const bgboard = document.createElement("div");
      bgboard.classList.add("background-item", bg);
      bgboard.style.opacity = index === 0 ? "1" : "0";
      bgElementsWrapper.appendChild(bgboard);
    });
    target.prepend(bgElementsWrapper);

    setInterval(() => {
      const bgItems = [
        ...bgElementsWrapper.getElementsByClassName("background-item"),
      ];
      (bgItems[0] as HTMLElement).style.opacity = "0";
      (bgItems[1] as HTMLElement).style.opacity = "1";
      const append = _.debounce(() => {
        bgElementsWrapper.appendChild(bgItems[0]);
      }, 4000);
      append();
    }, 7000);
  },
  circleAnimation(target: HTMLElement) {
    const circleElementWrapper = document.createElement("div");
    circleElementWrapper.id = "animation-circle-wrapper";
    [...new Array(3)].forEach((_, index: number) => {
      const circleItem = document.createElement("div");
      circleItem.classList.add("circle-item", `circle-${index}`);
      circleElementWrapper.appendChild(circleItem);
    });

    target.appendChild(circleElementWrapper);
  },
  videoBackground(target: HTMLElement) {
    const video = document.createElement("video");
    video.classList.add("video-background");
    video.autoplay = true;
    video.preload = "auto";
    video.muted = true;
    video.loop = true;

    const source = document.createElement("source");
    source.src = "/img/earth.mp4";
    video.appendChild(source);
    target.appendChild(video);
  },
};

// class Section01 extends Section {
//   constructor(data: Data) {
//     super(data);
//   }
// }
