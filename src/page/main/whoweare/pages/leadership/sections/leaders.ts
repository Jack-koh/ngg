import './leaders.scss';
class Leaders {
  wrapperElement: HTMLElement;
  data: { name: string; duty: string; url: string }[];
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'about-us-readers-wrapper';
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
      <div class="list-wrapper">
        <ul id="leaders-list">
          ${this.list().join('')}
        </ul>
      </div>
    `;
  }

  list() {
    return this.data.map((item) => {
      return `
        <li>
          <div class="leaderBox">
            <div class="imgArea" onclick="(function() {
              const url = '/whoweare/leadership/leaders';
              const state = { pathname: url, previousPath: window.location.pathname };
              history.pushState(state, 'ngg-/whoweare/leadership/leaders', url);
              window.dispatchEvent(new Event('popstate'));
            })()">
              <div class="image-content" title="MichaelUlica">
                <img src="${item.url}" alt="${item.name}" />
                <span class="colorOver"> </span>
              </div>
            </div>
            <div class="textArea">
              <div class="exName"> ${item.name} </div>
              <div class="research"> ${item.duty} </div>
            </div>
          </div>
        </li>
      `;
    });
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default Leaders;
