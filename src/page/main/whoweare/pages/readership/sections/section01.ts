import './section01.scss';
class AboutUsSection01 {
  wrapperElement: HTMLElement;
  constructor() {
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = 'section1';
    this.wrapperElement.innerHTML = `
        <div id="section1In">
            <div class="left">
                <span class="subtitle">Introduce</span>
                <div class="hr">
                    <span class="hrLine">
                        <span class="innerCircle"></span>
                    </span>
                </div>
                <strong class="title">OUR LEADERSHIP</strong>
                <p class="desc">
                    The National Geographic Society is a nonprofit scientific and educational
                    organization that pushes the boundaries of exploration to further our understanding
                    of our planet and empower us all to generate solutions for a more sustainable
                    future.
                </p>
                <p class="desc">
                    <span class="orange">For 130 years,</span> we’ve founded groundbreaking scientists
                    and <span class="orange">explorers and shared</span> their findings with the world.
                    We sponsored Hiram Bingham as he brought back stories from Machu Picchu, documented
                    Robert Ballard’s quest to find the Titanic, and supported Jane Goodall’s study of
                    chimpanzee behavior.
                </p>
            </div>
            <div class="upDownImg">
                <img src="/img/3dcompass.png" alt="3dcompass" />
            </div>
            <div class="right">
                <div class="numbering">
                    <span class="number">130</span>
                    <span class="gray">Years</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="number">13k</span>
                    <span class="gray">+</span><br />
                    <span>of&nbsp;&nbsp;exploration</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>grants&nbsp;&nbsp;awarded</span>
                </div>
                <div class="numbering"></div>
                <p class="desc">
                    Our explorers continue to push the boundaries of knowledge. To date, we’ve given out
                    more than
                    <span class="orange">13,000 grants to scientists and conservationists</span> whose
                    work is making a significant difference in the world.<br /><br />

                    We support critical projects like the Big Cats Initiative,and the Pristine Seas
                    project.
                </p>
            </div>
            <div class="yellowBarField">
                <div class="yellowBar"></div>
            </div>
        </div>
    `;
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default AboutUsSection01;
