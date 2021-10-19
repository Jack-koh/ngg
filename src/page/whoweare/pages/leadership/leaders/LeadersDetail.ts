import { Header, Footer, SubHeader } from 'page/common';
// const subHeader = new SubHeader();
import View from 'page/View';
import { pushState } from 'utils/commonFunc';
import './LeadersDetail.scss';

export class LeadersDetail extends View {
  step: number;
  data: { name: string; duty: string; image: string; desc: string }[];
  constructor() {
    super();
    const location = history.state?.pathname.split('/') ?? null;
    const id = location ? location[location.length - 1] : 0;
    this.step = +id;
    this.data = [
      {
        name: 'MICHAEL ULICA',
        duty: 'Interim President And CEO',
        image: '/img/images/leaders/MichaelUlica01.jpg',
        desc: `Michael Ulica is the Interim President and CEO of the National Geographic Society, where he oversees the nonprofit’s vast activities globally. Since 2016, he has also served as the organization’s executive vice president, chief operations and financial officer responsible for all of the Society’s operational and administration functions. In his capacities, he leads the organization’s programmatic strategy; impact agenda; marketing, development and financial functions; and human resources, legal, technology, facilities and sustainability departments.</br></br> Ulica joined National Geographic in 2006 as the chief financial officer for National Geographic Ventures, the Society’s taxable subsidiary. He was named the Society’s deputy chief financial officer in 2012 and the chief financial officer in 2014.</br></br>He previously worked at Discovery Communications, where he spent 10 years in a wide range of financial roles, including senior vice president and chief financial officer of Discovery’s corporate services division, and senior vice president and chief financial officer of the consumer products division. Before working at Discovery, Ulica spent 10 years with Time Life Inc., where he held management positions in finance and operations.</br></br>Ulica serves on the Board of Overseers for the Columbia University School of Professional Studies. He is a graduate of Virginia Polytechnic and State University, where he earned a B.S. in finance.`,
      },
      {
        name: 'JONATHAN BAILLIE',
        duty: 'Chief Scientist and Senior Vice President',
        image: '/img/images/leaders/JonathanBaillie01.jpg',
        desc: `Jonathan Baillie is the Chief Scientist and Executive Vice President, Science & Exploration at the National Geographic Society. Baillie leads grant-making in the areas of science and exploration across a variety of disciplines and serves as vice chair of the National Geographic Society’s Committee for Research and Exploration. Baillie joined the Society after 14 years at the Zoological Society of London (ZSL), where he served in various capacities, most recently as Conservation Programmes Director. As director, Baillie was responsible for conservation projects focusing on threatened species and their habitats in more than 50 countries.</br></br>Among his achievements at ZSL, Baillie founded the EDGE of Existence program, which focuses on Evolutionary Distinct and Globally Endangered (EDGE) species. Additionally, he has served as co-chair of the International Union for Conservation of Nature (IUCN) National Red List Working Group and co-chair of the IUCN Pangolin Specialist Group. Baillie helped initiate United for Wildlife, led by the Duke of Cambridge, a collaboration of seven of the most influential conservation organizations working to address illegal wildlife trade at scale. He has also been a visiting professor of zoology at the University of Oxford.</br></br>Baillie completed his undergraduate studies at Queen’s University in Canada and received a master’s degree in conservation biology at Yale University and a Ph.D. in biology at Silwood Park, Imperial College London. His extensive fieldwork includes research and monitoring of western lowland gorillas in Gabon; developing ecotourism sites in Central Africa; searching for extremely rare endemic birds in New Guinea; and conducting behavioral studies of desert baboons in Namibia.`,
      },
      {
        name: 'EMMA CARRASCO',
        duty: 'Chief Marketing and Engagement Officer',
        image: '/img/images/leaders/EmmaCarrasco01.jpg',
        desc: `Emma Carrasco is the Chief Marketing and Engagement Officer and Senior Vice President, Global Strategy at the National Geographic Society. Emma plays a crucial role in reaching key constituencies and effectively communicating the Society’s mission and impact on the world.</br></br>Carrasco joined the Society after four years at National Public Radio, one of the country's most iconic news organizations and the producer of many highly regarded programs, including Morning Edition and All Things Considered.</br></br>Carrasco’s career encompasses more than 30 years of experience in marketing, branding, and communications. Her impressive agency experience began at Fleishman Hillard in Los Angeles and New York, where she created corporate responsibility and media relations campaigns. She continued to build her experience as executive vice president at Republica, a strategic and creative agency based in Miami, where she worked with an array of major national and international brands to grow their market share and revenue.</br></br>She has also served in executive marketing roles for major brands including Univision, where she helped usher in a new era of Spanish-language television programming; McDonald's Corporation, where she led campaigns to grow the Hispanic and African-American consumer base; and Nortel Networks, where she led the company's global branding and advertising.</br></br>Her honors include being inducted into Direct Marketing News' "Marketing Hall of Femme" as one of the top 15 female CMOs in the country. She also was named one of Ad Age's 2013 "Women to Watch.".`,
      },
      {
        name: 'LEORA HANSER',
        duty: 'Senior Vice President, Partnerships',
        image: '/img/images/leaders/LeoraHanser02.jpg',
        desc: `Jonathan Baillie is the Chief Scientist and Executive Vice President, Science & Exploration at the National Geographic Society. Baillie leads grant-making in the areas of science and exploration across a variety of disciplines and serves as vice chair of the National Geographic Society’s Committee for Research and Exploration. Baillie joined the Society after 14 years at the Zoological Society of London (ZSL), where he served in various capacities, most recently as Conservation Programmes Director. As director, Baillie was responsible for conservation projects focusing on threatened species and their habitats in more than 50 countries.<br/><br/>Among his achievements at ZSL, Baillie founded the EDGE of Existence program, which focuses on Evolutionary Distinct and Globally Endangered (EDGE) species. Additionally, he has served as co-chair of the International Union for Conservation of Nature (IUCN) National Red List Working Group and co-chair of the IUCN Pangolin Specialist Group. Baillie helped initiate United for Wildlife, led by the Duke of Cambridge, a collaboration of seven of the most influential conservation organizations working to address illegal wildlife trade at scale. He has also been a visiting professor of zoology at the University of Oxford.<br/><br/>Baillie completed his undergraduate studies at Queen’s University in Canada and received a master’s degree in conservation biology at Yale University and a Ph.D. in biology at Silwood Park, Imperial College London. His extensive fieldwork includes research and monitoring of western lowland gorillas in Gabon; developing ecotourism sites in Central Africa; searching for extremely rare endemic birds in New Guinea; and conducting behavioral studies of desert baboons in Namibia.`,
      },
      {
        name: 'TARA BUNCH',
        duty: 'Chief Administrative Officer',
        image: '/img/images/leaders/TaraBunch01.jpg',
        desc: `Tara Bunch became Chief Administrative Officer at the National Geographic Society in June 2017. In this capacity, she serves as an enterprise leader accountable for managing critical staff functions, including information technology, human resources, facilities, finance and planning, and metrics, evaluation and research. Reporting to the Chief Operating and Financial Officer, Bunch works with staff function leaders to set important policies and strategies, consistent with overall Society objectives and values, and is accountable for reporting on financial and operational performance.</br></br>Bunch joined National Geographic in 2010 as director of global strategy and business development. In that role, she was active in National Geographic’s efforts across digital, publishing and commerce, focusing on travel and kids businesses. She moved into the role of Chief of Staff in 2014 and became Deputy Chief Operating Officer in 2016.</br></br>Prior to joining National Geographic in 2010, Bunch consulted for Travel Channel Media, developing financial projections for digital and other businesses in preparation for the sale of Travel Channel Media to Scripps Networks.</br></br>She previously spent nearly seven years at Discovery Communications in several financial planning and analysis roles, overseeing annual strategic and tactical business plans for all of Discovery’s digital businesses. Working with management teams, she identified strategic and financial opportunities to grow current business and evaluate new business prospects.</br></br>Bunch began her career in strategic consulting for media and entertainment businesses at Accenture. She holds an M.B.A. from the Harvard Business School and a B.S. in economics from the Wharton School at the University of Pennsylvania. Bunch lives in Washington, D.C.`,
      },
      {
        name: 'ANGELO GRIMA',
        duty: 'Executive Vice President, General Counsel',
        image: '/img/images/leaders/AngeloGrima01.jpg',
        desc: `As executive vice president, general counsel and corporate secretary of the National Geographic Society, Angelo M. Grima is responsible for all legal matters for the Society, and serves as secretary to its board of trustees.</br></br>Grima, who joined National Geographic in 1992, specializes in major corporate transactions, including the Society’s joint venture agreements with Fox, various investment agreements, financial instruments, and other transactions. On multiple occasions Grima has represented the Society before the Internal Revenue Service, as well as other government agencies. He is also responsible for corporate governance issues for the Society and its taxable subsidiaries, including incorporations, bylaws, minutes, resolutions, and related matters.</br></br>Prior to joining National Geographic, Grima was in private practice with Steptoe & Johnson in Washington, D.C., and Kirkland & Ellis in Chicago, Illinois, handling commercial transactions and litigation.</br></br>He holds a J.D. from the University of Chicago, an M.B.A. from Johns Hopkins University, and a B.A. from Wesleyan University.`,
      },
      {
        name: 'YVONNE PERRY',
        duty: 'Executive Director of Human Resources',
        image: '/img/images/leaders/YvonnePerry01.jpg',
        desc: `Yvonne Perry is the National Geographic Society’s Executive Director of Human Resources, responsible for providing a full range of human resource services throughout the Society, including recruiting, managing organizational change, talent/performance management, organizational problem solving, employee relations, compensation, benefit and leave administration, and leadership and staff development. She leads a team of seven human resource and benefits professionals. Perry also oversees the Society’s medical unit, where she supervises two staff members.</br></br>Before joining National Geographic in May 2000, Perry was employed at the National Science Teachers Association, where she worked on a student science competition and teacher grant program. She was also previously employed as a recruiter for TRAK Staffing and in the human resources department at Titleist & FootJoy.</br></br>Perry has a B.A. in psychology from the University of Maryland.`,
      },
      {
        name: 'DAVE SCHACHT',
        duty: 'Vice President, Global Initiatives',
        image: '/img/images/leaders/DaveSchacht01.jpg',
        desc: `Dave Schacht is the Vice President, Global Initiatives at the National Geographic Society, where he is responsible for international strategy. Schacht and his headquarters-based team in Washington, D.C., oversee the National Geographic Society’s teams in China, Hong Kong, Mexico, Rwanda, South Korea and the United Kingdom, as well as new region development.</br></br>Before joining National Geographic in 2014, Schacht led economic development programs in over 50 countries. He founded ImpactMarkets, providing research and strategic advisory services to philanthropic, institutional investors and international organizations in private sector development and executive education. He served as the Vice President, Market Linkages at CARANA, a leading economic development consulting firm managing bilateral and multilateral-funded programs in Latin America, Africa and the Middle East.</br></br>Schacht previously worked in global research for Fortune 500, private equity, venture capital and hedge fund clients as Vice President, Research and Client Services at Gerson Lehrman Group (GLG) and Research Director, Procurement and Supply Chain at Corporate Executive Board.</br></br>Schacht holds an M.A. in Latin American Studies and Emerging Markets Economics with Distinction from Johns Hopkins University School of Advanced International Studies (SAIS), where he was the first young alumnus to be invited to serve on the prestigious Bologna Center Advisory Council. He received his A.B. in Economics, Phi Beta Kappa, from the University of Chicago, and is fluent in French and Spanish.`,
      },
    ];
  }

