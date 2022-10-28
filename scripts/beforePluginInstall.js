#!/usr/bin/env node

// Adapted from:
// https://github.com/AllJoyn-Cordova/cordova-plugin-alljoyn/blob/master/scripts/beforePluginInstall.js

var path = require('path');
var exec = require('child_process').exec;

// XXX FUTURE TBD auto-detect:
var package_name = 'cordova-sqlite-legacy-core';

module.exports = function(context) {
    return new Promise(function(resolve) {
        console.log('installing external dependencies via npm');

        exec('npm install', { cwd: path.join('plugins', package_name) }, function(
            error,
            stdout,
            stderr,
        ) {
            if (error !== null) {
                // XXX TODO SIGNAL FAILURE HERE.
                console.log('npm install of external dependencies failed: ' + error);
                resolve();
            } else {
                console.log('npm install of external dependencies ok');
                resolve();
            }
        });
    });
};
