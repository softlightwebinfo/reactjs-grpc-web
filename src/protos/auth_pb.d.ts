import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class AuthRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthRequest;

  getPassword(): string;
  setPassword(value: string): AuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class AuthUser extends jspb.Message {
  getId(): number;
  setId(value: number): AuthUser;

  getName(): string;
  setName(value: string): AuthUser;

  getEmail(): string;
  setEmail(value: string): AuthUser;

  getCreatedat(): string;
  setCreatedat(value: string): AuthUser;

  getRole(): string;
  setRole(value: string): AuthUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUser.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUser): AuthUser.AsObject;
  static serializeBinaryToWriter(message: AuthUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUser;
  static deserializeBinaryFromReader(message: AuthUser, reader: jspb.BinaryReader): AuthUser;
}

export namespace AuthUser {
  export type AsObject = {
    id: number,
    name: string,
    email: string,
    createdat: string,
    role: string,
  }
}

export class AuthResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): AuthResponse;
  hasUser(): boolean;
  clearUser(): AuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    token: string,
    user?: AuthUser.AsObject,
  }
}

export class AuthRegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AuthRegisterRequest;

  getEmail(): string;
  setEmail(value: string): AuthRegisterRequest;

  getPassword(): string;
  setPassword(value: string): AuthRegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRegisterRequest): AuthRegisterRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRegisterRequest;
  static deserializeBinaryFromReader(message: AuthRegisterRequest, reader: jspb.BinaryReader): AuthRegisterRequest;
}

export namespace AuthRegisterRequest {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
  }
}

export class AuthRecoveryAccountRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthRecoveryAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRecoveryAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRecoveryAccountRequest): AuthRecoveryAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRecoveryAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRecoveryAccountRequest;
  static deserializeBinaryFromReader(message: AuthRecoveryAccountRequest, reader: jspb.BinaryReader): AuthRecoveryAccountRequest;
}

export namespace AuthRecoveryAccountRequest {
  export type AsObject = {
    email: string,
  }
}

export class AuthRecoveryAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AuthRecoveryAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRecoveryAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRecoveryAccountResponse): AuthRecoveryAccountResponse.AsObject;
  static serializeBinaryToWriter(message: AuthRecoveryAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRecoveryAccountResponse;
  static deserializeBinaryFromReader(message: AuthRecoveryAccountResponse, reader: jspb.BinaryReader): AuthRecoveryAccountResponse;
}

export namespace AuthRecoveryAccountResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class AuthRecoveryAccountChangeRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthRecoveryAccountChangeRequest;

  getEmail(): string;
  setEmail(value: string): AuthRecoveryAccountChangeRequest;

  getPassword(): string;
  setPassword(value: string): AuthRecoveryAccountChangeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRecoveryAccountChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRecoveryAccountChangeRequest): AuthRecoveryAccountChangeRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRecoveryAccountChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRecoveryAccountChangeRequest;
  static deserializeBinaryFromReader(message: AuthRecoveryAccountChangeRequest, reader: jspb.BinaryReader): AuthRecoveryAccountChangeRequest;
}

export namespace AuthRecoveryAccountChangeRequest {
  export type AsObject = {
    token: string,
    email: string,
    password: string,
  }
}

export class VerifyAuthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyAuthRequest): VerifyAuthRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyAuthRequest;
  static deserializeBinaryFromReader(message: VerifyAuthRequest, reader: jspb.BinaryReader): VerifyAuthRequest;
}

export namespace VerifyAuthRequest {
  export type AsObject = {
    token: string,
  }
}

