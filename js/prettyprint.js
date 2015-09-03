// Java Style Sheet Language, implementation 2

var fs = require('fs');

function parseFile(file) {
	fs.readFile(file, function(err, data) {
		if (err) {
			throw err;
		}
		try {
			console.log(JSON.stringify(JSON.parse(data), null, "  "));
		} catch (e) {
		}
	});
}
for (i in process.argv) {
	if (i < 2) {
		continue;
	}
	var file = process.argv[i];
	parseFile(file);
}
