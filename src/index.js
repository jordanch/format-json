const fs = require('fs');
const settings = require('./config/config.json');
const { application } = require('./json/formatme');
// development mock input
const INPUT = './data/FundExport_20170825_112959.json';
const TOP_LEVELS = ['statistics.returns.valueDate'];
const SETTINGS = require('./config/config.json');
const OUTPUT_DIR = SETTINGS.outputDest.dev;

const rawInput = fs.readFileSync(INPUT, {encoding: 'UTF8'});
const parsedInput = JSON.parse(rawInput);

const app = application({outputDest: OUTPUT_DIR});
app.extractNodeAndWrite(parsedInput, TOP_LEVELS)


