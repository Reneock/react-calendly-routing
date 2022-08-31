import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 sidenote">
          <h1>Easy<br /> Scheduling <br /> <span>ahead</span></h1>
          <br /><br />
          <p>Calendly is your hub for scheduling meetings<br /> professionally and efficiently, eliminating the hassle of<br /> back-and-forth emails so you can get back to work.</p>
          <br />
          <form>
            <div className="form-group signup">
              <label for="exampleInputEmail1"></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <small id="emailHelp" className="form-text text-muted signunder">Create your free account. No credit card required.</small>
          </form>
        </div>

        <div className="col-md-6">
          <img src="homeimage.png" alt="home" style={{height:"400px", width:"450px"}} />
        </div>
      </div>

      <div className="row simplified">
        <div className="col-md-6 offset-md-3">
          Simplified scheduling for more than<br /> <span>10,000,000</span> users worldwide
        </div>
      </div>

      <div className="row calimage">
        <img src="https://images.ctfassets.net/k0lk9kiuza3o/2hDXRTJ8GBvGvFew8TZLSM/f15bee8de363080dd1ae486f246c7242/Compass.svg" alt="show" style={{height:"50px", width:"80px"}} />

        <img src="https://images.ctfassets.net/k0lk9kiuza3o/rexKRdC9CB00Jh616eiD5/82174ec98a18d6a40478868e2a8521bf/drop.svg" alt="show" style={{height:"30px", width:"30px"}} />

        <img src="https://images.ctfassets.net/k0lk9kiuza3o/2ck9ANAgxoASegsTLVaTLW/c3e53db0a0a7e0dad8b73ba75525d7ee/ebay.svg" alt="show" style={{height:"30px", width:"60px"}} />

        <img src="https://images.ctfassets.net/k0lk9kiuza3o/2uC8mx63tSkNEh1Kt2Fnn3/e11a46ad74d725b2b9b68080d50b0733/Lazboy.svg" alt="show" style={{height:"30px", width:"90px"}}/>

          <img src="https://images.ctfassets.net/k0lk9kiuza3o/1kEJVQrmrXOhTKiZbNpGWV/d71c4890960ea1e7fbe9977f90dd7c9c/twilio.svg" alt="show" style ={{height:"30px", width:"80px"}}/>
          </div><br />

          <div className="row footer">
            <div className="col-md-4">
              <h4><span>1.</span>Create<br /> Simple Rules</h4>
              <br />
              <p>Let Calendly know your<br /> availability preferences and<br /> it’ll do the work for you.</p>
            </div>

            <div className="col-md-4">
              <h4><span>2.</span>Share your<br /> link</h4>
              <br />
              <p>Send guests your Calendly link or<br /> embed it on your website.</p>
            </div>

            <div className="col-md-4">
              <h4><span>3.</span>Get Booked</h4>
              <br />
              <p>They pick a time and the event is<br /> added to your calendar.</p>
            </div>
          </div>

    </Container>
  );
}

export default Home;