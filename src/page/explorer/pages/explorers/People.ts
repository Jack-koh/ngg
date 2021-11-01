import { map, link } from 'utils/commonFunc';
import View from 'page/View';
import './People.scss';

class People extends View {
  constructor(public data: { name: string; research: string; url: string; type?: string }[]) {
    super();
  }

  generateMarkup() {
    return `
      ${map(this.data, (item, i) => {
        return `
          <li>
            <div class="explorersBox">
              ${link({
                url: `/explorer/explorers/${i}`,
                child: `
                  <div class="imgArea">
                    <div class="image-content" title="${item.name}">
                      <img src="${item.url}" alt="${item.name}" />
                      <span class="colorOver"> </span>
                    </div>
                  </div>
                `,
              })}
              <div class="textArea">
                <div class="exName"> ${item.name} </div>
                <div class="research"> ${item.research} </div>
              </div>
            </div>
          </li>
        `;
      })}
    `;
  }

  addEvents() {}
}

export default People;
