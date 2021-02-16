import React, { Component } from "react";
import { connect } from "react-redux";
// import Modal from "./UI/Modal/Modal";
// import mainLogo from "../assets/logo.svg";
// import tmLogo from "../assets/tmlogo.svg";
// import loginIcon from "../assets/loginIcon.png";
import AchievementsModal from "../AchievementsModal";
import GameRulesModal from "../GameRulesModal";
import Cookies from "js-cookie";
import ServerError from "../../components/common/UI/ServerError/ServerError";
import {
  invokeLDAP,
  clearLDAPError,
} from "../../redux/actions/applicationsAction";
import { changeStep } from "../../redux/actions/quizActions";
import { getUserDetails } from "../Login/redux/actions/loginActions";
// import SphLdap from './sph_ldap';
import { trySingleSignOnLogin, registerUser } from "../common/sph_ldap";
import { clearAchievementsError } from "../../redux/actions/achievementsActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      height: 0,
      showRulesModal: false,
      showAchievementsModal: false,
    };
    //localStorage.clear()
  }

  onMenuClick = () => {
    const newHeight = !this.state.menuClicked
      ? document.getElementById("myLinks").clientHeight
      : 0;
    this.setState({
      menuClicked: !this.state.menuClicked,
      height: newHeight,
    });
  };

  closeMenu = () => {
    this.setState({
      menuClicked: false,
      height: 0,
    });
  };

  async componentDidMount() {
    window.addEventListener("resize", this.closeMenu.bind(this));
    await this.props.invokeLDAP(
      registerUser,
      trySingleSignOnLogin,
      this.redirectLoggedInUser
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.closeMenu.bind(this));
  }

  redirectLoggedInUser = async (userid) => {
    if (
      userid !== undefined &&
      localStorage.getItem("username") === null &&
      localStorage.getItem("level") === null
    ) {
      await this.props.getUserDetails({
        userid: userid,
      });
      localStorage.setItem("username", this.props.username);
      localStorage.setItem("level", this.props.level);
      this.props.changeStep("quiz-list");
      this.props.history.push("/quiz");
    }
  };

  showModal = () => {
    document.body.classList.toggle("is-modal-open");
    this.setState({
      showRulesModal: !this.state.showRulesModal,
    });
    this.closeMenu();
  };

  handleAchivementsModal = () => {
    document.body.classList.toggle("is-modal-open");
    this.setState({
      showAchievementsModal: !this.state.showAchievementsModal,
    });
    this.closeMenu();
  };

  redirectToHome = () => {
    this.closeMenu();
    this.props.changeStep("quiz-list");
    this.props.history.push("/");
  };

  onError = async () => {
    await this.props.clearAchievementsError();
    this.handleAchivementsModal();
  };

  onLDAPError = async () => {
    await this.props.clearLDAPError();
  };

  render() {
    const {
      menuClicked,
      height,
      showRulesModal,
      showAchievementsModal,
    } = this.state;
    const {
      achievementsError,
      achievementsErrorMessage,
      LDAPError,
      showLDAPError,
    } = this.props;

    return (
      <React.Fragment>
        <header className="header-container">
          <div className="header">
            <div className="nav-left">
              <div className="logo" role="button" onClick={this.redirectToHome}>
                <img
                  alt="Tamil Murasu Logo"
                  src={mainLogo}
                  className="logo-img"
                />
              </div>
            </div>
            <div className="nav-right">
              <div className="right-items">
                <div className="logged-user">
                  <span className="user-signup-section pl-3 pr-3">
                    <a
                      style={{
                        fontFamily: "mukta-malar-regular",
                        fontSize: "12px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      href="#"
                      id="sph_login"
                      className="mysph_login mysph-ga-event user-login-text"
                    >
                      <img
                        classame="mysph_login"
                        src={loginIcon}
                        alt="உள்நுழைய"
                        style={{
                          paddingRight: "4px",
                          height: "20px",
                          width: "20px",
                        }}
                      />{" "}
                      உள் நுழைய
                    </a>
                  </span>
                </div>
                <div className="hamburger-container" onClick={this.onMenuClick}>
                  <div
                    className={`hamburger ${menuClicked ? "open" : ""}`}
                    // onClick={this.onMenuClick}
                  >
                    <div className="icon"></div>
                    <span className="dot" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`links-wrapper ${menuClicked ? "show" : "hide"}`}
              style={{ height: `${height}px`, top: "35px" }}
            >
              <div id="myLinks">
                <div className="logged-user">
                  <span className="user-signup-section-mobile w-100 d-block d-lg-none d-xl-none d-md-none">
                    <a
                      style={{ fontWeight: "bold", padding: 0 }}
                      href="#"
                      id="sph_login"
                      className="mysph_login mysph-ga-event user-login-text"
                    >
                      <img
                        classame="mysph_login"
                        src={loginIcon}
                        alt="உள்நுழைய"
                        style={{
                          paddingRight: "4px",
                          height: "20px",
                          width: "20px",
                        }}
                      />{" "}
                      உள் நுழைய
                    </a>
                  </span>
                </div>

                {/* <a href="#" onClick={this.handleAchivementsModal}>My Achievements Dashboard</a> */}
                {Cookies.get("mySPHUserType") === "y-anoy" ? (
                  ""
                ) : (
                  <a
                    className="headerDropdownMenus"
                    onClick={this.handleAchivementsModal}
                  >
                    என் சாதனைகள்
                  </a>
                )}
                <a
                  className="headerDropdownMenus"
                  onClick={this.showModal}
                >
                  விளையாட்டு விதிமுறைகள்
                </a>
                <a
                  href="https://www.tamilmurasu.com.sg/"
                  className="headerDropdownMenus"
                >
                  <img src={tmLogo} className="img-responsive" alt="" />
                </a>
                <div className="social-icons">
                  <a
                    className="social fb"
                    href="https://www.facebook.com/tamilmurasu/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                  <a
                    className="social whatsapp"
                    href="https://api.whatsapp.com/send?text=%20https%3A%2F%2Fwww.tamilmurasu.com.sg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </a>
                  <a
                    className="social insta"
                    href="https://www.instagram.com/tamil_murasu/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a
                    className="social youtube"
                    href="https://www.youtube.com/channel/UCs0xZ60FSNxFxHPVFFsXNTA"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {showRulesModal && (
          <Modal closeModal={this.showModal}>
            <GameRulesModal />
          </Modal>
        )}

        {showAchievementsModal && (
          <Modal
            closeModal={this.handleAchivementsModal}
            customClass="achievements-modal"
          >
            <AchievementsModal
              closeModal={this.handleAchivementsModal}
              redirectToQuizList={this.redirectToHome}
              {...this.props}
            />
          </Modal>
        )}
        {achievementsError ? (
          <ServerError
            customErrorMessage={
              achievementsErrorMessage ? achievementsErrorMessage : null
            }
            onOkClick={this.onError}
          />
        ) : null}
        {showLDAPError ? (
          <ServerError
            customErrorMessage={LDAPError ? LDAPError : null}
            onOkClick={this.onLDAPError}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.loginReducer.username,
  userid: state.loginReducer.userid,
  userGroupType: state.loginReducer.userGroupType,
  showError: state.loginReducer.showError,
  achievementsError: state.achievementsReducer.achievementsError,
  achievementsErrorMessage: state.achievementsReducer.achievementsErrorMessage,
  error: state.loginReducer.error,
  level: state.loginReducer.level,
  showLDAPError: state.applicationReducer.showLDAPError,
  LDAPError: state.applicationReducer.LDAPError,
});

export default connect(mapStateToProps, {
  clearAchievementsError,
  changeStep,
  invokeLDAP,
  clearLDAPError,
  getUserDetails,
})(Header);
