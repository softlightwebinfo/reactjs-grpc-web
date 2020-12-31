import * as jspb from 'google-protobuf'



export class ContactSuccessResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ContactSuccessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactSuccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContactSuccessResponse): ContactSuccessResponse.AsObject;
  static serializeBinaryToWriter(message: ContactSuccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactSuccessResponse;
  static deserializeBinaryFromReader(message: ContactSuccessResponse, reader: jspb.BinaryReader): ContactSuccessResponse;
}

export namespace ContactSuccessResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class CreateContactRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateContactRequest;

  getPhone(): string;
  setPhone(value: string): CreateContactRequest;

  getEmail(): string;
  setEmail(value: string): CreateContactRequest;

  getMessage(): string;
  setMessage(value: string): CreateContactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContactRequest): CreateContactRequest.AsObject;
  static serializeBinaryToWriter(message: CreateContactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContactRequest;
  static deserializeBinaryFromReader(message: CreateContactRequest, reader: jspb.BinaryReader): CreateContactRequest;
}

export namespace CreateContactRequest {
  export type AsObject = {
    name: string,
    phone: string,
    email: string,
    message: string,
  }
}

