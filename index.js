import http from "node:http";
import url from "node:url";
import fs from "node:fs";

http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        fs.readFile("./index.html", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/about":
        fs.readFile("./about.html", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/contact-me":
        fs.readFile("./contact-me.html", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      default:
        fs.readFile("./404.html", (err, data) => {
          if (err) console.log(err);
          res.writeHead(404, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
    } 
  })
  .listen(8082);
