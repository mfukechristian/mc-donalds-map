const express = require("express");
// const cors = require("cors");
const app = express();
const stores = require("./data/storesList.json");

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/stores", (req, res) => {
  res.send(stores);
});
app.listen(5000, () => {
  console.log("server running on port 5000");
});
