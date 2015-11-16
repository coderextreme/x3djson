// Convert JSONIX XML to JSON output format to X3D JSON

var content = '';
// read content into buffer
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });

function ConvertJSONToJSON(prototypes) {
	var p;
	var tag;
	var object;
	var isArray = false;
	if (typeof prototypes === "object") {
		for (p in prototypes) {
			if (!isNaN(parseInt(p))) {  // is numeric
				object = [];
				isArray = true;
			} else if (typeof object === 'undefined') {
				object = {};
			}
			if (p === "TYPE_NAME") {
				tag = prototypes[p];
				tag = tag.substr(8);
				if (tag !== 'Meta') {
					object[tag] = {};
				}
			}
		}
		for (p in prototypes) {
 			if (typeof prototypes[p] === 'object') {
				if (p === 'name') {
					// do nothing with the name object
				} else if (p === 'value') {
					// the object which contains name and value keys can be overwritten
					object = ConvertJSONToJSON(prototypes[p]);
				} else if (!isArray && typeof tag !== 'undefined') {
					var tagobject;
					// initialize tagobject each time
					if (tag === 'Head') {
						delete object[tag];
						object['meta'] = ConvertJSONToJSON(prototypes[p]);
					} else if (tag === 'Scene') {
						delete object[tag];
						object['-children'] = ConvertJSONToJSON(prototypes[p]);
					} else {

						// anything that isn't a child of X3D
						
						if (typeof object[tag] === 'undefined') {
							object[tag] = {};
						}
						if (tag === 'Shape' && p === 'rest') {
							object[tag]['-geometry'] = [ConvertJSONToJSON(prototypes[p][0])];
							object[tag]['-appearance'] = [ConvertJSONToJSON(prototypes[p][1])];
						} else {
							var mapp = {
								"head": "head",
								"scene": "Scene",
								"appearanceChildContentModel": "-material",
								"composedGeometryContentModel": "-coord"
							}
							if (typeof mapp[p] !== 'undefined') {
								object[tag][mapp[p]] = ConvertJSONToJSON(prototypes[p]);

							} else {
								// this is for attribute names
								object[tag]['@'+p] = ConvertJSONToJSON(prototypes[p]);
							}
						}
					}
					// note that object may be object[tag]
				} else {
					object[p] = ConvertJSONToJSON(prototypes[p]);
				}
			} else if (p !== 'TYPE_NAME') {
				if (!isArray && typeof tag !== 'undefined') {
					if (tag === 'Meta') {
						object['@'+p] = prototypes[p];
					} else {
						if (typeof object[tag] === 'undefined') {
							object[tag] = {};
						}
						if (p === 'def') {
							caps = "DEF";
						} else if (p === 'use') {
							caps = "USE";
						} else {
							caps = p;
						}
					
						object[tag]['@'+caps] = prototypes[p];
					}
				} else {
					object[p] = prototypes[p];
				}
			} else {
				// do nothing
			}
		}
	}
	return object;
}

process.stdin.on('end', function() {
	var prototypes = JSON.parse(content);
	var object = {};
	var json = ConvertJSONToJSON(prototypes);
	console.log(JSON.stringify(json, null, 2));
});
