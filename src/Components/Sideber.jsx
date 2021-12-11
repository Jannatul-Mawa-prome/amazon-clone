import React from "react";
import { Link } from "react-router-dom";
import FakeData from "../FakeData";

const Sideber = () => {
  return (
    <div className="sideber">
      <ul>
        {FakeData.map((catagory) => (
          <li>
            <Link to={"/catagory/" + catagory.catagoryName}>
              {catagory.catagoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sideber;
