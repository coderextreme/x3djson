var context = new Jsonix.Context([x3djson]);

var marshaller = context.createMarshaller();

function loadURL(selector, url) {
	var element = document.querySelector(selector);
	if (element === null) {
		console.log("body not found document");
	} else {

		$.getJSON(url, function(json) {
			var div = document.createElement("div");
			var html = marshaller.marshalString(json);
			div.innerHTML = html;
			console.log(html);
			element.appendChild(div)
			x3dom.reload();
		})
		.fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus + ' ' + errorThrown); });
	}
};
