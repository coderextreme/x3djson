// var Jsonix = require('jsonix').Jsonix;
// var x3djsonSchema = require('../mappings/x3djson.jsonschema').x3djson;

var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalURL('HelloWorld.x3d',
    function (unmarshalled) {
        document.write(JSON.stringify(unmarshalled, null, "  "));
    });
