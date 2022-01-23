import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Detail;
