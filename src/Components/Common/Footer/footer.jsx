import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-up">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Navigation</h5>
              <ul>
                <li>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Quality Policy
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    We Cater
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Navigation</h5>
              <ul>
                <li>
                  <a className="nav-link" href="#">
                    Waterjet Cutting
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Welding
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Reach Us</h5>
              <div className="footer-address">
                <p>
                  L&T Heavy Engineering (In house Facility) LEMF-5, Nuclear West
                  Shop, Hazira Surat.
                </p>
                <p>
                  D-9/13, Hojiwala Industrial Area, Road No.2, Sachin-Palsana
                  Road, Surat, Gujarat-394230.
                </p>
              </div>
              <div className="footer-number">
                <a className="nav-link" href="tel:+919898519815">
                  +91&nbsp;98985&nbsp;19815
                </a>
              </div>
              <div className="footer-email">
                <a className="nav-link" href="mailto:vr.technocraft@yahoo.com">
                  vr.technocraft@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="container">
          <p>Copyright © 2019 Param Technocraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
