#!/usr/bin/env bash

set -ex

cd ${REPO_DIR}

git fetch --all
git checkout ${BRANCH}
git reset --hard origin/${BRANCH}

GIT_SHA=$(git sha)

npm install
npm run build

cp src/client/static/dist/index.html /tmp/kevin-lin-main-index

git checkout gh-pages
git reset --hard origin/gh-pages

mv /tmp/kevin-lin-main-index index.html
cp index.html 404.html

git add -u
git status
git commit -m "${BRANCH}:${GIT_SHA}" || :
git push origin HEAD
git push github HEAD

git checkout ${BRANCH}

allu \
    --skip-auth \
    --type text \
    --tag Jenkins \
    --message "Successfully deployed kevin-lin-main ("$(git rev-parse --abbrev-ref HEAD)", "$(git sha)")."
