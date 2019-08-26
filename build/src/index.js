"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docopt_1 = require("docopt");
const package_json_1 = require("../package.json");
const doc = `typescript-repo-template version ${package_json_1.version}

Usage:
  typescript-repo-template --help
  typescript-repo-template --version

${package_json_1.description}

Options:
  -h --help                   Show this
  -v --version                Show current version`;
function help() {
    console.log(doc);
    return 0;
}
function version() {
    console.log(`typescript-repo-template version ${package_json_1.version}`);
    return 0;
}
async function main(argv) {
    const options = docopt_1.docopt(doc, {
        argv: process.argv.slice(2),
        help: false,
    });
    if (options['--help'] !== false) {
        return help();
    }
    if (options['--version'] !== false) {
        return version();
    }
    return 0;
}
exports.main = main;
//# sourceMappingURL=index.js.map