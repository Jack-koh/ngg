import View from 'page/View';
import HeadLine from './headline/HeadLine';
import News from './news/News';
import Event from './event/Event';
import { release, blog } from './newsData';
import { link } from 'utils/commonFunc';
import eventData from './eventData';
import './Content.scss';

class Content extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const bl = {
      headLine: new HeadLine('ns-hl-inside', 'INSIDE NAT GEO BLOG').getHtml(),
      contents: new News('ns-hl-inside', [...blog, ...blog]).getHtml(),
    };

    const rel = {
      headLine: new HeadLine('ns-hl-press', 'PRESS RELEASES').getHtml(),
      contents: new News('ns-hl-press', [...release, ...release]).getHtml(),
    };

    const events1 = new Event(eventData[0]).getHtml();
    const events2 = new Event(eventData[1]).getHtml();

    return `
      <div id="ns-section2">
        <div id="ns-section2In">
          <div id="container">
            <div class="news">
              ${bl.headLine}
              ${bl.contents}
            </div>

            <div class="news">
              ${rel.headLine}
              ${rel.contents}
            </div>

            <div id="ns-event">
              <h3>Current Exhibition</h3>
              ${events1}
              <h3>Up Comming Event</h3>
              ${events2}
            </div>

            <div id="banner">
              <p id="number">100%</p>
              <p class="desc">
                of the proceeds from exhibitions and events goes back to the National Geographic Society’s nonprofit educational,
                conservation, and scientific work.
              </p>
            </div>

            <div id="advertisement">
              <ul>
                <li>
                  <div class="image">
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<img src="/public/img/images/annualpass.jpg" alt="passTicket" />',
                    })}
                  </div>
                  
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<p class="desc">Get an Annual Pass and visit the Museum FREE for one year</p>',
                    })}
                  
                </li>
                <li>
                  <div class="image">
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<img src="/public/img/images/package.jpg" alt="package" />',
                    })}
                  </div>
                  
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<p class="desc">Create Your Own Package</p>',
                    })}
                 
                </li>
                <li>
                  <div class="image">
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<img src="/public/img/images/photopackage.jpg" alt="photopackage" />',
                    })}
                  </div>
                  
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<p class="desc">Masters of Photography Package</p>',
                    })}
                  
                </li>
                <li>
                  <div class="image">
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<img src="/public/img/images/photopackage.jpg" alt="photopackage" />',
                    })}
                  </div>
                  
                    ${link({
                      url: 'exhibition/visitorplan',
                      child: '<p class="desc">Masters of Photography Package</p>',
                    })}
               
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
    `;
  }

  addEvents() {}
}

export default Content;
