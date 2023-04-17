const fs = require("fs");

const routesHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      res.write("<html>");
      res.write("<head><title>Collect Data </title></head>");
      res.write(
        "<body><h1>Enter Message</h1> <form action='/message' method='post'><input type='text' name='message'/> <button type='submit'>Send</button></form></body>"
      );
      res.write("</html>");
      res.end();
      break;

    case "/message":
      if (req.method == "POST") {
        const dataStream = [];
        req.on("data", (chunk) => {
          console.log(chunk);
          dataStream.push(chunk);
        });

        req.on("end", () => {
          const parsedData = Buffer.concat(dataStream).toString();
          const message = parsedData.split("=")[1];
          fs.writeFile("messages.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
          });
        });
      }
      break;

    default:
      res.write("<html>");
      res.write("<head><title>First of many isa</title></head>");
      res.write("<body><h1>FIRST OF MANY ISA</h1></body>");
      res.write("</html>");
      res.end();
  }
};

exports.routesHandler = routesHandler;
