// convert JSON to XML
var Jsonix = require('jsonix').Jsonix;
var x3djson = require('../mappings/x3djson.js').x3djson;
var fs = require('fs');

var context = new Jsonix.Context([x3djson]);

var marshaller = context.createMarshaller();
function convertToX3D(file) {
	var data = fs.readFileSync(file);
	var json = JSON.parse(data);
	var xml = marshaller.marshalString(json);
	var reg = /(>)\s*(<)(\/*)/g;
	xml = xml.replace(/\r|\n/g, ''); //deleting already existing whitespaces
	xml = xml.replace(reg, '$1\r\n$2$3');
	xml = xml.replace(/"/g,'\'');
	xml = xml.replace(/&quot;/g,'"');
	var dot = file.lastIndexOf(".json");
	if (dot >= 0) {
		var xmlfile = file.substr(0, dot)+".x3d";
		console.log(xmlfile);
		fs.writeFile(xmlfile, xml);
	}
}

for (i in process.argv) {
	if (i < 2) {
		continue;
	}
	var file = process.argv[i];
	try {
		convertToX3D(file);
	} catch (e) {
		console.error(e);
	}
}
