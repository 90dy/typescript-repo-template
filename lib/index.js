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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkb2MiLCJwa2dWZXJzaW9uIiwicGtnRGVzY3JpcHRpb24iLCJoZWxwIiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJtYWluIiwiYXJndiIsIm9wdGlvbnMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUtBLElBQU1BLEdBQUcsOENBQXVDQyxnQkFBdkMsb0dBTVBDLG9CQU5PLDhHQUFUOztBQWlCQSxTQUFTQyxJQUFULEdBQXdCO0FBQ3RCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBLFNBQU8sQ0FBUDtBQUNEOztBQUVELFNBQVNNLE9BQVQsR0FBMkI7QUFDekJGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUiw0Q0FBZ0RKLGdCQUFoRDtBQUNBLFNBQU8sQ0FBUDtBQUNEOztTQUVxQk0sSTs7Ozs7OzswQkFBZixpQkFBb0JDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxZQUFBQSxPQURELEdBQzBDLG9CQUFPVCxHQUFQLEVBQVk7QUFDekRRLGNBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDRSxLQUFMLENBQVcsQ0FBWCxDQURtRDtBQUV6RFAsY0FBQUEsSUFBSSxFQUFFO0FBRm1ELGFBQVosQ0FEMUM7O0FBQUEsa0JBTURNLE9BQU8sQ0FBQyxRQUFELENBQVAsS0FBc0IsS0FOckI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBT0lOLElBQUksRUFQUjs7QUFBQTtBQUFBLGtCQVVETSxPQUFPLENBQUMsV0FBRCxDQUFQLEtBQXlCLEtBVnhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVdJSCxPQUFPLEVBWFg7O0FBQUE7QUFBQSw2Q0FjRSxDQWRGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2NvcHQgfSBmcm9tICdkb2NvcHQnXG5cbmltcG9ydCB7XG4gIGRlc2NyaXB0aW9uIGFzIHBrZ0Rlc2NyaXB0aW9uLFxuICB2ZXJzaW9uIGFzIHBrZ1ZlcnNpb24sXG59IGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuY29uc3QgZG9jID0gYHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSB2ZXJzaW9uICR7cGtnVmVyc2lvbn1cblxuVXNhZ2U6XG4gIHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSAtLWhlbHBcbiAgdHlwZXNjcmlwdC1yZXBvLXRlbXBsYXRlIC0tdmVyc2lvblxuXG4ke3BrZ0Rlc2NyaXB0aW9ufVxuXG5PcHRpb25zOlxuICAtaCAtLWhlbHAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzXG4gIC12IC0tdmVyc2lvbiAgICAgICAgICAgICAgICBTaG93IGN1cnJlbnQgdmVyc2lvbmBcblxuZGVjbGFyZSBjbGFzcyBUeXBlc2NyaXB0UmVwb1RlbXBsYXRlT3B0aW9ucyB7XG4gICctLWhlbHAnOiBib29sZWFuO1xuICAnLS12ZXJzaW9uJzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gaGVscCgpOiBudW1iZXIge1xuICBjb25zb2xlLmxvZyhkb2MpXG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIHZlcnNpb24oKTogbnVtYmVyIHtcbiAgY29uc29sZS5sb2coYHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSB2ZXJzaW9uICR7cGtnVmVyc2lvbn1gKVxuICByZXR1cm4gMFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihhcmd2OiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IG9wdGlvbnM6IFR5cGVzY3JpcHRSZXBvVGVtcGxhdGVPcHRpb25zID0gZG9jb3B0KGRvYywge1xuICAgIGFyZ3Y6IGFyZ3Yuc2xpY2UoMiksXG4gICAgaGVscDogZmFsc2UsXG4gIH0pXG5cbiAgaWYgKG9wdGlvbnNbJy0taGVscCddICE9PSBmYWxzZSkge1xuICAgIHJldHVybiBoZWxwKClcbiAgfVxuXG4gIGlmIChvcHRpb25zWyctLXZlcnNpb24nXSAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdmVyc2lvbigpXG4gIH1cblxuICByZXR1cm4gMFxufVxuIl19