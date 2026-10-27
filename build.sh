#!/bin/sh
set -eu

mkdir -p dist/assets
cp ./*.html ./*.css ./*.js ./*.xml ./*.txt dist/
cp -R assets/. dist/assets/
