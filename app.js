const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Guys!");
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
