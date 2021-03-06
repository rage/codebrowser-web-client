codebrowser/web-client
======================

[![Build Status](https://travis-ci.org/rage/codebrowser-web-client.svg?branch=master)](https://travis-ci.org/rage/codebrowser-web-client/)
[![Coverage Status](https://img.shields.io/coveralls/rage/codebrowser-web-client.svg)](https://coveralls.io/r/rage/codebrowser-web-client/)

Web client for Code Browser (HTML5 + CSS3 + JavaScript + Node.js + Grunt). To develop this project, you will need to have node.js and npm installed on your development environment.

## Install Dependencies

Install Grunt’s command line interface globally if necessary with `npm install -g grunt-cli`. You will also need
PhantomJS and CasperJS to run browser tests. Install PhantomJS with `npm install -g phantomjs`. Download
[CasperJS](http://casperjs.org/) (1.1-beta3) and look for the installation instructions from [here](http://docs.casperjs.org/en/latest/installation.html).
Download development dependencies by running `npm install -d`.

## Run Tests

Run tests with `grunt test`. Run integration tests with `grunt integration-test`.

## Build

Build from source with `grunt build`.

## Watch

To build from source automatically when files are changed run `grunt watch`.

## Start Server

Start server with `node web.js`. The app will deploy to http://localhost:8080/.

## Structure

The app is built upon the Backbone MVC app structure. To add functionality, start by creating necessary models — if any.
Then proceed by creating required routes and views for the functionality. The views consist of Handlebars templates
that create the rendered HTML structure for a given view. The app uses subviews within views extensively to keep the
view logics clean as possible.

```
.
├── Gruntfile.js                # Grunt settings
├── LICENSE.md
├── Procfile
├── README.md
├── config                      # App configurations
├── error.template
├── jshint.json
├── package.json
├── src
│   ├── app.js                  # App
│   ├── collections             # Backbone collections
│   ├── controllers             # Controllers
│   ├── helpers                 # Handlebars view helpers among others
│   ├── models                  # Backbone models among others
│   ├── routers                 # Backbone routers
│   ├── templates               # Handlebars templates
│   └── views                   # Backbone views
├── static
│   ├── assets
│   ├── development             # Development app (uses clear builds)
│   └── index.html              # Deployed app (uses minified builds)
├── test
│   ├── casperjs                # CasperJS BDD browser tests
│   ├── config                  # Test configurations
│   ├── helpers                 # Helper files for browser tests
│   └── spec                    # Jasmine BDD Unit tests
└── web.js                      # Node.js server
```

## Required REST-API

See the [back-end](https://github.com/rage/codebrowser-back-end/) REST-API documentation for the required client API.

## Credits

This project has been developed at the University of Helsinki’s [Department of Computer Science](http://cs.helsinki.fi/en/) by:

* Kenny Heinonen ([kennyhei](https://github.com/kennyhei/))
* Kasper Hirvikoski ([kasper](https://github.com/kasper/))

## License

This project is licensed under [MIT](LICENSE.md).
