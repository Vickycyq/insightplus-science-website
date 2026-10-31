#!/bin/sh
set -eu

mkdir -p dist/assets dist/Products
cp ./*.html ./*.css ./*.js ./*.xml ./*.txt dist/
cp -R assets/. dist/assets/
cp -R Products/. dist/Products/
