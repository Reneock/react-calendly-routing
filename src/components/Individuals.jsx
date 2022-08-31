import React from 'react';
import { Container } from 'react-bootstrap';

function Individuals() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 individualrow1">
          <h2>The genius way <br />to work <span>better</span></h2>
          <p>Calendly makes it easy to work smarter when you’re<br /> working solo. Meetings, sessions, and appointments<br /> become more efficient ways to achieve success and <br />accomplish goals.</p>
          <button type="submit" className="btn btn-primary">Sign up for free</button>
        </div>

        <div className="col-md-6 individualrow1">
          <img src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?w=1472&h=1232&q=50&fm=webp" alt="Man behind computer" style={{ height: "300px", width: "450px" }} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 individualrow2">
          <img src="individualsimage1.png" alt="lady behind computer" style={{ height: "250px", width: "450px" }} />
        </div>

        <div className="col-md-6 individualrow2">
          <h5>A CURATED CALENDAR</h5>
          <h3>Book up efficiently</h3>
          <p>When invitees select a meeting slot from your schedule, they <br />only see the times you’re available, and only the length and<br /> type of meeting you want to have. Your schedule fills up<br /> efficiently, and everyone avoids excess email exchanges.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 individualrow2">
          <h5>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h5>
          <h3>Work like you have a<br /> personal assistant</h3>
          <p>Because Calendly automates administrative tasks like<br /> sending reminder emails and follow-ups, you can focus on <br />the work that builds your business and brings customers<br /> back for more.</p>
        </div>

        <div className="col-md-6 individualrow2">
          <img src="individualsimage2.png" alt="people watching a tablet" style={{ height: "250px", width: "450px" }} />
        </div>
      </div>

      <div className="row">
        <div className="container-fluid individualrow3">
          <img src="individualsimage3.png" alt="jumbotron" style={{ height: "400px", width: "1180px" }} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 individualrow4">
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

        <div className="col-md-3 individualrow4">
          <h5>About</h5>
          <p>About Calendly</p>
          <p> Contact Sales</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Security</p>
        </div>

        <div className="col-md-3 individualrow4">
          <h5>Solutions</h5>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>

        <div className="col-md-2 individualrow4">
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

export default Individuals;