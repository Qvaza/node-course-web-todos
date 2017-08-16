const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Die'}).then(function(result) {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Jump'}).then(function(result) {
    //     console.log(result);
    // })

    db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then(function(result) {
        console.log(result);
    })

    //db.close();
});