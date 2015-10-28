var Jsonix = require('jsonix').Jsonix;
var x3djson = require('../mappings/x3djson.js').x3djson;
var fs = require('fs');

var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

function convertToJSON(file) {
	unmarshaller.unmarshalFile(file,
	    function (unmarshalled) {
		var x3d = file.lastIndexOf(".x3d");
		console.log(x3d);
	        if (x3d >= 0) {
			var jsfile = file.substr(0, x3d)+".json2";
			console.log(jsfile);
			fs.writeFile(jsfile, JSON.stringify(unmarshalled, null, "  "));
		}
	    });
}

for (i in process.argv) {
	if (i < 2) {
		continue;
	}
	var file = process.argv[i];
	try {
		console.log(file);
		convertToJSON(file);
	} catch (e) {
		console.error(e);
	}
}