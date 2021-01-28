var config = require('../config/config');
var app = {};

app.insertMany = function() {
  var MongoClient = require("mongodb").MongoClient;  
  var mPromise = new Promise(function(resolve, reject) {
    MongoClient.connect(config.mongoUrl, { useUnifiedTopology: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = [
        { name: "John", address: "Highway 71" },
        { name: "Peter", address: "Lowstreet 4" },
        { name: "Amy", address: "Apple st 652" },
        { name: "Hannah", address: "Mountain 21" },
        { name: "Michael", address: "Valley 345" },
        { name: "Sandy", address: "Ocean blvd 2" },
        { name: "Betty", address: "Green Grass 1" },
        { name: "Richard", address: "Sky st 331" },
        { name: "Susan", address: "One way 98" },
        { name: "Vicky", address: "Yellow Garden 2" },
        { name: "Ben", address: "Park Lane 38" },
        { name: "William", address: "Central st 954" },
        { name: "Chuck", address: "Main Road 989" },
        { name: "Viola", address: "Sideway 1633" },
      ];
      dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        resolve(res.insertedCount);
        reject(false);
        db.close();
      });
    });
  });
  
  return mPromise;
};

app.selectMany = function() {
  var MongoClient = require("mongodb").MongoClient;  
  var mPromise = new Promise(function(resolve, reject) {
    MongoClient.connect(config.mongoUrl, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo
      .collection("customers")
      .find({}, { projection: {} })
      .toArray(function(err, result) {
        if (err) throw err;
        resolve(result);
        reject(false);
        db.close();
      });
    });
  });
  
  return mPromise;
};

module.exports = app;
