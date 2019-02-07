var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalURL('Box.x3d',
    function (unmarshalled) {
        document.write(JSON.stringify(unmarshalled, null, "  "));
    });
