import GRPCClient from 'node-grpc-client';

const PROTO_PATH = "./serverSrc/proto/auth.proto";
export const AuthService = new GRPCClient(PROTO_PATH, 'proto', 'AuthService', 'localhost:8080');