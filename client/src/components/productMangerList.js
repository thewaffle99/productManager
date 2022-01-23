import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <div className=" justify-content-center">
        {product.map((product, index) => {
          return <p key={index}>{product.title}</p>;
        })}
      </div>
    </div>
  );
};
export default ProductManagerList;
