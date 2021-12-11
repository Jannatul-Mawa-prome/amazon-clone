import React from "react";
import { useStateValue } from "./../StateProvider";

const CurrencyFormet = () => {
  const [{ cart }, dispatch] = useStateValue();
  const total = cart.reduce((total, item) => total + parseFloat(item.price), 0);
  return (
    <div className="bg-light d-flex flex-column border border-secondary py-2 px-5">
      <p className="my-3">
        Subtotal ({cart.length} items):
        <span style={{ fontWeight: "bold" }}> ${total}</span>
      </p>
      <div className="d-flex">
        <input className="mt-1 px-2" type="checkbox" id="valueCheck" />
        <label className="px-2" htmlFor="valueCheck">
          This order contains a gift
        </label>
      </div>
      <button className="btn btn-warning my-3">Procude to Checkout</button>
    </div>
  );
};

export default CurrencyFormet;
