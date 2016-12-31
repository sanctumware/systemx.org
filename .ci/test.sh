#!/usr/bin/env bash

set -ex

gem install sass
npm install

npm run build
npm run test
