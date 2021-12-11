import React from "react";
import Catagory from "./Catagory";

const AllCatagory = () => {
  return (
    <div className="productsSection">
      <div className="allProducts">
        <Catagory
          id="1"
          title="AmazonBasics"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          link="see more"
        ></Catagory>
        <Catagory
          id="2"
          title="Computers & Accessories"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlDkKrP7Pm29pYxVTFpJewNRp1CRrR6nOWg&usqp=CAU"
          link="Shop Now"
        ></Catagory>
        <Catagory
          id="3"
          title="Electronics"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          link="see more"
        ></Catagory>
        <Catagory
          id="4"
          newClass="productSell"
          title="Sign in for the best experience"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
        >
          <button>sign in securly</button>
        </Catagory>
      </div>
      <div className="allProducts">
        <Catagory
          id="5"
          title="Oculus"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
          link="see more"
        ></Catagory>
        <Catagory
          id="6"
          title="Deals & Promotions"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
          link="Shop Now"
        ></Catagory>
        <Catagory
          id="7"
          title="Gaming accessories"
          image="https://www.extremetech.com/wp-content/uploads/2017/11/PC-Gaming-640x353.jpg"
          link="see more"
        ></Catagory>
        <Catagory
          id="8"
          title="Shop by Category"
          image="https://cdn2.momjunction.com/wp-content/uploads/2015/01/19-Best-Learning-Toys-For-Babies-In-2020-1.jpg"
          link="Shop Now"
        ></Catagory>
      </div>
    </div>
  );
};

export default AllCatagory;
