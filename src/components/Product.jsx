import React from "react";
import dashboardImage from "../assets/qualitrack/Dashboard.png";
import getIcon from "./../helpers/getIcon";
import "../styles/Product.scss";
import { Link } from "react-router-dom";

const renderStack = (stack) => (
  <div className="stack">
    {getIcon(stack).map((Icon, index) => {
      return (
        <span title={stack[index].toUpperCase()} key={index}>
          {<Icon />}
        </span>
      );
    })}
  </div>
);

//TODO
//Choose a single style to have as final for products or at least for this product

const Product = ({ product }) => {
  return (
    <>
      <div className="product-1">
        <div className="left">
          <img src={product.logo}></img>
          <p className="description">{product.description}</p>
          {renderStack(product.stack)}
        </div>
        <div className="right">
          <img src={product.img}></img>
          <Link className="product-read-more-btn" to="/products/qualitrack">
            READ MORE
          </Link>
        </div>
      </div>

      {/*****************************************************************************
       *******************************************************************************
       ******************************************************************************* */}

      <div className="product-2"></div>
    </>
  );
};

export default Product;
