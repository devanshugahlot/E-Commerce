import React from "react";

import Offer from "./Offer";
import NewCollection from "./NewCollection";
import Product from "./Product";
import Popular from "./Popular";
import OfferProduct from "./OfferProduct";
import Home from "./Home";


const Shop = () => {
  return (
    <div>
      <Home/>
      <OfferProduct/>
  <Popular/>
<Product/>
      <Offer />
      <NewCollection />
    </div>
  );
};

export default Shop;
