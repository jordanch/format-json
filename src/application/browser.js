import { Application } from "./application.js";
import { extractSingleNode } from "../json/extract.js";

export class BrowserApp extends Application {

    /**
     * Creates an instance of BrowserApp.
     * @param {any} settings 
     * @memberof BrowserApp
     */
    constructor(settings) {
        super(settings);
        this.getNode = this.getNode.bind(this);
    }

    /**
     * 
     * 
     * @param {any} data 
     * @param {any} nodesToExtract 
     * @memberof BrowserApp
     */
    getNode(data, nodesToExtract) {
        extractSingleNode(data, nodesToExtract)
            .then((output) => {
                console.log(output);
            }, (reason) => {
                console.error(reason);
            })
    }
}