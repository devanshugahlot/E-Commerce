import React, { useState, useEffect } from "react";
import "./OfferProduct.css";
import Resizable from "./ReactSlick";
// import Resizable from "./ReactSlick";
// import Resizable from "./ReactSlick";
const OfferProduct = () => {
  const calculateTimeLeft = () => {
    let difference = +new Date("2023-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 50 * 50 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZeros = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  return (
    <div className="main-timer-div">
      <div className="offer-all-data">
        <div className="offer-div-1">
          <div className="sale-img">
            <img src="assests/7.jpg" alt="" />
          </div>

          <div className="sale-heading">
            <h2>Hurry up !</h2>
            <p>Offer ends in:</p>
          </div>

          <div className="numbers-div">
            <div className="timer">{timeLeft.days}</div>
            <div className="timer">{addLeadingZeros(timeLeft.hours)}</div>
            <div className="timer">{addLeadingZeros(timeLeft.minutes)}</div>
            <div className="timer">{addLeadingZeros(timeLeft.seconds)}</div>
          </div>
          <div className="numbers-name">
            <p>Days</p>
            <p>Hours</p>
            <p>Miniute</p>
            <p>Second</p>
          </div>
        </div>
        <div className="offer-div-2">
          <div>
            <Resizable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
