const express = require("express");
const data = express();
const port = 8080;
const dataSiswa = require("./DataSiswa");

data.get("/", (req, res) => {
  res.send("Selamat Datang Di Data Center Siswa Indonesia");
});

data.use ("/DataSiswa", dataSiswa);

data.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
