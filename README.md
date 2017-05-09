# kevinlin.info

[![Build Status](https://travis-ci.org/LINKIWI/kevinlin.info.svg?branch=master)](https://travis-ci.org/LINKIWI/kevinlin.info)
[![Coverage Status](https://coveralls.io/repos/github/LINKIWI/kevinlin.info/badge.svg?branch=master)](https://coveralls.io/github/LINKIWI/kevinlin.info?branch=master)

Personal website and portfolio. This is a static site.

### Development

```bash
$ npm install
$ npm run dev
# Development Express server on port 18400
```

### Production

```bash
$ npm install
$ NODE_ENV=production npm run build
# Serve src/client/static/dist/index.html as index page and static/ directory for static files
```
