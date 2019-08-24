var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, client){
    if (err) {
        console.log(err);
    } else {
        var db = client.db('db_kurs_mongo');
        console.log("Połączono z bazą db_kurs_mongo");
        listProducts(db, function(){
           client.close();
        });
    }
});

var listProducts = function(db, callback) {
    var cursor = db.collection('products').find(
        { category: "software" }, 
        // { _id: 0, name: 1, price: 1 }
    );
    cursor.each(function(err, doc){
        console.log(doc);
        callback();
    });
};