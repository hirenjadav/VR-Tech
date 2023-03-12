import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/about">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Company Profile
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/infrastructure">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Infrastructure
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/contact">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Services</h5>
              <ul>
                <li>
                  <a className="nav-link" href="/service">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Abrasive Waterjet Cutting
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/service">
                    <FontAwesomeIcon icon={faAngleRight} />
                    &nbsp; Pure Waterjet Cutting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Reach Us</h5>
              <div className="footer-address">
                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="col-11">
                    <p>
                      L&T Heavy Engineering (In house Facility) LEMF-5, Nuclear
                      West Shop, Hazira Surat.
                    </p>
                    <p>
                      D-9/13, Hojiwala Industrial Area, Road No.2,
                      Sachin-Palsana Road, Surat, Gujarat-394230.
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-number">
                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="col-11">
                    <a className="nav-link" href="tel:+919898519815">
                      +91&nbsp;98985&nbsp;19815
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-email">
                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="col-11">
                    <a
                      className="nav-link"
                      href="mailto:vr.technocraft@yahoo.com"
                    >
                      vr.technocraft@yahoo.com
                    </a>
                  </div>
                </div>
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
