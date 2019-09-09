"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var _docopt = require("docopt");

var _package = require("../package.json");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = "typescript-repo-template version ".concat(_package.version, "\n\nUsage:\n  typescript-repo-template --help\n  typescript-repo-template --version\n\n").concat(_package.description, "\n\nOptions:\n  -h --help                   Show this\n  -v --version                Show current version");

function help() {
  console.log(doc);
  return 0;
}

function version() {
  console.log("typescript-repo-template version ".concat(_package.version));
  return 0;
}

function main(_x) {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(argv) {
    var options;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = (0, _docopt.docopt)(doc, {
              argv: argv.slice(2),
              help: false
            });

            if (!(options['--help'] !== false)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", help());

          case 3:
            if (!(options['--version'] !== false)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", version());

          case 5:
            return _context.abrupt("return", 0);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}