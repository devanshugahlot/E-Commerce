import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "./ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  const {removeToCart} = useContext(ShopContext);

  // Check if the 'product' object is defined
  if (!product) {
    return null; // or display a loading state or an error message
  }

  // Check if the 'image' property is defined
  if (!product.image) {
    return (
      <div>
        {/* Display an error message or placeholder image if 'image' is undefined */}
        <p>Error: Product image not available</p>
      </div>
    );
  }

  return (
    <div>
     
      <div>
        {/* Displaying a single image */}
        <img src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.name}</h4>
        <div>
          {/* Displaying star icons */}
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          {/* Add content inside the paragraph as needed */}
          <p>Additional information or text goes here</p>
        </div>
        <div>
          <div>${product.old_price}</div>
          <div>${product.new_price}</div>
              </div>
              <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;