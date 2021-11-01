let http = require("http");
let add = require("./insert.js");
let ret = require("./view.js");
let del = require("./delete.js");
let color = require("./color.js");
let fake = require("./fake.js");

let MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, db) => {
  if (err) console.log(err);
  let dbo = db.db("hello");

  dbo.createCollection("abc", (err) => console.log(err));
  // db.close();
});

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text / HTML" });
      res.write(`<h1><center>Assignment # 01</center></h1>`);
      res.write(`<h1><a href="/insert" >Insert</a></h1>`);
      res.write(`<h1><a href="/view">View</a></h1>`);
      res.write(`<h1><a href="/delete">Delete</a></h1>`);
      res.write(`<h1><a href="/colorinfo">Color</a></h1>`);
      res.write(`<h1><a href="/fake">Fake Person</a></h1>`);
      res.end();
    } else if (req.url === "/insert" && req.method === "GET") {
      let obj = { name: "Shaan", age: 31, dept: "CS" };
      add.insert(obj);
      res.end(`<h1>Document Added Successfully</h1>`);
    } else if (req.url === "/view" && req.method === "GET") {
      ret.view();
      res.end(`<h1>Records in CONSOLE</h1>`);
    } else if (req.url === "/delete" && req.method === "GET") {
      del.Delete({ name: "shaan" });
      res.end(`<h1>Deleted Successfully</h1>`);
    } else if (req.url === "/colorinfo" && req.method === "GET") {
      color.colorInfo("red");
      res.end(`<h1>COLOR INFO</h1>`);
    } else if (req.url === "/fake" && req.method === "GET") {
      fake.randomperson();
      res.end(`<h1>FAKE PERSON</h1>`);
    }
  })
  .listen(3000);
