import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="" src="assests/1.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="" src="assests/2.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="" src="assests/3.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="" src="assests/4.png" alt="First slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
