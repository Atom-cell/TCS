let MongoClient = require("mongodb").MongoClient;

const Delete = (obj) => {
  MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    if (err) console.log(err);
    let dbo = db.db("hello");

    dbo.collection("abc").deleteOne(obj, (err, obj) => {
      if (err) console.log(err);
      console.log("Deleted SuccessFully");
    });
  });
};

exports.Delete = Delete;
