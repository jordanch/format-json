const fs = require('fs');
const path = require('path');

module.exports.application = (settings) => {

    const OUTPUT_DIR = settings.outputDest;
    /**
     * 
     * @param {object} source the source object 
     * @param {array} nodesToExtract the top level nodes to extract into separate files. 
     * Strings can be formatted with dot notation for nested nodes ex. "topLevel.lowerLevel"
     */
    const extractNodeAndWrite = (source, nodesToExtract) => {
        for (identifier of nodesToExtract) {
            const keys = identifier.split('.');
            let objectToWrite = source;
            let index = 0;
            let keysLength = keys.length;
            for (key of keys) {
                objectToWrite = objectToWrite[key];
                if (index === keysLength - 1) {
                    writeToDisk(identifier, objectToWrite);
                } else {
                    index++;
                }
            }
        }
    }

    /**
     * 
     * @param {string} fileName the name of the file to be written.
     * @param {object} source the source object to write.
     */
    const writeToDisk = (fileName, source) => {
        fs.writeFileSync(path.join(OUTPUT_DIR, `${fileName}.json`),
            JSON.stringify(source, null, 4), { encoding: 'UTF8' });
    }

    return { extractNodeAndWrite };
}