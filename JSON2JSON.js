// Convert JSONIX XML to JSON output format to X3D JSON (on standard input)

// see js/StyleSheet.js for actual code

var stylesheet = require('./js/StyleSheet');

var content = [];
// read content into buffer
process.stdin.on('data', function(buf) {
	content.push(buf);
});

process.stdin.on('end', function() {
	var prototypes = JSON.parse(content.join());
	var json = stylesheet(prototypes);
	console.log(JSON.stringify(json, null, 2));
});
