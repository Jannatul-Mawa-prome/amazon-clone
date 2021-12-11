import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useStateValue } from "./../StateProvider";

const Product = (props) => {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
        ranking: props.ranking,
      },
    });
  };
  return (
    <div class="col-md-4 pdDetails  ">
      <div className="pdByCatagory">
        <img className="img-fluid" src={props.image} alt="" />
        <h5 className="mt-3 text-secondary">{props.title}</h5>
        <div className="rateing d-flex my-3">
          {Array(props.ranking)
            .fill()
            .map((_, i) => (
              <i class="fas fa-star text-warning ml-1"></i>
            ))}
        </div>
        <h3>${props.price}</h3>

        {loggedInUser.email ? (
          <button onClick={addToCart}>Add to Cart</button>
        ) : (
          <Link to="/login">
            <button>Add to Cart</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product;
