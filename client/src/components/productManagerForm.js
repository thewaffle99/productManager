import React, { useState } from "react";
import axios from "axios";
const ProductManagerForm = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-5 my-5 d-flex justify-content-center">
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Descripton</label>
          <br />
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </p>
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};
export default ProductManagerForm;
