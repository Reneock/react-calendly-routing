import React from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars() {
  return (
    <Container>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" ><img src="Calendlylogo1.png" width="100" height="60" className="d-inline-block align-top" alt=""/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-calendly">
            <li className="nav-item active">
                <Link to="/" className="nav-link" style={{marginLeft:"15px", marginRight:"15px"}}>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active" style={{marginLeft:"15px", marginRight:"15px"}}>
                <Link to="/individuals" className="nav-link">Individuals <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item" style={{marginLeft:"15px", marginRight:"15px"}}>
                <Link to="/team" className="nav-link" >Team <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item" style={{marginLeft:"15px", marginRight:"15px"}}>
                <Link to="/enterprise" className="nav-link">Enterprise <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Navbars;