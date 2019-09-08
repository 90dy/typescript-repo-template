// package: bridge
// file: src/bridge/auth.proto

import * as src_bridge_auth_pb from "../../src/bridge/auth_pb"
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb"
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb"
import {grpc} from "@improbable-eng/grpc-web"

type AuthDescriptor = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof google_protobuf_api_pb.Api;
};

type AuthByUsernameAndPassword = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_bridge_auth_pb.UsernameAndPassword;
  readonly responseType: typeof google_protobuf_api_pb.Api;
};

export class Auth {
  static readonly serviceName: string;
  static readonly Descriptor: AuthDescriptor;
  static readonly ByUsernameAndPassword: AuthByUsernameAndPassword;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: "data", handler: (message: T) => void): ResponseStream<T>;
  on(type: "end", handler: (status?: Status) => void): ResponseStream<T>;
  on(type: "status", handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: "end", handler: (status?: Status) => void): RequestStream<T>;
  on(type: "status", handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: "data", handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: "end", handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: "status", handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  descriptor(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_api_pb.Api|null) => void
  ): UnaryResponse;

  descriptor(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_api_pb.Api|null) => void
  ): UnaryResponse;

  byUsernameAndPassword(
    requestMessage: src_bridge_auth_pb.UsernameAndPassword,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_api_pb.Api|null) => void
  ): UnaryResponse;

  byUsernameAndPassword(
    requestMessage: src_bridge_auth_pb.UsernameAndPassword,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_api_pb.Api|null) => void
  ): UnaryResponse;
}

