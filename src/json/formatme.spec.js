
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const { application } = require('./formatme');
const SETTINGS = require('../config/config.json');

describe('JSON Formatting', () => {

    let TOP_LEVELS;
    let OUTPUT_DIR;
    let app;

    before(() => {
        OUTPUT_DIR = SETTINGS.outputDest.test;
        app = application({
            outputDest: OUTPUT_DIR,
        });
    });

    describe('Extracting a top-level node and writing it to disk', () => {

        it('should extract and write a top-level node to disk', () => {

            TOP_LEVELS = ['test'];

            const input = {
                "test": {
                    "hello": "world"
                },
                "not": {
                    "foo": "bar"
                }
            }

            app.extractNodeAndWrite(input, TOP_LEVELS);

            const testJson = JSON.parse(
                fs.readFileSync(path.join(OUTPUT_DIR, 'test.json'),
                    { encoding: 'utf8' })
            );

            expect(testJson.hello).to.equal('world');
        });

        it('should extract nested nodes and write to disk', () => {

            TOP_LEVELS = ['test.test2'];

            const input = {
                "test": {
                    "test2": {
                        "hello": "world"
                    }
                }
            }
            app.extractNodeAndWrite(input, TOP_LEVELS);

            const testJson = JSON.parse(
                fs.readFileSync(path.join(OUTPUT_DIR, 'test.test2.json'),
                    { encoding: 'utf8' })
            );
                
            expect(testJson.hello).to.equal('world');
        });

    });
});