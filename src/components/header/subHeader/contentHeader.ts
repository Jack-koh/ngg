import './contentHeader.scss';
import { mainUrls, subUrls } from 'utils/urlData';
import { link } from 'utils/commonFunc';

class ContentHeader {
  wrapperElement: HTMLElement;
  path: { main: string; sub: string };
  constructor() {
    const locations = history.state?.pathname?.split('/') ?? [];
    locations.shift();
    this.path = (() => {
      let main = '메인';
      let sub = '서브';
      // URL DATA 의 타이을값으로 치환해줘야함
      if (locations[0] === 'whoweare') main = 'WHO WE ARE';
      if (locations[0] === 'explorer') main = 'EXPLORER';
      if (locations[0] === 'exhibition') main = 'EXHIBITION';
      if (locations[0] === 'project') main = 'PROJECT';
      if (locations[0] === 'impact') main = 'IMPACT';

      if (locations[1] === 'aboutus') sub = 'ABOUT US';
      if (locations[1] === 'history') sub = 'HISTORY';
      if (locations[1] === 'leadership') sub = 'LEADER SHIP';
      if (locations[1] === 'newsroom') sub = 'NEWS ROOM';

      if (locations[1] === 'explorers') sub = 'EXPLORERS';
      if (locations[1] === 'fieldmap') sub = 'FILED MAP';
      if (locations[1] === 'explorerblog') sub = 'EXPLORER BLOG';

      if (locations[1] === 'visitorplan') sub = 'VISITOR PLAN';
      if (locations[1] === 'exhibition') sub = 'EXHIBITION';
      if (locations[1] === 'event') sub = 'EVENT';

      if (locations[1] === 'beyondstone') sub = 'BEYOND STONE';
      if (locations[1] === 'bigcat') sub = 'BIG CAT';
      if (locations[1] === 'lastwild') sub = 'LAST WILD';
      if (locations[1] === 'yearofbird') sub = 'YEAR OF BIRD';
      if (locations[1] === 'pristineseas') sub = 'PRISTINE SEAS';
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
                        <img src="/img/home.png" alt="homeBtn" />
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
      const mainTarget = document.getElementById('main-locate') as HTMLElement;
      const subTarget = document.getElementById('sub-locate') as HTMLElement;
      if (mainTarget && subTarget) {
        this.addLocations(mainTarget, subTarget);
        this.toggle();
      }
    });
  }

  addLocations(mainTarget: HTMLElement, subTarget: HTMLElement) {
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
    const mainHeight = mainButton.nextElementSibling! as HTMLElement;

    const subButton = <HTMLElement>document.getElementById('way2');
    const subBtnContainer = <HTMLElement>document.getElementById('way2-container');
    const subHeight = subButton.nextElementSibling! as HTMLElement;
    const resetSub = () => {
      subHeight.style.height = '0px';
      subBtnContainer.classList.remove('open');
    };

    const resetMain = () => {
      mainHeight.style.height = '0px';
      mainBtnContainer.classList.remove('open');
    };

    mainButton.onclick = () => {
      mainBtnContainer.classList.toggle('open');
      const isOpen = mainBtnContainer.classList.contains('open');
      const subOpen = subBtnContainer.classList.contains('open');
      let height = '0px';
      isOpen ? (height = '200px') : (height = '0px');
      mainHeight.style.height = height;
      if (subOpen) resetSub();
    };
    subButton.onclick = () => {
      subBtnContainer.classList.toggle('open');

      const isOpen = subBtnContainer.classList.contains('open');
      const mainOpen = mainBtnContainer.classList.contains('open');
      let height = '0px';
      const adjustHeight = subUrls[this.path.main].length * 40;
      isOpen ? (height = `${adjustHeight}px`) : (height = '0px');
      subHeight.style.height = height;
      if (mainOpen) resetMain();
    };
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default ContentHeader;
