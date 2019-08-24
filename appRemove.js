var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';
var db;

MongoClient.connect(url, function(err, client){
    if (err) {
        console.log(err);
    } else {
        db = client.db('db_kurs_mongo');
        console.log("Połączono z bazą db_kurs_mongo");
        removeDocument(db, function(){
        // client.close();
        });
    }
});

var removeDocument = function(db, callback) {
    db.collection('products').removeOne(
        {
            name: "Y-New Product 33",
        }, function(err, result){
            if (err) {
                console.log(err);
            } else {
                console.log("Usunięto dokument z kolekcji." + result);
            }
        });
        db.close();
};