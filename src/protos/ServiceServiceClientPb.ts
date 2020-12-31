/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as service_pb from './service_pb';


export class UserServiceClient {
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

  methodInfoGetUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.GetUsersResponse,
    (request: service_pb.GetUsersRequest) => {
      return request.serializeBinary();
    },
    service_pb.GetUsersResponse.deserializeBinary
  );

  getUsers(
    request: service_pb.GetUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.GetUsersResponse>;

  getUsers(
    request: service_pb.GetUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.GetUsersResponse) => void): grpcWeb.ClientReadableStream<service_pb.GetUsersResponse>;

  getUsers(
    request: service_pb.GetUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.GetUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.UserService/GetUsers',
        request,
        metadata || {},
        this.methodInfoGetUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.UserService/GetUsers',
    request,
    metadata || {},
    this.methodInfoGetUsers);
  }

}

