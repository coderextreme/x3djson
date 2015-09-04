# x3djson
X3D JSON Schema validation and conversion

* X3DJSON (X3D JSON Schema utilities) is a Node and JavaScript package for converting X3D XML schema to JSON schema and for validating JSON files with that schema


### Requirements

* wget
* node
* npm
* java 8 [ for JSON schema generation only ]

### Build

```
npm install
```

mvn may exit with a 1 error code.  Never fear, we just require the jsonix/dist/Jsonix-all.js to be built.

* Schema can be found in mappings/x3djson.schema

### Run node server

```
npm run app
```

* Go to localhost:3000 to see converted file

### Validate HelloWorld.json

```
npm run validate
```

### pretty print JSON file

```
node js/prettyprint.js "file.json"
```
