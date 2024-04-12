const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/development", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "developmentWeb.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
