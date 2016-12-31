#!/usr/bin/env bash

set -ex

cd ${REPO_DIR}

git fetch --all
git checkout ${BRANCH}
git reset --hard origin/${BRANCH}

npm install
npm run build

pm2 stop kevin-lin-main || :
pm2 start index.js --name kevin-lin-main
pm2 show kevin-lin-main

allu \
    --skip-auth \
    --type text \
    --tag Jenkins \
    --message "Successfully deployed kevin-lin-main ("$(git rev-parse --abbrev-ref HEAD)", "$(git sha)")."
