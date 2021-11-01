import View from 'page/View';
import { map, link } from 'utils/commonFunc';
import { data } from './data';
import People from './People';
import './Summary.scss';

class Summary extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    return `
      <div id="explorer-explorers-content-summary">
        <div id="explorer-explorers-content-summary-inner">
          <div class="title">
            <h3>FIND AN EXPLORER</h3>
            <div class="bar"></div>
            <p class="subtitle">
              Navigate the world with National Geographic scientists, conservationists and
              storytellers—innovators who are making a difference and changing the world.
            </p>
          </div>

          <div id="searchArea">
            <div id="exSearch">
              <div id="box1" class="boxes">
                <p class="sign sign1">
                  <input id="cate1" type="text" value="All projects" readonly />
                  <span class="img">
                    <img src="/img/subHeader/burgerBar.png" alt="menu" />
                  </span>
                </p>
                <div id="choose1" class="choose">
                <input id="all" type="text" value="All projects" readonly />
                  <input id="active" type="text" value="Active projects" readonly />
                </div>
              </div>

              <div id="box2" class="boxes">
                <p class="sign sign2">
                  <input id="cate2" type="text" />
                </p>
              </div>

              <div id="allex" class="lac">
                <img src="/img/all.jpg" alt="homeBtn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addEvents() {
    const box1 = document.getElementById('box1') as HTMLElement;
    const cate1 = document.getElementById('cate1') as HTMLInputElement;
    const choose1 = document.getElementById('choose1') as HTMLElement;
    const targetEl = document.getElementById('explorers-list') as HTMLElement;
    const inputs1 = choose1.getElementsByTagName('input');

    for (const item of inputs1) {
      item.onclick = (e: any) => {
        const { target } = e;
        cate1.value = target.value;
        const filtered = target.value === 'Active projects' ? data.filter((el) => el.type === target.value) : data;
        const people = new People(filtered);
        targetEl.innerHTML = people.getHtml();
      };
    }

    box1.onclick = () => {
      if ([...box1.classList].includes('on')) {
        box1.classList.remove('on');
      } else {
        box1.classList.add('on');
      }
    };

    const cate2 = document.getElementById('cate2') as HTMLInputElement;
    cate2.onkeyup = (e) => {
      const { code, target } = e;
      if (code === 'Enter') {
        const filtered = data.filter((el) => {
          const value = (target as HTMLInputElement).value.toLocaleLowerCase().replace(/\s/g, '');
          return el.name.toLocaleLowerCase().replace(/\s/g, '').includes(value);
        });
        const people = new People(filtered);
        targetEl.innerHTML = people.getHtml();
      }
    };
  }
}

export default Summary;
