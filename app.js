var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/db_kurs_mongo';

MongoClient.connect(url, function(err, db){
    if (err) {
        console.log(err);
    } else {
        console.log("Połączono z bazą db_kurs_mongo");
    }
    db.close();
});