import View from 'page/View';
import './HeaderInfo.scss';

export default class HeaderInfo extends View {
  show: boolean;
  constructor() {
    super();
    this.show = false;
    this.generateMarkup();
  }

  generateMarkup() {
    this.markup = `
    <div id="header-info">
      <div id="description">
        <div id="finance">financial summery</div>
        <div id="cost">73,696</div>
      </div>
      <div id="info-button"><img src="/img/ico_plus.png" alt="info-icon" /></div>
      <div id="info-slider">
        <div id="headline">
          <h3>2017 financial summary</h3>
          <p class="text">(in thoudsands)</p>
        </div>
        <div id="expense">
          <h4>expense</h4>
          <p class="text">
            Scientific research and exploration, grants, and outreach<br />
            other educational activities
          </p>
        </div>
        <ul id="finance-cost">
          <li>
            <p class="total">
              <span class="left">Program Expense</span>
              <span class="right">$107,770</span>
            </p>
            <p>
              <span class="left">Scientific research</span>
              <span class="right">70,709</span>
            </p>
            <p>
              <span class="left">other educational activites</span>
              <span class="right">37,061</span>
            </p>
          </li>
          <li>
            <p class="total">
              <span class="left">Operating Loss</span>
              <span class="right">$107,770</span>
            </p>
            <p>
              <span class="left">Management and general Fundraising</span>
              <span class="right">29,782</span>
            </p>
            <p>
              <span class="left">Fundraising</span>
              <span class="right">15,630</span>
            </p>
          </li>
        </ul>
        <div id="diagram">
          <div>
            <p class="subject">2016 cash sources</p>
            <p class="img">
              <img src="/img/diagram01.jpg" alt="diagram01" />
            </p>
            <ul>
              <li>
                <p></p>
                <span>Joint Venture Partnership</span>
              </li>
              <li>
                <p></p>
                <span>Rent</span>
              </li>
              <li>
                <p></p>
                <span>Program Revenue</span>
              </li>
              <li>
                <p></p>
                <span>Endowment/Investment Draw</span>
              </li>
              <li>
                <p></p>
                <span>Contributions</span>
              </li>
            </ul>
          </div>
          <div>
            <p class="subject">2016 operationg</p>
            <p class="img">
              <img src="/img/diagram01.jpg" alt="diagram01" />
            </p>
            <ul>
              <li>
                <p></p>
                <span>Program Expense</span>
              </li>
              <li>
                <p></p>
                <span>Management and General</span>
              </li>
              <li>
                <p></p>
                <span>Fundraising</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="background-screen"></div>
      </div>
    </div>  
    `;
  }
  addEvents = () => {
    const headerInfo = document.getElementById('header-info');
    const infoButton = document.getElementById('info-button');
    const slider = document.getElementById('info-slider');
    if (infoButton && slider) {
      infoButton.addEventListener('click', () => {
        this.show = !this.show;
        slider.classList.remove(!this.show ? 'show' : 'none');
        slider.classList.add(this.show ? 'show' : 'none');
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 1024) {
          slider.classList.remove('show');
          this.show = false;
        }
      });
    }
  };
}
