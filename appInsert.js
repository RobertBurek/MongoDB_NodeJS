var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, client){
    if (err) {
        console.log(err);
    } else {
        var db = client.db('db_kurs_mongo');
        console.log("Połączono z bazą db_kurs_mongo");
        insertDocument(db, function(){
           client.close();
        });
    }
});

var insertDocument = function(db, callback) {
    db.collection('products').insertOne(
        {
            name: "Y-New Product 33",
            category: "software",
            price: 250,
            stock: 35
        },function(err, result){
            if (err) {
                console.log(err);
            } else {
                console.log("Wstawiono nowy dokument do bazy." + result);
                callback();
            }
    });
};