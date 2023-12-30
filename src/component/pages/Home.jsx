import React from "react";
import "./Home.css";
import Carousel from "./Carousel";
// import Carousel from "./Carousel";
// import OfferProduct from "./OfferProduct";
// import SecondOfferProduct from "./SecondOfferProduct";
// import TopStoreProduct from "./TopStoreProduct";
// import Allproduct from "./AllProduct";
// import Brand from "./Brand";
// import OfferProduct from "./OfferProduct";

const Home = () => {
  return (
    <div className="main-container">
      <div className="frist-main" >

      <div className="frist-container">
        <div className="frist">
          <nav>
            <ul>
              <li>
                <a href="">Camera Accessories</a>
              </li>

              <li className="List1">
                <a href="">
                  TV & Home Appliance
                  <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Television </a>
                  </li>
                  <li>
                    <a href="#">Refrigerator</a>
                  </li>
                  <li>
                    <a href="#">Microwaves</a>
                  </li>
                </ul>
              </li>
              <li className="List1 ">
                <a href="">
                  Audio <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Headphones</a>
                  </li>
                  <li>
                    <a href="#">Bluetooth </a>
                  </li>
                  <li>
                    <a href="#">Earbuds</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Smartphone</a>
              </li>
              <li className="List1">
                <a href="">
                  Wearable <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#"> Watch</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                </ul>
              </li>
              <li className="List1">
                <a href="">
                  Mobile Accessories <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Android</a>
                  </li>
                  <li>
                    <a href="#">Keypad</a>
                  </li>
                  <li>
                    <a href="#">IOS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Gadgets </a>
              </li>
              <li className="List1">
                <a href="">
                  Computer & Office <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Router</a>
                  </li>
                  <li>
                    <a href="#">Printer</a>
                  </li>
                  <li>
                    <a href="#">keyboard</a>
                  </li>
                </ul>
              </li>
              <li className="List1">
                <a href="">
                  Laptop , Tabs <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">DELL</a>
                  </li>
                  <li>
                    <a href="#">Lenovo</a>
                  </li>
                  <li>
                    <a href="#"> HP </a>
                  </li>
                </ul>
              </li>
              <li className="List1">
                <a href="">
                  Consumer electronics <span>&rsaquo;</span>{" "}
                </a>
                <ul>
                  <li>
                    <a href="#">Hard disk</a>
                  </li>
                  <li>
                    <a href="#">Ram</a>
                  </li>
                  <li>
                    <a href="#">Coller</a>
                  </li>
                </ul>
              </li>
              <li className="List1">
                <a href="">
                  Network Components <span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Internet </a>
                  </li>
                  <li>
                    <a href="#">Wifi</a>
                  </li>
                  <li>
                    <a href="#">Cable</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="second">
          <div className="carousel">
            <Carousel />
          </div>
          <div className="img-div">
            <div className="frist-img">
              <img src="assests/5.png" alt="img" />
            </div>
            <div className="frist-img">
              <img src="assests/6.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="third">
          <div className="frist-heading-third-div">
            <h2>Happy Club</h2>
            <p>
              Collect coupons from stores and apply to get special discount from
              stores
            </p>
          </div>
          <div className="three-coloum-div">
            <div className="coloum-div1">
              <h6>75% Off</h6>
              <span>For TECH SHOP</span>
              <p>Code: rFhfx7XiCm</p>
            </div>
            <div className="coloum-div1">
              <h6>Free delivery</h6>
              <span>For TECH SHOP</span>
              <p>Code: l2oDTjKF3z</p>
            </div>
            <div className="coloum-div1">
              <h6>$100.00 OFF</h6>
              <span>For 6VALLEY</span>
              <p>Code: ogpuqyeeoe</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* <div>
      <OfferProduct />
      </div> */}
      {/* <div>
      <SecondOfferProduct/>
      </div> */}
      {/* <div>
      <TopStoreProduct/>
      </div> */}
      {/* <div style={{textAlign:"center"}}>
        <h3>Recommended For You
</h3>
      </div> */}
      {/* <div>

        <Allproduct/>
      </div> */}
      {/* <div>
        <Brand/>
      </div> */}
    </div>
  );
};

export default Home;
