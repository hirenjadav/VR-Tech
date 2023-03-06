import React from "react";
import "./header.css";

function Header(props) {
  return (
    <React.Fragment>
      <div className="uppper-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="nav-link" href="tel:+919898519815">
                +91&nbsp;98985&nbsp;19815
              </a>
            </div>
            <div className="col justify-content-end">
              <a className="nav-link" href="mailto:vr.technocraft@yahoo.com">
                vr.technocraft@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-header">
        <div className="container">
          <div className="lower-header-content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      ABOUT
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      INFRASTRUCTURE
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      SERVICES
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      WE CATER
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      PROJECTS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
