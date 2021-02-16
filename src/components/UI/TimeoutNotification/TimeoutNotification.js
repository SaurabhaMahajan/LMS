import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./TimeoutNotification.scss";
import UIfx from "uifx";
import timeOutAudio from "../../../assets/audio/sfx/(time over)_01.mp3";

const _timeOutAudio = new UIfx(timeOutAudio);

const TimeoutNotification = (props) => {
  props.sound && _timeOutAudio.play();
  return (
    <Fragment>
      <Backdrop
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", zIndex: "550" }}
      />
      <div className="overlay"></div>
      <div className="text">
        <svg
          width="106"
          height="119"
          viewBox="0 0 106 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.876 13.768C62.7358 14.0225 70.1376 16.0329 76.751 19.4177L77.8702 17.3817L74.3855 15.4731C74.0294 15.2695 73.9022 14.7859 74.1057 14.4296L77.0817 9.00898C77.2852 8.62724 77.7685 8.5 78.1246 8.70359L89.5708 15.015C89.9269 15.2186 90.0541 15.7021 89.876 16.0584L86.8745 21.479C86.6711 21.8353 86.1878 21.988 85.8571 21.7844L82.3724 19.8503L81.2278 21.9371C95.828 31.2769 105.545 47.6916 105.545 66.3458C105.545 95.4087 82.0163 119 52.9938 119C23.9458 119.025 0.41748 95.4341 0.41748 66.3712C0.41748 37.9192 22.9284 14.7605 51.0606 13.768V10.765H46.3295C43.3535 10.765 40.9371 8.3473 40.9371 5.36976C40.9371 2.41766 43.3535 0 46.3295 0H59.6071C62.5831 0 64.9996 2.41766 64.9996 5.36976C64.9996 8.3473 62.5831 10.765 59.6071 10.765H54.876V13.768ZM52.9683 21.1482C77.8956 21.1482 98.0918 41.3802 98.0918 66.3458C98.0918 91.3114 77.8956 111.543 52.9683 111.543C28.0664 111.543 7.87024 91.3114 7.87024 66.3458C7.87024 41.4057 28.0664 21.1482 52.9683 21.1482Z"
            fill="#F51240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.2412 94.1871C15.6024 86.8323 11.5581 77.0599 11.5581 66.3712C11.5581 43.518 30.0247 24.9656 52.8154 24.8638V66.3712V66.5494H52.968L22.2412 94.1871Z"
            fill="#F51240"
          />
        </svg>
        <p>அடடா! நேரம் முடிந்துவிட்டது!</p>
      </div>
    </Fragment>
  );
};

export default TimeoutNotification;
