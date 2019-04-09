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

app.use(adminRoue.routes);
app.use(shopRoute);

app.post("/api/clients", (req, res) => {
  res.json([
    {
      name: "sara",
      age: 22,
      email: "sara@gmail.com"
    },
    {
      name: "ahmed",
      age: 33,
      email: "ahmed@gmzail.com "
    }
  ]);
});

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'pageNotFound.html'))
// })

app.listen(3000, () => console.log("app serve on PORT 3000"));
