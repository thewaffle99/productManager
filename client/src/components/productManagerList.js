import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

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

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct(product.filter((product, index) => product._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mx-5 my-5 d-flex align-items-center flex-column">
      {product.map((product, index) => {
        return (
          <div key={index} className=" d-flex flex-column align-items-center ">
            <Link
              className="btn btn-primary text-uppercase"
              to={`/api/product/${product._id}`}
            >
              {product.title}
            </Link>
            <div>
              <Link
                className="btn btn-secondary"
                to={`/api/product/edit/${product._id}`}
              >
                Edit
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductManagerList;
