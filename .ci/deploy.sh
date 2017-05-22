#!/usr/bin/env bash

set -ex

cd ${REPO_DIR}

git fetch --all
git checkout ${BRANCH}
git reset --hard origin/${BRANCH}

GIT_SHA=$(git sha)

npm install --production=false
npm run build

cp -r src/client/static /tmp/kevin-lin-main-static

git checkout gh-pages
git reset --hard origin/gh-pages

rm -rf static
mv /tmp/kevin-lin-main-static static
mv static/dist/index.html index.html
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
