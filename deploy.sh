#!/usr/bin/env bash

# Exit with nonzero exit code if anything fails
set -e 

DIR="$(dirname "${BASH_SOURCE[0]}")"

pushd $DIR/public

mv ../dist/* ./
git add -A .
git commit -m "Site updated by Travis: $(date +%Y-%m-%d\ %H:%M:%S)"
git push origin gh-pages --quiet

popd
