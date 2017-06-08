#!/bin/bash
set -ev

cd publish/
docker build -t seagrantapp .
docker tag seagrantapp:latest osucass/seagrantapp-tsunami:$BRANCH
docker push osucass/seagrantapp-tsunami:$BRANCH
