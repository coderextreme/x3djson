// Java Style Sheet Language, implementation 2

// Convert my JSON format to X3D XML

var content = '';
// read content into buffer
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });

function ConvertObjectToX3D(object, indent) {
	var newtag = object["TYPE_NAME"];
	if (typeof newtag !== 'undefined') {
		newtag = newtag.substr(8);
		if (newtag === "Head") {
			newtag = "head";
		} else if (newtag === "Meta") {
			newtag = "meta";
		}
	}
	var attrs = [];
	for (attr in object) {
		if (attr !== "TYPE_NAME") {
			var newattr = attr;
			if (attr === "def") {
				newattr = "DEF";
			} else if (attr === "use") {
				newattr = "USE";
			}
			if (typeof object[attr] !== 'object') {
				attrs.push(" "+newattr+'=\''+object[attr]+'\'');
			} else if (newattr === 'string' || newattr === 'url' || newattr === 'justify') {
				// STRING ARRAYS, add new attribute above
				attrs.push(" "+newattr+'=\''+object[attr].join(' ')+'\'');
			}
		}
	}
	if (typeof newtag !== 'undefined') {
		process.stdout.write(indent+"<"+newtag+attrs.join(''));
	}
	var closed = false;
	for (attr in object) {
		if (typeof object[attr] === 'object') {
			if (typeof newtag !== 'undefined') {
				if (!closed) {
					console.log('>');
					closed = true;
				}
			}
			var tag = object[attr]["TYPE_NAME"];
			if (typeof tag === 'undefined') {
				ConvertJSONToX3D(object[attr], indent+"  ");
			} else {
				ConvertObjectToX3D(object[attr], indent+"  ");
			}
		}
	}
	if (typeof newtag !== 'undefined') {
		if (!closed) {
			console.log('/>');
			closed = true;
		} else {
			console.log(indent+"</"+newtag+">");
		}
	}
}

function ConvertJSONToX3D(prototypes, indent) {
	var p;
	var script = false;
	var attr;
	var buffer = '';
	if (typeof prototypes === "object") {
		ConvertObjectToX3D(prototypes, indent);
		for (p in prototypes) {
			if (typeof prototypes[p] === 'object') {
				var newtag = prototypes[p]["TYPE_NAME"];
				if (typeof newtag !== 'undefined') {
					if (newtag.toLowerCase() === 'script') {
						script = true;
					}
				}
			} else {
				if (script) {
					buffer += prototypes[p];
				} else {
					// console.log(indent+"<!--"+prototypes[p]+"-->");
				}
			}
		}
		if (buffer !== '') {
			if (buffer.indexOf("ecmascript:") === 0) {
				console.log("<![CDATA[");
				console.log(buffer
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;'));
				console.log("]]>");
			} else {
				console.log(indent+buffer
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;'));
			}
		}
	}
}

process.stdin.on('end', function() {
	var prototypes = JSON.parse(content);
console.log('<?xml version="1.0" encoding="UTF-8"?>');
console.log('<!DOCTYPE X3D PUBLIC "ISO//Web3D//DTD X3D 3.4//EN" "http://www.web3d.org/specifications/x3d-3.4.dtd">');
	ConvertJSONToX3D(prototypes, '');
});
