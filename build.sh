#!/bin/sh

DIST_DIR=dist

rm -rf $DIST_DIR ; mkdir -p $DIST_DIR

# aglio
aglio -i aglio/api.md -o $DIST_DIR/aglio-api.html

# blueprint
mkdir $DIST_DIR/bootprint
cd bootprint && node build.js > swagger.yaml && cd ..
bootprint openapi bootprint/swagger.yaml $DIST_DIR/bootprint

# RAML
raml2html raml/api.raml > dist/raml-api.html

# apidocs
mkdir $DIST_DIR/apidoc
apidoc -i apidoc -o $DIST_DIR/apidoc



# sphinx
