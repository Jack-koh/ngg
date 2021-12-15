import View from 'page/View';
import EnterButton from 'components/common/button/button';
import './Pannel01.scss';

class Pannel01 extends View {
  constructor() {
    super();
  }

  generateMarkup() {
    return `
      <li id="panel1" style="display: list-item">
        <div class="tabHeader">
          <div class="title">
            <strong class="title">VISITOR INFORMATION</strong>
            <p class="bar"></p>
            <p class="desc">
              The National Geographic Museum hosts a variety of rotating exhibitions and programs year-round. To see what
              the museum is currently offering, visit Current Exhibitions and Events.
            </p>
          </div>
        </div>
        <div class="tabCon">
          <div class="tabConIn">
            <div class="location">
              <h3>OUR LOCATION</h3>
              <p class="desc">
                The National Geographic Museum &amp; Headquarters 1145 17th Street, NW Washington, DC 20036 202-857-7700
              </p>
              ${new EnterButton({ text: 'MAP' }).getHtml()}
            </div>
            <div class="info">
              <h3>GENERAL TICKET INFORMATION</h3>
              <p class="desc">
                All general admission tickets for the museum include both exhibitions. Tickets for “Tomb of Christ” are
                timed due to the nature of the exhibition, and we require all guests to enter “Tomb of Christ” at their
                designated entry time. Guests may visit other exhibitions at any time, but please be aware that we cannot
                guarantee late entry to “Tomb of Christ” if you miss your entry time.
              </p>
              <dl id="pannel01-dl">
                <dt class="accordion">
                  <span>Hours &amp; Ticket Pricing</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" class="" />
                  </span>
                </dt>
                <dd>
                  The National Geographic Museum is open from 10 a.m. to 6 p.m. every day except Thanksgiving Day and
                  Christmas Day.<br /><br />

                  <span class="regular">Last ticket sold at 5 p.m. daily.</span><br /><br />

                  Your ticket is good for all current exhibitions in the museum.<br /><br />
                  <span class="regular">
                    General Admission: $15<br />
                    Students, Seniors, Military: $12<br />
                    Children 5 to 12 years old: $10<br />
                    Children Under 5 and
                    <span class="orange">Annual Pass</span> Members: Free<br /><br />
                  </span>
                  Some tickets purchased online are subject to a 10% venue fee. This includes all D.C. National Geographic
                  Live events, Nat Geo Nights happy hour events, and other evening and weekend events. Tickets purchased
                  online for the National Geographic Museum, museum films, and Annual Pass are exempt from this venue fee.
                  All over the phone orders, including those for the National Geographic Museum and museum films, are
                  subject to a 10% customer service fee.<br /><br />

                  Please call the National Geographic Ticket Office at 202-857-7700 with any questions. The Ticket Office
                  is open Monday through Friday from 10 a.m. to 4 p.m.
                </dd>
                <dt class="accordion">
                  <span>Directions &amp; Parking</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  National Geographic headquarters is located at 17th and M Streets, NW. The museum and store entrance is
                  at 1145 17th Street; the Grosvenor Auditorium entrance is at 1600 M Street NW.<br /><br />

                  National Geographic is committed to promoting the use of sustainable transportation as a way to reduce
                  local traffic congestion and air pollution. While we do provide driving and parking information, please
                  consider some of the District’s alternative transportation options, which can be found on
                  <a href="http://godcgo.com/" title="godcgo"><span class="orange">goDCgo.com’s</span></a>
                  interactive map.

                  <h4>By MetroRail</h4>
                  National Geographic is located a few blocks from the Farragut North Metro Station on the Metro’s Red
                  Line. From the L Street Metro exit, head east on L Street toward 17th Street. Make a left on 17th
                  Street. The museum will be on the right. Alternatively, take the Blue, Orange, or Silver Line to
                  Farragut West. Make a right out of the metro, turn left on 17th Street, and walk two blocks. The museum
                  will be on the right. Visit the
                  <a href="https://www.wmata.com/" title="wmata"><span class="orange">Metro website</span></a>
                  for more station information.
                  <h4>By MetroBus</h4>
                  A dozen MetroBus routes have stops located within a 1/4 mile of National Geographic. Additional routes
                  have stops located within a 1/2 mile. To find the route closest to you, visit the Metro website.
                  <h4>By DC Circulator</h4>
                  The DC Circulator has one stop within walking distance of National Geographic. The Georgetown-Union
                  Station route has a stop on K Street and Connecticut Avenue. From there, walk east on K Street and turn
                  left on 17th Street. Walk one and a half more blocks and the museum will be on the right. For more
                  information, visit
                  <a href="https://www.wmata.com/" title="wmata"><span class="orange">www.dccirculator.com.</span></a>
                </dd>
                <dt class="accordion">
                  <span>Accessibility</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  A wheelchair ramp is located on the M Street side of the museum’s main building. Automatic doors are on
                  the 17th Street side. Wheelchairs are available at the ticket desk on a first-come, first-serve
                  basis.<br /><br />

                  Please call the National Geographic Ticket Office at 202-857-7700 at least two weeks prior to your visit
                  to request sign language interpretation, captioning, or hearing assistance devices.
                </dd>
                <dt class="accordion">
                  <span>Group Sales</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  Interested in booking as a group? Contact our group sales office at 202.857.7700 or email
                  groupsales@ngs.org.<br /><br />

                  For more information, visit our
                  <span class="orange">Group Sales page.</span>
                </dd>
                <dt class="accordion">
                  <span>During Your Visit</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  Strollers are not permitted in the exhibitions; limited storage is available should you need bring
                  strollers with you to the museum. We do not store bags or any other personal items. Storage is at your
                  own risk; National Geographic does not assume responsibility for any items left in our storage.<br /><br />

                  There is no food or drink allowed inside the museum.<br /><br />

                  Our photography policy varies depending on our current exhibitions. Please check the Current Exhibitions
                  pages or call the Ticket Office for up-to-date information at 202-857-7700.<br /><br />

                  Each person is different, but we recommend taking at least two hours to fully enjoy all the
                  exhibitions.<br /><br />

                  Seating is available in each exhibition.<br /><br />

                  The National Geographic Society has a café and cafeteria located in our M Street building. Our café is
                  open from 10 a.m. to 4:30 p.m. and the cafeteria from 11:30 a.m. to 2 p.m. Monday through Friday. Both
                  are closed Saturdays and Sundays.
                </dd>
                <dt class="accordion">
                  <span>Museum Store</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  The
                  <span class="orange">National Geographic Museum Store</span>
                  is open from 10 a.m. to 6 p.m. every day the museum is open.
                </dd>
                <dt class="accordion">
                  <span>Event Tickets and Information</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  You can purchase tickets online, over the phone Monday-Friday through our ticket office, or in person
                  daily from 10 a.m. to 5 p.m. at our National Geographic Museum ticket desk. We recommend purchasing
                  ahead of time, as many of our events sell out quickly. Tickets to National Geographic live events in
                  D.C. include parking in our underground garage, located on M Street between 16th and 17th Streets NW.
                  You must show proof of purchase to access the garage.<br /><br />

                  Check event pages for start times and schedules. All upcoming D.C. events can be viewed
                  <span class="orange">here</span>. For information about events outside of D.C., please visit
                  <a href="https://events.nationalgeographic.com/locations/city/all" title="ouside events"
                    ><span class="orange">events.nationalgeographic.com.</span></a
                  >
                </dd>
                <dt class="accordion">
                  <span>Inclement Weather</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  The National Geographic Museum does not generally close due to weather conditions. Call 202-857-7700 to
                  inquire whether the facility is open or closed. If the recording does not mention a closing, National
                  Geographic is open. When the facility is open, tickets are nonrefundable. In case of a museum closing,
                  we will attempt to reschedule your visit for a later date. For National Geographic Live events we will
                  issue a refund only if the federal government is closed and our shows are canceled for that day.
                </dd>
                <dt class="accordion">
                  <span>Gift Certificate</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  Purchase a gift certificate for friends and family and give the gift of adventure! Call the Ticket
                  Office at 202-857-7700 or order
                  <span class="orange">online.</span>
                </dd>
                <dt class="accordion">
                  <span>Contact Us</span>
                  <span class="mark">
                    <img src="/img/mark.png" alt="mark" />
                  </span>
                </dt>
                <dd style="display: none">
                  <span class="regular">
                    Office hours are Monday–Friday, 10 a.m. to 4 p.m.<br /><br />

                    The National Geographic Ticket Office: 202-857-7700 | ngtickets@ngs.org<br /><br />

                    Group Sales: 202-807-3232 | groupsales@ngs.org<br /><br />

                    The National Geographic Store: 202-807-3428<br /><br />

                    In case of inclement weather call the National Geographic Ticket Office.
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </li>
    `;
  }

  addEvents() {
    const dl = document.getElementById('pannel01-dl');

    if (dl) {
      dl.onclick = (e) => {
        const target = e.target as HTMLElement;
        const dd = target.closest('dt')?.nextElementSibling as HTMLElement;
        dd.style.height = 'auto';
      };
    }
  }
}
export default Pannel01;
