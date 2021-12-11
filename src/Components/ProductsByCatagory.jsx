import React from "react";
import { useParams } from "react-router-dom";
import FakeData from "./../FakeData";
import Header from "./Header";
import Product from "./Product";
import Sideber from "./Sideber";

const ProductsByCatagory = () => {
  const { title } = useParams();
  const pdByCatagory = FakeData.find(
    (catagory) => catagory.catagoryName === title
  );
  const allProducts = pdByCatagory.catagoryDetails;
  return (
    <div>
      <Header></Header>
      <div className="allPd">
        <Sideber></Sideber>
        <div className="gridElement">
          <h4>{title}</h4>
          <div className="row ">
            {allProducts.map((pd) => (
              <Product
                image={pd.image}
                title={pd.title}
                ranking={pd.ranking}
                price={pd.price}
                id={pd.id}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsByCatagory;
