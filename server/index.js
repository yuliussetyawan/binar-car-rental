const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

const PUBLIC_DIRECTORY = path.join(__dirname, "../", "public");

app.use(express.static(PUBLIC_DIRECTORY));

app.get("/", (req, res) => {
  res.sendFile(PUBLIC_DIRECTORY + "/index.html");
});

app.get("/cars", (req, res) => {
  res.sendFile(PUBLIC_DIRECTORY + "/cars.html");
});

app.use((req, res) => {
  res.status(404).sendFile(PUBLIC_DIRECTORY + "/404.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
