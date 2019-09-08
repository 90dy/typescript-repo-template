"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsernameAndPassword = void 0;

var jspb = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icmlkZ2UvYXV0aF9wYi5kLnRzIl0sIm5hbWVzIjpbIlVzZXJuYW1lQW5kUGFzc3dvcmQiLCJqc3BiIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWFBLG1COzs7Ozs7Ozs7Ozs7RUFBNEJDLElBQUksQ0FBQ0MsTzs7OztnQkFBakNGLG1COztnQkFBQUEsbUI7O3FDQWlCSUEsbUIsbUNBQUFBLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZTogYnJpZGdlXG4vLyBmaWxlOiBzcmMvYnJpZGdlL2F1dGgucHJvdG9cblxuaW1wb3J0ICogYXMganNwYiBmcm9tIFwiZ29vZ2xlLXByb3RvYnVmXCJcbmltcG9ydCAqIGFzIGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIgZnJvbSBcImdvb2dsZS1wcm90b2J1Zi9nb29nbGUvcHJvdG9idWYvYXBpX3BiXCJcbmltcG9ydCAqIGFzIGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYiBmcm9tIFwiZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9lbXB0eV9wYlwiXG5cbmV4cG9ydCBjbGFzcyBVc2VybmFtZUFuZFBhc3N3b3JkIGV4dGVuZHMganNwYi5NZXNzYWdlIHtcbiAgZ2V0VXNlcm5hbWUoKTogc3RyaW5nO1xuICBzZXRVc2VybmFtZSh2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICBnZXRQYXNzd29yZCgpOiBzdHJpbmc7XG4gIHNldFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHNlcmlhbGl6ZUJpbmFyeSgpOiBVaW50OEFycmF5O1xuICB0b09iamVjdChpbmNsdWRlSW5zdGFuY2U/OiBib29sZWFuKTogVXNlcm5hbWVBbmRQYXNzd29yZC5Bc09iamVjdDtcbiAgc3RhdGljIHRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZTogYm9vbGVhbiwgbXNnOiBVc2VybmFtZUFuZFBhc3N3b3JkKTogVXNlcm5hbWVBbmRQYXNzd29yZC5Bc09iamVjdDtcbiAgc3RhdGljIGV4dGVuc2lvbnM6IHtba2V5OiBudW1iZXJdOiBqc3BiLkV4dGVuc2lvbkZpZWxkSW5mbzxqc3BiLk1lc3NhZ2U+fTtcbiAgc3RhdGljIGV4dGVuc2lvbnNCaW5hcnk6IHtba2V5OiBudW1iZXJdOiBqc3BiLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbzxqc3BiLk1lc3NhZ2U+fTtcbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKG1lc3NhZ2U6IFVzZXJuYW1lQW5kUGFzc3dvcmQsIHdyaXRlcjoganNwYi5CaW5hcnlXcml0ZXIpOiB2b2lkO1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IFVpbnQ4QXJyYXkpOiBVc2VybmFtZUFuZFBhc3N3b3JkO1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1lc3NhZ2U6IFVzZXJuYW1lQW5kUGFzc3dvcmQsIHJlYWRlcjoganNwYi5CaW5hcnlSZWFkZXIpOiBVc2VybmFtZUFuZFBhc3N3b3JkO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFVzZXJuYW1lQW5kUGFzc3dvcmQge1xuICBleHBvcnQgdHlwZSBBc09iamVjdCA9IHtcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gIH1cbn1cblxuIl19