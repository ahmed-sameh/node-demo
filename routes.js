const fs = require("fs");

const rqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Home</title> </head>");
    res.write("<body>");
    res.write(
      '<form action="/message" method="POST"><input type=text" name="message"/><button type="submit">Submit</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("messages.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>404</title> </head>");
  res.write("<body>");
  res.write("<h1>404 Error => Can't Found Your Page</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

exports.handler = rqHandler;
