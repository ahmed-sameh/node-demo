const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const frontRoutes = require("./routes/shop");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(frontRoutes);

app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404");
});

app.listen(3000);
