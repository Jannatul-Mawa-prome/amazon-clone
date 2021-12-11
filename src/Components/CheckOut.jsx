import React from "react";
import { useStateValue } from "./../StateProvider";
import CartDetails from "./CartDetails";
import CurrencyFormet from "./CurrencyFormet";
import Header from "./Header";

const CheckOut = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <Header></Header>
      <div className="row">
        <div className="checkout_left col-md-8">
          <div className="cart_header">
            <img
              className="checkOutBanner"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt="banner"
            />
            <h4>Your shopping Cart</h4>
          </div>
          <div className="cartDetails">
            {cart.map((pd) => (
              <CartDetails pd={pd}></CartDetails>
            ))}
          </div>
        </div>
        <div className="checkout_right col-md-4">
          <CurrencyFormet></CurrencyFormet>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
