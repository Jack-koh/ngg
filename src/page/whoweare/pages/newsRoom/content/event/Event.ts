import View from 'page/View';
import { map, link } from 'utils/commonFunc';
import './Event.scss';

class Event extends View {
  constructor(
    public data: {
      screen: {
        visual: { title: string; url: string; child: string };
        title: { url: string; child: string };
        desc: { url: string; child: string };
      };
      list: { url: string; date: string; imgChild: string; strongChild: string }[];
    }
  ) {
    super();
  }

  generateMarkup() {
    const { screen, list } = this.data;
    return `
      <ul class="eventEx">
        <li>
          <div class="left">
            <div class="screen">
              ${link({ url: screen.visual.url, child: screen.visual.child })}
            </div>
            <div class="leftText">
              <span class="gray">${screen.visual.title}</span><br>
              <strong>
                ${link({ url: screen.title.url, child: screen.title.child })}
              </strong>
              <p class="desc">
                ${link({ url: screen.desc.url, child: screen.desc.child })}
              </p>
            </div>
          </div>
          <div class="right">
            <ul>
              ${map(list, (item: any) => {
                return `
                  <li>
                    <div class="listImg1">
                      ${link({ url: item.url, child: item.imgChild })}
                    </div>
                    <div class="listText1">
                      <p>${item.date}</p>
                      ${link({ url: item.url, child: item.strongChild })}
                    </div>
                  </li>
                `;
              })}
            </ul>
          </div>
        </li>
      </ul>
    `;
  }
  addEvents() {}
}

export default Event;
