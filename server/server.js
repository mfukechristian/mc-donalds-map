const express = require("express");
const app = express();
const cors = require("cors");
const stores = require("./data/storesList.json");
const PORT = process.env.PORT || 5000;

app.use(cors()); // enable CORS for all routes

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/stores", (req, res) => {
  res.send(stores);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
