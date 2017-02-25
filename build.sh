#!/bin/sh

DIST_DIR=dist

rm -rf $DIST_DIR ; mkdir -p $DIST_DIR

# aglio
aglio -i aglio/api.md -o $DIST_DIR/aglio-api.html

# blueprint


# iodocs


# RAML


# sphinx
