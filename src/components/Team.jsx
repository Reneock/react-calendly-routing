import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 teamrow1">
          <h3><span>Power up</span> your <br/> teams</h3>
          <br />
          <p>Calendly gives you control over team scheduling with a <br/>standardized, scalable process. Its secure, easy to <br/> manage, and integrates with your team's <br/> favorite tools, so you can get everyone working  <br/> efficiently and effectively as possible.</p>
          <br/>
          <button type="button" className="btn btn-primary btn-sm">Start for free</button>
          <button type="button" className="btn btn-secondary btn-sm" id="startc">Contact Sales</button>
        </div>

        <div className="col-md-6 teamrow1">
          <img src="https://images.ctfassets.net/k0lk9kiuza3o/10RUnrGVSw0xNsRmHqBQ5u/92bd564ccd183adf729a257d54574ab6/Calendly-Teams-Hero.png?w=1504&h=1219&q=50&fm=webp" alt="People sitting and working on a laptop" style={{ height: "300px", width: "450px" }} />
        </div>
      </div>

      <div className="row">
        <h4 className="teamrow2">Streamline tasks, extend team <br/> reach</h4>
      </div>

      <div className="row">
        <div className="col-md-6 teamrow3">
          <img src="teamimage1.png" alt="man on a laptop" style={{ height: "250px", width: "450px" }} />
        </div>

        <div className="col-md-6 teamrow3">
          <p id="h6">AUTOMATED ASSIGNMENT</p>

          <h5>Control how your team gets <br/>booked</h5>

          <p>With Calendly, you can offer sessions that are a few minutes <br/> or a few hours, for one invitee or a group. Automated round- <br/> robin, first-available, or geography-based assignments let <br/> you easily divvy up meetings in any way that works for your <br/> team members.</p>
        </div>
      </div>

      <div className="row">
        <p id="h5">SOLUTIONS</p>
      </div>

      <div className="row teamrow4">
        <h4>The right Calendly for the work you do</h4>
      </div>

      <div className="row">
        <div className="card-deck teamrow5">
          <div className="card">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/5ledlZLIfg5Ufl5aV7mP43/f4e9ff1c8e56ac1c9ce6416114c4b522/Calendly-Reps.png?w=1480&h=832&q=50&fm=webp" className="card-img-top" alt="cal" />
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <p className="card-text">Get to your best leads faster.</p>
              <Link to="*"> Learn More <span> - </span></Link>
            </div>
          </div>

          <div className="card">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2CHdvyXqFe8FfVLRvlEtwP/431464dd95b0b51a773a3082b5a3b432/Recruiting.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="cal" />
            <div className="card-body">
              <h5 className="card-title">Recruiting</h5>
              <p className="card-text">Less emailing, more closing</p>
              <Link to="*"> Learn More <span> - </span></Link>
            </div>
          </div>

          <div className="card">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/4L2IHsOUMgTUjPxcUbzoyz/2111a84d62f23ade75054f48bdeda0b2/Customer_Success.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="cal" />
            <div className="card-body">
              <h5 className="card-title">Customer Success</h5>
              <p className="card-text">Connect with customers when it matters</p>
              <Link to="*"> Learn More <span> - </span></Link>
            </div>

          </div>

          <div className="card">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/Zrdp4mX39AA8cXWx4J41s/1fba6102b32f86275c89e15c84ceab55/Education.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="cal" />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">Boost student success</p>
              <Link to="*"> Learn More <span> - </span></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 teamrow6">
          <h4>Easy <br /><span>ahead</span></h4>
          <p>We take the work out of connecting with others <br />so you can accomplish more.</p>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">English
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">French</button>
              <button className="dropdown-item" type="button">Spanish</button>
              <button className="dropdown-item" type="button">Deutsch</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 teamrow6">
          <h5>About</h5>
          <p>About Calendly</p>
          <p> Contact Sales</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Security</p>
        </div>

        <div className="col-md-3 teamrow6">
          <h5>Solutions</h5>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>

        <div className="col-md-2 teamrow6">
          <h5>Popular Features</h5>
          <p>Embed Calendly</p>
          <p>Availability</p>
          <p>Sending Notifications</p>
          <p>Using Calendly Mobile</p>
        </div>

      </div>
    </Container>
  );
}

export default Team;