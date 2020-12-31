/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as article_pb from './article_pb';


export class ArticleServiceClient {
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

  methodInfoGetArticles = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.GetArticlesResponse,
    (request: article_pb.GetArticlesRequest) => {
      return request.serializeBinary();
    },
    article_pb.GetArticlesResponse.deserializeBinary
  );

  getArticles(
    request: article_pb.GetArticlesRequest,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.GetArticlesResponse>;

  getArticles(
    request: article_pb.GetArticlesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.GetArticlesResponse) => void): grpcWeb.ClientReadableStream<article_pb.GetArticlesResponse>;

  getArticles(
    request: article_pb.GetArticlesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.GetArticlesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/GetArticles',
        request,
        metadata || {},
        this.methodInfoGetArticles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/GetArticles',
    request,
    metadata || {},
    this.methodInfoGetArticles);
  }

  methodInfoGetArticle = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.GetArticleResponse,
    (request: article_pb.GetArticleRequest) => {
      return request.serializeBinary();
    },
    article_pb.GetArticleResponse.deserializeBinary
  );

  getArticle(
    request: article_pb.GetArticleRequest,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.GetArticleResponse>;

  getArticle(
    request: article_pb.GetArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.GetArticleResponse) => void): grpcWeb.ClientReadableStream<article_pb.GetArticleResponse>;

  getArticle(
    request: article_pb.GetArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.GetArticleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/GetArticle',
        request,
        metadata || {},
        this.methodInfoGetArticle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/GetArticle',
    request,
    metadata || {},
    this.methodInfoGetArticle);
  }

  methodInfoDeleteArticle = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.SuccessResponse,
    (request: article_pb.DeleteArticleRequest) => {
      return request.serializeBinary();
    },
    article_pb.SuccessResponse.deserializeBinary
  );

  deleteArticle(
    request: article_pb.DeleteArticleRequest,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.SuccessResponse>;

  deleteArticle(
    request: article_pb.DeleteArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void): grpcWeb.ClientReadableStream<article_pb.SuccessResponse>;

  deleteArticle(
    request: article_pb.DeleteArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/DeleteArticle',
        request,
        metadata || {},
        this.methodInfoDeleteArticle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/DeleteArticle',
    request,
    metadata || {},
    this.methodInfoDeleteArticle);
  }

  methodInfoSaveImagesArticle = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.SuccessResponse,
    (request: article_pb.SaveImagesArticleRequest) => {
      return request.serializeBinary();
    },
    article_pb.SuccessResponse.deserializeBinary
  );

  saveImagesArticle(
    request: article_pb.SaveImagesArticleRequest,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.SuccessResponse>;

  saveImagesArticle(
    request: article_pb.SaveImagesArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void): grpcWeb.ClientReadableStream<article_pb.SuccessResponse>;

  saveImagesArticle(
    request: article_pb.SaveImagesArticleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/SaveImagesArticle',
        request,
        metadata || {},
        this.methodInfoSaveImagesArticle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/SaveImagesArticle',
    request,
    metadata || {},
    this.methodInfoSaveImagesArticle);
  }

  methodInfoGetArticlesUser = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.GetArticlesUserResponse,
    (request: article_pb.GetArticlesUserRequest) => {
      return request.serializeBinary();
    },
    article_pb.GetArticlesUserResponse.deserializeBinary
  );

  getArticlesUser(
    request: article_pb.GetArticlesUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.GetArticlesUserResponse>;

  getArticlesUser(
    request: article_pb.GetArticlesUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.GetArticlesUserResponse) => void): grpcWeb.ClientReadableStream<article_pb.GetArticlesUserResponse>;

  getArticlesUser(
    request: article_pb.GetArticlesUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.GetArticlesUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/GetArticlesUser',
        request,
        metadata || {},
        this.methodInfoGetArticlesUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/GetArticlesUser',
    request,
    metadata || {},
    this.methodInfoGetArticlesUser);
  }

  methodInfoUpdateArticle = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.SuccessResponse,
    (request: article_pb.ArticleUpdate) => {
      return request.serializeBinary();
    },
    article_pb.SuccessResponse.deserializeBinary
  );

  updateArticle(
    request: article_pb.ArticleUpdate,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.SuccessResponse>;

  updateArticle(
    request: article_pb.ArticleUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void): grpcWeb.ClientReadableStream<article_pb.SuccessResponse>;

  updateArticle(
    request: article_pb.ArticleUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/UpdateArticle',
        request,
        metadata || {},
        this.methodInfoUpdateArticle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/UpdateArticle',
    request,
    metadata || {},
    this.methodInfoUpdateArticle);
  }

  methodInfoPublishArticle = new grpcWeb.AbstractClientBase.MethodInfo(
    article_pb.SuccessResponse,
    (request: article_pb.ArticlePublish) => {
      return request.serializeBinary();
    },
    article_pb.SuccessResponse.deserializeBinary
  );

  publishArticle(
    request: article_pb.ArticlePublish,
    metadata: grpcWeb.Metadata | null): Promise<article_pb.SuccessResponse>;

  publishArticle(
    request: article_pb.ArticlePublish,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void): grpcWeb.ClientReadableStream<article_pb.SuccessResponse>;

  publishArticle(
    request: article_pb.ArticlePublish,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: article_pb.SuccessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ArticleService/PublishArticle',
        request,
        metadata || {},
        this.methodInfoPublishArticle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ArticleService/PublishArticle',
    request,
    metadata || {},
    this.methodInfoPublishArticle);
  }

}

