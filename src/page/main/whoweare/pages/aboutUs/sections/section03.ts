import EnterButton from 'components/common/button/button';
import './section03.scss';
class AboutUsSection03 {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'section3';
    new Promise((resolve) => {
      resolve(
        (this.wrapperElement.innerHTML = `
          <div id="section3In">
            <div id="historyVideo">
              <div id="videoFrame">
                <div id="video">
                  <video controls poster="/img/images/posterVideoIntro.jpg">
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
                  And with our planet’s future at stake, we’re focused on the guardians of that
                  future: our children. Our education programs give teachers the tools they need to
                  engage students of all ages, reveal our interconnected world, and inspire new
                  generations of responsible citizens,explorers, and changemakers.
                </p>
                <p class="desc">
                  We’ve been making discoveries—and making an impact— for 130 years. Now you can
                  <span class="orange">explore this fascinating history</span> firsthand with a new,
                  interactive timeline that takes you behind the scenes through rare video footage,
                  photos, artifacts, and inside stories.
                </p>
              </div>
            </div>
          </div>
        `)
      );
    }).then(() => {
      const textFrame = document.getElementById('textFrame') as HTMLElement;
      const button = new EnterButton({ url: '/whoweare/history', text: 'EXPLORE' }).instance;
      textFrame.appendChild(button);
    });
  }
  get instance() {
    return this.wrapperElement;
  }
}

export default AboutUsSection03;
