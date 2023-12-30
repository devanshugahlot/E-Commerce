import React, { useContext } from "react";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "./ShopContext";
import star_icon from "../Assets/star_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      {/* <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div> */}
      <hr />

      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="cartitems-formate" key={e.id}>
                  <img src={ e.image } alt="" />
                  <div>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </div>
                  <p>{e.name }</p>
              <p>{e.new_price}</p>
              <p>{e.old_price}</p>
              <button> {cartItem[e.id]}</button>
              <p>{e.new_price * cartItem[e.id]}</p>
              <img
                src={remove_icon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
              />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div>
          <h1>Cart Totals</h1>
          <div>
            <div>
              <p>Subtitle</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button>PROCESS TO CHECKOUT</button>
        </div>
        <div>
          <p>if you have a promo code, enter it here</p>
          <div>
            <input type="text" placeholder="enter here " />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
