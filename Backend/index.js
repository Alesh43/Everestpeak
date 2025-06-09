const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("EPIC Backend!");
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
