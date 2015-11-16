// Convert JSONIX XML to JSON output format to X3D JSON

var content = '';
// read content into buffer
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });

var stylesheet = require('./js/StyleSheet');

process.stdin.on('end', function() {
	var prototypes = JSON.parse(content);
	var object = {};
	var json = stylesheet(prototypes);
	console.log(JSON.stringify(json, null, 2));
});
