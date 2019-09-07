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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icmlkZ2UvYXV0aF9ncnBjX3BiLmQudHMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJBdXRoQ2xpZW50IiwiZ3JwYyIsIkNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPTyxJQUFNQSxXQUFOOzs7SUFFTUMsVTs7Ozs7Ozs7Ozs7O0VBQW1CQyxJQUFJLENBQUNDLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcblxuLy8gcGFja2FnZTogYnJpZGdlXG4vLyBmaWxlOiBzcmMvYnJpZGdlL2F1dGgucHJvdG9cblxuaW1wb3J0ICogYXMgc3JjX2JyaWRnZV9hdXRoX3BiIGZyb20gXCIuLi8uLi9zcmMvYnJpZGdlL2F1dGhfcGJcIjtcbmltcG9ydCAqIGFzIGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIgZnJvbSBcImdvb2dsZS1wcm90b2J1Zi9nb29nbGUvcHJvdG9idWYvYXBpX3BiXCI7XG5pbXBvcnQgKiBhcyBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIgZnJvbSBcImdvb2dsZS1wcm90b2J1Zi9nb29nbGUvcHJvdG9idWYvZW1wdHlfcGJcIjtcbmltcG9ydCAqIGFzIGdycGMgZnJvbSBcImdycGNcIjtcblxuaW50ZXJmYWNlIElBdXRoU2VydmljZSBleHRlbmRzIGdycGMuU2VydmljZURlZmluaXRpb248Z3JwYy5VbnR5cGVkU2VydmljZUltcGxlbWVudGF0aW9uPiB7XG4gIGRlc2NyaXB0b3I6IGdycGMuTWV0aG9kRGVmaW5pdGlvbjxnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksIGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPjtcbiAgYnlVc2VybmFtZUFuZFBhc3N3b3JkOiBncnBjLk1ldGhvZERlZmluaXRpb248c3JjX2JyaWRnZV9hdXRoX3BiLlVzZXJuYW1lQW5kUGFzc3dvcmQsIGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPjtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhTZXJ2aWNlOiBJQXV0aFNlcnZpY2U7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ2xpZW50IGV4dGVuZHMgZ3JwYy5DbGllbnQge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBzdHJpbmcsIGNyZWRlbnRpYWxzOiBncnBjLkNoYW5uZWxDcmVkZW50aWFscywgb3B0aW9ucz86IG9iamVjdCk7XG4gIGRlc2NyaXB0b3IoYXJndW1lbnQ6IGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYi5FbXB0eSwgY2FsbGJhY2s6IGdycGMucmVxdWVzdENhbGxiYWNrPGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPik6IGdycGMuQ2xpZW50VW5hcnlDYWxsO1xuICBkZXNjcmlwdG9yKGFyZ3VtZW50OiBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksIG1ldGFkYXRhT3JPcHRpb25zOiBncnBjLk1ldGFkYXRhIHwgZ3JwYy5DYWxsT3B0aW9ucyB8IG51bGwsIGNhbGxiYWNrOiBncnBjLnJlcXVlc3RDYWxsYmFjazxnb29nbGVfcHJvdG9idWZfYXBpX3BiLkFwaT4pOiBncnBjLkNsaWVudFVuYXJ5Q2FsbDtcbiAgZGVzY3JpcHRvcihhcmd1bWVudDogZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiLkVtcHR5LCBtZXRhZGF0YTogZ3JwYy5NZXRhZGF0YSB8IG51bGwsIG9wdGlvbnM6IGdycGMuQ2FsbE9wdGlvbnMgfCBudWxsLCBjYWxsYmFjazogZ3JwYy5yZXF1ZXN0Q2FsbGJhY2s8Z29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+KTogZ3JwYy5DbGllbnRVbmFyeUNhbGw7XG4gIGJ5VXNlcm5hbWVBbmRQYXNzd29yZChhcmd1bWVudDogc3JjX2JyaWRnZV9hdXRoX3BiLlVzZXJuYW1lQW5kUGFzc3dvcmQsIGNhbGxiYWNrOiBncnBjLnJlcXVlc3RDYWxsYmFjazxnb29nbGVfcHJvdG9idWZfYXBpX3BiLkFwaT4pOiBncnBjLkNsaWVudFVuYXJ5Q2FsbDtcbiAgYnlVc2VybmFtZUFuZFBhc3N3b3JkKGFyZ3VtZW50OiBzcmNfYnJpZGdlX2F1dGhfcGIuVXNlcm5hbWVBbmRQYXNzd29yZCwgbWV0YWRhdGFPck9wdGlvbnM6IGdycGMuTWV0YWRhdGEgfCBncnBjLkNhbGxPcHRpb25zIHwgbnVsbCwgY2FsbGJhY2s6IGdycGMucmVxdWVzdENhbGxiYWNrPGdvb2dsZV9wcm90b2J1Zl9hcGlfcGIuQXBpPik6IGdycGMuQ2xpZW50VW5hcnlDYWxsO1xuICBieVVzZXJuYW1lQW5kUGFzc3dvcmQoYXJndW1lbnQ6IHNyY19icmlkZ2VfYXV0aF9wYi5Vc2VybmFtZUFuZFBhc3N3b3JkLCBtZXRhZGF0YTogZ3JwYy5NZXRhZGF0YSB8IG51bGwsIG9wdGlvbnM6IGdycGMuQ2FsbE9wdGlvbnMgfCBudWxsLCBjYWxsYmFjazogZ3JwYy5yZXF1ZXN0Q2FsbGJhY2s8Z29vZ2xlX3Byb3RvYnVmX2FwaV9wYi5BcGk+KTogZ3JwYy5DbGllbnRVbmFyeUNhbGw7XG59XG4iXX0=