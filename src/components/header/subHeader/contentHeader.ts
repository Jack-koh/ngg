import './contentHeader.scss';
import { mainUrls, subUrls } from 'utils/urlData';
import { link } from 'utils/commonFunc';

class ContentHeader {
  wrapperElement: HTMLElement;
  path: { main: string; sub: string };
  constructor() {
    const locations = history.state.pathname.split('/');
    locations.shift();
    this.path = (() => {
      let main = '메인';
      let sub = '서브';
      // URL DATA 의 타이을값으로 치환해줘야함
      if (locations[0] === 'whoweare') main = 'WHO WE ARE';
      if (locations[1] === 'aboutus') sub = 'ABOUT US';
      return { main, sub };
    })();
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'siteWrap';

    new Promise((resolve) => {
      resolve(
        (this.wrapperElement.innerHTML = `
            <div id="siteLocationIn">
                <div id="home" class="lac">
                    <a href="/" title="home">
                        <img src="../../img/subHeader/home.jpg.png" alt="homeBtn" />
                    </a>
                </div>
                <dl id="way1-container">
                    <dt id="way1">
                        <span class="text">${this.path.main}</span>
                        <span class="img"></span>
                    </dt>
                    <dd id="main-locate" class="sublocate">
                    </dd>
                </dl>
                <dl id="way2-container">
                    <dt id="way2">
                        <span class="text">${this.path.sub}</span>
                        <span class="img"></span>
                    </dt>
                    <dd id="sub-locate" class="sublocate">
                    </dd>
                </dl>
            </div>
        `)
      );
    }).then(() => {
      this.addLocations();
      this.toggle();
    });
  }

  addLocations() {
    const mainTarget = document.getElementById('main-locate') as HTMLElement;
    const subTarget = document.getElementById('sub-locate') as HTMLElement;

    mainUrls.forEach((nav) => {
      const item = document.createElement('div');
      item.classList.add('nav-item');
      item.textContent = nav.title;
      link(item, nav.url);
      mainTarget.appendChild(item);
    });

    subUrls[this.path.main].forEach((nav) => {
      const item = document.createElement('div');
      item.classList.add('nav-item');
      item.textContent = nav.title;
      link(item, nav.url);
      subTarget.appendChild(item);
    });
  }

  toggle() {
    const mainButton = <HTMLElement>document.getElementById('way1');
    const mainBtnContainer = <HTMLElement>document.getElementById('way1-container');
    const subButton = <HTMLElement>document.getElementById('way2');
    const subBtnContainer = <HTMLElement>document.getElementById('way2-container');
    mainButton.onclick = () => {
      mainBtnContainer.classList.toggle('open');
      if (subBtnContainer.classList.contains('open')) subBtnContainer.classList.remove('open');
    };
    subButton.onclick = () => {
      subBtnContainer.classList.toggle('open');
      if (mainBtnContainer.classList.contains('open')) mainBtnContainer.classList.remove('open');
    };
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default ContentHeader;
