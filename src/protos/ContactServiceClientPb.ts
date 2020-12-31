/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as contact_pb from './contact_pb';


export class ContactServiceClient {
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

  methodInfoCreateContact = new grpcWeb.AbstractClientBase.MethodInfo(
    contact_pb.ContactSuccessResponse,
    (request: contact_pb.CreateContactRequest) => {
      return request.serializeBinary();
    },
    contact_pb.ContactSuccessResponse.deserializeBinary
  );

  createContact(
    request: contact_pb.CreateContactRequest,
    metadata: grpcWeb.Metadata | null): Promise<contact_pb.ContactSuccessResponse>;

  createContact(
    request: contact_pb.CreateContactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contact_pb.ContactSuccessResponse) => void): grpcWeb.ClientReadableStream<contact_pb.ContactSuccessResponse>;

  createContact(
    request: contact_pb.CreateContactRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contact_pb.ContactSuccessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ContactService/CreateContact',
        request,
        metadata || {},
        this.methodInfoCreateContact,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ContactService/CreateContact',
    request,
    metadata || {},
    this.methodInfoCreateContact);
  }

}

