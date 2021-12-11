import { style } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Catagory = (props) => {
  return (
    <div class="product">
      <h2>{props.title}</h2>
      {props.children}
      <img className={props.newClass || style.root} src={props.image} alt="" />
      <Link to={"/catagory/" + props.title}>{props.link}</Link>
    </div>
  );
};

export default Catagory;
