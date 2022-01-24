import React, { useState } from "react";
import axios from "axios";
import ProductManagerForm from "../components/productManagerForm";
import ProductManagerList from "../components/productManagerList";
const Main = (props) => {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <ProductManagerForm product={product} setProduct={setProduct} />
      <hr />
      <ProductManagerList product={product} setProduct={setProduct} />
    </div>
  );
};
export default Main;
