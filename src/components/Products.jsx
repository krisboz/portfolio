import React from "react";
import "../styles/Products.scss";
import Product from "./Product";
import dashboardImage from "../assets/qualitrack/Dashboard.png";
import qtLogo from "../assets/qualitrack/qt-logo.png";

const PRODUCTS = [
  {
    name: "QualiTrack",
    description:
      "Quality control dashboard for jewelry purposes, thought of, designed, developed and completetly shipped all by myself allongside my other responsibilities.",
    img: dashboardImage,
    logo: qtLogo,
    stack: ["react", "sass", "node", "sqlite"],
    link: "/products/qualitrack",
  },
];

const Products = () => {
  return (
    <section className="products">
      <div className="title-container">
        <h2>PRODUCT(S)</h2>
      </div>

      <div className="products-wrapper">
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
