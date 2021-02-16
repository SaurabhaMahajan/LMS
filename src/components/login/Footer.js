import React, { Component } from "react";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sphLogo from "../assets/sphLogo.png";
import tmLogo from "../assets/tmlogo.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer col-12 row m-0 p-4">
                <div className="col-sm-12 col-md-8">
                    <div className="mb-3">
                        <img src={tmLogo} className="pr-2" />
                        <img src={sphLogo} className="pl-2" />
                    </div>
                    <div className="copyright-text">
                        SPH Digital News Copyright © 2020 Singapore Press Holdings. Ltd. Co. Regn. No. 198402868E. All Rights Reserved.
						</div>
                    <div className="content">
                        ரகசியகாப்புக் கொள்கை | நிபந்தனைகள் மற்றும் விதிமுறைகள் | தரவு பாதுகாப்புக் கொள்கை
						</div>
                </div>
                <div className="col-sm-12 col-md-4 contact-details-section">
                    <div className="ml-2">
                        For advertising please contact:
						</div>
                    <div className="phone-details">
                        <FontAwesomeIcon icon={faPhoneAlt} /> <span className="ml-3">: (65) 6319 8844, (65) 6319 8611</span>
                    </div>
                    <div className="email-details">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>: mkgsales@sph.com.sg</span>
                    </div>
                    <div className="ml-2">
                        For overseas or advertorial enquiries please click here.
						</div>
                </div>
            </div>
        )
    }
}