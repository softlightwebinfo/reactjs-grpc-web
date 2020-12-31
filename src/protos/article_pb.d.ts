import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class SuccessResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SuccessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessResponse): SuccessResponse.AsObject;
  static serializeBinaryToWriter(message: SuccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessResponse;
  static deserializeBinaryFromReader(message: SuccessResponse, reader: jspb.BinaryReader): SuccessResponse;
}

export namespace SuccessResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class Article extends jspb.Message {
  getId(): number;
  setId(value: number): Article;

  getTitle(): string;
  setTitle(value: string): Article;

  getDescription(): string;
  setDescription(value: string): Article;

  getFkuser(): number;
  setFkuser(value: number): Article;

  getCreatedat(): string;
  setCreatedat(value: string): Article;

  getUpdatedat(): string;
  setUpdatedat(value: string): Article;

  getDeletedat(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDeletedat(value?: google_protobuf_wrappers_pb.StringValue): Article;
  hasDeletedat(): boolean;
  clearDeletedat(): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
    fkuser: number,
    createdat: string,
    updatedat: string,
    deletedat?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ArticlePublish extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ArticlePublish;

  getDescription(): string;
  setDescription(value: string): ArticlePublish;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticlePublish.AsObject;
  static toObject(includeInstance: boolean, msg: ArticlePublish): ArticlePublish.AsObject;
  static serializeBinaryToWriter(message: ArticlePublish, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticlePublish;
  static deserializeBinaryFromReader(message: ArticlePublish, reader: jspb.BinaryReader): ArticlePublish;
}

export namespace ArticlePublish {
  export type AsObject = {
    title: string,
    description: string,
  }
}

export class ArticleUpdate extends jspb.Message {
  getId(): number;
  setId(value: number): ArticleUpdate;

  getTitle(): string;
  setTitle(value: string): ArticleUpdate;

  getDescription(): string;
  setDescription(value: string): ArticleUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleUpdate): ArticleUpdate.AsObject;
  static serializeBinaryToWriter(message: ArticleUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleUpdate;
  static deserializeBinaryFromReader(message: ArticleUpdate, reader: jspb.BinaryReader): ArticleUpdate;
}

export namespace ArticleUpdate {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
  }
}

export class GetArticlesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticlesRequest): GetArticlesRequest.AsObject;
  static serializeBinaryToWriter(message: GetArticlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesRequest;
  static deserializeBinaryFromReader(message: GetArticlesRequest, reader: jspb.BinaryReader): GetArticlesRequest;
}

export namespace GetArticlesRequest {
  export type AsObject = {
  }
}

export class GetArticlesResponse extends jspb.Message {
  getArticlesList(): Array<Article>;
  setArticlesList(value: Array<Article>): GetArticlesResponse;
  clearArticlesList(): GetArticlesResponse;
  addArticles(value?: Article, index?: number): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticlesResponse): GetArticlesResponse.AsObject;
  static serializeBinaryToWriter(message: GetArticlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesResponse;
  static deserializeBinaryFromReader(message: GetArticlesResponse, reader: jspb.BinaryReader): GetArticlesResponse;
}

export namespace GetArticlesResponse {
  export type AsObject = {
    articlesList: Array<Article.AsObject>,
  }
}

export class GetArticleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetArticleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleRequest): GetArticleRequest.AsObject;
  static serializeBinaryToWriter(message: GetArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleRequest;
  static deserializeBinaryFromReader(message: GetArticleRequest, reader: jspb.BinaryReader): GetArticleRequest;
}

export namespace GetArticleRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetArticleResponse extends jspb.Message {
  getResponse(): Article | undefined;
  setResponse(value?: Article): GetArticleResponse;
  hasResponse(): boolean;
  clearResponse(): GetArticleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticleResponse): GetArticleResponse.AsObject;
  static serializeBinaryToWriter(message: GetArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticleResponse;
  static deserializeBinaryFromReader(message: GetArticleResponse, reader: jspb.BinaryReader): GetArticleResponse;
}

export namespace GetArticleResponse {
  export type AsObject = {
    response?: Article.AsObject,
  }
}

export class DeleteArticleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteArticleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteArticleRequest): DeleteArticleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteArticleRequest;
  static deserializeBinaryFromReader(message: DeleteArticleRequest, reader: jspb.BinaryReader): DeleteArticleRequest;
}

export namespace DeleteArticleRequest {
  export type AsObject = {
    id: number,
  }
}

export class SaveImagesArticleRequest extends jspb.Message {
  getArticleid(): number;
  setArticleid(value: number): SaveImagesArticleRequest;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): SaveImagesArticleRequest;
  clearImagesList(): SaveImagesArticleRequest;
  addImages(value: string, index?: number): SaveImagesArticleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveImagesArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveImagesArticleRequest): SaveImagesArticleRequest.AsObject;
  static serializeBinaryToWriter(message: SaveImagesArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveImagesArticleRequest;
  static deserializeBinaryFromReader(message: SaveImagesArticleRequest, reader: jspb.BinaryReader): SaveImagesArticleRequest;
}

export namespace SaveImagesArticleRequest {
  export type AsObject = {
    articleid: number,
    imagesList: Array<string>,
  }
}

export class GetArticlesUserRequest extends jspb.Message {
  getUser(): number;
  setUser(value: number): GetArticlesUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticlesUserRequest): GetArticlesUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetArticlesUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesUserRequest;
  static deserializeBinaryFromReader(message: GetArticlesUserRequest, reader: jspb.BinaryReader): GetArticlesUserRequest;
}

export namespace GetArticlesUserRequest {
  export type AsObject = {
    user: number,
  }
}

export class GetArticlesUserResponse extends jspb.Message {
  getArticlesList(): Array<Article>;
  setArticlesList(value: Array<Article>): GetArticlesUserResponse;
  clearArticlesList(): GetArticlesUserResponse;
  addArticles(value?: Article, index?: number): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArticlesUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetArticlesUserResponse): GetArticlesUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetArticlesUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArticlesUserResponse;
  static deserializeBinaryFromReader(message: GetArticlesUserResponse, reader: jspb.BinaryReader): GetArticlesUserResponse;
}

export namespace GetArticlesUserResponse {
  export type AsObject = {
    articlesList: Array<Article.AsObject>,
  }
}

