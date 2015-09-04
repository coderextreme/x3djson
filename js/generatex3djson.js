var Jsonix = require('jsonix').Jsonix;
var x3djson = require('../mappings/x3djson.js').x3djson;

var context = new Jsonix.Context([x3djson]);

var unmarshaller = context.createUnmarshaller();

unmarshaller.unmarshalFile('../HelloWorld.x3d',
    function (unmarshalled) {
        console.log(JSON.stringify(unmarshalled, null, "  "));
    });
