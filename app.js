const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.json({ name: "Ibrahim" }));

app.listen(port, () =>
  console.log("The application is running on localhost:8000")
);
