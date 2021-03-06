import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Update = (props) => {
  const { id } = props;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + id, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        navigate(`/api/product/${id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-5 my-5 d-flex justify-content-center">
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Descripton</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};
export default Update;
