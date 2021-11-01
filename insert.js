let MongoClient = require("mongodb").MongoClient;

const insert = (obj) => {
  MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    if (err) console.log(err);
    let dbo = db.db("hello");
    dbo.collection("abc").insertOne(obj, (err) => {
      if (err) console.log(err);
      console.log("Add SuccessFully");
    });
  });
};

exports.insert = insert;
