const fs = require('fs');
const path = require('path');

const settings = require('../../config/config.json');
const OUTPUT_DIR = settings.outputDest.dev;

let extractNodeAndWrite = (source, nodesToExtract) => {
    for (key of Object.keys(source)) {
        if (source.hasOwnProperty(key)) {
            if (nodesToExtract.map(i => i.toUpperCase()).indexOf(key.toUpperCase()) > -1) {
                write(key, source);
            }
        }
    }
}

let write = (nodeKey, source) => {
    fs.writeFileSync(path.join(OUTPUT_DIR, `${nodeKey}.json`), 
        JSON.stringify(source[nodeKey], null, 4), {encoding: 'UTF8'});
}

module.exports.extractNodeAndWrite = extractNodeAndWrite;