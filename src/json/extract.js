/**
 * 
 * @param {string} sourcePath the source data's absolute path
 * @param {string[]} nodesToExtract the top level nodes to extract into separate files. 
 * Strings can be formatted with dot notation for nested nodes ex. "topLevel.lowerLevel"
 * @return {promise}
 */
export function extractSingleNode (data, nodesToExtract) {

    return new Promise((resolve, reject) => {
    
        try {
            extractNodes(data, nodesToExtract);

            function extractNodes(data, nodes) {

                for (let identifier of nodes) {
                    const keys = identifier.split('.');
                    let objectToWrite = data;
                    let index = 0;
                    let keysLength = keys.length;

                    for (let key of keys) {
                        objectToWrite = objectToWrite[key];

                        if (index === keysLength - 1) {
                            resolve({
                                key: identifier,
                                source: objectToWrite
                            });
                        } else {
                            index++;
                        }
                    }
                }
            }
        } catch (e) {
            reject(e);
        }
    });
}