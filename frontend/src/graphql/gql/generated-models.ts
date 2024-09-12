import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor for paging through collections */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  role: AccountRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountAggregateGroupBy = {
  __typename?: 'AccountAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AccountAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type AccountAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type AccountAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type AccountAggregateResponse = {
  __typename?: 'AccountAggregateResponse';
  avg?: Maybe<AccountAvgAggregate>;
  count?: Maybe<AccountCountAggregate>;
  groupBy?: Maybe<AccountAggregateGroupBy>;
  max?: Maybe<AccountMaxAggregate>;
  min?: Maybe<AccountMinAggregate>;
  sum?: Maybe<AccountSumAggregate>;
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** Array of edges. */
  edges: Array<AccountEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  emailVerified?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type AccountDto = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role: AccountRole;
};

export type AccountDeleteFilter = {
  and?: InputMaybe<Array<AccountDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountDeleteFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountDeleteResponse = {
  __typename?: 'AccountDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Account */
  node: Account;
};

export type AccountFilter = {
  and?: InputMaybe<Array<AccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountPasswordReset = {
  __typename?: 'AccountPasswordReset';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used: Scalars['Boolean']['output'];
};

export type AccountPasswordResetAggregateFilter = {
  account?: InputMaybe<AccountPasswordResetAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<AccountPasswordResetAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountPasswordResetAggregateFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountPasswordResetAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<AccountPasswordResetAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPasswordResetAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPasswordResetAggregateGroupBy = {
  __typename?: 'AccountPasswordResetAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
};


export type AccountPasswordResetAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type AccountPasswordResetAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type AccountPasswordResetAggregateGroupByExpiredAtArgs = {
  by?: GroupBy;
};


export type AccountPasswordResetAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type AccountPasswordResetAggregateResponse = {
  __typename?: 'AccountPasswordResetAggregateResponse';
  count?: Maybe<AccountPasswordResetCountAggregate>;
  groupBy?: Maybe<AccountPasswordResetAggregateGroupBy>;
  max?: Maybe<AccountPasswordResetMaxAggregate>;
  min?: Maybe<AccountPasswordResetMinAggregate>;
};

export type AccountPasswordResetConnection = {
  __typename?: 'AccountPasswordResetConnection';
  /** Array of edges. */
  edges: Array<AccountPasswordResetEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AccountPasswordResetCountAggregate = {
  __typename?: 'AccountPasswordResetCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  expiredAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  used?: Maybe<Scalars['Int']['output']>;
};

export type AccountPasswordResetDto = {
  account: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

export type AccountPasswordResetDeleteFilter = {
  and?: InputMaybe<Array<AccountPasswordResetDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountPasswordResetDeleteFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountPasswordResetDeleteResponse = {
  __typename?: 'AccountPasswordResetDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
};

export type AccountPasswordResetEdge = {
  __typename?: 'AccountPasswordResetEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the AccountPasswordReset */
  node: AccountPasswordReset;
};

export type AccountPasswordResetFilter = {
  account?: InputMaybe<AccountPasswordResetFilterAccountFilter>;
  and?: InputMaybe<Array<AccountPasswordResetFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountPasswordResetFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountPasswordResetFilterAccountFilter = {
  and?: InputMaybe<Array<AccountPasswordResetFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPasswordResetFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPasswordResetMaxAggregate = {
  __typename?: 'AccountPasswordResetMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountPasswordResetMinAggregate = {
  __typename?: 'AccountPasswordResetMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountPasswordResetSort = {
  direction: SortDirection;
  field: AccountPasswordResetSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AccountPasswordResetSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  Used = 'used'
}

export type AccountPasswordResetUpdateFilter = {
  and?: InputMaybe<Array<AccountPasswordResetUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountPasswordResetUpdateFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export enum AccountRole {
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type AccountRoleFilterComparison = {
  eq?: InputMaybe<AccountRole>;
  gt?: InputMaybe<AccountRole>;
  gte?: InputMaybe<AccountRole>;
  iLike?: InputMaybe<AccountRole>;
  in?: InputMaybe<Array<AccountRole>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<AccountRole>;
  lt?: InputMaybe<AccountRole>;
  lte?: InputMaybe<AccountRole>;
  neq?: InputMaybe<AccountRole>;
  notILike?: InputMaybe<AccountRole>;
  notIn?: InputMaybe<Array<AccountRole>>;
  notLike?: InputMaybe<AccountRole>;
};

export type AccountSort = {
  direction: SortDirection;
  field: AccountSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AccountSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type AccountUpdateFilter = {
  and?: InputMaybe<Array<AccountUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountUpdateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerfication = {
  __typename?: 'AccountVerfication';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used: Scalars['Boolean']['output'];
};

export type AccountVerficationAggregateFilter = {
  account?: InputMaybe<AccountVerficationAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<AccountVerficationAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountVerficationAggregateFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountVerficationAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<AccountVerficationAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountVerficationAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerficationAggregateGroupBy = {
  __typename?: 'AccountVerficationAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
};


export type AccountVerficationAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type AccountVerficationAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type AccountVerficationAggregateGroupByExpiredAtArgs = {
  by?: GroupBy;
};


export type AccountVerficationAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type AccountVerficationAggregateResponse = {
  __typename?: 'AccountVerficationAggregateResponse';
  count?: Maybe<AccountVerficationCountAggregate>;
  groupBy?: Maybe<AccountVerficationAggregateGroupBy>;
  max?: Maybe<AccountVerficationMaxAggregate>;
  min?: Maybe<AccountVerficationMinAggregate>;
};

export type AccountVerficationConnection = {
  __typename?: 'AccountVerficationConnection';
  /** Array of edges. */
  edges: Array<AccountVerficationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AccountVerficationCountAggregate = {
  __typename?: 'AccountVerficationCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  expiredAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  used?: Maybe<Scalars['Int']['output']>;
};

export type AccountVerficationDto = {
  account: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

export type AccountVerficationDeleteFilter = {
  and?: InputMaybe<Array<AccountVerficationDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountVerficationDeleteFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountVerficationDeleteResponse = {
  __typename?: 'AccountVerficationDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
};

export type AccountVerficationEdge = {
  __typename?: 'AccountVerficationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the AccountVerfication */
  node: AccountVerfication;
};

export type AccountVerficationFilter = {
  account?: InputMaybe<AccountVerficationFilterAccountFilter>;
  and?: InputMaybe<Array<AccountVerficationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountVerficationFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AccountVerficationFilterAccountFilter = {
  and?: InputMaybe<Array<AccountVerficationFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountVerficationFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerficationMaxAggregate = {
  __typename?: 'AccountVerficationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountVerficationMinAggregate = {
  __typename?: 'AccountVerficationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountVerficationSort = {
  direction: SortDirection;
  field: AccountVerficationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AccountVerficationSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  Used = 'used'
}

export type AccountVerficationUpdateFilter = {
  and?: InputMaybe<Array<AccountVerficationUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountVerficationUpdateFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  used?: InputMaybe<BooleanFieldComparison>;
};

export type AddAddressesToCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddBranchesToOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddMembersToOrgBranchInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddMembersToOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddOptionGroupsToProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddOptionsToOrderProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddOptionsToProductOptionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddProductsToProductCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddProductsToProductOptionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddProductsToProductTypeInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddProductsToProductUnitInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  secret: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApiKeyAggregateFilter = {
  and?: InputMaybe<Array<ApiKeyAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApiKeyAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ApiKeyAggregateGroupBy = {
  __typename?: 'ApiKeyAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiKeyAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ApiKeyAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ApiKeyAggregateGroupByExpiredAtArgs = {
  by?: GroupBy;
};


export type ApiKeyAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ApiKeyAggregateResponse = {
  __typename?: 'ApiKeyAggregateResponse';
  count?: Maybe<ApiKeyCountAggregate>;
  groupBy?: Maybe<ApiKeyAggregateGroupBy>;
  max?: Maybe<ApiKeyMaxAggregate>;
  min?: Maybe<ApiKeyMinAggregate>;
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  /** Array of edges. */
  edges: Array<ApiKeyEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ApiKeyCountAggregate = {
  __typename?: 'ApiKeyCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  expired?: Maybe<Scalars['Int']['output']>;
  expiredAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ApiKeyDto = {
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type ApiKeyDeleteFilter = {
  and?: InputMaybe<Array<ApiKeyDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApiKeyDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ApiKeyDeleteResponse = {
  __typename?: 'ApiKeyDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ApiKey */
  node: ApiKey;
};

export type ApiKeyFilter = {
  and?: InputMaybe<Array<ApiKeyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApiKeyFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ApiKeyMaxAggregate = {
  __typename?: 'ApiKeyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApiKeyMinAggregate = {
  __typename?: 'ApiKeyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApiKeySort = {
  direction: SortDirection;
  field: ApiKeySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApiKeySortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Expired = 'expired',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ApiKeyUpdateFilter = {
  and?: InputMaybe<Array<ApiKeyUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApiKeyUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AuthConfirmPasswordResetInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthRefreshTokenInput = {
  accountId: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type AuthRequestPasswordResetInput = {
  email: Scalars['String']['input'];
};

export type AuthResendVerificationInput = {
  token: Scalars['String']['input'];
};

export type AuthResendVerificationWithEmailInput = {
  email: Scalars['String']['input'];
};

export type AuthVerifyAccountInput = {
  token: Scalars['String']['input'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BranchSaleChannel = {
  __typename?: 'BranchSaleChannel';
  branch: OrgBranch;
  commission?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  saleChannel: SaleChannel;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchSaleChannelAggregateFilter = {
  and?: InputMaybe<Array<BranchSaleChannelAggregateFilter>>;
  branch?: InputMaybe<BranchSaleChannelAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BranchSaleChannelAggregateFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSaleChannelAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<BranchSaleChannelAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BranchSaleChannelAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSaleChannelAggregateGroupBy = {
  __typename?: 'BranchSaleChannelAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  saleChannel?: Maybe<SaleChannel>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BranchSaleChannelAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type BranchSaleChannelAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type BranchSaleChannelAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type BranchSaleChannelAggregateResponse = {
  __typename?: 'BranchSaleChannelAggregateResponse';
  avg?: Maybe<BranchSaleChannelAvgAggregate>;
  count?: Maybe<BranchSaleChannelCountAggregate>;
  groupBy?: Maybe<BranchSaleChannelAggregateGroupBy>;
  max?: Maybe<BranchSaleChannelMaxAggregate>;
  min?: Maybe<BranchSaleChannelMinAggregate>;
  sum?: Maybe<BranchSaleChannelSumAggregate>;
};

export type BranchSaleChannelAvgAggregate = {
  __typename?: 'BranchSaleChannelAvgAggregate';
  saleChannel?: Maybe<Scalars['Float']['output']>;
};

export type BranchSaleChannelConnection = {
  __typename?: 'BranchSaleChannelConnection';
  /** Array of edges. */
  edges: Array<BranchSaleChannelEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BranchSaleChannelCountAggregate = {
  __typename?: 'BranchSaleChannelCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  saleChannel?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type BranchSaleChannelDto = {
  branch: Scalars['ID']['input'];
  commission?: InputMaybe<Scalars['Float']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  saleChannel: SaleChannel;
};

export type BranchSaleChannelDeleteFilter = {
  and?: InputMaybe<Array<BranchSaleChannelDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BranchSaleChannelDeleteFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSaleChannelDeleteResponse = {
  __typename?: 'BranchSaleChannelDeleteResponse';
  commission?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  saleChannel?: Maybe<SaleChannel>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchSaleChannelEdge = {
  __typename?: 'BranchSaleChannelEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the BranchSaleChannel */
  node: BranchSaleChannel;
};

export type BranchSaleChannelFilter = {
  and?: InputMaybe<Array<BranchSaleChannelFilter>>;
  branch?: InputMaybe<BranchSaleChannelFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BranchSaleChannelFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSaleChannelFilterOrgBranchFilter = {
  and?: InputMaybe<Array<BranchSaleChannelFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BranchSaleChannelFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSaleChannelMaxAggregate = {
  __typename?: 'BranchSaleChannelMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  saleChannel?: Maybe<SaleChannel>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchSaleChannelMinAggregate = {
  __typename?: 'BranchSaleChannelMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  saleChannel?: Maybe<SaleChannel>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchSaleChannelSort = {
  direction: SortDirection;
  field: BranchSaleChannelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BranchSaleChannelSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  SaleChannel = 'saleChannel',
  UpdatedAt = 'updatedAt'
}

export type BranchSaleChannelSumAggregate = {
  __typename?: 'BranchSaleChannelSumAggregate';
  saleChannel?: Maybe<Scalars['Float']['output']>;
};

export type BranchSaleChannelUpdateFilter = {
  and?: InputMaybe<Array<BranchSaleChannelUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BranchSaleChannelUpdateFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CreateManyAccountPasswordResetsInput = {
  /** Array of records to create */
  accountPasswordResets: Array<AccountPasswordResetDto>;
};

export type CreateManyAccountVerficationsInput = {
  /** Array of records to create */
  accountVerfications: Array<AccountVerficationDto>;
};

export type CreateManyAccountsInput = {
  /** Array of records to create */
  accounts: Array<AccountDto>;
};

export type CreateManyApiKeysInput = {
  /** Array of records to create */
  apiKeys: Array<ApiKeyDto>;
};

export type CreateManyBranchSaleChannelsInput = {
  /** Array of records to create */
  branchSaleChannels: Array<BranchSaleChannelDto>;
};

export type CreateManyCustomersInput = {
  /** Array of records to create */
  customers: Array<CustomerDto>;
};

export type CreateManyFilesInput = {
  /** Array of records to create */
  files: Array<FileDto>;
};

export type CreateManyMediaInput = {
  /** Array of records to create */
  media: Array<MediaDto>;
};

export type CreateManyOrderProductsInput = {
  /** Array of records to create */
  orderProducts: Array<OrderProductDto>;
};

export type CreateManyOrdersInput = {
  /** Array of records to create */
  orders: Array<OrderDto>;
};

export type CreateManyOrgBranchMembersInput = {
  /** Array of records to create */
  orgBranchMembers: Array<OrgBranchMemberDto>;
};

export type CreateManyOrgBranchesInput = {
  /** Array of records to create */
  orgBranches: Array<OrgBranchDto>;
};

export type CreateManyOrgMembersInput = {
  /** Array of records to create */
  orgMembers: Array<OrgMemberDto>;
};

export type CreateManyOrgsInput = {
  /** Array of records to create */
  orgs: Array<OrgDto>;
};

export type CreateManyProductCategoriesInput = {
  /** Array of records to create */
  productCategories: Array<ProductCategoryDto>;
};

export type CreateManyProductOptionGroupsInput = {
  /** Array of records to create */
  productOptionGroups: Array<ProductOptionGroupDto>;
};

export type CreateManyProductOptionsInput = {
  /** Array of records to create */
  productOptions: Array<ProductOptionDto>;
};

export type CreateManyProductPricesInput = {
  /** Array of records to create */
  productPrices: Array<ProductPriceDto>;
};

export type CreateManyProductTypesInput = {
  /** Array of records to create */
  productTypes: Array<ProductTypeDto>;
};

export type CreateManyProductUnitsInput = {
  /** Array of records to create */
  productUnits: Array<ProductUnitDto>;
};

export type CreateManyProductsInput = {
  /** Array of records to create */
  products: Array<ProductDto>;
};

export type CreateOneAccountInput = {
  /** The record to create */
  account: AccountDto;
};

export type CreateOneAccountPasswordResetInput = {
  /** The record to create */
  accountPasswordReset: AccountPasswordResetDto;
};

export type CreateOneAccountVerficationInput = {
  /** The record to create */
  accountVerfication: AccountVerficationDto;
};

export type CreateOneApiKeyInput = {
  /** The record to create */
  apiKey: ApiKeyDto;
};

export type CreateOneBranchSaleChannelInput = {
  /** The record to create */
  branchSaleChannel: BranchSaleChannelDto;
};

export type CreateOneCustomerInput = {
  /** The record to create */
  customer: CustomerDto;
};

export type CreateOneFileInput = {
  /** The record to create */
  file: FileDto;
};

export type CreateOneMediaInput = {
  /** The record to create */
  media: MediaDto;
};

export type CreateOneOrderInput = {
  /** The record to create */
  order: OrderDto;
};

export type CreateOneOrderProductInput = {
  /** The record to create */
  orderProduct: OrderProductDto;
};

export type CreateOneOrgBranchInput = {
  /** The record to create */
  orgBranch: OrgBranchDto;
};

export type CreateOneOrgBranchMemberInput = {
  /** The record to create */
  orgBranchMember: OrgBranchMemberDto;
};

export type CreateOneOrgInput = {
  /** The record to create */
  org: OrgDto;
};

export type CreateOneOrgMemberInput = {
  /** The record to create */
  orgMember: OrgMemberDto;
};

export type CreateOneProductCategoryInput = {
  /** The record to create */
  productCategory: ProductCategoryDto;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: ProductDto;
};

export type CreateOneProductOptionGroupInput = {
  /** The record to create */
  productOptionGroup: ProductOptionGroupDto;
};

export type CreateOneProductOptionInput = {
  /** The record to create */
  productOption: ProductOptionDto;
};

export type CreateOneProductPriceInput = {
  /** The record to create */
  productPrice: ProductPriceDto;
};

export type CreateOneProductTypeInput = {
  /** The record to create */
  productType: ProductTypeDto;
};

export type CreateOneProductUnitInput = {
  /** The record to create */
  productUnit: ProductUnitDto;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  addresses?: Maybe<CustomerAddressesConnection>;
  addressesAggregate: Array<CustomerAddressesAggregateResponse>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender: CustomerGender;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CustomerAddressesArgs = {
  filter?: CustomerAddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<CustomerAddressSort>;
};


export type CustomerAddressesAggregateArgs = {
  filter?: InputMaybe<CustomerAddressAggregateFilter>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  distanceKm?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  full?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressAggregateFilter = {
  and?: InputMaybe<Array<CustomerAddressAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customer?: InputMaybe<CustomerAddressAggregateFilterCustomerAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  distanceKm?: InputMaybe<NumberFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  full?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CustomerAddressAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  ward?: InputMaybe<StringFieldComparison>;
};

export type CustomerAddressAggregateFilterCustomerAggregateFilter = {
  and?: InputMaybe<Array<CustomerAddressAggregateFilterCustomerAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerAddressAggregateFilterCustomerAggregateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerAddressDto = {
  city?: InputMaybe<Scalars['String']['input']>;
  customer: Scalars['ID']['input'];
  distanceKm?: InputMaybe<Scalars['Float']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  full?: InputMaybe<Scalars['String']['input']>;
  ward?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerAddressFilter = {
  and?: InputMaybe<Array<CustomerAddressFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customer?: InputMaybe<CustomerAddressFilterCustomerFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  distanceKm?: InputMaybe<NumberFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  full?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CustomerAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  ward?: InputMaybe<StringFieldComparison>;
};

export type CustomerAddressFilterCustomerFilter = {
  and?: InputMaybe<Array<CustomerAddressFilterCustomerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerAddressFilterCustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerAddressSort = {
  direction: SortDirection;
  field: CustomerAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerAddressSortFields {
  City = 'city',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DistanceKm = 'distanceKm',
  District = 'district',
  Full = 'full',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Ward = 'ward'
}

export type CustomerAddressesAggregateGroupBy = {
  __typename?: 'CustomerAddressesAggregateGroupBy';
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  distanceKm?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressesAggregateResponse = {
  __typename?: 'CustomerAddressesAggregateResponse';
  avg?: Maybe<CustomerAddressesAvgAggregate>;
  count?: Maybe<CustomerAddressesCountAggregate>;
  groupBy?: Maybe<CustomerAddressesAggregateGroupBy>;
  max?: Maybe<CustomerAddressesMaxAggregate>;
  min?: Maybe<CustomerAddressesMinAggregate>;
  sum?: Maybe<CustomerAddressesSumAggregate>;
};

export type CustomerAddressesAvgAggregate = {
  __typename?: 'CustomerAddressesAvgAggregate';
  distanceKm?: Maybe<Scalars['Float']['output']>;
};

export type CustomerAddressesConnection = {
  __typename?: 'CustomerAddressesConnection';
  /** Array of nodes. */
  nodes: Array<CustomerAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CustomerAddressesCountAggregate = {
  __typename?: 'CustomerAddressesCountAggregate';
  city?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  distanceKm?: Maybe<Scalars['Int']['output']>;
  district?: Maybe<Scalars['Int']['output']>;
  full?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  ward?: Maybe<Scalars['Int']['output']>;
};

export type CustomerAddressesMaxAggregate = {
  __typename?: 'CustomerAddressesMaxAggregate';
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  distanceKm?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressesMinAggregate = {
  __typename?: 'CustomerAddressesMinAggregate';
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  distanceKm?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressesSumAggregate = {
  __typename?: 'CustomerAddressesSumAggregate';
  distanceKm?: Maybe<Scalars['Float']['output']>;
};

export type CustomerAggregateFilter = {
  addresses?: InputMaybe<CustomerAggregateFilterCustomerAddressAggregateFilter>;
  and?: InputMaybe<Array<CustomerAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerAggregateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerAggregateFilterCustomerAddressAggregateFilter = {
  and?: InputMaybe<Array<CustomerAggregateFilterCustomerAddressAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  distanceKm?: InputMaybe<NumberFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  full?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CustomerAggregateFilterCustomerAddressAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  ward?: InputMaybe<StringFieldComparison>;
};

export type CustomerAggregateGroupBy = {
  __typename?: 'CustomerAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<CustomerGender>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CustomerAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type CustomerAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type CustomerAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type CustomerAggregateResponse = {
  __typename?: 'CustomerAggregateResponse';
  avg?: Maybe<CustomerAvgAggregate>;
  count?: Maybe<CustomerCountAggregate>;
  groupBy?: Maybe<CustomerAggregateGroupBy>;
  max?: Maybe<CustomerMaxAggregate>;
  min?: Maybe<CustomerMinAggregate>;
  sum?: Maybe<CustomerSumAggregate>;
};

export type CustomerAvgAggregate = {
  __typename?: 'CustomerAvgAggregate';
  gender?: Maybe<Scalars['Float']['output']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** Array of edges. */
  edges: Array<CustomerEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CustomerCountAggregate = {
  __typename?: 'CustomerCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type CustomerDto = {
  OneToMany?: InputMaybe<Array<CustomerAddressDto>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender: CustomerGender;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type CustomerDeleteFilter = {
  and?: InputMaybe<Array<CustomerDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerDeleteFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerDeleteResponse = {
  __typename?: 'CustomerDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<CustomerGender>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Customer */
  node: Customer;
};

export type CustomerFilter = {
  addresses?: InputMaybe<CustomerFilterCustomerAddressFilter>;
  and?: InputMaybe<Array<CustomerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CustomerFilterCustomerAddressFilter = {
  and?: InputMaybe<Array<CustomerFilterCustomerAddressFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  distanceKm?: InputMaybe<NumberFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  full?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CustomerFilterCustomerAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  ward?: InputMaybe<StringFieldComparison>;
};

export enum CustomerGender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export type CustomerGenderFilterComparison = {
  eq?: InputMaybe<CustomerGender>;
  gt?: InputMaybe<CustomerGender>;
  gte?: InputMaybe<CustomerGender>;
  iLike?: InputMaybe<CustomerGender>;
  in?: InputMaybe<Array<CustomerGender>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<CustomerGender>;
  lt?: InputMaybe<CustomerGender>;
  lte?: InputMaybe<CustomerGender>;
  neq?: InputMaybe<CustomerGender>;
  notILike?: InputMaybe<CustomerGender>;
  notIn?: InputMaybe<Array<CustomerGender>>;
  notLike?: InputMaybe<CustomerGender>;
};

export type CustomerMaxAggregate = {
  __typename?: 'CustomerMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<CustomerGender>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerMinAggregate = {
  __typename?: 'CustomerMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<CustomerGender>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerSort = {
  direction: SortDirection;
  field: CustomerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName',
  Phone = 'phone',
  UpdatedAt = 'updatedAt'
}

export type CustomerSumAggregate = {
  __typename?: 'CustomerSumAggregate';
  gender?: Maybe<Scalars['Float']['output']>;
};

export type CustomerUpdateFilter = {
  and?: InputMaybe<Array<CustomerUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerUpdateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteManyAccountPasswordResetsInput = {
  /** Filter to find records to delete */
  filter: AccountPasswordResetDeleteFilter;
};

export type DeleteManyAccountVerficationsInput = {
  /** Filter to find records to delete */
  filter: AccountVerficationDeleteFilter;
};

export type DeleteManyAccountsInput = {
  /** Filter to find records to delete */
  filter: AccountDeleteFilter;
};

export type DeleteManyApiKeysInput = {
  /** Filter to find records to delete */
  filter: ApiKeyDeleteFilter;
};

export type DeleteManyBranchSaleChannelsInput = {
  /** Filter to find records to delete */
  filter: BranchSaleChannelDeleteFilter;
};

export type DeleteManyCustomersInput = {
  /** Filter to find records to delete */
  filter: CustomerDeleteFilter;
};

export type DeleteManyFilesInput = {
  /** Filter to find records to delete */
  filter: FileDeleteFilter;
};

export type DeleteManyMediaInput = {
  /** Filter to find records to delete */
  filter: MediaDeleteFilter;
};

export type DeleteManyOrderProductsInput = {
  /** Filter to find records to delete */
  filter: OrderProductDeleteFilter;
};

export type DeleteManyOrdersInput = {
  /** Filter to find records to delete */
  filter: OrderDeleteFilter;
};

export type DeleteManyOrgBranchMembersInput = {
  /** Filter to find records to delete */
  filter: OrgBranchMemberDeleteFilter;
};

export type DeleteManyOrgBranchesInput = {
  /** Filter to find records to delete */
  filter: OrgBranchDeleteFilter;
};

export type DeleteManyOrgMembersInput = {
  /** Filter to find records to delete */
  filter: OrgMemberDeleteFilter;
};

export type DeleteManyOrgsInput = {
  /** Filter to find records to delete */
  filter: OrgDeleteFilter;
};

export type DeleteManyProductCategoriesInput = {
  /** Filter to find records to delete */
  filter: ProductCategoryDeleteFilter;
};

export type DeleteManyProductOptionGroupsInput = {
  /** Filter to find records to delete */
  filter: ProductOptionGroupDeleteFilter;
};

export type DeleteManyProductOptionsInput = {
  /** Filter to find records to delete */
  filter: ProductOptionDeleteFilter;
};

export type DeleteManyProductPricesInput = {
  /** Filter to find records to delete */
  filter: ProductPriceDeleteFilter;
};

export type DeleteManyProductTypesInput = {
  /** Filter to find records to delete */
  filter: ProductTypeDeleteFilter;
};

export type DeleteManyProductUnitsInput = {
  /** Filter to find records to delete */
  filter: ProductUnitDeleteFilter;
};

export type DeleteManyProductsInput = {
  /** Filter to find records to delete */
  filter: ProductDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteOneAccountInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneAccountPasswordResetInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneAccountVerficationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneApiKeyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneBranchSaleChannelInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCustomerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneFileInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMediaInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrderInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrderProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrgBranchInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrgBranchMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrgInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrgMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductOptionGroupInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductOptionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductPriceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductUnitInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Account;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  refId?: Maybe<Scalars['String']['output']>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type FileAggregateFilter = {
  and?: InputMaybe<Array<FileAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<FileAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<FileAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileAggregateGroupBy = {
  __typename?: 'FileAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FileAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type FileAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type FileAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type FileAggregateResponse = {
  __typename?: 'FileAggregateResponse';
  count?: Maybe<FileCountAggregate>;
  groupBy?: Maybe<FileAggregateGroupBy>;
  max?: Maybe<FileMaxAggregate>;
  min?: Maybe<FileMinAggregate>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  /** Array of edges. */
  edges: Array<FileEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mimetype?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  refId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type FileDto = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  mimetype: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refId?: InputMaybe<Scalars['String']['input']>;
  secureUrl?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type FileDeleteFilter = {
  and?: InputMaybe<Array<FileDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileDeleteFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileDeleteResponse = {
  __typename?: 'FileDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the File */
  node: File;
};

export type FileFilter = {
  and?: InputMaybe<Array<FileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<FileFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileFilterAccountFilter = {
  and?: InputMaybe<Array<FileFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileSort = {
  direction: SortDirection;
  field: FileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FileSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Mimetype = 'mimetype',
  Name = 'name',
  RefId = 'refId',
  UpdatedAt = 'updatedAt'
}

export type FileUpdateFilter = {
  and?: InputMaybe<Array<FileUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileUpdateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

/** Group by */
export enum GroupBy {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type JsonFilterComparison = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  iLike?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  neq?: InputMaybe<Scalars['JSON']['input']>;
  notILike?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
  notLike?: InputMaybe<Scalars['JSON']['input']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  accessToken: Scalars['String']['output'];
  account: Account;
  refreshToken: Scalars['String']['output'];
};

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Account;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  refId?: Maybe<Scalars['String']['output']>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type MediaAggregateFilter = {
  and?: InputMaybe<Array<MediaAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<MediaAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MediaAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<MediaAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MediaAggregateGroupBy = {
  __typename?: 'MediaAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MediaAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type MediaAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type MediaAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type MediaAggregateResponse = {
  __typename?: 'MediaAggregateResponse';
  count?: Maybe<MediaCountAggregate>;
  groupBy?: Maybe<MediaAggregateGroupBy>;
  max?: Maybe<MediaMaxAggregate>;
  min?: Maybe<MediaMinAggregate>;
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** Array of edges. */
  edges: Array<MediaEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MediaCountAggregate = {
  __typename?: 'MediaCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mimetype?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  refId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type MediaDto = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  mimetype: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refId?: InputMaybe<Scalars['String']['input']>;
  secureUrl?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type MediaDeleteFilter = {
  and?: InputMaybe<Array<MediaDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaDeleteFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MediaDeleteResponse = {
  __typename?: 'MediaDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Media */
  node: Media;
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<MediaFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MediaFilterAccountFilter = {
  and?: InputMaybe<Array<MediaFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MediaMaxAggregate = {
  __typename?: 'MediaMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MediaMinAggregate = {
  __typename?: 'MediaMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MediaSort = {
  direction: SortDirection;
  field: MediaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MediaSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Mimetype = 'mimetype',
  Name = 'name',
  RefId = 'refId',
  UpdatedAt = 'updatedAt'
}

export type MediaUpdateFilter = {
  and?: InputMaybe<Array<MediaUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mimetype?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MediaUpdateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddressesToCustomer: Customer;
  addBranchesToOrg: Org;
  addMembersToOrg: Org;
  addMembersToOrgBranch: OrgBranch;
  addOptionGroupsToProduct: Product;
  addOptionsToOrderProduct: OrderProduct;
  addOptionsToProductOptionGroup: ProductOptionGroup;
  addProductsToProductCategory: ProductCategory;
  addProductsToProductOptionGroup: ProductOptionGroup;
  addProductsToProductType: ProductType;
  addProductsToProductUnit: ProductUnit;
  authConfirmPasswordReset: Scalars['Boolean']['output'];
  authLogin: LoginResult;
  authRefreshToken: LoginResult;
  authRegister: Scalars['Boolean']['output'];
  authRequestPasswordReset: Scalars['Boolean']['output'];
  authResendVerification: Scalars['Boolean']['output'];
  authResendVerificationWithEmail: Scalars['Boolean']['output'];
  authVerify: Scalars['Boolean']['output'];
  createManyAccountPasswordResets: Array<AccountPasswordReset>;
  createManyAccountVerfications: Array<AccountVerfication>;
  createManyAccounts: Array<Account>;
  createManyApiKeys: Array<ApiKey>;
  createManyBranchSaleChannels: Array<BranchSaleChannel>;
  createManyCustomers: Array<Customer>;
  createManyFiles: Array<File>;
  createManyMedia: Array<Media>;
  createManyOrderProducts: Array<OrderProduct>;
  createManyOrders: Array<Order>;
  createManyOrgBranchMembers: Array<OrgBranchMember>;
  createManyOrgBranches: Array<OrgBranch>;
  createManyOrgMembers: Array<OrgMember>;
  createManyOrgs: Array<Org>;
  createManyProductCategories: Array<ProductCategory>;
  createManyProductOptionGroups: Array<ProductOptionGroup>;
  createManyProductOptions: Array<ProductOption>;
  createManyProductPrices: Array<ProductPrice>;
  createManyProductTypes: Array<ProductType>;
  createManyProductUnits: Array<ProductUnit>;
  createManyProducts: Array<Product>;
  createOneAccount: Account;
  createOneAccountPasswordReset: AccountPasswordReset;
  createOneAccountVerfication: AccountVerfication;
  createOneApiKey: ApiKey;
  createOneBranchSaleChannel: BranchSaleChannel;
  createOneCustomer: Customer;
  createOneFile: File;
  createOneMedia: Media;
  createOneOrder: Order;
  createOneOrderProduct: OrderProduct;
  createOneOrg: Org;
  createOneOrgBranch: OrgBranch;
  createOneOrgBranchMember: OrgBranchMember;
  createOneOrgMember: OrgMember;
  createOneProduct: Product;
  createOneProductCategory: ProductCategory;
  createOneProductOption: ProductOption;
  createOneProductOptionGroup: ProductOptionGroup;
  createOneProductPrice: ProductPrice;
  createOneProductType: ProductType;
  createOneProductUnit: ProductUnit;
  deleteManyAccountPasswordResets: DeleteManyResponse;
  deleteManyAccountVerfications: DeleteManyResponse;
  deleteManyAccounts: DeleteManyResponse;
  deleteManyApiKeys: DeleteManyResponse;
  deleteManyBranchSaleChannels: DeleteManyResponse;
  deleteManyCustomers: DeleteManyResponse;
  deleteManyFiles: DeleteManyResponse;
  deleteManyMedia: DeleteManyResponse;
  deleteManyOrderProducts: DeleteManyResponse;
  deleteManyOrders: DeleteManyResponse;
  deleteManyOrgBranchMembers: DeleteManyResponse;
  deleteManyOrgBranches: DeleteManyResponse;
  deleteManyOrgMembers: DeleteManyResponse;
  deleteManyOrgs: DeleteManyResponse;
  deleteManyProductCategories: DeleteManyResponse;
  deleteManyProductOptionGroups: DeleteManyResponse;
  deleteManyProductOptions: DeleteManyResponse;
  deleteManyProductPrices: DeleteManyResponse;
  deleteManyProductTypes: DeleteManyResponse;
  deleteManyProductUnits: DeleteManyResponse;
  deleteManyProducts: DeleteManyResponse;
  deleteOneAccount: AccountDeleteResponse;
  deleteOneAccountPasswordReset: AccountPasswordResetDeleteResponse;
  deleteOneAccountVerfication: AccountVerficationDeleteResponse;
  deleteOneApiKey: ApiKeyDeleteResponse;
  deleteOneBranchSaleChannel: BranchSaleChannelDeleteResponse;
  deleteOneCustomer: CustomerDeleteResponse;
  deleteOneFile: FileDeleteResponse;
  deleteOneMedia: MediaDeleteResponse;
  deleteOneOrder: OrderDeleteResponse;
  deleteOneOrderProduct: OrderProductDeleteResponse;
  deleteOneOrg: OrgDeleteResponse;
  deleteOneOrgBranch: OrgBranchDeleteResponse;
  deleteOneOrgBranchMember: OrgBranchMemberDeleteResponse;
  deleteOneOrgMember: OrgMemberDeleteResponse;
  deleteOneProduct: ProductDeleteResponse;
  deleteOneProductCategory: ProductCategoryDeleteResponse;
  deleteOneProductOption: ProductOptionDeleteResponse;
  deleteOneProductOptionGroup: ProductOptionGroupDeleteResponse;
  deleteOneProductPrice: ProductPriceDeleteResponse;
  deleteOneProductType: ProductTypeDeleteResponse;
  deleteOneProductUnit: ProductUnitDeleteResponse;
  orderImportByFiles: Array<Order>;
  productImportByFile: Array<Product>;
  productPriceImportByFile: Array<ProductPrice>;
  setAddressesOnCustomer: Customer;
  setBranchesOnOrg: Org;
  setMembersOnOrg: Org;
  setMembersOnOrgBranch: OrgBranch;
  setOptionGroupsOnProduct: Product;
  setOptionsOnOrderProduct: OrderProduct;
  setOptionsOnProductOptionGroup: ProductOptionGroup;
  setProductOnOrderProduct: OrderProduct;
  setProductsOnProductCategory: ProductCategory;
  setProductsOnProductOptionGroup: ProductOptionGroup;
  setProductsOnProductType: ProductType;
  setProductsOnProductUnit: ProductUnit;
  setUnitOnProduct: Product;
  updateManyAccountPasswordResets: UpdateManyResponse;
  updateManyAccountVerfications: UpdateManyResponse;
  updateManyAccounts: UpdateManyResponse;
  updateManyApiKeys: UpdateManyResponse;
  updateManyBranchSaleChannels: UpdateManyResponse;
  updateManyCustomers: UpdateManyResponse;
  updateManyFiles: UpdateManyResponse;
  updateManyMedia: UpdateManyResponse;
  updateManyOrderProducts: UpdateManyResponse;
  updateManyOrders: UpdateManyResponse;
  updateManyOrgBranchMembers: UpdateManyResponse;
  updateManyOrgBranches: UpdateManyResponse;
  updateManyOrgMembers: UpdateManyResponse;
  updateManyOrgs: UpdateManyResponse;
  updateManyProductCategories: UpdateManyResponse;
  updateManyProductOptionGroups: UpdateManyResponse;
  updateManyProductOptions: UpdateManyResponse;
  updateManyProductPrices: UpdateManyResponse;
  updateManyProductTypes: UpdateManyResponse;
  updateManyProductUnits: UpdateManyResponse;
  updateManyProducts: UpdateManyResponse;
  updateOneAccount: Account;
  updateOneAccountPasswordReset: AccountPasswordReset;
  updateOneAccountVerfication: AccountVerfication;
  updateOneApiKey: ApiKey;
  updateOneBranchSaleChannel: BranchSaleChannel;
  updateOneCustomer: Customer;
  updateOneFile: File;
  updateOneMedia: Media;
  updateOneOrder: Order;
  updateOneOrderProduct: OrderProduct;
  updateOneOrg: Org;
  updateOneOrgBranch: OrgBranch;
  updateOneOrgBranchMember: OrgBranchMember;
  updateOneOrgMember: OrgMember;
  updateOneProduct: Product;
  updateOneProductCategory: ProductCategory;
  updateOneProductOption: ProductOption;
  updateOneProductOptionGroup: ProductOptionGroup;
  updateOneProductPrice: ProductPrice;
  updateOneProductType: ProductType;
  updateOneProductUnit: ProductUnit;
};


export type MutationAddAddressesToCustomerArgs = {
  input: AddAddressesToCustomerInput;
};


export type MutationAddBranchesToOrgArgs = {
  input: AddBranchesToOrgInput;
};


export type MutationAddMembersToOrgArgs = {
  input: AddMembersToOrgInput;
};


export type MutationAddMembersToOrgBranchArgs = {
  input: AddMembersToOrgBranchInput;
};


export type MutationAddOptionGroupsToProductArgs = {
  input: AddOptionGroupsToProductInput;
};


export type MutationAddOptionsToOrderProductArgs = {
  input: AddOptionsToOrderProductInput;
};


export type MutationAddOptionsToProductOptionGroupArgs = {
  input: AddOptionsToProductOptionGroupInput;
};


export type MutationAddProductsToProductCategoryArgs = {
  input: AddProductsToProductCategoryInput;
};


export type MutationAddProductsToProductOptionGroupArgs = {
  input: AddProductsToProductOptionGroupInput;
};


export type MutationAddProductsToProductTypeArgs = {
  input: AddProductsToProductTypeInput;
};


export type MutationAddProductsToProductUnitArgs = {
  input: AddProductsToProductUnitInput;
};


export type MutationAuthConfirmPasswordResetArgs = {
  input: AuthConfirmPasswordResetInput;
};


export type MutationAuthLoginArgs = {
  input: AuthLoginInput;
};


export type MutationAuthRefreshTokenArgs = {
  input: AuthRefreshTokenInput;
};


export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
};


export type MutationAuthRequestPasswordResetArgs = {
  input: AuthRequestPasswordResetInput;
};


export type MutationAuthResendVerificationArgs = {
  input: AuthResendVerificationInput;
};


export type MutationAuthResendVerificationWithEmailArgs = {
  input: AuthResendVerificationWithEmailInput;
};


export type MutationAuthVerifyArgs = {
  input: AuthVerifyAccountInput;
};


export type MutationCreateManyAccountPasswordResetsArgs = {
  input: CreateManyAccountPasswordResetsInput;
};


export type MutationCreateManyAccountVerficationsArgs = {
  input: CreateManyAccountVerficationsInput;
};


export type MutationCreateManyAccountsArgs = {
  input: CreateManyAccountsInput;
};


export type MutationCreateManyApiKeysArgs = {
  input: CreateManyApiKeysInput;
};


export type MutationCreateManyBranchSaleChannelsArgs = {
  input: CreateManyBranchSaleChannelsInput;
};


export type MutationCreateManyCustomersArgs = {
  input: CreateManyCustomersInput;
};


export type MutationCreateManyFilesArgs = {
  input: CreateManyFilesInput;
};


export type MutationCreateManyMediaArgs = {
  input: CreateManyMediaInput;
};


export type MutationCreateManyOrderProductsArgs = {
  input: CreateManyOrderProductsInput;
};


export type MutationCreateManyOrdersArgs = {
  input: CreateManyOrdersInput;
};


export type MutationCreateManyOrgBranchMembersArgs = {
  input: CreateManyOrgBranchMembersInput;
};


export type MutationCreateManyOrgBranchesArgs = {
  input: CreateManyOrgBranchesInput;
};


export type MutationCreateManyOrgMembersArgs = {
  input: CreateManyOrgMembersInput;
};


export type MutationCreateManyOrgsArgs = {
  input: CreateManyOrgsInput;
};


export type MutationCreateManyProductCategoriesArgs = {
  input: CreateManyProductCategoriesInput;
};


export type MutationCreateManyProductOptionGroupsArgs = {
  input: CreateManyProductOptionGroupsInput;
};


export type MutationCreateManyProductOptionsArgs = {
  input: CreateManyProductOptionsInput;
};


export type MutationCreateManyProductPricesArgs = {
  input: CreateManyProductPricesInput;
};


export type MutationCreateManyProductTypesArgs = {
  input: CreateManyProductTypesInput;
};


export type MutationCreateManyProductUnitsArgs = {
  input: CreateManyProductUnitsInput;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationCreateOneAccountArgs = {
  input: CreateOneAccountInput;
};


export type MutationCreateOneAccountPasswordResetArgs = {
  input: CreateOneAccountPasswordResetInput;
};


export type MutationCreateOneAccountVerficationArgs = {
  input: CreateOneAccountVerficationInput;
};


export type MutationCreateOneApiKeyArgs = {
  input: CreateOneApiKeyInput;
};


export type MutationCreateOneBranchSaleChannelArgs = {
  input: CreateOneBranchSaleChannelInput;
};


export type MutationCreateOneCustomerArgs = {
  input: CreateOneCustomerInput;
};


export type MutationCreateOneFileArgs = {
  input: CreateOneFileInput;
};


export type MutationCreateOneMediaArgs = {
  input: CreateOneMediaInput;
};


export type MutationCreateOneOrderArgs = {
  input: CreateOneOrderInput;
};


export type MutationCreateOneOrderProductArgs = {
  input: CreateOneOrderProductInput;
};


export type MutationCreateOneOrgArgs = {
  input: CreateOneOrgInput;
};


export type MutationCreateOneOrgBranchArgs = {
  input: CreateOneOrgBranchInput;
};


export type MutationCreateOneOrgBranchMemberArgs = {
  input: CreateOneOrgBranchMemberInput;
};


export type MutationCreateOneOrgMemberArgs = {
  input: CreateOneOrgMemberInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationCreateOneProductCategoryArgs = {
  input: CreateOneProductCategoryInput;
};


export type MutationCreateOneProductOptionArgs = {
  input: CreateOneProductOptionInput;
};


export type MutationCreateOneProductOptionGroupArgs = {
  input: CreateOneProductOptionGroupInput;
};


export type MutationCreateOneProductPriceArgs = {
  input: CreateOneProductPriceInput;
};


export type MutationCreateOneProductTypeArgs = {
  input: CreateOneProductTypeInput;
};


export type MutationCreateOneProductUnitArgs = {
  input: CreateOneProductUnitInput;
};


export type MutationDeleteManyAccountPasswordResetsArgs = {
  input: DeleteManyAccountPasswordResetsInput;
};


export type MutationDeleteManyAccountVerficationsArgs = {
  input: DeleteManyAccountVerficationsInput;
};


export type MutationDeleteManyAccountsArgs = {
  input: DeleteManyAccountsInput;
};


export type MutationDeleteManyApiKeysArgs = {
  input: DeleteManyApiKeysInput;
};


export type MutationDeleteManyBranchSaleChannelsArgs = {
  input: DeleteManyBranchSaleChannelsInput;
};


export type MutationDeleteManyCustomersArgs = {
  input: DeleteManyCustomersInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationDeleteManyMediaArgs = {
  input: DeleteManyMediaInput;
};


export type MutationDeleteManyOrderProductsArgs = {
  input: DeleteManyOrderProductsInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteManyOrdersInput;
};


export type MutationDeleteManyOrgBranchMembersArgs = {
  input: DeleteManyOrgBranchMembersInput;
};


export type MutationDeleteManyOrgBranchesArgs = {
  input: DeleteManyOrgBranchesInput;
};


export type MutationDeleteManyOrgMembersArgs = {
  input: DeleteManyOrgMembersInput;
};


export type MutationDeleteManyOrgsArgs = {
  input: DeleteManyOrgsInput;
};


export type MutationDeleteManyProductCategoriesArgs = {
  input: DeleteManyProductCategoriesInput;
};


export type MutationDeleteManyProductOptionGroupsArgs = {
  input: DeleteManyProductOptionGroupsInput;
};


export type MutationDeleteManyProductOptionsArgs = {
  input: DeleteManyProductOptionsInput;
};


export type MutationDeleteManyProductPricesArgs = {
  input: DeleteManyProductPricesInput;
};


export type MutationDeleteManyProductTypesArgs = {
  input: DeleteManyProductTypesInput;
};


export type MutationDeleteManyProductUnitsArgs = {
  input: DeleteManyProductUnitsInput;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationDeleteOneAccountArgs = {
  input: DeleteOneAccountInput;
};


export type MutationDeleteOneAccountPasswordResetArgs = {
  input: DeleteOneAccountPasswordResetInput;
};


export type MutationDeleteOneAccountVerficationArgs = {
  input: DeleteOneAccountVerficationInput;
};


export type MutationDeleteOneApiKeyArgs = {
  input: DeleteOneApiKeyInput;
};


export type MutationDeleteOneBranchSaleChannelArgs = {
  input: DeleteOneBranchSaleChannelInput;
};


export type MutationDeleteOneCustomerArgs = {
  input: DeleteOneCustomerInput;
};


export type MutationDeleteOneFileArgs = {
  input: DeleteOneFileInput;
};


export type MutationDeleteOneMediaArgs = {
  input: DeleteOneMediaInput;
};


export type MutationDeleteOneOrderArgs = {
  input: DeleteOneOrderInput;
};


export type MutationDeleteOneOrderProductArgs = {
  input: DeleteOneOrderProductInput;
};


export type MutationDeleteOneOrgArgs = {
  input: DeleteOneOrgInput;
};


export type MutationDeleteOneOrgBranchArgs = {
  input: DeleteOneOrgBranchInput;
};


export type MutationDeleteOneOrgBranchMemberArgs = {
  input: DeleteOneOrgBranchMemberInput;
};


export type MutationDeleteOneOrgMemberArgs = {
  input: DeleteOneOrgMemberInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
};


export type MutationDeleteOneProductCategoryArgs = {
  input: DeleteOneProductCategoryInput;
};


export type MutationDeleteOneProductOptionArgs = {
  input: DeleteOneProductOptionInput;
};


export type MutationDeleteOneProductOptionGroupArgs = {
  input: DeleteOneProductOptionGroupInput;
};


export type MutationDeleteOneProductPriceArgs = {
  input: DeleteOneProductPriceInput;
};


export type MutationDeleteOneProductTypeArgs = {
  input: DeleteOneProductTypeInput;
};


export type MutationDeleteOneProductUnitArgs = {
  input: DeleteOneProductUnitInput;
};


export type MutationOrderImportByFilesArgs = {
  input: OrderImportInput;
};


export type MutationProductImportByFileArgs = {
  input: ProductImportInput;
};


export type MutationProductPriceImportByFileArgs = {
  input: ProductPriceImportInput;
};


export type MutationSetAddressesOnCustomerArgs = {
  input: SetAddressesOnCustomerInput;
};


export type MutationSetBranchesOnOrgArgs = {
  input: SetBranchesOnOrgInput;
};


export type MutationSetMembersOnOrgArgs = {
  input: SetMembersOnOrgInput;
};


export type MutationSetMembersOnOrgBranchArgs = {
  input: SetMembersOnOrgBranchInput;
};


export type MutationSetOptionGroupsOnProductArgs = {
  input: SetOptionGroupsOnProductInput;
};


export type MutationSetOptionsOnOrderProductArgs = {
  input: SetOptionsOnOrderProductInput;
};


export type MutationSetOptionsOnProductOptionGroupArgs = {
  input: SetOptionsOnProductOptionGroupInput;
};


export type MutationSetProductOnOrderProductArgs = {
  input: SetProductOnOrderProductInput;
};


export type MutationSetProductsOnProductCategoryArgs = {
  input: SetProductsOnProductCategoryInput;
};


export type MutationSetProductsOnProductOptionGroupArgs = {
  input: SetProductsOnProductOptionGroupInput;
};


export type MutationSetProductsOnProductTypeArgs = {
  input: SetProductsOnProductTypeInput;
};


export type MutationSetProductsOnProductUnitArgs = {
  input: SetProductsOnProductUnitInput;
};


export type MutationSetUnitOnProductArgs = {
  input: SetUnitOnProductInput;
};


export type MutationUpdateManyAccountPasswordResetsArgs = {
  input: UpdateManyAccountPasswordResetsInput;
};


export type MutationUpdateManyAccountVerficationsArgs = {
  input: UpdateManyAccountVerficationsInput;
};


export type MutationUpdateManyAccountsArgs = {
  input: UpdateManyAccountsInput;
};


export type MutationUpdateManyApiKeysArgs = {
  input: UpdateManyApiKeysInput;
};


export type MutationUpdateManyBranchSaleChannelsArgs = {
  input: UpdateManyBranchSaleChannelsInput;
};


export type MutationUpdateManyCustomersArgs = {
  input: UpdateManyCustomersInput;
};


export type MutationUpdateManyFilesArgs = {
  input: UpdateManyFilesInput;
};


export type MutationUpdateManyMediaArgs = {
  input: UpdateManyMediaInput;
};


export type MutationUpdateManyOrderProductsArgs = {
  input: UpdateManyOrderProductsInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrdersInput;
};


export type MutationUpdateManyOrgBranchMembersArgs = {
  input: UpdateManyOrgBranchMembersInput;
};


export type MutationUpdateManyOrgBranchesArgs = {
  input: UpdateManyOrgBranchesInput;
};


export type MutationUpdateManyOrgMembersArgs = {
  input: UpdateManyOrgMembersInput;
};


export type MutationUpdateManyOrgsArgs = {
  input: UpdateManyOrgsInput;
};


export type MutationUpdateManyProductCategoriesArgs = {
  input: UpdateManyProductCategoriesInput;
};


export type MutationUpdateManyProductOptionGroupsArgs = {
  input: UpdateManyProductOptionGroupsInput;
};


export type MutationUpdateManyProductOptionsArgs = {
  input: UpdateManyProductOptionsInput;
};


export type MutationUpdateManyProductPricesArgs = {
  input: UpdateManyProductPricesInput;
};


export type MutationUpdateManyProductTypesArgs = {
  input: UpdateManyProductTypesInput;
};


export type MutationUpdateManyProductUnitsArgs = {
  input: UpdateManyProductUnitsInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationUpdateOneAccountArgs = {
  input: UpdateOneAccountInput;
};


export type MutationUpdateOneAccountPasswordResetArgs = {
  input: UpdateOneAccountPasswordResetInput;
};


export type MutationUpdateOneAccountVerficationArgs = {
  input: UpdateOneAccountVerficationInput;
};


export type MutationUpdateOneApiKeyArgs = {
  input: UpdateOneApiKeyInput;
};


export type MutationUpdateOneBranchSaleChannelArgs = {
  input: UpdateOneBranchSaleChannelInput;
};


export type MutationUpdateOneCustomerArgs = {
  input: UpdateOneCustomerInput;
};


export type MutationUpdateOneFileArgs = {
  input: UpdateOneFileInput;
};


export type MutationUpdateOneMediaArgs = {
  input: UpdateOneMediaInput;
};


export type MutationUpdateOneOrderArgs = {
  input: UpdateOneOrderInput;
};


export type MutationUpdateOneOrderProductArgs = {
  input: UpdateOneOrderProductInput;
};


export type MutationUpdateOneOrgArgs = {
  input: UpdateOneOrgInput;
};


export type MutationUpdateOneOrgBranchArgs = {
  input: UpdateOneOrgBranchInput;
};


export type MutationUpdateOneOrgBranchMemberArgs = {
  input: UpdateOneOrgBranchMemberInput;
};


export type MutationUpdateOneOrgMemberArgs = {
  input: UpdateOneOrgMemberInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateOneProductCategoryArgs = {
  input: UpdateOneProductCategoryInput;
};


export type MutationUpdateOneProductOptionArgs = {
  input: UpdateOneProductOptionInput;
};


export type MutationUpdateOneProductOptionGroupArgs = {
  input: UpdateOneProductOptionGroupInput;
};


export type MutationUpdateOneProductPriceArgs = {
  input: UpdateOneProductPriceInput;
};


export type MutationUpdateOneProductTypeArgs = {
  input: UpdateOneProductTypeInput;
};


export type MutationUpdateOneProductUnitArgs = {
  input: UpdateOneProductUnitInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  __typename?: 'Order';
  branch: OrgBranch;
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  netPrice: Scalars['Float']['output'];
  note?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  saleChannel: BranchSaleChannel;
  shippingAddressCity?: Maybe<Scalars['String']['output']>;
  shippingAddressDistanceKm?: Maybe<Scalars['Float']['output']>;
  shippingAddressDistrict?: Maybe<Scalars['String']['output']>;
  shippingAddressFull?: Maybe<Scalars['String']['output']>;
  shippingAddressWard?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilter>>;
  branch?: InputMaybe<OrderAggregateFilterOrgBranchAggregateFilter>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customer?: InputMaybe<OrderAggregateFilterCustomerAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  saleChannel?: InputMaybe<OrderAggregateFilterBranchSaleChannelAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderAggregateFilterBranchSaleChannelAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilterBranchSaleChannelAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderAggregateFilterBranchSaleChannelAggregateFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderAggregateFilterCustomerAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilterCustomerAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderAggregateFilterCustomerAggregateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrderAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrderAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  avg?: Maybe<OrderAvgAggregate>;
  count?: Maybe<OrderCountAggregate>;
  groupBy?: Maybe<OrderAggregateGroupBy>;
  max?: Maybe<OrderMaxAggregate>;
  min?: Maybe<OrderMinAggregate>;
  sum?: Maybe<OrderSumAggregate>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  commissionPercent?: Maybe<Scalars['Int']['output']>;
  commissionPrice?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  discountPrice?: Maybe<Scalars['Int']['output']>;
  grossPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  netPrice?: Maybe<Scalars['Int']['output']>;
  refId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrderDto = {
  branch: Scalars['ID']['input'];
  commissionPercent?: InputMaybe<Scalars['Float']['input']>;
  commissionPrice?: InputMaybe<Scalars['Float']['input']>;
  customer: Scalars['ID']['input'];
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  grossPrice?: InputMaybe<Scalars['Float']['input']>;
  netPrice: Scalars['Float']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<OrderProductDto>>;
  refId?: InputMaybe<Scalars['String']['input']>;
  saleChannel: Scalars['ID']['input'];
  shippingAddressCity?: InputMaybe<Scalars['String']['input']>;
  shippingAddressDistanceKm?: InputMaybe<Scalars['Float']['input']>;
  shippingAddressDistrict?: InputMaybe<Scalars['String']['input']>;
  shippingAddressFull?: InputMaybe<Scalars['String']['input']>;
  shippingAddressWard?: InputMaybe<Scalars['String']['input']>;
};

export type OrderDeleteFilter = {
  and?: InputMaybe<Array<OrderDeleteFilter>>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderDeleteFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  shippingAddressCity?: Maybe<Scalars['String']['output']>;
  shippingAddressDistanceKm?: Maybe<Scalars['Float']['output']>;
  shippingAddressDistrict?: Maybe<Scalars['String']['output']>;
  shippingAddressFull?: Maybe<Scalars['String']['output']>;
  shippingAddressWard?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Order */
  node: Order;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  branch?: InputMaybe<OrderFilterOrgBranchFilter>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customer?: InputMaybe<OrderFilterCustomerFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  saleChannel?: InputMaybe<OrderFilterBranchSaleChannelFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterBranchSaleChannelFilter = {
  and?: InputMaybe<Array<OrderFilterBranchSaleChannelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterBranchSaleChannelFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterCustomerFilter = {
  and?: InputMaybe<Array<OrderFilterCustomerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<CustomerGenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterCustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrderFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderImportInput = {
  branchId: Scalars['ID']['input'];
  branchSaleChannelId: Scalars['ID']['input'];
  fileOrMediaIds: Array<Scalars['ID']['input']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  netPrice: Scalars['Float']['output'];
  options: OrderProductOptionsConnection;
  optionsAggregate: Array<OrderProductOptionsAggregateResponse>;
  order: Order;
  product: Product;
  quantity: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderProductOptionsArgs = {
  filter?: ProductOptionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductOptionSort>;
};


export type OrderProductOptionsAggregateArgs = {
  filter?: InputMaybe<ProductOptionAggregateFilter>;
};

export type OrderProductAggregateFilter = {
  and?: InputMaybe<Array<OrderProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  options?: InputMaybe<OrderProductAggregateFilterProductOptionAggregateFilter>;
  or?: InputMaybe<Array<OrderProductAggregateFilter>>;
  order?: InputMaybe<OrderProductAggregateFilterOrderAggregateFilter>;
  product?: InputMaybe<OrderProductAggregateFilterProductAggregateFilter>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductAggregateFilterOrderAggregateFilter = {
  and?: InputMaybe<Array<OrderProductAggregateFilterOrderAggregateFilter>>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderProductAggregateFilterOrderAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<OrderProductAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderProductAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductAggregateFilterProductOptionAggregateFilter = {
  and?: InputMaybe<Array<OrderProductAggregateFilterProductOptionAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderProductAggregateFilterProductOptionAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductAggregateGroupBy = {
  __typename?: 'OrderProductAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderProductAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrderProductAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrderProductAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrderProductAggregateResponse = {
  __typename?: 'OrderProductAggregateResponse';
  avg?: Maybe<OrderProductAvgAggregate>;
  count?: Maybe<OrderProductCountAggregate>;
  groupBy?: Maybe<OrderProductAggregateGroupBy>;
  max?: Maybe<OrderProductMaxAggregate>;
  min?: Maybe<OrderProductMinAggregate>;
  sum?: Maybe<OrderProductSumAggregate>;
};

export type OrderProductAvgAggregate = {
  __typename?: 'OrderProductAvgAggregate';
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type OrderProductConnection = {
  __typename?: 'OrderProductConnection';
  /** Array of edges. */
  edges: Array<OrderProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderProductCountAggregate = {
  __typename?: 'OrderProductCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  discountPrice?: Maybe<Scalars['Int']['output']>;
  grossPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  netPrice?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrderProductDto = {
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  grossPrice?: InputMaybe<Scalars['Float']['input']>;
  netPrice: Scalars['Float']['input'];
  options: Array<ProductOptionDto>;
  order: Scalars['ID']['input'];
  product: ProductDto;
  quantity: Scalars['Float']['input'];
};

export type OrderProductDeleteFilter = {
  and?: InputMaybe<Array<OrderProductDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderProductDeleteFilter>>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductDeleteResponse = {
  __typename?: 'OrderProductDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductEdge = {
  __typename?: 'OrderProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the OrderProduct */
  node: OrderProduct;
};

export type OrderProductFilter = {
  and?: InputMaybe<Array<OrderProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  options?: InputMaybe<OrderProductFilterProductOptionFilter>;
  or?: InputMaybe<Array<OrderProductFilter>>;
  order?: InputMaybe<OrderProductFilterOrderFilter>;
  product?: InputMaybe<OrderProductFilterProductFilter>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductFilterOrderFilter = {
  and?: InputMaybe<Array<OrderProductFilterOrderFilter>>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderProductFilterOrderFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductFilterProductFilter = {
  and?: InputMaybe<Array<OrderProductFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderProductFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductFilterProductOptionFilter = {
  and?: InputMaybe<Array<OrderProductFilterProductOptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderProductFilterProductOptionFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderProductMaxAggregate = {
  __typename?: 'OrderProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductMinAggregate = {
  __typename?: 'OrderProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductOptionsAggregateGroupBy = {
  __typename?: 'OrderProductOptionsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductOptionsAggregateResponse = {
  __typename?: 'OrderProductOptionsAggregateResponse';
  avg?: Maybe<OrderProductOptionsAvgAggregate>;
  count?: Maybe<OrderProductOptionsCountAggregate>;
  groupBy?: Maybe<OrderProductOptionsAggregateGroupBy>;
  max?: Maybe<OrderProductOptionsMaxAggregate>;
  min?: Maybe<OrderProductOptionsMinAggregate>;
  sum?: Maybe<OrderProductOptionsSumAggregate>;
};

export type OrderProductOptionsAvgAggregate = {
  __typename?: 'OrderProductOptionsAvgAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderProductOptionsConnection = {
  __typename?: 'OrderProductOptionsConnection';
  /** Array of nodes. */
  nodes: Array<ProductOption>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderProductOptionsCountAggregate = {
  __typename?: 'OrderProductOptionsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  diffPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrderProductOptionsMaxAggregate = {
  __typename?: 'OrderProductOptionsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductOptionsMinAggregate = {
  __typename?: 'OrderProductOptionsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderProductOptionsSumAggregate = {
  __typename?: 'OrderProductOptionsSumAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderProductSort = {
  direction: SortDirection;
  field: OrderProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderProductSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DiscountPrice = 'discountPrice',
  GrossPrice = 'grossPrice',
  Id = 'id',
  NetPrice = 'netPrice',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt'
}

export type OrderProductSumAggregate = {
  __typename?: 'OrderProductSumAggregate';
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type OrderProductUpdateFilter = {
  and?: InputMaybe<Array<OrderProductUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderProductUpdateFilter>>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  CommissionPercent = 'commissionPercent',
  CommissionPrice = 'commissionPrice',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DiscountPrice = 'discountPrice',
  GrossPrice = 'grossPrice',
  Id = 'id',
  NetPrice = 'netPrice',
  RefId = 'refId',
  UpdatedAt = 'updatedAt'
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  commissionPrice?: Maybe<Scalars['Float']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  grossPrice?: Maybe<Scalars['Float']['output']>;
  netPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderUpdateFilter = {
  and?: InputMaybe<Array<OrderUpdateFilter>>;
  commissionPercent?: InputMaybe<NumberFieldComparison>;
  commissionPrice?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  discountPrice?: InputMaybe<NumberFieldComparison>;
  grossPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  netPrice?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OrderUpdateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Org = {
  __typename?: 'Org';
  branches?: Maybe<OrgBranchesConnection>;
  branchesAggregate: Array<OrgBranchesAggregateResponse>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Account;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<OrgMembersConnection>;
  membersAggregate: Array<OrgMembersAggregateResponse>;
  name: Scalars['String']['output'];
  type: OrgType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgBranchesArgs = {
  filter?: OrgBranchFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrgBranchSort>;
};


export type OrgBranchesAggregateArgs = {
  filter?: InputMaybe<OrgBranchAggregateFilter>;
};


export type OrgMembersArgs = {
  filter?: OrgMemberFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrgMemberSort>;
};


export type OrgMembersAggregateArgs = {
  filter?: InputMaybe<OrgMemberAggregateFilter>;
};

export type OrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilter>>;
  branches?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateGroupBy = {
  __typename?: 'OrgAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OrgType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrgAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrgAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrgAggregateResponse = {
  __typename?: 'OrgAggregateResponse';
  avg?: Maybe<OrgAvgAggregate>;
  count?: Maybe<OrgCountAggregate>;
  groupBy?: Maybe<OrgAggregateGroupBy>;
  max?: Maybe<OrgMaxAggregate>;
  min?: Maybe<OrgMinAggregate>;
  sum?: Maybe<OrgSumAggregate>;
};

export type OrgAvgAggregate = {
  __typename?: 'OrgAvgAggregate';
  type?: Maybe<Scalars['Float']['output']>;
};

export type OrgBranch = {
  __typename?: 'OrgBranch';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  members: OrgBranchMembersConnection;
  membersAggregate: Array<OrgBranchMembersAggregateResponse>;
  name: Scalars['String']['output'];
  org: Org;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgBranchMembersArgs = {
  filter?: OrgBranchMemberFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrgBranchMemberSort>;
};


export type OrgBranchMembersAggregateArgs = {
  filter?: InputMaybe<OrgBranchMemberAggregateFilter>;
};

export type OrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgBranchAggregateFilterOrgBranchMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchAggregateFilter>>;
  org?: InputMaybe<OrgBranchAggregateFilterOrgAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchAggregateFilterOrgAggregateFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchAggregateFilterOrgBranchMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchAggregateGroupBy = {
  __typename?: 'OrgBranchAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgBranchAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrgBranchAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrgBranchAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrgBranchAggregateResponse = {
  __typename?: 'OrgBranchAggregateResponse';
  count?: Maybe<OrgBranchCountAggregate>;
  groupBy?: Maybe<OrgBranchAggregateGroupBy>;
  max?: Maybe<OrgBranchMaxAggregate>;
  min?: Maybe<OrgBranchMinAggregate>;
};

export type OrgBranchConnection = {
  __typename?: 'OrgBranchConnection';
  /** Array of edges. */
  edges: Array<OrgBranchEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgBranchCountAggregate = {
  __typename?: 'OrgBranchCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchDto = {
  details?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Array<OrgBranchMemberDto>>;
  name: Scalars['String']['input'];
  org?: InputMaybe<Scalars['ID']['input']>;
};

export type OrgBranchDeleteFilter = {
  and?: InputMaybe<Array<OrgBranchDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchDeleteResponse = {
  __typename?: 'OrgBranchDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchEdge = {
  __typename?: 'OrgBranchEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the OrgBranch */
  node: OrgBranch;
};

export type OrgBranchFilter = {
  and?: InputMaybe<Array<OrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgBranchFilterOrgBranchMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchFilter>>;
  org?: InputMaybe<OrgBranchFilterOrgFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchFilterOrgBranchMemberFilter = {
  and?: InputMaybe<Array<OrgBranchFilterOrgBranchMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchFilterOrgBranchMemberFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchFilterOrgFilter = {
  and?: InputMaybe<Array<OrgBranchFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchFilterOrgFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMaxAggregate = {
  __typename?: 'OrgBranchMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMember = {
  __typename?: 'OrgBranchMember';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  role: OrgBranchRole;
  team: OrgBranch;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMemberAggregateFilter = {
  account?: InputMaybe<OrgBranchMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  team?: InputMaybe<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberAggregateGroupBy = {
  __typename?: 'OrgBranchMemberAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgBranchMemberAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrgBranchMemberAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrgBranchMemberAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrgBranchMemberAggregateResponse = {
  __typename?: 'OrgBranchMemberAggregateResponse';
  avg?: Maybe<OrgBranchMemberAvgAggregate>;
  count?: Maybe<OrgBranchMemberCountAggregate>;
  groupBy?: Maybe<OrgBranchMemberAggregateGroupBy>;
  max?: Maybe<OrgBranchMemberMaxAggregate>;
  min?: Maybe<OrgBranchMemberMinAggregate>;
  sum?: Maybe<OrgBranchMemberSumAggregate>;
};

export type OrgBranchMemberAvgAggregate = {
  __typename?: 'OrgBranchMemberAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgBranchMemberConnection = {
  __typename?: 'OrgBranchMemberConnection';
  /** Array of edges. */
  edges: Array<OrgBranchMemberEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgBranchMemberCountAggregate = {
  __typename?: 'OrgBranchMemberCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchMemberDto = {
  account: Scalars['ID']['input'];
  branch?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  role: OrgBranchRole;
};

export type OrgBranchMemberDeleteFilter = {
  and?: InputMaybe<Array<OrgBranchMemberDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberDeleteFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberDeleteResponse = {
  __typename?: 'OrgBranchMemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMemberEdge = {
  __typename?: 'OrgBranchMemberEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the OrgBranchMember */
  node: OrgBranchMember;
};

export type OrgBranchMemberFilter = {
  account?: InputMaybe<OrgBranchMemberFilterAccountFilter>;
  and?: InputMaybe<Array<OrgBranchMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  team?: InputMaybe<OrgBranchMemberFilterOrgBranchFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgBranchMemberFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgBranchMemberFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberMaxAggregate = {
  __typename?: 'OrgBranchMemberMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMemberMinAggregate = {
  __typename?: 'OrgBranchMemberMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMemberSort = {
  direction: SortDirection;
  field: OrgBranchMemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrgBranchMemberSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Enabled = 'enabled',
  Id = 'id',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type OrgBranchMemberSumAggregate = {
  __typename?: 'OrgBranchMemberSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgBranchMemberUpdateFilter = {
  and?: InputMaybe<Array<OrgBranchMemberUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberUpdateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMembersAggregateGroupBy = {
  __typename?: 'OrgBranchMembersAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMembersAggregateResponse = {
  __typename?: 'OrgBranchMembersAggregateResponse';
  avg?: Maybe<OrgBranchMembersAvgAggregate>;
  count?: Maybe<OrgBranchMembersCountAggregate>;
  groupBy?: Maybe<OrgBranchMembersAggregateGroupBy>;
  max?: Maybe<OrgBranchMembersMaxAggregate>;
  min?: Maybe<OrgBranchMembersMinAggregate>;
  sum?: Maybe<OrgBranchMembersSumAggregate>;
};

export type OrgBranchMembersAvgAggregate = {
  __typename?: 'OrgBranchMembersAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgBranchMembersConnection = {
  __typename?: 'OrgBranchMembersConnection';
  /** Array of nodes. */
  nodes: Array<OrgBranchMember>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgBranchMembersCountAggregate = {
  __typename?: 'OrgBranchMembersCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchMembersMaxAggregate = {
  __typename?: 'OrgBranchMembersMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMembersMinAggregate = {
  __typename?: 'OrgBranchMembersMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgBranchRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMembersSumAggregate = {
  __typename?: 'OrgBranchMembersSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgBranchMinAggregate = {
  __typename?: 'OrgBranchMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum OrgBranchRole {
  Editor = 'EDITOR',
  Manager = 'MANAGER',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type OrgBranchRoleFilterComparison = {
  eq?: InputMaybe<OrgBranchRole>;
  gt?: InputMaybe<OrgBranchRole>;
  gte?: InputMaybe<OrgBranchRole>;
  iLike?: InputMaybe<OrgBranchRole>;
  in?: InputMaybe<Array<OrgBranchRole>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrgBranchRole>;
  lt?: InputMaybe<OrgBranchRole>;
  lte?: InputMaybe<OrgBranchRole>;
  neq?: InputMaybe<OrgBranchRole>;
  notILike?: InputMaybe<OrgBranchRole>;
  notIn?: InputMaybe<Array<OrgBranchRole>>;
  notLike?: InputMaybe<OrgBranchRole>;
};

export type OrgBranchSort = {
  direction: SortDirection;
  field: OrgBranchSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrgBranchSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Details = 'details',
  Enabled = 'enabled',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type OrgBranchUpdateFilter = {
  and?: InputMaybe<Array<OrgBranchUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchesAggregateGroupBy = {
  __typename?: 'OrgBranchesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchesAggregateResponse = {
  __typename?: 'OrgBranchesAggregateResponse';
  count?: Maybe<OrgBranchesCountAggregate>;
  groupBy?: Maybe<OrgBranchesAggregateGroupBy>;
  max?: Maybe<OrgBranchesMaxAggregate>;
  min?: Maybe<OrgBranchesMinAggregate>;
};

export type OrgBranchesConnection = {
  __typename?: 'OrgBranchesConnection';
  /** Array of nodes. */
  nodes: Array<OrgBranch>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgBranchesCountAggregate = {
  __typename?: 'OrgBranchesCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchesMaxAggregate = {
  __typename?: 'OrgBranchesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchesMinAggregate = {
  __typename?: 'OrgBranchesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgConnection = {
  __typename?: 'OrgConnection';
  /** Array of edges. */
  edges: Array<OrgEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgCountAggregate = {
  __typename?: 'OrgCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgDto = {
  branches?: InputMaybe<Array<OrgBranchDto>>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Array<OrgMemberDto>>;
  name: Scalars['String']['input'];
  type: OrgType;
};

export type OrgDeleteFilter = {
  and?: InputMaybe<Array<OrgDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgDeleteFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgDeleteResponse = {
  __typename?: 'OrgDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OrgType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgEdge = {
  __typename?: 'OrgEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Org */
  node: Org;
};

export type OrgFilter = {
  and?: InputMaybe<Array<OrgFilter>>;
  branches?: InputMaybe<OrgFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterOrgMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMaxAggregate = {
  __typename?: 'OrgMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OrgType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMember = {
  __typename?: 'OrgMember';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  org: Org;
  role: OrgRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMemberAggregateFilter = {
  account?: InputMaybe<OrgMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgMemberAggregateFilter>>;
  org?: InputMaybe<OrgMemberAggregateFilterOrgAggregateFilter>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgMemberAggregateFilterAccountAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberAggregateFilterAccountAggregateFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgMemberAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberAggregateFilterOrgAggregateFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberAggregateGroupBy = {
  __typename?: 'OrgMemberAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrgMemberAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type OrgMemberAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type OrgMemberAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type OrgMemberAggregateResponse = {
  __typename?: 'OrgMemberAggregateResponse';
  avg?: Maybe<OrgMemberAvgAggregate>;
  count?: Maybe<OrgMemberCountAggregate>;
  groupBy?: Maybe<OrgMemberAggregateGroupBy>;
  max?: Maybe<OrgMemberMaxAggregate>;
  min?: Maybe<OrgMemberMinAggregate>;
  sum?: Maybe<OrgMemberSumAggregate>;
};

export type OrgMemberAvgAggregate = {
  __typename?: 'OrgMemberAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgMemberConnection = {
  __typename?: 'OrgMemberConnection';
  /** Array of edges. */
  edges: Array<OrgMemberEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgMemberCountAggregate = {
  __typename?: 'OrgMemberCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgMemberDto = {
  account: Scalars['ID']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  org?: InputMaybe<Scalars['ID']['input']>;
  role: OrgRole;
};

export type OrgMemberDeleteFilter = {
  and?: InputMaybe<Array<OrgMemberDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgMemberDeleteFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberDeleteResponse = {
  __typename?: 'OrgMemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMemberEdge = {
  __typename?: 'OrgMemberEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the OrgMember */
  node: OrgMember;
};

export type OrgMemberFilter = {
  account?: InputMaybe<OrgMemberFilterAccountFilter>;
  and?: InputMaybe<Array<OrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgMemberFilter>>;
  org?: InputMaybe<OrgMemberFilterOrgFilter>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgMemberFilterAccountFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberFilterAccountFilter>>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberFilterOrgFilter = {
  and?: InputMaybe<Array<OrgMemberFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberFilterOrgFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberMaxAggregate = {
  __typename?: 'OrgMemberMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMemberMinAggregate = {
  __typename?: 'OrgMemberMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMemberSort = {
  direction: SortDirection;
  field: OrgMemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrgMemberSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Enabled = 'enabled',
  Id = 'id',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type OrgMemberSumAggregate = {
  __typename?: 'OrgMemberSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgMemberUpdateFilter = {
  and?: InputMaybe<Array<OrgMemberUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgMemberUpdateFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMembersAggregateGroupBy = {
  __typename?: 'OrgMembersAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMembersAggregateResponse = {
  __typename?: 'OrgMembersAggregateResponse';
  avg?: Maybe<OrgMembersAvgAggregate>;
  count?: Maybe<OrgMembersCountAggregate>;
  groupBy?: Maybe<OrgMembersAggregateGroupBy>;
  max?: Maybe<OrgMembersMaxAggregate>;
  min?: Maybe<OrgMembersMinAggregate>;
  sum?: Maybe<OrgMembersSumAggregate>;
};

export type OrgMembersAvgAggregate = {
  __typename?: 'OrgMembersAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgMembersConnection = {
  __typename?: 'OrgMembersConnection';
  /** Array of nodes. */
  nodes: Array<OrgMember>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgMembersCountAggregate = {
  __typename?: 'OrgMembersCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgMembersMaxAggregate = {
  __typename?: 'OrgMembersMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMembersMinAggregate = {
  __typename?: 'OrgMembersMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<OrgRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgMembersSumAggregate = {
  __typename?: 'OrgMembersSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type OrgMinAggregate = {
  __typename?: 'OrgMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OrgType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum OrgRole {
  Manager = 'MANAGER',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type OrgRoleFilterComparison = {
  eq?: InputMaybe<OrgRole>;
  gt?: InputMaybe<OrgRole>;
  gte?: InputMaybe<OrgRole>;
  iLike?: InputMaybe<OrgRole>;
  in?: InputMaybe<Array<OrgRole>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrgRole>;
  lt?: InputMaybe<OrgRole>;
  lte?: InputMaybe<OrgRole>;
  neq?: InputMaybe<OrgRole>;
  notILike?: InputMaybe<OrgRole>;
  notIn?: InputMaybe<Array<OrgRole>>;
  notLike?: InputMaybe<OrgRole>;
};

export type OrgSort = {
  direction: SortDirection;
  field: OrgSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrgSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Enabled = 'enabled',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type OrgSumAggregate = {
  __typename?: 'OrgSumAggregate';
  type?: Maybe<Scalars['Float']['output']>;
};

export enum OrgType {
  Fnb = 'FNB'
}

export type OrgTypeFilterComparison = {
  eq?: InputMaybe<OrgType>;
  gt?: InputMaybe<OrgType>;
  gte?: InputMaybe<OrgType>;
  iLike?: InputMaybe<OrgType>;
  in?: InputMaybe<Array<OrgType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrgType>;
  lt?: InputMaybe<OrgType>;
  lte?: InputMaybe<OrgType>;
  neq?: InputMaybe<OrgType>;
  notILike?: InputMaybe<OrgType>;
  notIn?: InputMaybe<Array<OrgType>>;
  notLike?: InputMaybe<OrgType>;
};

export type OrgUpdateFilter = {
  and?: InputMaybe<Array<OrgUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgUpdateFilter>>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type Product = {
  __typename?: 'Product';
  branch: OrgBranch;
  categories: ProductCategoriesConnection;
  categoriesAggregate: Array<ProductCategoriesAggregateResponse>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  optionGroups: ProductOptionGroupsConnection;
  optionGroupsAggregate: Array<ProductOptionGroupsAggregateResponse>;
  price: Scalars['Float']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  type: ProductType;
  unit: ProductUnit;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoriesArgs = {
  filter?: ProductCategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductCategorySort>;
};


export type ProductCategoriesAggregateArgs = {
  filter?: InputMaybe<ProductCategoryAggregateFilter>;
};


export type ProductOptionGroupsArgs = {
  filter?: ProductOptionGroupFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductOptionGroupSort>;
};


export type ProductOptionGroupsAggregateArgs = {
  filter?: InputMaybe<ProductOptionGroupAggregateFilter>;
};

export type ProductAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilter>>;
  branch?: InputMaybe<ProductAggregateFilterOrgBranchAggregateFilter>;
  categories?: InputMaybe<ProductAggregateFilterProductCategoryAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  optionGroups?: InputMaybe<ProductAggregateFilterProductOptionGroupAggregateFilter>;
  or?: InputMaybe<Array<ProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ProductAggregateFilterProductTypeAggregateFilter>;
  unit?: InputMaybe<ProductAggregateFilterProductUnitAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateFilterProductCategoryAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilterProductCategoryAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterProductCategoryAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateFilterProductOptionGroupAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilterProductOptionGroupAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterProductOptionGroupAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateFilterProductTypeAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilterProductTypeAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterProductTypeAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateFilterProductUnitAggregateFilter = {
  and?: InputMaybe<Array<ProductAggregateFilterProductUnitAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterProductUnitAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductAggregateResponse = {
  __typename?: 'ProductAggregateResponse';
  avg?: Maybe<ProductAvgAggregate>;
  count?: Maybe<ProductCountAggregate>;
  groupBy?: Maybe<ProductAggregateGroupBy>;
  max?: Maybe<ProductMaxAggregate>;
  min?: Maybe<ProductMinAggregate>;
  sum?: Maybe<ProductSumAggregate>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductCategoriesAggregateGroupBy = {
  __typename?: 'ProductCategoriesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoriesAggregateResponse = {
  __typename?: 'ProductCategoriesAggregateResponse';
  count?: Maybe<ProductCategoriesCountAggregate>;
  groupBy?: Maybe<ProductCategoriesAggregateGroupBy>;
  max?: Maybe<ProductCategoriesMaxAggregate>;
  min?: Maybe<ProductCategoriesMinAggregate>;
};

export type ProductCategoriesConnection = {
  __typename?: 'ProductCategoriesConnection';
  /** Array of nodes. */
  nodes: Array<ProductCategory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductCategoriesCountAggregate = {
  __typename?: 'ProductCategoriesCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductCategoriesMaxAggregate = {
  __typename?: 'ProductCategoriesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoriesMinAggregate = {
  __typename?: 'ProductCategoriesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<ProductCategoryProductsConnection>;
  productsAggregate: Array<ProductCategoryProductsAggregateResponse>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoryProductsArgs = {
  filter?: ProductFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type ProductCategoryProductsAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};

export type ProductCategoryAggregateFilter = {
  and?: InputMaybe<Array<ProductCategoryAggregateFilter>>;
  branch?: InputMaybe<ProductCategoryAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryAggregateFilter>>;
  products?: InputMaybe<ProductCategoryAggregateFilterProductAggregateFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<ProductCategoryAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<ProductCategoryAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryAggregateGroupBy = {
  __typename?: 'ProductCategoryAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoryAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductCategoryAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductCategoryAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductCategoryAggregateResponse = {
  __typename?: 'ProductCategoryAggregateResponse';
  count?: Maybe<ProductCategoryCountAggregate>;
  groupBy?: Maybe<ProductCategoryAggregateGroupBy>;
  max?: Maybe<ProductCategoryMaxAggregate>;
  min?: Maybe<ProductCategoryMinAggregate>;
};

export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  /** Array of edges. */
  edges: Array<ProductCategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductCategoryDto = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<Array<ProductDto>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCategoryDeleteFilter = {
  and?: InputMaybe<Array<ProductCategoryDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryDeleteFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryDeleteResponse = {
  __typename?: 'ProductCategoryDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryEdge = {
  __typename?: 'ProductCategoryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductCategory */
  node: ProductCategory;
};

export type ProductCategoryFilter = {
  and?: InputMaybe<Array<ProductCategoryFilter>>;
  branch?: InputMaybe<ProductCategoryFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryFilter>>;
  products?: InputMaybe<ProductCategoryFilterProductFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryFilterOrgBranchFilter = {
  and?: InputMaybe<Array<ProductCategoryFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryFilterProductFilter = {
  and?: InputMaybe<Array<ProductCategoryFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryProductsAggregateGroupBy = {
  __typename?: 'ProductCategoryProductsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryProductsAggregateResponse = {
  __typename?: 'ProductCategoryProductsAggregateResponse';
  avg?: Maybe<ProductCategoryProductsAvgAggregate>;
  count?: Maybe<ProductCategoryProductsCountAggregate>;
  groupBy?: Maybe<ProductCategoryProductsAggregateGroupBy>;
  max?: Maybe<ProductCategoryProductsMaxAggregate>;
  min?: Maybe<ProductCategoryProductsMinAggregate>;
  sum?: Maybe<ProductCategoryProductsSumAggregate>;
};

export type ProductCategoryProductsAvgAggregate = {
  __typename?: 'ProductCategoryProductsAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductCategoryProductsConnection = {
  __typename?: 'ProductCategoryProductsConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductCategoryProductsCountAggregate = {
  __typename?: 'ProductCategoryProductsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductCategoryProductsMaxAggregate = {
  __typename?: 'ProductCategoryProductsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryProductsMinAggregate = {
  __typename?: 'ProductCategoryProductsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCategoryProductsSumAggregate = {
  __typename?: 'ProductCategoryProductsSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductCategorySort = {
  direction: SortDirection;
  field: ProductCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductCategorySortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductCategoryUpdateFilter = {
  and?: InputMaybe<Array<ProductCategoryUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryUpdateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of edges. */
  edges: Array<ProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductDto = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ID']['input']>;
  unit?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductDeleteFilter = {
  and?: InputMaybe<Array<ProductDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductDeleteFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Product */
  node: Product;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  branch?: InputMaybe<ProductFilterOrgBranchFilter>;
  categories?: InputMaybe<ProductFilterProductCategoryFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  optionGroups?: InputMaybe<ProductFilterProductOptionGroupFilter>;
  or?: InputMaybe<Array<ProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ProductFilterProductTypeFilter>;
  unit?: InputMaybe<ProductFilterProductUnitFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterOrgBranchFilter = {
  and?: InputMaybe<Array<ProductFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterProductCategoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductCategoryFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductOptionGroupFilter = {
  and?: InputMaybe<Array<ProductFilterProductOptionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductOptionGroupFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductTypeFilter = {
  and?: InputMaybe<Array<ProductFilterProductTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductTypeFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductUnitFilter = {
  and?: InputMaybe<Array<ProductFilterProductUnitFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductUnitFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductImportInput = {
  branchId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice: Scalars['Float']['output'];
  group: ProductOptionGroup;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionAggregateFilter = {
  and?: InputMaybe<Array<ProductOptionAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  group?: InputMaybe<ProductOptionAggregateFilterProductOptionGroupAggregateFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionAggregateFilterProductOptionGroupAggregateFilter = {
  and?: InputMaybe<Array<ProductOptionAggregateFilterProductOptionGroupAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionAggregateFilterProductOptionGroupAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionAggregateGroupBy = {
  __typename?: 'ProductOptionAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductOptionAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductOptionAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductOptionAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductOptionAggregateResponse = {
  __typename?: 'ProductOptionAggregateResponse';
  avg?: Maybe<ProductOptionAvgAggregate>;
  count?: Maybe<ProductOptionCountAggregate>;
  groupBy?: Maybe<ProductOptionAggregateGroupBy>;
  max?: Maybe<ProductOptionMaxAggregate>;
  min?: Maybe<ProductOptionMinAggregate>;
  sum?: Maybe<ProductOptionSumAggregate>;
};

export type ProductOptionAvgAggregate = {
  __typename?: 'ProductOptionAvgAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionConnection = {
  __typename?: 'ProductOptionConnection';
  /** Array of edges. */
  edges: Array<ProductOptionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductOptionCountAggregate = {
  __typename?: 'ProductOptionCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  diffPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductOptionDto = {
  diffPrice: Scalars['Float']['input'];
  group?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOptionDeleteFilter = {
  and?: InputMaybe<Array<ProductOptionDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionDeleteFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionDeleteResponse = {
  __typename?: 'ProductOptionDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionEdge = {
  __typename?: 'ProductOptionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductOption */
  node: ProductOption;
};

export type ProductOptionFilter = {
  and?: InputMaybe<Array<ProductOptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  group?: InputMaybe<ProductOptionFilterProductOptionGroupFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionFilterProductOptionGroupFilter = {
  and?: InputMaybe<Array<ProductOptionFilterProductOptionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionFilterProductOptionGroupFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<ProductOptionGroupOptionsConnection>;
  optionsAggregate: Array<ProductOptionGroupOptionsAggregateResponse>;
  products?: Maybe<ProductOptionGroupProductsConnection>;
  productsAggregate: Array<ProductOptionGroupProductsAggregateResponse>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductOptionGroupOptionsArgs = {
  filter?: ProductOptionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductOptionSort>;
};


export type ProductOptionGroupOptionsAggregateArgs = {
  filter?: InputMaybe<ProductOptionAggregateFilter>;
};


export type ProductOptionGroupProductsArgs = {
  filter?: ProductFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type ProductOptionGroupProductsAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};

export type ProductOptionGroupAggregateFilter = {
  and?: InputMaybe<Array<ProductOptionGroupAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  options?: InputMaybe<ProductOptionGroupAggregateFilterProductOptionAggregateFilter>;
  or?: InputMaybe<Array<ProductOptionGroupAggregateFilter>>;
  products?: InputMaybe<ProductOptionGroupAggregateFilterProductAggregateFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<ProductOptionGroupAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupAggregateFilterProductOptionAggregateFilter = {
  and?: InputMaybe<Array<ProductOptionGroupAggregateFilterProductOptionAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupAggregateFilterProductOptionAggregateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupAggregateGroupBy = {
  __typename?: 'ProductOptionGroupAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductOptionGroupAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductOptionGroupAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductOptionGroupAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductOptionGroupAggregateResponse = {
  __typename?: 'ProductOptionGroupAggregateResponse';
  count?: Maybe<ProductOptionGroupCountAggregate>;
  groupBy?: Maybe<ProductOptionGroupAggregateGroupBy>;
  max?: Maybe<ProductOptionGroupMaxAggregate>;
  min?: Maybe<ProductOptionGroupMinAggregate>;
};

export type ProductOptionGroupConnection = {
  __typename?: 'ProductOptionGroupConnection';
  /** Array of edges. */
  edges: Array<ProductOptionGroupEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductOptionGroupCountAggregate = {
  __typename?: 'ProductOptionGroupCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductOptionGroupDto = {
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<ProductOptionDto>>;
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOptionGroupDeleteFilter = {
  and?: InputMaybe<Array<ProductOptionGroupDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupDeleteFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupDeleteResponse = {
  __typename?: 'ProductOptionGroupDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupEdge = {
  __typename?: 'ProductOptionGroupEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductOptionGroup */
  node: ProductOptionGroup;
};

export type ProductOptionGroupFilter = {
  and?: InputMaybe<Array<ProductOptionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  options?: InputMaybe<ProductOptionGroupFilterProductOptionFilter>;
  or?: InputMaybe<Array<ProductOptionGroupFilter>>;
  products?: InputMaybe<ProductOptionGroupFilterProductFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupFilterProductFilter = {
  and?: InputMaybe<Array<ProductOptionGroupFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupFilterProductOptionFilter = {
  and?: InputMaybe<Array<ProductOptionGroupFilterProductOptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupFilterProductOptionFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupMaxAggregate = {
  __typename?: 'ProductOptionGroupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupMinAggregate = {
  __typename?: 'ProductOptionGroupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupOptionsAggregateGroupBy = {
  __typename?: 'ProductOptionGroupOptionsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupOptionsAggregateResponse = {
  __typename?: 'ProductOptionGroupOptionsAggregateResponse';
  avg?: Maybe<ProductOptionGroupOptionsAvgAggregate>;
  count?: Maybe<ProductOptionGroupOptionsCountAggregate>;
  groupBy?: Maybe<ProductOptionGroupOptionsAggregateGroupBy>;
  max?: Maybe<ProductOptionGroupOptionsMaxAggregate>;
  min?: Maybe<ProductOptionGroupOptionsMinAggregate>;
  sum?: Maybe<ProductOptionGroupOptionsSumAggregate>;
};

export type ProductOptionGroupOptionsAvgAggregate = {
  __typename?: 'ProductOptionGroupOptionsAvgAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionGroupOptionsConnection = {
  __typename?: 'ProductOptionGroupOptionsConnection';
  /** Array of nodes. */
  nodes: Array<ProductOption>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductOptionGroupOptionsCountAggregate = {
  __typename?: 'ProductOptionGroupOptionsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  diffPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductOptionGroupOptionsMaxAggregate = {
  __typename?: 'ProductOptionGroupOptionsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupOptionsMinAggregate = {
  __typename?: 'ProductOptionGroupOptionsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupOptionsSumAggregate = {
  __typename?: 'ProductOptionGroupOptionsSumAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionGroupProductsAggregateGroupBy = {
  __typename?: 'ProductOptionGroupProductsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupProductsAggregateResponse = {
  __typename?: 'ProductOptionGroupProductsAggregateResponse';
  avg?: Maybe<ProductOptionGroupProductsAvgAggregate>;
  count?: Maybe<ProductOptionGroupProductsCountAggregate>;
  groupBy?: Maybe<ProductOptionGroupProductsAggregateGroupBy>;
  max?: Maybe<ProductOptionGroupProductsMaxAggregate>;
  min?: Maybe<ProductOptionGroupProductsMinAggregate>;
  sum?: Maybe<ProductOptionGroupProductsSumAggregate>;
};

export type ProductOptionGroupProductsAvgAggregate = {
  __typename?: 'ProductOptionGroupProductsAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionGroupProductsConnection = {
  __typename?: 'ProductOptionGroupProductsConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductOptionGroupProductsCountAggregate = {
  __typename?: 'ProductOptionGroupProductsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductOptionGroupProductsMaxAggregate = {
  __typename?: 'ProductOptionGroupProductsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupProductsMinAggregate = {
  __typename?: 'ProductOptionGroupProductsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupProductsSumAggregate = {
  __typename?: 'ProductOptionGroupProductsSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionGroupSort = {
  direction: SortDirection;
  field: ProductOptionGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductOptionGroupSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductOptionGroupUpdateFilter = {
  and?: InputMaybe<Array<ProductOptionGroupUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionGroupUpdateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductOptionGroupsAggregateGroupBy = {
  __typename?: 'ProductOptionGroupsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupsAggregateResponse = {
  __typename?: 'ProductOptionGroupsAggregateResponse';
  count?: Maybe<ProductOptionGroupsCountAggregate>;
  groupBy?: Maybe<ProductOptionGroupsAggregateGroupBy>;
  max?: Maybe<ProductOptionGroupsMaxAggregate>;
  min?: Maybe<ProductOptionGroupsMinAggregate>;
};

export type ProductOptionGroupsConnection = {
  __typename?: 'ProductOptionGroupsConnection';
  /** Array of nodes. */
  nodes: Array<ProductOptionGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductOptionGroupsCountAggregate = {
  __typename?: 'ProductOptionGroupsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductOptionGroupsMaxAggregate = {
  __typename?: 'ProductOptionGroupsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionGroupsMinAggregate = {
  __typename?: 'ProductOptionGroupsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionMaxAggregate = {
  __typename?: 'ProductOptionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionMinAggregate = {
  __typename?: 'ProductOptionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  diffPrice?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductOptionSort = {
  direction: SortDirection;
  field: ProductOptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductOptionSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DiffPrice = 'diffPrice',
  Id = 'id',
  Name = 'name',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductOptionSumAggregate = {
  __typename?: 'ProductOptionSumAggregate';
  diffPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionUpdateFilter = {
  and?: InputMaybe<Array<ProductOptionUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  diffPrice?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductOptionUpdateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  branchSaleChannel: BranchSaleChannel;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPriceAggregateFilter = {
  and?: InputMaybe<Array<ProductPriceAggregateFilter>>;
  branchSaleChannel?: InputMaybe<ProductPriceAggregateFilterBranchSaleChannelAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  product?: InputMaybe<ProductPriceAggregateFilterProductAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceAggregateFilterBranchSaleChannelAggregateFilter = {
  and?: InputMaybe<Array<ProductPriceAggregateFilterBranchSaleChannelAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceAggregateFilterBranchSaleChannelAggregateFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<ProductPriceAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductPriceAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceAggregateGroupBy = {
  __typename?: 'ProductPriceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductPriceAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductPriceAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductPriceAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductPriceAggregateResponse = {
  __typename?: 'ProductPriceAggregateResponse';
  avg?: Maybe<ProductPriceAvgAggregate>;
  count?: Maybe<ProductPriceCountAggregate>;
  groupBy?: Maybe<ProductPriceAggregateGroupBy>;
  max?: Maybe<ProductPriceMaxAggregate>;
  min?: Maybe<ProductPriceMinAggregate>;
  sum?: Maybe<ProductPriceSumAggregate>;
};

export type ProductPriceAvgAggregate = {
  __typename?: 'ProductPriceAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductPriceConnection = {
  __typename?: 'ProductPriceConnection';
  /** Array of edges. */
  edges: Array<ProductPriceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductPriceCountAggregate = {
  __typename?: 'ProductPriceCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductPriceDto = {
  branchSaleChannel: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  product: Scalars['ID']['input'];
};

export type ProductPriceDeleteFilter = {
  and?: InputMaybe<Array<ProductPriceDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceDeleteFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceDeleteResponse = {
  __typename?: 'ProductPriceDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPriceEdge = {
  __typename?: 'ProductPriceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductPrice */
  node: ProductPrice;
};

export type ProductPriceFilter = {
  and?: InputMaybe<Array<ProductPriceFilter>>;
  branchSaleChannel?: InputMaybe<ProductPriceFilterBranchSaleChannelFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  product?: InputMaybe<ProductPriceFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceFilterBranchSaleChannelFilter = {
  and?: InputMaybe<Array<ProductPriceFilterBranchSaleChannelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceFilterBranchSaleChannelFilter>>;
  saleChannel?: InputMaybe<SaleChannelFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceFilterProductFilter = {
  and?: InputMaybe<Array<ProductPriceFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductPriceFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductPriceImportInput = {
  branchId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
};

export type ProductPriceMaxAggregate = {
  __typename?: 'ProductPriceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPriceMinAggregate = {
  __typename?: 'ProductPriceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPriceSort = {
  direction: SortDirection;
  field: ProductPriceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductPriceSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Price = 'price',
  UpdatedAt = 'updatedAt'
}

export type ProductPriceSumAggregate = {
  __typename?: 'ProductPriceSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductPriceUpdateFilter = {
  and?: InputMaybe<Array<ProductPriceUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductPriceUpdateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Enabled = 'enabled',
  Id = 'id',
  Name = 'name',
  Price = 'price',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<ProductTypeProductsConnection>;
  productsAggregate: Array<ProductTypeProductsAggregateResponse>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductTypeProductsArgs = {
  filter?: ProductFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type ProductTypeProductsAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};

export type ProductTypeAggregateFilter = {
  and?: InputMaybe<Array<ProductTypeAggregateFilter>>;
  branch?: InputMaybe<ProductTypeAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeAggregateFilter>>;
  products?: InputMaybe<ProductTypeAggregateFilterProductAggregateFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<ProductTypeAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<ProductTypeAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeAggregateGroupBy = {
  __typename?: 'ProductTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductTypeAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductTypeAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductTypeAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductTypeAggregateResponse = {
  __typename?: 'ProductTypeAggregateResponse';
  count?: Maybe<ProductTypeCountAggregate>;
  groupBy?: Maybe<ProductTypeAggregateGroupBy>;
  max?: Maybe<ProductTypeMaxAggregate>;
  min?: Maybe<ProductTypeMinAggregate>;
};

export type ProductTypeConnection = {
  __typename?: 'ProductTypeConnection';
  /** Array of edges. */
  edges: Array<ProductTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductTypeCountAggregate = {
  __typename?: 'ProductTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeDto = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductTypeDeleteFilter = {
  and?: InputMaybe<Array<ProductTypeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeDeleteFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeDeleteResponse = {
  __typename?: 'ProductTypeDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeEdge = {
  __typename?: 'ProductTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductType */
  node: ProductType;
};

export type ProductTypeFilter = {
  and?: InputMaybe<Array<ProductTypeFilter>>;
  branch?: InputMaybe<ProductTypeFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeFilter>>;
  products?: InputMaybe<ProductTypeFilterProductFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeFilterOrgBranchFilter = {
  and?: InputMaybe<Array<ProductTypeFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeFilterProductFilter = {
  and?: InputMaybe<Array<ProductTypeFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductTypeMaxAggregate = {
  __typename?: 'ProductTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeMinAggregate = {
  __typename?: 'ProductTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeProductsAggregateGroupBy = {
  __typename?: 'ProductTypeProductsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeProductsAggregateResponse = {
  __typename?: 'ProductTypeProductsAggregateResponse';
  avg?: Maybe<ProductTypeProductsAvgAggregate>;
  count?: Maybe<ProductTypeProductsCountAggregate>;
  groupBy?: Maybe<ProductTypeProductsAggregateGroupBy>;
  max?: Maybe<ProductTypeProductsMaxAggregate>;
  min?: Maybe<ProductTypeProductsMinAggregate>;
  sum?: Maybe<ProductTypeProductsSumAggregate>;
};

export type ProductTypeProductsAvgAggregate = {
  __typename?: 'ProductTypeProductsAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductTypeProductsConnection = {
  __typename?: 'ProductTypeProductsConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductTypeProductsCountAggregate = {
  __typename?: 'ProductTypeProductsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeProductsMaxAggregate = {
  __typename?: 'ProductTypeProductsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeProductsMinAggregate = {
  __typename?: 'ProductTypeProductsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductTypeProductsSumAggregate = {
  __typename?: 'ProductTypeProductsSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductTypeSort = {
  direction: SortDirection;
  field: ProductTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductTypeSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductTypeUpdateFilter = {
  and?: InputMaybe<Array<ProductTypeUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeUpdateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnit = {
  __typename?: 'ProductUnit';
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<ProductUnitProductsConnection>;
  productsAggregate: Array<ProductUnitProductsAggregateResponse>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductUnitProductsArgs = {
  filter?: ProductFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type ProductUnitProductsAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};

export type ProductUnitAggregateFilter = {
  and?: InputMaybe<Array<ProductUnitAggregateFilter>>;
  branch?: InputMaybe<ProductUnitAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitAggregateFilter>>;
  products?: InputMaybe<ProductUnitAggregateFilterProductAggregateFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<ProductUnitAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitAggregateFilterOrgBranchAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitAggregateFilterProductAggregateFilter = {
  and?: InputMaybe<Array<ProductUnitAggregateFilterProductAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitAggregateFilterProductAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitAggregateGroupBy = {
  __typename?: 'ProductUnitAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductUnitAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ProductUnitAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ProductUnitAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ProductUnitAggregateResponse = {
  __typename?: 'ProductUnitAggregateResponse';
  count?: Maybe<ProductUnitCountAggregate>;
  groupBy?: Maybe<ProductUnitAggregateGroupBy>;
  max?: Maybe<ProductUnitMaxAggregate>;
  min?: Maybe<ProductUnitMinAggregate>;
};

export type ProductUnitConnection = {
  __typename?: 'ProductUnitConnection';
  /** Array of edges. */
  edges: Array<ProductUnitEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductUnitCountAggregate = {
  __typename?: 'ProductUnitCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductUnitDto = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUnitDeleteFilter = {
  and?: InputMaybe<Array<ProductUnitDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitDeleteFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitDeleteResponse = {
  __typename?: 'ProductUnitDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitEdge = {
  __typename?: 'ProductUnitEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProductUnit */
  node: ProductUnit;
};

export type ProductUnitFilter = {
  and?: InputMaybe<Array<ProductUnitFilter>>;
  branch?: InputMaybe<ProductUnitFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitFilter>>;
  products?: InputMaybe<ProductUnitFilterProductFilter>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitFilterOrgBranchFilter = {
  and?: InputMaybe<Array<ProductUnitFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitFilterOrgBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitFilterProductFilter = {
  and?: InputMaybe<Array<ProductUnitFilterProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUnitMaxAggregate = {
  __typename?: 'ProductUnitMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitMinAggregate = {
  __typename?: 'ProductUnitMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitProductsAggregateGroupBy = {
  __typename?: 'ProductUnitProductsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitProductsAggregateResponse = {
  __typename?: 'ProductUnitProductsAggregateResponse';
  avg?: Maybe<ProductUnitProductsAvgAggregate>;
  count?: Maybe<ProductUnitProductsCountAggregate>;
  groupBy?: Maybe<ProductUnitProductsAggregateGroupBy>;
  max?: Maybe<ProductUnitProductsMaxAggregate>;
  min?: Maybe<ProductUnitProductsMinAggregate>;
  sum?: Maybe<ProductUnitProductsSumAggregate>;
};

export type ProductUnitProductsAvgAggregate = {
  __typename?: 'ProductUnitProductsAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductUnitProductsConnection = {
  __typename?: 'ProductUnitProductsConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductUnitProductsCountAggregate = {
  __typename?: 'ProductUnitProductsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductUnitProductsMaxAggregate = {
  __typename?: 'ProductUnitProductsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitProductsMinAggregate = {
  __typename?: 'ProductUnitProductsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductUnitProductsSumAggregate = {
  __typename?: 'ProductUnitProductsSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductUnitSort = {
  direction: SortDirection;
  field: ProductUnitSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductUnitSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type ProductUnitUpdateFilter = {
  and?: InputMaybe<Array<ProductUnitUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitUpdateFilter>>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUpdateFilter = {
  and?: InputMaybe<Array<ProductUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUpdateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountAggregate: Array<AccountAggregateResponse>;
  accountPasswordReset: AccountPasswordReset;
  accountPasswordResetAggregate: Array<AccountPasswordResetAggregateResponse>;
  accountPasswordResets: AccountPasswordResetConnection;
  accountVerfication: AccountVerfication;
  accountVerficationAggregate: Array<AccountVerficationAggregateResponse>;
  accountVerfications: AccountVerficationConnection;
  accounts: AccountConnection;
  apiKey: ApiKey;
  apiKeyAggregate: Array<ApiKeyAggregateResponse>;
  apiKeys: ApiKeyConnection;
  branchSaleChannel: BranchSaleChannel;
  branchSaleChannelAggregate: Array<BranchSaleChannelAggregateResponse>;
  branchSaleChannels: BranchSaleChannelConnection;
  customer: Customer;
  customerAggregate: Array<CustomerAggregateResponse>;
  customers: CustomerConnection;
  file: File;
  fileAggregate: Array<FileAggregateResponse>;
  files: FileConnection;
  me: Account;
  media: MediaConnection;
  mediaAggregate: Array<MediaAggregateResponse>;
  order: Order;
  orderAggregate: Array<OrderAggregateResponse>;
  orderProduct: OrderProduct;
  orderProductAggregate: Array<OrderProductAggregateResponse>;
  orderProducts: OrderProductConnection;
  orders: OrderConnection;
  org: Org;
  orgAggregate: Array<OrgAggregateResponse>;
  orgBranch: OrgBranch;
  orgBranchAggregate: Array<OrgBranchAggregateResponse>;
  orgBranchMember: OrgBranchMember;
  orgBranchMemberAggregate: Array<OrgBranchMemberAggregateResponse>;
  orgBranchMembers: OrgBranchMemberConnection;
  orgBranches: OrgBranchConnection;
  orgMember: OrgMember;
  orgMemberAggregate: Array<OrgMemberAggregateResponse>;
  orgMembers: OrgMemberConnection;
  orgs: OrgConnection;
  product: Product;
  productAggregate: Array<ProductAggregateResponse>;
  productCategories: ProductCategoryConnection;
  productCategory: ProductCategory;
  productCategoryAggregate: Array<ProductCategoryAggregateResponse>;
  productOption: ProductOption;
  productOptionAggregate: Array<ProductOptionAggregateResponse>;
  productOptionGroup: ProductOptionGroup;
  productOptionGroupAggregate: Array<ProductOptionGroupAggregateResponse>;
  productOptionGroups: ProductOptionGroupConnection;
  productOptions: ProductOptionConnection;
  productPrice: ProductPrice;
  productPriceAggregate: Array<ProductPriceAggregateResponse>;
  productPrices: ProductPriceConnection;
  productType: ProductType;
  productTypeAggregate: Array<ProductTypeAggregateResponse>;
  productTypes: ProductTypeConnection;
  productUnit: ProductUnit;
  productUnitAggregate: Array<ProductUnitAggregateResponse>;
  productUnits: ProductUnitConnection;
  products: ProductConnection;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountAggregateArgs = {
  filter?: InputMaybe<AccountAggregateFilter>;
};


export type QueryAccountPasswordResetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountPasswordResetAggregateArgs = {
  filter?: InputMaybe<AccountPasswordResetAggregateFilter>;
};


export type QueryAccountPasswordResetsArgs = {
  filter?: AccountPasswordResetFilter;
  paging?: CursorPaging;
  sorting?: Array<AccountPasswordResetSort>;
};


export type QueryAccountVerficationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountVerficationAggregateArgs = {
  filter?: InputMaybe<AccountVerficationAggregateFilter>;
};


export type QueryAccountVerficationsArgs = {
  filter?: AccountVerficationFilter;
  paging?: CursorPaging;
  sorting?: Array<AccountVerficationSort>;
};


export type QueryAccountsArgs = {
  filter?: AccountFilter;
  paging?: CursorPaging;
  sorting?: Array<AccountSort>;
};


export type QueryApiKeyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApiKeyAggregateArgs = {
  filter?: InputMaybe<ApiKeyAggregateFilter>;
};


export type QueryApiKeysArgs = {
  filter?: ApiKeyFilter;
  paging?: CursorPaging;
  sorting?: Array<ApiKeySort>;
};


export type QueryBranchSaleChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBranchSaleChannelAggregateArgs = {
  filter?: InputMaybe<BranchSaleChannelAggregateFilter>;
};


export type QueryBranchSaleChannelsArgs = {
  filter?: BranchSaleChannelFilter;
  paging?: CursorPaging;
  sorting?: Array<BranchSaleChannelSort>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerAggregateArgs = {
  filter?: InputMaybe<CustomerAggregateFilter>;
};


export type QueryCustomersArgs = {
  filter?: CustomerFilter;
  paging?: CursorPaging;
  sorting?: Array<CustomerSort>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFileAggregateArgs = {
  filter?: InputMaybe<FileAggregateFilter>;
};


export type QueryFilesArgs = {
  filter?: FileFilter;
  paging?: CursorPaging;
  sorting?: Array<FileSort>;
};


export type QueryMediaArgs = {
  filter?: MediaFilter;
  paging?: CursorPaging;
  sorting?: Array<MediaSort>;
};


export type QueryMediaAggregateArgs = {
  filter?: InputMaybe<MediaAggregateFilter>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderAggregateArgs = {
  filter?: InputMaybe<OrderAggregateFilter>;
};


export type QueryOrderProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderProductAggregateArgs = {
  filter?: InputMaybe<OrderProductAggregateFilter>;
};


export type QueryOrderProductsArgs = {
  filter?: OrderProductFilter;
  paging?: CursorPaging;
  sorting?: Array<OrderProductSort>;
};


export type QueryOrdersArgs = {
  filter?: OrderFilter;
  paging?: CursorPaging;
  sorting?: Array<OrderSort>;
};


export type QueryOrgArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrgAggregateArgs = {
  filter?: InputMaybe<OrgAggregateFilter>;
};


export type QueryOrgBranchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrgBranchAggregateArgs = {
  filter?: InputMaybe<OrgBranchAggregateFilter>;
};


export type QueryOrgBranchMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrgBranchMemberAggregateArgs = {
  filter?: InputMaybe<OrgBranchMemberAggregateFilter>;
};


export type QueryOrgBranchMembersArgs = {
  filter?: OrgBranchMemberFilter;
  paging?: CursorPaging;
  sorting?: Array<OrgBranchMemberSort>;
};


export type QueryOrgBranchesArgs = {
  filter?: OrgBranchFilter;
  paging?: CursorPaging;
  sorting?: Array<OrgBranchSort>;
};


export type QueryOrgMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrgMemberAggregateArgs = {
  filter?: InputMaybe<OrgMemberAggregateFilter>;
};


export type QueryOrgMembersArgs = {
  filter?: OrgMemberFilter;
  paging?: CursorPaging;
  sorting?: Array<OrgMemberSort>;
};


export type QueryOrgsArgs = {
  filter?: OrgFilter;
  paging?: CursorPaging;
  sorting?: Array<OrgSort>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductAggregateArgs = {
  filter?: InputMaybe<ProductAggregateFilter>;
};


export type QueryProductCategoriesArgs = {
  filter?: ProductCategoryFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductCategorySort>;
};


export type QueryProductCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductCategoryAggregateArgs = {
  filter?: InputMaybe<ProductCategoryAggregateFilter>;
};


export type QueryProductOptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductOptionAggregateArgs = {
  filter?: InputMaybe<ProductOptionAggregateFilter>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductOptionGroupAggregateArgs = {
  filter?: InputMaybe<ProductOptionGroupAggregateFilter>;
};


export type QueryProductOptionGroupsArgs = {
  filter?: ProductOptionGroupFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductOptionGroupSort>;
};


export type QueryProductOptionsArgs = {
  filter?: ProductOptionFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductOptionSort>;
};


export type QueryProductPriceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductPriceAggregateArgs = {
  filter?: InputMaybe<ProductPriceAggregateFilter>;
};


export type QueryProductPricesArgs = {
  filter?: ProductPriceFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductPriceSort>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTypeAggregateArgs = {
  filter?: InputMaybe<ProductTypeAggregateFilter>;
};


export type QueryProductTypesArgs = {
  filter?: ProductTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductTypeSort>;
};


export type QueryProductUnitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductUnitAggregateArgs = {
  filter?: InputMaybe<ProductUnitAggregateFilter>;
};


export type QueryProductUnitsArgs = {
  filter?: ProductUnitFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductUnitSort>;
};


export type QueryProductsArgs = {
  filter?: ProductFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductSort>;
};

export enum SaleChannel {
  BeFood = 'BE_FOOD',
  Fabi = 'FABI',
  GrabFood = 'GRAB_FOOD',
  ShopeeFood = 'SHOPEE_FOOD'
}

export type SaleChannelFilterComparison = {
  eq?: InputMaybe<SaleChannel>;
  gt?: InputMaybe<SaleChannel>;
  gte?: InputMaybe<SaleChannel>;
  iLike?: InputMaybe<SaleChannel>;
  in?: InputMaybe<Array<SaleChannel>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SaleChannel>;
  lt?: InputMaybe<SaleChannel>;
  lte?: InputMaybe<SaleChannel>;
  neq?: InputMaybe<SaleChannel>;
  notILike?: InputMaybe<SaleChannel>;
  notIn?: InputMaybe<Array<SaleChannel>>;
  notLike?: InputMaybe<SaleChannel>;
};

export type SetAddressesOnCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetBranchesOnOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetMembersOnOrgBranchInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetMembersOnOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetOptionGroupsOnProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetOptionsOnOrderProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetOptionsOnProductOptionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetProductOnOrderProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetProductsOnProductCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetProductsOnProductOptionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetProductsOnProductTypeInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetProductsOnProductUnitInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetUnitOnProductInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManyAccountPasswordResetsInput = {
  /** Filter used to find fields to update */
  filter: AccountPasswordResetUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AccountPasswordResetDto;
};

export type UpdateManyAccountVerficationsInput = {
  /** Filter used to find fields to update */
  filter: AccountVerficationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AccountVerficationDto;
};

export type UpdateManyAccountsInput = {
  /** Filter used to find fields to update */
  filter: AccountUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AccountDto;
};

export type UpdateManyApiKeysInput = {
  /** Filter used to find fields to update */
  filter: ApiKeyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ApiKeyDto;
};

export type UpdateManyBranchSaleChannelsInput = {
  /** Filter used to find fields to update */
  filter: BranchSaleChannelUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: BranchSaleChannelDto;
};

export type UpdateManyCustomersInput = {
  /** Filter used to find fields to update */
  filter: CustomerUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CustomerDto;
};

export type UpdateManyFilesInput = {
  /** Filter used to find fields to update */
  filter: FileUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: FileDto;
};

export type UpdateManyMediaInput = {
  /** Filter used to find fields to update */
  filter: MediaUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: MediaDto;
};

export type UpdateManyOrderProductsInput = {
  /** Filter used to find fields to update */
  filter: OrderProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrderProductDto;
};

export type UpdateManyOrdersInput = {
  /** Filter used to find fields to update */
  filter: OrderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrderDto;
};

export type UpdateManyOrgBranchMembersInput = {
  /** Filter used to find fields to update */
  filter: OrgBranchMemberUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrgBranchMemberDto;
};

export type UpdateManyOrgBranchesInput = {
  /** Filter used to find fields to update */
  filter: OrgBranchUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrgBranchDto;
};

export type UpdateManyOrgMembersInput = {
  /** Filter used to find fields to update */
  filter: OrgMemberUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrgMemberDto;
};

export type UpdateManyOrgsInput = {
  /** Filter used to find fields to update */
  filter: OrgUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrgDto;
};

export type UpdateManyProductCategoriesInput = {
  /** Filter used to find fields to update */
  filter: ProductCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductCategoryDto;
};

export type UpdateManyProductOptionGroupsInput = {
  /** Filter used to find fields to update */
  filter: ProductOptionGroupUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductOptionGroupDto;
};

export type UpdateManyProductOptionsInput = {
  /** Filter used to find fields to update */
  filter: ProductOptionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductOptionDto;
};

export type UpdateManyProductPricesInput = {
  /** Filter used to find fields to update */
  filter: ProductPriceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductPriceDto;
};

export type UpdateManyProductTypesInput = {
  /** Filter used to find fields to update */
  filter: ProductTypeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductTypeDto;
};

export type UpdateManyProductUnitsInput = {
  /** Filter used to find fields to update */
  filter: ProductUnitUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductUnitDto;
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductDto;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateOneAccountInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: AccountDto;
};

export type UpdateOneAccountPasswordResetInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: AccountPasswordResetDto;
};

export type UpdateOneAccountVerficationInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: AccountVerficationDto;
};

export type UpdateOneApiKeyInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ApiKeyDto;
};

export type UpdateOneBranchSaleChannelInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: BranchSaleChannelDto;
};

export type UpdateOneCustomerInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CustomerDto;
};

export type UpdateOneFileInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: FileDto;
};

export type UpdateOneMediaInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: MediaDto;
};

export type UpdateOneOrderInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrderDto;
};

export type UpdateOneOrderProductInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrderProductDto;
};

export type UpdateOneOrgBranchInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrgBranchDto;
};

export type UpdateOneOrgBranchMemberInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrgBranchMemberDto;
};

export type UpdateOneOrgInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrgDto;
};

export type UpdateOneOrgMemberInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrgMemberDto;
};

export type UpdateOneProductCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductCategoryDto;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductDto;
};

export type UpdateOneProductOptionGroupInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductOptionGroupDto;
};

export type UpdateOneProductOptionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductOptionDto;
};

export type UpdateOneProductPriceInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductPriceDto;
};

export type UpdateOneProductTypeInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductTypeDto;
};

export type UpdateOneProductUnitInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ProductUnitDto;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountAggregateFilter: AccountAggregateFilter;
  AccountAggregateGroupBy: ResolverTypeWrapper<AccountAggregateGroupBy>;
  AccountAggregateResponse: ResolverTypeWrapper<AccountAggregateResponse>;
  AccountAvgAggregate: ResolverTypeWrapper<AccountAvgAggregate>;
  AccountConnection: ResolverTypeWrapper<AccountConnection>;
  AccountCountAggregate: ResolverTypeWrapper<AccountCountAggregate>;
  AccountDTO: AccountDto;
  AccountDeleteFilter: AccountDeleteFilter;
  AccountDeleteResponse: ResolverTypeWrapper<AccountDeleteResponse>;
  AccountEdge: ResolverTypeWrapper<AccountEdge>;
  AccountFilter: AccountFilter;
  AccountMaxAggregate: ResolverTypeWrapper<AccountMaxAggregate>;
  AccountMinAggregate: ResolverTypeWrapper<AccountMinAggregate>;
  AccountPasswordReset: ResolverTypeWrapper<AccountPasswordReset>;
  AccountPasswordResetAggregateFilter: AccountPasswordResetAggregateFilter;
  AccountPasswordResetAggregateFilterAccountAggregateFilter: AccountPasswordResetAggregateFilterAccountAggregateFilter;
  AccountPasswordResetAggregateGroupBy: ResolverTypeWrapper<AccountPasswordResetAggregateGroupBy>;
  AccountPasswordResetAggregateResponse: ResolverTypeWrapper<AccountPasswordResetAggregateResponse>;
  AccountPasswordResetConnection: ResolverTypeWrapper<AccountPasswordResetConnection>;
  AccountPasswordResetCountAggregate: ResolverTypeWrapper<AccountPasswordResetCountAggregate>;
  AccountPasswordResetDTO: AccountPasswordResetDto;
  AccountPasswordResetDeleteFilter: AccountPasswordResetDeleteFilter;
  AccountPasswordResetDeleteResponse: ResolverTypeWrapper<AccountPasswordResetDeleteResponse>;
  AccountPasswordResetEdge: ResolverTypeWrapper<AccountPasswordResetEdge>;
  AccountPasswordResetFilter: AccountPasswordResetFilter;
  AccountPasswordResetFilterAccountFilter: AccountPasswordResetFilterAccountFilter;
  AccountPasswordResetMaxAggregate: ResolverTypeWrapper<AccountPasswordResetMaxAggregate>;
  AccountPasswordResetMinAggregate: ResolverTypeWrapper<AccountPasswordResetMinAggregate>;
  AccountPasswordResetSort: AccountPasswordResetSort;
  AccountPasswordResetSortFields: AccountPasswordResetSortFields;
  AccountPasswordResetUpdateFilter: AccountPasswordResetUpdateFilter;
  AccountRole: AccountRole;
  AccountRoleFilterComparison: AccountRoleFilterComparison;
  AccountSort: AccountSort;
  AccountSortFields: AccountSortFields;
  AccountSumAggregate: ResolverTypeWrapper<AccountSumAggregate>;
  AccountUpdateFilter: AccountUpdateFilter;
  AccountVerfication: ResolverTypeWrapper<AccountVerfication>;
  AccountVerficationAggregateFilter: AccountVerficationAggregateFilter;
  AccountVerficationAggregateFilterAccountAggregateFilter: AccountVerficationAggregateFilterAccountAggregateFilter;
  AccountVerficationAggregateGroupBy: ResolverTypeWrapper<AccountVerficationAggregateGroupBy>;
  AccountVerficationAggregateResponse: ResolverTypeWrapper<AccountVerficationAggregateResponse>;
  AccountVerficationConnection: ResolverTypeWrapper<AccountVerficationConnection>;
  AccountVerficationCountAggregate: ResolverTypeWrapper<AccountVerficationCountAggregate>;
  AccountVerficationDTO: AccountVerficationDto;
  AccountVerficationDeleteFilter: AccountVerficationDeleteFilter;
  AccountVerficationDeleteResponse: ResolverTypeWrapper<AccountVerficationDeleteResponse>;
  AccountVerficationEdge: ResolverTypeWrapper<AccountVerficationEdge>;
  AccountVerficationFilter: AccountVerficationFilter;
  AccountVerficationFilterAccountFilter: AccountVerficationFilterAccountFilter;
  AccountVerficationMaxAggregate: ResolverTypeWrapper<AccountVerficationMaxAggregate>;
  AccountVerficationMinAggregate: ResolverTypeWrapper<AccountVerficationMinAggregate>;
  AccountVerficationSort: AccountVerficationSort;
  AccountVerficationSortFields: AccountVerficationSortFields;
  AccountVerficationUpdateFilter: AccountVerficationUpdateFilter;
  AddAddressesToCustomerInput: AddAddressesToCustomerInput;
  AddBranchesToOrgInput: AddBranchesToOrgInput;
  AddMembersToOrgBranchInput: AddMembersToOrgBranchInput;
  AddMembersToOrgInput: AddMembersToOrgInput;
  AddOptionGroupsToProductInput: AddOptionGroupsToProductInput;
  AddOptionsToOrderProductInput: AddOptionsToOrderProductInput;
  AddOptionsToProductOptionGroupInput: AddOptionsToProductOptionGroupInput;
  AddProductsToProductCategoryInput: AddProductsToProductCategoryInput;
  AddProductsToProductOptionGroupInput: AddProductsToProductOptionGroupInput;
  AddProductsToProductTypeInput: AddProductsToProductTypeInput;
  AddProductsToProductUnitInput: AddProductsToProductUnitInput;
  ApiKey: ResolverTypeWrapper<ApiKey>;
  ApiKeyAggregateFilter: ApiKeyAggregateFilter;
  ApiKeyAggregateGroupBy: ResolverTypeWrapper<ApiKeyAggregateGroupBy>;
  ApiKeyAggregateResponse: ResolverTypeWrapper<ApiKeyAggregateResponse>;
  ApiKeyConnection: ResolverTypeWrapper<ApiKeyConnection>;
  ApiKeyCountAggregate: ResolverTypeWrapper<ApiKeyCountAggregate>;
  ApiKeyDTO: ApiKeyDto;
  ApiKeyDeleteFilter: ApiKeyDeleteFilter;
  ApiKeyDeleteResponse: ResolverTypeWrapper<ApiKeyDeleteResponse>;
  ApiKeyEdge: ResolverTypeWrapper<ApiKeyEdge>;
  ApiKeyFilter: ApiKeyFilter;
  ApiKeyMaxAggregate: ResolverTypeWrapper<ApiKeyMaxAggregate>;
  ApiKeyMinAggregate: ResolverTypeWrapper<ApiKeyMinAggregate>;
  ApiKeySort: ApiKeySort;
  ApiKeySortFields: ApiKeySortFields;
  ApiKeyUpdateFilter: ApiKeyUpdateFilter;
  AuthConfirmPasswordResetInput: AuthConfirmPasswordResetInput;
  AuthLoginInput: AuthLoginInput;
  AuthRefreshTokenInput: AuthRefreshTokenInput;
  AuthRegisterInput: AuthRegisterInput;
  AuthRequestPasswordResetInput: AuthRequestPasswordResetInput;
  AuthResendVerificationInput: AuthResendVerificationInput;
  AuthResendVerificationWithEmailInput: AuthResendVerificationWithEmailInput;
  AuthVerifyAccountInput: AuthVerifyAccountInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFieldComparison: BooleanFieldComparison;
  BranchSaleChannel: ResolverTypeWrapper<BranchSaleChannel>;
  BranchSaleChannelAggregateFilter: BranchSaleChannelAggregateFilter;
  BranchSaleChannelAggregateFilterOrgBranchAggregateFilter: BranchSaleChannelAggregateFilterOrgBranchAggregateFilter;
  BranchSaleChannelAggregateGroupBy: ResolverTypeWrapper<BranchSaleChannelAggregateGroupBy>;
  BranchSaleChannelAggregateResponse: ResolverTypeWrapper<BranchSaleChannelAggregateResponse>;
  BranchSaleChannelAvgAggregate: ResolverTypeWrapper<BranchSaleChannelAvgAggregate>;
  BranchSaleChannelConnection: ResolverTypeWrapper<BranchSaleChannelConnection>;
  BranchSaleChannelCountAggregate: ResolverTypeWrapper<BranchSaleChannelCountAggregate>;
  BranchSaleChannelDTO: BranchSaleChannelDto;
  BranchSaleChannelDeleteFilter: BranchSaleChannelDeleteFilter;
  BranchSaleChannelDeleteResponse: ResolverTypeWrapper<BranchSaleChannelDeleteResponse>;
  BranchSaleChannelEdge: ResolverTypeWrapper<BranchSaleChannelEdge>;
  BranchSaleChannelFilter: BranchSaleChannelFilter;
  BranchSaleChannelFilterOrgBranchFilter: BranchSaleChannelFilterOrgBranchFilter;
  BranchSaleChannelMaxAggregate: ResolverTypeWrapper<BranchSaleChannelMaxAggregate>;
  BranchSaleChannelMinAggregate: ResolverTypeWrapper<BranchSaleChannelMinAggregate>;
  BranchSaleChannelSort: BranchSaleChannelSort;
  BranchSaleChannelSortFields: BranchSaleChannelSortFields;
  BranchSaleChannelSumAggregate: ResolverTypeWrapper<BranchSaleChannelSumAggregate>;
  BranchSaleChannelUpdateFilter: BranchSaleChannelUpdateFilter;
  ConnectionCursor: ResolverTypeWrapper<Scalars['ConnectionCursor']['output']>;
  CreateManyAccountPasswordResetsInput: CreateManyAccountPasswordResetsInput;
  CreateManyAccountVerficationsInput: CreateManyAccountVerficationsInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  CreateManyApiKeysInput: CreateManyApiKeysInput;
  CreateManyBranchSaleChannelsInput: CreateManyBranchSaleChannelsInput;
  CreateManyCustomersInput: CreateManyCustomersInput;
  CreateManyFilesInput: CreateManyFilesInput;
  CreateManyMediaInput: CreateManyMediaInput;
  CreateManyOrderProductsInput: CreateManyOrderProductsInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  CreateManyOrgBranchMembersInput: CreateManyOrgBranchMembersInput;
  CreateManyOrgBranchesInput: CreateManyOrgBranchesInput;
  CreateManyOrgMembersInput: CreateManyOrgMembersInput;
  CreateManyOrgsInput: CreateManyOrgsInput;
  CreateManyProductCategoriesInput: CreateManyProductCategoriesInput;
  CreateManyProductOptionGroupsInput: CreateManyProductOptionGroupsInput;
  CreateManyProductOptionsInput: CreateManyProductOptionsInput;
  CreateManyProductPricesInput: CreateManyProductPricesInput;
  CreateManyProductTypesInput: CreateManyProductTypesInput;
  CreateManyProductUnitsInput: CreateManyProductUnitsInput;
  CreateManyProductsInput: CreateManyProductsInput;
  CreateOneAccountInput: CreateOneAccountInput;
  CreateOneAccountPasswordResetInput: CreateOneAccountPasswordResetInput;
  CreateOneAccountVerficationInput: CreateOneAccountVerficationInput;
  CreateOneApiKeyInput: CreateOneApiKeyInput;
  CreateOneBranchSaleChannelInput: CreateOneBranchSaleChannelInput;
  CreateOneCustomerInput: CreateOneCustomerInput;
  CreateOneFileInput: CreateOneFileInput;
  CreateOneMediaInput: CreateOneMediaInput;
  CreateOneOrderInput: CreateOneOrderInput;
  CreateOneOrderProductInput: CreateOneOrderProductInput;
  CreateOneOrgBranchInput: CreateOneOrgBranchInput;
  CreateOneOrgBranchMemberInput: CreateOneOrgBranchMemberInput;
  CreateOneOrgInput: CreateOneOrgInput;
  CreateOneOrgMemberInput: CreateOneOrgMemberInput;
  CreateOneProductCategoryInput: CreateOneProductCategoryInput;
  CreateOneProductInput: CreateOneProductInput;
  CreateOneProductOptionGroupInput: CreateOneProductOptionGroupInput;
  CreateOneProductOptionInput: CreateOneProductOptionInput;
  CreateOneProductPriceInput: CreateOneProductPriceInput;
  CreateOneProductTypeInput: CreateOneProductTypeInput;
  CreateOneProductUnitInput: CreateOneProductUnitInput;
  CursorPaging: CursorPaging;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  CustomerAddressAggregateFilter: CustomerAddressAggregateFilter;
  CustomerAddressAggregateFilterCustomerAggregateFilter: CustomerAddressAggregateFilterCustomerAggregateFilter;
  CustomerAddressDTO: CustomerAddressDto;
  CustomerAddressFilter: CustomerAddressFilter;
  CustomerAddressFilterCustomerFilter: CustomerAddressFilterCustomerFilter;
  CustomerAddressSort: CustomerAddressSort;
  CustomerAddressSortFields: CustomerAddressSortFields;
  CustomerAddressesAggregateGroupBy: ResolverTypeWrapper<CustomerAddressesAggregateGroupBy>;
  CustomerAddressesAggregateResponse: ResolverTypeWrapper<CustomerAddressesAggregateResponse>;
  CustomerAddressesAvgAggregate: ResolverTypeWrapper<CustomerAddressesAvgAggregate>;
  CustomerAddressesConnection: ResolverTypeWrapper<CustomerAddressesConnection>;
  CustomerAddressesCountAggregate: ResolverTypeWrapper<CustomerAddressesCountAggregate>;
  CustomerAddressesMaxAggregate: ResolverTypeWrapper<CustomerAddressesMaxAggregate>;
  CustomerAddressesMinAggregate: ResolverTypeWrapper<CustomerAddressesMinAggregate>;
  CustomerAddressesSumAggregate: ResolverTypeWrapper<CustomerAddressesSumAggregate>;
  CustomerAggregateFilter: CustomerAggregateFilter;
  CustomerAggregateFilterCustomerAddressAggregateFilter: CustomerAggregateFilterCustomerAddressAggregateFilter;
  CustomerAggregateGroupBy: ResolverTypeWrapper<CustomerAggregateGroupBy>;
  CustomerAggregateResponse: ResolverTypeWrapper<CustomerAggregateResponse>;
  CustomerAvgAggregate: ResolverTypeWrapper<CustomerAvgAggregate>;
  CustomerConnection: ResolverTypeWrapper<CustomerConnection>;
  CustomerCountAggregate: ResolverTypeWrapper<CustomerCountAggregate>;
  CustomerDTO: CustomerDto;
  CustomerDeleteFilter: CustomerDeleteFilter;
  CustomerDeleteResponse: ResolverTypeWrapper<CustomerDeleteResponse>;
  CustomerEdge: ResolverTypeWrapper<CustomerEdge>;
  CustomerFilter: CustomerFilter;
  CustomerFilterCustomerAddressFilter: CustomerFilterCustomerAddressFilter;
  CustomerGender: CustomerGender;
  CustomerGenderFilterComparison: CustomerGenderFilterComparison;
  CustomerMaxAggregate: ResolverTypeWrapper<CustomerMaxAggregate>;
  CustomerMinAggregate: ResolverTypeWrapper<CustomerMinAggregate>;
  CustomerSort: CustomerSort;
  CustomerSortFields: CustomerSortFields;
  CustomerSumAggregate: ResolverTypeWrapper<CustomerSumAggregate>;
  CustomerUpdateFilter: CustomerUpdateFilter;
  DateFieldComparison: DateFieldComparison;
  DateFieldComparisonBetween: DateFieldComparisonBetween;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteManyAccountPasswordResetsInput: DeleteManyAccountPasswordResetsInput;
  DeleteManyAccountVerficationsInput: DeleteManyAccountVerficationsInput;
  DeleteManyAccountsInput: DeleteManyAccountsInput;
  DeleteManyApiKeysInput: DeleteManyApiKeysInput;
  DeleteManyBranchSaleChannelsInput: DeleteManyBranchSaleChannelsInput;
  DeleteManyCustomersInput: DeleteManyCustomersInput;
  DeleteManyFilesInput: DeleteManyFilesInput;
  DeleteManyMediaInput: DeleteManyMediaInput;
  DeleteManyOrderProductsInput: DeleteManyOrderProductsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  DeleteManyOrgBranchMembersInput: DeleteManyOrgBranchMembersInput;
  DeleteManyOrgBranchesInput: DeleteManyOrgBranchesInput;
  DeleteManyOrgMembersInput: DeleteManyOrgMembersInput;
  DeleteManyOrgsInput: DeleteManyOrgsInput;
  DeleteManyProductCategoriesInput: DeleteManyProductCategoriesInput;
  DeleteManyProductOptionGroupsInput: DeleteManyProductOptionGroupsInput;
  DeleteManyProductOptionsInput: DeleteManyProductOptionsInput;
  DeleteManyProductPricesInput: DeleteManyProductPricesInput;
  DeleteManyProductTypesInput: DeleteManyProductTypesInput;
  DeleteManyProductUnitsInput: DeleteManyProductUnitsInput;
  DeleteManyProductsInput: DeleteManyProductsInput;
  DeleteManyResponse: ResolverTypeWrapper<DeleteManyResponse>;
  DeleteOneAccountInput: DeleteOneAccountInput;
  DeleteOneAccountPasswordResetInput: DeleteOneAccountPasswordResetInput;
  DeleteOneAccountVerficationInput: DeleteOneAccountVerficationInput;
  DeleteOneApiKeyInput: DeleteOneApiKeyInput;
  DeleteOneBranchSaleChannelInput: DeleteOneBranchSaleChannelInput;
  DeleteOneCustomerInput: DeleteOneCustomerInput;
  DeleteOneFileInput: DeleteOneFileInput;
  DeleteOneMediaInput: DeleteOneMediaInput;
  DeleteOneOrderInput: DeleteOneOrderInput;
  DeleteOneOrderProductInput: DeleteOneOrderProductInput;
  DeleteOneOrgBranchInput: DeleteOneOrgBranchInput;
  DeleteOneOrgBranchMemberInput: DeleteOneOrgBranchMemberInput;
  DeleteOneOrgInput: DeleteOneOrgInput;
  DeleteOneOrgMemberInput: DeleteOneOrgMemberInput;
  DeleteOneProductCategoryInput: DeleteOneProductCategoryInput;
  DeleteOneProductInput: DeleteOneProductInput;
  DeleteOneProductOptionGroupInput: DeleteOneProductOptionGroupInput;
  DeleteOneProductOptionInput: DeleteOneProductOptionInput;
  DeleteOneProductPriceInput: DeleteOneProductPriceInput;
  DeleteOneProductTypeInput: DeleteOneProductTypeInput;
  DeleteOneProductUnitInput: DeleteOneProductUnitInput;
  File: ResolverTypeWrapper<File>;
  FileAggregateFilter: FileAggregateFilter;
  FileAggregateFilterAccountAggregateFilter: FileAggregateFilterAccountAggregateFilter;
  FileAggregateGroupBy: ResolverTypeWrapper<FileAggregateGroupBy>;
  FileAggregateResponse: ResolverTypeWrapper<FileAggregateResponse>;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileCountAggregate: ResolverTypeWrapper<FileCountAggregate>;
  FileDTO: FileDto;
  FileDeleteFilter: FileDeleteFilter;
  FileDeleteResponse: ResolverTypeWrapper<FileDeleteResponse>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  FileFilter: FileFilter;
  FileFilterAccountFilter: FileFilterAccountFilter;
  FileMaxAggregate: ResolverTypeWrapper<FileMaxAggregate>;
  FileMinAggregate: ResolverTypeWrapper<FileMinAggregate>;
  FileSort: FileSort;
  FileSortFields: FileSortFields;
  FileUpdateFilter: FileUpdateFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GroupBy: GroupBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilterComparison: IdFilterComparison;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterComparison: JsonFilterComparison;
  LoginResult: ResolverTypeWrapper<LoginResult>;
  Media: ResolverTypeWrapper<Media>;
  MediaAggregateFilter: MediaAggregateFilter;
  MediaAggregateFilterAccountAggregateFilter: MediaAggregateFilterAccountAggregateFilter;
  MediaAggregateGroupBy: ResolverTypeWrapper<MediaAggregateGroupBy>;
  MediaAggregateResponse: ResolverTypeWrapper<MediaAggregateResponse>;
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaCountAggregate: ResolverTypeWrapper<MediaCountAggregate>;
  MediaDTO: MediaDto;
  MediaDeleteFilter: MediaDeleteFilter;
  MediaDeleteResponse: ResolverTypeWrapper<MediaDeleteResponse>;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  MediaFilter: MediaFilter;
  MediaFilterAccountFilter: MediaFilterAccountFilter;
  MediaMaxAggregate: ResolverTypeWrapper<MediaMaxAggregate>;
  MediaMinAggregate: ResolverTypeWrapper<MediaMinAggregate>;
  MediaSort: MediaSort;
  MediaSortFields: MediaSortFields;
  MediaUpdateFilter: MediaUpdateFilter;
  Mutation: ResolverTypeWrapper<{}>;
  NumberFieldComparison: NumberFieldComparison;
  NumberFieldComparisonBetween: NumberFieldComparisonBetween;
  OffsetPageInfo: ResolverTypeWrapper<OffsetPageInfo>;
  OffsetPaging: OffsetPaging;
  Order: ResolverTypeWrapper<Order>;
  OrderAggregateFilter: OrderAggregateFilter;
  OrderAggregateFilterBranchSaleChannelAggregateFilter: OrderAggregateFilterBranchSaleChannelAggregateFilter;
  OrderAggregateFilterCustomerAggregateFilter: OrderAggregateFilterCustomerAggregateFilter;
  OrderAggregateFilterOrgBranchAggregateFilter: OrderAggregateFilterOrgBranchAggregateFilter;
  OrderAggregateGroupBy: ResolverTypeWrapper<OrderAggregateGroupBy>;
  OrderAggregateResponse: ResolverTypeWrapper<OrderAggregateResponse>;
  OrderAvgAggregate: ResolverTypeWrapper<OrderAvgAggregate>;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderCountAggregate: ResolverTypeWrapper<OrderCountAggregate>;
  OrderDTO: OrderDto;
  OrderDeleteFilter: OrderDeleteFilter;
  OrderDeleteResponse: ResolverTypeWrapper<OrderDeleteResponse>;
  OrderEdge: ResolverTypeWrapper<OrderEdge>;
  OrderFilter: OrderFilter;
  OrderFilterBranchSaleChannelFilter: OrderFilterBranchSaleChannelFilter;
  OrderFilterCustomerFilter: OrderFilterCustomerFilter;
  OrderFilterOrgBranchFilter: OrderFilterOrgBranchFilter;
  OrderImportInput: OrderImportInput;
  OrderMaxAggregate: ResolverTypeWrapper<OrderMaxAggregate>;
  OrderMinAggregate: ResolverTypeWrapper<OrderMinAggregate>;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
  OrderProductAggregateFilter: OrderProductAggregateFilter;
  OrderProductAggregateFilterOrderAggregateFilter: OrderProductAggregateFilterOrderAggregateFilter;
  OrderProductAggregateFilterProductAggregateFilter: OrderProductAggregateFilterProductAggregateFilter;
  OrderProductAggregateFilterProductOptionAggregateFilter: OrderProductAggregateFilterProductOptionAggregateFilter;
  OrderProductAggregateGroupBy: ResolverTypeWrapper<OrderProductAggregateGroupBy>;
  OrderProductAggregateResponse: ResolverTypeWrapper<OrderProductAggregateResponse>;
  OrderProductAvgAggregate: ResolverTypeWrapper<OrderProductAvgAggregate>;
  OrderProductConnection: ResolverTypeWrapper<OrderProductConnection>;
  OrderProductCountAggregate: ResolverTypeWrapper<OrderProductCountAggregate>;
  OrderProductDTO: OrderProductDto;
  OrderProductDeleteFilter: OrderProductDeleteFilter;
  OrderProductDeleteResponse: ResolverTypeWrapper<OrderProductDeleteResponse>;
  OrderProductEdge: ResolverTypeWrapper<OrderProductEdge>;
  OrderProductFilter: OrderProductFilter;
  OrderProductFilterOrderFilter: OrderProductFilterOrderFilter;
  OrderProductFilterProductFilter: OrderProductFilterProductFilter;
  OrderProductFilterProductOptionFilter: OrderProductFilterProductOptionFilter;
  OrderProductMaxAggregate: ResolverTypeWrapper<OrderProductMaxAggregate>;
  OrderProductMinAggregate: ResolverTypeWrapper<OrderProductMinAggregate>;
  OrderProductOptionsAggregateGroupBy: ResolverTypeWrapper<OrderProductOptionsAggregateGroupBy>;
  OrderProductOptionsAggregateResponse: ResolverTypeWrapper<OrderProductOptionsAggregateResponse>;
  OrderProductOptionsAvgAggregate: ResolverTypeWrapper<OrderProductOptionsAvgAggregate>;
  OrderProductOptionsConnection: ResolverTypeWrapper<OrderProductOptionsConnection>;
  OrderProductOptionsCountAggregate: ResolverTypeWrapper<OrderProductOptionsCountAggregate>;
  OrderProductOptionsMaxAggregate: ResolverTypeWrapper<OrderProductOptionsMaxAggregate>;
  OrderProductOptionsMinAggregate: ResolverTypeWrapper<OrderProductOptionsMinAggregate>;
  OrderProductOptionsSumAggregate: ResolverTypeWrapper<OrderProductOptionsSumAggregate>;
  OrderProductSort: OrderProductSort;
  OrderProductSortFields: OrderProductSortFields;
  OrderProductSumAggregate: ResolverTypeWrapper<OrderProductSumAggregate>;
  OrderProductUpdateFilter: OrderProductUpdateFilter;
  OrderSort: OrderSort;
  OrderSortFields: OrderSortFields;
  OrderSumAggregate: ResolverTypeWrapper<OrderSumAggregate>;
  OrderUpdateFilter: OrderUpdateFilter;
  Org: ResolverTypeWrapper<Org>;
  OrgAggregateFilter: OrgAggregateFilter;
  OrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateGroupBy: ResolverTypeWrapper<OrgAggregateGroupBy>;
  OrgAggregateResponse: ResolverTypeWrapper<OrgAggregateResponse>;
  OrgAvgAggregate: ResolverTypeWrapper<OrgAvgAggregate>;
  OrgBranch: ResolverTypeWrapper<OrgBranch>;
  OrgBranchAggregateFilter: OrgBranchAggregateFilter;
  OrgBranchAggregateFilterOrgAggregateFilter: OrgBranchAggregateFilterOrgAggregateFilter;
  OrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgBranchAggregateGroupBy: ResolverTypeWrapper<OrgBranchAggregateGroupBy>;
  OrgBranchAggregateResponse: ResolverTypeWrapper<OrgBranchAggregateResponse>;
  OrgBranchConnection: ResolverTypeWrapper<OrgBranchConnection>;
  OrgBranchCountAggregate: ResolverTypeWrapper<OrgBranchCountAggregate>;
  OrgBranchDTO: OrgBranchDto;
  OrgBranchDeleteFilter: OrgBranchDeleteFilter;
  OrgBranchDeleteResponse: ResolverTypeWrapper<OrgBranchDeleteResponse>;
  OrgBranchEdge: ResolverTypeWrapper<OrgBranchEdge>;
  OrgBranchFilter: OrgBranchFilter;
  OrgBranchFilterOrgBranchMemberFilter: OrgBranchFilterOrgBranchMemberFilter;
  OrgBranchFilterOrgFilter: OrgBranchFilterOrgFilter;
  OrgBranchMaxAggregate: ResolverTypeWrapper<OrgBranchMaxAggregate>;
  OrgBranchMember: ResolverTypeWrapper<OrgBranchMember>;
  OrgBranchMemberAggregateFilter: OrgBranchMemberAggregateFilter;
  OrgBranchMemberAggregateFilterAccountAggregateFilter: OrgBranchMemberAggregateFilterAccountAggregateFilter;
  OrgBranchMemberAggregateFilterOrgBranchAggregateFilter: OrgBranchMemberAggregateFilterOrgBranchAggregateFilter;
  OrgBranchMemberAggregateGroupBy: ResolverTypeWrapper<OrgBranchMemberAggregateGroupBy>;
  OrgBranchMemberAggregateResponse: ResolverTypeWrapper<OrgBranchMemberAggregateResponse>;
  OrgBranchMemberAvgAggregate: ResolverTypeWrapper<OrgBranchMemberAvgAggregate>;
  OrgBranchMemberConnection: ResolverTypeWrapper<OrgBranchMemberConnection>;
  OrgBranchMemberCountAggregate: ResolverTypeWrapper<OrgBranchMemberCountAggregate>;
  OrgBranchMemberDTO: OrgBranchMemberDto;
  OrgBranchMemberDeleteFilter: OrgBranchMemberDeleteFilter;
  OrgBranchMemberDeleteResponse: ResolverTypeWrapper<OrgBranchMemberDeleteResponse>;
  OrgBranchMemberEdge: ResolverTypeWrapper<OrgBranchMemberEdge>;
  OrgBranchMemberFilter: OrgBranchMemberFilter;
  OrgBranchMemberFilterAccountFilter: OrgBranchMemberFilterAccountFilter;
  OrgBranchMemberFilterOrgBranchFilter: OrgBranchMemberFilterOrgBranchFilter;
  OrgBranchMemberMaxAggregate: ResolverTypeWrapper<OrgBranchMemberMaxAggregate>;
  OrgBranchMemberMinAggregate: ResolverTypeWrapper<OrgBranchMemberMinAggregate>;
  OrgBranchMemberSort: OrgBranchMemberSort;
  OrgBranchMemberSortFields: OrgBranchMemberSortFields;
  OrgBranchMemberSumAggregate: ResolverTypeWrapper<OrgBranchMemberSumAggregate>;
  OrgBranchMemberUpdateFilter: OrgBranchMemberUpdateFilter;
  OrgBranchMembersAggregateGroupBy: ResolverTypeWrapper<OrgBranchMembersAggregateGroupBy>;
  OrgBranchMembersAggregateResponse: ResolverTypeWrapper<OrgBranchMembersAggregateResponse>;
  OrgBranchMembersAvgAggregate: ResolverTypeWrapper<OrgBranchMembersAvgAggregate>;
  OrgBranchMembersConnection: ResolverTypeWrapper<OrgBranchMembersConnection>;
  OrgBranchMembersCountAggregate: ResolverTypeWrapper<OrgBranchMembersCountAggregate>;
  OrgBranchMembersMaxAggregate: ResolverTypeWrapper<OrgBranchMembersMaxAggregate>;
  OrgBranchMembersMinAggregate: ResolverTypeWrapper<OrgBranchMembersMinAggregate>;
  OrgBranchMembersSumAggregate: ResolverTypeWrapper<OrgBranchMembersSumAggregate>;
  OrgBranchMinAggregate: ResolverTypeWrapper<OrgBranchMinAggregate>;
  OrgBranchRole: OrgBranchRole;
  OrgBranchRoleFilterComparison: OrgBranchRoleFilterComparison;
  OrgBranchSort: OrgBranchSort;
  OrgBranchSortFields: OrgBranchSortFields;
  OrgBranchUpdateFilter: OrgBranchUpdateFilter;
  OrgBranchesAggregateGroupBy: ResolverTypeWrapper<OrgBranchesAggregateGroupBy>;
  OrgBranchesAggregateResponse: ResolverTypeWrapper<OrgBranchesAggregateResponse>;
  OrgBranchesConnection: ResolverTypeWrapper<OrgBranchesConnection>;
  OrgBranchesCountAggregate: ResolverTypeWrapper<OrgBranchesCountAggregate>;
  OrgBranchesMaxAggregate: ResolverTypeWrapper<OrgBranchesMaxAggregate>;
  OrgBranchesMinAggregate: ResolverTypeWrapper<OrgBranchesMinAggregate>;
  OrgConnection: ResolverTypeWrapper<OrgConnection>;
  OrgCountAggregate: ResolverTypeWrapper<OrgCountAggregate>;
  OrgDTO: OrgDto;
  OrgDeleteFilter: OrgDeleteFilter;
  OrgDeleteResponse: ResolverTypeWrapper<OrgDeleteResponse>;
  OrgEdge: ResolverTypeWrapper<OrgEdge>;
  OrgFilter: OrgFilter;
  OrgFilterAccountFilter: OrgFilterAccountFilter;
  OrgFilterOrgBranchFilter: OrgFilterOrgBranchFilter;
  OrgFilterOrgMemberFilter: OrgFilterOrgMemberFilter;
  OrgMaxAggregate: ResolverTypeWrapper<OrgMaxAggregate>;
  OrgMember: ResolverTypeWrapper<OrgMember>;
  OrgMemberAggregateFilter: OrgMemberAggregateFilter;
  OrgMemberAggregateFilterAccountAggregateFilter: OrgMemberAggregateFilterAccountAggregateFilter;
  OrgMemberAggregateFilterOrgAggregateFilter: OrgMemberAggregateFilterOrgAggregateFilter;
  OrgMemberAggregateGroupBy: ResolverTypeWrapper<OrgMemberAggregateGroupBy>;
  OrgMemberAggregateResponse: ResolverTypeWrapper<OrgMemberAggregateResponse>;
  OrgMemberAvgAggregate: ResolverTypeWrapper<OrgMemberAvgAggregate>;
  OrgMemberConnection: ResolverTypeWrapper<OrgMemberConnection>;
  OrgMemberCountAggregate: ResolverTypeWrapper<OrgMemberCountAggregate>;
  OrgMemberDTO: OrgMemberDto;
  OrgMemberDeleteFilter: OrgMemberDeleteFilter;
  OrgMemberDeleteResponse: ResolverTypeWrapper<OrgMemberDeleteResponse>;
  OrgMemberEdge: ResolverTypeWrapper<OrgMemberEdge>;
  OrgMemberFilter: OrgMemberFilter;
  OrgMemberFilterAccountFilter: OrgMemberFilterAccountFilter;
  OrgMemberFilterOrgFilter: OrgMemberFilterOrgFilter;
  OrgMemberMaxAggregate: ResolverTypeWrapper<OrgMemberMaxAggregate>;
  OrgMemberMinAggregate: ResolverTypeWrapper<OrgMemberMinAggregate>;
  OrgMemberSort: OrgMemberSort;
  OrgMemberSortFields: OrgMemberSortFields;
  OrgMemberSumAggregate: ResolverTypeWrapper<OrgMemberSumAggregate>;
  OrgMemberUpdateFilter: OrgMemberUpdateFilter;
  OrgMembersAggregateGroupBy: ResolverTypeWrapper<OrgMembersAggregateGroupBy>;
  OrgMembersAggregateResponse: ResolverTypeWrapper<OrgMembersAggregateResponse>;
  OrgMembersAvgAggregate: ResolverTypeWrapper<OrgMembersAvgAggregate>;
  OrgMembersConnection: ResolverTypeWrapper<OrgMembersConnection>;
  OrgMembersCountAggregate: ResolverTypeWrapper<OrgMembersCountAggregate>;
  OrgMembersMaxAggregate: ResolverTypeWrapper<OrgMembersMaxAggregate>;
  OrgMembersMinAggregate: ResolverTypeWrapper<OrgMembersMinAggregate>;
  OrgMembersSumAggregate: ResolverTypeWrapper<OrgMembersSumAggregate>;
  OrgMinAggregate: ResolverTypeWrapper<OrgMinAggregate>;
  OrgRole: OrgRole;
  OrgRoleFilterComparison: OrgRoleFilterComparison;
  OrgSort: OrgSort;
  OrgSortFields: OrgSortFields;
  OrgSumAggregate: ResolverTypeWrapper<OrgSumAggregate>;
  OrgType: OrgType;
  OrgTypeFilterComparison: OrgTypeFilterComparison;
  OrgUpdateFilter: OrgUpdateFilter;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<Product>;
  ProductAggregateFilter: ProductAggregateFilter;
  ProductAggregateFilterOrgBranchAggregateFilter: ProductAggregateFilterOrgBranchAggregateFilter;
  ProductAggregateFilterProductCategoryAggregateFilter: ProductAggregateFilterProductCategoryAggregateFilter;
  ProductAggregateFilterProductOptionGroupAggregateFilter: ProductAggregateFilterProductOptionGroupAggregateFilter;
  ProductAggregateFilterProductTypeAggregateFilter: ProductAggregateFilterProductTypeAggregateFilter;
  ProductAggregateFilterProductUnitAggregateFilter: ProductAggregateFilterProductUnitAggregateFilter;
  ProductAggregateGroupBy: ResolverTypeWrapper<ProductAggregateGroupBy>;
  ProductAggregateResponse: ResolverTypeWrapper<ProductAggregateResponse>;
  ProductAvgAggregate: ResolverTypeWrapper<ProductAvgAggregate>;
  ProductCategoriesAggregateGroupBy: ResolverTypeWrapper<ProductCategoriesAggregateGroupBy>;
  ProductCategoriesAggregateResponse: ResolverTypeWrapper<ProductCategoriesAggregateResponse>;
  ProductCategoriesConnection: ResolverTypeWrapper<ProductCategoriesConnection>;
  ProductCategoriesCountAggregate: ResolverTypeWrapper<ProductCategoriesCountAggregate>;
  ProductCategoriesMaxAggregate: ResolverTypeWrapper<ProductCategoriesMaxAggregate>;
  ProductCategoriesMinAggregate: ResolverTypeWrapper<ProductCategoriesMinAggregate>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductCategoryAggregateFilter: ProductCategoryAggregateFilter;
  ProductCategoryAggregateFilterOrgBranchAggregateFilter: ProductCategoryAggregateFilterOrgBranchAggregateFilter;
  ProductCategoryAggregateFilterProductAggregateFilter: ProductCategoryAggregateFilterProductAggregateFilter;
  ProductCategoryAggregateGroupBy: ResolverTypeWrapper<ProductCategoryAggregateGroupBy>;
  ProductCategoryAggregateResponse: ResolverTypeWrapper<ProductCategoryAggregateResponse>;
  ProductCategoryConnection: ResolverTypeWrapper<ProductCategoryConnection>;
  ProductCategoryCountAggregate: ResolverTypeWrapper<ProductCategoryCountAggregate>;
  ProductCategoryDTO: ProductCategoryDto;
  ProductCategoryDeleteFilter: ProductCategoryDeleteFilter;
  ProductCategoryDeleteResponse: ResolverTypeWrapper<ProductCategoryDeleteResponse>;
  ProductCategoryEdge: ResolverTypeWrapper<ProductCategoryEdge>;
  ProductCategoryFilter: ProductCategoryFilter;
  ProductCategoryFilterOrgBranchFilter: ProductCategoryFilterOrgBranchFilter;
  ProductCategoryFilterProductFilter: ProductCategoryFilterProductFilter;
  ProductCategoryMaxAggregate: ResolverTypeWrapper<ProductCategoryMaxAggregate>;
  ProductCategoryMinAggregate: ResolverTypeWrapper<ProductCategoryMinAggregate>;
  ProductCategoryProductsAggregateGroupBy: ResolverTypeWrapper<ProductCategoryProductsAggregateGroupBy>;
  ProductCategoryProductsAggregateResponse: ResolverTypeWrapper<ProductCategoryProductsAggregateResponse>;
  ProductCategoryProductsAvgAggregate: ResolverTypeWrapper<ProductCategoryProductsAvgAggregate>;
  ProductCategoryProductsConnection: ResolverTypeWrapper<ProductCategoryProductsConnection>;
  ProductCategoryProductsCountAggregate: ResolverTypeWrapper<ProductCategoryProductsCountAggregate>;
  ProductCategoryProductsMaxAggregate: ResolverTypeWrapper<ProductCategoryProductsMaxAggregate>;
  ProductCategoryProductsMinAggregate: ResolverTypeWrapper<ProductCategoryProductsMinAggregate>;
  ProductCategoryProductsSumAggregate: ResolverTypeWrapper<ProductCategoryProductsSumAggregate>;
  ProductCategorySort: ProductCategorySort;
  ProductCategorySortFields: ProductCategorySortFields;
  ProductCategoryUpdateFilter: ProductCategoryUpdateFilter;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductCountAggregate: ResolverTypeWrapper<ProductCountAggregate>;
  ProductDTO: ProductDto;
  ProductDeleteFilter: ProductDeleteFilter;
  ProductDeleteResponse: ResolverTypeWrapper<ProductDeleteResponse>;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductFilter: ProductFilter;
  ProductFilterOrgBranchFilter: ProductFilterOrgBranchFilter;
  ProductFilterProductCategoryFilter: ProductFilterProductCategoryFilter;
  ProductFilterProductOptionGroupFilter: ProductFilterProductOptionGroupFilter;
  ProductFilterProductTypeFilter: ProductFilterProductTypeFilter;
  ProductFilterProductUnitFilter: ProductFilterProductUnitFilter;
  ProductImportInput: ProductImportInput;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductOptionAggregateFilter: ProductOptionAggregateFilter;
  ProductOptionAggregateFilterProductOptionGroupAggregateFilter: ProductOptionAggregateFilterProductOptionGroupAggregateFilter;
  ProductOptionAggregateGroupBy: ResolverTypeWrapper<ProductOptionAggregateGroupBy>;
  ProductOptionAggregateResponse: ResolverTypeWrapper<ProductOptionAggregateResponse>;
  ProductOptionAvgAggregate: ResolverTypeWrapper<ProductOptionAvgAggregate>;
  ProductOptionConnection: ResolverTypeWrapper<ProductOptionConnection>;
  ProductOptionCountAggregate: ResolverTypeWrapper<ProductOptionCountAggregate>;
  ProductOptionDTO: ProductOptionDto;
  ProductOptionDeleteFilter: ProductOptionDeleteFilter;
  ProductOptionDeleteResponse: ResolverTypeWrapper<ProductOptionDeleteResponse>;
  ProductOptionEdge: ResolverTypeWrapper<ProductOptionEdge>;
  ProductOptionFilter: ProductOptionFilter;
  ProductOptionFilterProductOptionGroupFilter: ProductOptionFilterProductOptionGroupFilter;
  ProductOptionGroup: ResolverTypeWrapper<ProductOptionGroup>;
  ProductOptionGroupAggregateFilter: ProductOptionGroupAggregateFilter;
  ProductOptionGroupAggregateFilterProductAggregateFilter: ProductOptionGroupAggregateFilterProductAggregateFilter;
  ProductOptionGroupAggregateFilterProductOptionAggregateFilter: ProductOptionGroupAggregateFilterProductOptionAggregateFilter;
  ProductOptionGroupAggregateGroupBy: ResolverTypeWrapper<ProductOptionGroupAggregateGroupBy>;
  ProductOptionGroupAggregateResponse: ResolverTypeWrapper<ProductOptionGroupAggregateResponse>;
  ProductOptionGroupConnection: ResolverTypeWrapper<ProductOptionGroupConnection>;
  ProductOptionGroupCountAggregate: ResolverTypeWrapper<ProductOptionGroupCountAggregate>;
  ProductOptionGroupDTO: ProductOptionGroupDto;
  ProductOptionGroupDeleteFilter: ProductOptionGroupDeleteFilter;
  ProductOptionGroupDeleteResponse: ResolverTypeWrapper<ProductOptionGroupDeleteResponse>;
  ProductOptionGroupEdge: ResolverTypeWrapper<ProductOptionGroupEdge>;
  ProductOptionGroupFilter: ProductOptionGroupFilter;
  ProductOptionGroupFilterProductFilter: ProductOptionGroupFilterProductFilter;
  ProductOptionGroupFilterProductOptionFilter: ProductOptionGroupFilterProductOptionFilter;
  ProductOptionGroupMaxAggregate: ResolverTypeWrapper<ProductOptionGroupMaxAggregate>;
  ProductOptionGroupMinAggregate: ResolverTypeWrapper<ProductOptionGroupMinAggregate>;
  ProductOptionGroupOptionsAggregateGroupBy: ResolverTypeWrapper<ProductOptionGroupOptionsAggregateGroupBy>;
  ProductOptionGroupOptionsAggregateResponse: ResolverTypeWrapper<ProductOptionGroupOptionsAggregateResponse>;
  ProductOptionGroupOptionsAvgAggregate: ResolverTypeWrapper<ProductOptionGroupOptionsAvgAggregate>;
  ProductOptionGroupOptionsConnection: ResolverTypeWrapper<ProductOptionGroupOptionsConnection>;
  ProductOptionGroupOptionsCountAggregate: ResolverTypeWrapper<ProductOptionGroupOptionsCountAggregate>;
  ProductOptionGroupOptionsMaxAggregate: ResolverTypeWrapper<ProductOptionGroupOptionsMaxAggregate>;
  ProductOptionGroupOptionsMinAggregate: ResolverTypeWrapper<ProductOptionGroupOptionsMinAggregate>;
  ProductOptionGroupOptionsSumAggregate: ResolverTypeWrapper<ProductOptionGroupOptionsSumAggregate>;
  ProductOptionGroupProductsAggregateGroupBy: ResolverTypeWrapper<ProductOptionGroupProductsAggregateGroupBy>;
  ProductOptionGroupProductsAggregateResponse: ResolverTypeWrapper<ProductOptionGroupProductsAggregateResponse>;
  ProductOptionGroupProductsAvgAggregate: ResolverTypeWrapper<ProductOptionGroupProductsAvgAggregate>;
  ProductOptionGroupProductsConnection: ResolverTypeWrapper<ProductOptionGroupProductsConnection>;
  ProductOptionGroupProductsCountAggregate: ResolverTypeWrapper<ProductOptionGroupProductsCountAggregate>;
  ProductOptionGroupProductsMaxAggregate: ResolverTypeWrapper<ProductOptionGroupProductsMaxAggregate>;
  ProductOptionGroupProductsMinAggregate: ResolverTypeWrapper<ProductOptionGroupProductsMinAggregate>;
  ProductOptionGroupProductsSumAggregate: ResolverTypeWrapper<ProductOptionGroupProductsSumAggregate>;
  ProductOptionGroupSort: ProductOptionGroupSort;
  ProductOptionGroupSortFields: ProductOptionGroupSortFields;
  ProductOptionGroupUpdateFilter: ProductOptionGroupUpdateFilter;
  ProductOptionGroupsAggregateGroupBy: ResolverTypeWrapper<ProductOptionGroupsAggregateGroupBy>;
  ProductOptionGroupsAggregateResponse: ResolverTypeWrapper<ProductOptionGroupsAggregateResponse>;
  ProductOptionGroupsConnection: ResolverTypeWrapper<ProductOptionGroupsConnection>;
  ProductOptionGroupsCountAggregate: ResolverTypeWrapper<ProductOptionGroupsCountAggregate>;
  ProductOptionGroupsMaxAggregate: ResolverTypeWrapper<ProductOptionGroupsMaxAggregate>;
  ProductOptionGroupsMinAggregate: ResolverTypeWrapper<ProductOptionGroupsMinAggregate>;
  ProductOptionMaxAggregate: ResolverTypeWrapper<ProductOptionMaxAggregate>;
  ProductOptionMinAggregate: ResolverTypeWrapper<ProductOptionMinAggregate>;
  ProductOptionSort: ProductOptionSort;
  ProductOptionSortFields: ProductOptionSortFields;
  ProductOptionSumAggregate: ResolverTypeWrapper<ProductOptionSumAggregate>;
  ProductOptionUpdateFilter: ProductOptionUpdateFilter;
  ProductPrice: ResolverTypeWrapper<ProductPrice>;
  ProductPriceAggregateFilter: ProductPriceAggregateFilter;
  ProductPriceAggregateFilterBranchSaleChannelAggregateFilter: ProductPriceAggregateFilterBranchSaleChannelAggregateFilter;
  ProductPriceAggregateFilterProductAggregateFilter: ProductPriceAggregateFilterProductAggregateFilter;
  ProductPriceAggregateGroupBy: ResolverTypeWrapper<ProductPriceAggregateGroupBy>;
  ProductPriceAggregateResponse: ResolverTypeWrapper<ProductPriceAggregateResponse>;
  ProductPriceAvgAggregate: ResolverTypeWrapper<ProductPriceAvgAggregate>;
  ProductPriceConnection: ResolverTypeWrapper<ProductPriceConnection>;
  ProductPriceCountAggregate: ResolverTypeWrapper<ProductPriceCountAggregate>;
  ProductPriceDTO: ProductPriceDto;
  ProductPriceDeleteFilter: ProductPriceDeleteFilter;
  ProductPriceDeleteResponse: ResolverTypeWrapper<ProductPriceDeleteResponse>;
  ProductPriceEdge: ResolverTypeWrapper<ProductPriceEdge>;
  ProductPriceFilter: ProductPriceFilter;
  ProductPriceFilterBranchSaleChannelFilter: ProductPriceFilterBranchSaleChannelFilter;
  ProductPriceFilterProductFilter: ProductPriceFilterProductFilter;
  ProductPriceImportInput: ProductPriceImportInput;
  ProductPriceMaxAggregate: ResolverTypeWrapper<ProductPriceMaxAggregate>;
  ProductPriceMinAggregate: ResolverTypeWrapper<ProductPriceMinAggregate>;
  ProductPriceSort: ProductPriceSort;
  ProductPriceSortFields: ProductPriceSortFields;
  ProductPriceSumAggregate: ResolverTypeWrapper<ProductPriceSumAggregate>;
  ProductPriceUpdateFilter: ProductPriceUpdateFilter;
  ProductSort: ProductSort;
  ProductSortFields: ProductSortFields;
  ProductSumAggregate: ResolverTypeWrapper<ProductSumAggregate>;
  ProductType: ResolverTypeWrapper<ProductType>;
  ProductTypeAggregateFilter: ProductTypeAggregateFilter;
  ProductTypeAggregateFilterOrgBranchAggregateFilter: ProductTypeAggregateFilterOrgBranchAggregateFilter;
  ProductTypeAggregateFilterProductAggregateFilter: ProductTypeAggregateFilterProductAggregateFilter;
  ProductTypeAggregateGroupBy: ResolverTypeWrapper<ProductTypeAggregateGroupBy>;
  ProductTypeAggregateResponse: ResolverTypeWrapper<ProductTypeAggregateResponse>;
  ProductTypeConnection: ResolverTypeWrapper<ProductTypeConnection>;
  ProductTypeCountAggregate: ResolverTypeWrapper<ProductTypeCountAggregate>;
  ProductTypeDTO: ProductTypeDto;
  ProductTypeDeleteFilter: ProductTypeDeleteFilter;
  ProductTypeDeleteResponse: ResolverTypeWrapper<ProductTypeDeleteResponse>;
  ProductTypeEdge: ResolverTypeWrapper<ProductTypeEdge>;
  ProductTypeFilter: ProductTypeFilter;
  ProductTypeFilterOrgBranchFilter: ProductTypeFilterOrgBranchFilter;
  ProductTypeFilterProductFilter: ProductTypeFilterProductFilter;
  ProductTypeMaxAggregate: ResolverTypeWrapper<ProductTypeMaxAggregate>;
  ProductTypeMinAggregate: ResolverTypeWrapper<ProductTypeMinAggregate>;
  ProductTypeProductsAggregateGroupBy: ResolverTypeWrapper<ProductTypeProductsAggregateGroupBy>;
  ProductTypeProductsAggregateResponse: ResolverTypeWrapper<ProductTypeProductsAggregateResponse>;
  ProductTypeProductsAvgAggregate: ResolverTypeWrapper<ProductTypeProductsAvgAggregate>;
  ProductTypeProductsConnection: ResolverTypeWrapper<ProductTypeProductsConnection>;
  ProductTypeProductsCountAggregate: ResolverTypeWrapper<ProductTypeProductsCountAggregate>;
  ProductTypeProductsMaxAggregate: ResolverTypeWrapper<ProductTypeProductsMaxAggregate>;
  ProductTypeProductsMinAggregate: ResolverTypeWrapper<ProductTypeProductsMinAggregate>;
  ProductTypeProductsSumAggregate: ResolverTypeWrapper<ProductTypeProductsSumAggregate>;
  ProductTypeSort: ProductTypeSort;
  ProductTypeSortFields: ProductTypeSortFields;
  ProductTypeUpdateFilter: ProductTypeUpdateFilter;
  ProductUnit: ResolverTypeWrapper<ProductUnit>;
  ProductUnitAggregateFilter: ProductUnitAggregateFilter;
  ProductUnitAggregateFilterOrgBranchAggregateFilter: ProductUnitAggregateFilterOrgBranchAggregateFilter;
  ProductUnitAggregateFilterProductAggregateFilter: ProductUnitAggregateFilterProductAggregateFilter;
  ProductUnitAggregateGroupBy: ResolverTypeWrapper<ProductUnitAggregateGroupBy>;
  ProductUnitAggregateResponse: ResolverTypeWrapper<ProductUnitAggregateResponse>;
  ProductUnitConnection: ResolverTypeWrapper<ProductUnitConnection>;
  ProductUnitCountAggregate: ResolverTypeWrapper<ProductUnitCountAggregate>;
  ProductUnitDTO: ProductUnitDto;
  ProductUnitDeleteFilter: ProductUnitDeleteFilter;
  ProductUnitDeleteResponse: ResolverTypeWrapper<ProductUnitDeleteResponse>;
  ProductUnitEdge: ResolverTypeWrapper<ProductUnitEdge>;
  ProductUnitFilter: ProductUnitFilter;
  ProductUnitFilterOrgBranchFilter: ProductUnitFilterOrgBranchFilter;
  ProductUnitFilterProductFilter: ProductUnitFilterProductFilter;
  ProductUnitMaxAggregate: ResolverTypeWrapper<ProductUnitMaxAggregate>;
  ProductUnitMinAggregate: ResolverTypeWrapper<ProductUnitMinAggregate>;
  ProductUnitProductsAggregateGroupBy: ResolverTypeWrapper<ProductUnitProductsAggregateGroupBy>;
  ProductUnitProductsAggregateResponse: ResolverTypeWrapper<ProductUnitProductsAggregateResponse>;
  ProductUnitProductsAvgAggregate: ResolverTypeWrapper<ProductUnitProductsAvgAggregate>;
  ProductUnitProductsConnection: ResolverTypeWrapper<ProductUnitProductsConnection>;
  ProductUnitProductsCountAggregate: ResolverTypeWrapper<ProductUnitProductsCountAggregate>;
  ProductUnitProductsMaxAggregate: ResolverTypeWrapper<ProductUnitProductsMaxAggregate>;
  ProductUnitProductsMinAggregate: ResolverTypeWrapper<ProductUnitProductsMinAggregate>;
  ProductUnitProductsSumAggregate: ResolverTypeWrapper<ProductUnitProductsSumAggregate>;
  ProductUnitSort: ProductUnitSort;
  ProductUnitSortFields: ProductUnitSortFields;
  ProductUnitUpdateFilter: ProductUnitUpdateFilter;
  ProductUpdateFilter: ProductUpdateFilter;
  Query: ResolverTypeWrapper<{}>;
  SaleChannel: SaleChannel;
  SaleChannelFilterComparison: SaleChannelFilterComparison;
  SetAddressesOnCustomerInput: SetAddressesOnCustomerInput;
  SetBranchesOnOrgInput: SetBranchesOnOrgInput;
  SetMembersOnOrgBranchInput: SetMembersOnOrgBranchInput;
  SetMembersOnOrgInput: SetMembersOnOrgInput;
  SetOptionGroupsOnProductInput: SetOptionGroupsOnProductInput;
  SetOptionsOnOrderProductInput: SetOptionsOnOrderProductInput;
  SetOptionsOnProductOptionGroupInput: SetOptionsOnProductOptionGroupInput;
  SetProductOnOrderProductInput: SetProductOnOrderProductInput;
  SetProductsOnProductCategoryInput: SetProductsOnProductCategoryInput;
  SetProductsOnProductOptionGroupInput: SetProductsOnProductOptionGroupInput;
  SetProductsOnProductTypeInput: SetProductsOnProductTypeInput;
  SetProductsOnProductUnitInput: SetProductsOnProductUnitInput;
  SetUnitOnProductInput: SetUnitOnProductInput;
  SortDirection: SortDirection;
  SortNulls: SortNulls;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldComparison: StringFieldComparison;
  UpdateManyAccountPasswordResetsInput: UpdateManyAccountPasswordResetsInput;
  UpdateManyAccountVerficationsInput: UpdateManyAccountVerficationsInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  UpdateManyApiKeysInput: UpdateManyApiKeysInput;
  UpdateManyBranchSaleChannelsInput: UpdateManyBranchSaleChannelsInput;
  UpdateManyCustomersInput: UpdateManyCustomersInput;
  UpdateManyFilesInput: UpdateManyFilesInput;
  UpdateManyMediaInput: UpdateManyMediaInput;
  UpdateManyOrderProductsInput: UpdateManyOrderProductsInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  UpdateManyOrgBranchMembersInput: UpdateManyOrgBranchMembersInput;
  UpdateManyOrgBranchesInput: UpdateManyOrgBranchesInput;
  UpdateManyOrgMembersInput: UpdateManyOrgMembersInput;
  UpdateManyOrgsInput: UpdateManyOrgsInput;
  UpdateManyProductCategoriesInput: UpdateManyProductCategoriesInput;
  UpdateManyProductOptionGroupsInput: UpdateManyProductOptionGroupsInput;
  UpdateManyProductOptionsInput: UpdateManyProductOptionsInput;
  UpdateManyProductPricesInput: UpdateManyProductPricesInput;
  UpdateManyProductTypesInput: UpdateManyProductTypesInput;
  UpdateManyProductUnitsInput: UpdateManyProductUnitsInput;
  UpdateManyProductsInput: UpdateManyProductsInput;
  UpdateManyResponse: ResolverTypeWrapper<UpdateManyResponse>;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateOneAccountPasswordResetInput: UpdateOneAccountPasswordResetInput;
  UpdateOneAccountVerficationInput: UpdateOneAccountVerficationInput;
  UpdateOneApiKeyInput: UpdateOneApiKeyInput;
  UpdateOneBranchSaleChannelInput: UpdateOneBranchSaleChannelInput;
  UpdateOneCustomerInput: UpdateOneCustomerInput;
  UpdateOneFileInput: UpdateOneFileInput;
  UpdateOneMediaInput: UpdateOneMediaInput;
  UpdateOneOrderInput: UpdateOneOrderInput;
  UpdateOneOrderProductInput: UpdateOneOrderProductInput;
  UpdateOneOrgBranchInput: UpdateOneOrgBranchInput;
  UpdateOneOrgBranchMemberInput: UpdateOneOrgBranchMemberInput;
  UpdateOneOrgInput: UpdateOneOrgInput;
  UpdateOneOrgMemberInput: UpdateOneOrgMemberInput;
  UpdateOneProductCategoryInput: UpdateOneProductCategoryInput;
  UpdateOneProductInput: UpdateOneProductInput;
  UpdateOneProductOptionGroupInput: UpdateOneProductOptionGroupInput;
  UpdateOneProductOptionInput: UpdateOneProductOptionInput;
  UpdateOneProductPriceInput: UpdateOneProductPriceInput;
  UpdateOneProductTypeInput: UpdateOneProductTypeInput;
  UpdateOneProductUnitInput: UpdateOneProductUnitInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountAggregateFilter: AccountAggregateFilter;
  AccountAggregateGroupBy: AccountAggregateGroupBy;
  AccountAggregateResponse: AccountAggregateResponse;
  AccountAvgAggregate: AccountAvgAggregate;
  AccountConnection: AccountConnection;
  AccountCountAggregate: AccountCountAggregate;
  AccountDTO: AccountDto;
  AccountDeleteFilter: AccountDeleteFilter;
  AccountDeleteResponse: AccountDeleteResponse;
  AccountEdge: AccountEdge;
  AccountFilter: AccountFilter;
  AccountMaxAggregate: AccountMaxAggregate;
  AccountMinAggregate: AccountMinAggregate;
  AccountPasswordReset: AccountPasswordReset;
  AccountPasswordResetAggregateFilter: AccountPasswordResetAggregateFilter;
  AccountPasswordResetAggregateFilterAccountAggregateFilter: AccountPasswordResetAggregateFilterAccountAggregateFilter;
  AccountPasswordResetAggregateGroupBy: AccountPasswordResetAggregateGroupBy;
  AccountPasswordResetAggregateResponse: AccountPasswordResetAggregateResponse;
  AccountPasswordResetConnection: AccountPasswordResetConnection;
  AccountPasswordResetCountAggregate: AccountPasswordResetCountAggregate;
  AccountPasswordResetDTO: AccountPasswordResetDto;
  AccountPasswordResetDeleteFilter: AccountPasswordResetDeleteFilter;
  AccountPasswordResetDeleteResponse: AccountPasswordResetDeleteResponse;
  AccountPasswordResetEdge: AccountPasswordResetEdge;
  AccountPasswordResetFilter: AccountPasswordResetFilter;
  AccountPasswordResetFilterAccountFilter: AccountPasswordResetFilterAccountFilter;
  AccountPasswordResetMaxAggregate: AccountPasswordResetMaxAggregate;
  AccountPasswordResetMinAggregate: AccountPasswordResetMinAggregate;
  AccountPasswordResetSort: AccountPasswordResetSort;
  AccountPasswordResetUpdateFilter: AccountPasswordResetUpdateFilter;
  AccountRoleFilterComparison: AccountRoleFilterComparison;
  AccountSort: AccountSort;
  AccountSumAggregate: AccountSumAggregate;
  AccountUpdateFilter: AccountUpdateFilter;
  AccountVerfication: AccountVerfication;
  AccountVerficationAggregateFilter: AccountVerficationAggregateFilter;
  AccountVerficationAggregateFilterAccountAggregateFilter: AccountVerficationAggregateFilterAccountAggregateFilter;
  AccountVerficationAggregateGroupBy: AccountVerficationAggregateGroupBy;
  AccountVerficationAggregateResponse: AccountVerficationAggregateResponse;
  AccountVerficationConnection: AccountVerficationConnection;
  AccountVerficationCountAggregate: AccountVerficationCountAggregate;
  AccountVerficationDTO: AccountVerficationDto;
  AccountVerficationDeleteFilter: AccountVerficationDeleteFilter;
  AccountVerficationDeleteResponse: AccountVerficationDeleteResponse;
  AccountVerficationEdge: AccountVerficationEdge;
  AccountVerficationFilter: AccountVerficationFilter;
  AccountVerficationFilterAccountFilter: AccountVerficationFilterAccountFilter;
  AccountVerficationMaxAggregate: AccountVerficationMaxAggregate;
  AccountVerficationMinAggregate: AccountVerficationMinAggregate;
  AccountVerficationSort: AccountVerficationSort;
  AccountVerficationUpdateFilter: AccountVerficationUpdateFilter;
  AddAddressesToCustomerInput: AddAddressesToCustomerInput;
  AddBranchesToOrgInput: AddBranchesToOrgInput;
  AddMembersToOrgBranchInput: AddMembersToOrgBranchInput;
  AddMembersToOrgInput: AddMembersToOrgInput;
  AddOptionGroupsToProductInput: AddOptionGroupsToProductInput;
  AddOptionsToOrderProductInput: AddOptionsToOrderProductInput;
  AddOptionsToProductOptionGroupInput: AddOptionsToProductOptionGroupInput;
  AddProductsToProductCategoryInput: AddProductsToProductCategoryInput;
  AddProductsToProductOptionGroupInput: AddProductsToProductOptionGroupInput;
  AddProductsToProductTypeInput: AddProductsToProductTypeInput;
  AddProductsToProductUnitInput: AddProductsToProductUnitInput;
  ApiKey: ApiKey;
  ApiKeyAggregateFilter: ApiKeyAggregateFilter;
  ApiKeyAggregateGroupBy: ApiKeyAggregateGroupBy;
  ApiKeyAggregateResponse: ApiKeyAggregateResponse;
  ApiKeyConnection: ApiKeyConnection;
  ApiKeyCountAggregate: ApiKeyCountAggregate;
  ApiKeyDTO: ApiKeyDto;
  ApiKeyDeleteFilter: ApiKeyDeleteFilter;
  ApiKeyDeleteResponse: ApiKeyDeleteResponse;
  ApiKeyEdge: ApiKeyEdge;
  ApiKeyFilter: ApiKeyFilter;
  ApiKeyMaxAggregate: ApiKeyMaxAggregate;
  ApiKeyMinAggregate: ApiKeyMinAggregate;
  ApiKeySort: ApiKeySort;
  ApiKeyUpdateFilter: ApiKeyUpdateFilter;
  AuthConfirmPasswordResetInput: AuthConfirmPasswordResetInput;
  AuthLoginInput: AuthLoginInput;
  AuthRefreshTokenInput: AuthRefreshTokenInput;
  AuthRegisterInput: AuthRegisterInput;
  AuthRequestPasswordResetInput: AuthRequestPasswordResetInput;
  AuthResendVerificationInput: AuthResendVerificationInput;
  AuthResendVerificationWithEmailInput: AuthResendVerificationWithEmailInput;
  AuthVerifyAccountInput: AuthVerifyAccountInput;
  Boolean: Scalars['Boolean']['output'];
  BooleanFieldComparison: BooleanFieldComparison;
  BranchSaleChannel: BranchSaleChannel;
  BranchSaleChannelAggregateFilter: BranchSaleChannelAggregateFilter;
  BranchSaleChannelAggregateFilterOrgBranchAggregateFilter: BranchSaleChannelAggregateFilterOrgBranchAggregateFilter;
  BranchSaleChannelAggregateGroupBy: BranchSaleChannelAggregateGroupBy;
  BranchSaleChannelAggregateResponse: BranchSaleChannelAggregateResponse;
  BranchSaleChannelAvgAggregate: BranchSaleChannelAvgAggregate;
  BranchSaleChannelConnection: BranchSaleChannelConnection;
  BranchSaleChannelCountAggregate: BranchSaleChannelCountAggregate;
  BranchSaleChannelDTO: BranchSaleChannelDto;
  BranchSaleChannelDeleteFilter: BranchSaleChannelDeleteFilter;
  BranchSaleChannelDeleteResponse: BranchSaleChannelDeleteResponse;
  BranchSaleChannelEdge: BranchSaleChannelEdge;
  BranchSaleChannelFilter: BranchSaleChannelFilter;
  BranchSaleChannelFilterOrgBranchFilter: BranchSaleChannelFilterOrgBranchFilter;
  BranchSaleChannelMaxAggregate: BranchSaleChannelMaxAggregate;
  BranchSaleChannelMinAggregate: BranchSaleChannelMinAggregate;
  BranchSaleChannelSort: BranchSaleChannelSort;
  BranchSaleChannelSumAggregate: BranchSaleChannelSumAggregate;
  BranchSaleChannelUpdateFilter: BranchSaleChannelUpdateFilter;
  ConnectionCursor: Scalars['ConnectionCursor']['output'];
  CreateManyAccountPasswordResetsInput: CreateManyAccountPasswordResetsInput;
  CreateManyAccountVerficationsInput: CreateManyAccountVerficationsInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  CreateManyApiKeysInput: CreateManyApiKeysInput;
  CreateManyBranchSaleChannelsInput: CreateManyBranchSaleChannelsInput;
  CreateManyCustomersInput: CreateManyCustomersInput;
  CreateManyFilesInput: CreateManyFilesInput;
  CreateManyMediaInput: CreateManyMediaInput;
  CreateManyOrderProductsInput: CreateManyOrderProductsInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  CreateManyOrgBranchMembersInput: CreateManyOrgBranchMembersInput;
  CreateManyOrgBranchesInput: CreateManyOrgBranchesInput;
  CreateManyOrgMembersInput: CreateManyOrgMembersInput;
  CreateManyOrgsInput: CreateManyOrgsInput;
  CreateManyProductCategoriesInput: CreateManyProductCategoriesInput;
  CreateManyProductOptionGroupsInput: CreateManyProductOptionGroupsInput;
  CreateManyProductOptionsInput: CreateManyProductOptionsInput;
  CreateManyProductPricesInput: CreateManyProductPricesInput;
  CreateManyProductTypesInput: CreateManyProductTypesInput;
  CreateManyProductUnitsInput: CreateManyProductUnitsInput;
  CreateManyProductsInput: CreateManyProductsInput;
  CreateOneAccountInput: CreateOneAccountInput;
  CreateOneAccountPasswordResetInput: CreateOneAccountPasswordResetInput;
  CreateOneAccountVerficationInput: CreateOneAccountVerficationInput;
  CreateOneApiKeyInput: CreateOneApiKeyInput;
  CreateOneBranchSaleChannelInput: CreateOneBranchSaleChannelInput;
  CreateOneCustomerInput: CreateOneCustomerInput;
  CreateOneFileInput: CreateOneFileInput;
  CreateOneMediaInput: CreateOneMediaInput;
  CreateOneOrderInput: CreateOneOrderInput;
  CreateOneOrderProductInput: CreateOneOrderProductInput;
  CreateOneOrgBranchInput: CreateOneOrgBranchInput;
  CreateOneOrgBranchMemberInput: CreateOneOrgBranchMemberInput;
  CreateOneOrgInput: CreateOneOrgInput;
  CreateOneOrgMemberInput: CreateOneOrgMemberInput;
  CreateOneProductCategoryInput: CreateOneProductCategoryInput;
  CreateOneProductInput: CreateOneProductInput;
  CreateOneProductOptionGroupInput: CreateOneProductOptionGroupInput;
  CreateOneProductOptionInput: CreateOneProductOptionInput;
  CreateOneProductPriceInput: CreateOneProductPriceInput;
  CreateOneProductTypeInput: CreateOneProductTypeInput;
  CreateOneProductUnitInput: CreateOneProductUnitInput;
  CursorPaging: CursorPaging;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  CustomerAddressAggregateFilter: CustomerAddressAggregateFilter;
  CustomerAddressAggregateFilterCustomerAggregateFilter: CustomerAddressAggregateFilterCustomerAggregateFilter;
  CustomerAddressDTO: CustomerAddressDto;
  CustomerAddressFilter: CustomerAddressFilter;
  CustomerAddressFilterCustomerFilter: CustomerAddressFilterCustomerFilter;
  CustomerAddressSort: CustomerAddressSort;
  CustomerAddressesAggregateGroupBy: CustomerAddressesAggregateGroupBy;
  CustomerAddressesAggregateResponse: CustomerAddressesAggregateResponse;
  CustomerAddressesAvgAggregate: CustomerAddressesAvgAggregate;
  CustomerAddressesConnection: CustomerAddressesConnection;
  CustomerAddressesCountAggregate: CustomerAddressesCountAggregate;
  CustomerAddressesMaxAggregate: CustomerAddressesMaxAggregate;
  CustomerAddressesMinAggregate: CustomerAddressesMinAggregate;
  CustomerAddressesSumAggregate: CustomerAddressesSumAggregate;
  CustomerAggregateFilter: CustomerAggregateFilter;
  CustomerAggregateFilterCustomerAddressAggregateFilter: CustomerAggregateFilterCustomerAddressAggregateFilter;
  CustomerAggregateGroupBy: CustomerAggregateGroupBy;
  CustomerAggregateResponse: CustomerAggregateResponse;
  CustomerAvgAggregate: CustomerAvgAggregate;
  CustomerConnection: CustomerConnection;
  CustomerCountAggregate: CustomerCountAggregate;
  CustomerDTO: CustomerDto;
  CustomerDeleteFilter: CustomerDeleteFilter;
  CustomerDeleteResponse: CustomerDeleteResponse;
  CustomerEdge: CustomerEdge;
  CustomerFilter: CustomerFilter;
  CustomerFilterCustomerAddressFilter: CustomerFilterCustomerAddressFilter;
  CustomerGenderFilterComparison: CustomerGenderFilterComparison;
  CustomerMaxAggregate: CustomerMaxAggregate;
  CustomerMinAggregate: CustomerMinAggregate;
  CustomerSort: CustomerSort;
  CustomerSumAggregate: CustomerSumAggregate;
  CustomerUpdateFilter: CustomerUpdateFilter;
  DateFieldComparison: DateFieldComparison;
  DateFieldComparisonBetween: DateFieldComparisonBetween;
  DateTime: Scalars['DateTime']['output'];
  DeleteManyAccountPasswordResetsInput: DeleteManyAccountPasswordResetsInput;
  DeleteManyAccountVerficationsInput: DeleteManyAccountVerficationsInput;
  DeleteManyAccountsInput: DeleteManyAccountsInput;
  DeleteManyApiKeysInput: DeleteManyApiKeysInput;
  DeleteManyBranchSaleChannelsInput: DeleteManyBranchSaleChannelsInput;
  DeleteManyCustomersInput: DeleteManyCustomersInput;
  DeleteManyFilesInput: DeleteManyFilesInput;
  DeleteManyMediaInput: DeleteManyMediaInput;
  DeleteManyOrderProductsInput: DeleteManyOrderProductsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  DeleteManyOrgBranchMembersInput: DeleteManyOrgBranchMembersInput;
  DeleteManyOrgBranchesInput: DeleteManyOrgBranchesInput;
  DeleteManyOrgMembersInput: DeleteManyOrgMembersInput;
  DeleteManyOrgsInput: DeleteManyOrgsInput;
  DeleteManyProductCategoriesInput: DeleteManyProductCategoriesInput;
  DeleteManyProductOptionGroupsInput: DeleteManyProductOptionGroupsInput;
  DeleteManyProductOptionsInput: DeleteManyProductOptionsInput;
  DeleteManyProductPricesInput: DeleteManyProductPricesInput;
  DeleteManyProductTypesInput: DeleteManyProductTypesInput;
  DeleteManyProductUnitsInput: DeleteManyProductUnitsInput;
  DeleteManyProductsInput: DeleteManyProductsInput;
  DeleteManyResponse: DeleteManyResponse;
  DeleteOneAccountInput: DeleteOneAccountInput;
  DeleteOneAccountPasswordResetInput: DeleteOneAccountPasswordResetInput;
  DeleteOneAccountVerficationInput: DeleteOneAccountVerficationInput;
  DeleteOneApiKeyInput: DeleteOneApiKeyInput;
  DeleteOneBranchSaleChannelInput: DeleteOneBranchSaleChannelInput;
  DeleteOneCustomerInput: DeleteOneCustomerInput;
  DeleteOneFileInput: DeleteOneFileInput;
  DeleteOneMediaInput: DeleteOneMediaInput;
  DeleteOneOrderInput: DeleteOneOrderInput;
  DeleteOneOrderProductInput: DeleteOneOrderProductInput;
  DeleteOneOrgBranchInput: DeleteOneOrgBranchInput;
  DeleteOneOrgBranchMemberInput: DeleteOneOrgBranchMemberInput;
  DeleteOneOrgInput: DeleteOneOrgInput;
  DeleteOneOrgMemberInput: DeleteOneOrgMemberInput;
  DeleteOneProductCategoryInput: DeleteOneProductCategoryInput;
  DeleteOneProductInput: DeleteOneProductInput;
  DeleteOneProductOptionGroupInput: DeleteOneProductOptionGroupInput;
  DeleteOneProductOptionInput: DeleteOneProductOptionInput;
  DeleteOneProductPriceInput: DeleteOneProductPriceInput;
  DeleteOneProductTypeInput: DeleteOneProductTypeInput;
  DeleteOneProductUnitInput: DeleteOneProductUnitInput;
  File: File;
  FileAggregateFilter: FileAggregateFilter;
  FileAggregateFilterAccountAggregateFilter: FileAggregateFilterAccountAggregateFilter;
  FileAggregateGroupBy: FileAggregateGroupBy;
  FileAggregateResponse: FileAggregateResponse;
  FileConnection: FileConnection;
  FileCountAggregate: FileCountAggregate;
  FileDTO: FileDto;
  FileDeleteFilter: FileDeleteFilter;
  FileDeleteResponse: FileDeleteResponse;
  FileEdge: FileEdge;
  FileFilter: FileFilter;
  FileFilterAccountFilter: FileFilterAccountFilter;
  FileMaxAggregate: FileMaxAggregate;
  FileMinAggregate: FileMinAggregate;
  FileSort: FileSort;
  FileUpdateFilter: FileUpdateFilter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  IDFilterComparison: IdFilterComparison;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONFilterComparison: JsonFilterComparison;
  LoginResult: LoginResult;
  Media: Media;
  MediaAggregateFilter: MediaAggregateFilter;
  MediaAggregateFilterAccountAggregateFilter: MediaAggregateFilterAccountAggregateFilter;
  MediaAggregateGroupBy: MediaAggregateGroupBy;
  MediaAggregateResponse: MediaAggregateResponse;
  MediaConnection: MediaConnection;
  MediaCountAggregate: MediaCountAggregate;
  MediaDTO: MediaDto;
  MediaDeleteFilter: MediaDeleteFilter;
  MediaDeleteResponse: MediaDeleteResponse;
  MediaEdge: MediaEdge;
  MediaFilter: MediaFilter;
  MediaFilterAccountFilter: MediaFilterAccountFilter;
  MediaMaxAggregate: MediaMaxAggregate;
  MediaMinAggregate: MediaMinAggregate;
  MediaSort: MediaSort;
  MediaUpdateFilter: MediaUpdateFilter;
  Mutation: {};
  NumberFieldComparison: NumberFieldComparison;
  NumberFieldComparisonBetween: NumberFieldComparisonBetween;
  OffsetPageInfo: OffsetPageInfo;
  OffsetPaging: OffsetPaging;
  Order: Order;
  OrderAggregateFilter: OrderAggregateFilter;
  OrderAggregateFilterBranchSaleChannelAggregateFilter: OrderAggregateFilterBranchSaleChannelAggregateFilter;
  OrderAggregateFilterCustomerAggregateFilter: OrderAggregateFilterCustomerAggregateFilter;
  OrderAggregateFilterOrgBranchAggregateFilter: OrderAggregateFilterOrgBranchAggregateFilter;
  OrderAggregateGroupBy: OrderAggregateGroupBy;
  OrderAggregateResponse: OrderAggregateResponse;
  OrderAvgAggregate: OrderAvgAggregate;
  OrderConnection: OrderConnection;
  OrderCountAggregate: OrderCountAggregate;
  OrderDTO: OrderDto;
  OrderDeleteFilter: OrderDeleteFilter;
  OrderDeleteResponse: OrderDeleteResponse;
  OrderEdge: OrderEdge;
  OrderFilter: OrderFilter;
  OrderFilterBranchSaleChannelFilter: OrderFilterBranchSaleChannelFilter;
  OrderFilterCustomerFilter: OrderFilterCustomerFilter;
  OrderFilterOrgBranchFilter: OrderFilterOrgBranchFilter;
  OrderImportInput: OrderImportInput;
  OrderMaxAggregate: OrderMaxAggregate;
  OrderMinAggregate: OrderMinAggregate;
  OrderProduct: OrderProduct;
  OrderProductAggregateFilter: OrderProductAggregateFilter;
  OrderProductAggregateFilterOrderAggregateFilter: OrderProductAggregateFilterOrderAggregateFilter;
  OrderProductAggregateFilterProductAggregateFilter: OrderProductAggregateFilterProductAggregateFilter;
  OrderProductAggregateFilterProductOptionAggregateFilter: OrderProductAggregateFilterProductOptionAggregateFilter;
  OrderProductAggregateGroupBy: OrderProductAggregateGroupBy;
  OrderProductAggregateResponse: OrderProductAggregateResponse;
  OrderProductAvgAggregate: OrderProductAvgAggregate;
  OrderProductConnection: OrderProductConnection;
  OrderProductCountAggregate: OrderProductCountAggregate;
  OrderProductDTO: OrderProductDto;
  OrderProductDeleteFilter: OrderProductDeleteFilter;
  OrderProductDeleteResponse: OrderProductDeleteResponse;
  OrderProductEdge: OrderProductEdge;
  OrderProductFilter: OrderProductFilter;
  OrderProductFilterOrderFilter: OrderProductFilterOrderFilter;
  OrderProductFilterProductFilter: OrderProductFilterProductFilter;
  OrderProductFilterProductOptionFilter: OrderProductFilterProductOptionFilter;
  OrderProductMaxAggregate: OrderProductMaxAggregate;
  OrderProductMinAggregate: OrderProductMinAggregate;
  OrderProductOptionsAggregateGroupBy: OrderProductOptionsAggregateGroupBy;
  OrderProductOptionsAggregateResponse: OrderProductOptionsAggregateResponse;
  OrderProductOptionsAvgAggregate: OrderProductOptionsAvgAggregate;
  OrderProductOptionsConnection: OrderProductOptionsConnection;
  OrderProductOptionsCountAggregate: OrderProductOptionsCountAggregate;
  OrderProductOptionsMaxAggregate: OrderProductOptionsMaxAggregate;
  OrderProductOptionsMinAggregate: OrderProductOptionsMinAggregate;
  OrderProductOptionsSumAggregate: OrderProductOptionsSumAggregate;
  OrderProductSort: OrderProductSort;
  OrderProductSumAggregate: OrderProductSumAggregate;
  OrderProductUpdateFilter: OrderProductUpdateFilter;
  OrderSort: OrderSort;
  OrderSumAggregate: OrderSumAggregate;
  OrderUpdateFilter: OrderUpdateFilter;
  Org: Org;
  OrgAggregateFilter: OrgAggregateFilter;
  OrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateGroupBy: OrgAggregateGroupBy;
  OrgAggregateResponse: OrgAggregateResponse;
  OrgAvgAggregate: OrgAvgAggregate;
  OrgBranch: OrgBranch;
  OrgBranchAggregateFilter: OrgBranchAggregateFilter;
  OrgBranchAggregateFilterOrgAggregateFilter: OrgBranchAggregateFilterOrgAggregateFilter;
  OrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgBranchAggregateGroupBy: OrgBranchAggregateGroupBy;
  OrgBranchAggregateResponse: OrgBranchAggregateResponse;
  OrgBranchConnection: OrgBranchConnection;
  OrgBranchCountAggregate: OrgBranchCountAggregate;
  OrgBranchDTO: OrgBranchDto;
  OrgBranchDeleteFilter: OrgBranchDeleteFilter;
  OrgBranchDeleteResponse: OrgBranchDeleteResponse;
  OrgBranchEdge: OrgBranchEdge;
  OrgBranchFilter: OrgBranchFilter;
  OrgBranchFilterOrgBranchMemberFilter: OrgBranchFilterOrgBranchMemberFilter;
  OrgBranchFilterOrgFilter: OrgBranchFilterOrgFilter;
  OrgBranchMaxAggregate: OrgBranchMaxAggregate;
  OrgBranchMember: OrgBranchMember;
  OrgBranchMemberAggregateFilter: OrgBranchMemberAggregateFilter;
  OrgBranchMemberAggregateFilterAccountAggregateFilter: OrgBranchMemberAggregateFilterAccountAggregateFilter;
  OrgBranchMemberAggregateFilterOrgBranchAggregateFilter: OrgBranchMemberAggregateFilterOrgBranchAggregateFilter;
  OrgBranchMemberAggregateGroupBy: OrgBranchMemberAggregateGroupBy;
  OrgBranchMemberAggregateResponse: OrgBranchMemberAggregateResponse;
  OrgBranchMemberAvgAggregate: OrgBranchMemberAvgAggregate;
  OrgBranchMemberConnection: OrgBranchMemberConnection;
  OrgBranchMemberCountAggregate: OrgBranchMemberCountAggregate;
  OrgBranchMemberDTO: OrgBranchMemberDto;
  OrgBranchMemberDeleteFilter: OrgBranchMemberDeleteFilter;
  OrgBranchMemberDeleteResponse: OrgBranchMemberDeleteResponse;
  OrgBranchMemberEdge: OrgBranchMemberEdge;
  OrgBranchMemberFilter: OrgBranchMemberFilter;
  OrgBranchMemberFilterAccountFilter: OrgBranchMemberFilterAccountFilter;
  OrgBranchMemberFilterOrgBranchFilter: OrgBranchMemberFilterOrgBranchFilter;
  OrgBranchMemberMaxAggregate: OrgBranchMemberMaxAggregate;
  OrgBranchMemberMinAggregate: OrgBranchMemberMinAggregate;
  OrgBranchMemberSort: OrgBranchMemberSort;
  OrgBranchMemberSumAggregate: OrgBranchMemberSumAggregate;
  OrgBranchMemberUpdateFilter: OrgBranchMemberUpdateFilter;
  OrgBranchMembersAggregateGroupBy: OrgBranchMembersAggregateGroupBy;
  OrgBranchMembersAggregateResponse: OrgBranchMembersAggregateResponse;
  OrgBranchMembersAvgAggregate: OrgBranchMembersAvgAggregate;
  OrgBranchMembersConnection: OrgBranchMembersConnection;
  OrgBranchMembersCountAggregate: OrgBranchMembersCountAggregate;
  OrgBranchMembersMaxAggregate: OrgBranchMembersMaxAggregate;
  OrgBranchMembersMinAggregate: OrgBranchMembersMinAggregate;
  OrgBranchMembersSumAggregate: OrgBranchMembersSumAggregate;
  OrgBranchMinAggregate: OrgBranchMinAggregate;
  OrgBranchRoleFilterComparison: OrgBranchRoleFilterComparison;
  OrgBranchSort: OrgBranchSort;
  OrgBranchUpdateFilter: OrgBranchUpdateFilter;
  OrgBranchesAggregateGroupBy: OrgBranchesAggregateGroupBy;
  OrgBranchesAggregateResponse: OrgBranchesAggregateResponse;
  OrgBranchesConnection: OrgBranchesConnection;
  OrgBranchesCountAggregate: OrgBranchesCountAggregate;
  OrgBranchesMaxAggregate: OrgBranchesMaxAggregate;
  OrgBranchesMinAggregate: OrgBranchesMinAggregate;
  OrgConnection: OrgConnection;
  OrgCountAggregate: OrgCountAggregate;
  OrgDTO: OrgDto;
  OrgDeleteFilter: OrgDeleteFilter;
  OrgDeleteResponse: OrgDeleteResponse;
  OrgEdge: OrgEdge;
  OrgFilter: OrgFilter;
  OrgFilterAccountFilter: OrgFilterAccountFilter;
  OrgFilterOrgBranchFilter: OrgFilterOrgBranchFilter;
  OrgFilterOrgMemberFilter: OrgFilterOrgMemberFilter;
  OrgMaxAggregate: OrgMaxAggregate;
  OrgMember: OrgMember;
  OrgMemberAggregateFilter: OrgMemberAggregateFilter;
  OrgMemberAggregateFilterAccountAggregateFilter: OrgMemberAggregateFilterAccountAggregateFilter;
  OrgMemberAggregateFilterOrgAggregateFilter: OrgMemberAggregateFilterOrgAggregateFilter;
  OrgMemberAggregateGroupBy: OrgMemberAggregateGroupBy;
  OrgMemberAggregateResponse: OrgMemberAggregateResponse;
  OrgMemberAvgAggregate: OrgMemberAvgAggregate;
  OrgMemberConnection: OrgMemberConnection;
  OrgMemberCountAggregate: OrgMemberCountAggregate;
  OrgMemberDTO: OrgMemberDto;
  OrgMemberDeleteFilter: OrgMemberDeleteFilter;
  OrgMemberDeleteResponse: OrgMemberDeleteResponse;
  OrgMemberEdge: OrgMemberEdge;
  OrgMemberFilter: OrgMemberFilter;
  OrgMemberFilterAccountFilter: OrgMemberFilterAccountFilter;
  OrgMemberFilterOrgFilter: OrgMemberFilterOrgFilter;
  OrgMemberMaxAggregate: OrgMemberMaxAggregate;
  OrgMemberMinAggregate: OrgMemberMinAggregate;
  OrgMemberSort: OrgMemberSort;
  OrgMemberSumAggregate: OrgMemberSumAggregate;
  OrgMemberUpdateFilter: OrgMemberUpdateFilter;
  OrgMembersAggregateGroupBy: OrgMembersAggregateGroupBy;
  OrgMembersAggregateResponse: OrgMembersAggregateResponse;
  OrgMembersAvgAggregate: OrgMembersAvgAggregate;
  OrgMembersConnection: OrgMembersConnection;
  OrgMembersCountAggregate: OrgMembersCountAggregate;
  OrgMembersMaxAggregate: OrgMembersMaxAggregate;
  OrgMembersMinAggregate: OrgMembersMinAggregate;
  OrgMembersSumAggregate: OrgMembersSumAggregate;
  OrgMinAggregate: OrgMinAggregate;
  OrgRoleFilterComparison: OrgRoleFilterComparison;
  OrgSort: OrgSort;
  OrgSumAggregate: OrgSumAggregate;
  OrgTypeFilterComparison: OrgTypeFilterComparison;
  OrgUpdateFilter: OrgUpdateFilter;
  PageInfo: PageInfo;
  Product: Product;
  ProductAggregateFilter: ProductAggregateFilter;
  ProductAggregateFilterOrgBranchAggregateFilter: ProductAggregateFilterOrgBranchAggregateFilter;
  ProductAggregateFilterProductCategoryAggregateFilter: ProductAggregateFilterProductCategoryAggregateFilter;
  ProductAggregateFilterProductOptionGroupAggregateFilter: ProductAggregateFilterProductOptionGroupAggregateFilter;
  ProductAggregateFilterProductTypeAggregateFilter: ProductAggregateFilterProductTypeAggregateFilter;
  ProductAggregateFilterProductUnitAggregateFilter: ProductAggregateFilterProductUnitAggregateFilter;
  ProductAggregateGroupBy: ProductAggregateGroupBy;
  ProductAggregateResponse: ProductAggregateResponse;
  ProductAvgAggregate: ProductAvgAggregate;
  ProductCategoriesAggregateGroupBy: ProductCategoriesAggregateGroupBy;
  ProductCategoriesAggregateResponse: ProductCategoriesAggregateResponse;
  ProductCategoriesConnection: ProductCategoriesConnection;
  ProductCategoriesCountAggregate: ProductCategoriesCountAggregate;
  ProductCategoriesMaxAggregate: ProductCategoriesMaxAggregate;
  ProductCategoriesMinAggregate: ProductCategoriesMinAggregate;
  ProductCategory: ProductCategory;
  ProductCategoryAggregateFilter: ProductCategoryAggregateFilter;
  ProductCategoryAggregateFilterOrgBranchAggregateFilter: ProductCategoryAggregateFilterOrgBranchAggregateFilter;
  ProductCategoryAggregateFilterProductAggregateFilter: ProductCategoryAggregateFilterProductAggregateFilter;
  ProductCategoryAggregateGroupBy: ProductCategoryAggregateGroupBy;
  ProductCategoryAggregateResponse: ProductCategoryAggregateResponse;
  ProductCategoryConnection: ProductCategoryConnection;
  ProductCategoryCountAggregate: ProductCategoryCountAggregate;
  ProductCategoryDTO: ProductCategoryDto;
  ProductCategoryDeleteFilter: ProductCategoryDeleteFilter;
  ProductCategoryDeleteResponse: ProductCategoryDeleteResponse;
  ProductCategoryEdge: ProductCategoryEdge;
  ProductCategoryFilter: ProductCategoryFilter;
  ProductCategoryFilterOrgBranchFilter: ProductCategoryFilterOrgBranchFilter;
  ProductCategoryFilterProductFilter: ProductCategoryFilterProductFilter;
  ProductCategoryMaxAggregate: ProductCategoryMaxAggregate;
  ProductCategoryMinAggregate: ProductCategoryMinAggregate;
  ProductCategoryProductsAggregateGroupBy: ProductCategoryProductsAggregateGroupBy;
  ProductCategoryProductsAggregateResponse: ProductCategoryProductsAggregateResponse;
  ProductCategoryProductsAvgAggregate: ProductCategoryProductsAvgAggregate;
  ProductCategoryProductsConnection: ProductCategoryProductsConnection;
  ProductCategoryProductsCountAggregate: ProductCategoryProductsCountAggregate;
  ProductCategoryProductsMaxAggregate: ProductCategoryProductsMaxAggregate;
  ProductCategoryProductsMinAggregate: ProductCategoryProductsMinAggregate;
  ProductCategoryProductsSumAggregate: ProductCategoryProductsSumAggregate;
  ProductCategorySort: ProductCategorySort;
  ProductCategoryUpdateFilter: ProductCategoryUpdateFilter;
  ProductConnection: ProductConnection;
  ProductCountAggregate: ProductCountAggregate;
  ProductDTO: ProductDto;
  ProductDeleteFilter: ProductDeleteFilter;
  ProductDeleteResponse: ProductDeleteResponse;
  ProductEdge: ProductEdge;
  ProductFilter: ProductFilter;
  ProductFilterOrgBranchFilter: ProductFilterOrgBranchFilter;
  ProductFilterProductCategoryFilter: ProductFilterProductCategoryFilter;
  ProductFilterProductOptionGroupFilter: ProductFilterProductOptionGroupFilter;
  ProductFilterProductTypeFilter: ProductFilterProductTypeFilter;
  ProductFilterProductUnitFilter: ProductFilterProductUnitFilter;
  ProductImportInput: ProductImportInput;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductOption: ProductOption;
  ProductOptionAggregateFilter: ProductOptionAggregateFilter;
  ProductOptionAggregateFilterProductOptionGroupAggregateFilter: ProductOptionAggregateFilterProductOptionGroupAggregateFilter;
  ProductOptionAggregateGroupBy: ProductOptionAggregateGroupBy;
  ProductOptionAggregateResponse: ProductOptionAggregateResponse;
  ProductOptionAvgAggregate: ProductOptionAvgAggregate;
  ProductOptionConnection: ProductOptionConnection;
  ProductOptionCountAggregate: ProductOptionCountAggregate;
  ProductOptionDTO: ProductOptionDto;
  ProductOptionDeleteFilter: ProductOptionDeleteFilter;
  ProductOptionDeleteResponse: ProductOptionDeleteResponse;
  ProductOptionEdge: ProductOptionEdge;
  ProductOptionFilter: ProductOptionFilter;
  ProductOptionFilterProductOptionGroupFilter: ProductOptionFilterProductOptionGroupFilter;
  ProductOptionGroup: ProductOptionGroup;
  ProductOptionGroupAggregateFilter: ProductOptionGroupAggregateFilter;
  ProductOptionGroupAggregateFilterProductAggregateFilter: ProductOptionGroupAggregateFilterProductAggregateFilter;
  ProductOptionGroupAggregateFilterProductOptionAggregateFilter: ProductOptionGroupAggregateFilterProductOptionAggregateFilter;
  ProductOptionGroupAggregateGroupBy: ProductOptionGroupAggregateGroupBy;
  ProductOptionGroupAggregateResponse: ProductOptionGroupAggregateResponse;
  ProductOptionGroupConnection: ProductOptionGroupConnection;
  ProductOptionGroupCountAggregate: ProductOptionGroupCountAggregate;
  ProductOptionGroupDTO: ProductOptionGroupDto;
  ProductOptionGroupDeleteFilter: ProductOptionGroupDeleteFilter;
  ProductOptionGroupDeleteResponse: ProductOptionGroupDeleteResponse;
  ProductOptionGroupEdge: ProductOptionGroupEdge;
  ProductOptionGroupFilter: ProductOptionGroupFilter;
  ProductOptionGroupFilterProductFilter: ProductOptionGroupFilterProductFilter;
  ProductOptionGroupFilterProductOptionFilter: ProductOptionGroupFilterProductOptionFilter;
  ProductOptionGroupMaxAggregate: ProductOptionGroupMaxAggregate;
  ProductOptionGroupMinAggregate: ProductOptionGroupMinAggregate;
  ProductOptionGroupOptionsAggregateGroupBy: ProductOptionGroupOptionsAggregateGroupBy;
  ProductOptionGroupOptionsAggregateResponse: ProductOptionGroupOptionsAggregateResponse;
  ProductOptionGroupOptionsAvgAggregate: ProductOptionGroupOptionsAvgAggregate;
  ProductOptionGroupOptionsConnection: ProductOptionGroupOptionsConnection;
  ProductOptionGroupOptionsCountAggregate: ProductOptionGroupOptionsCountAggregate;
  ProductOptionGroupOptionsMaxAggregate: ProductOptionGroupOptionsMaxAggregate;
  ProductOptionGroupOptionsMinAggregate: ProductOptionGroupOptionsMinAggregate;
  ProductOptionGroupOptionsSumAggregate: ProductOptionGroupOptionsSumAggregate;
  ProductOptionGroupProductsAggregateGroupBy: ProductOptionGroupProductsAggregateGroupBy;
  ProductOptionGroupProductsAggregateResponse: ProductOptionGroupProductsAggregateResponse;
  ProductOptionGroupProductsAvgAggregate: ProductOptionGroupProductsAvgAggregate;
  ProductOptionGroupProductsConnection: ProductOptionGroupProductsConnection;
  ProductOptionGroupProductsCountAggregate: ProductOptionGroupProductsCountAggregate;
  ProductOptionGroupProductsMaxAggregate: ProductOptionGroupProductsMaxAggregate;
  ProductOptionGroupProductsMinAggregate: ProductOptionGroupProductsMinAggregate;
  ProductOptionGroupProductsSumAggregate: ProductOptionGroupProductsSumAggregate;
  ProductOptionGroupSort: ProductOptionGroupSort;
  ProductOptionGroupUpdateFilter: ProductOptionGroupUpdateFilter;
  ProductOptionGroupsAggregateGroupBy: ProductOptionGroupsAggregateGroupBy;
  ProductOptionGroupsAggregateResponse: ProductOptionGroupsAggregateResponse;
  ProductOptionGroupsConnection: ProductOptionGroupsConnection;
  ProductOptionGroupsCountAggregate: ProductOptionGroupsCountAggregate;
  ProductOptionGroupsMaxAggregate: ProductOptionGroupsMaxAggregate;
  ProductOptionGroupsMinAggregate: ProductOptionGroupsMinAggregate;
  ProductOptionMaxAggregate: ProductOptionMaxAggregate;
  ProductOptionMinAggregate: ProductOptionMinAggregate;
  ProductOptionSort: ProductOptionSort;
  ProductOptionSumAggregate: ProductOptionSumAggregate;
  ProductOptionUpdateFilter: ProductOptionUpdateFilter;
  ProductPrice: ProductPrice;
  ProductPriceAggregateFilter: ProductPriceAggregateFilter;
  ProductPriceAggregateFilterBranchSaleChannelAggregateFilter: ProductPriceAggregateFilterBranchSaleChannelAggregateFilter;
  ProductPriceAggregateFilterProductAggregateFilter: ProductPriceAggregateFilterProductAggregateFilter;
  ProductPriceAggregateGroupBy: ProductPriceAggregateGroupBy;
  ProductPriceAggregateResponse: ProductPriceAggregateResponse;
  ProductPriceAvgAggregate: ProductPriceAvgAggregate;
  ProductPriceConnection: ProductPriceConnection;
  ProductPriceCountAggregate: ProductPriceCountAggregate;
  ProductPriceDTO: ProductPriceDto;
  ProductPriceDeleteFilter: ProductPriceDeleteFilter;
  ProductPriceDeleteResponse: ProductPriceDeleteResponse;
  ProductPriceEdge: ProductPriceEdge;
  ProductPriceFilter: ProductPriceFilter;
  ProductPriceFilterBranchSaleChannelFilter: ProductPriceFilterBranchSaleChannelFilter;
  ProductPriceFilterProductFilter: ProductPriceFilterProductFilter;
  ProductPriceImportInput: ProductPriceImportInput;
  ProductPriceMaxAggregate: ProductPriceMaxAggregate;
  ProductPriceMinAggregate: ProductPriceMinAggregate;
  ProductPriceSort: ProductPriceSort;
  ProductPriceSumAggregate: ProductPriceSumAggregate;
  ProductPriceUpdateFilter: ProductPriceUpdateFilter;
  ProductSort: ProductSort;
  ProductSumAggregate: ProductSumAggregate;
  ProductType: ProductType;
  ProductTypeAggregateFilter: ProductTypeAggregateFilter;
  ProductTypeAggregateFilterOrgBranchAggregateFilter: ProductTypeAggregateFilterOrgBranchAggregateFilter;
  ProductTypeAggregateFilterProductAggregateFilter: ProductTypeAggregateFilterProductAggregateFilter;
  ProductTypeAggregateGroupBy: ProductTypeAggregateGroupBy;
  ProductTypeAggregateResponse: ProductTypeAggregateResponse;
  ProductTypeConnection: ProductTypeConnection;
  ProductTypeCountAggregate: ProductTypeCountAggregate;
  ProductTypeDTO: ProductTypeDto;
  ProductTypeDeleteFilter: ProductTypeDeleteFilter;
  ProductTypeDeleteResponse: ProductTypeDeleteResponse;
  ProductTypeEdge: ProductTypeEdge;
  ProductTypeFilter: ProductTypeFilter;
  ProductTypeFilterOrgBranchFilter: ProductTypeFilterOrgBranchFilter;
  ProductTypeFilterProductFilter: ProductTypeFilterProductFilter;
  ProductTypeMaxAggregate: ProductTypeMaxAggregate;
  ProductTypeMinAggregate: ProductTypeMinAggregate;
  ProductTypeProductsAggregateGroupBy: ProductTypeProductsAggregateGroupBy;
  ProductTypeProductsAggregateResponse: ProductTypeProductsAggregateResponse;
  ProductTypeProductsAvgAggregate: ProductTypeProductsAvgAggregate;
  ProductTypeProductsConnection: ProductTypeProductsConnection;
  ProductTypeProductsCountAggregate: ProductTypeProductsCountAggregate;
  ProductTypeProductsMaxAggregate: ProductTypeProductsMaxAggregate;
  ProductTypeProductsMinAggregate: ProductTypeProductsMinAggregate;
  ProductTypeProductsSumAggregate: ProductTypeProductsSumAggregate;
  ProductTypeSort: ProductTypeSort;
  ProductTypeUpdateFilter: ProductTypeUpdateFilter;
  ProductUnit: ProductUnit;
  ProductUnitAggregateFilter: ProductUnitAggregateFilter;
  ProductUnitAggregateFilterOrgBranchAggregateFilter: ProductUnitAggregateFilterOrgBranchAggregateFilter;
  ProductUnitAggregateFilterProductAggregateFilter: ProductUnitAggregateFilterProductAggregateFilter;
  ProductUnitAggregateGroupBy: ProductUnitAggregateGroupBy;
  ProductUnitAggregateResponse: ProductUnitAggregateResponse;
  ProductUnitConnection: ProductUnitConnection;
  ProductUnitCountAggregate: ProductUnitCountAggregate;
  ProductUnitDTO: ProductUnitDto;
  ProductUnitDeleteFilter: ProductUnitDeleteFilter;
  ProductUnitDeleteResponse: ProductUnitDeleteResponse;
  ProductUnitEdge: ProductUnitEdge;
  ProductUnitFilter: ProductUnitFilter;
  ProductUnitFilterOrgBranchFilter: ProductUnitFilterOrgBranchFilter;
  ProductUnitFilterProductFilter: ProductUnitFilterProductFilter;
  ProductUnitMaxAggregate: ProductUnitMaxAggregate;
  ProductUnitMinAggregate: ProductUnitMinAggregate;
  ProductUnitProductsAggregateGroupBy: ProductUnitProductsAggregateGroupBy;
  ProductUnitProductsAggregateResponse: ProductUnitProductsAggregateResponse;
  ProductUnitProductsAvgAggregate: ProductUnitProductsAvgAggregate;
  ProductUnitProductsConnection: ProductUnitProductsConnection;
  ProductUnitProductsCountAggregate: ProductUnitProductsCountAggregate;
  ProductUnitProductsMaxAggregate: ProductUnitProductsMaxAggregate;
  ProductUnitProductsMinAggregate: ProductUnitProductsMinAggregate;
  ProductUnitProductsSumAggregate: ProductUnitProductsSumAggregate;
  ProductUnitSort: ProductUnitSort;
  ProductUnitUpdateFilter: ProductUnitUpdateFilter;
  ProductUpdateFilter: ProductUpdateFilter;
  Query: {};
  SaleChannelFilterComparison: SaleChannelFilterComparison;
  SetAddressesOnCustomerInput: SetAddressesOnCustomerInput;
  SetBranchesOnOrgInput: SetBranchesOnOrgInput;
  SetMembersOnOrgBranchInput: SetMembersOnOrgBranchInput;
  SetMembersOnOrgInput: SetMembersOnOrgInput;
  SetOptionGroupsOnProductInput: SetOptionGroupsOnProductInput;
  SetOptionsOnOrderProductInput: SetOptionsOnOrderProductInput;
  SetOptionsOnProductOptionGroupInput: SetOptionsOnProductOptionGroupInput;
  SetProductOnOrderProductInput: SetProductOnOrderProductInput;
  SetProductsOnProductCategoryInput: SetProductsOnProductCategoryInput;
  SetProductsOnProductOptionGroupInput: SetProductsOnProductOptionGroupInput;
  SetProductsOnProductTypeInput: SetProductsOnProductTypeInput;
  SetProductsOnProductUnitInput: SetProductsOnProductUnitInput;
  SetUnitOnProductInput: SetUnitOnProductInput;
  String: Scalars['String']['output'];
  StringFieldComparison: StringFieldComparison;
  UpdateManyAccountPasswordResetsInput: UpdateManyAccountPasswordResetsInput;
  UpdateManyAccountVerficationsInput: UpdateManyAccountVerficationsInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  UpdateManyApiKeysInput: UpdateManyApiKeysInput;
  UpdateManyBranchSaleChannelsInput: UpdateManyBranchSaleChannelsInput;
  UpdateManyCustomersInput: UpdateManyCustomersInput;
  UpdateManyFilesInput: UpdateManyFilesInput;
  UpdateManyMediaInput: UpdateManyMediaInput;
  UpdateManyOrderProductsInput: UpdateManyOrderProductsInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  UpdateManyOrgBranchMembersInput: UpdateManyOrgBranchMembersInput;
  UpdateManyOrgBranchesInput: UpdateManyOrgBranchesInput;
  UpdateManyOrgMembersInput: UpdateManyOrgMembersInput;
  UpdateManyOrgsInput: UpdateManyOrgsInput;
  UpdateManyProductCategoriesInput: UpdateManyProductCategoriesInput;
  UpdateManyProductOptionGroupsInput: UpdateManyProductOptionGroupsInput;
  UpdateManyProductOptionsInput: UpdateManyProductOptionsInput;
  UpdateManyProductPricesInput: UpdateManyProductPricesInput;
  UpdateManyProductTypesInput: UpdateManyProductTypesInput;
  UpdateManyProductUnitsInput: UpdateManyProductUnitsInput;
  UpdateManyProductsInput: UpdateManyProductsInput;
  UpdateManyResponse: UpdateManyResponse;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateOneAccountPasswordResetInput: UpdateOneAccountPasswordResetInput;
  UpdateOneAccountVerficationInput: UpdateOneAccountVerficationInput;
  UpdateOneApiKeyInput: UpdateOneApiKeyInput;
  UpdateOneBranchSaleChannelInput: UpdateOneBranchSaleChannelInput;
  UpdateOneCustomerInput: UpdateOneCustomerInput;
  UpdateOneFileInput: UpdateOneFileInput;
  UpdateOneMediaInput: UpdateOneMediaInput;
  UpdateOneOrderInput: UpdateOneOrderInput;
  UpdateOneOrderProductInput: UpdateOneOrderProductInput;
  UpdateOneOrgBranchInput: UpdateOneOrgBranchInput;
  UpdateOneOrgBranchMemberInput: UpdateOneOrgBranchMemberInput;
  UpdateOneOrgInput: UpdateOneOrgInput;
  UpdateOneOrgMemberInput: UpdateOneOrgMemberInput;
  UpdateOneProductCategoryInput: UpdateOneProductCategoryInput;
  UpdateOneProductInput: UpdateOneProductInput;
  UpdateOneProductOptionGroupInput: UpdateOneProductOptionGroupInput;
  UpdateOneProductOptionInput: UpdateOneProductOptionInput;
  UpdateOneProductPriceInput: UpdateOneProductPriceInput;
  UpdateOneProductTypeInput: UpdateOneProductTypeInput;
  UpdateOneProductUnitInput: UpdateOneProductUnitInput;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['AccountRole'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAggregateGroupBy'] = ResolversParentTypes['AccountAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountAggregateGroupByDeletedAtArgs, 'by'>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAggregateResponse'] = ResolversParentTypes['AccountAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['AccountAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['AccountCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['AccountAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['AccountSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAvgAggregate'] = ResolversParentTypes['AccountAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountConnection'] = ResolversParentTypes['AccountConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCountAggregate'] = ResolversParentTypes['AccountCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountDeleteResponse'] = ResolversParentTypes['AccountDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountEdge'] = ResolversParentTypes['AccountEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountMaxAggregate'] = ResolversParentTypes['AccountMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountMinAggregate'] = ResolversParentTypes['AccountMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordReset'] = ResolversParentTypes['AccountPasswordReset']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetAggregateGroupBy'] = ResolversParentTypes['AccountPasswordResetAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountPasswordResetAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountPasswordResetAggregateGroupByDeletedAtArgs, 'by'>>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountPasswordResetAggregateGroupByExpiredAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountPasswordResetAggregateGroupByUpdatedAtArgs, 'by'>>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetAggregateResponse'] = ResolversParentTypes['AccountPasswordResetAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['AccountPasswordResetCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['AccountPasswordResetAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountPasswordResetMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountPasswordResetMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetConnection'] = ResolversParentTypes['AccountPasswordResetConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountPasswordResetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetCountAggregate'] = ResolversParentTypes['AccountPasswordResetCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetDeleteResponse'] = ResolversParentTypes['AccountPasswordResetDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetEdge'] = ResolversParentTypes['AccountPasswordResetEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetMaxAggregate'] = ResolversParentTypes['AccountPasswordResetMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetMinAggregate'] = ResolversParentTypes['AccountPasswordResetMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountSumAggregate'] = ResolversParentTypes['AccountSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerfication'] = ResolversParentTypes['AccountVerfication']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationAggregateGroupBy'] = ResolversParentTypes['AccountVerficationAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountVerficationAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountVerficationAggregateGroupByDeletedAtArgs, 'by'>>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountVerficationAggregateGroupByExpiredAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountVerficationAggregateGroupByUpdatedAtArgs, 'by'>>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationAggregateResponse'] = ResolversParentTypes['AccountVerficationAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['AccountVerficationCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['AccountVerficationAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountVerficationMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountVerficationMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationConnection'] = ResolversParentTypes['AccountVerficationConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountVerficationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationCountAggregate'] = ResolversParentTypes['AccountVerficationCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationDeleteResponse'] = ResolversParentTypes['AccountVerficationDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationEdge'] = ResolversParentTypes['AccountVerficationEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationMaxAggregate'] = ResolversParentTypes['AccountVerficationMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationMinAggregate'] = ResolversParentTypes['AccountVerficationMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKey'] = ResolversParentTypes['ApiKey']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  expiredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyAggregateGroupBy'] = ResolversParentTypes['ApiKeyAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ApiKeyAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ApiKeyAggregateGroupByDeletedAtArgs, 'by'>>;
  expired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ApiKeyAggregateGroupByExpiredAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ApiKeyAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyAggregateResponse'] = ResolversParentTypes['ApiKeyAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ApiKeyCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ApiKeyAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ApiKeyMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ApiKeyMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyConnection'] = ResolversParentTypes['ApiKeyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ApiKeyEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyCountAggregate'] = ResolversParentTypes['ApiKeyCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expired?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyDeleteResponse'] = ResolversParentTypes['ApiKeyDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyEdge'] = ResolversParentTypes['ApiKeyEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyMaxAggregate'] = ResolversParentTypes['ApiKeyMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiKeyMinAggregate'] = ResolversParentTypes['ApiKeyMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannel'] = ResolversParentTypes['BranchSaleChannel']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  saleChannel?: Resolver<ResolversTypes['SaleChannel'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelAggregateGroupBy'] = ResolversParentTypes['BranchSaleChannelAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<BranchSaleChannelAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<BranchSaleChannelAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  saleChannel?: Resolver<Maybe<ResolversTypes['SaleChannel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<BranchSaleChannelAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelAggregateResponse'] = ResolversParentTypes['BranchSaleChannelAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['BranchSaleChannelAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['BranchSaleChannelCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['BranchSaleChannelAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['BranchSaleChannelMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['BranchSaleChannelMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['BranchSaleChannelSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelAvgAggregate'] = ResolversParentTypes['BranchSaleChannelAvgAggregate']> = ResolversObject<{
  saleChannel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelConnection'] = ResolversParentTypes['BranchSaleChannelConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BranchSaleChannelEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelCountAggregate'] = ResolversParentTypes['BranchSaleChannelCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saleChannel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelDeleteResponse'] = ResolversParentTypes['BranchSaleChannelDeleteResponse']> = ResolversObject<{
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  saleChannel?: Resolver<Maybe<ResolversTypes['SaleChannel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelEdge'] = ResolversParentTypes['BranchSaleChannelEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelMaxAggregate'] = ResolversParentTypes['BranchSaleChannelMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  saleChannel?: Resolver<Maybe<ResolversTypes['SaleChannel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelMinAggregate'] = ResolversParentTypes['BranchSaleChannelMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  saleChannel?: Resolver<Maybe<ResolversTypes['SaleChannel']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BranchSaleChannelSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchSaleChannelSumAggregate'] = ResolversParentTypes['BranchSaleChannelSumAggregate']> = ResolversObject<{
  saleChannel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ConnectionCursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionCursor'], any> {
  name: 'ConnectionCursor';
}

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = ResolversObject<{
  addresses?: Resolver<Maybe<ResolversTypes['CustomerAddressesConnection']>, ParentType, ContextType, RequireFields<CustomerAddressesArgs, 'filter' | 'paging' | 'sorting'>>;
  addressesAggregate?: Resolver<Array<ResolversTypes['CustomerAddressesAggregateResponse']>, ParentType, ContextType, Partial<CustomerAddressesAggregateArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['CustomerGender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ward?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesAggregateGroupBy'] = ResolversParentTypes['CustomerAddressesAggregateGroupBy']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ward?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesAggregateResponse'] = ResolversParentTypes['CustomerAddressesAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['CustomerAddressesAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['CustomerAddressesCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['CustomerAddressesAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['CustomerAddressesMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['CustomerAddressesMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['CustomerAddressesSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesAvgAggregate'] = ResolversParentTypes['CustomerAddressesAvgAggregate']> = ResolversObject<{
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesConnection'] = ResolversParentTypes['CustomerAddressesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['CustomerAddress']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesCountAggregate'] = ResolversParentTypes['CustomerAddressesCountAggregate']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  distanceKm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ward?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesMaxAggregate'] = ResolversParentTypes['CustomerAddressesMaxAggregate']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ward?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesMinAggregate'] = ResolversParentTypes['CustomerAddressesMinAggregate']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ward?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAddressesSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressesSumAggregate'] = ResolversParentTypes['CustomerAddressesSumAggregate']> = ResolversObject<{
  distanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAggregateGroupBy'] = ResolversParentTypes['CustomerAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<CustomerAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<CustomerAggregateGroupByDeletedAtArgs, 'by'>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['CustomerGender']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<CustomerAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAggregateResponse'] = ResolversParentTypes['CustomerAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['CustomerAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['CustomerCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['CustomerAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['CustomerMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['CustomerMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['CustomerSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAvgAggregate'] = ResolversParentTypes['CustomerAvgAggregate']> = ResolversObject<{
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerConnection'] = ResolversParentTypes['CustomerConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CustomerEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerCountAggregate'] = ResolversParentTypes['CustomerCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDeleteResponse'] = ResolversParentTypes['CustomerDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['CustomerGender']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerEdge'] = ResolversParentTypes['CustomerEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerMaxAggregate'] = ResolversParentTypes['CustomerMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['CustomerGender']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerMinAggregate'] = ResolversParentTypes['CustomerMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['CustomerGender']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerSumAggregate'] = ResolversParentTypes['CustomerSumAggregate']> = ResolversObject<{
  gender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteManyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteManyResponse'] = ResolversParentTypes['DeleteManyResponse']> = ResolversObject<{
  deletedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileAggregateGroupBy'] = ResolversParentTypes['FileAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<FileAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<FileAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<FileAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileAggregateResponse'] = ResolversParentTypes['FileAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['FileCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['FileAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['FileMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['FileMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileCountAggregate'] = ResolversParentTypes['FileCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileDeleteResponse'] = ResolversParentTypes['FileDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileMaxAggregate'] = ResolversParentTypes['FileMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileMinAggregate'] = ResolversParentTypes['FileMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaAggregateGroupBy'] = ResolversParentTypes['MediaAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<MediaAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<MediaAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<MediaAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaAggregateResponse'] = ResolversParentTypes['MediaAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['MediaCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['MediaAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['MediaMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['MediaMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['MediaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCountAggregate'] = ResolversParentTypes['MediaCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaDeleteResponse'] = ResolversParentTypes['MediaDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaMaxAggregate'] = ResolversParentTypes['MediaMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaMinAggregate'] = ResolversParentTypes['MediaMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAddressesToCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationAddAddressesToCustomerArgs, 'input'>>;
  addBranchesToOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationAddBranchesToOrgArgs, 'input'>>;
  addMembersToOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationAddMembersToOrgArgs, 'input'>>;
  addMembersToOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationAddMembersToOrgBranchArgs, 'input'>>;
  addOptionGroupsToProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationAddOptionGroupsToProductArgs, 'input'>>;
  addOptionsToOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationAddOptionsToOrderProductArgs, 'input'>>;
  addOptionsToProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationAddOptionsToProductOptionGroupArgs, 'input'>>;
  addProductsToProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationAddProductsToProductCategoryArgs, 'input'>>;
  addProductsToProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationAddProductsToProductOptionGroupArgs, 'input'>>;
  addProductsToProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationAddProductsToProductTypeArgs, 'input'>>;
  addProductsToProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationAddProductsToProductUnitArgs, 'input'>>;
  authConfirmPasswordReset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthConfirmPasswordResetArgs, 'input'>>;
  authLogin?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthLoginArgs, 'input'>>;
  authRefreshToken?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthRefreshTokenArgs, 'input'>>;
  authRegister?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthRegisterArgs, 'input'>>;
  authRequestPasswordReset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthRequestPasswordResetArgs, 'input'>>;
  authResendVerification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthResendVerificationArgs, 'input'>>;
  authResendVerificationWithEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthResendVerificationWithEmailArgs, 'input'>>;
  authVerify?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthVerifyArgs, 'input'>>;
  createManyAccountPasswordResets?: Resolver<Array<ResolversTypes['AccountPasswordReset']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountPasswordResetsArgs, 'input'>>;
  createManyAccountVerfications?: Resolver<Array<ResolversTypes['AccountVerfication']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountVerficationsArgs, 'input'>>;
  createManyAccounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountsArgs, 'input'>>;
  createManyApiKeys?: Resolver<Array<ResolversTypes['ApiKey']>, ParentType, ContextType, RequireFields<MutationCreateManyApiKeysArgs, 'input'>>;
  createManyBranchSaleChannels?: Resolver<Array<ResolversTypes['BranchSaleChannel']>, ParentType, ContextType, RequireFields<MutationCreateManyBranchSaleChannelsArgs, 'input'>>;
  createManyCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationCreateManyCustomersArgs, 'input'>>;
  createManyFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateManyFilesArgs, 'input'>>;
  createManyMedia?: Resolver<Array<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<MutationCreateManyMediaArgs, 'input'>>;
  createManyOrderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType, RequireFields<MutationCreateManyOrderProductsArgs, 'input'>>;
  createManyOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateManyOrdersArgs, 'input'>>;
  createManyOrgBranchMembers?: Resolver<Array<ResolversTypes['OrgBranchMember']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgBranchMembersArgs, 'input'>>;
  createManyOrgBranches?: Resolver<Array<ResolversTypes['OrgBranch']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgBranchesArgs, 'input'>>;
  createManyOrgMembers?: Resolver<Array<ResolversTypes['OrgMember']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgMembersArgs, 'input'>>;
  createManyOrgs?: Resolver<Array<ResolversTypes['Org']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgsArgs, 'input'>>;
  createManyProductCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<MutationCreateManyProductCategoriesArgs, 'input'>>;
  createManyProductOptionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType, RequireFields<MutationCreateManyProductOptionGroupsArgs, 'input'>>;
  createManyProductOptions?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType, RequireFields<MutationCreateManyProductOptionsArgs, 'input'>>;
  createManyProductPrices?: Resolver<Array<ResolversTypes['ProductPrice']>, ParentType, ContextType, RequireFields<MutationCreateManyProductPricesArgs, 'input'>>;
  createManyProductTypes?: Resolver<Array<ResolversTypes['ProductType']>, ParentType, ContextType, RequireFields<MutationCreateManyProductTypesArgs, 'input'>>;
  createManyProductUnits?: Resolver<Array<ResolversTypes['ProductUnit']>, ParentType, ContextType, RequireFields<MutationCreateManyProductUnitsArgs, 'input'>>;
  createManyProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateManyProductsArgs, 'input'>>;
  createOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationCreateOneAccountArgs, 'input'>>;
  createOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType, RequireFields<MutationCreateOneAccountPasswordResetArgs, 'input'>>;
  createOneAccountVerfication?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType, RequireFields<MutationCreateOneAccountVerficationArgs, 'input'>>;
  createOneApiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType, RequireFields<MutationCreateOneApiKeyArgs, 'input'>>;
  createOneBranchSaleChannel?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType, RequireFields<MutationCreateOneBranchSaleChannelArgs, 'input'>>;
  createOneCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateOneCustomerArgs, 'input'>>;
  createOneFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationCreateOneFileArgs, 'input'>>;
  createOneMedia?: Resolver<ResolversTypes['Media'], ParentType, ContextType, RequireFields<MutationCreateOneMediaArgs, 'input'>>;
  createOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOneOrderArgs, 'input'>>;
  createOneOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationCreateOneOrderProductArgs, 'input'>>;
  createOneOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationCreateOneOrgArgs, 'input'>>;
  createOneOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationCreateOneOrgBranchArgs, 'input'>>;
  createOneOrgBranchMember?: Resolver<ResolversTypes['OrgBranchMember'], ParentType, ContextType, RequireFields<MutationCreateOneOrgBranchMemberArgs, 'input'>>;
  createOneOrgMember?: Resolver<ResolversTypes['OrgMember'], ParentType, ContextType, RequireFields<MutationCreateOneOrgMemberArgs, 'input'>>;
  createOneProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateOneProductArgs, 'input'>>;
  createOneProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationCreateOneProductCategoryArgs, 'input'>>;
  createOneProductOption?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType, RequireFields<MutationCreateOneProductOptionArgs, 'input'>>;
  createOneProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationCreateOneProductOptionGroupArgs, 'input'>>;
  createOneProductPrice?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType, RequireFields<MutationCreateOneProductPriceArgs, 'input'>>;
  createOneProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationCreateOneProductTypeArgs, 'input'>>;
  createOneProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationCreateOneProductUnitArgs, 'input'>>;
  deleteManyAccountPasswordResets?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountPasswordResetsArgs, 'input'>>;
  deleteManyAccountVerfications?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountVerficationsArgs, 'input'>>;
  deleteManyAccounts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountsArgs, 'input'>>;
  deleteManyApiKeys?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyApiKeysArgs, 'input'>>;
  deleteManyBranchSaleChannels?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyBranchSaleChannelsArgs, 'input'>>;
  deleteManyCustomers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyCustomersArgs, 'input'>>;
  deleteManyFiles?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyFilesArgs, 'input'>>;
  deleteManyMedia?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyMediaArgs, 'input'>>;
  deleteManyOrderProducts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrderProductsArgs, 'input'>>;
  deleteManyOrders?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrdersArgs, 'input'>>;
  deleteManyOrgBranchMembers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgBranchMembersArgs, 'input'>>;
  deleteManyOrgBranches?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgBranchesArgs, 'input'>>;
  deleteManyOrgMembers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgMembersArgs, 'input'>>;
  deleteManyOrgs?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgsArgs, 'input'>>;
  deleteManyProductCategories?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductCategoriesArgs, 'input'>>;
  deleteManyProductOptionGroups?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductOptionGroupsArgs, 'input'>>;
  deleteManyProductOptions?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductOptionsArgs, 'input'>>;
  deleteManyProductPrices?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductPricesArgs, 'input'>>;
  deleteManyProductTypes?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductTypesArgs, 'input'>>;
  deleteManyProductUnits?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductUnitsArgs, 'input'>>;
  deleteManyProducts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductsArgs, 'input'>>;
  deleteOneAccount?: Resolver<ResolversTypes['AccountDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountArgs, 'input'>>;
  deleteOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordResetDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountPasswordResetArgs, 'input'>>;
  deleteOneAccountVerfication?: Resolver<ResolversTypes['AccountVerficationDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountVerficationArgs, 'input'>>;
  deleteOneApiKey?: Resolver<ResolversTypes['ApiKeyDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneApiKeyArgs, 'input'>>;
  deleteOneBranchSaleChannel?: Resolver<ResolversTypes['BranchSaleChannelDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneBranchSaleChannelArgs, 'input'>>;
  deleteOneCustomer?: Resolver<ResolversTypes['CustomerDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneCustomerArgs, 'input'>>;
  deleteOneFile?: Resolver<ResolversTypes['FileDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneFileArgs, 'input'>>;
  deleteOneMedia?: Resolver<ResolversTypes['MediaDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneMediaArgs, 'input'>>;
  deleteOneOrder?: Resolver<ResolversTypes['OrderDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrderArgs, 'input'>>;
  deleteOneOrderProduct?: Resolver<ResolversTypes['OrderProductDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrderProductArgs, 'input'>>;
  deleteOneOrg?: Resolver<ResolversTypes['OrgDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrgArgs, 'input'>>;
  deleteOneOrgBranch?: Resolver<ResolversTypes['OrgBranchDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrgBranchArgs, 'input'>>;
  deleteOneOrgBranchMember?: Resolver<ResolversTypes['OrgBranchMemberDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrgBranchMemberArgs, 'input'>>;
  deleteOneOrgMember?: Resolver<ResolversTypes['OrgMemberDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneOrgMemberArgs, 'input'>>;
  deleteOneProduct?: Resolver<ResolversTypes['ProductDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductArgs, 'input'>>;
  deleteOneProductCategory?: Resolver<ResolversTypes['ProductCategoryDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductCategoryArgs, 'input'>>;
  deleteOneProductOption?: Resolver<ResolversTypes['ProductOptionDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductOptionArgs, 'input'>>;
  deleteOneProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroupDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductOptionGroupArgs, 'input'>>;
  deleteOneProductPrice?: Resolver<ResolversTypes['ProductPriceDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductPriceArgs, 'input'>>;
  deleteOneProductType?: Resolver<ResolversTypes['ProductTypeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductTypeArgs, 'input'>>;
  deleteOneProductUnit?: Resolver<ResolversTypes['ProductUnitDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductUnitArgs, 'input'>>;
  orderImportByFiles?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationOrderImportByFilesArgs, 'input'>>;
  productImportByFile?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationProductImportByFileArgs, 'input'>>;
  productPriceImportByFile?: Resolver<Array<ResolversTypes['ProductPrice']>, ParentType, ContextType, RequireFields<MutationProductPriceImportByFileArgs, 'input'>>;
  setAddressesOnCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationSetAddressesOnCustomerArgs, 'input'>>;
  setBranchesOnOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationSetBranchesOnOrgArgs, 'input'>>;
  setMembersOnOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationSetMembersOnOrgArgs, 'input'>>;
  setMembersOnOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationSetMembersOnOrgBranchArgs, 'input'>>;
  setOptionGroupsOnProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationSetOptionGroupsOnProductArgs, 'input'>>;
  setOptionsOnOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationSetOptionsOnOrderProductArgs, 'input'>>;
  setOptionsOnProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationSetOptionsOnProductOptionGroupArgs, 'input'>>;
  setProductOnOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationSetProductOnOrderProductArgs, 'input'>>;
  setProductsOnProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductCategoryArgs, 'input'>>;
  setProductsOnProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductOptionGroupArgs, 'input'>>;
  setProductsOnProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductTypeArgs, 'input'>>;
  setProductsOnProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductUnitArgs, 'input'>>;
  setUnitOnProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationSetUnitOnProductArgs, 'input'>>;
  updateManyAccountPasswordResets?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountPasswordResetsArgs, 'input'>>;
  updateManyAccountVerfications?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountVerficationsArgs, 'input'>>;
  updateManyAccounts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountsArgs, 'input'>>;
  updateManyApiKeys?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyApiKeysArgs, 'input'>>;
  updateManyBranchSaleChannels?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyBranchSaleChannelsArgs, 'input'>>;
  updateManyCustomers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyCustomersArgs, 'input'>>;
  updateManyFiles?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyFilesArgs, 'input'>>;
  updateManyMedia?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyMediaArgs, 'input'>>;
  updateManyOrderProducts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrderProductsArgs, 'input'>>;
  updateManyOrders?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersArgs, 'input'>>;
  updateManyOrgBranchMembers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgBranchMembersArgs, 'input'>>;
  updateManyOrgBranches?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgBranchesArgs, 'input'>>;
  updateManyOrgMembers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgMembersArgs, 'input'>>;
  updateManyOrgs?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgsArgs, 'input'>>;
  updateManyProductCategories?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductCategoriesArgs, 'input'>>;
  updateManyProductOptionGroups?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductOptionGroupsArgs, 'input'>>;
  updateManyProductOptions?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductOptionsArgs, 'input'>>;
  updateManyProductPrices?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductPricesArgs, 'input'>>;
  updateManyProductTypes?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductTypesArgs, 'input'>>;
  updateManyProductUnits?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductUnitsArgs, 'input'>>;
  updateManyProducts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsArgs, 'input'>>;
  updateOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountArgs, 'input'>>;
  updateOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountPasswordResetArgs, 'input'>>;
  updateOneAccountVerfication?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountVerficationArgs, 'input'>>;
  updateOneApiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType, RequireFields<MutationUpdateOneApiKeyArgs, 'input'>>;
  updateOneBranchSaleChannel?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType, RequireFields<MutationUpdateOneBranchSaleChannelArgs, 'input'>>;
  updateOneCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateOneCustomerArgs, 'input'>>;
  updateOneFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationUpdateOneFileArgs, 'input'>>;
  updateOneMedia?: Resolver<ResolversTypes['Media'], ParentType, ContextType, RequireFields<MutationUpdateOneMediaArgs, 'input'>>;
  updateOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOneOrderArgs, 'input'>>;
  updateOneOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationUpdateOneOrderProductArgs, 'input'>>;
  updateOneOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationUpdateOneOrgArgs, 'input'>>;
  updateOneOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationUpdateOneOrgBranchArgs, 'input'>>;
  updateOneOrgBranchMember?: Resolver<ResolversTypes['OrgBranchMember'], ParentType, ContextType, RequireFields<MutationUpdateOneOrgBranchMemberArgs, 'input'>>;
  updateOneOrgMember?: Resolver<ResolversTypes['OrgMember'], ParentType, ContextType, RequireFields<MutationUpdateOneOrgMemberArgs, 'input'>>;
  updateOneProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateOneProductArgs, 'input'>>;
  updateOneProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationUpdateOneProductCategoryArgs, 'input'>>;
  updateOneProductOption?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType, RequireFields<MutationUpdateOneProductOptionArgs, 'input'>>;
  updateOneProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationUpdateOneProductOptionGroupArgs, 'input'>>;
  updateOneProductPrice?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType, RequireFields<MutationUpdateOneProductPriceArgs, 'input'>>;
  updateOneProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationUpdateOneProductTypeArgs, 'input'>>;
  updateOneProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationUpdateOneProductUnitArgs, 'input'>>;
}>;

export type OffsetPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OffsetPageInfo'] = ResolversParentTypes['OffsetPageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleChannel?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType>;
  shippingAddressCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressDistanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingAddressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressWard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregateGroupBy'] = ResolversParentTypes['OrderAggregateGroupBy']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderAggregateGroupByDeletedAtArgs, 'by'>>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregateResponse'] = ResolversParentTypes['OrderAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrderAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrderCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrderAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrderSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAvgAggregate'] = ResolversParentTypes['OrderAvgAggregate']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCountAggregate'] = ResolversParentTypes['OrderCountAggregate']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDeleteResponse'] = ResolversParentTypes['OrderDeleteResponse']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressDistanceKm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingAddressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressWard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMaxAggregate'] = ResolversParentTypes['OrderMaxAggregate']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMinAggregate'] = ResolversParentTypes['OrderMinAggregate']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['OrderProductOptionsConnection'], ParentType, ContextType, RequireFields<OrderProductOptionsArgs, 'filter' | 'paging' | 'sorting'>>;
  optionsAggregate?: Resolver<Array<ResolversTypes['OrderProductOptionsAggregateResponse']>, ParentType, ContextType, Partial<OrderProductOptionsAggregateArgs>>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductAggregateGroupBy'] = ResolversParentTypes['OrderProductAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderProductAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderProductAggregateGroupByDeletedAtArgs, 'by'>>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrderProductAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductAggregateResponse'] = ResolversParentTypes['OrderProductAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrderProductAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrderProductCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrderProductAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderProductMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderProductMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrderProductSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductAvgAggregate'] = ResolversParentTypes['OrderProductAvgAggregate']> = ResolversObject<{
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductConnection'] = ResolversParentTypes['OrderProductConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrderProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductCountAggregate'] = ResolversParentTypes['OrderProductCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductDeleteResponse'] = ResolversParentTypes['OrderProductDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductEdge'] = ResolversParentTypes['OrderProductEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductMaxAggregate'] = ResolversParentTypes['OrderProductMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductMinAggregate'] = ResolversParentTypes['OrderProductMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsAggregateGroupBy'] = ResolversParentTypes['OrderProductOptionsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsAggregateResponse'] = ResolversParentTypes['OrderProductOptionsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrderProductOptionsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrderProductOptionsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrderProductOptionsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderProductOptionsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderProductOptionsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrderProductOptionsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsAvgAggregate'] = ResolversParentTypes['OrderProductOptionsAvgAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsConnection'] = ResolversParentTypes['OrderProductOptionsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsCountAggregate'] = ResolversParentTypes['OrderProductOptionsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsMaxAggregate'] = ResolversParentTypes['OrderProductOptionsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsMinAggregate'] = ResolversParentTypes['OrderProductOptionsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductOptionsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductOptionsSumAggregate'] = ResolversParentTypes['OrderProductOptionsSumAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductSumAggregate'] = ResolversParentTypes['OrderProductSumAggregate']> = ResolversObject<{
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderSumAggregate'] = ResolversParentTypes['OrderSumAggregate']> = ResolversObject<{
  commissionPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commissionPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grossPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgResolvers<ContextType = any, ParentType extends ResolversParentTypes['Org'] = ResolversParentTypes['Org']> = ResolversObject<{
  branches?: Resolver<Maybe<ResolversTypes['OrgBranchesConnection']>, ParentType, ContextType, RequireFields<OrgBranchesArgs, 'filter' | 'paging' | 'sorting'>>;
  branchesAggregate?: Resolver<Array<ResolversTypes['OrgBranchesAggregateResponse']>, ParentType, ContextType, Partial<OrgBranchesAggregateArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['OrgMembersConnection']>, ParentType, ContextType, RequireFields<OrgMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  membersAggregate?: Resolver<Array<ResolversTypes['OrgMembersAggregateResponse']>, ParentType, ContextType, Partial<OrgMembersAggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['OrgType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgAggregateGroupBy'] = ResolversParentTypes['OrgAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgAggregateGroupByDeletedAtArgs, 'by'>>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OrgType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgAggregateResponse'] = ResolversParentTypes['OrgAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrgAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrgCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrgSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgAvgAggregate'] = ResolversParentTypes['OrgAvgAggregate']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranch'] = ResolversParentTypes['OrgBranch']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<ResolversTypes['OrgBranchMembersConnection'], ParentType, ContextType, RequireFields<OrgBranchMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  membersAggregate?: Resolver<Array<ResolversTypes['OrgBranchMembersAggregateResponse']>, ParentType, ContextType, Partial<OrgBranchMembersAggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchAggregateGroupBy'] = ResolversParentTypes['OrgBranchAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchAggregateGroupByDeletedAtArgs, 'by'>>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchAggregateResponse'] = ResolversParentTypes['OrgBranchAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['OrgBranchCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgBranchAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgBranchMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgBranchMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchConnection'] = ResolversParentTypes['OrgBranchConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrgBranchEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchCountAggregate'] = ResolversParentTypes['OrgBranchCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchDeleteResponse'] = ResolversParentTypes['OrgBranchDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchEdge'] = ResolversParentTypes['OrgBranchEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMaxAggregate'] = ResolversParentTypes['OrgBranchMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMember'] = ResolversParentTypes['OrgBranchMember']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['OrgBranchRole'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberAggregateGroupBy'] = ResolversParentTypes['OrgBranchMemberAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchMemberAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchMemberAggregateGroupByDeletedAtArgs, 'by'>>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchMemberAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberAggregateResponse'] = ResolversParentTypes['OrgBranchMemberAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrgBranchMemberAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrgBranchMemberCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgBranchMemberAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgBranchMemberMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgBranchMemberMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrgBranchMemberSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberAvgAggregate'] = ResolversParentTypes['OrgBranchMemberAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberConnection'] = ResolversParentTypes['OrgBranchMemberConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrgBranchMemberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberCountAggregate'] = ResolversParentTypes['OrgBranchMemberCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberDeleteResponse'] = ResolversParentTypes['OrgBranchMemberDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberEdge'] = ResolversParentTypes['OrgBranchMemberEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrgBranchMember'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberMaxAggregate'] = ResolversParentTypes['OrgBranchMemberMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberMinAggregate'] = ResolversParentTypes['OrgBranchMemberMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMemberSumAggregate'] = ResolversParentTypes['OrgBranchMemberSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersAggregateGroupBy'] = ResolversParentTypes['OrgBranchMembersAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersAggregateResponse'] = ResolversParentTypes['OrgBranchMembersAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrgBranchMembersAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrgBranchMembersCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgBranchMembersAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgBranchMembersMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgBranchMembersMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrgBranchMembersSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersAvgAggregate'] = ResolversParentTypes['OrgBranchMembersAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersConnection'] = ResolversParentTypes['OrgBranchMembersConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['OrgBranchMember']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersCountAggregate'] = ResolversParentTypes['OrgBranchMembersCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersMaxAggregate'] = ResolversParentTypes['OrgBranchMembersMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersMinAggregate'] = ResolversParentTypes['OrgBranchMembersMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgBranchRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMembersSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMembersSumAggregate'] = ResolversParentTypes['OrgBranchMembersSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMinAggregate'] = ResolversParentTypes['OrgBranchMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesAggregateGroupBy'] = ResolversParentTypes['OrgBranchesAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesAggregateResponse'] = ResolversParentTypes['OrgBranchesAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['OrgBranchesCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgBranchesAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgBranchesMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgBranchesMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesConnection'] = ResolversParentTypes['OrgBranchesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['OrgBranch']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesCountAggregate'] = ResolversParentTypes['OrgBranchesCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesMaxAggregate'] = ResolversParentTypes['OrgBranchesMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesMinAggregate'] = ResolversParentTypes['OrgBranchesMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgConnection'] = ResolversParentTypes['OrgConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrgEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgCountAggregate'] = ResolversParentTypes['OrgCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgDeleteResponse'] = ResolversParentTypes['OrgDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OrgType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgEdge'] = ResolversParentTypes['OrgEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMaxAggregate'] = ResolversParentTypes['OrgMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OrgType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMember'] = ResolversParentTypes['OrgMember']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['OrgRole'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberAggregateGroupBy'] = ResolversParentTypes['OrgMemberAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgMemberAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgMemberAggregateGroupByDeletedAtArgs, 'by'>>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgMemberAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberAggregateResponse'] = ResolversParentTypes['OrgMemberAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrgMemberAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrgMemberCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgMemberAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgMemberMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgMemberMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrgMemberSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberAvgAggregate'] = ResolversParentTypes['OrgMemberAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberConnection'] = ResolversParentTypes['OrgMemberConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OrgMemberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberCountAggregate'] = ResolversParentTypes['OrgMemberCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberDeleteResponse'] = ResolversParentTypes['OrgMemberDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberEdge'] = ResolversParentTypes['OrgMemberEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrgMember'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberMaxAggregate'] = ResolversParentTypes['OrgMemberMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberMinAggregate'] = ResolversParentTypes['OrgMemberMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMemberSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMemberSumAggregate'] = ResolversParentTypes['OrgMemberSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersAggregateGroupBy'] = ResolversParentTypes['OrgMembersAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersAggregateResponse'] = ResolversParentTypes['OrgMembersAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['OrgMembersAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['OrgMembersCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgMembersAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgMembersMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgMembersMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrgMembersSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersAvgAggregate'] = ResolversParentTypes['OrgMembersAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersConnection'] = ResolversParentTypes['OrgMembersConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['OrgMember']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersCountAggregate'] = ResolversParentTypes['OrgMembersCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersMaxAggregate'] = ResolversParentTypes['OrgMembersMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersMinAggregate'] = ResolversParentTypes['OrgMembersMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['OrgRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMembersSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMembersSumAggregate'] = ResolversParentTypes['OrgMembersSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMinAggregate'] = ResolversParentTypes['OrgMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OrgType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgSumAggregate'] = ResolversParentTypes['OrgSumAggregate']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  categories?: Resolver<ResolversTypes['ProductCategoriesConnection'], ParentType, ContextType, RequireFields<ProductCategoriesArgs, 'filter' | 'paging' | 'sorting'>>;
  categoriesAggregate?: Resolver<Array<ResolversTypes['ProductCategoriesAggregateResponse']>, ParentType, ContextType, Partial<ProductCategoriesAggregateArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionGroups?: Resolver<ResolversTypes['ProductOptionGroupsConnection'], ParentType, ContextType, RequireFields<ProductOptionGroupsArgs, 'filter' | 'paging' | 'sorting'>>;
  optionGroupsAggregate?: Resolver<Array<ResolversTypes['ProductOptionGroupsAggregateResponse']>, ParentType, ContextType, Partial<ProductOptionGroupsAggregateArgs>>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregateGroupBy'] = ResolversParentTypes['ProductAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductAggregateGroupByDeletedAtArgs, 'by'>>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregateResponse'] = ResolversParentTypes['ProductAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAvgAggregate'] = ResolversParentTypes['ProductAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesAggregateGroupBy'] = ResolversParentTypes['ProductCategoriesAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesAggregateResponse'] = ResolversParentTypes['ProductCategoriesAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductCategoriesCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductCategoriesAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductCategoriesMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductCategoriesMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesConnection'] = ResolversParentTypes['ProductCategoriesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesCountAggregate'] = ResolversParentTypes['ProductCategoriesCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesMaxAggregate'] = ResolversParentTypes['ProductCategoriesMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoriesMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoriesMinAggregate'] = ResolversParentTypes['ProductCategoriesMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsConnection']>, ParentType, ContextType, RequireFields<ProductCategoryProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  productsAggregate?: Resolver<Array<ResolversTypes['ProductCategoryProductsAggregateResponse']>, ParentType, ContextType, Partial<ProductCategoryProductsAggregateArgs>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryAggregateGroupBy'] = ResolversParentTypes['ProductCategoryAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductCategoryAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductCategoryAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductCategoryAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryAggregateResponse'] = ResolversParentTypes['ProductCategoryAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductCategoryCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductCategoryAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductCategoryMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductCategoryMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryConnection'] = ResolversParentTypes['ProductCategoryConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductCategoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryCountAggregate'] = ResolversParentTypes['ProductCategoryCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryDeleteResponse'] = ResolversParentTypes['ProductCategoryDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryEdge'] = ResolversParentTypes['ProductCategoryEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryMaxAggregate'] = ResolversParentTypes['ProductCategoryMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryMinAggregate'] = ResolversParentTypes['ProductCategoryMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsAggregateGroupBy'] = ResolversParentTypes['ProductCategoryProductsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsAggregateResponse'] = ResolversParentTypes['ProductCategoryProductsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductCategoryProductsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsAvgAggregate'] = ResolversParentTypes['ProductCategoryProductsAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsConnection'] = ResolversParentTypes['ProductCategoryProductsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsCountAggregate'] = ResolversParentTypes['ProductCategoryProductsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsMaxAggregate'] = ResolversParentTypes['ProductCategoryProductsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsMinAggregate'] = ResolversParentTypes['ProductCategoryProductsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryProductsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryProductsSumAggregate'] = ResolversParentTypes['ProductCategoryProductsSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCountAggregate'] = ResolversParentTypes['ProductCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDeleteResponse'] = ResolversParentTypes['ProductDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMaxAggregate'] = ResolversParentTypes['ProductMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMinAggregate'] = ResolversParentTypes['ProductMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionAggregateGroupBy'] = ResolversParentTypes['ProductOptionAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionAggregateGroupByDeletedAtArgs, 'by'>>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionAggregateResponse'] = ResolversParentTypes['ProductOptionAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductOptionAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductOptionCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductOptionAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductOptionMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductOptionMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductOptionSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionAvgAggregate'] = ResolversParentTypes['ProductOptionAvgAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionConnection'] = ResolversParentTypes['ProductOptionConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductOptionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionCountAggregate'] = ResolversParentTypes['ProductOptionCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionDeleteResponse'] = ResolversParentTypes['ProductOptionDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionEdge'] = ResolversParentTypes['ProductOptionEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroup'] = ResolversParentTypes['ProductOptionGroup']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsConnection']>, ParentType, ContextType, RequireFields<ProductOptionGroupOptionsArgs, 'filter' | 'paging' | 'sorting'>>;
  optionsAggregate?: Resolver<Array<ResolversTypes['ProductOptionGroupOptionsAggregateResponse']>, ParentType, ContextType, Partial<ProductOptionGroupOptionsAggregateArgs>>;
  products?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsConnection']>, ParentType, ContextType, RequireFields<ProductOptionGroupProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  productsAggregate?: Resolver<Array<ResolversTypes['ProductOptionGroupProductsAggregateResponse']>, ParentType, ContextType, Partial<ProductOptionGroupProductsAggregateArgs>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupAggregateGroupBy'] = ResolversParentTypes['ProductOptionGroupAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionGroupAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionGroupAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductOptionGroupAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupAggregateResponse'] = ResolversParentTypes['ProductOptionGroupAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductOptionGroupCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductOptionGroupAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductOptionGroupMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductOptionGroupMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupConnection'] = ResolversParentTypes['ProductOptionGroupConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductOptionGroupEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupCountAggregate'] = ResolversParentTypes['ProductOptionGroupCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupDeleteResponse'] = ResolversParentTypes['ProductOptionGroupDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupEdge'] = ResolversParentTypes['ProductOptionGroupEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupMaxAggregate'] = ResolversParentTypes['ProductOptionGroupMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupMinAggregate'] = ResolversParentTypes['ProductOptionGroupMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsAggregateGroupBy'] = ResolversParentTypes['ProductOptionGroupOptionsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsAggregateResponse'] = ResolversParentTypes['ProductOptionGroupOptionsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductOptionGroupOptionsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsAvgAggregate'] = ResolversParentTypes['ProductOptionGroupOptionsAvgAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsConnection'] = ResolversParentTypes['ProductOptionGroupOptionsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsCountAggregate'] = ResolversParentTypes['ProductOptionGroupOptionsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsMaxAggregate'] = ResolversParentTypes['ProductOptionGroupOptionsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsMinAggregate'] = ResolversParentTypes['ProductOptionGroupOptionsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupOptionsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupOptionsSumAggregate'] = ResolversParentTypes['ProductOptionGroupOptionsSumAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsAggregateGroupBy'] = ResolversParentTypes['ProductOptionGroupProductsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsAggregateResponse'] = ResolversParentTypes['ProductOptionGroupProductsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductOptionGroupProductsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsAvgAggregate'] = ResolversParentTypes['ProductOptionGroupProductsAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsConnection'] = ResolversParentTypes['ProductOptionGroupProductsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsCountAggregate'] = ResolversParentTypes['ProductOptionGroupProductsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsMaxAggregate'] = ResolversParentTypes['ProductOptionGroupProductsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsMinAggregate'] = ResolversParentTypes['ProductOptionGroupProductsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupProductsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupProductsSumAggregate'] = ResolversParentTypes['ProductOptionGroupProductsSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsAggregateGroupBy'] = ResolversParentTypes['ProductOptionGroupsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsAggregateResponse'] = ResolversParentTypes['ProductOptionGroupsAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductOptionGroupsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductOptionGroupsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductOptionGroupsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductOptionGroupsMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsConnection'] = ResolversParentTypes['ProductOptionGroupsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsCountAggregate'] = ResolversParentTypes['ProductOptionGroupsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsMaxAggregate'] = ResolversParentTypes['ProductOptionGroupsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionGroupsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupsMinAggregate'] = ResolversParentTypes['ProductOptionGroupsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionMaxAggregate'] = ResolversParentTypes['ProductOptionMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionMinAggregate'] = ResolversParentTypes['ProductOptionMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductOptionSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionSumAggregate'] = ResolversParentTypes['ProductOptionSumAggregate']> = ResolversObject<{
  diffPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPrice'] = ResolversParentTypes['ProductPrice']> = ResolversObject<{
  branchSaleChannel?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceAggregateGroupBy'] = ResolversParentTypes['ProductPriceAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductPriceAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductPriceAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductPriceAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceAggregateResponse'] = ResolversParentTypes['ProductPriceAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductPriceAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductPriceCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductPriceAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductPriceMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductPriceMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductPriceSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceAvgAggregate'] = ResolversParentTypes['ProductPriceAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceConnection'] = ResolversParentTypes['ProductPriceConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductPriceEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceCountAggregate'] = ResolversParentTypes['ProductPriceCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceDeleteResponse'] = ResolversParentTypes['ProductPriceDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceEdge'] = ResolversParentTypes['ProductPriceEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceMaxAggregate'] = ResolversParentTypes['ProductPriceMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceMinAggregate'] = ResolversParentTypes['ProductPriceMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductPriceSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceSumAggregate'] = ResolversParentTypes['ProductPriceSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSumAggregate'] = ResolversParentTypes['ProductSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductType'] = ResolversParentTypes['ProductType']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['ProductTypeProductsConnection']>, ParentType, ContextType, RequireFields<ProductTypeProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  productsAggregate?: Resolver<Array<ResolversTypes['ProductTypeProductsAggregateResponse']>, ParentType, ContextType, Partial<ProductTypeProductsAggregateArgs>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeAggregateGroupBy'] = ResolversParentTypes['ProductTypeAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductTypeAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductTypeAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductTypeAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeAggregateResponse'] = ResolversParentTypes['ProductTypeAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductTypeCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductTypeAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductTypeMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductTypeMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeConnection'] = ResolversParentTypes['ProductTypeConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductTypeEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeCountAggregate'] = ResolversParentTypes['ProductTypeCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeDeleteResponse'] = ResolversParentTypes['ProductTypeDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeEdge'] = ResolversParentTypes['ProductTypeEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeMaxAggregate'] = ResolversParentTypes['ProductTypeMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeMinAggregate'] = ResolversParentTypes['ProductTypeMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsAggregateGroupBy'] = ResolversParentTypes['ProductTypeProductsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsAggregateResponse'] = ResolversParentTypes['ProductTypeProductsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductTypeProductsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductTypeProductsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductTypeProductsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductTypeProductsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductTypeProductsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductTypeProductsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsAvgAggregate'] = ResolversParentTypes['ProductTypeProductsAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsConnection'] = ResolversParentTypes['ProductTypeProductsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsCountAggregate'] = ResolversParentTypes['ProductTypeProductsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsMaxAggregate'] = ResolversParentTypes['ProductTypeProductsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsMinAggregate'] = ResolversParentTypes['ProductTypeProductsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductTypeProductsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTypeProductsSumAggregate'] = ResolversParentTypes['ProductTypeProductsSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnit'] = ResolversParentTypes['ProductUnit']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['ProductUnitProductsConnection']>, ParentType, ContextType, RequireFields<ProductUnitProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  productsAggregate?: Resolver<Array<ResolversTypes['ProductUnitProductsAggregateResponse']>, ParentType, ContextType, Partial<ProductUnitProductsAggregateArgs>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitAggregateGroupBy'] = ResolversParentTypes['ProductUnitAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductUnitAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductUnitAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductUnitAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitAggregateResponse'] = ResolversParentTypes['ProductUnitAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ProductUnitCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductUnitAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductUnitMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductUnitMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitConnection'] = ResolversParentTypes['ProductUnitConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProductUnitEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitCountAggregate'] = ResolversParentTypes['ProductUnitCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitDeleteResponse'] = ResolversParentTypes['ProductUnitDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitEdge'] = ResolversParentTypes['ProductUnitEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitMaxAggregate'] = ResolversParentTypes['ProductUnitMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitMinAggregate'] = ResolversParentTypes['ProductUnitMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsAggregateGroupBy'] = ResolversParentTypes['ProductUnitProductsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsAggregateResponse'] = ResolversParentTypes['ProductUnitProductsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ProductUnitProductsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ProductUnitProductsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductUnitProductsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductUnitProductsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductUnitProductsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductUnitProductsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsAvgAggregate'] = ResolversParentTypes['ProductUnitProductsAvgAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsConnection'] = ResolversParentTypes['ProductUnitProductsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsCountAggregate'] = ResolversParentTypes['ProductUnitProductsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsMaxAggregate'] = ResolversParentTypes['ProductUnitProductsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsMinAggregate'] = ResolversParentTypes['ProductUnitProductsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductUnitProductsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUnitProductsSumAggregate'] = ResolversParentTypes['ProductUnitProductsSumAggregate']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accountAggregate?: Resolver<Array<ResolversTypes['AccountAggregateResponse']>, ParentType, ContextType, Partial<QueryAccountAggregateArgs>>;
  accountPasswordReset?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType, RequireFields<QueryAccountPasswordResetArgs, 'id'>>;
  accountPasswordResetAggregate?: Resolver<Array<ResolversTypes['AccountPasswordResetAggregateResponse']>, ParentType, ContextType, Partial<QueryAccountPasswordResetAggregateArgs>>;
  accountPasswordResets?: Resolver<ResolversTypes['AccountPasswordResetConnection'], ParentType, ContextType, RequireFields<QueryAccountPasswordResetsArgs, 'filter' | 'paging' | 'sorting'>>;
  accountVerfication?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType, RequireFields<QueryAccountVerficationArgs, 'id'>>;
  accountVerficationAggregate?: Resolver<Array<ResolversTypes['AccountVerficationAggregateResponse']>, ParentType, ContextType, Partial<QueryAccountVerficationAggregateArgs>>;
  accountVerfications?: Resolver<ResolversTypes['AccountVerficationConnection'], ParentType, ContextType, RequireFields<QueryAccountVerficationsArgs, 'filter' | 'paging' | 'sorting'>>;
  accounts?: Resolver<ResolversTypes['AccountConnection'], ParentType, ContextType, RequireFields<QueryAccountsArgs, 'filter' | 'paging' | 'sorting'>>;
  apiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType, RequireFields<QueryApiKeyArgs, 'id'>>;
  apiKeyAggregate?: Resolver<Array<ResolversTypes['ApiKeyAggregateResponse']>, ParentType, ContextType, Partial<QueryApiKeyAggregateArgs>>;
  apiKeys?: Resolver<ResolversTypes['ApiKeyConnection'], ParentType, ContextType, RequireFields<QueryApiKeysArgs, 'filter' | 'paging' | 'sorting'>>;
  branchSaleChannel?: Resolver<ResolversTypes['BranchSaleChannel'], ParentType, ContextType, RequireFields<QueryBranchSaleChannelArgs, 'id'>>;
  branchSaleChannelAggregate?: Resolver<Array<ResolversTypes['BranchSaleChannelAggregateResponse']>, ParentType, ContextType, Partial<QueryBranchSaleChannelAggregateArgs>>;
  branchSaleChannels?: Resolver<ResolversTypes['BranchSaleChannelConnection'], ParentType, ContextType, RequireFields<QueryBranchSaleChannelsArgs, 'filter' | 'paging' | 'sorting'>>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customerAggregate?: Resolver<Array<ResolversTypes['CustomerAggregateResponse']>, ParentType, ContextType, Partial<QueryCustomerAggregateArgs>>;
  customers?: Resolver<ResolversTypes['CustomerConnection'], ParentType, ContextType, RequireFields<QueryCustomersArgs, 'filter' | 'paging' | 'sorting'>>;
  file?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  fileAggregate?: Resolver<Array<ResolversTypes['FileAggregateResponse']>, ParentType, ContextType, Partial<QueryFileAggregateArgs>>;
  files?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, RequireFields<QueryFilesArgs, 'filter' | 'paging' | 'sorting'>>;
  me?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  media?: Resolver<ResolversTypes['MediaConnection'], ParentType, ContextType, RequireFields<QueryMediaArgs, 'filter' | 'paging' | 'sorting'>>;
  mediaAggregate?: Resolver<Array<ResolversTypes['MediaAggregateResponse']>, ParentType, ContextType, Partial<QueryMediaAggregateArgs>>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orderAggregate?: Resolver<Array<ResolversTypes['OrderAggregateResponse']>, ParentType, ContextType, Partial<QueryOrderAggregateArgs>>;
  orderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<QueryOrderProductArgs, 'id'>>;
  orderProductAggregate?: Resolver<Array<ResolversTypes['OrderProductAggregateResponse']>, ParentType, ContextType, Partial<QueryOrderProductAggregateArgs>>;
  orderProducts?: Resolver<ResolversTypes['OrderProductConnection'], ParentType, ContextType, RequireFields<QueryOrderProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  orders?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<QueryOrdersArgs, 'filter' | 'paging' | 'sorting'>>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<QueryOrgArgs, 'id'>>;
  orgAggregate?: Resolver<Array<ResolversTypes['OrgAggregateResponse']>, ParentType, ContextType, Partial<QueryOrgAggregateArgs>>;
  orgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<QueryOrgBranchArgs, 'id'>>;
  orgBranchAggregate?: Resolver<Array<ResolversTypes['OrgBranchAggregateResponse']>, ParentType, ContextType, Partial<QueryOrgBranchAggregateArgs>>;
  orgBranchMember?: Resolver<ResolversTypes['OrgBranchMember'], ParentType, ContextType, RequireFields<QueryOrgBranchMemberArgs, 'id'>>;
  orgBranchMemberAggregate?: Resolver<Array<ResolversTypes['OrgBranchMemberAggregateResponse']>, ParentType, ContextType, Partial<QueryOrgBranchMemberAggregateArgs>>;
  orgBranchMembers?: Resolver<ResolversTypes['OrgBranchMemberConnection'], ParentType, ContextType, RequireFields<QueryOrgBranchMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  orgBranches?: Resolver<ResolversTypes['OrgBranchConnection'], ParentType, ContextType, RequireFields<QueryOrgBranchesArgs, 'filter' | 'paging' | 'sorting'>>;
  orgMember?: Resolver<ResolversTypes['OrgMember'], ParentType, ContextType, RequireFields<QueryOrgMemberArgs, 'id'>>;
  orgMemberAggregate?: Resolver<Array<ResolversTypes['OrgMemberAggregateResponse']>, ParentType, ContextType, Partial<QueryOrgMemberAggregateArgs>>;
  orgMembers?: Resolver<ResolversTypes['OrgMemberConnection'], ParentType, ContextType, RequireFields<QueryOrgMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  orgs?: Resolver<ResolversTypes['OrgConnection'], ParentType, ContextType, RequireFields<QueryOrgsArgs, 'filter' | 'paging' | 'sorting'>>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productAggregate?: Resolver<Array<ResolversTypes['ProductAggregateResponse']>, ParentType, ContextType, Partial<QueryProductAggregateArgs>>;
  productCategories?: Resolver<ResolversTypes['ProductCategoryConnection'], ParentType, ContextType, RequireFields<QueryProductCategoriesArgs, 'filter' | 'paging' | 'sorting'>>;
  productCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<QueryProductCategoryArgs, 'id'>>;
  productCategoryAggregate?: Resolver<Array<ResolversTypes['ProductCategoryAggregateResponse']>, ParentType, ContextType, Partial<QueryProductCategoryAggregateArgs>>;
  productOption?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType, RequireFields<QueryProductOptionArgs, 'id'>>;
  productOptionAggregate?: Resolver<Array<ResolversTypes['ProductOptionAggregateResponse']>, ParentType, ContextType, Partial<QueryProductOptionAggregateArgs>>;
  productOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<QueryProductOptionGroupArgs, 'id'>>;
  productOptionGroupAggregate?: Resolver<Array<ResolversTypes['ProductOptionGroupAggregateResponse']>, ParentType, ContextType, Partial<QueryProductOptionGroupAggregateArgs>>;
  productOptionGroups?: Resolver<ResolversTypes['ProductOptionGroupConnection'], ParentType, ContextType, RequireFields<QueryProductOptionGroupsArgs, 'filter' | 'paging' | 'sorting'>>;
  productOptions?: Resolver<ResolversTypes['ProductOptionConnection'], ParentType, ContextType, RequireFields<QueryProductOptionsArgs, 'filter' | 'paging' | 'sorting'>>;
  productPrice?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType, RequireFields<QueryProductPriceArgs, 'id'>>;
  productPriceAggregate?: Resolver<Array<ResolversTypes['ProductPriceAggregateResponse']>, ParentType, ContextType, Partial<QueryProductPriceAggregateArgs>>;
  productPrices?: Resolver<ResolversTypes['ProductPriceConnection'], ParentType, ContextType, RequireFields<QueryProductPricesArgs, 'filter' | 'paging' | 'sorting'>>;
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<QueryProductTypeArgs, 'id'>>;
  productTypeAggregate?: Resolver<Array<ResolversTypes['ProductTypeAggregateResponse']>, ParentType, ContextType, Partial<QueryProductTypeAggregateArgs>>;
  productTypes?: Resolver<ResolversTypes['ProductTypeConnection'], ParentType, ContextType, RequireFields<QueryProductTypesArgs, 'filter' | 'paging' | 'sorting'>>;
  productUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<QueryProductUnitArgs, 'id'>>;
  productUnitAggregate?: Resolver<Array<ResolversTypes['ProductUnitAggregateResponse']>, ParentType, ContextType, Partial<QueryProductUnitAggregateArgs>>;
  productUnits?: Resolver<ResolversTypes['ProductUnitConnection'], ParentType, ContextType, RequireFields<QueryProductUnitsArgs, 'filter' | 'paging' | 'sorting'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryProductsArgs, 'filter' | 'paging' | 'sorting'>>;
}>;

export type UpdateManyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateManyResponse'] = ResolversParentTypes['UpdateManyResponse']> = ResolversObject<{
  updatedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountAggregateGroupBy?: AccountAggregateGroupByResolvers<ContextType>;
  AccountAggregateResponse?: AccountAggregateResponseResolvers<ContextType>;
  AccountAvgAggregate?: AccountAvgAggregateResolvers<ContextType>;
  AccountConnection?: AccountConnectionResolvers<ContextType>;
  AccountCountAggregate?: AccountCountAggregateResolvers<ContextType>;
  AccountDeleteResponse?: AccountDeleteResponseResolvers<ContextType>;
  AccountEdge?: AccountEdgeResolvers<ContextType>;
  AccountMaxAggregate?: AccountMaxAggregateResolvers<ContextType>;
  AccountMinAggregate?: AccountMinAggregateResolvers<ContextType>;
  AccountPasswordReset?: AccountPasswordResetResolvers<ContextType>;
  AccountPasswordResetAggregateGroupBy?: AccountPasswordResetAggregateGroupByResolvers<ContextType>;
  AccountPasswordResetAggregateResponse?: AccountPasswordResetAggregateResponseResolvers<ContextType>;
  AccountPasswordResetConnection?: AccountPasswordResetConnectionResolvers<ContextType>;
  AccountPasswordResetCountAggregate?: AccountPasswordResetCountAggregateResolvers<ContextType>;
  AccountPasswordResetDeleteResponse?: AccountPasswordResetDeleteResponseResolvers<ContextType>;
  AccountPasswordResetEdge?: AccountPasswordResetEdgeResolvers<ContextType>;
  AccountPasswordResetMaxAggregate?: AccountPasswordResetMaxAggregateResolvers<ContextType>;
  AccountPasswordResetMinAggregate?: AccountPasswordResetMinAggregateResolvers<ContextType>;
  AccountSumAggregate?: AccountSumAggregateResolvers<ContextType>;
  AccountVerfication?: AccountVerficationResolvers<ContextType>;
  AccountVerficationAggregateGroupBy?: AccountVerficationAggregateGroupByResolvers<ContextType>;
  AccountVerficationAggregateResponse?: AccountVerficationAggregateResponseResolvers<ContextType>;
  AccountVerficationConnection?: AccountVerficationConnectionResolvers<ContextType>;
  AccountVerficationCountAggregate?: AccountVerficationCountAggregateResolvers<ContextType>;
  AccountVerficationDeleteResponse?: AccountVerficationDeleteResponseResolvers<ContextType>;
  AccountVerficationEdge?: AccountVerficationEdgeResolvers<ContextType>;
  AccountVerficationMaxAggregate?: AccountVerficationMaxAggregateResolvers<ContextType>;
  AccountVerficationMinAggregate?: AccountVerficationMinAggregateResolvers<ContextType>;
  ApiKey?: ApiKeyResolvers<ContextType>;
  ApiKeyAggregateGroupBy?: ApiKeyAggregateGroupByResolvers<ContextType>;
  ApiKeyAggregateResponse?: ApiKeyAggregateResponseResolvers<ContextType>;
  ApiKeyConnection?: ApiKeyConnectionResolvers<ContextType>;
  ApiKeyCountAggregate?: ApiKeyCountAggregateResolvers<ContextType>;
  ApiKeyDeleteResponse?: ApiKeyDeleteResponseResolvers<ContextType>;
  ApiKeyEdge?: ApiKeyEdgeResolvers<ContextType>;
  ApiKeyMaxAggregate?: ApiKeyMaxAggregateResolvers<ContextType>;
  ApiKeyMinAggregate?: ApiKeyMinAggregateResolvers<ContextType>;
  BranchSaleChannel?: BranchSaleChannelResolvers<ContextType>;
  BranchSaleChannelAggregateGroupBy?: BranchSaleChannelAggregateGroupByResolvers<ContextType>;
  BranchSaleChannelAggregateResponse?: BranchSaleChannelAggregateResponseResolvers<ContextType>;
  BranchSaleChannelAvgAggregate?: BranchSaleChannelAvgAggregateResolvers<ContextType>;
  BranchSaleChannelConnection?: BranchSaleChannelConnectionResolvers<ContextType>;
  BranchSaleChannelCountAggregate?: BranchSaleChannelCountAggregateResolvers<ContextType>;
  BranchSaleChannelDeleteResponse?: BranchSaleChannelDeleteResponseResolvers<ContextType>;
  BranchSaleChannelEdge?: BranchSaleChannelEdgeResolvers<ContextType>;
  BranchSaleChannelMaxAggregate?: BranchSaleChannelMaxAggregateResolvers<ContextType>;
  BranchSaleChannelMinAggregate?: BranchSaleChannelMinAggregateResolvers<ContextType>;
  BranchSaleChannelSumAggregate?: BranchSaleChannelSumAggregateResolvers<ContextType>;
  ConnectionCursor?: GraphQLScalarType;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  CustomerAddressesAggregateGroupBy?: CustomerAddressesAggregateGroupByResolvers<ContextType>;
  CustomerAddressesAggregateResponse?: CustomerAddressesAggregateResponseResolvers<ContextType>;
  CustomerAddressesAvgAggregate?: CustomerAddressesAvgAggregateResolvers<ContextType>;
  CustomerAddressesConnection?: CustomerAddressesConnectionResolvers<ContextType>;
  CustomerAddressesCountAggregate?: CustomerAddressesCountAggregateResolvers<ContextType>;
  CustomerAddressesMaxAggregate?: CustomerAddressesMaxAggregateResolvers<ContextType>;
  CustomerAddressesMinAggregate?: CustomerAddressesMinAggregateResolvers<ContextType>;
  CustomerAddressesSumAggregate?: CustomerAddressesSumAggregateResolvers<ContextType>;
  CustomerAggregateGroupBy?: CustomerAggregateGroupByResolvers<ContextType>;
  CustomerAggregateResponse?: CustomerAggregateResponseResolvers<ContextType>;
  CustomerAvgAggregate?: CustomerAvgAggregateResolvers<ContextType>;
  CustomerConnection?: CustomerConnectionResolvers<ContextType>;
  CustomerCountAggregate?: CustomerCountAggregateResolvers<ContextType>;
  CustomerDeleteResponse?: CustomerDeleteResponseResolvers<ContextType>;
  CustomerEdge?: CustomerEdgeResolvers<ContextType>;
  CustomerMaxAggregate?: CustomerMaxAggregateResolvers<ContextType>;
  CustomerMinAggregate?: CustomerMinAggregateResolvers<ContextType>;
  CustomerSumAggregate?: CustomerSumAggregateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteManyResponse?: DeleteManyResponseResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileAggregateGroupBy?: FileAggregateGroupByResolvers<ContextType>;
  FileAggregateResponse?: FileAggregateResponseResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileCountAggregate?: FileCountAggregateResolvers<ContextType>;
  FileDeleteResponse?: FileDeleteResponseResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  FileMaxAggregate?: FileMaxAggregateResolvers<ContextType>;
  FileMinAggregate?: FileMinAggregateResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoginResult?: LoginResultResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaAggregateGroupBy?: MediaAggregateGroupByResolvers<ContextType>;
  MediaAggregateResponse?: MediaAggregateResponseResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaCountAggregate?: MediaCountAggregateResolvers<ContextType>;
  MediaDeleteResponse?: MediaDeleteResponseResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  MediaMaxAggregate?: MediaMaxAggregateResolvers<ContextType>;
  MediaMinAggregate?: MediaMinAggregateResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OffsetPageInfo?: OffsetPageInfoResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderAggregateGroupBy?: OrderAggregateGroupByResolvers<ContextType>;
  OrderAggregateResponse?: OrderAggregateResponseResolvers<ContextType>;
  OrderAvgAggregate?: OrderAvgAggregateResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderCountAggregate?: OrderCountAggregateResolvers<ContextType>;
  OrderDeleteResponse?: OrderDeleteResponseResolvers<ContextType>;
  OrderEdge?: OrderEdgeResolvers<ContextType>;
  OrderMaxAggregate?: OrderMaxAggregateResolvers<ContextType>;
  OrderMinAggregate?: OrderMinAggregateResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  OrderProductAggregateGroupBy?: OrderProductAggregateGroupByResolvers<ContextType>;
  OrderProductAggregateResponse?: OrderProductAggregateResponseResolvers<ContextType>;
  OrderProductAvgAggregate?: OrderProductAvgAggregateResolvers<ContextType>;
  OrderProductConnection?: OrderProductConnectionResolvers<ContextType>;
  OrderProductCountAggregate?: OrderProductCountAggregateResolvers<ContextType>;
  OrderProductDeleteResponse?: OrderProductDeleteResponseResolvers<ContextType>;
  OrderProductEdge?: OrderProductEdgeResolvers<ContextType>;
  OrderProductMaxAggregate?: OrderProductMaxAggregateResolvers<ContextType>;
  OrderProductMinAggregate?: OrderProductMinAggregateResolvers<ContextType>;
  OrderProductOptionsAggregateGroupBy?: OrderProductOptionsAggregateGroupByResolvers<ContextType>;
  OrderProductOptionsAggregateResponse?: OrderProductOptionsAggregateResponseResolvers<ContextType>;
  OrderProductOptionsAvgAggregate?: OrderProductOptionsAvgAggregateResolvers<ContextType>;
  OrderProductOptionsConnection?: OrderProductOptionsConnectionResolvers<ContextType>;
  OrderProductOptionsCountAggregate?: OrderProductOptionsCountAggregateResolvers<ContextType>;
  OrderProductOptionsMaxAggregate?: OrderProductOptionsMaxAggregateResolvers<ContextType>;
  OrderProductOptionsMinAggregate?: OrderProductOptionsMinAggregateResolvers<ContextType>;
  OrderProductOptionsSumAggregate?: OrderProductOptionsSumAggregateResolvers<ContextType>;
  OrderProductSumAggregate?: OrderProductSumAggregateResolvers<ContextType>;
  OrderSumAggregate?: OrderSumAggregateResolvers<ContextType>;
  Org?: OrgResolvers<ContextType>;
  OrgAggregateGroupBy?: OrgAggregateGroupByResolvers<ContextType>;
  OrgAggregateResponse?: OrgAggregateResponseResolvers<ContextType>;
  OrgAvgAggregate?: OrgAvgAggregateResolvers<ContextType>;
  OrgBranch?: OrgBranchResolvers<ContextType>;
  OrgBranchAggregateGroupBy?: OrgBranchAggregateGroupByResolvers<ContextType>;
  OrgBranchAggregateResponse?: OrgBranchAggregateResponseResolvers<ContextType>;
  OrgBranchConnection?: OrgBranchConnectionResolvers<ContextType>;
  OrgBranchCountAggregate?: OrgBranchCountAggregateResolvers<ContextType>;
  OrgBranchDeleteResponse?: OrgBranchDeleteResponseResolvers<ContextType>;
  OrgBranchEdge?: OrgBranchEdgeResolvers<ContextType>;
  OrgBranchMaxAggregate?: OrgBranchMaxAggregateResolvers<ContextType>;
  OrgBranchMember?: OrgBranchMemberResolvers<ContextType>;
  OrgBranchMemberAggregateGroupBy?: OrgBranchMemberAggregateGroupByResolvers<ContextType>;
  OrgBranchMemberAggregateResponse?: OrgBranchMemberAggregateResponseResolvers<ContextType>;
  OrgBranchMemberAvgAggregate?: OrgBranchMemberAvgAggregateResolvers<ContextType>;
  OrgBranchMemberConnection?: OrgBranchMemberConnectionResolvers<ContextType>;
  OrgBranchMemberCountAggregate?: OrgBranchMemberCountAggregateResolvers<ContextType>;
  OrgBranchMemberDeleteResponse?: OrgBranchMemberDeleteResponseResolvers<ContextType>;
  OrgBranchMemberEdge?: OrgBranchMemberEdgeResolvers<ContextType>;
  OrgBranchMemberMaxAggregate?: OrgBranchMemberMaxAggregateResolvers<ContextType>;
  OrgBranchMemberMinAggregate?: OrgBranchMemberMinAggregateResolvers<ContextType>;
  OrgBranchMemberSumAggregate?: OrgBranchMemberSumAggregateResolvers<ContextType>;
  OrgBranchMembersAggregateGroupBy?: OrgBranchMembersAggregateGroupByResolvers<ContextType>;
  OrgBranchMembersAggregateResponse?: OrgBranchMembersAggregateResponseResolvers<ContextType>;
  OrgBranchMembersAvgAggregate?: OrgBranchMembersAvgAggregateResolvers<ContextType>;
  OrgBranchMembersConnection?: OrgBranchMembersConnectionResolvers<ContextType>;
  OrgBranchMembersCountAggregate?: OrgBranchMembersCountAggregateResolvers<ContextType>;
  OrgBranchMembersMaxAggregate?: OrgBranchMembersMaxAggregateResolvers<ContextType>;
  OrgBranchMembersMinAggregate?: OrgBranchMembersMinAggregateResolvers<ContextType>;
  OrgBranchMembersSumAggregate?: OrgBranchMembersSumAggregateResolvers<ContextType>;
  OrgBranchMinAggregate?: OrgBranchMinAggregateResolvers<ContextType>;
  OrgBranchesAggregateGroupBy?: OrgBranchesAggregateGroupByResolvers<ContextType>;
  OrgBranchesAggregateResponse?: OrgBranchesAggregateResponseResolvers<ContextType>;
  OrgBranchesConnection?: OrgBranchesConnectionResolvers<ContextType>;
  OrgBranchesCountAggregate?: OrgBranchesCountAggregateResolvers<ContextType>;
  OrgBranchesMaxAggregate?: OrgBranchesMaxAggregateResolvers<ContextType>;
  OrgBranchesMinAggregate?: OrgBranchesMinAggregateResolvers<ContextType>;
  OrgConnection?: OrgConnectionResolvers<ContextType>;
  OrgCountAggregate?: OrgCountAggregateResolvers<ContextType>;
  OrgDeleteResponse?: OrgDeleteResponseResolvers<ContextType>;
  OrgEdge?: OrgEdgeResolvers<ContextType>;
  OrgMaxAggregate?: OrgMaxAggregateResolvers<ContextType>;
  OrgMember?: OrgMemberResolvers<ContextType>;
  OrgMemberAggregateGroupBy?: OrgMemberAggregateGroupByResolvers<ContextType>;
  OrgMemberAggregateResponse?: OrgMemberAggregateResponseResolvers<ContextType>;
  OrgMemberAvgAggregate?: OrgMemberAvgAggregateResolvers<ContextType>;
  OrgMemberConnection?: OrgMemberConnectionResolvers<ContextType>;
  OrgMemberCountAggregate?: OrgMemberCountAggregateResolvers<ContextType>;
  OrgMemberDeleteResponse?: OrgMemberDeleteResponseResolvers<ContextType>;
  OrgMemberEdge?: OrgMemberEdgeResolvers<ContextType>;
  OrgMemberMaxAggregate?: OrgMemberMaxAggregateResolvers<ContextType>;
  OrgMemberMinAggregate?: OrgMemberMinAggregateResolvers<ContextType>;
  OrgMemberSumAggregate?: OrgMemberSumAggregateResolvers<ContextType>;
  OrgMembersAggregateGroupBy?: OrgMembersAggregateGroupByResolvers<ContextType>;
  OrgMembersAggregateResponse?: OrgMembersAggregateResponseResolvers<ContextType>;
  OrgMembersAvgAggregate?: OrgMembersAvgAggregateResolvers<ContextType>;
  OrgMembersConnection?: OrgMembersConnectionResolvers<ContextType>;
  OrgMembersCountAggregate?: OrgMembersCountAggregateResolvers<ContextType>;
  OrgMembersMaxAggregate?: OrgMembersMaxAggregateResolvers<ContextType>;
  OrgMembersMinAggregate?: OrgMembersMinAggregateResolvers<ContextType>;
  OrgMembersSumAggregate?: OrgMembersSumAggregateResolvers<ContextType>;
  OrgMinAggregate?: OrgMinAggregateResolvers<ContextType>;
  OrgSumAggregate?: OrgSumAggregateResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductAggregateGroupBy?: ProductAggregateGroupByResolvers<ContextType>;
  ProductAggregateResponse?: ProductAggregateResponseResolvers<ContextType>;
  ProductAvgAggregate?: ProductAvgAggregateResolvers<ContextType>;
  ProductCategoriesAggregateGroupBy?: ProductCategoriesAggregateGroupByResolvers<ContextType>;
  ProductCategoriesAggregateResponse?: ProductCategoriesAggregateResponseResolvers<ContextType>;
  ProductCategoriesConnection?: ProductCategoriesConnectionResolvers<ContextType>;
  ProductCategoriesCountAggregate?: ProductCategoriesCountAggregateResolvers<ContextType>;
  ProductCategoriesMaxAggregate?: ProductCategoriesMaxAggregateResolvers<ContextType>;
  ProductCategoriesMinAggregate?: ProductCategoriesMinAggregateResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  ProductCategoryAggregateGroupBy?: ProductCategoryAggregateGroupByResolvers<ContextType>;
  ProductCategoryAggregateResponse?: ProductCategoryAggregateResponseResolvers<ContextType>;
  ProductCategoryConnection?: ProductCategoryConnectionResolvers<ContextType>;
  ProductCategoryCountAggregate?: ProductCategoryCountAggregateResolvers<ContextType>;
  ProductCategoryDeleteResponse?: ProductCategoryDeleteResponseResolvers<ContextType>;
  ProductCategoryEdge?: ProductCategoryEdgeResolvers<ContextType>;
  ProductCategoryMaxAggregate?: ProductCategoryMaxAggregateResolvers<ContextType>;
  ProductCategoryMinAggregate?: ProductCategoryMinAggregateResolvers<ContextType>;
  ProductCategoryProductsAggregateGroupBy?: ProductCategoryProductsAggregateGroupByResolvers<ContextType>;
  ProductCategoryProductsAggregateResponse?: ProductCategoryProductsAggregateResponseResolvers<ContextType>;
  ProductCategoryProductsAvgAggregate?: ProductCategoryProductsAvgAggregateResolvers<ContextType>;
  ProductCategoryProductsConnection?: ProductCategoryProductsConnectionResolvers<ContextType>;
  ProductCategoryProductsCountAggregate?: ProductCategoryProductsCountAggregateResolvers<ContextType>;
  ProductCategoryProductsMaxAggregate?: ProductCategoryProductsMaxAggregateResolvers<ContextType>;
  ProductCategoryProductsMinAggregate?: ProductCategoryProductsMinAggregateResolvers<ContextType>;
  ProductCategoryProductsSumAggregate?: ProductCategoryProductsSumAggregateResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductCountAggregate?: ProductCountAggregateResolvers<ContextType>;
  ProductDeleteResponse?: ProductDeleteResponseResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductMaxAggregate?: ProductMaxAggregateResolvers<ContextType>;
  ProductMinAggregate?: ProductMinAggregateResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionAggregateGroupBy?: ProductOptionAggregateGroupByResolvers<ContextType>;
  ProductOptionAggregateResponse?: ProductOptionAggregateResponseResolvers<ContextType>;
  ProductOptionAvgAggregate?: ProductOptionAvgAggregateResolvers<ContextType>;
  ProductOptionConnection?: ProductOptionConnectionResolvers<ContextType>;
  ProductOptionCountAggregate?: ProductOptionCountAggregateResolvers<ContextType>;
  ProductOptionDeleteResponse?: ProductOptionDeleteResponseResolvers<ContextType>;
  ProductOptionEdge?: ProductOptionEdgeResolvers<ContextType>;
  ProductOptionGroup?: ProductOptionGroupResolvers<ContextType>;
  ProductOptionGroupAggregateGroupBy?: ProductOptionGroupAggregateGroupByResolvers<ContextType>;
  ProductOptionGroupAggregateResponse?: ProductOptionGroupAggregateResponseResolvers<ContextType>;
  ProductOptionGroupConnection?: ProductOptionGroupConnectionResolvers<ContextType>;
  ProductOptionGroupCountAggregate?: ProductOptionGroupCountAggregateResolvers<ContextType>;
  ProductOptionGroupDeleteResponse?: ProductOptionGroupDeleteResponseResolvers<ContextType>;
  ProductOptionGroupEdge?: ProductOptionGroupEdgeResolvers<ContextType>;
  ProductOptionGroupMaxAggregate?: ProductOptionGroupMaxAggregateResolvers<ContextType>;
  ProductOptionGroupMinAggregate?: ProductOptionGroupMinAggregateResolvers<ContextType>;
  ProductOptionGroupOptionsAggregateGroupBy?: ProductOptionGroupOptionsAggregateGroupByResolvers<ContextType>;
  ProductOptionGroupOptionsAggregateResponse?: ProductOptionGroupOptionsAggregateResponseResolvers<ContextType>;
  ProductOptionGroupOptionsAvgAggregate?: ProductOptionGroupOptionsAvgAggregateResolvers<ContextType>;
  ProductOptionGroupOptionsConnection?: ProductOptionGroupOptionsConnectionResolvers<ContextType>;
  ProductOptionGroupOptionsCountAggregate?: ProductOptionGroupOptionsCountAggregateResolvers<ContextType>;
  ProductOptionGroupOptionsMaxAggregate?: ProductOptionGroupOptionsMaxAggregateResolvers<ContextType>;
  ProductOptionGroupOptionsMinAggregate?: ProductOptionGroupOptionsMinAggregateResolvers<ContextType>;
  ProductOptionGroupOptionsSumAggregate?: ProductOptionGroupOptionsSumAggregateResolvers<ContextType>;
  ProductOptionGroupProductsAggregateGroupBy?: ProductOptionGroupProductsAggregateGroupByResolvers<ContextType>;
  ProductOptionGroupProductsAggregateResponse?: ProductOptionGroupProductsAggregateResponseResolvers<ContextType>;
  ProductOptionGroupProductsAvgAggregate?: ProductOptionGroupProductsAvgAggregateResolvers<ContextType>;
  ProductOptionGroupProductsConnection?: ProductOptionGroupProductsConnectionResolvers<ContextType>;
  ProductOptionGroupProductsCountAggregate?: ProductOptionGroupProductsCountAggregateResolvers<ContextType>;
  ProductOptionGroupProductsMaxAggregate?: ProductOptionGroupProductsMaxAggregateResolvers<ContextType>;
  ProductOptionGroupProductsMinAggregate?: ProductOptionGroupProductsMinAggregateResolvers<ContextType>;
  ProductOptionGroupProductsSumAggregate?: ProductOptionGroupProductsSumAggregateResolvers<ContextType>;
  ProductOptionGroupsAggregateGroupBy?: ProductOptionGroupsAggregateGroupByResolvers<ContextType>;
  ProductOptionGroupsAggregateResponse?: ProductOptionGroupsAggregateResponseResolvers<ContextType>;
  ProductOptionGroupsConnection?: ProductOptionGroupsConnectionResolvers<ContextType>;
  ProductOptionGroupsCountAggregate?: ProductOptionGroupsCountAggregateResolvers<ContextType>;
  ProductOptionGroupsMaxAggregate?: ProductOptionGroupsMaxAggregateResolvers<ContextType>;
  ProductOptionGroupsMinAggregate?: ProductOptionGroupsMinAggregateResolvers<ContextType>;
  ProductOptionMaxAggregate?: ProductOptionMaxAggregateResolvers<ContextType>;
  ProductOptionMinAggregate?: ProductOptionMinAggregateResolvers<ContextType>;
  ProductOptionSumAggregate?: ProductOptionSumAggregateResolvers<ContextType>;
  ProductPrice?: ProductPriceResolvers<ContextType>;
  ProductPriceAggregateGroupBy?: ProductPriceAggregateGroupByResolvers<ContextType>;
  ProductPriceAggregateResponse?: ProductPriceAggregateResponseResolvers<ContextType>;
  ProductPriceAvgAggregate?: ProductPriceAvgAggregateResolvers<ContextType>;
  ProductPriceConnection?: ProductPriceConnectionResolvers<ContextType>;
  ProductPriceCountAggregate?: ProductPriceCountAggregateResolvers<ContextType>;
  ProductPriceDeleteResponse?: ProductPriceDeleteResponseResolvers<ContextType>;
  ProductPriceEdge?: ProductPriceEdgeResolvers<ContextType>;
  ProductPriceMaxAggregate?: ProductPriceMaxAggregateResolvers<ContextType>;
  ProductPriceMinAggregate?: ProductPriceMinAggregateResolvers<ContextType>;
  ProductPriceSumAggregate?: ProductPriceSumAggregateResolvers<ContextType>;
  ProductSumAggregate?: ProductSumAggregateResolvers<ContextType>;
  ProductType?: ProductTypeResolvers<ContextType>;
  ProductTypeAggregateGroupBy?: ProductTypeAggregateGroupByResolvers<ContextType>;
  ProductTypeAggregateResponse?: ProductTypeAggregateResponseResolvers<ContextType>;
  ProductTypeConnection?: ProductTypeConnectionResolvers<ContextType>;
  ProductTypeCountAggregate?: ProductTypeCountAggregateResolvers<ContextType>;
  ProductTypeDeleteResponse?: ProductTypeDeleteResponseResolvers<ContextType>;
  ProductTypeEdge?: ProductTypeEdgeResolvers<ContextType>;
  ProductTypeMaxAggregate?: ProductTypeMaxAggregateResolvers<ContextType>;
  ProductTypeMinAggregate?: ProductTypeMinAggregateResolvers<ContextType>;
  ProductTypeProductsAggregateGroupBy?: ProductTypeProductsAggregateGroupByResolvers<ContextType>;
  ProductTypeProductsAggregateResponse?: ProductTypeProductsAggregateResponseResolvers<ContextType>;
  ProductTypeProductsAvgAggregate?: ProductTypeProductsAvgAggregateResolvers<ContextType>;
  ProductTypeProductsConnection?: ProductTypeProductsConnectionResolvers<ContextType>;
  ProductTypeProductsCountAggregate?: ProductTypeProductsCountAggregateResolvers<ContextType>;
  ProductTypeProductsMaxAggregate?: ProductTypeProductsMaxAggregateResolvers<ContextType>;
  ProductTypeProductsMinAggregate?: ProductTypeProductsMinAggregateResolvers<ContextType>;
  ProductTypeProductsSumAggregate?: ProductTypeProductsSumAggregateResolvers<ContextType>;
  ProductUnit?: ProductUnitResolvers<ContextType>;
  ProductUnitAggregateGroupBy?: ProductUnitAggregateGroupByResolvers<ContextType>;
  ProductUnitAggregateResponse?: ProductUnitAggregateResponseResolvers<ContextType>;
  ProductUnitConnection?: ProductUnitConnectionResolvers<ContextType>;
  ProductUnitCountAggregate?: ProductUnitCountAggregateResolvers<ContextType>;
  ProductUnitDeleteResponse?: ProductUnitDeleteResponseResolvers<ContextType>;
  ProductUnitEdge?: ProductUnitEdgeResolvers<ContextType>;
  ProductUnitMaxAggregate?: ProductUnitMaxAggregateResolvers<ContextType>;
  ProductUnitMinAggregate?: ProductUnitMinAggregateResolvers<ContextType>;
  ProductUnitProductsAggregateGroupBy?: ProductUnitProductsAggregateGroupByResolvers<ContextType>;
  ProductUnitProductsAggregateResponse?: ProductUnitProductsAggregateResponseResolvers<ContextType>;
  ProductUnitProductsAvgAggregate?: ProductUnitProductsAvgAggregateResolvers<ContextType>;
  ProductUnitProductsConnection?: ProductUnitProductsConnectionResolvers<ContextType>;
  ProductUnitProductsCountAggregate?: ProductUnitProductsCountAggregateResolvers<ContextType>;
  ProductUnitProductsMaxAggregate?: ProductUnitProductsMaxAggregateResolvers<ContextType>;
  ProductUnitProductsMinAggregate?: ProductUnitProductsMinAggregateResolvers<ContextType>;
  ProductUnitProductsSumAggregate?: ProductUnitProductsSumAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateManyResponse?: UpdateManyResponseResolvers<ContextType>;
}>;

