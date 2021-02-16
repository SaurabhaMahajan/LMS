import React, { Component } from "react";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sphLogo from "../assets/sphLogo.svg";
import tmLogo from "../assets/tmlogo.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="company-section">
          
                <div className="logo-container">
                <a href="https://www.tamilmurasu.com.sg/"><img src={tmLogo} className="company-logo" alt=""/></a>
              <a href="https://www.sph.com.sg/"><img src={sphLogo} className="sph-logo" alt="" /></a>
            </div>
                <div className="copyright-text">
                  SPH Digital News Copyright © 2020 Singapore Press Holdings. Ltd.
              Co. Regn. No. 198402868E. <br />
              All Rights Reserved.
            </div>
                <div className="footer-links">
                  <a target="_blank" href="https://sph.com.sg/legal/sph_privacy.html" rel="noopener noreferrer">ரகசியகாப்புக் கொள்கை</a> |
              <a target="_blank" href="https://sph.com.sg/legal/website_tnc.html" rel="noopener noreferrer">நிபந்தனைகள் மற்றும் விதிமுறைகள்</a> |
              <a target="_blank" href="https://sph.com.sg/legal/pdpa.html" rel="noopener noreferrer">தரவு பாதுகாப்புக் கொள்கை</a>
                </div>
          </div>
              <div className="contact-details-section">
                <div className="ad-text">For advertising please contact:</div>
                <div className="phone-details">
                  <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                  <span className="phone-number">
                    : (65) 6319 8844, (65) 6319 8611
              </span>
                </div>
                <div className="email-details">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:mkgsales@sph.com.sg" className="email-address">
                    : mkgsales@sph.com.sg
              </a>
                </div>
                <div className="overseas-text">
                  For overseas or advertorial enquiries please click{" "}
                  <a href="https://corporate.sph.com.sg/contact-us/media-solutions/">here.</a>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
