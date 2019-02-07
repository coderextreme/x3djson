// load JSON to XML without having own parser

var context = new Jsonix.Context([x3djson]);

var marshaller = context.createMarshaller();

function loadURL(selector, url) {
	var element = document.querySelector(selector);
	if (element === null) {
		console.log("body not found document");
	} else {

		$.getJSON(url, function(json) {
			var xml = marshaller.marshalString(json);
			console.log(xml);
			$(element).append(xml);
			x3dom.reload();
		})
		.fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus + ' ' + errorThrown); });
	}
};
