#!/bin/sh -x
# find good examples and and slam them together
pip install skinfer
pip install jsonschema==0.8.0
if [ ! -s all.notjson -a -s all.notjson.zip ]
then
	unzip all.notjson.zip
else
	rm all.notjson
	find examples/ -name '*json' -print0| xargs -0 node concat.js >> all.notjson
fi
skinfer --jsonlines all.notjson
if [ ! -s all.notjson.zip -a -s all.notjson ]
then
	zip all.notjson.zip all.notjson
fi
