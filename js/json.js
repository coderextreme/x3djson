// Mass X3D to JSON converter

var Jsonix = require('jsonix').Jsonix;
var x3djson = require('../mappings/x3djson.js').x3djson;

var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

for (i in process.argv) {
	if (i < 2) {
		continue;
	}
	var file = process.argv[i];
	unmarshaller.unmarshalFile(file,
	    function (unmarshalled) {
		console.log(JSON.stringify(unmarshalled));
	    });
}

