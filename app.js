const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const frontRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors.controller");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(frontRoutes);

app.use(errorsController.get404);

app.listen(3000);
