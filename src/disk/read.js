import * as fs from "fs";

export function read (path) {
    if (fs.existsSync(path)) {
        const sourceData = fs.readFileSync(sourcePath, {encoding: 'UTF8'});
        return parsedData = JSON.parse(sourceData);
    } 

}
