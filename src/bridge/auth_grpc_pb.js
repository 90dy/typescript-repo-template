// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('grpc')
var src_bridge_auth_pb = require('../../src/bridge/auth_pb.js')
var google_protobuf_api_pb = require('google-protobuf/google/protobuf/api_pb.js')
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

function serialize_bridge_UsernameAndPassword(arg) {
  if (!(arg instanceof src_bridge_auth_pb.UsernameAndPassword)) {
    throw new Error('Expected argument of type bridge.UsernameAndPassword')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_bridge_UsernameAndPassword(buffer_arg) {
  return src_bridge_auth_pb.UsernameAndPassword.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_google_protobuf_Api(arg) {
  if (!(arg instanceof google_protobuf_api_pb.Api)) {
    throw new Error('Expected argument of type google.protobuf.Api')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_google_protobuf_Api(buffer_arg) {
  return google_protobuf_api_pb.Api.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg))
}


// Auth permit to authenticate on server and returns an api
var AuthService = exports.AuthService = {
  // Descriptor returns the api descriptor of Auth
  descriptor: {
    path: '/bridge.Auth/Descriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_api_pb.Api,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Api,
    responseDeserialize: deserialize_google_protobuf_Api,
  },
  // ByUsernameAndPassword returns the api descriptor
  byUsernameAndPassword: {
    path: '/bridge.Auth/ByUsernameAndPassword',
    requestStream: false,
    responseStream: false,
    requestType: src_bridge_auth_pb.UsernameAndPassword,
    responseType: google_protobuf_api_pb.Api,
    requestSerialize: serialize_bridge_UsernameAndPassword,
    requestDeserialize: deserialize_bridge_UsernameAndPassword,
    responseSerialize: serialize_google_protobuf_Api,
    responseDeserialize: deserialize_google_protobuf_Api,
  },
}

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService)
