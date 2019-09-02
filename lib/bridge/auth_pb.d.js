"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsernameAndPassword = void 0;

var jspb = _interopRequireWildcard(require("google-protobuf"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UsernameAndPassword =
/*#__PURE__*/
function (_jspb$Message) {
  _inherits(UsernameAndPassword, _jspb$Message);

  function UsernameAndPassword() {
    _classCallCheck(this, UsernameAndPassword);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsernameAndPassword).apply(this, arguments));
  }

  return UsernameAndPassword;
}(jspb.Message);

exports.UsernameAndPassword = UsernameAndPassword;

_defineProperty(UsernameAndPassword, "extensions", void 0);

_defineProperty(UsernameAndPassword, "extensionsBinary", void 0);

(function (_UsernameAndPassword) {})(UsernameAndPassword || (exports.UsernameAndPassword = UsernameAndPassword = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icmlkZ2UvYXV0aF9wYi5kLnRzIl0sIm5hbWVzIjpbIlVzZXJuYW1lQW5kUGFzc3dvcmQiLCJqc3BiIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlhQSxtQjs7Ozs7Ozs7Ozs7O0VBQTRCQyxJQUFJLENBQUNDLE87Ozs7Z0JBQWpDRixtQjs7Z0JBQUFBLG1COztxQ0FpQklBLG1CLG1DQUFBQSxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2U6IGJyaWRnZVxuLy8gZmlsZTogc3JjL2JyaWRnZS9hdXRoLnByb3RvXG5cbmltcG9ydCAqIGFzIGpzcGIgZnJvbSBcImdvb2dsZS1wcm90b2J1ZlwiO1xuaW1wb3J0ICogYXMgZ29vZ2xlX3Byb3RvYnVmX2FwaV9wYiBmcm9tIFwiZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9hcGlfcGJcIjtcbmltcG9ydCAqIGFzIGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYiBmcm9tIFwiZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9lbXB0eV9wYlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlcm5hbWVBbmRQYXNzd29yZCBleHRlbmRzIGpzcGIuTWVzc2FnZSB7XG4gIGdldFVzZXJuYW1lKCk6IHN0cmluZztcbiAgc2V0VXNlcm5hbWUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgZ2V0UGFzc3dvcmQoKTogc3RyaW5nO1xuICBzZXRQYXNzd29yZCh2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICBzZXJpYWxpemVCaW5hcnkoKTogVWludDhBcnJheTtcbiAgdG9PYmplY3QoaW5jbHVkZUluc3RhbmNlPzogYm9vbGVhbik6IFVzZXJuYW1lQW5kUGFzc3dvcmQuQXNPYmplY3Q7XG4gIHN0YXRpYyB0b09iamVjdChpbmNsdWRlSW5zdGFuY2U6IGJvb2xlYW4sIG1zZzogVXNlcm5hbWVBbmRQYXNzd29yZCk6IFVzZXJuYW1lQW5kUGFzc3dvcmQuQXNPYmplY3Q7XG4gIHN0YXRpYyBleHRlbnNpb25zOiB7W2tleTogbnVtYmVyXToganNwYi5FeHRlbnNpb25GaWVsZEluZm88anNwYi5NZXNzYWdlPn07XG4gIHN0YXRpYyBleHRlbnNpb25zQmluYXJ5OiB7W2tleTogbnVtYmVyXToganNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm88anNwYi5NZXNzYWdlPn07XG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihtZXNzYWdlOiBVc2VybmFtZUFuZFBhc3N3b3JkLCB3cml0ZXI6IGpzcGIuQmluYXJ5V3JpdGVyKTogdm9pZDtcbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBVaW50OEFycmF5KTogVXNlcm5hbWVBbmRQYXNzd29yZDtcbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtZXNzYWdlOiBVc2VybmFtZUFuZFBhc3N3b3JkLCByZWFkZXI6IGpzcGIuQmluYXJ5UmVhZGVyKTogVXNlcm5hbWVBbmRQYXNzd29yZDtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBVc2VybmFtZUFuZFBhc3N3b3JkIHtcbiAgZXhwb3J0IHR5cGUgQXNPYmplY3QgPSB7XG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICB9XG59XG5cbiJdfQ==