const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.routes");
const frontRoutes = require("./routes/front.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(frontRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
