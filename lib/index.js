"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var _docopt = require("docopt");

var _package = require("../package.json");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkb2MiLCJwa2dWZXJzaW9uIiwicGtnRGVzY3JpcHRpb24iLCJoZWxwIiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJtYWluIiwiYXJndiIsIm9wdGlvbnMiLCJwcm9jZXNzIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFHQTs7Ozs7O0FBS0EsSUFBTUEsR0FBRyw4Q0FBdUNDLGdCQUF2QyxvR0FNUEMsb0JBTk8sOEdBQVQ7O0FBaUJBLFNBQVNDLElBQVQsR0FBd0I7QUFDdEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxHQUFaO0FBQ0EsU0FBTyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU00sT0FBVCxHQUEyQjtBQUN6QkYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLDRDQUFnREosZ0JBQWhEO0FBQ0EsU0FBTyxDQUFQO0FBQ0Q7O1NBRXFCTSxJOzs7Ozs7OzBCQUFmLGlCQUFvQkMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NDLFlBQUFBLE9BREQsR0FDMEMsb0JBQU9ULEdBQVAsRUFBWTtBQUN6RFEsY0FBQUEsSUFBSSxFQUFFRSxPQUFPLENBQUNGLElBQVIsQ0FBYUcsS0FBYixDQUFtQixDQUFuQixDQURtRDtBQUV6RFIsY0FBQUEsSUFBSSxFQUFFO0FBRm1ELGFBQVosQ0FEMUM7O0FBQUEsa0JBTURNLE9BQU8sQ0FBQyxRQUFELENBQVAsS0FBc0IsS0FOckI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBT0lOLElBQUksRUFQUjs7QUFBQTtBQUFBLGtCQVVETSxPQUFPLENBQUMsV0FBRCxDQUFQLEtBQXlCLEtBVnhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVdJSCxPQUFPLEVBWFg7O0FBQUE7QUFBQSw2Q0FjRSxDQWRGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgZG9jb3B0IH0gZnJvbSAnZG9jb3B0JztcblxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHtcbiAgZGVzY3JpcHRpb24gYXMgcGtnRGVzY3JpcHRpb24sXG4gIHZlcnNpb24gYXMgcGtnVmVyc2lvbixcbn0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuY29uc3QgZG9jID0gYHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSB2ZXJzaW9uICR7cGtnVmVyc2lvbn1cblxuVXNhZ2U6XG4gIHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSAtLWhlbHBcbiAgdHlwZXNjcmlwdC1yZXBvLXRlbXBsYXRlIC0tdmVyc2lvblxuXG4ke3BrZ0Rlc2NyaXB0aW9ufVxuXG5PcHRpb25zOlxuICAtaCAtLWhlbHAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzXG4gIC12IC0tdmVyc2lvbiAgICAgICAgICAgICAgICBTaG93IGN1cnJlbnQgdmVyc2lvbmA7XG5cbmRlY2xhcmUgY2xhc3MgVHlwZXNjcmlwdFJlcG9UZW1wbGF0ZU9wdGlvbnMge1xuICAnLS1oZWxwJzogYm9vbGVhbjtcbiAgJy0tdmVyc2lvbic6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGhlbHAoKTogbnVtYmVyIHtcbiAgY29uc29sZS5sb2coZG9jKTtcbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHZlcnNpb24oKTogbnVtYmVyIHtcbiAgY29uc29sZS5sb2coYHR5cGVzY3JpcHQtcmVwby10ZW1wbGF0ZSB2ZXJzaW9uICR7cGtnVmVyc2lvbn1gKTtcbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKGFyZ3Y6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3Qgb3B0aW9uczogVHlwZXNjcmlwdFJlcG9UZW1wbGF0ZU9wdGlvbnMgPSBkb2NvcHQoZG9jLCB7XG4gICAgYXJndjogcHJvY2Vzcy5hcmd2LnNsaWNlKDIpLFxuICAgIGhlbHA6IGZhbHNlLFxuICB9KTtcblxuICBpZiAob3B0aW9uc1snLS1oZWxwJ10gIT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGhlbHAoKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zWyctLXZlcnNpb24nXSAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdmVyc2lvbigpO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG4iXX0=