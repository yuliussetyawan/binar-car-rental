const fs = require("fs");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 8000;
const PUBLIC_DIRECTORY = path.join(__dirname, "../", "public");

const getHTML = (htmlFileName) => {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "UTF-8");
};

const getImg = (imgFileName) => {
  const imgFilePath = path.join(PUBLIC_DIRECTORY, imgFileName);
  return fs.readFileSync(imgFilePath);
};

const getCSS = (cssFileName) => {
  const cssFilePath = path.join(PUBLIC_DIRECTORY, cssFileName);
  return fs.readFileSync(cssFilePath, "UTF-8");
};

const getJS = (jsFileName) => {
  const jsFilePath = path.join(PUBLIC_DIRECTORY, jsFileName);
  return fs.readFileSync(jsFilePath, "UTF-8");
};

const onRequest = (req, res) => {
  console.log(req.url);
  let img = "";
  let css = "";
  let js = "";

  if (req.url.match(".css$")) {
    css = req.url;
  } else if (req.url.match(".js$")) {
    js = req.url;
  } else if (
    req.url.match(".png$") ||
    req.url.match(".jpg$") ||
    req.url.match(".svg$")
  ) {
    img = req.url;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getHTML("index.html"));
      return;
    case "/cars":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getHTML("cars.html"));
      return;
    case img:
      res.writeHead(200, { "Content-Type": "image" });
      res.end(getImg(img));
      return;
    case css:
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(getCSS(css));
      return;
    case js:
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(getJS(js));
      return;
    default:
      res.writeHead(404);
      res.end(getHTML("404.html"));
      break;
  }
};

http.createServer(onRequest).listen(PORT, "", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
