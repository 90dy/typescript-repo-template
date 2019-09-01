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
              argv: process.argv.slice(2),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkb2MiLCJwa2dWZXJzaW9uIiwicGtnRGVzY3JpcHRpb24iLCJoZWxwIiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJtYWluIiwiYXJndiIsIm9wdGlvbnMiLCJwcm9jZXNzIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFPQSxJQUFNQSxHQUFHLDhDQUF1Q0MsZ0JBQXZDLG9HQU1QQyxvQkFOTyw4R0FBVDs7QUFpQkEsU0FBU0MsSUFBVCxHQUF3QjtBQUN0QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEdBQVo7QUFDQSxTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTTSxPQUFULEdBQTJCO0FBQ3pCRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsNENBQWdESixnQkFBaEQ7QUFDQSxTQUFPLENBQVA7QUFDRDs7U0FFcUJNLEk7Ozs7Ozs7MEJBQWYsaUJBQW9CQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsWUFBQUEsT0FERCxHQUMwQyxvQkFBT1QsR0FBUCxFQUFZO0FBQ3pEUSxjQUFBQSxJQUFJLEVBQUVFLE9BQU8sQ0FBQ0YsSUFBUixDQUFhRyxLQUFiLENBQW1CLENBQW5CLENBRG1EO0FBRXpEUixjQUFBQSxJQUFJLEVBQUU7QUFGbUQsYUFBWixDQUQxQzs7QUFBQSxrQkFNRE0sT0FBTyxDQUFDLFFBQUQsQ0FBUCxLQUFzQixLQU5yQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FPSU4sSUFBSSxFQVBSOztBQUFBO0FBQUEsa0JBVURNLE9BQU8sQ0FBQyxXQUFELENBQVAsS0FBeUIsS0FWeEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBV0lILE9BQU8sRUFYWDs7QUFBQTtBQUFBLDZDQWNFLENBZEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBkb2NvcHQgfSBmcm9tICdkb2NvcHQnO1xuXG5pbXBvcnQge1xuICBkZXNjcmlwdGlvbiBhcyBwa2dEZXNjcmlwdGlvbixcbiAgdmVyc2lvbiBhcyBwa2dWZXJzaW9uLFxufSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgeyBicmlkZ2UgfSBmcm9tICcuL2JyaWRnZS9hdXRoLnBiJ1xuXG5jb25zdCBkb2MgPSBgdHlwZXNjcmlwdC1yZXBvLXRlbXBsYXRlIHZlcnNpb24gJHtwa2dWZXJzaW9ufVxuXG5Vc2FnZTpcbiAgdHlwZXNjcmlwdC1yZXBvLXRlbXBsYXRlIC0taGVscFxuICB0eXBlc2NyaXB0LXJlcG8tdGVtcGxhdGUgLS12ZXJzaW9uXG5cbiR7cGtnRGVzY3JpcHRpb259XG5cbk9wdGlvbnM6XG4gIC1oIC0taGVscCAgICAgICAgICAgICAgICAgICBTaG93IHRoaXNcbiAgLXYgLS12ZXJzaW9uICAgICAgICAgICAgICAgIFNob3cgY3VycmVudCB2ZXJzaW9uYDtcblxuZGVjbGFyZSBjbGFzcyBUeXBlc2NyaXB0UmVwb1RlbXBsYXRlT3B0aW9ucyB7XG4gICctLWhlbHAnOiBib29sZWFuO1xuICAnLS12ZXJzaW9uJzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gaGVscCgpOiBudW1iZXIge1xuICBjb25zb2xlLmxvZyhkb2MpO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gdmVyc2lvbigpOiBudW1iZXIge1xuICBjb25zb2xlLmxvZyhgdHlwZXNjcmlwdC1yZXBvLXRlbXBsYXRlIHZlcnNpb24gJHtwa2dWZXJzaW9ufWApO1xuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oYXJndjogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBvcHRpb25zOiBUeXBlc2NyaXB0UmVwb1RlbXBsYXRlT3B0aW9ucyA9IGRvY29wdChkb2MsIHtcbiAgICBhcmd2OiBwcm9jZXNzLmFyZ3Yuc2xpY2UoMiksXG4gICAgaGVscDogZmFsc2UsXG4gIH0pO1xuXG4gIGlmIChvcHRpb25zWyctLWhlbHAnXSAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gaGVscCgpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnNbJy0tdmVyc2lvbiddICE9PSBmYWxzZSkge1xuICAgIHJldHVybiB2ZXJzaW9uKCk7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cbiJdfQ==