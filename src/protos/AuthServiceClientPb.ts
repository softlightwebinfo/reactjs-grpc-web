/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAuth = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.AuthResponse,
    (request: auth_pb.AuthRequest) => {
      return request.serializeBinary();
    },
    auth_pb.AuthResponse.deserializeBinary
  );

  auth(
    request: auth_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.AuthResponse>;

  auth(
    request: auth_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void): grpcWeb.ClientReadableStream<auth_pb.AuthResponse>;

  auth(
    request: auth_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AuthService/Auth',
        request,
        metadata || {},
        this.methodInfoAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AuthService/Auth',
    request,
    metadata || {},
    this.methodInfoAuth);
  }

  methodInfoVerifyAuth = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.AuthResponse,
    (request: auth_pb.VerifyAuthRequest) => {
      return request.serializeBinary();
    },
    auth_pb.AuthResponse.deserializeBinary
  );

  verifyAuth(
    request: auth_pb.VerifyAuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.AuthResponse>;

  verifyAuth(
    request: auth_pb.VerifyAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void): grpcWeb.ClientReadableStream<auth_pb.AuthResponse>;

  verifyAuth(
    request: auth_pb.VerifyAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AuthService/VerifyAuth',
        request,
        metadata || {},
        this.methodInfoVerifyAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AuthService/VerifyAuth',
    request,
    metadata || {},
    this.methodInfoVerifyAuth);
  }

  methodInfoRegister = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.AuthResponse,
    (request: auth_pb.AuthRegisterRequest) => {
      return request.serializeBinary();
    },
    auth_pb.AuthResponse.deserializeBinary
  );

  register(
    request: auth_pb.AuthRegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.AuthResponse>;

  register(
    request: auth_pb.AuthRegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void): grpcWeb.ClientReadableStream<auth_pb.AuthResponse>;

  register(
    request: auth_pb.AuthRegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AuthService/Register',
        request,
        metadata || {},
        this.methodInfoRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AuthService/Register',
    request,
    metadata || {},
    this.methodInfoRegister);
  }

  methodInfoSendRecoveryAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.AuthRecoveryAccountResponse,
    (request: auth_pb.AuthRecoveryAccountRequest) => {
      return request.serializeBinary();
    },
    auth_pb.AuthRecoveryAccountResponse.deserializeBinary
  );

  sendRecoveryAccount(
    request: auth_pb.AuthRecoveryAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.AuthRecoveryAccountResponse>;

  sendRecoveryAccount(
    request: auth_pb.AuthRecoveryAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.AuthRecoveryAccountResponse) => void): grpcWeb.ClientReadableStream<auth_pb.AuthRecoveryAccountResponse>;

  sendRecoveryAccount(
    request: auth_pb.AuthRecoveryAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.AuthRecoveryAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AuthService/SendRecoveryAccount',
        request,
        metadata || {},
        this.methodInfoSendRecoveryAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AuthService/SendRecoveryAccount',
    request,
    metadata || {},
    this.methodInfoSendRecoveryAccount);
  }

  methodInfoRecoveryAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.AuthRecoveryAccountResponse,
    (request: auth_pb.AuthRecoveryAccountChangeRequest) => {
      return request.serializeBinary();
    },
    auth_pb.AuthRecoveryAccountResponse.deserializeBinary
  );

  recoveryAccount(
    request: auth_pb.AuthRecoveryAccountChangeRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.AuthRecoveryAccountResponse>;

  recoveryAccount(
    request: auth_pb.AuthRecoveryAccountChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.AuthRecoveryAccountResponse) => void): grpcWeb.ClientReadableStream<auth_pb.AuthRecoveryAccountResponse>;

  recoveryAccount(
    request: auth_pb.AuthRecoveryAccountChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.AuthRecoveryAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AuthService/RecoveryAccount',
        request,
        metadata || {},
        this.methodInfoRecoveryAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AuthService/RecoveryAccount',
    request,
    metadata || {},
    this.methodInfoRecoveryAccount);
  }

}

