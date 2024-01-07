#!/bin/sh

set -eux

# Sanity check
npx --version

npm install spectaql

npx spectaql ./spectaql/config.yml
