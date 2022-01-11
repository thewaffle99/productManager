const mongoose = require("mongooes");
mongoose
  .connect("mongodb://localhost/productManagerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established a connection to the DB"))
  .catch(
    (err) => console.log("something went wrong when connecting to the DB"),
    err
  );
