// load JSONIX JSON format to X3D XML

function ConvertObjectToX3D(object, element) {
	var newtag = object["TYPE_NAME"];
	for (attr in object) {
		if (isNaN(parseInt(attr)) && attr !== "TYPE_NAME") {
			
			if (typeof object[attr] !== 'object') {
				element.setAttribute(attr, object[attr]);
			} else if (attr === 'string' || attr === 'url' || attr === 'justify') {
				// STRING ARRAYS, add new attribute above
				element.setAttribute(attr, object[attr].join(' '));
			}
		}
		if (typeof object[attr] === 'object') {
			var tag = object[attr]["TYPE_NAME"];
			if (typeof tag === 'undefined') {
				ConvertJSONToX3D(object[attr], element);
			} else {
				var child = document.createElement(tag.substr(8));
				ConvertObjectToX3D(object[attr], child);
				element.appendChild(child);
			}
		}
	}
}

function ConvertJSONToX3D(prototypes, element) {
	var p;
	var script = false;
	var attr;
	var buffer = '';
	if (typeof prototypes === "object") {
		ConvertObjectToX3D(prototypes, element);
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
					// console.log("<!--"+prototypes[p]+"-->");
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
				console.log(buffer
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;'));
			}
		}
	}
}

function loadURL(selector, url) {
	var element = document.querySelector(selector);
	if (element === null) {
		console.log("body not found document");
	} else {

		$.getJSON(url, function(json) {
			var div = document.createElement("div");
			ConvertJSONToX3D(json, div);
			element.appendChild(div);
			x3dom.reload();
		})
		.fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus + ' ' + errorThrown); });
	}
}
