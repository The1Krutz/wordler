#!/usr/bin/env bash

npm run build

rm -rf ../the1krutz.bitbucket.io/wordler

cp -r dist/wordler ../the1krutz.bitbucket.io

cd ../the1krutz.bitbucket.io

git add .

git commit -m "automated update"

git push