import { Header, Footer, SubHeader } from 'page/common';
import EnterButton from 'components/common/button/button';
import View from 'page/View';
import './aboutUs.scss';

export class AboutUs extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();
    const Button = new EnterButton({ url: '/whoweare/history', text: 'EXPLORE' }).getHtml();
    return `
      ${header}
      ${subHeader}
        <div id="about-us-page">
          <div id="section1">
            <div id="section1In">
              <div class="left">
                <span class="subtitle">Introduce</span>
                <div class="hr">
                  <span class="hrLine">
                    <span class="innerCircle"></span>
                  </span>
                </div>
                <strong class="title">about us</strong>
                <p class="desc">
                  The National Geographic Society is a nonprofit scientific and educational
                  organization that pushes the boundaries of exploration to further our
                  understanding of our planet and empower us all to generate solutions for a
                  more sustainable future.
                </p>
                <p class="desc">
                  <span class="orange">For 130 years,</span> we’ve founded groundbreaking
                  scientists and <span class="orange">explorers and shared</span> their
                  findings with the world. We sponsored Hiram Bingham as he brought back
                  stories from Machu Picchu, documented Robert Ballard’s quest to find the
                  Titanic, and supported Jane Goodall’s study of chimpanzee behavior.
                </p>
              </div>
              <div class="upDownImg">
                <img src="/img/groundtree.png" alt="groundTree" />
              </div>
              <div class="right">
                <div class="numbering">
                  <span class="number">130</span
                  ><span class="gray">Years</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="number"
                    >13k</span
                  ><span class="gray">+</span><br />
                  <span>of&nbsp;&nbsp;exploration</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>grants&nbsp;&nbsp;awarded</span>
                </div>
                <div class="numbering"></div>
                <p class="desc">
                  Our explorers continue to push the boundaries of knowledge. To date, we’ve
                  given out more than
                  <span class="orange"
                    >13,000 grants to scientists and conservationists</span
                  >
                  whose work is making a significant difference in the world.<br /><br />
            
                  We support critical projects like the Big Cats Initiative,and the Pristine
                  Seas project.
                </p>
              </div>
              <div class="yellowBarField">
                <div class="yellowBar"></div>
              </div>
            </div>
          </div>

          <div id="section2">
            Working for a Planet in Balance
          </div>

          <div id="section3">
            <div id="section3In">
              <div id="historyVideo">
                <div id="videoFrame">
                  <div id="video">
                    <video controls poster="/img/posterVideoIntro.jpg">
                      <source src="/video/videoplayback.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div id="textFrame">
                  <span class="subtitle">National Geographic History</span>
                  <div class="hr">
                    <span class="hrLine">
                      <span class="innerCircle"></span>
                    </span>
                  </div>
                  <strong class="title">travel 130 years</strong>
                  <div class="yellowBarField">
                    <div class="yellowBar"></div>
                  </div>
                  <p class="desc">
                    And with our planet’s future at stake, we’re focused on the guardians of
                    that future: our children. Our education programs give teachers the
                    tools they need to engage students of all ages, reveal our
                    interconnected world, and inspire new generations of responsible
                    citizens,explorers, and changemakers.
                  </p>
                  <p class="desc">
                    We’ve been making discoveries—and making an impact— for 130 years. Now
                    you can
                    <span class="orange">explore this fascinating history</span> firsthand
                    with a new, interactive timeline that takes you behind the scenes
                    through rare video footage, photos, artifacts, and inside stories.
                  </p>
                  ${Button}
                </div>
              </div>
            </div>
          </div>
        </div>
      ${footer}
    `;
  }

  addEvents() {}
}
