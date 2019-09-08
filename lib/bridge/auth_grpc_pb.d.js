"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClient = exports.AuthService = void 0;

var grpc = _interopRequireWildcard(require("grpc"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AuthService;
exports.AuthService = AuthService;

var AuthClient =
/*#__PURE__*/
function (_grpc$Client) {
  _inherits(AuthClient, _grpc$Client);

  function AuthClient() {
    _classCallCheck(this, AuthClient);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthClient).apply(this, arguments));
  }

  return AuthClient;
}(grpc.Client);

exports.AuthClient = AuthClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icmlkZ2UvYXV0aF9ncnBjX3BiLmQudHMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJBdXRoQ2xpZW50IiwiZ3JwYyIsIkNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPTyxJQUFNQSxXQUFOOzs7SUFFTUMsVTs7Ozs7Ozs7Ozs7O0VBQW1CQyxJQUFJLENBQUNDLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxuLy8gcGFja2FnZTogYnJpZGdlXG4vLyBmaWxlOiBzcmMvYnJpZGdlL2F1dGgucHJvdG9cblxuaW1wb3J0ICogYXMgc3JjX2JyaWRnZV9hdXRoX3BiIGZyb20gXCIuLi8uLi9zcmMvYnJpZGdlL2F1dGhfcGJcIlxuaW1wb3J0ICogYXMgZ29vZ2xlX3Byb3RvYnVmX2FwaV9wYiBmcm9tIFwiZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9hcGlfcGJcIlxuaW1wb3J0ICogYXMgZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiIGZyb20gXCJnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL2VtcHR5X3BiXCJcbmltcG9ydCAqIGFzIGdycGMgZnJvbSBcImdycGNcIlxuXG5pbnRlcmZhY2UgSUF1dGhTZXJ2aWNlIGV4dGVuZHMgZ3JwYy5TZXJ2aWNlRGVmaW5pdGlvbjxncnBjLlVudHlwZWRTZXJ2aWNlSW1wbGVtZW50YXRpb24+IHtcbiAgZGVzY3JpcHRvcjogZ3JwYy5NZXRob2REZWZpbml0aW9uPGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYi5FbXB0eSwgZ29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+O1xuICBieVVzZXJuYW1lQW5kUGFzc3dvcmQ6IGdycGMuTWV0aG9kRGVmaW5pdGlvbjxzcmNfYnJpZGdlX2F1dGhfcGIuVXNlcm5hbWVBbmRQYXNzd29yZCwgZ29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+O1xufVxuXG5leHBvcnQgY29uc3QgQXV0aFNlcnZpY2U6IElBdXRoU2VydmljZVxuXG5leHBvcnQgY2xhc3MgQXV0aENsaWVudCBleHRlbmRzIGdycGMuQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogc3RyaW5nLCBjcmVkZW50aWFsczogZ3JwYy5DaGFubmVsQ3JlZGVudGlhbHMsIG9wdGlvbnM/OiBvYmplY3QpO1xuICBkZXNjcmlwdG9yKGFyZ3VtZW50OiBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksIGNhbGxiYWNrOiBncnBjLnJlcXVlc3RDYWxsYmFjazxnb29nbGVfcHJvdG9idWZfYXBpX3BiLkFwaT4pOiBncnBjLkNsaWVudFVuYXJ5Q2FsbDtcbiAgZGVzY3JpcHRvcihhcmd1bWVudDogZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiLkVtcHR5LCBtZXRhZGF0YU9yT3B0aW9uczogZ3JwYy5NZXRhZGF0YSB8IGdycGMuQ2FsbE9wdGlvbnMgfCBudWxsLCBjYWxsYmFjazogZ3JwYy5yZXF1ZXN0Q2FsbGJhY2s8Z29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+KTogZ3JwYy5DbGllbnRVbmFyeUNhbGw7XG4gIGRlc2NyaXB0b3IoYXJndW1lbnQ6IGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYi5FbXB0eSwgbWV0YWRhdGE6IGdycGMuTWV0YWRhdGEgfCBudWxsLCBvcHRpb25zOiBncnBjLkNhbGxPcHRpb25zIHwgbnVsbCwgY2FsbGJhY2s6IGdycGMucmVxdWVzdENhbGxiYWNrPGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPik6IGdycGMuQ2xpZW50VW5hcnlDYWxsO1xuICBieVVzZXJuYW1lQW5kUGFzc3dvcmQoYXJndW1lbnQ6IHNyY19icmlkZ2VfYXV0aF9wYi5Vc2VybmFtZUFuZFBhc3N3b3JkLCBjYWxsYmFjazogZ3JwYy5yZXF1ZXN0Q2FsbGJhY2s8Z29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+KTogZ3JwYy5DbGllbnRVbmFyeUNhbGw7XG4gIGJ5VXNlcm5hbWVBbmRQYXNzd29yZChhcmd1bWVudDogc3JjX2JyaWRnZV9hdXRoX3BiLlVzZXJuYW1lQW5kUGFzc3dvcmQsIG1ldGFkYXRhT3JPcHRpb25zOiBncnBjLk1ldGFkYXRhIHwgZ3JwYy5DYWxsT3B0aW9ucyB8IG51bGwsIGNhbGxiYWNrOiBncnBjLnJlcXVlc3RDYWxsYmFjazxnb29nbGVfcHJvdG9idWZfYXBpX3BiLkFwaT4pOiBncnBjLkNsaWVudFVuYXJ5Q2FsbDtcbiAgYnlVc2VybmFtZUFuZFBhc3N3b3JkKGFyZ3VtZW50OiBzcmNfYnJpZGdlX2F1dGhfcGIuVXNlcm5hbWVBbmRQYXNzd29yZCwgbWV0YWRhdGE6IGdycGMuTWV0YWRhdGEgfCBudWxsLCBvcHRpb25zOiBncnBjLkNhbGxPcHRpb25zIHwgbnVsbCwgY2FsbGJhY2s6IGdycGMucmVxdWVzdENhbGxiYWNrPGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPik6IGdycGMuQ2xpZW50VW5hcnlDYWxsO1xufVxuIl19