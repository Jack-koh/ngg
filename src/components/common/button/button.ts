import { link } from "utils/commonFunc";
import View from "page/View";
import "./button.scss";

class EnterButton extends View {
  constructor(public props: { url?: string; text: string }) {
    super();
    this.generateMarkup();
  }

  generateMarkup() {
    const { url, text } = this.props;

    this.markup = link({
      url,
      child: `
        ${text}
        <div class="section-button-sliding-bar"></div>
        <div class="section-button-arrow"></div>
      `,
      className: "enter-button-wrapper",
    });
  }

  addEvents() {}
}

export default EnterButton;
