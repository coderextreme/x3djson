var fs = require('fs');

// connect to mongo
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'mongodb://localhost:27017/testing_storeX3D';

// our model
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.error('mongo is open');
	var removeDocuments = function(db, callback) {
	  // Get the documents collection
	  var collection = db.collection('documents');
	  // Insert some documents
	  collection.remove({}, function(err, result) {
	    console.log("Removed the documents");
	    callback(result);
	  });
	}
	var insertDocuments = function(db, callback) {
		var collection = db.collection('documents');
		try {
			var file = "HelloWorld.json";
			fs.readFile(file, function(err, data) {
				if (err) {
					throw err;
				}
				var hello = JSON.parse(data);
				collection.insert(hello, function(err, result) {
					assert.equal(err, null);
					console.log('inserted');
					callback(result);
				});
			});
		} catch (e) {
			console.log(file, 'failed', e);
		}
	};
	var findDocuments = function(db, callback) {
		var collection = db.collection('documents');
		collection.find({}).toArray(function(err, docs) {
			callback(docs);
			console.log(docs);
		});
	};
	removeDocuments(db, function() {
		console.log('removed');
		insertDocuments(db, function() {
			console.log('saved')
			findDocuments(db, function() {
				console.log('found records');
				db.close();
			});
		});
	});
  });