  generateMarkup = () => {
    const header = new Header().getHtml();
    const subHeader = new SubHeader().getHtml();
    const footer = new Footer().getHtml();

    const data = this.data[this.step];
    const prevData = this.data[this.step === 0 ? this.data.length - 1 : this.step - 1];
    const nextData = this.data[this.step === this.data.length - 1 ? 0 : this.step + 1];

    return `
      ${header}
      ${subHeader}
        <div id="about-us-leader-detail">
          <div id="leader-detail-content">
            <div id="spaceIn">
              <div id="portrait">
                <div id="left">
                  <div id="frame">
                    <div class="line">
                      <div id="photo">
                        <img src="${data.image}"/>
                      </div>
                    </div>
                  </div>
                  <div class="nameBox">
                    <h4>ANGELO GRIMA</h4>
                    <p>Executive Vice President, General Counsel</p>
                  </div>
                </div>
                <div id="right">
                  <div id="rightIn">
                    ${data.desc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="buttons">
            <div id="prev">
              <div class="button-cont">
                <span class="thum">
                  <img src="${prevData.image}" alt="${prevData.name}"/>
                </span>
                <span class="desc">
                  <span class="name">${prevData.name}</span>
                  <span class="position">${prevData.duty}</span>
                </span>
              </div>
              <span class="togArrow">
                <img src="/img/togarrow.png" alt="togArrow"/>
              </span>
            </div>

            <div id="next">
              <div class="button-cont">
                <span class="thum">
                  <img src="${nextData.image}" alt="${nextData.name}"/>
                </span>
                <span class="desc">
                  <span class="name">${prevData.name}</span>
                  <span class="position">${nextData.duty}</span>
                </span>
              </div>
              <span class="togArrow">
                <img src="/img/togarrow.png" alt="togArrow"/>
              </span>
            </div>
          </div>
        </div>
      ${footer}
    `;
  };

  addEvents = () => {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    if (prev && next) {
      prev.onclick = () => {
        this.step = this.step === 0 ? this.data.length - 1 : this.step - 1;
        pushState(`/whoweare/leadership/leaders/${this.step}`);
      };
      next.onclick = () => {
        this.step = this.step === this.data.length - 1 ? 0 : this.step + 1;
        pushState(`/whoweare/leadership/leaders/${this.step}`);
      };
    }
  };
}
