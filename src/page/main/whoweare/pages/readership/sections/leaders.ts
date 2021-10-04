// import { link } from 'utils/commonFunc';
import './leaders.scss';
class Leaders {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'about-us-readers-wrapper';

    const data = [
      {
        name: 'Michael Ulica',
        duty: 'Interim President and CEO',
        url: '/img/images/leaders/MichaelUlica.jpg',
      },
      { name: 'Jonathan Baillie', duty: 'Chief Scientist and Senior Vice President', url: '' },
      { name: 'Emma Carrasco', duty: 'Chief Marketing and Engagement Officer', url: '' },
      { name: 'Leora Hanser', duty: 'Senior Vice President, Partnerships', url: '' },
      { name: 'Tara Bunch', duty: 'Chief Administrative Officer', url: '' },
      { name: 'Angelo Grima', duty: 'Executive Vice President, General Counsel', url: '' },
      { name: 'Yvonne Perr', duty: 'Executive Director of Human Resources', url: '' },
      { name: 'Dave Schacht', duty: 'Vice President, Global Initiatives', url: '' },
    ];
    const list = () => {
      return data.map((item) => {
        return `
          <li>
            <div class="leaderBox">
              <div class="imgArea" onclick="(function() { console.log('check') })()">
                <div class="image-content" title="MichaelUlica">
                  <img src="${item.url}" alt="${item.name}" />
                  <span class="colorOver"> </span>
                </div>
              </div>
              <div class="textArea">
                <span class="exName"> ${item.name} </span><br />
                <span class="research"> ${item.duty} </span>
              </div>
            </div>
          </li>
        `;
      });
    };
    this.wrapperElement.innerHTML = `
      <div id="title">
        <span class="subtitle">Meet our leaders</span>
        <div class="hr">
          <span class="hrLine">
            <span class="innerCircle"></span>
          </span>
        </div>
        <strong class="title">senior team</strong>
      </div>
      <ul id="leaders-list">
        ${list().join('')}
      </ul>
    `;
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default Leaders;
