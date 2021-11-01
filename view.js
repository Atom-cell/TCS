let MongoClient = require("mongodb").MongoClient;
let foundData = null;

const view = () => {
  MongoClient.connect("mongodb://localhost:27017", (err, db) => {
    if (err) console.log(err);
    let dbo = db.db("hello");
    dbo
      .collection("abc")
      .find({})
      .toArray((err, data) => {
        if (err) console.log(err);
        console.log(data);
        return data;
      });
  });
};

exports.view = view;
