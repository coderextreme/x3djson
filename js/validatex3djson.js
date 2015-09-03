var fs = require('fs');
var Ajv = require('ajv');

var XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('./XMLSchema.jsonschema').toString());
var JsonixJsonSchema = JSON.parse(fs.readFileSync('./Jsonix.jsonschema').toString());
var X3dJsonSchema = JSON.parse(fs.readFileSync('./mappings/x3djson.jsonschema').toString());

var ajv = new Ajv();
ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema');
ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema');
var validate = ajv.compile(X3dJsonSchema);

var hello = JSON.parse(fs.readFileSync("./HelloWorld.json").toString());

var valid = validate(hello);
if (!valid) {
    console.log('Validation failed.');
    console.log('Validation errors:');
    console.log(validate.errors);
} else {
    console.log('Valid');
}
