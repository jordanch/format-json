const fs = require('fs');
const settings = require('./config/config.json');
const { extractNodeAndWrite } = require('./json/formatme');
//////////////////////////////
// development mock input
const INPUT = './data/FundExport_20170825_112959.json';
const TOP_LEVELS = ['fundList'];
const OUTPUT_DIR = settings.outputDest.dev;

//////////////////////////////

const rawInput = fs.readFileSync(INPUT, {encoding: 'UTF8'});
const parsedInput = JSON.parse(rawInput);

extractNodeAndWrite(parsedInput, TOP_LEVELS);


