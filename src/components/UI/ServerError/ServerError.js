import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../Backdrop/Backdrop';
import './ServerError.scss';

class ServerError extends Component {
    render() {
        return (
            <Fragment>
                <Backdrop style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", zIndex: "550" }} />
                <div className="error-banner">
                    <div className="container-fluid" style={{ height: "100%", }}>

                        <div className="row" style={{ height: "100%" }}>
                            {/* <div className="col-1">
                                <div className="error-banner__error-icon">
                                    <div className="error-banner__error-icon-laptop">
                                        <FontAwesomeIcon icon={faLaptop} size="3x" />
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-12 d-flex p-0">
                                <p className="col-9 error-banner__errormsg">
                                {
                                                     
                                    this.props.customErrorMessage?
                                    (Array.isArray( this.props.customErrorMessage)
                                   ?  this.props.customErrorMessage && this.props.customErrorMessage.length > 0 && this.props.customErrorMessage.map((message, index) => (<span className="d-inline-block">{index+ 1}.  {message.error} &nbsp; &nbsp;</span>)) : this.props.customErrorMessage)
                                    : "Oops.. Something went wrong, Please try again!"}
                                </p>
                                <button onClick={() => { this.props.onOkClick() }} className="error-banner__button">OK</button>
                            </div>
{/* 
                            <div className="col-2 pl-5 button-container">
                                <button onClick={() => { this.props.onOkClick() }} className="error-banner__button">OK</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ServerError;
