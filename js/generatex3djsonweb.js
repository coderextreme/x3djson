var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalURL('HelloWorld.x3d',
    function (unmarshalled) {
        document.write(JSON.stringify(unmarshalled, null, "  "));
    });
