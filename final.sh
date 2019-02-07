#!/bin/sh
unzip x3dmerge.json.zip
sh jsonschema2pojo.sh -T JSONSCHEMA -t x3d.java -s x3dmerge.json
unzip x3d.jskemator.zip
sh jsonschema2pojo.sh -T JSONSCHEMA -t x3d.jskem -s x3d.jskemator
