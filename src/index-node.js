import path from "path";
import { NodeApp } from "./application";

const settings = require('./config/config.json');
const input = path.join(__dirname, './data/FundExport_20170825_112959.json');
const topLevelNodes = ['statistics.returns.valueDate'];
const settings = require('./config/config.json');
const outputDir = settings.outputDest.dev;

const app = NodeApp({ outputDir });
app.extractAndWrite(input, topLevelNodes);


