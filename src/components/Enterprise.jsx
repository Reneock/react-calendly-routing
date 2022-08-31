import React from 'react';
import { Container } from 'react-bootstrap';

function Enterprise() {
  return (
    <Container>
      <div className="enterpriserow1">
        <h1><span>Way more</span> than a<br /> scheduling link</h1>
      </div>

      <div className="enterpriserow2">
        <p>Standardize on the #1 scheduling platform and<br /> deliver the power of Calendly across your entire<br /> organization.</p>
      </div>

      <div className="enterpriserow3">
        <button type="button" className="btn btn-primary btn-sm">Contact Sales</button>
      </div>

      <div className="row">
        <img src="enterpriseimage1.png" alt="enterprise" style={{ height: "250px", width: "1180px" }} />
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card-deck enterpriserow4">
            <div className="card enterpriserow4">
              <h5 className="card-title">Sales</h5>
              <img src="https://images.ctfassets.net/k0lk9kiuza3o/32KUljTojPdR63HTyoOI48/4c1a4f0210f77037a744791fc26e2fec/Sales__1_.svg" className="card-img-top" alt="ent" />
              <div className="card-body">
                <p className="card-text">Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.</p>
              </div>
            </div>

            <div className="card enterpriserow4">
              <h5 className="card-title">Customer Success</h5>
              <img src="https://images.ctfassets.net/k0lk9kiuza3o/6eJwfU8AThGvvDpjTdWDTI/cec263c3e1f0a608267fca59a1b03894/Customer_Success.svg" className="card-img-top" alt="ent" />
              <div className="card-body">
                <p className="card-text">Deliver better support interactions and customer consultations. Stay connected with automated reminders and follow-ups.</p>
              </div>
            </div>

            <div className="card enterpriserow4">
              <h5 className="card-title">Recruiting</h5>
              <img src="https://images.ctfassets.net/k0lk9kiuza3o/4d6Vf8dXq2m1sYzxjTjDuw/1c5fb5cb6ec11f9710544f1b5956a3dd/Recruiting__1_.svg" className="card-img-top" alt="ent" />
              <div className="card-body">
                <p className="card-text">Fill your candidate pipeline and book more interviews and recruiter screens with easy, standardized scheduling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row enterpriserow5">
        <button type="button" className="btn btn-primary btn-sm">Learn more</button>
      </div>

      <div className="row">
        <div className="col-md-4 enterpriserow6">
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

        <div className="col-md-3 enterpriserow6">
          <h5>About</h5>
          <p>About Calendly</p>
          <p> Contact Sales</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Security</p>
        </div>

        <div className="col-md-3 enterpriserow6">
          <h5>Solutions</h5>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>

        <div className="col-md-2 enterpriserow6">
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

export default Enterprise;