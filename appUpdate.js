var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, client){
    if (err) {
        console.log(err);
    } else {
        var db = client.db('db_kurs_mongo');
        console.log("Połączono z bazą db_kurs_mongo");
        updateProduct(db, function(){
        client.close();
        });
    }
});

var updateProduct = function(db, callback) {
    db.collection('products').updateOne(
        {
            name: "Y-New Product 3",
        },
        {
            $set: { "attributes": { os: 'osx', licence: 'home' }}
        },
        function(err, result){
            if (err) {
                console.log(err);
            } else {
                console.log("Zmodyfikowano dokument w kolekcji." + result);
            }
            callback();
        });
};