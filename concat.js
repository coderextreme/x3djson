var fs = require('fs');

for (i in process.argv) {
	if (i < 2) {
		continue;
	}
	var file = process.argv[i];
	var data = fs.readFileSync(file);
	try {
		var json = JSON.parse(data)[0];
		console.log(JSON.stringify(json));
	} catch (e) {
		console.error(e);
	}
}
