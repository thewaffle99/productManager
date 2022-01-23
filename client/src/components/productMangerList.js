import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
const ProductManagerList = (props) => {
  const { product, setProduct } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-5 my-5 d-flex justify-content-center">
      <div>
        {product.map((product, index) => {
          return (
            <Link
              className="d-flex justify-content-center"
              to={`/api/product/${product._id}`}
              key={index}
            >
              {product.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ProductManagerList;
