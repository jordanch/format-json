import { Application } from "./application";
import fs from "fs";
import path from "path";
import { extract } from "../json";

export class NodeApp extends Appilication {


    /**
     * Creates an instance of NodeApp.
     * @param {any} settings 
     * @memberof NodeApp
     */
    constructor(settings) {

        super(settings);
        this.extractAndWrite = this.extractAndWrite.bind(this);

    }

    /**
     * 
     * 
     * @param {any} sourcePath 
     * @param {any} nodesToExtract 
     * @memberof NodeApp
     */
    extractAndWrite(sourcePath, nodesToExtract) {

        extract(sourcePath, nodesToExtract)
            .then((output) => {
                const absFileName = path.join(this.settings.outputDir, `${output.fileName}.json`);
                fs.writeFileSync(
                    absFileName,
                    JSON.stringify(output.source, null, 4), { encoding: 'UTF8' }
                );
            }, (reason) => {
                console.error(reason);
            })

    }

}