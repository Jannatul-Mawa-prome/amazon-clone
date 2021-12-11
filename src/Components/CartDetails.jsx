import React from "react";
import { useStateValue } from "./../StateProvider";

const CartDetails = (props) => {
  const pd = props.pd;
  const [{ cart }, dispatch] = useStateValue();
  const handleClick = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        id: pd.id,
      },
    });
  };

  return (
    <div className="cart_body">
      <img className="pdImg" src={pd.image} alt="banner" />
      <div className="px-5 ">
        <h5 className="mb-4">{pd.title}</h5>
        <strong>
          Price: $ <span>{pd.price}</span>
        </strong>
        <p>
          {Array(pd.ranking)
            .fill()
            .map((_, i) => (
              <i class="fas fa-star text-warning ml-1"></i>
            ))}
        </p>
        <button onClick={handleClick} className="btn btn-danger my-3">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
