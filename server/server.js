const express = require("express");
const app = express();
const cors = require("cors");
const stores = require("./data/storesList.json");

app.use(cors()); // enable CORS for all routes

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/stores", (req, res) => {
  res.send(stores);
});
app.listen(5000, () => {
  console.log("server running on port 5000");
});
