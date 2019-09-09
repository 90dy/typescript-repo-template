"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClient = exports.Auth = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// package: bridge
// file: src/bridge/auth.proto
var Auth = function Auth() {
  _classCallCheck(this, Auth);
};

exports.Auth = Auth;

_defineProperty(Auth, "serviceName", void 0);

_defineProperty(Auth, "Descriptor", void 0);

_defineProperty(Auth, "ByUsernameAndPassword", void 0);

var AuthClient = function AuthClient() {
  _classCallCheck(this, AuthClient);

  _defineProperty(this, "serviceHost", void 0);
};

exports.AuthClient = AuthClient;