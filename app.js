const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoue = require("./routes/admin");
const shopRoute = require("./routes/shop");
const app = express();

app.set("view engine", "ejs");

// middle wares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoue);
app.use(shopRoute);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "pageNotFound.html"));
});

app.listen(3000, () => console.log("app serve on PORT 3000"));
