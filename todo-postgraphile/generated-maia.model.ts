export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: Date;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
}

/** The root query type which gives access points into the data universe. */
export interface IQuery extends INode {
  __typename?: "Query";
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: IQuery;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<INode>;
  /** Reads and enables pagination through a set of `Tag`. */
  tags?: Maybe<ITagsConnection>;
  /** Reads and enables pagination through a set of `Todo`. */
  todos?: Maybe<ITodosConnection>;
  /** Reads and enables pagination through a set of `TodosTag`. */
  todosTags?: Maybe<ITodosTagsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<IUsersConnection>;
  tag?: Maybe<ITag>;
  todo?: Maybe<ITodo>;
  todosTag?: Maybe<ITodosTag>;
  user?: Maybe<IUser>;
  /** Example of function with sql */
  searchTodo?: Maybe<ITodosConnection>;
  /** Reads a single `Tag` using its globally unique `ID`. */
  tagByNodeId?: Maybe<ITag>;
  /** Reads a single `Todo` using its globally unique `ID`. */
  todoByNodeId?: Maybe<ITodo>;
  /** Reads a single `TodosTag` using its globally unique `ID`. */
  todosTagByNodeId?: Maybe<ITodosTag>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<IUser>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryNodeArgs {
  nodeId: Scalars["ID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITagsOrderBy>>;
  condition?: Maybe<ITagCondition>;
  filter?: Maybe<ITagFilter>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodosArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosOrderBy>>;
  condition?: Maybe<ITodoCondition>;
  filter?: Maybe<ITodoFilter>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodosTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
  condition?: Maybe<ITodosTagCondition>;
  filter?: Maybe<ITodosTagFilter>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryUsersArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<IUsersOrderBy>>;
  condition?: Maybe<IUserCondition>;
  filter?: Maybe<IUserFilter>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTagArgs {
  id: Scalars["UUID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodoArgs {
  id: Scalars["UUID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodosTagArgs {
  id: Scalars["UUID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryUserArgs {
  id: Scalars["UUID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQuerySearchTodoArgs {
  search?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  filter?: Maybe<ITodoFilter>;
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTagByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodoByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryTodosTagByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/** The root query type which gives access points into the data universe. */
export interface IQueryUserByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/** An object with a globally unique `ID`. */
export interface INode {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
}

/** A connection to a list of `Tag` values. */
export interface ITagsConnection {
  __typename?: "TagsConnection";
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<ITag>>;
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<ITagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars["Int"];
}

/** List of tags for todo */
export interface ITag extends INode {
  __typename?: "Tag";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  id: Scalars["UUID"];
  name: Scalars["String"];
  /** Reads and enables pagination through a set of `TodosTag`. */
  todosTags: ITodosTagsConnection;
}

/** List of tags for todo */
export interface ITagTodosTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
  condition?: Maybe<ITodosTagCondition>;
  filter?: Maybe<ITodosTagFilter>;
}

/** A connection to a list of `TodosTag` values. */
export interface ITodosTagsConnection {
  __typename?: "TodosTagsConnection";
  /** A list of `TodosTag` objects. */
  nodes: Array<Maybe<ITodosTag>>;
  /** A list of edges which contains the `TodosTag` and cursor to aid in pagination. */
  edges: Array<ITodosTagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** The count of *all* `TodosTag` you could get from the connection. */
  totalCount: Scalars["Int"];
}

export interface ITodosTag extends INode {
  __typename?: "TodosTag";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  id: Scalars["UUID"];
  todoId?: Maybe<Scalars["UUID"]>;
  tagId?: Maybe<Scalars["UUID"]>;
  /** Reads a single `Todo` that is related to this `TodosTag`. */
  todo?: Maybe<ITodo>;
  /** Reads a single `Tag` that is related to this `TodosTag`. */
  tag?: Maybe<ITag>;
}

/** A todo */
export interface ITodo extends INode {
  __typename?: "Todo";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  id: Scalars["UUID"];
  content: Scalars["String"];
  title: Scalars["String"];
  status?: Maybe<ITodoStatus>;
  createdAt?: Maybe<Scalars["Datetime"]>;
  updatedAt?: Maybe<Scalars["Datetime"]>;
  userId?: Maybe<Scalars["UUID"]>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** Reads and enables pagination through a set of `TodosTag`. */
  todosTags: ITodosTagsConnection;
}

/** A todo */
export interface ITodoTodosTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
  condition?: Maybe<ITodosTagCondition>;
  filter?: Maybe<ITodosTagFilter>;
}

export type ITodoStatus = "TO_DO" | "DOING" | "DONE";

export interface IUser extends INode {
  __typename?: "User";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  id: Scalars["UUID"];
  name?: Maybe<Scalars["String"]>;
  /** Reads and enables pagination through a set of `Todo`. */
  todos: ITodosConnection;
}

export interface IUserTodosArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosOrderBy>>;
  condition?: Maybe<ITodoCondition>;
  filter?: Maybe<ITodoFilter>;
}

/** A connection to a list of `Todo` values. */
export interface ITodosConnection {
  __typename?: "TodosConnection";
  /** A list of `Todo` objects. */
  nodes: Array<Maybe<ITodo>>;
  /** A list of edges which contains the `Todo` and cursor to aid in pagination. */
  edges: Array<ITodosEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** The count of *all* `Todo` you could get from the connection. */
  totalCount: Scalars["Int"];
}

/** A `Todo` edge in the connection. */
export interface ITodosEdge {
  __typename?: "TodosEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Todo` at the end of the edge. */
  node?: Maybe<ITodo>;
}

/** Information about pagination in a connection. */
export interface IPageInfo {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]>;
}

/** Methods to use when ordering `Todo`. */
export type ITodosOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "CONTENT_ASC"
  | "CONTENT_DESC"
  | "TITLE_ASC"
  | "TITLE_DESC"
  | "STATUS_ASC"
  | "STATUS_DESC"
  | "CREATED_AT_ASC"
  | "CREATED_AT_DESC"
  | "UPDATED_AT_ASC"
  | "UPDATED_AT_DESC"
  | "USER_ID_ASC"
  | "USER_ID_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** A condition to be used against `Todo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface ITodoCondition {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `content` field. */
  content?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<ITodoStatus>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars["Datetime"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars["Datetime"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars["UUID"]>;
}

/** A filter to be used against `Todo` object types. All fields are combined with a logical ‘and.’ */
export interface ITodoFilter {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IUuidFilter>;
  /** Filter by the object’s `content` field. */
  content?: Maybe<IStringFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<IStringFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<ITodoStatusFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<IDatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<IDatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IUuidFilter>;
  /** Filter by the object’s `todosTags` relation. */
  todosTags?: Maybe<ITodoToManyTodosTagFilter>;
  /** Some related `todosTags` exist. */
  todosTagsExist?: Maybe<Scalars["Boolean"]>;
  /** Filter by the object’s `user` relation. */
  user?: Maybe<IUserFilter>;
  /** A related `user` exists. */
  userExists?: Maybe<Scalars["Boolean"]>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ITodoFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ITodoFilter>>;
  /** Negates the expression. */
  not?: Maybe<ITodoFilter>;
}

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export interface IUuidFilter {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars["Boolean"]>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars["UUID"]>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars["UUID"]>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars["UUID"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars["UUID"]>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars["UUID"]>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars["UUID"]>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars["UUID"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars["UUID"]>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars["UUID"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars["UUID"]>;
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export interface IStringFilter {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars["Boolean"]>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars["String"]>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars["String"]>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars["String"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars["String"]>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars["String"]>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars["String"]>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars["String"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars["String"]>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars["String"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars["String"]>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars["String"]>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars["String"]>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars["String"]>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars["String"]>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars["String"]>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars["String"]>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars["String"]>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars["String"]>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars["String"]>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars["String"]>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars["String"]>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars["String"]>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: Maybe<Scalars["String"]>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: Maybe<Scalars["String"]>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: Maybe<Scalars["String"]>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: Maybe<Scalars["String"]>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars["String"]>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars["String"]>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars["String"]>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars["String"]>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars["String"]>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars["String"]>>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars["String"]>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars["String"]>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars["String"]>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars["String"]>;
}

/** A filter to be used against TodoStatus fields. All fields are combined with a logical ‘and.’ */
export interface ITodoStatusFilter {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars["Boolean"]>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ITodoStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ITodoStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ITodoStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ITodoStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<ITodoStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ITodoStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ITodoStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ITodoStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ITodoStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ITodoStatus>;
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export interface IDatetimeFilter {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars["Boolean"]>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars["Datetime"]>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars["Datetime"]>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars["Datetime"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars["Datetime"]>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars["Datetime"]>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars["Datetime"]>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars["Datetime"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars["Datetime"]>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars["Datetime"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars["Datetime"]>;
}

/** A filter to be used against many `TodosTag` object types. All fields are combined with a logical ‘and.’ */
export interface ITodoToManyTodosTagFilter {
  /** Every related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ITodosTagFilter>;
  /** Some related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ITodosTagFilter>;
  /** No related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ITodosTagFilter>;
}

/** A filter to be used against `TodosTag` object types. All fields are combined with a logical ‘and.’ */
export interface ITodosTagFilter {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IUuidFilter>;
  /** Filter by the object’s `todoId` field. */
  todoId?: Maybe<IUuidFilter>;
  /** Filter by the object’s `tagId` field. */
  tagId?: Maybe<IUuidFilter>;
  /** Filter by the object’s `todo` relation. */
  todo?: Maybe<ITodoFilter>;
  /** A related `todo` exists. */
  todoExists?: Maybe<Scalars["Boolean"]>;
  /** Filter by the object’s `tag` relation. */
  tag?: Maybe<ITagFilter>;
  /** A related `tag` exists. */
  tagExists?: Maybe<Scalars["Boolean"]>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ITodosTagFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ITodosTagFilter>>;
  /** Negates the expression. */
  not?: Maybe<ITodosTagFilter>;
}

/** A filter to be used against `Tag` object types. All fields are combined with a logical ‘and.’ */
export interface ITagFilter {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IUuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<IStringFilter>;
  /** Filter by the object’s `todosTags` relation. */
  todosTags?: Maybe<ITagToManyTodosTagFilter>;
  /** Some related `todosTags` exist. */
  todosTagsExist?: Maybe<Scalars["Boolean"]>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ITagFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ITagFilter>>;
  /** Negates the expression. */
  not?: Maybe<ITagFilter>;
}

/** A filter to be used against many `TodosTag` object types. All fields are combined with a logical ‘and.’ */
export interface ITagToManyTodosTagFilter {
  /** Every related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ITodosTagFilter>;
  /** Some related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ITodosTagFilter>;
  /** No related `TodosTag` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ITodosTagFilter>;
}

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export interface IUserFilter {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IUuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<IStringFilter>;
  /** Filter by the object’s `todos` relation. */
  todos?: Maybe<IUserToManyTodoFilter>;
  /** Some related `todos` exist. */
  todosExist?: Maybe<Scalars["Boolean"]>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<IUserFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<IUserFilter>>;
  /** Negates the expression. */
  not?: Maybe<IUserFilter>;
}

/** A filter to be used against many `Todo` object types. All fields are combined with a logical ‘and.’ */
export interface IUserToManyTodoFilter {
  /** Every related `Todo` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ITodoFilter>;
  /** Some related `Todo` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ITodoFilter>;
  /** No related `Todo` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ITodoFilter>;
}

/** Methods to use when ordering `TodosTag`. */
export type ITodosTagsOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "TODO_ID_ASC"
  | "TODO_ID_DESC"
  | "TAG_ID_ASC"
  | "TAG_ID_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/**
 * A condition to be used against `TodosTag` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export interface ITodosTagCondition {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `todoId` field. */
  todoId?: Maybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: Maybe<Scalars["UUID"]>;
}

/** A `TodosTag` edge in the connection. */
export interface ITodosTagsEdge {
  __typename?: "TodosTagsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `TodosTag` at the end of the edge. */
  node?: Maybe<ITodosTag>;
}

/** A `Tag` edge in the connection. */
export interface ITagsEdge {
  __typename?: "TagsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `Tag` at the end of the edge. */
  node?: Maybe<ITag>;
}

/** Methods to use when ordering `Tag`. */
export type ITagsOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface ITagCondition {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
}

/** A connection to a list of `User` values. */
export interface IUsersConnection {
  __typename?: "UsersConnection";
  /** A list of `User` objects. */
  nodes: Array<Maybe<IUser>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<IUsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"];
}

/** A `User` edge in the connection. */
export interface IUsersEdge {
  __typename?: "UsersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `User` at the end of the edge. */
  node?: Maybe<IUser>;
}

/** Methods to use when ordering `User`. */
export type IUsersOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface IUserCondition {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["UUID"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutation {
  __typename?: "Mutation";
  /** Creates a single `Tag`. */
  createTag?: Maybe<ICreateTagPayload>;
  /** Creates a single `Todo`. */
  createTodo?: Maybe<ICreateTodoPayload>;
  /** Creates a single `TodosTag`. */
  createTodosTag?: Maybe<ICreateTodosTagPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<ICreateUserPayload>;
  /** Updates a single `Tag` using its globally unique id and a patch. */
  updateTagByNodeId?: Maybe<IUpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTag?: Maybe<IUpdateTagPayload>;
  /** Updates a single `Todo` using its globally unique id and a patch. */
  updateTodoByNodeId?: Maybe<IUpdateTodoPayload>;
  /** Updates a single `Todo` using a unique key and a patch. */
  updateTodo?: Maybe<IUpdateTodoPayload>;
  /** Updates a single `TodosTag` using its globally unique id and a patch. */
  updateTodosTagByNodeId?: Maybe<IUpdateTodosTagPayload>;
  /** Updates a single `TodosTag` using a unique key and a patch. */
  updateTodosTag?: Maybe<IUpdateTodosTagPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<IUpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<IUpdateUserPayload>;
  /** Deletes a single `Tag` using its globally unique id. */
  deleteTagByNodeId?: Maybe<IDeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTag?: Maybe<IDeleteTagPayload>;
  /** Deletes a single `Todo` using its globally unique id. */
  deleteTodoByNodeId?: Maybe<IDeleteTodoPayload>;
  /** Deletes a single `Todo` using a unique key. */
  deleteTodo?: Maybe<IDeleteTodoPayload>;
  /** Deletes a single `TodosTag` using its globally unique id. */
  deleteTodosTagByNodeId?: Maybe<IDeleteTodosTagPayload>;
  /** Deletes a single `TodosTag` using a unique key. */
  deleteTodosTag?: Maybe<IDeleteTodosTagPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<IDeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<IDeleteUserPayload>;
  cusCreateTodo?: Maybe<ICusCreateTodoPayload>;
  cusCreateUpdateTodo?: Maybe<ICusCreateUpdateTodoPayload>;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCreateTagArgs {
  input: ICreateTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCreateTodoArgs {
  input: ICreateTodoInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCreateTodosTagArgs {
  input: ICreateTodosTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCreateUserArgs {
  input: ICreateUserInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTagByNodeIdArgs {
  input: IUpdateTagByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTagArgs {
  input: IUpdateTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTodoByNodeIdArgs {
  input: IUpdateTodoByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTodoArgs {
  input: IUpdateTodoInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTodosTagByNodeIdArgs {
  input: IUpdateTodosTagByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateTodosTagArgs {
  input: IUpdateTodosTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateUserByNodeIdArgs {
  input: IUpdateUserByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationUpdateUserArgs {
  input: IUpdateUserInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTagByNodeIdArgs {
  input: IDeleteTagByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTagArgs {
  input: IDeleteTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTodoByNodeIdArgs {
  input: IDeleteTodoByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTodoArgs {
  input: IDeleteTodoInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTodosTagByNodeIdArgs {
  input: IDeleteTodosTagByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteTodosTagArgs {
  input: IDeleteTodosTagInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteUserByNodeIdArgs {
  input: IDeleteUserByNodeIdInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationDeleteUserArgs {
  input: IDeleteUserInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCusCreateTodoArgs {
  input: ICusCreateTodoInput;
}

/** The root mutation type which contains root level fields which mutate data. */
export interface IMutationCusCreateUpdateTodoArgs {
  input: ICusCreateUpdateTodoInput;
}

/** The output of our create `Tag` mutation. */
export interface ICreateTagPayload {
  __typename?: "CreateTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Tag` that was created by this mutation. */
  tag?: Maybe<ITag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<ITagsEdge>;
}

/** The output of our create `Tag` mutation. */
export interface ICreateTagPayloadTagEdgeArgs {
  orderBy?: Maybe<Array<ITagsOrderBy>>;
}

/** All input for the create `Tag` mutation. */
export interface ICreateTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Tag` to be created by this mutation. */
  tag: ITagInput;
}

/** An input for mutations affecting `Tag` */
export interface ITagInput {
  id?: Maybe<Scalars["UUID"]>;
  name: Scalars["String"];
}

/** The output of our create `Todo` mutation. */
export interface ICreateTodoPayload {
  __typename?: "CreateTodoPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Todo` that was created by this mutation. */
  todo?: Maybe<ITodo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<ITodosEdge>;
}

/** The output of our create `Todo` mutation. */
export interface ICreateTodoPayloadTodoEdgeArgs {
  orderBy?: Maybe<Array<ITodosOrderBy>>;
}

/** All input for the create `Todo` mutation. */
export interface ICreateTodoInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Todo` to be created by this mutation. */
  todo: ITodoInput;
}

/** An input for mutations affecting `Todo` */
export interface ITodoInput {
  id?: Maybe<Scalars["UUID"]>;
  content: Scalars["String"];
  title: Scalars["String"];
  status?: Maybe<ITodoStatus>;
  createdAt?: Maybe<Scalars["Datetime"]>;
  updatedAt?: Maybe<Scalars["Datetime"]>;
  userId?: Maybe<Scalars["UUID"]>;
}

/** The output of our create `TodosTag` mutation. */
export interface ICreateTodosTagPayload {
  __typename?: "CreateTodosTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `TodosTag` that was created by this mutation. */
  todosTag?: Maybe<ITodosTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `Todo` that is related to this `TodosTag`. */
  todo?: Maybe<ITodo>;
  /** Reads a single `Tag` that is related to this `TodosTag`. */
  tag?: Maybe<ITag>;
  /** An edge for our `TodosTag`. May be used by Relay 1. */
  todosTagEdge?: Maybe<ITodosTagsEdge>;
}

/** The output of our create `TodosTag` mutation. */
export interface ICreateTodosTagPayloadTodosTagEdgeArgs {
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
}

/** All input for the create `TodosTag` mutation. */
export interface ICreateTodosTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `TodosTag` to be created by this mutation. */
  todosTag: ITodosTagInput;
}

/** An input for mutations affecting `TodosTag` */
export interface ITodosTagInput {
  id?: Maybe<Scalars["UUID"]>;
  todoId?: Maybe<Scalars["UUID"]>;
  tagId?: Maybe<Scalars["UUID"]>;
}

/** The output of our create `User` mutation. */
export interface ICreateUserPayload {
  __typename?: "CreateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<IUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<IUsersEdge>;
}

/** The output of our create `User` mutation. */
export interface ICreateUserPayloadUserEdgeArgs {
  orderBy?: Maybe<Array<IUsersOrderBy>>;
}

/** All input for the create `User` mutation. */
export interface ICreateUserInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `User` to be created by this mutation. */
  user: IUserInput;
}

/** An input for mutations affecting `User` */
export interface IUserInput {
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
}

/** The output of our update `Tag` mutation. */
export interface IUpdateTagPayload {
  __typename?: "UpdateTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Tag` that was updated by this mutation. */
  tag?: Maybe<ITag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<ITagsEdge>;
}

/** The output of our update `Tag` mutation. */
export interface IUpdateTagPayloadTagEdgeArgs {
  orderBy?: Maybe<Array<ITagsOrderBy>>;
}

/** All input for the `updateTagByNodeId` mutation. */
export interface IUpdateTagByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Tag` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  patch: ITagPatch;
}

/** Represents an update to a `Tag`. Fields that are set will be updated. */
export interface ITagPatch {
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
}

/** All input for the `updateTag` mutation. */
export interface IUpdateTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Tag` being updated. */
  patch: ITagPatch;
  id: Scalars["UUID"];
}

/** The output of our update `Todo` mutation. */
export interface IUpdateTodoPayload {
  __typename?: "UpdateTodoPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Todo` that was updated by this mutation. */
  todo?: Maybe<ITodo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<ITodosEdge>;
}

/** The output of our update `Todo` mutation. */
export interface IUpdateTodoPayloadTodoEdgeArgs {
  orderBy?: Maybe<Array<ITodosOrderBy>>;
}

/** All input for the `updateTodoByNodeId` mutation. */
export interface IUpdateTodoByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Todo` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `Todo` being updated. */
  patch: ITodoPatch;
}

/** Represents an update to a `Todo`. Fields that are set will be updated. */
export interface ITodoPatch {
  id?: Maybe<Scalars["UUID"]>;
  content?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  status?: Maybe<ITodoStatus>;
  createdAt?: Maybe<Scalars["Datetime"]>;
  updatedAt?: Maybe<Scalars["Datetime"]>;
  userId?: Maybe<Scalars["UUID"]>;
}

/** All input for the `updateTodo` mutation. */
export interface IUpdateTodoInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `Todo` being updated. */
  patch: ITodoPatch;
  id: Scalars["UUID"];
}

/** The output of our update `TodosTag` mutation. */
export interface IUpdateTodosTagPayload {
  __typename?: "UpdateTodosTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `TodosTag` that was updated by this mutation. */
  todosTag?: Maybe<ITodosTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `Todo` that is related to this `TodosTag`. */
  todo?: Maybe<ITodo>;
  /** Reads a single `Tag` that is related to this `TodosTag`. */
  tag?: Maybe<ITag>;
  /** An edge for our `TodosTag`. May be used by Relay 1. */
  todosTagEdge?: Maybe<ITodosTagsEdge>;
}

/** The output of our update `TodosTag` mutation. */
export interface IUpdateTodosTagPayloadTodosTagEdgeArgs {
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
}

/** All input for the `updateTodosTagByNodeId` mutation. */
export interface IUpdateTodosTagByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `TodosTag` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `TodosTag` being updated. */
  patch: ITodosTagPatch;
}

/** Represents an update to a `TodosTag`. Fields that are set will be updated. */
export interface ITodosTagPatch {
  id?: Maybe<Scalars["UUID"]>;
  todoId?: Maybe<Scalars["UUID"]>;
  tagId?: Maybe<Scalars["UUID"]>;
}

/** All input for the `updateTodosTag` mutation. */
export interface IUpdateTodosTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `TodosTag` being updated. */
  patch: ITodosTagPatch;
  id: Scalars["UUID"];
}

/** The output of our update `User` mutation. */
export interface IUpdateUserPayload {
  __typename?: "UpdateUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<IUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<IUsersEdge>;
}

/** The output of our update `User` mutation. */
export interface IUpdateUserPayloadUserEdgeArgs {
  orderBy?: Maybe<Array<IUsersOrderBy>>;
}

/** All input for the `updateUserByNodeId` mutation. */
export interface IUpdateUserByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: IUserPatch;
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export interface IUserPatch {
  id?: Maybe<Scalars["UUID"]>;
  name?: Maybe<Scalars["String"]>;
}

/** All input for the `updateUser` mutation. */
export interface IUpdateUserInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: IUserPatch;
  id: Scalars["UUID"];
}

/** The output of our delete `Tag` mutation. */
export interface IDeleteTagPayload {
  __typename?: "DeleteTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Tag` that was deleted by this mutation. */
  tag?: Maybe<ITag>;
  deletedTagNodeId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<ITagsEdge>;
}

/** The output of our delete `Tag` mutation. */
export interface IDeleteTagPayloadTagEdgeArgs {
  orderBy?: Maybe<Array<ITagsOrderBy>>;
}

/** All input for the `deleteTagByNodeId` mutation. */
export interface IDeleteTagByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Tag` to be deleted. */
  nodeId: Scalars["ID"];
}

/** All input for the `deleteTag` mutation. */
export interface IDeleteTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
}

/** The output of our delete `Todo` mutation. */
export interface IDeleteTodoPayload {
  __typename?: "DeleteTodoPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `Todo` that was deleted by this mutation. */
  todo?: Maybe<ITodo>;
  deletedTodoNodeId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<ITodosEdge>;
}

/** The output of our delete `Todo` mutation. */
export interface IDeleteTodoPayloadTodoEdgeArgs {
  orderBy?: Maybe<Array<ITodosOrderBy>>;
}

/** All input for the `deleteTodoByNodeId` mutation. */
export interface IDeleteTodoByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `Todo` to be deleted. */
  nodeId: Scalars["ID"];
}

/** All input for the `deleteTodo` mutation. */
export interface IDeleteTodoInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
}

/** The output of our delete `TodosTag` mutation. */
export interface IDeleteTodosTagPayload {
  __typename?: "DeleteTodosTagPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `TodosTag` that was deleted by this mutation. */
  todosTag?: Maybe<ITodosTag>;
  deletedTodosTagNodeId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `Todo` that is related to this `TodosTag`. */
  todo?: Maybe<ITodo>;
  /** Reads a single `Tag` that is related to this `TodosTag`. */
  tag?: Maybe<ITag>;
  /** An edge for our `TodosTag`. May be used by Relay 1. */
  todosTagEdge?: Maybe<ITodosTagsEdge>;
}

/** The output of our delete `TodosTag` mutation. */
export interface IDeleteTodosTagPayloadTodosTagEdgeArgs {
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
}

/** All input for the `deleteTodosTagByNodeId` mutation. */
export interface IDeleteTodosTagByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `TodosTag` to be deleted. */
  nodeId: Scalars["ID"];
}

/** All input for the `deleteTodosTag` mutation. */
export interface IDeleteTodosTagInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
}

/** The output of our delete `User` mutation. */
export interface IDeleteUserPayload {
  __typename?: "DeleteUserPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<IUser>;
  deletedUserNodeId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<IUsersEdge>;
}

/** The output of our delete `User` mutation. */
export interface IDeleteUserPayloadUserEdgeArgs {
  orderBy?: Maybe<Array<IUsersOrderBy>>;
}

/** All input for the `deleteUserByNodeId` mutation. */
export interface IDeleteUserByNodeIdInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars["ID"];
}

/** All input for the `deleteUser` mutation. */
export interface IDeleteUserInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
}

/** The output of our `cusCreateTodo` mutation. */
export interface ICusCreateTodoPayload {
  __typename?: "CusCreateTodoPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  todo?: Maybe<ITodo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<ITodosEdge>;
}

/** The output of our `cusCreateTodo` mutation. */
export interface ICusCreateTodoPayloadTodoEdgeArgs {
  orderBy?: Maybe<Array<ITodosOrderBy>>;
}

/** All input for the `cusCreateTodo` mutation. */
export interface ICusCreateTodoInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  todo?: Maybe<ITodoInput>;
}

/** The output of our `cusCreateUpdateTodo` mutation. */
export interface ICusCreateUpdateTodoPayload {
  __typename?: "CusCreateUpdateTodoPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  todo?: Maybe<ITodo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<IQuery>;
  /** Reads a single `User` that is related to this `Todo`. */
  user?: Maybe<IUser>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<ITodosEdge>;
}

/** The output of our `cusCreateUpdateTodo` mutation. */
export interface ICusCreateUpdateTodoPayloadTodoEdgeArgs {
  orderBy?: Maybe<Array<ITodosOrderBy>>;
}

/** All input for the `cusCreateUpdateTodo` mutation. */
export interface ICusCreateUpdateTodoInput {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  iTodo?: Maybe<ITodoInput>;
  tagsId?: Maybe<Array<Maybe<Scalars["UUID"]>>>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscription {
  __typename?: "Subscription";
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form. (live)
   */
  query: IQuery;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. (live) */
  nodeId: Scalars["ID"];
  /** Fetches an object given its globally unique `ID`. (live) */
  node?: Maybe<INode>;
  /** Reads and enables pagination through a set of `Tag`. (live) */
  tags?: Maybe<ITagsConnection>;
  /** Reads and enables pagination through a set of `Todo`. (live) */
  todos?: Maybe<ITodosConnection>;
  /** Reads and enables pagination through a set of `TodosTag`. (live) */
  todosTags?: Maybe<ITodosTagsConnection>;
  /** Reads and enables pagination through a set of `User`. (live) */
  users?: Maybe<IUsersConnection>;
  /**  (live) */
  tag?: Maybe<ITag>;
  /**  (live) */
  todo?: Maybe<ITodo>;
  /**  (live) */
  todosTag?: Maybe<ITodosTag>;
  /**  (live) */
  user?: Maybe<IUser>;
  /** Example of function with sql (live) */
  searchTodo?: Maybe<ITodosConnection>;
  /** Reads a single `Tag` using its globally unique `ID`. (live) */
  tagByNodeId?: Maybe<ITag>;
  /** Reads a single `Todo` using its globally unique `ID`. (live) */
  todoByNodeId?: Maybe<ITodo>;
  /** Reads a single `TodosTag` using its globally unique `ID`. (live) */
  todosTagByNodeId?: Maybe<ITodosTag>;
  /** Reads a single `User` using its globally unique `ID`. (live) */
  userByNodeId?: Maybe<IUser>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionNodeArgs {
  nodeId: Scalars["ID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITagsOrderBy>>;
  condition?: Maybe<ITagCondition>;
  filter?: Maybe<ITagFilter>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodosArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosOrderBy>>;
  condition?: Maybe<ITodoCondition>;
  filter?: Maybe<ITodoFilter>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodosTagsArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<ITodosTagsOrderBy>>;
  condition?: Maybe<ITodosTagCondition>;
  filter?: Maybe<ITodosTagFilter>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionUsersArgs {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<IUsersOrderBy>>;
  condition?: Maybe<IUserCondition>;
  filter?: Maybe<IUserFilter>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTagArgs {
  id: Scalars["UUID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodoArgs {
  id: Scalars["UUID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodosTagArgs {
  id: Scalars["UUID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionUserArgs {
  id: Scalars["UUID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionSearchTodoArgs {
  search?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  filter?: Maybe<ITodoFilter>;
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTagByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodoByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionTodosTagByNodeIdArgs {
  nodeId: Scalars["ID"];
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 *
 * #### Live Queries
 *
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 *
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 *
 * Live queries can be very expensive, so try and keep them small and focussed.
 *
 * #### Events
 *
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export interface ISubscriptionUserByNodeIdArgs {
  nodeId: Scalars["ID"];
}
