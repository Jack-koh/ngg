import { link } from 'utils/commonFunc';
import View from 'page/View';
import './button.scss';

class EnterButton extends View {
  className: string;
  constructor(public props: { url?: string; text: string; color?: string; className?: string }) {
    super();
    this.className = props.className ?? '';
  }

  generateMarkup() {
    const { url, text, color } = this.props;
    return link({
      url,
      child: `
        <div class="enter-button-wrapper ${this.className}" style="color: ${color ?? '#191919'}">
          ${text}
          <div class="section-button-sliding-bar"></div>
          <div class="section-button-arrow"></div>
        </div>
      `,
    });
  }

  addEvents() {}
}

export default EnterButton;
