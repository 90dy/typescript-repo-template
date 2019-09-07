// GENERATED CODE -- DO NOT EDIT!

// package: bridge
// file: src/bridge/auth.proto

import * as src_bridge_auth_pb from "../../src/bridge/auth_pb";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  descriptor: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_api_pb.Api>;
  byUsernameAndPassword: grpc.MethodDefinition<src_bridge_auth_pb.UsernameAndPassword, google_protobuf_api_pb.Api>;
}

export const AuthService: IAuthService;

export class AuthClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  descriptor(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
  descriptor(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
  descriptor(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
  byUsernameAndPassword(argument: src_bridge_auth_pb.UsernameAndPassword, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
  byUsernameAndPassword(argument: src_bridge_auth_pb.UsernameAndPassword, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
  byUsernameAndPassword(argument: src_bridge_auth_pb.UsernameAndPassword, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_api_pb.Api>): grpc.ClientUnaryCall;
}
