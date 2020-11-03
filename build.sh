#!/bin/sh

DIST_DIR=dist

rm -rf $DIST_DIR ; mkdir -p $DIST_DIR

# aglio
npx aglio -i aglio/api.md -o $DIST_DIR/aglio-api.html

# blueprint
mkdir $DIST_DIR/bootprint
cd bootprint && node build.js > swagger.yaml && cd ..
npx bootprint openapi bootprint/swagger.yaml $DIST_DIR/bootprint

# RAML
npx raml2html raml/api.raml > dist/raml-api.html

# apidocs
mkdir $DIST_DIR/apidoc
npx apidoc -i apidoc -o $DIST_DIR/apidoc

# TODO sphinx
