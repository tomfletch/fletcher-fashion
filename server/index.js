const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Fletcher Fashion API" });
});
