// package: bridge
// file: src/bridge/auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class UsernameAndPassword extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsernameAndPassword.AsObject;
  static toObject(includeInstance: boolean, msg: UsernameAndPassword): UsernameAndPassword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsernameAndPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsernameAndPassword;
  static deserializeBinaryFromReader(message: UsernameAndPassword, reader: jspb.BinaryReader): UsernameAndPassword;
}

export namespace UsernameAndPassword {
  export type AsObject = {
    username: string,
    password: string,
  }
}

