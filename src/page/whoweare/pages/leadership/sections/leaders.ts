import { map, link } from 'utils/commonFunc';
import View from 'page/View';
import './leaders.scss';

export class Leaders extends View {
  data: { name: string; duty: string; url: string }[];
  constructor() {
    super();
    this.data = [
      {
        name: 'Michael Ulica',
        duty: 'Interim President and CEO',
        url: '/img/images/leaders/MichaelUlica.jpg',
      },
      {
        name: 'Jonathan Baillie',
        duty: 'Chief Scientist and Senior Vice President',
        url: '/img/images/leaders/JonathanBaillie.jpg',
      },
      {
        name: 'Emma Carrasco',
        duty: 'Chief Marketing and Engagement Officer',
        url: '/img/images/leaders/EmmaCarrasco.jpg',
      },
      {
        name: 'Leora Hanser',
        duty: 'Senior Vice President, Partnerships',
        url: '/img/images/leaders/LeoraHanser.jpg',
      },
      {
        name: 'Tara Bunch',
        duty: 'Chief Administrative Officer',
        url: '/img/images/leaders/TaraBunch.jpg',
      },
      {
        name: 'Angelo Grima',
        duty: 'Executive Vice President, General Counsel',
        url: '/img/images/leaders/AngeloGrima.jpg',
      },
      {
        name: 'Yvonne Perr',
        duty: 'Executive Director of Human Resources',
        url: '/img/images/leaders/YvonnePerry.jpg"',
      },
      {
        name: 'Dave Schacht',
        duty: 'Vice President, Global Initiatives',
        url: '/img/images/leaders/DaveSchacht.jpg"',
      },
    ];
  }

  generateMarkup() {
    return `
      <div id="about-us-readers-wrapper">
        <div id="title">
          <span class="subtitle">Meet our leaders</span>
          <div class="hr">
            <span class="hrLine">
              <span class="innerCircle"></span>
            </span>
          </div>
          <strong class="title">senior team</strong>
        </div>
        <div class="list-wrapper">
          <ul id="leaders-list">
            ${map(this.data, (item, i) => {
              return `
                <li>
                  <div class="leaderBox">
                    ${link({
                      url: `/whoweare/leadership/leaders/${i}`,
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
                      <div class="research"> ${item.duty} </div>
                    </div>
                  </div>
                </li>
              `;
            })}
          </ul>
        </div>
      </div>
    `;
  }

  addEvents() {}
}

export default Leaders;
