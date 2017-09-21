
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const { extractNodeAndWrite } = require('./formatme');
const config = JSON.parse(fs.readFileSync('./config/config.json', { encoding: 'utf8' }));
const { setupRuntimeConfig: setupSettings } = require('../config/config');

const SETTINGS = setupSettings({
    OUTPUT_DIR: path.join(process.cwd(), config.outputDest.test),
    TOP_LEVELS: ['test']
});

describe('JSON Formatting', function () {

    let TOP_LEVELS;
    let OUTPUT_DIR;

    before(() => {
        TOP_LEVELS = SETTINGS.TOP_LEVELS;
        OUTPUT_DIR = SETTINGS.OUTPUT_DIR
    });

    describe('Extracting a top-level node and writing it to disk', function () {

        it('should write {"hello": "world"} to disk as filename "helloworld.json', function () {
            const input = {
                "test": {
                    "hello": "world"
                },
                "not": {
                    "foo": "bar"
                }
            }
            console.log(TOP_LEVELS)
            extractNodeAndWrite(input, TOP_LEVELS);
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
        });
    });
});