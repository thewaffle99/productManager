const express = require("express");
const app = express();
const cors = require("cors");
app.use.name(cors());
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");

const productManagerRoutes = require("./routes/productManager.routes");
productManagerRoutes(app);

app.listen(port, () => constol.log(`Listening on port ${port}`));
