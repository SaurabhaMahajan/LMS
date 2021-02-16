/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NotFound.scss';

class NotFound extends Component {

    redirectToHome = () => {
        this.props.history.push('/modulescreen');
    }

    render() {
        return (
            <Fragment>
                {/* <div className="face">
                    <div className="band">
                        <div className="red"></div>
                        <div className="white"></div>
                        <div className="blue"></div>
                    </div>
                    <div className="eyes"></div>
                    <div className="dimples"></div>
                    <div className="mouth"></div>
                </div> */}
                <span className="text-center align-center erroricon" >
                    <FontAwesomeIcon icon={faExclamationCircle} size='8x' />
                </span>

                <h1 className="errorpage">Oops! Something went wrong!</h1>
                <div className="btn-error button_custom" onClick={this.redirectToHome}>Return to Home</div>

            </Fragment >
        )
    }
}
export default NotFound;