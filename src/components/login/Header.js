import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {

    state = {
        menuClicked: false
    }

    onMenuClick = () => {
        this.setState({
            menuClicked: !this.state.menuClicked
        })
    }

    redirectToHome = () => {
        this.props.history.push('/');
    }

    render() {
        const { menuClicked } = this.state;

        return (
            <div className="main-container">
                <div className="row col-12 header m-0">
                    <span className="header-text" onClick={this.redirectToHome}>
                        MANAVAAR MURASU QUIZ
                    </span>
                    <div className="topnav">
                        <div id="myLinks" className={`mt-4 ${menuClicked ? 'd-block' : 'd-none'}`}>
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                        </div>
                        <a className="icon" onClick={this.onMenuClick}>
                            <FontAwesomeIcon icon={faBars} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}