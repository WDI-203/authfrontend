import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersCommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comments {
  readonly id: string;
  readonly content?: string | null;
  readonly postsID: string;
  readonly userss?: (UsersComments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class Users {
  readonly id: string;
  readonly email: string;
  readonly Posts?: (Posts | null)[] | null;
  readonly Comments?: (UsersComments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Posts {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly usersID: string;
  readonly Comments?: (Comments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class UsersComments {
  readonly id: string;
  readonly comments: Comments;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UsersComments, UsersCommentsMetaData>);
  static copyOf(source: UsersComments, mutator: (draft: MutableModel<UsersComments, UsersCommentsMetaData>) => MutableModel<UsersComments, UsersCommentsMetaData> | void): UsersComments;
}