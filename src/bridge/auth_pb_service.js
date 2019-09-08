// package: bridge
// file: src/bridge/auth.proto

var src_bridge_auth_pb = require("../../src/bridge/auth_pb")
var google_protobuf_api_pb = require("google-protobuf/google/protobuf/api_pb")
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb")
var grpc = require("@improbable-eng/grpc-web").grpc

var Auth = (function () {
  function Auth() {}
  Auth.serviceName = "bridge.Auth"
  return Auth
}())

Auth.Descriptor = {
  methodName: "Descriptor",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: google_protobuf_api_pb.Api,
}

Auth.ByUsernameAndPassword = {
  methodName: "ByUsernameAndPassword",
  service: Auth,
  requestStream: false,
  responseStream: false,
  requestType: src_bridge_auth_pb.UsernameAndPassword,
  responseType: google_protobuf_api_pb.Api,
}

exports.Auth = Auth

function AuthClient(serviceHost, options) {
  this.serviceHost = serviceHost
  this.options = options || {}
}

AuthClient.prototype.descriptor = function descriptor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1]
  }
  var client = grpc.unary(Auth.Descriptor, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage)
          err.code = response.status
          err.metadata = response.trailers
          callback(err, null)
        } else {
          callback(null, response.message)
        }
      }
    },
  })
  return {
    cancel: function () {
      callback = null
      client.close()
    },
  }
}

AuthClient.prototype.byUsernameAndPassword = function byUsernameAndPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1]
  }
  var client = grpc.unary(Auth.ByUsernameAndPassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage)
          err.code = response.status
          err.metadata = response.trailers
          callback(err, null)
        } else {
          callback(null, response.message)
        }
      }
    },
  })
  return {
    cancel: function () {
      callback = null
      client.close()
    },
  }
}

exports.AuthClient = AuthClient

