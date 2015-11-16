// Convert JSONIX XML to JSON output format to X3D JSON

var content = '';
// read content into buffer
process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });

function ConvertJSONToJSON(prototypes, parentobject) {
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
				if (tag !== 'Meta' && tag != 'Field') {
					object[tag] = {};
				}
			}
		}
		var routeArray = [];
		// var routeIndex = -1;
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
								"composedGeometryContentModel": "-coord",
								"content": "field",
								"backgroundOrColorInterpolatorOrCoordinateInterpolator": "-children"
							}
							if (typeof mapp[p] !== 'undefined') {
								object[tag][mapp[p]] = ConvertJSONToJSON(prototypes[p], object[tag]);
							} else if (p === 'fontStyle') {
								object[tag]['-fontStyle'] = [ConvertJSONToJSON(prototypes[p])];
							} else if (p === 'audioClip') {
								object[tag]['-source'] = [ConvertJSONToJSON(prototypes[p])];

							} else {
								// this is for attribute names
								object[tag]['@'+p] = ConvertJSONToJSON(prototypes[p]);
							}
						}
					}
				} else {
					var obj = ConvertJSONToJSON(prototypes[p]);
					if (typeof obj['ROUTE'] !== 'undefined') {
						routeArray.push(obj['ROUTE'])
						if (isArray) {
							/*
							if (routeIndex >= 0) {
								delete object[routeIndex];
							}
							routeIndex = p;
							object[routeIndex] = { 'ROUTE' : routeArray };
							*/
							if (typeof parentobject !== 'undefined') {
								parentobject['ROUTE'] = routeArray;
							}
						}
					} else {
						object[p] = obj;
					}
				}
			} else if (p !== 'TYPE_NAME') {
				if (!isArray && typeof tag !== 'undefined') {
					if (tag === 'Meta' || tag === 'Field') {
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
					
						if (typeof prototypes[p] === 'string' && (p === 'url' || p === 'justify' || p === 'string' || p === 'parameter' || p === 'family' || p === 'type')) {
							object[tag]['@'+caps] = prototypes[p].replace(/^"/, '').replace(/"$/, '').replace(/" "/g,'","').replace(/&/g, '&amp;').split(/","/);
						} else {
							object[tag]['@'+caps] = prototypes[p];
						}
					}
				} else {
					if (typeof prototypes[p] === 'string') {
						object[p] = prototypes[p].replace(/"/g, '').replace(/&/g, '&amp;');
					} else {
						object[p] = prototypes[p];
					}
				}
			} else {
				// do nothing
			}
		}
		if (isArray) {
			var np = 0;
			var consolidatedArray = [];
			for (p in object) {
				if (object[p] !== null) {
					consolidatedArray[np++] = object[p];
				}
			}
			object = consolidatedArray;
		} else {
			var route = object['ROUTE'];
			delete object['ROUTE'];
			object['ROUTE'] = route;
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
