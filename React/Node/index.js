const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const videos = [
  "dQw4w9WgXcQ",
  "EXtjWIiSKb0",
  "ZtMzB5CoekE",
  "CKgwcuAvM6E",
  "GpWD5r1VcNg",
];

app.get("/api/videos", (req, res) => {
  res.send(videos);
});

// if (process.env.NODE_ENV != "development") {
  app.use(express.static(path.join(__dirname, "client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "client/dist/index.html", function (error) {
        if (error) {
          res.status(500).send(error);
        }
      })
    );
  });
// }

app.listen(3000, () => {
  console.log("Running");
});
