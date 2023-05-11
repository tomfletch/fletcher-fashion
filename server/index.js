const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Fletcher Fashion API" });
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('**', function (req, res) {
  console.log('here');
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
