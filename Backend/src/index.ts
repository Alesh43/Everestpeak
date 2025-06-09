import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from your backend!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
