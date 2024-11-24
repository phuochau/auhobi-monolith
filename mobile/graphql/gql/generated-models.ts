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
  appleUserId?: Maybe<Scalars['String']['output']>;
  authMethods: AccountAuthMethod;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  facebookUserId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActivated: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneVerified: Scalars['Boolean']['output'];
  role: AccountRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
};

export type AccountAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<AccountAggregateFilterUserAggregateFilter>;
};

export type AccountAggregateFilterUserAggregateFilter = {
  account?: InputMaybe<AccountAggregateFilterUserAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>;
};

export type AccountAggregateFilterUserAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter>;
};

export type AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  model?: InputMaybe<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>>;
  owner?: InputMaybe<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter = {
  and?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountAggregateGroupBy = {
  __typename?: 'AccountAggregateGroupBy';
  appleUserId?: Maybe<Scalars['String']['output']>;
  authMethods?: Maybe<AccountAuthMethod>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneVerified?: Maybe<Scalars['Boolean']['output']>;
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

export enum AccountAuthMethod {
  Apple = 'APPLE',
  Email = 'EMAIL',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Phone = 'PHONE'
}

export type AccountAuthMethodFilterComparison = {
  eq?: InputMaybe<AccountAuthMethod>;
  gt?: InputMaybe<AccountAuthMethod>;
  gte?: InputMaybe<AccountAuthMethod>;
  iLike?: InputMaybe<AccountAuthMethod>;
  in?: InputMaybe<Array<AccountAuthMethod>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<AccountAuthMethod>;
  lt?: InputMaybe<AccountAuthMethod>;
  lte?: InputMaybe<AccountAuthMethod>;
  neq?: InputMaybe<AccountAuthMethod>;
  notILike?: InputMaybe<AccountAuthMethod>;
  notIn?: InputMaybe<Array<AccountAuthMethod>>;
  notLike?: InputMaybe<AccountAuthMethod>;
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
  appleUserId?: Maybe<Scalars['Int']['output']>;
  authMethods?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  emailVerified?: Maybe<Scalars['Int']['output']>;
  facebookUserId?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['Int']['output']>;
  googleUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isActivated?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['Int']['output']>;
  phoneNumber?: Maybe<Scalars['Int']['output']>;
  phoneVerified?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type AccountDto = {
  appleUserId?: InputMaybe<Scalars['String']['input']>;
  authMethods: AccountAuthMethod;
  email?: InputMaybe<Scalars['String']['input']>;
  facebookUserId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  googleUserId?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: AccountRole;
  user: UserDto;
};

export type AccountDeleteFilter = {
  and?: InputMaybe<Array<AccountDeleteFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountDeleteFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountDeleteResponse = {
  __typename?: 'AccountDeleteResponse';
  appleUserId?: Maybe<Scalars['String']['output']>;
  authMethods?: Maybe<AccountAuthMethod>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneVerified?: Maybe<Scalars['Boolean']['output']>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<AccountFilterUserFilter>;
};

export type AccountFilterUserFilter = {
  account?: InputMaybe<AccountFilterUserFilterAccountFilter>;
  and?: InputMaybe<Array<AccountFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<AccountFilterUserFilterUserVehicleFilter>;
};

export type AccountFilterUserFilterAccountFilter = {
  and?: InputMaybe<Array<AccountFilterUserFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<AccountFilterUserFilterAccountFilterUserFilter>;
};

export type AccountFilterUserFilterAccountFilterUserFilter = {
  and?: InputMaybe<Array<AccountFilterUserFilterAccountFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilterAccountFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountFilterUserFilterUserVehicleFilter = {
  and?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  model?: InputMaybe<AccountFilterUserFilterUserVehicleFilterVehicleModelFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilter>>;
  owner?: InputMaybe<AccountFilterUserFilterUserVehicleFilterUserFilter>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountFilterUserFilterUserVehicleFilterUserFilter = {
  and?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountFilterUserFilterUserVehicleFilterVehicleModelFilter = {
  and?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilterVehicleModelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountFilterUserFilterUserVehicleFilterVehicleModelFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  appleUserId?: Maybe<Scalars['String']['output']>;
  authMethods?: Maybe<AccountAuthMethod>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  appleUserId?: Maybe<Scalars['String']['output']>;
  authMethods?: Maybe<AccountAuthMethod>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<AccountRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountPasswordReset = {
  __typename?: 'AccountPasswordReset';
  account: Account;
  code: Scalars['String']['output'];
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
  code?: InputMaybe<StringFieldComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPasswordResetAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPasswordResetAggregateGroupBy = {
  __typename?: 'AccountPasswordResetAggregateGroupBy';
  code?: Maybe<Scalars['String']['output']>;
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
  code?: Maybe<Scalars['Int']['output']>;
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
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AccountPasswordResetDeleteFilter = {
  and?: InputMaybe<Array<AccountPasswordResetDeleteFilter>>;
  code?: InputMaybe<StringFieldComparison>;
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
  code?: Maybe<Scalars['String']['output']>;
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
  code?: InputMaybe<StringFieldComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPasswordResetFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPasswordResetMaxAggregate = {
  __typename?: 'AccountPasswordResetMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountPasswordResetMinAggregate = {
  __typename?: 'AccountPasswordResetMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
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
  Code = 'code',
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
  code?: InputMaybe<StringFieldComparison>;
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
  AppleUserId = 'appleUserId',
  AuthMethods = 'authMethods',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FacebookUserId = 'facebookUserId',
  FirstName = 'firstName',
  GoogleUserId = 'googleUserId',
  Id = 'id',
  IsActivated = 'isActivated',
  LastName = 'lastName',
  PhoneNumber = 'phoneNumber',
  PhoneVerified = 'phoneVerified',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type AccountUpdateFilter = {
  and?: InputMaybe<Array<AccountUpdateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountUpdateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerfication = {
  __typename?: 'AccountVerfication';
  account: Account;
  code: Scalars['String']['output'];
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
  code?: InputMaybe<StringFieldComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountVerficationAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerficationAggregateGroupBy = {
  __typename?: 'AccountVerficationAggregateGroupBy';
  code?: Maybe<Scalars['String']['output']>;
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
  code?: Maybe<Scalars['Int']['output']>;
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
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AccountVerficationDeleteFilter = {
  and?: InputMaybe<Array<AccountVerficationDeleteFilter>>;
  code?: InputMaybe<StringFieldComparison>;
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
  code?: Maybe<Scalars['String']['output']>;
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
  code?: InputMaybe<StringFieldComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountVerficationFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountVerficationMaxAggregate = {
  __typename?: 'AccountVerficationMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountVerficationMinAggregate = {
  __typename?: 'AccountVerficationMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
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
  Code = 'code',
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
  code?: InputMaybe<StringFieldComparison>;
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

export type AddBillsToServiceLogInput = {
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

export type AddMembersToShopInput = {
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

export type AddShopsToOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddVehiclesToUserInput = {
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

export type AuthConfirmPasswordResetByCodeInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthConfirmPasswordResetInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  useCode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthLoginSocialInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type AuthRefreshTokenInput = {
  accountId: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  createUser?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  useCode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthRequestPasswordResetInput = {
  email: Scalars['String']['input'];
  useCode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthResendVerificationInput = {
  token: Scalars['String']['input'];
};

export type AuthResendVerificationWithEmailInput = {
  email: Scalars['String']['input'];
  useCode?: Scalars['Boolean']['input'];
};

export type AuthVerifyAccountByCodeInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type AuthVerifyAccountInput = {
  token: Scalars['String']['input'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
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

export type CreateManyCustomersInput = {
  /** Array of records to create */
  customers: Array<CustomerDto>;
};

export type CreateManyFilesInput = {
  /** Array of records to create */
  files: Array<FileDto>;
};

export type CreateManyGaragesInput = {
  /** Array of records to create */
  garages: Array<GarageDto>;
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

export type CreateManyServiceLogBillsInput = {
  /** Array of records to create */
  serviceLogBills: Array<ServiceLogBillDto>;
};

export type CreateManyServiceLogsInput = {
  /** Array of records to create */
  serviceLogs: Array<ServiceLogDto>;
};

export type CreateManyShopMembersInput = {
  /** Array of records to create */
  shopMembers: Array<ShopMemberDto>;
};

export type CreateManyShopsInput = {
  /** Array of records to create */
  shops: Array<ShopDto>;
};

export type CreateManyUserVehiclesInput = {
  /** Array of records to create */
  userVehicles: Array<UserVehicleDto>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserDto>;
};

export type CreateManyVehicleBaseModelsInput = {
  /** Array of records to create */
  vehicleBaseModels: Array<VehicleBaseModelDto>;
};

export type CreateManyVehicleBodiesInput = {
  /** Array of records to create */
  vehicleBodies: Array<VehicleBodyDto>;
};

export type CreateManyVehicleBrandsInput = {
  /** Array of records to create */
  vehicleBrands: Array<VehicleBrandDto>;
};

export type CreateManyVehicleModelsInput = {
  /** Array of records to create */
  vehicleModels: Array<VehicleModelDto>;
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

export type CreateOneCustomerInput = {
  /** The record to create */
  customer: CustomerDto;
};

export type CreateOneFileInput = {
  /** The record to create */
  file: FileDto;
};

export type CreateOneGarageInput = {
  /** The record to create */
  garage: GarageDto;
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

export type CreateOneProductTypeInput = {
  /** The record to create */
  productType: ProductTypeDto;
};

export type CreateOneProductUnitInput = {
  /** The record to create */
  productUnit: ProductUnitDto;
};

export type CreateOneServiceLogBillInput = {
  /** The record to create */
  serviceLogBill: ServiceLogBillDto;
};

export type CreateOneServiceLogInput = {
  /** The record to create */
  serviceLog: ServiceLogDto;
};

export type CreateOneShopInput = {
  /** The record to create */
  shop: ShopDto;
};

export type CreateOneShopMemberInput = {
  /** The record to create */
  shopMember: ShopMemberDto;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserDto;
};

export type CreateOneUserVehicleInput = {
  /** The record to create */
  userVehicle: UserVehicleDto;
};

export type CreateOneVehicleBaseModelInput = {
  /** The record to create */
  vehicleBaseModel: VehicleBaseModelDto;
};

export type CreateOneVehicleBodyInput = {
  /** The record to create */
  vehicleBody: VehicleBodyDto;
};

export type CreateOneVehicleBrandInput = {
  /** The record to create */
  vehicleBrand: VehicleBrandDto;
};

export type CreateOneVehicleModelInput = {
  /** The record to create */
  vehicleModel: VehicleModelDto;
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

export type DeleteManyCustomersInput = {
  /** Filter to find records to delete */
  filter: CustomerDeleteFilter;
};

export type DeleteManyFilesInput = {
  /** Filter to find records to delete */
  filter: FileDeleteFilter;
};

export type DeleteManyGaragesInput = {
  /** Filter to find records to delete */
  filter: GarageDeleteFilter;
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

export type DeleteManyServiceLogBillsInput = {
  /** Filter to find records to delete */
  filter: ServiceLogBillDeleteFilter;
};

export type DeleteManyServiceLogsInput = {
  /** Filter to find records to delete */
  filter: ServiceLogDeleteFilter;
};

export type DeleteManyShopMembersInput = {
  /** Filter to find records to delete */
  filter: ShopMemberDeleteFilter;
};

export type DeleteManyShopsInput = {
  /** Filter to find records to delete */
  filter: ShopDeleteFilter;
};

export type DeleteManyUserVehiclesInput = {
  /** Filter to find records to delete */
  filter: UserVehicleDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteManyVehicleBaseModelsInput = {
  /** Filter to find records to delete */
  filter: VehicleBaseModelDeleteFilter;
};

export type DeleteManyVehicleBodiesInput = {
  /** Filter to find records to delete */
  filter: VehicleBodyDeleteFilter;
};

export type DeleteManyVehicleBrandsInput = {
  /** Filter to find records to delete */
  filter: VehicleBrandDeleteFilter;
};

export type DeleteManyVehicleModelsInput = {
  /** Filter to find records to delete */
  filter: VehicleModelDeleteFilter;
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

export type DeleteOneCustomerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneFileInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneGarageInput = {
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

export type DeleteOneProductTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductUnitInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneServiceLogBillInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneServiceLogInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneShopInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneShopMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserVehicleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneVehicleBaseModelInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneVehicleBodyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneVehicleBrandInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneVehicleModelInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export enum ErrorCodes {
  AuthAccountExists = 'AUTH_ACCOUNT_EXISTS',
  AuthAccountNotFound = 'AUTH_ACCOUNT_NOT_FOUND',
  AuthAccountPendingActivation = 'AUTH_ACCOUNT_PENDING_ACTIVATION',
  AuthForbidden = 'AUTH_FORBIDDEN',
  AuthRequestExpired = 'AUTH_REQUEST_EXPIRED',
  AuthRequestNotFound = 'AUTH_REQUEST_NOT_FOUND',
  OrgBranchNotFound = 'ORG_BRANCH_NOT_FOUND',
  ProductImportEmptyRecords = 'PRODUCT_IMPORT_EMPTY_RECORDS',
  ProductPriceImportEmptyRecords = 'PRODUCT_PRICE_IMPORT_EMPTY_RECORDS',
  SaleBranchSaleChannelNotFound = 'SALE_BRANCH_SALE_CHANNEL_NOT_FOUND',
  SaleOrderImportParseFailure = 'SALE_ORDER_IMPORT_PARSE_FAILURE',
  UploadFileNotFound = 'UPLOAD_FILE_NOT_FOUND',
  UploadMediaNotFound = 'UPLOAD_MEDIA_NOT_FOUND'
}

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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
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

export type Garage = {
  __typename?: 'Garage';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCoutry?: Maybe<Scalars['String']['output']>;
  addressDistrict?: Maybe<Scalars['String']['output']>;
  addressFull?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressStreetAndNo?: Maybe<Scalars['String']['output']>;
  addressWard?: Maybe<Scalars['String']['output']>;
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gplace_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Array<Scalars['String']['output']>>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  org: Org;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GarageStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GarageAggregateFilter = {
  and?: InputMaybe<Array<GarageAggregateFilter>>;
  branch?: InputMaybe<GarageAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageAggregateFilter>>;
  org?: InputMaybe<GarageAggregateFilterOrgAggregateFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<GarageAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageAggregateFilterOrgAggregateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<GarageAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageAggregateGroupBy = {
  __typename?: 'GarageAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gplace_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GarageStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GarageAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type GarageAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type GarageAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type GarageAggregateResponse = {
  __typename?: 'GarageAggregateResponse';
  avg?: Maybe<GarageAvgAggregate>;
  count?: Maybe<GarageCountAggregate>;
  groupBy?: Maybe<GarageAggregateGroupBy>;
  max?: Maybe<GarageMaxAggregate>;
  min?: Maybe<GarageMinAggregate>;
  sum?: Maybe<GarageSumAggregate>;
};

export type GarageAvgAggregate = {
  __typename?: 'GarageAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GarageConnection = {
  __typename?: 'GarageConnection';
  /** Array of edges. */
  edges: Array<GarageEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type GarageCountAggregate = {
  __typename?: 'GarageCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  gplace_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['Int']['output']>;
  lng?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type GarageDto = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCoutry?: InputMaybe<Scalars['String']['input']>;
  addressDistrict?: InputMaybe<Scalars['String']['input']>;
  addressFull?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressStreetAndNo?: InputMaybe<Scalars['String']['input']>;
  addressWard?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gplace_id?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  org?: InputMaybe<Scalars['ID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GarageStatus>;
};

export type GarageDeleteFilter = {
  and?: InputMaybe<Array<GarageDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageDeleteFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageDeleteResponse = {
  __typename?: 'GarageDeleteResponse';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCoutry?: Maybe<Scalars['String']['output']>;
  addressDistrict?: Maybe<Scalars['String']['output']>;
  addressFull?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressStreetAndNo?: Maybe<Scalars['String']['output']>;
  addressWard?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gplace_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Array<Scalars['String']['output']>>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GarageStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GarageEdge = {
  __typename?: 'GarageEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Garage */
  node: Garage;
};

export type GarageFilter = {
  and?: InputMaybe<Array<GarageFilter>>;
  branch?: InputMaybe<GarageFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageFilter>>;
  org?: InputMaybe<GarageFilterOrgFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageFilterOrgBranchFilter = {
  and?: InputMaybe<Array<GarageFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageFilterOrgFilter = {
  and?: InputMaybe<Array<GarageFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageFilterOrgFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GarageMaxAggregate = {
  __typename?: 'GarageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gplace_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GarageStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GarageMinAggregate = {
  __typename?: 'GarageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  gplace_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<GarageStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GarageSort = {
  direction: SortDirection;
  field: GarageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum GarageSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  GplaceId = 'gplace_id',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  Name = 'name',
  PhoneNumber = 'phone_number',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum GarageStatus {
  Activated = 'ACTIVATED',
  Blocked = 'BLOCKED',
  Unactivated = 'UNACTIVATED'
}

export type GarageStatusFilterComparison = {
  eq?: InputMaybe<GarageStatus>;
  gt?: InputMaybe<GarageStatus>;
  gte?: InputMaybe<GarageStatus>;
  iLike?: InputMaybe<GarageStatus>;
  in?: InputMaybe<Array<GarageStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<GarageStatus>;
  lt?: InputMaybe<GarageStatus>;
  lte?: InputMaybe<GarageStatus>;
  neq?: InputMaybe<GarageStatus>;
  notILike?: InputMaybe<GarageStatus>;
  notIn?: InputMaybe<Array<GarageStatus>>;
  notLike?: InputMaybe<GarageStatus>;
};

export type GarageSumAggregate = {
  __typename?: 'GarageSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GarageUpdateFilter = {
  and?: InputMaybe<Array<GarageUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GarageUpdateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
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

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
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

export type Mutation = {
  __typename?: 'Mutation';
  addAddressesToCustomer: Customer;
  addBillsToServiceLog: ServiceLog;
  addBranchesToOrg: Org;
  addMembersToOrg: Org;
  addMembersToOrgBranch: OrgBranch;
  addMembersToShop: Shop;
  addOptionGroupsToProduct: Product;
  addOptionsToOrderProduct: OrderProduct;
  addOptionsToProductOptionGroup: ProductOptionGroup;
  addProductsToProductCategory: ProductCategory;
  addProductsToProductOptionGroup: ProductOptionGroup;
  addProductsToProductType: ProductType;
  addProductsToProductUnit: ProductUnit;
  addShopsToOrg: Org;
  addVehiclesToUser: User;
  authConfirmPasswordReset: Scalars['Boolean']['output'];
  authConfirmPasswordResetByCode: Scalars['Boolean']['output'];
  authLogin: LoginResult;
  authLoginByApple: LoginResult;
  authLoginByFacebook: LoginResult;
  authLoginByGoogle: LoginResult;
  authRefreshToken: LoginResult;
  authRegister: Scalars['Boolean']['output'];
  authRequestPasswordReset: Scalars['Boolean']['output'];
  authResendVerification: Scalars['Boolean']['output'];
  authResendVerificationWithEmail: Scalars['Boolean']['output'];
  authVerify: Scalars['Boolean']['output'];
  authVerifyByCode: Scalars['Boolean']['output'];
  createManyAccountPasswordResets: Array<AccountPasswordReset>;
  createManyAccountVerfications: Array<AccountVerfication>;
  createManyAccounts: Array<Account>;
  createManyApiKeys: Array<ApiKey>;
  createManyCustomers: Array<Customer>;
  createManyFiles: Array<File>;
  createManyGarages: Array<Garage>;
  createManyOrderProducts: Array<OrderProduct>;
  createManyOrders: Array<Order>;
  createManyOrgBranchMembers: Array<OrgBranchMember>;
  createManyOrgBranches: Array<OrgBranch>;
  createManyOrgMembers: Array<OrgMember>;
  createManyOrgs: Array<Org>;
  createManyProductCategories: Array<ProductCategory>;
  createManyProductOptionGroups: Array<ProductOptionGroup>;
  createManyProductOptions: Array<ProductOption>;
  createManyProductTypes: Array<ProductType>;
  createManyProductUnits: Array<ProductUnit>;
  createManyProducts: Array<Product>;
  createManyServiceLogBills: Array<ServiceLogBill>;
  createManyServiceLogs: Array<ServiceLog>;
  createManyShopMembers: Array<ShopMember>;
  createManyShops: Array<Shop>;
  createManyUserVehicles: Array<UserVehicle>;
  createManyUsers: Array<User>;
  createManyVehicleBaseModels: Array<VehicleBaseModel>;
  createManyVehicleBodies: Array<VehicleBody>;
  createManyVehicleBrands: Array<VehicleBrand>;
  createManyVehicleModels: Array<VehicleModel>;
  createOneAccount: Account;
  createOneAccountPasswordReset: AccountPasswordReset;
  createOneAccountVerfication: AccountVerfication;
  createOneApiKey: ApiKey;
  createOneCustomer: Customer;
  createOneFile: File;
  createOneGarage: Garage;
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
  createOneProductType: ProductType;
  createOneProductUnit: ProductUnit;
  createOneServiceLog: ServiceLog;
  createOneServiceLogBill: ServiceLogBill;
  createOneShop: Shop;
  createOneShopMember: ShopMember;
  createOneUser: User;
  createOneUserVehicle: UserVehicle;
  createOneVehicleBaseModel: VehicleBaseModel;
  createOneVehicleBody: VehicleBody;
  createOneVehicleBrand: VehicleBrand;
  createOneVehicleModel: VehicleModel;
  deleteManyAccountPasswordResets: DeleteManyResponse;
  deleteManyAccountVerfications: DeleteManyResponse;
  deleteManyAccounts: DeleteManyResponse;
  deleteManyApiKeys: DeleteManyResponse;
  deleteManyCustomers: DeleteManyResponse;
  deleteManyFiles: DeleteManyResponse;
  deleteManyGarages: DeleteManyResponse;
  deleteManyOrderProducts: DeleteManyResponse;
  deleteManyOrders: DeleteManyResponse;
  deleteManyOrgBranchMembers: DeleteManyResponse;
  deleteManyOrgBranches: DeleteManyResponse;
  deleteManyOrgMembers: DeleteManyResponse;
  deleteManyOrgs: DeleteManyResponse;
  deleteManyProductCategories: DeleteManyResponse;
  deleteManyProductOptionGroups: DeleteManyResponse;
  deleteManyProductOptions: DeleteManyResponse;
  deleteManyProductTypes: DeleteManyResponse;
  deleteManyProductUnits: DeleteManyResponse;
  deleteManyProducts: DeleteManyResponse;
  deleteManyServiceLogBills: DeleteManyResponse;
  deleteManyServiceLogs: DeleteManyResponse;
  deleteManyShopMembers: DeleteManyResponse;
  deleteManyShops: DeleteManyResponse;
  deleteManyUserVehicles: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteManyVehicleBaseModels: DeleteManyResponse;
  deleteManyVehicleBodies: DeleteManyResponse;
  deleteManyVehicleBrands: DeleteManyResponse;
  deleteManyVehicleModels: DeleteManyResponse;
  deleteOneAccount: AccountDeleteResponse;
  deleteOneAccountPasswordReset: AccountPasswordResetDeleteResponse;
  deleteOneAccountVerfication: AccountVerficationDeleteResponse;
  deleteOneApiKey: ApiKeyDeleteResponse;
  deleteOneCustomer: CustomerDeleteResponse;
  deleteOneFile: FileDeleteResponse;
  deleteOneGarage: GarageDeleteResponse;
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
  deleteOneProductType: ProductTypeDeleteResponse;
  deleteOneProductUnit: ProductUnitDeleteResponse;
  deleteOneServiceLog: ServiceLogDeleteResponse;
  deleteOneServiceLogBill: ServiceLogBillDeleteResponse;
  deleteOneShop: ShopDeleteResponse;
  deleteOneShopMember: ShopMemberDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserVehicle: UserVehicleDeleteResponse;
  deleteOneVehicleBaseModel: VehicleBaseModelDeleteResponse;
  deleteOneVehicleBody: VehicleBodyDeleteResponse;
  deleteOneVehicleBrand: VehicleBrandDeleteResponse;
  deleteOneVehicleModel: VehicleModelDeleteResponse;
  productImportByFile: Array<Product>;
  setAddressesOnCustomer: Customer;
  setBillsOnServiceLog: ServiceLog;
  setBodyOnVehicleModel: VehicleModel;
  setBranchesOnOrg: Org;
  setGarageOnServiceLog: ServiceLog;
  setMembersOnOrg: Org;
  setMembersOnOrgBranch: OrgBranch;
  setMembersOnShop: Shop;
  setOptionGroupsOnProduct: Product;
  setOptionsOnOrderProduct: OrderProduct;
  setOptionsOnProductOptionGroup: ProductOptionGroup;
  setProductOnOrderProduct: OrderProduct;
  setProductsOnProductCategory: ProductCategory;
  setProductsOnProductOptionGroup: ProductOptionGroup;
  setProductsOnProductType: ProductType;
  setProductsOnProductUnit: ProductUnit;
  setShopsOnOrg: Org;
  setUnitOnProduct: Product;
  setUserOnAccount: Account;
  setVehiclesOnUser: User;
  updateManyAccountPasswordResets: UpdateManyResponse;
  updateManyAccountVerfications: UpdateManyResponse;
  updateManyAccounts: UpdateManyResponse;
  updateManyApiKeys: UpdateManyResponse;
  updateManyCustomers: UpdateManyResponse;
  updateManyFiles: UpdateManyResponse;
  updateManyGarages: UpdateManyResponse;
  updateManyOrderProducts: UpdateManyResponse;
  updateManyOrders: UpdateManyResponse;
  updateManyOrgBranchMembers: UpdateManyResponse;
  updateManyOrgBranches: UpdateManyResponse;
  updateManyOrgMembers: UpdateManyResponse;
  updateManyOrgs: UpdateManyResponse;
  updateManyProductCategories: UpdateManyResponse;
  updateManyProductOptionGroups: UpdateManyResponse;
  updateManyProductOptions: UpdateManyResponse;
  updateManyProductTypes: UpdateManyResponse;
  updateManyProductUnits: UpdateManyResponse;
  updateManyProducts: UpdateManyResponse;
  updateManyServiceLogBills: UpdateManyResponse;
  updateManyServiceLogs: UpdateManyResponse;
  updateManyShopMembers: UpdateManyResponse;
  updateManyShops: UpdateManyResponse;
  updateManyUserVehicles: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateManyVehicleBaseModels: UpdateManyResponse;
  updateManyVehicleBodies: UpdateManyResponse;
  updateManyVehicleBrands: UpdateManyResponse;
  updateManyVehicleModels: UpdateManyResponse;
  updateOneAccount: Account;
  updateOneAccountPasswordReset: AccountPasswordReset;
  updateOneAccountVerfication: AccountVerfication;
  updateOneApiKey: ApiKey;
  updateOneCustomer: Customer;
  updateOneFile: File;
  updateOneGarage: Garage;
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
  updateOneProductType: ProductType;
  updateOneProductUnit: ProductUnit;
  updateOneServiceLog: ServiceLog;
  updateOneServiceLogBill: ServiceLogBill;
  updateOneShop: Shop;
  updateOneShopMember: ShopMember;
  updateOneUser: User;
  updateOneUserVehicle: UserVehicle;
  updateOneVehicleBaseModel: VehicleBaseModel;
  updateOneVehicleBody: VehicleBody;
  updateOneVehicleBrand: VehicleBrand;
  updateOneVehicleModel: VehicleModel;
};


export type MutationAddAddressesToCustomerArgs = {
  input: AddAddressesToCustomerInput;
};


export type MutationAddBillsToServiceLogArgs = {
  input: AddBillsToServiceLogInput;
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


export type MutationAddMembersToShopArgs = {
  input: AddMembersToShopInput;
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


export type MutationAddShopsToOrgArgs = {
  input: AddShopsToOrgInput;
};


export type MutationAddVehiclesToUserArgs = {
  input: AddVehiclesToUserInput;
};


export type MutationAuthConfirmPasswordResetArgs = {
  input: AuthConfirmPasswordResetInput;
};


export type MutationAuthConfirmPasswordResetByCodeArgs = {
  input: AuthConfirmPasswordResetByCodeInput;
};


export type MutationAuthLoginArgs = {
  input: AuthLoginInput;
};


export type MutationAuthLoginByAppleArgs = {
  input: AuthLoginSocialInput;
};


export type MutationAuthLoginByFacebookArgs = {
  input: AuthLoginSocialInput;
};


export type MutationAuthLoginByGoogleArgs = {
  input: AuthLoginSocialInput;
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


export type MutationAuthVerifyByCodeArgs = {
  input: AuthVerifyAccountByCodeInput;
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


export type MutationCreateManyCustomersArgs = {
  input: CreateManyCustomersInput;
};


export type MutationCreateManyFilesArgs = {
  input: CreateManyFilesInput;
};


export type MutationCreateManyGaragesArgs = {
  input: CreateManyGaragesInput;
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


export type MutationCreateManyProductTypesArgs = {
  input: CreateManyProductTypesInput;
};


export type MutationCreateManyProductUnitsArgs = {
  input: CreateManyProductUnitsInput;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationCreateManyServiceLogBillsArgs = {
  input: CreateManyServiceLogBillsInput;
};


export type MutationCreateManyServiceLogsArgs = {
  input: CreateManyServiceLogsInput;
};


export type MutationCreateManyShopMembersArgs = {
  input: CreateManyShopMembersInput;
};


export type MutationCreateManyShopsArgs = {
  input: CreateManyShopsInput;
};


export type MutationCreateManyUserVehiclesArgs = {
  input: CreateManyUserVehiclesInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateManyVehicleBaseModelsArgs = {
  input: CreateManyVehicleBaseModelsInput;
};


export type MutationCreateManyVehicleBodiesArgs = {
  input: CreateManyVehicleBodiesInput;
};


export type MutationCreateManyVehicleBrandsArgs = {
  input: CreateManyVehicleBrandsInput;
};


export type MutationCreateManyVehicleModelsArgs = {
  input: CreateManyVehicleModelsInput;
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


export type MutationCreateOneCustomerArgs = {
  input: CreateOneCustomerInput;
};


export type MutationCreateOneFileArgs = {
  input: CreateOneFileInput;
};


export type MutationCreateOneGarageArgs = {
  input: CreateOneGarageInput;
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


export type MutationCreateOneProductTypeArgs = {
  input: CreateOneProductTypeInput;
};


export type MutationCreateOneProductUnitArgs = {
  input: CreateOneProductUnitInput;
};


export type MutationCreateOneServiceLogArgs = {
  input: CreateOneServiceLogInput;
};


export type MutationCreateOneServiceLogBillArgs = {
  input: CreateOneServiceLogBillInput;
};


export type MutationCreateOneShopArgs = {
  input: CreateOneShopInput;
};


export type MutationCreateOneShopMemberArgs = {
  input: CreateOneShopMemberInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneUserVehicleArgs = {
  input: CreateOneUserVehicleInput;
};


export type MutationCreateOneVehicleBaseModelArgs = {
  input: CreateOneVehicleBaseModelInput;
};


export type MutationCreateOneVehicleBodyArgs = {
  input: CreateOneVehicleBodyInput;
};


export type MutationCreateOneVehicleBrandArgs = {
  input: CreateOneVehicleBrandInput;
};


export type MutationCreateOneVehicleModelArgs = {
  input: CreateOneVehicleModelInput;
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


export type MutationDeleteManyCustomersArgs = {
  input: DeleteManyCustomersInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationDeleteManyGaragesArgs = {
  input: DeleteManyGaragesInput;
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


export type MutationDeleteManyProductTypesArgs = {
  input: DeleteManyProductTypesInput;
};


export type MutationDeleteManyProductUnitsArgs = {
  input: DeleteManyProductUnitsInput;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationDeleteManyServiceLogBillsArgs = {
  input: DeleteManyServiceLogBillsInput;
};


export type MutationDeleteManyServiceLogsArgs = {
  input: DeleteManyServiceLogsInput;
};


export type MutationDeleteManyShopMembersArgs = {
  input: DeleteManyShopMembersInput;
};


export type MutationDeleteManyShopsArgs = {
  input: DeleteManyShopsInput;
};


export type MutationDeleteManyUserVehiclesArgs = {
  input: DeleteManyUserVehiclesInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteManyVehicleBaseModelsArgs = {
  input: DeleteManyVehicleBaseModelsInput;
};


export type MutationDeleteManyVehicleBodiesArgs = {
  input: DeleteManyVehicleBodiesInput;
};


export type MutationDeleteManyVehicleBrandsArgs = {
  input: DeleteManyVehicleBrandsInput;
};


export type MutationDeleteManyVehicleModelsArgs = {
  input: DeleteManyVehicleModelsInput;
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


export type MutationDeleteOneCustomerArgs = {
  input: DeleteOneCustomerInput;
};


export type MutationDeleteOneFileArgs = {
  input: DeleteOneFileInput;
};


export type MutationDeleteOneGarageArgs = {
  input: DeleteOneGarageInput;
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


export type MutationDeleteOneProductTypeArgs = {
  input: DeleteOneProductTypeInput;
};


export type MutationDeleteOneProductUnitArgs = {
  input: DeleteOneProductUnitInput;
};


export type MutationDeleteOneServiceLogArgs = {
  input: DeleteOneServiceLogInput;
};


export type MutationDeleteOneServiceLogBillArgs = {
  input: DeleteOneServiceLogBillInput;
};


export type MutationDeleteOneShopArgs = {
  input: DeleteOneShopInput;
};


export type MutationDeleteOneShopMemberArgs = {
  input: DeleteOneShopMemberInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeleteOneUserVehicleArgs = {
  input: DeleteOneUserVehicleInput;
};


export type MutationDeleteOneVehicleBaseModelArgs = {
  input: DeleteOneVehicleBaseModelInput;
};


export type MutationDeleteOneVehicleBodyArgs = {
  input: DeleteOneVehicleBodyInput;
};


export type MutationDeleteOneVehicleBrandArgs = {
  input: DeleteOneVehicleBrandInput;
};


export type MutationDeleteOneVehicleModelArgs = {
  input: DeleteOneVehicleModelInput;
};


export type MutationProductImportByFileArgs = {
  input: ProductImportInput;
};


export type MutationSetAddressesOnCustomerArgs = {
  input: SetAddressesOnCustomerInput;
};


export type MutationSetBillsOnServiceLogArgs = {
  input: SetBillsOnServiceLogInput;
};


export type MutationSetBodyOnVehicleModelArgs = {
  input: SetBodyOnVehicleModelInput;
};


export type MutationSetBranchesOnOrgArgs = {
  input: SetBranchesOnOrgInput;
};


export type MutationSetGarageOnServiceLogArgs = {
  input: SetGarageOnServiceLogInput;
};


export type MutationSetMembersOnOrgArgs = {
  input: SetMembersOnOrgInput;
};


export type MutationSetMembersOnOrgBranchArgs = {
  input: SetMembersOnOrgBranchInput;
};


export type MutationSetMembersOnShopArgs = {
  input: SetMembersOnShopInput;
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


export type MutationSetShopsOnOrgArgs = {
  input: SetShopsOnOrgInput;
};


export type MutationSetUnitOnProductArgs = {
  input: SetUnitOnProductInput;
};


export type MutationSetUserOnAccountArgs = {
  input: SetUserOnAccountInput;
};


export type MutationSetVehiclesOnUserArgs = {
  input: SetVehiclesOnUserInput;
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


export type MutationUpdateManyCustomersArgs = {
  input: UpdateManyCustomersInput;
};


export type MutationUpdateManyFilesArgs = {
  input: UpdateManyFilesInput;
};


export type MutationUpdateManyGaragesArgs = {
  input: UpdateManyGaragesInput;
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


export type MutationUpdateManyProductTypesArgs = {
  input: UpdateManyProductTypesInput;
};


export type MutationUpdateManyProductUnitsArgs = {
  input: UpdateManyProductUnitsInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationUpdateManyServiceLogBillsArgs = {
  input: UpdateManyServiceLogBillsInput;
};


export type MutationUpdateManyServiceLogsArgs = {
  input: UpdateManyServiceLogsInput;
};


export type MutationUpdateManyShopMembersArgs = {
  input: UpdateManyShopMembersInput;
};


export type MutationUpdateManyShopsArgs = {
  input: UpdateManyShopsInput;
};


export type MutationUpdateManyUserVehiclesArgs = {
  input: UpdateManyUserVehiclesInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateManyVehicleBaseModelsArgs = {
  input: UpdateManyVehicleBaseModelsInput;
};


export type MutationUpdateManyVehicleBodiesArgs = {
  input: UpdateManyVehicleBodiesInput;
};


export type MutationUpdateManyVehicleBrandsArgs = {
  input: UpdateManyVehicleBrandsInput;
};


export type MutationUpdateManyVehicleModelsArgs = {
  input: UpdateManyVehicleModelsInput;
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


export type MutationUpdateOneCustomerArgs = {
  input: UpdateOneCustomerInput;
};


export type MutationUpdateOneFileArgs = {
  input: UpdateOneFileInput;
};


export type MutationUpdateOneGarageArgs = {
  input: UpdateOneGarageInput;
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


export type MutationUpdateOneProductTypeArgs = {
  input: UpdateOneProductTypeInput;
};


export type MutationUpdateOneProductUnitArgs = {
  input: UpdateOneProductUnitInput;
};


export type MutationUpdateOneServiceLogArgs = {
  input: UpdateOneServiceLogInput;
};


export type MutationUpdateOneServiceLogBillArgs = {
  input: UpdateOneServiceLogBillInput;
};


export type MutationUpdateOneShopArgs = {
  input: UpdateOneShopInput;
};


export type MutationUpdateOneShopMemberArgs = {
  input: UpdateOneShopMemberInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneUserVehicleArgs = {
  input: UpdateOneUserVehicleInput;
};


export type MutationUpdateOneVehicleBaseModelArgs = {
  input: UpdateOneVehicleBaseModelInput;
};


export type MutationUpdateOneVehicleBodyArgs = {
  input: UpdateOneVehicleBodyInput;
};


export type MutationUpdateOneVehicleBrandArgs = {
  input: UpdateOneVehicleBrandInput;
};


export type MutationUpdateOneVehicleModelArgs = {
  input: UpdateOneVehicleModelInput;
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
  shippingAddressCity?: Maybe<Scalars['String']['output']>;
  shippingAddressCoutry?: Maybe<Scalars['String']['output']>;
  shippingAddressDistrict?: Maybe<Scalars['String']['output']>;
  shippingAddressFull?: Maybe<Scalars['String']['output']>;
  shippingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  shippingAddressStreetAndNo?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  shippingAddressCity?: InputMaybe<Scalars['String']['input']>;
  shippingAddressCoutry?: InputMaybe<Scalars['String']['input']>;
  shippingAddressDistrict?: InputMaybe<Scalars['String']['input']>;
  shippingAddressFull?: InputMaybe<Scalars['String']['input']>;
  shippingAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  shippingAddressStreetAndNo?: InputMaybe<Scalars['String']['input']>;
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
  shippingAddressCoutry?: Maybe<Scalars['String']['output']>;
  shippingAddressDistrict?: Maybe<Scalars['String']['output']>;
  shippingAddressFull?: Maybe<Scalars['String']['output']>;
  shippingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  shippingAddressStreetAndNo?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  id: Scalars['ID']['output'];
  members?: Maybe<OrgMembersConnection>;
  membersAggregate: Array<OrgMembersAggregateResponse>;
  name: Scalars['String']['output'];
  shops?: Maybe<OrgShopsConnection>;
  shopsAggregate: Array<OrgShopsAggregateResponse>;
  status: OrgStatus;
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


export type OrgShopsArgs = {
  filter?: ShopFilter;
  paging?: OffsetPaging;
  sorting?: Array<ShopSort>;
};


export type OrgShopsAggregateArgs = {
  filter?: InputMaybe<ShopAggregateFilter>;
};

export type OrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilter>>;
  branches?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilter>>;
  shops?: InputMaybe<OrgAggregateFilterShopAggregateFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrgAggregateFilterAccountAggregateFilterUserAggregateFilter>;
};

export type OrgAggregateFilterAccountAggregateFilterUserAggregateFilter = {
  account?: InputMaybe<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>;
};

export type OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilter>>;
  org?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>>;
  branches?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>>;
  shops?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter = {
  account?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  branch?: InputMaybe<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilter = {
  account?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilter>>;
  org?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter>>;
  branches?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter>>;
  shops?: InputMaybe<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilter>>;
  branch?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilter>>;
  org?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilter>>;
  branches?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilter>>;
  shops?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter>>;
  org?: InputMaybe<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter = {
  account?: InputMaybe<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  shop?: InputMaybe<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgAggregateGroupBy = {
  __typename?: 'OrgAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgStatus>;
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
  id: Scalars['ID']['output'];
  members: OrgBranchMembersConnection;
  membersAggregate: Array<OrgBranchMembersAggregateResponse>;
  name: Scalars['String']['output'];
  org: Org;
  phone_number?: Maybe<Scalars['String']['output']>;
  status: OrgBranchStatus;
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
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgBranchAggregateFilterOrgBranchMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchAggregateFilter>>;
  org?: InputMaybe<OrgBranchAggregateFilterOrgAggregateFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchAggregateFilterOrgAggregateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
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
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
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
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchDto = {
  details?: InputMaybe<Scalars['JSON']['input']>;
  members?: InputMaybe<Array<OrgBranchMemberDto>>;
  name: Scalars['String']['input'];
  org?: InputMaybe<Scalars['ID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  status: OrgBranchStatus;
};

export type OrgBranchDeleteFilter = {
  and?: InputMaybe<Array<OrgBranchDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchDeleteFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchDeleteResponse = {
  __typename?: 'OrgBranchDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
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
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgBranchFilterOrgBranchMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchFilter>>;
  org?: InputMaybe<OrgBranchFilterOrgFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchFilterOrgFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
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
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMember = {
  __typename?: 'OrgBranchMember';
  account: Account;
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  role: OrgBranchRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchMemberAggregateFilter = {
  account?: InputMaybe<OrgBranchMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilter>>;
  branch?: InputMaybe<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  branch?: InputMaybe<OrgBranchMemberFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgBranchMemberFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchMemberFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgBranchMemberFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchMemberFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
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
  Id = 'id',
  Name = 'name',
  PhoneNumber = 'phone_number',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum OrgBranchStatus {
  Activated = 'ACTIVATED',
  Blocked = 'BLOCKED',
  Unactivated = 'UNACTIVATED'
}

export type OrgBranchStatusFilterComparison = {
  eq?: InputMaybe<OrgBranchStatus>;
  gt?: InputMaybe<OrgBranchStatus>;
  gte?: InputMaybe<OrgBranchStatus>;
  iLike?: InputMaybe<OrgBranchStatus>;
  in?: InputMaybe<Array<OrgBranchStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrgBranchStatus>;
  lt?: InputMaybe<OrgBranchStatus>;
  lte?: InputMaybe<OrgBranchStatus>;
  neq?: InputMaybe<OrgBranchStatus>;
  notILike?: InputMaybe<OrgBranchStatus>;
  notIn?: InputMaybe<Array<OrgBranchStatus>>;
  notLike?: InputMaybe<OrgBranchStatus>;
};

export type OrgBranchUpdateFilter = {
  and?: InputMaybe<Array<OrgBranchUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgBranchUpdateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgBranchesAggregateGroupBy = {
  __typename?: 'OrgBranchesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
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
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgBranchesMaxAggregate = {
  __typename?: 'OrgBranchesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgBranchesMinAggregate = {
  __typename?: 'OrgBranchesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgBranchStatus>;
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
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgDto = {
  branches?: InputMaybe<Array<OrgBranchDto>>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  members?: InputMaybe<Array<OrgMemberDto>>;
  name: Scalars['String']['input'];
  status: OrgStatus;
  type: OrgType;
};

export type OrgDeleteFilter = {
  and?: InputMaybe<Array<OrgDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgDeleteFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgDeleteResponse = {
  __typename?: 'OrgDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgStatus>;
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
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterOrgMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilter>>;
  shops?: InputMaybe<OrgFilterShopFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrgFilterAccountFilterUserFilter>;
};

export type OrgFilterAccountFilterUserFilter = {
  account?: InputMaybe<OrgFilterAccountFilterUserFilterAccountFilter>;
  and?: InputMaybe<Array<OrgFilterAccountFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterAccountFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<OrgFilterAccountFilterUserFilterUserVehicleFilter>;
};

export type OrgFilterAccountFilterUserFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterAccountFilterUserFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterAccountFilterUserFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterAccountFilterUserFilterUserVehicleFilter = {
  and?: InputMaybe<Array<OrgFilterAccountFilterUserFilterUserVehicleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterAccountFilterUserFilterUserVehicleFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterOrgBranchFilterOrgBranchMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilter>>;
  org?: InputMaybe<OrgFilterOrgBranchFilterOrgFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgBranchMemberFilter = {
  account?: InputMaybe<OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter>;
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilter>>;
  branch?: InputMaybe<OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilter>>;
  branches?: InputMaybe<OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgFilterOrgBranchFilterOrgFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilter>>;
  shops?: InputMaybe<OrgFilterOrgBranchFilterOrgFilterShopFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgBranchFilterOrgFilterShopFilter = {
  and?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterShopFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgBranchFilterOrgFilterShopFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilter = {
  account?: InputMaybe<OrgFilterOrgMemberFilterAccountFilter>;
  and?: InputMaybe<Array<OrgFilterOrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilter>>;
  org?: InputMaybe<OrgFilterOrgMemberFilterOrgFilter>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrgFilterOrgMemberFilterAccountFilterUserFilter>;
};

export type OrgFilterOrgMemberFilterAccountFilterUserFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterAccountFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterAccountFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterOrgFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilter>>;
  branches?: InputMaybe<OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgFilterOrgMemberFilterOrgFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilter>>;
  shops?: InputMaybe<OrgFilterOrgMemberFilterOrgFilterShopFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterOrgFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterOrgMemberFilterOrgFilterShopFilter = {
  and?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterShopFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterOrgMemberFilterOrgFilterShopFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilter>>;
  branch?: InputMaybe<OrgFilterShopFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterShopFilterShopMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilter>>;
  org?: InputMaybe<OrgFilterShopFilterOrgFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilter>>;
  org?: InputMaybe<OrgFilterShopFilterOrgBranchFilterOrgFilter>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter>>;
  role?: InputMaybe<OrgBranchRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgBranchFilterOrgFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgBranchFilterOrgFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgFilter>>;
  branches?: InputMaybe<OrgFilterShopFilterOrgFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<OrgFilterShopFilterOrgFilterAccountFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<OrgFilterShopFilterOrgFilterOrgMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgFilter>>;
  shops?: InputMaybe<OrgFilterShopFilterOrgFilterShopFilter>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgFilterOrgBranchFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgFilterOrgMemberFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgFilterOrgMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgFilterOrgMemberFilter>>;
  role?: InputMaybe<OrgRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterOrgFilterShopFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterOrgFilterShopFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterOrgFilterShopFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterShopMemberFilter = {
  account?: InputMaybe<OrgFilterShopFilterShopMemberFilterAccountFilter>;
  and?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  shop?: InputMaybe<OrgFilterShopFilterShopMemberFilterShopFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterShopMemberFilterAccountFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgFilterShopFilterShopMemberFilterShopFilter = {
  and?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilterShopFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgFilterShopFilterShopMemberFilterShopFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMaxAggregate = {
  __typename?: 'OrgMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrgStatus>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<OrgMemberAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberAggregateFilterOrgAggregateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
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
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrgMemberFilterOrgFilter = {
  and?: InputMaybe<Array<OrgMemberFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgMemberFilterOrgFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
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
  status?: Maybe<OrgStatus>;
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

export type OrgShopsAggregateGroupBy = {
  __typename?: 'OrgShopsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgShopsAggregateResponse = {
  __typename?: 'OrgShopsAggregateResponse';
  count?: Maybe<OrgShopsCountAggregate>;
  groupBy?: Maybe<OrgShopsAggregateGroupBy>;
  max?: Maybe<OrgShopsMaxAggregate>;
  min?: Maybe<OrgShopsMinAggregate>;
};

export type OrgShopsConnection = {
  __typename?: 'OrgShopsConnection';
  /** Array of nodes. */
  nodes: Array<Shop>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrgShopsCountAggregate = {
  __typename?: 'OrgShopsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type OrgShopsMaxAggregate = {
  __typename?: 'OrgShopsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgShopsMinAggregate = {
  __typename?: 'OrgShopsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgSort = {
  direction: SortDirection;
  field: OrgSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrgSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export enum OrgStatus {
  Activated = 'ACTIVATED',
  Blocked = 'BLOCKED',
  Unactivated = 'UNACTIVATED'
}

export type OrgStatusFilterComparison = {
  eq?: InputMaybe<OrgStatus>;
  gt?: InputMaybe<OrgStatus>;
  gte?: InputMaybe<OrgStatus>;
  iLike?: InputMaybe<OrgStatus>;
  in?: InputMaybe<Array<OrgStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrgStatus>;
  lt?: InputMaybe<OrgStatus>;
  lte?: InputMaybe<OrgStatus>;
  neq?: InputMaybe<OrgStatus>;
  notILike?: InputMaybe<OrgStatus>;
  notIn?: InputMaybe<Array<OrgStatus>>;
  notLike?: InputMaybe<OrgStatus>;
};

export type OrgSumAggregate = {
  __typename?: 'OrgSumAggregate';
  type?: Maybe<Scalars['Float']['output']>;
};

export enum OrgType {
  Default = 'DEFAULT'
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrgUpdateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductTypeFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUnitFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
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
  customer: Customer;
  customerAggregate: Array<CustomerAggregateResponse>;
  customers: CustomerConnection;
  errorCodes: ErrorCodes;
  file: File;
  fileAggregate: Array<FileAggregateResponse>;
  files: FileConnection;
  garage: Garage;
  garageAggregate: Array<GarageAggregateResponse>;
  garages: GarageConnection;
  me: Account;
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
  productType: ProductType;
  productTypeAggregate: Array<ProductTypeAggregateResponse>;
  productTypes: ProductTypeConnection;
  productUnit: ProductUnit;
  productUnitAggregate: Array<ProductUnitAggregateResponse>;
  productUnits: ProductUnitConnection;
  products: ProductConnection;
  serviceLog: ServiceLog;
  serviceLogAggregate: Array<ServiceLogAggregateResponse>;
  serviceLogBill: ServiceLogBill;
  serviceLogBillAggregate: Array<ServiceLogBillAggregateResponse>;
  serviceLogBills: ServiceLogBillConnection;
  serviceLogs: ServiceLogConnection;
  shop: Shop;
  shopAggregate: Array<ShopAggregateResponse>;
  shopMember: ShopMember;
  shopMemberAggregate: Array<ShopMemberAggregateResponse>;
  shopMembers: ShopMemberConnection;
  shops: ShopConnection;
  user: User;
  userAggregate: Array<UserAggregateResponse>;
  userVehicle: UserVehicle;
  userVehicleAggregate: Array<UserVehicleAggregateResponse>;
  userVehicles: UserVehicleConnection;
  users: UserConnection;
  vehicleBaseModel: VehicleBaseModel;
  vehicleBaseModels: VehicleBaseModelConnection;
  vehicleBodies: VehicleBodyConnection;
  vehicleBody: VehicleBody;
  vehicleBrand: VehicleBrand;
  vehicleBrands: VehicleBrandConnection;
  vehicleModel: VehicleModel;
  vehicleModels: VehicleModelConnection;
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


export type QueryGarageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGarageAggregateArgs = {
  filter?: InputMaybe<GarageAggregateFilter>;
};


export type QueryGaragesArgs = {
  filter?: GarageFilter;
  paging?: CursorPaging;
  sorting?: Array<GarageSort>;
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


export type QueryServiceLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceLogAggregateArgs = {
  filter?: InputMaybe<ServiceLogAggregateFilter>;
};


export type QueryServiceLogBillArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceLogBillAggregateArgs = {
  filter?: InputMaybe<ServiceLogBillAggregateFilter>;
};


export type QueryServiceLogBillsArgs = {
  filter?: ServiceLogBillFilter;
  paging?: CursorPaging;
  sorting?: Array<ServiceLogBillSort>;
};


export type QueryServiceLogsArgs = {
  filter?: ServiceLogFilter;
  paging?: CursorPaging;
  sorting?: Array<ServiceLogSort>;
};


export type QueryShopArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShopAggregateArgs = {
  filter?: InputMaybe<ShopAggregateFilter>;
};


export type QueryShopMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShopMemberAggregateArgs = {
  filter?: InputMaybe<ShopMemberAggregateFilter>;
};


export type QueryShopMembersArgs = {
  filter?: ShopMemberFilter;
  paging?: CursorPaging;
  sorting?: Array<ShopMemberSort>;
};


export type QueryShopsArgs = {
  filter?: ShopFilter;
  paging?: CursorPaging;
  sorting?: Array<ShopSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAggregateArgs = {
  filter?: InputMaybe<UserAggregateFilter>;
};


export type QueryUserVehicleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserVehicleAggregateArgs = {
  filter?: InputMaybe<UserVehicleAggregateFilter>;
};


export type QueryUserVehiclesArgs = {
  filter?: UserVehicleFilter;
  paging?: CursorPaging;
  sorting?: Array<UserVehicleSort>;
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: CursorPaging;
  sorting?: Array<UserSort>;
};


export type QueryVehicleBaseModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleBaseModelsArgs = {
  filter?: VehicleBaseModelFilter;
  paging?: CursorPaging;
  sorting?: Array<VehicleBaseModelSort>;
};


export type QueryVehicleBodiesArgs = {
  filter?: VehicleBodyFilter;
  paging?: CursorPaging;
  sorting?: Array<VehicleBodySort>;
};


export type QueryVehicleBodyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleBrandsArgs = {
  filter?: VehicleBrandFilter;
  paging?: CursorPaging;
  sorting?: Array<VehicleBrandSort>;
};


export type QueryVehicleModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleModelsArgs = {
  filter?: VehicleModelFilter;
  paging?: CursorPaging;
  sorting?: Array<VehicleModelSort>;
};

export type ServiceLog = {
  __typename?: 'ServiceLog';
  bills?: Maybe<ServiceLogBillsConnection>;
  billsAggregate: Array<ServiceLogBillsAggregateResponse>;
  createdAt: Scalars['DateTime']['output'];
  customGarage?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  garage?: Maybe<Garage>;
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Scalars['String']['output']>>;
  media?: Maybe<Array<Scalars['String']['output']>>;
  mileage?: Maybe<Scalars['Float']['output']>;
  type: ServiceLogType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicle: UserVehicle;
};


export type ServiceLogBillsArgs = {
  filter?: ServiceLogBillFilter;
  paging?: OffsetPaging;
  sorting?: Array<ServiceLogBillSort>;
};


export type ServiceLogBillsAggregateArgs = {
  filter?: InputMaybe<ServiceLogBillAggregateFilter>;
};

export type ServiceLogAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogAggregateFilter>>;
  bills?: InputMaybe<ServiceLogAggregateFilterServiceLogBillAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  garage?: InputMaybe<ServiceLogAggregateFilterGarageAggregateFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogAggregateFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicle?: InputMaybe<ServiceLogAggregateFilterUserVehicleAggregateFilter>;
};

export type ServiceLogAggregateFilterGarageAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogAggregateFilterGarageAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceLogAggregateFilterGarageAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogAggregateFilterServiceLogBillAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogAggregateFilterServiceLogBillAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogAggregateFilterServiceLogBillAggregateFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogAggregateFilterUserVehicleAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogAggregateFilterUserVehicleAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceLogAggregateFilterUserVehicleAggregateFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogAggregateGroupBy = {
  __typename?: 'ServiceLogAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<ServiceLogType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceLogAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ServiceLogAggregateGroupByDateArgs = {
  by?: GroupBy;
};


export type ServiceLogAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ServiceLogAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ServiceLogAggregateResponse = {
  __typename?: 'ServiceLogAggregateResponse';
  avg?: Maybe<ServiceLogAvgAggregate>;
  count?: Maybe<ServiceLogCountAggregate>;
  groupBy?: Maybe<ServiceLogAggregateGroupBy>;
  max?: Maybe<ServiceLogMaxAggregate>;
  min?: Maybe<ServiceLogMinAggregate>;
  sum?: Maybe<ServiceLogSumAggregate>;
};

export type ServiceLogAvgAggregate = {
  __typename?: 'ServiceLogAvgAggregate';
  type?: Maybe<Scalars['Float']['output']>;
};

export type ServiceLogBill = {
  __typename?: 'ServiceLogBill';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  log: ServiceLog;
  media?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogBillAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  log?: InputMaybe<ServiceLogBillAggregateFilterServiceLogAggregateFilter>;
  or?: InputMaybe<Array<ServiceLogBillAggregateFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillAggregateFilterServiceLogAggregateFilter = {
  and?: InputMaybe<Array<ServiceLogBillAggregateFilterServiceLogAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogBillAggregateFilterServiceLogAggregateFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillAggregateGroupBy = {
  __typename?: 'ServiceLogBillAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceLogBillAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ServiceLogBillAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ServiceLogBillAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ServiceLogBillAggregateResponse = {
  __typename?: 'ServiceLogBillAggregateResponse';
  avg?: Maybe<ServiceLogBillAvgAggregate>;
  count?: Maybe<ServiceLogBillCountAggregate>;
  groupBy?: Maybe<ServiceLogBillAggregateGroupBy>;
  max?: Maybe<ServiceLogBillMaxAggregate>;
  min?: Maybe<ServiceLogBillMinAggregate>;
  sum?: Maybe<ServiceLogBillSumAggregate>;
};

export type ServiceLogBillAvgAggregate = {
  __typename?: 'ServiceLogBillAvgAggregate';
  total?: Maybe<Scalars['Float']['output']>;
};

export type ServiceLogBillConnection = {
  __typename?: 'ServiceLogBillConnection';
  /** Array of edges. */
  edges: Array<ServiceLogBillEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ServiceLogBillCountAggregate = {
  __typename?: 'ServiceLogBillCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ServiceLogBillDto = {
  log?: InputMaybe<Scalars['ID']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceLogBillDeleteFilter = {
  and?: InputMaybe<Array<ServiceLogBillDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogBillDeleteFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillDeleteResponse = {
  __typename?: 'ServiceLogBillDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillEdge = {
  __typename?: 'ServiceLogBillEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ServiceLogBill */
  node: ServiceLogBill;
};

export type ServiceLogBillFilter = {
  and?: InputMaybe<Array<ServiceLogBillFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  log?: InputMaybe<ServiceLogBillFilterServiceLogFilter>;
  or?: InputMaybe<Array<ServiceLogBillFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillFilterServiceLogFilter = {
  and?: InputMaybe<Array<ServiceLogBillFilterServiceLogFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogBillFilterServiceLogFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillMaxAggregate = {
  __typename?: 'ServiceLogBillMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillMinAggregate = {
  __typename?: 'ServiceLogBillMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillSort = {
  direction: SortDirection;
  field: ServiceLogBillSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceLogBillSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Total = 'total',
  UpdatedAt = 'updatedAt'
}

export type ServiceLogBillSumAggregate = {
  __typename?: 'ServiceLogBillSumAggregate';
  total?: Maybe<Scalars['Float']['output']>;
};

export type ServiceLogBillUpdateFilter = {
  and?: InputMaybe<Array<ServiceLogBillUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogBillUpdateFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogBillsAggregateGroupBy = {
  __typename?: 'ServiceLogBillsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillsAggregateResponse = {
  __typename?: 'ServiceLogBillsAggregateResponse';
  avg?: Maybe<ServiceLogBillsAvgAggregate>;
  count?: Maybe<ServiceLogBillsCountAggregate>;
  groupBy?: Maybe<ServiceLogBillsAggregateGroupBy>;
  max?: Maybe<ServiceLogBillsMaxAggregate>;
  min?: Maybe<ServiceLogBillsMinAggregate>;
  sum?: Maybe<ServiceLogBillsSumAggregate>;
};

export type ServiceLogBillsAvgAggregate = {
  __typename?: 'ServiceLogBillsAvgAggregate';
  total?: Maybe<Scalars['Float']['output']>;
};

export type ServiceLogBillsConnection = {
  __typename?: 'ServiceLogBillsConnection';
  /** Array of nodes. */
  nodes: Array<ServiceLogBill>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ServiceLogBillsCountAggregate = {
  __typename?: 'ServiceLogBillsCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ServiceLogBillsMaxAggregate = {
  __typename?: 'ServiceLogBillsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillsMinAggregate = {
  __typename?: 'ServiceLogBillsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogBillsSumAggregate = {
  __typename?: 'ServiceLogBillsSumAggregate';
  total?: Maybe<Scalars['Float']['output']>;
};

export type ServiceLogConnection = {
  __typename?: 'ServiceLogConnection';
  /** Array of edges. */
  edges: Array<ServiceLogEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ServiceLogCountAggregate = {
  __typename?: 'ServiceLogCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ServiceLogDto = {
  bills?: InputMaybe<Array<ServiceLogBillDto>>;
  customGarage?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  garage?: InputMaybe<GarageDto>;
  garageId?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  media?: InputMaybe<Array<Scalars['String']['input']>>;
  mileage?: InputMaybe<Scalars['Float']['input']>;
  type: ServiceLogType;
  vehicle: Scalars['ID']['input'];
};

export type ServiceLogDeleteFilter = {
  and?: InputMaybe<Array<ServiceLogDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogDeleteFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogDeleteResponse = {
  __typename?: 'ServiceLogDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customGarage?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  links?: Maybe<Array<Scalars['String']['output']>>;
  media?: Maybe<Array<Scalars['String']['output']>>;
  mileage?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<ServiceLogType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogEdge = {
  __typename?: 'ServiceLogEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ServiceLog */
  node: ServiceLog;
};

export type ServiceLogFilter = {
  and?: InputMaybe<Array<ServiceLogFilter>>;
  bills?: InputMaybe<ServiceLogFilterServiceLogBillFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  garage?: InputMaybe<ServiceLogFilterGarageFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicle?: InputMaybe<ServiceLogFilterUserVehicleFilter>;
};

export type ServiceLogFilterGarageFilter = {
  and?: InputMaybe<Array<ServiceLogFilterGarageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  gplace_id?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lat?: InputMaybe<NumberFieldComparison>;
  lng?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceLogFilterGarageFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GarageStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogFilterServiceLogBillFilter = {
  and?: InputMaybe<Array<ServiceLogFilterServiceLogBillFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogFilterServiceLogBillFilter>>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogFilterUserVehicleFilter = {
  and?: InputMaybe<Array<ServiceLogFilterUserVehicleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceLogFilterUserVehicleFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceLogMaxAggregate = {
  __typename?: 'ServiceLogMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<ServiceLogType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogMinAggregate = {
  __typename?: 'ServiceLogMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<ServiceLogType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceLogSort = {
  direction: SortDirection;
  field: ServiceLogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceLogSortFields {
  CreatedAt = 'createdAt',
  Date = 'date',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ServiceLogSumAggregate = {
  __typename?: 'ServiceLogSumAggregate';
  type?: Maybe<Scalars['Float']['output']>;
};

export enum ServiceLogType {
  Detailing = 'DETAILING',
  Maintenance = 'MAINTENANCE',
  Other = 'OTHER',
  Retrofit = 'RETROFIT',
  Tuning = 'TUNING',
  Upgrading = 'UPGRADING'
}

export type ServiceLogTypeFilterComparison = {
  eq?: InputMaybe<ServiceLogType>;
  gt?: InputMaybe<ServiceLogType>;
  gte?: InputMaybe<ServiceLogType>;
  iLike?: InputMaybe<ServiceLogType>;
  in?: InputMaybe<Array<ServiceLogType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ServiceLogType>;
  lt?: InputMaybe<ServiceLogType>;
  lte?: InputMaybe<ServiceLogType>;
  neq?: InputMaybe<ServiceLogType>;
  notILike?: InputMaybe<ServiceLogType>;
  notIn?: InputMaybe<Array<ServiceLogType>>;
  notLike?: InputMaybe<ServiceLogType>;
};

export type ServiceLogUpdateFilter = {
  and?: InputMaybe<Array<ServiceLogUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceLogUpdateFilter>>;
  type?: InputMaybe<ServiceLogTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SetAddressesOnCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetBillsOnServiceLogInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetBodyOnVehicleModelInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetBranchesOnOrgInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetGarageOnServiceLogInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
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

export type SetMembersOnShopInput = {
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

export type SetShopsOnOrgInput = {
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

export type SetUserOnAccountInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetVehiclesOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type Shop = {
  __typename?: 'Shop';
  branch: OrgBranch;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  members: ShopMembersConnection;
  membersAggregate: Array<ShopMembersAggregateResponse>;
  name: Scalars['String']['output'];
  org: Org;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ShopMembersArgs = {
  filter?: ShopMemberFilter;
  paging?: OffsetPaging;
  sorting?: Array<ShopMemberSort>;
};


export type ShopMembersAggregateArgs = {
  filter?: InputMaybe<ShopMemberAggregateFilter>;
};

export type ShopAggregateFilter = {
  and?: InputMaybe<Array<ShopAggregateFilter>>;
  branch?: InputMaybe<ShopAggregateFilterOrgBranchAggregateFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<ShopAggregateFilterShopMemberAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopAggregateFilter>>;
  org?: InputMaybe<ShopAggregateFilterOrgAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopAggregateFilterOrgAggregateFilter = {
  and?: InputMaybe<Array<ShopAggregateFilterOrgAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopAggregateFilterOrgAggregateFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopAggregateFilterOrgBranchAggregateFilter = {
  and?: InputMaybe<Array<ShopAggregateFilterOrgBranchAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopAggregateFilterOrgBranchAggregateFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopAggregateFilterShopMemberAggregateFilter = {
  and?: InputMaybe<Array<ShopAggregateFilterShopMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopAggregateFilterShopMemberAggregateFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopAggregateGroupBy = {
  __typename?: 'ShopAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ShopAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ShopAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ShopAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ShopAggregateResponse = {
  __typename?: 'ShopAggregateResponse';
  count?: Maybe<ShopCountAggregate>;
  groupBy?: Maybe<ShopAggregateGroupBy>;
  max?: Maybe<ShopMaxAggregate>;
  min?: Maybe<ShopMinAggregate>;
};

export type ShopConnection = {
  __typename?: 'ShopConnection';
  /** Array of edges. */
  edges: Array<ShopEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ShopCountAggregate = {
  __typename?: 'ShopCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ShopDto = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Array<ShopMemberDto>>;
  name: Scalars['String']['input'];
  org?: InputMaybe<Scalars['ID']['input']>;
};

export type ShopDeleteFilter = {
  and?: InputMaybe<Array<ShopDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopDeleteResponse = {
  __typename?: 'ShopDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopEdge = {
  __typename?: 'ShopEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Shop */
  node: Shop;
};

export type ShopFilter = {
  and?: InputMaybe<Array<ShopFilter>>;
  branch?: InputMaybe<ShopFilterOrgBranchFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  members?: InputMaybe<ShopFilterShopMemberFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopFilter>>;
  org?: InputMaybe<ShopFilterOrgFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopFilterOrgBranchFilter = {
  and?: InputMaybe<Array<ShopFilterOrgBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopFilterOrgBranchFilter>>;
  phone_number?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrgBranchStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopFilterOrgFilter = {
  and?: InputMaybe<Array<ShopFilterOrgFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopFilterOrgFilter>>;
  status?: InputMaybe<OrgStatusFilterComparison>;
  type?: InputMaybe<OrgTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopFilterShopMemberFilter = {
  and?: InputMaybe<Array<ShopFilterShopMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopFilterShopMemberFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMaxAggregate = {
  __typename?: 'ShopMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMember = {
  __typename?: 'ShopMember';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  role: ShopMemberRole;
  shop: Shop;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMemberAggregateFilter = {
  account?: InputMaybe<ShopMemberAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<ShopMemberAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopMemberAggregateFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  shop?: InputMaybe<ShopMemberAggregateFilterShopAggregateFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<ShopMemberAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopMemberAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberAggregateFilterShopAggregateFilter = {
  and?: InputMaybe<Array<ShopMemberAggregateFilterShopAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopMemberAggregateFilterShopAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberAggregateGroupBy = {
  __typename?: 'ShopMemberAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ShopMemberAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type ShopMemberAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type ShopMemberAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type ShopMemberAggregateResponse = {
  __typename?: 'ShopMemberAggregateResponse';
  avg?: Maybe<ShopMemberAvgAggregate>;
  count?: Maybe<ShopMemberCountAggregate>;
  groupBy?: Maybe<ShopMemberAggregateGroupBy>;
  max?: Maybe<ShopMemberMaxAggregate>;
  min?: Maybe<ShopMemberMinAggregate>;
  sum?: Maybe<ShopMemberSumAggregate>;
};

export type ShopMemberAvgAggregate = {
  __typename?: 'ShopMemberAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type ShopMemberConnection = {
  __typename?: 'ShopMemberConnection';
  /** Array of edges. */
  edges: Array<ShopMemberEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ShopMemberCountAggregate = {
  __typename?: 'ShopMemberCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ShopMemberDto = {
  account: Scalars['ID']['input'];
  role: ShopMemberRole;
  shop?: InputMaybe<Scalars['ID']['input']>;
};

export type ShopMemberDeleteFilter = {
  and?: InputMaybe<Array<ShopMemberDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopMemberDeleteFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberDeleteResponse = {
  __typename?: 'ShopMemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMemberEdge = {
  __typename?: 'ShopMemberEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ShopMember */
  node: ShopMember;
};

export type ShopMemberFilter = {
  account?: InputMaybe<ShopMemberFilterAccountFilter>;
  and?: InputMaybe<Array<ShopMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopMemberFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  shop?: InputMaybe<ShopMemberFilterShopFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberFilterAccountFilter = {
  and?: InputMaybe<Array<ShopMemberFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopMemberFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberFilterShopFilter = {
  and?: InputMaybe<Array<ShopMemberFilterShopFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopMemberFilterShopFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMemberMaxAggregate = {
  __typename?: 'ShopMemberMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMemberMinAggregate = {
  __typename?: 'ShopMemberMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ShopMemberRole {
  Editor = 'EDITOR',
  Manager = 'MANAGER',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type ShopMemberRoleFilterComparison = {
  eq?: InputMaybe<ShopMemberRole>;
  gt?: InputMaybe<ShopMemberRole>;
  gte?: InputMaybe<ShopMemberRole>;
  iLike?: InputMaybe<ShopMemberRole>;
  in?: InputMaybe<Array<ShopMemberRole>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ShopMemberRole>;
  lt?: InputMaybe<ShopMemberRole>;
  lte?: InputMaybe<ShopMemberRole>;
  neq?: InputMaybe<ShopMemberRole>;
  notILike?: InputMaybe<ShopMemberRole>;
  notIn?: InputMaybe<Array<ShopMemberRole>>;
  notLike?: InputMaybe<ShopMemberRole>;
};

export type ShopMemberSort = {
  direction: SortDirection;
  field: ShopMemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopMemberSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type ShopMemberSumAggregate = {
  __typename?: 'ShopMemberSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type ShopMemberUpdateFilter = {
  and?: InputMaybe<Array<ShopMemberUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopMemberUpdateFilter>>;
  role?: InputMaybe<ShopMemberRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopMembersAggregateGroupBy = {
  __typename?: 'ShopMembersAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMembersAggregateResponse = {
  __typename?: 'ShopMembersAggregateResponse';
  avg?: Maybe<ShopMembersAvgAggregate>;
  count?: Maybe<ShopMembersCountAggregate>;
  groupBy?: Maybe<ShopMembersAggregateGroupBy>;
  max?: Maybe<ShopMembersMaxAggregate>;
  min?: Maybe<ShopMembersMinAggregate>;
  sum?: Maybe<ShopMembersSumAggregate>;
};

export type ShopMembersAvgAggregate = {
  __typename?: 'ShopMembersAvgAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type ShopMembersConnection = {
  __typename?: 'ShopMembersConnection';
  /** Array of nodes. */
  nodes: Array<ShopMember>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ShopMembersCountAggregate = {
  __typename?: 'ShopMembersCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ShopMembersMaxAggregate = {
  __typename?: 'ShopMembersMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMembersMinAggregate = {
  __typename?: 'ShopMembersMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<ShopMemberRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopMembersSumAggregate = {
  __typename?: 'ShopMembersSumAggregate';
  role?: Maybe<Scalars['Float']['output']>;
};

export type ShopMinAggregate = {
  __typename?: 'ShopMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopSort = {
  direction: SortDirection;
  field: ShopSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Details = 'details',
  Enabled = 'enabled',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ShopUpdateFilter = {
  and?: InputMaybe<Array<ShopUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  details?: InputMaybe<JsonFilterComparison>;
  enabled?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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

export type UpdateManyGaragesInput = {
  /** Filter used to find fields to update */
  filter: GarageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: GarageDto;
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

export type UpdateManyServiceLogBillsInput = {
  /** Filter used to find fields to update */
  filter: ServiceLogBillUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ServiceLogBillDto;
};

export type UpdateManyServiceLogsInput = {
  /** Filter used to find fields to update */
  filter: ServiceLogUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ServiceLogDto;
};

export type UpdateManyShopMembersInput = {
  /** Filter used to find fields to update */
  filter: ShopMemberUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShopMemberDto;
};

export type UpdateManyShopsInput = {
  /** Filter used to find fields to update */
  filter: ShopUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShopDto;
};

export type UpdateManyUserVehiclesInput = {
  /** Filter used to find fields to update */
  filter: UserVehicleUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserVehicleDto;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserDto;
};

export type UpdateManyVehicleBaseModelsInput = {
  /** Filter used to find fields to update */
  filter: VehicleBaseModelUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: VehicleBaseModelDto;
};

export type UpdateManyVehicleBodiesInput = {
  /** Filter used to find fields to update */
  filter: VehicleBodyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: VehicleBodyDto;
};

export type UpdateManyVehicleBrandsInput = {
  /** Filter used to find fields to update */
  filter: VehicleBrandUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: VehicleBrandDto;
};

export type UpdateManyVehicleModelsInput = {
  /** Filter used to find fields to update */
  filter: VehicleModelUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: VehicleModelDto;
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

export type UpdateOneGarageInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: GarageDto;
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

export type UpdateOneServiceLogBillInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ServiceLogBillDto;
};

export type UpdateOneServiceLogInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ServiceLogDto;
};

export type UpdateOneShopInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ShopDto;
};

export type UpdateOneShopMemberInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ShopMemberDto;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UserDto;
};

export type UpdateOneUserVehicleInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UserVehicleDto;
};

export type UpdateOneVehicleBaseModelInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: VehicleBaseModelDto;
};

export type UpdateOneVehicleBodyInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: VehicleBodyDto;
};

export type UpdateOneVehicleBrandInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: VehicleBrandDto;
};

export type UpdateOneVehicleModelInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: VehicleModelDto;
};

export type User = {
  __typename?: 'User';
  account: Account;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  status: UserStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicles?: Maybe<UserVehiclesConnection>;
  vehiclesAggregate: Array<UserVehiclesAggregateResponse>;
};


export type UserVehiclesArgs = {
  filter?: UserVehicleFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserVehicleSort>;
};


export type UserVehiclesAggregateArgs = {
  filter?: InputMaybe<UserVehicleAggregateFilter>;
};

export type UserAggregateFilter = {
  account?: InputMaybe<UserAggregateFilterAccountAggregateFilter>;
  and?: InputMaybe<Array<UserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<UserAggregateFilterUserVehicleAggregateFilter>;
};

export type UserAggregateFilterAccountAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilterAccountAggregateFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserAggregateFilterAccountAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserAggregateFilterUserVehicleAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilterUserVehicleAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserAggregateFilterUserVehicleAggregateFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type UserAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type UserAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type UserAggregateResponse = {
  __typename?: 'UserAggregateResponse';
  count?: Maybe<UserCountAggregate>;
  groupBy?: Maybe<UserAggregateGroupBy>;
  max?: Maybe<UserMaxAggregate>;
  min?: Maybe<UserMinAggregate>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UserDto = {
  account: Scalars['ID']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  status: UserStatus;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  account?: InputMaybe<UserFilterAccountFilter>;
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  vehicles?: InputMaybe<UserFilterUserVehicleFilter>;
};

export type UserFilterAccountFilter = {
  and?: InputMaybe<Array<UserFilterAccountFilter>>;
  appleUserId?: InputMaybe<StringFieldComparison>;
  authMethods?: InputMaybe<AccountAuthMethodFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerified?: InputMaybe<BooleanFieldComparison>;
  facebookUserId?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  googleUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActivated?: InputMaybe<BooleanFieldComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterAccountFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneVerified?: InputMaybe<BooleanFieldComparison>;
  role?: InputMaybe<AccountRoleFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserFilterUserVehicleFilter = {
  and?: InputMaybe<Array<UserFilterUserVehicleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterUserVehicleFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum UserStatus {
  Activated = 'ACTIVATED',
  Blocked = 'BLOCKED',
  Unactivated = 'UNACTIVATED'
}

export type UserStatusFilterComparison = {
  eq?: InputMaybe<UserStatus>;
  gt?: InputMaybe<UserStatus>;
  gte?: InputMaybe<UserStatus>;
  iLike?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserStatus>;
  lt?: InputMaybe<UserStatus>;
  lte?: InputMaybe<UserStatus>;
  neq?: InputMaybe<UserStatus>;
  notILike?: InputMaybe<UserStatus>;
  notIn?: InputMaybe<Array<UserStatus>>;
  notLike?: InputMaybe<UserStatus>;
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export enum UserVechileStatus {
  Activated = 'ACTIVATED',
  Blocked = 'BLOCKED',
  Unactivated = 'UNACTIVATED'
}

export type UserVechileStatusFilterComparison = {
  eq?: InputMaybe<UserVechileStatus>;
  gt?: InputMaybe<UserVechileStatus>;
  gte?: InputMaybe<UserVechileStatus>;
  iLike?: InputMaybe<UserVechileStatus>;
  in?: InputMaybe<Array<UserVechileStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserVechileStatus>;
  lt?: InputMaybe<UserVechileStatus>;
  lte?: InputMaybe<UserVechileStatus>;
  neq?: InputMaybe<UserVechileStatus>;
  notILike?: InputMaybe<UserVechileStatus>;
  notIn?: InputMaybe<Array<UserVechileStatus>>;
  notLike?: InputMaybe<UserVechileStatus>;
};

export type UserVehicle = {
  __typename?: 'UserVehicle';
  createdAt: Scalars['DateTime']['output'];
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  model: VehicleModel;
  name?: Maybe<Scalars['String']['output']>;
  owner: User;
  picture?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehicleAggregateFilter = {
  and?: InputMaybe<Array<UserVehicleAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  model?: InputMaybe<UserVehicleAggregateFilterVehicleModelAggregateFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleAggregateFilter>>;
  owner?: InputMaybe<UserVehicleAggregateFilterUserAggregateFilter>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleAggregateFilterUserAggregateFilter = {
  and?: InputMaybe<Array<UserVehicleAggregateFilterUserAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserVehicleAggregateFilterUserAggregateFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleAggregateFilterVehicleModelAggregateFilter = {
  and?: InputMaybe<Array<UserVehicleAggregateFilterVehicleModelAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleAggregateFilterVehicleModelAggregateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleAggregateGroupBy = {
  __typename?: 'UserVehicleAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserVehicleAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};


export type UserVehicleAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};


export type UserVehicleAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type UserVehicleAggregateResponse = {
  __typename?: 'UserVehicleAggregateResponse';
  count?: Maybe<UserVehicleCountAggregate>;
  groupBy?: Maybe<UserVehicleAggregateGroupBy>;
  max?: Maybe<UserVehicleMaxAggregate>;
  min?: Maybe<UserVehicleMinAggregate>;
};

export type UserVehicleConnection = {
  __typename?: 'UserVehicleConnection';
  /** Array of edges. */
  edges: Array<UserVehicleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserVehicleCountAggregate = {
  __typename?: 'UserVehicleCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  customModel?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UserVehicleDto = {
  customModel?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  model?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['ID']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserVechileStatus>;
};

export type UserVehicleDeleteFilter = {
  and?: InputMaybe<Array<UserVehicleDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleDeleteFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleDeleteResponse = {
  __typename?: 'UserVehicleDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehicleEdge = {
  __typename?: 'UserVehicleEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the UserVehicle */
  node: UserVehicle;
};

export type UserVehicleFilter = {
  and?: InputMaybe<Array<UserVehicleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  model?: InputMaybe<UserVehicleFilterVehicleModelFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleFilter>>;
  owner?: InputMaybe<UserVehicleFilterUserFilter>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleFilterUserFilter = {
  and?: InputMaybe<Array<UserVehicleFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserVehicleFilterUserFilter>>;
  status?: InputMaybe<UserStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleFilterVehicleModelFilter = {
  and?: InputMaybe<Array<UserVehicleFilterVehicleModelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleFilterVehicleModelFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehicleMaxAggregate = {
  __typename?: 'UserVehicleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehicleMinAggregate = {
  __typename?: 'UserVehicleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehicleSort = {
  direction: SortDirection;
  field: UserVehicleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserVehicleSortFields {
  CreatedAt = 'createdAt',
  CustomModel = 'customModel',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserVehicleUpdateFilter = {
  and?: InputMaybe<Array<UserVehicleUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customModel?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserVehicleUpdateFilter>>;
  status?: InputMaybe<UserVechileStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserVehiclesAggregateGroupBy = {
  __typename?: 'UserVehiclesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehiclesAggregateResponse = {
  __typename?: 'UserVehiclesAggregateResponse';
  count?: Maybe<UserVehiclesCountAggregate>;
  groupBy?: Maybe<UserVehiclesAggregateGroupBy>;
  max?: Maybe<UserVehiclesMaxAggregate>;
  min?: Maybe<UserVehiclesMinAggregate>;
};

export type UserVehiclesConnection = {
  __typename?: 'UserVehiclesConnection';
  /** Array of nodes. */
  nodes: Array<UserVehicle>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserVehiclesCountAggregate = {
  __typename?: 'UserVehiclesCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  customModel?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UserVehiclesMaxAggregate = {
  __typename?: 'UserVehiclesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserVehiclesMinAggregate = {
  __typename?: 'UserVehiclesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customModel?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserVechileStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBaseModel = {
  __typename?: 'VehicleBaseModel';
  brand: VehicleBrand;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<VehicleBaseModel>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBaseModelConnection = {
  __typename?: 'VehicleBaseModelConnection';
  /** Array of edges. */
  edges: Array<VehicleBaseModelEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type VehicleBaseModelDto = {
  brand: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
  refId?: InputMaybe<Scalars['String']['input']>;
};

export type VehicleBaseModelDeleteFilter = {
  and?: InputMaybe<Array<VehicleBaseModelDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBaseModelDeleteFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBaseModelDeleteResponse = {
  __typename?: 'VehicleBaseModelDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBaseModelEdge = {
  __typename?: 'VehicleBaseModelEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the VehicleBaseModel */
  node: VehicleBaseModel;
};

export type VehicleBaseModelFilter = {
  and?: InputMaybe<Array<VehicleBaseModelFilter>>;
  brand?: InputMaybe<VehicleBaseModelFilterVehicleBrandFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBaseModelFilter>>;
  parent?: InputMaybe<VehicleBaseModelFilterVehicleBaseModelFilter>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBaseModelFilterVehicleBaseModelFilter = {
  and?: InputMaybe<Array<VehicleBaseModelFilterVehicleBaseModelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBaseModelFilterVehicleBaseModelFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBaseModelFilterVehicleBrandFilter = {
  and?: InputMaybe<Array<VehicleBaseModelFilterVehicleBrandFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBaseModelFilterVehicleBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBaseModelSort = {
  direction: SortDirection;
  field: VehicleBaseModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum VehicleBaseModelSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  RefId = 'refId',
  UpdatedAt = 'updatedAt'
}

export type VehicleBaseModelUpdateFilter = {
  and?: InputMaybe<Array<VehicleBaseModelUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBaseModelUpdateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBody = {
  __typename?: 'VehicleBody';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBodyConnection = {
  __typename?: 'VehicleBodyConnection';
  /** Array of edges. */
  edges: Array<VehicleBodyEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type VehicleBodyDto = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type VehicleBodyDeleteFilter = {
  and?: InputMaybe<Array<VehicleBodyDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBodyDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBodyDeleteResponse = {
  __typename?: 'VehicleBodyDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBodyEdge = {
  __typename?: 'VehicleBodyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the VehicleBody */
  node: VehicleBody;
};

export type VehicleBodyFilter = {
  and?: InputMaybe<Array<VehicleBodyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBodyFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBodySort = {
  direction: SortDirection;
  field: VehicleBodySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum VehicleBodySortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type VehicleBodyUpdateFilter = {
  and?: InputMaybe<Array<VehicleBodyUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBodyUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBrand = {
  __typename?: 'VehicleBrand';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBrandConnection = {
  __typename?: 'VehicleBrandConnection';
  /** Array of edges. */
  edges: Array<VehicleBrandEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type VehicleBrandDto = {
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type VehicleBrandDeleteFilter = {
  and?: InputMaybe<Array<VehicleBrandDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBrandDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBrandDeleteResponse = {
  __typename?: 'VehicleBrandDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleBrandEdge = {
  __typename?: 'VehicleBrandEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the VehicleBrand */
  node: VehicleBrand;
};

export type VehicleBrandFilter = {
  and?: InputMaybe<Array<VehicleBrandFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleBrandSort = {
  direction: SortDirection;
  field: VehicleBrandSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum VehicleBrandSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type VehicleBrandUpdateFilter = {
  and?: InputMaybe<Array<VehicleBrandUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleBrandUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModel = {
  __typename?: 'VehicleModel';
  baseModel: VehicleBaseModel;
  body: VehicleBody;
  brand: VehicleBrand;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  drive?: Maybe<Scalars['String']['output']>;
  endYear?: Maybe<Scalars['Int']['output']>;
  engineType?: Maybe<Scalars['String']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  maxPower?: Maybe<Scalars['String']['output']>;
  maxTorque?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  refId?: Maybe<Scalars['String']['output']>;
  startYear?: Maybe<Scalars['Int']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleModelConnection = {
  __typename?: 'VehicleModelConnection';
  /** Array of edges. */
  edges: Array<VehicleModelEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type VehicleModelDto = {
  baseModel?: InputMaybe<Scalars['ID']['input']>;
  body?: InputMaybe<Scalars['ID']['input']>;
  brand: Scalars['ID']['input'];
  drive?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  engineType?: InputMaybe<Scalars['String']['input']>;
  fuelType?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  maxPower?: InputMaybe<Scalars['String']['input']>;
  maxTorque?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  refId?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
};

export type VehicleModelDeleteFilter = {
  and?: InputMaybe<Array<VehicleModelDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelDeleteFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModelDeleteResponse = {
  __typename?: 'VehicleModelDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  drive?: Maybe<Scalars['String']['output']>;
  endYear?: Maybe<Scalars['Int']['output']>;
  engineType?: Maybe<Scalars['String']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  maxPower?: Maybe<Scalars['String']['output']>;
  maxTorque?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  startYear?: Maybe<Scalars['Int']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VehicleModelEdge = {
  __typename?: 'VehicleModelEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the VehicleModel */
  node: VehicleModel;
};

export type VehicleModelFilter = {
  and?: InputMaybe<Array<VehicleModelFilter>>;
  baseModel?: InputMaybe<VehicleModelFilterVehicleBaseModelFilter>;
  body?: InputMaybe<VehicleModelFilterVehicleBodyFilter>;
  brand?: InputMaybe<VehicleModelFilterVehicleBrandFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModelFilterVehicleBaseModelFilter = {
  and?: InputMaybe<Array<VehicleModelFilterVehicleBaseModelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelFilterVehicleBaseModelFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModelFilterVehicleBodyFilter = {
  and?: InputMaybe<Array<VehicleModelFilterVehicleBodyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelFilterVehicleBodyFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModelFilterVehicleBrandFilter = {
  and?: InputMaybe<Array<VehicleModelFilterVehicleBrandFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelFilterVehicleBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type VehicleModelSort = {
  direction: SortDirection;
  field: VehicleModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum VehicleModelSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Drive = 'drive',
  EndYear = 'endYear',
  EngineType = 'engineType',
  FuelType = 'fuelType',
  Id = 'id',
  MaxPower = 'maxPower',
  MaxTorque = 'maxTorque',
  Name = 'name',
  RefId = 'refId',
  StartYear = 'startYear',
  Transmission = 'transmission',
  UpdatedAt = 'updatedAt'
}

export type VehicleModelUpdateFilter = {
  and?: InputMaybe<Array<VehicleModelUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  drive?: InputMaybe<StringFieldComparison>;
  endYear?: InputMaybe<IntFieldComparison>;
  engineType?: InputMaybe<StringFieldComparison>;
  fuelType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  maxPower?: InputMaybe<StringFieldComparison>;
  maxTorque?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<VehicleModelUpdateFilter>>;
  refId?: InputMaybe<StringFieldComparison>;
  startYear?: InputMaybe<IntFieldComparison>;
  transmission?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  AccountAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterAccountAggregateFilter: AccountAggregateFilterUserAggregateFilterAccountAggregateFilter;
  AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter;
  AccountAggregateGroupBy: ResolverTypeWrapper<AccountAggregateGroupBy>;
  AccountAggregateResponse: ResolverTypeWrapper<AccountAggregateResponse>;
  AccountAuthMethod: AccountAuthMethod;
  AccountAuthMethodFilterComparison: AccountAuthMethodFilterComparison;
  AccountAvgAggregate: ResolverTypeWrapper<AccountAvgAggregate>;
  AccountConnection: ResolverTypeWrapper<AccountConnection>;
  AccountCountAggregate: ResolverTypeWrapper<AccountCountAggregate>;
  AccountDTO: AccountDto;
  AccountDeleteFilter: AccountDeleteFilter;
  AccountDeleteResponse: ResolverTypeWrapper<AccountDeleteResponse>;
  AccountEdge: ResolverTypeWrapper<AccountEdge>;
  AccountFilter: AccountFilter;
  AccountFilterUserFilter: AccountFilterUserFilter;
  AccountFilterUserFilterAccountFilter: AccountFilterUserFilterAccountFilter;
  AccountFilterUserFilterAccountFilterUserFilter: AccountFilterUserFilterAccountFilterUserFilter;
  AccountFilterUserFilterUserVehicleFilter: AccountFilterUserFilterUserVehicleFilter;
  AccountFilterUserFilterUserVehicleFilterUserFilter: AccountFilterUserFilterUserVehicleFilterUserFilter;
  AccountFilterUserFilterUserVehicleFilterVehicleModelFilter: AccountFilterUserFilterUserVehicleFilterVehicleModelFilter;
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
  AddBillsToServiceLogInput: AddBillsToServiceLogInput;
  AddBranchesToOrgInput: AddBranchesToOrgInput;
  AddMembersToOrgBranchInput: AddMembersToOrgBranchInput;
  AddMembersToOrgInput: AddMembersToOrgInput;
  AddMembersToShopInput: AddMembersToShopInput;
  AddOptionGroupsToProductInput: AddOptionGroupsToProductInput;
  AddOptionsToOrderProductInput: AddOptionsToOrderProductInput;
  AddOptionsToProductOptionGroupInput: AddOptionsToProductOptionGroupInput;
  AddProductsToProductCategoryInput: AddProductsToProductCategoryInput;
  AddProductsToProductOptionGroupInput: AddProductsToProductOptionGroupInput;
  AddProductsToProductTypeInput: AddProductsToProductTypeInput;
  AddProductsToProductUnitInput: AddProductsToProductUnitInput;
  AddShopsToOrgInput: AddShopsToOrgInput;
  AddVehiclesToUserInput: AddVehiclesToUserInput;
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
  AuthConfirmPasswordResetByCodeInput: AuthConfirmPasswordResetByCodeInput;
  AuthConfirmPasswordResetInput: AuthConfirmPasswordResetInput;
  AuthLoginInput: AuthLoginInput;
  AuthLoginSocialInput: AuthLoginSocialInput;
  AuthRefreshTokenInput: AuthRefreshTokenInput;
  AuthRegisterInput: AuthRegisterInput;
  AuthRequestPasswordResetInput: AuthRequestPasswordResetInput;
  AuthResendVerificationInput: AuthResendVerificationInput;
  AuthResendVerificationWithEmailInput: AuthResendVerificationWithEmailInput;
  AuthVerifyAccountByCodeInput: AuthVerifyAccountByCodeInput;
  AuthVerifyAccountInput: AuthVerifyAccountInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFieldComparison: BooleanFieldComparison;
  ConnectionCursor: ResolverTypeWrapper<Scalars['ConnectionCursor']['output']>;
  CreateManyAccountPasswordResetsInput: CreateManyAccountPasswordResetsInput;
  CreateManyAccountVerficationsInput: CreateManyAccountVerficationsInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  CreateManyApiKeysInput: CreateManyApiKeysInput;
  CreateManyCustomersInput: CreateManyCustomersInput;
  CreateManyFilesInput: CreateManyFilesInput;
  CreateManyGaragesInput: CreateManyGaragesInput;
  CreateManyOrderProductsInput: CreateManyOrderProductsInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  CreateManyOrgBranchMembersInput: CreateManyOrgBranchMembersInput;
  CreateManyOrgBranchesInput: CreateManyOrgBranchesInput;
  CreateManyOrgMembersInput: CreateManyOrgMembersInput;
  CreateManyOrgsInput: CreateManyOrgsInput;
  CreateManyProductCategoriesInput: CreateManyProductCategoriesInput;
  CreateManyProductOptionGroupsInput: CreateManyProductOptionGroupsInput;
  CreateManyProductOptionsInput: CreateManyProductOptionsInput;
  CreateManyProductTypesInput: CreateManyProductTypesInput;
  CreateManyProductUnitsInput: CreateManyProductUnitsInput;
  CreateManyProductsInput: CreateManyProductsInput;
  CreateManyServiceLogBillsInput: CreateManyServiceLogBillsInput;
  CreateManyServiceLogsInput: CreateManyServiceLogsInput;
  CreateManyShopMembersInput: CreateManyShopMembersInput;
  CreateManyShopsInput: CreateManyShopsInput;
  CreateManyUserVehiclesInput: CreateManyUserVehiclesInput;
  CreateManyUsersInput: CreateManyUsersInput;
  CreateManyVehicleBaseModelsInput: CreateManyVehicleBaseModelsInput;
  CreateManyVehicleBodiesInput: CreateManyVehicleBodiesInput;
  CreateManyVehicleBrandsInput: CreateManyVehicleBrandsInput;
  CreateManyVehicleModelsInput: CreateManyVehicleModelsInput;
  CreateOneAccountInput: CreateOneAccountInput;
  CreateOneAccountPasswordResetInput: CreateOneAccountPasswordResetInput;
  CreateOneAccountVerficationInput: CreateOneAccountVerficationInput;
  CreateOneApiKeyInput: CreateOneApiKeyInput;
  CreateOneCustomerInput: CreateOneCustomerInput;
  CreateOneFileInput: CreateOneFileInput;
  CreateOneGarageInput: CreateOneGarageInput;
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
  CreateOneProductTypeInput: CreateOneProductTypeInput;
  CreateOneProductUnitInput: CreateOneProductUnitInput;
  CreateOneServiceLogBillInput: CreateOneServiceLogBillInput;
  CreateOneServiceLogInput: CreateOneServiceLogInput;
  CreateOneShopInput: CreateOneShopInput;
  CreateOneShopMemberInput: CreateOneShopMemberInput;
  CreateOneUserInput: CreateOneUserInput;
  CreateOneUserVehicleInput: CreateOneUserVehicleInput;
  CreateOneVehicleBaseModelInput: CreateOneVehicleBaseModelInput;
  CreateOneVehicleBodyInput: CreateOneVehicleBodyInput;
  CreateOneVehicleBrandInput: CreateOneVehicleBrandInput;
  CreateOneVehicleModelInput: CreateOneVehicleModelInput;
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
  DeleteManyCustomersInput: DeleteManyCustomersInput;
  DeleteManyFilesInput: DeleteManyFilesInput;
  DeleteManyGaragesInput: DeleteManyGaragesInput;
  DeleteManyOrderProductsInput: DeleteManyOrderProductsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  DeleteManyOrgBranchMembersInput: DeleteManyOrgBranchMembersInput;
  DeleteManyOrgBranchesInput: DeleteManyOrgBranchesInput;
  DeleteManyOrgMembersInput: DeleteManyOrgMembersInput;
  DeleteManyOrgsInput: DeleteManyOrgsInput;
  DeleteManyProductCategoriesInput: DeleteManyProductCategoriesInput;
  DeleteManyProductOptionGroupsInput: DeleteManyProductOptionGroupsInput;
  DeleteManyProductOptionsInput: DeleteManyProductOptionsInput;
  DeleteManyProductTypesInput: DeleteManyProductTypesInput;
  DeleteManyProductUnitsInput: DeleteManyProductUnitsInput;
  DeleteManyProductsInput: DeleteManyProductsInput;
  DeleteManyResponse: ResolverTypeWrapper<DeleteManyResponse>;
  DeleteManyServiceLogBillsInput: DeleteManyServiceLogBillsInput;
  DeleteManyServiceLogsInput: DeleteManyServiceLogsInput;
  DeleteManyShopMembersInput: DeleteManyShopMembersInput;
  DeleteManyShopsInput: DeleteManyShopsInput;
  DeleteManyUserVehiclesInput: DeleteManyUserVehiclesInput;
  DeleteManyUsersInput: DeleteManyUsersInput;
  DeleteManyVehicleBaseModelsInput: DeleteManyVehicleBaseModelsInput;
  DeleteManyVehicleBodiesInput: DeleteManyVehicleBodiesInput;
  DeleteManyVehicleBrandsInput: DeleteManyVehicleBrandsInput;
  DeleteManyVehicleModelsInput: DeleteManyVehicleModelsInput;
  DeleteOneAccountInput: DeleteOneAccountInput;
  DeleteOneAccountPasswordResetInput: DeleteOneAccountPasswordResetInput;
  DeleteOneAccountVerficationInput: DeleteOneAccountVerficationInput;
  DeleteOneApiKeyInput: DeleteOneApiKeyInput;
  DeleteOneCustomerInput: DeleteOneCustomerInput;
  DeleteOneFileInput: DeleteOneFileInput;
  DeleteOneGarageInput: DeleteOneGarageInput;
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
  DeleteOneProductTypeInput: DeleteOneProductTypeInput;
  DeleteOneProductUnitInput: DeleteOneProductUnitInput;
  DeleteOneServiceLogBillInput: DeleteOneServiceLogBillInput;
  DeleteOneServiceLogInput: DeleteOneServiceLogInput;
  DeleteOneShopInput: DeleteOneShopInput;
  DeleteOneShopMemberInput: DeleteOneShopMemberInput;
  DeleteOneUserInput: DeleteOneUserInput;
  DeleteOneUserVehicleInput: DeleteOneUserVehicleInput;
  DeleteOneVehicleBaseModelInput: DeleteOneVehicleBaseModelInput;
  DeleteOneVehicleBodyInput: DeleteOneVehicleBodyInput;
  DeleteOneVehicleBrandInput: DeleteOneVehicleBrandInput;
  DeleteOneVehicleModelInput: DeleteOneVehicleModelInput;
  ErrorCodes: ErrorCodes;
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
  Garage: ResolverTypeWrapper<Garage>;
  GarageAggregateFilter: GarageAggregateFilter;
  GarageAggregateFilterOrgAggregateFilter: GarageAggregateFilterOrgAggregateFilter;
  GarageAggregateFilterOrgBranchAggregateFilter: GarageAggregateFilterOrgBranchAggregateFilter;
  GarageAggregateGroupBy: ResolverTypeWrapper<GarageAggregateGroupBy>;
  GarageAggregateResponse: ResolverTypeWrapper<GarageAggregateResponse>;
  GarageAvgAggregate: ResolverTypeWrapper<GarageAvgAggregate>;
  GarageConnection: ResolverTypeWrapper<GarageConnection>;
  GarageCountAggregate: ResolverTypeWrapper<GarageCountAggregate>;
  GarageDTO: GarageDto;
  GarageDeleteFilter: GarageDeleteFilter;
  GarageDeleteResponse: ResolverTypeWrapper<GarageDeleteResponse>;
  GarageEdge: ResolverTypeWrapper<GarageEdge>;
  GarageFilter: GarageFilter;
  GarageFilterOrgBranchFilter: GarageFilterOrgBranchFilter;
  GarageFilterOrgFilter: GarageFilterOrgFilter;
  GarageMaxAggregate: ResolverTypeWrapper<GarageMaxAggregate>;
  GarageMinAggregate: ResolverTypeWrapper<GarageMinAggregate>;
  GarageSort: GarageSort;
  GarageSortFields: GarageSortFields;
  GarageStatus: GarageStatus;
  GarageStatusFilterComparison: GarageStatusFilterComparison;
  GarageSumAggregate: ResolverTypeWrapper<GarageSumAggregate>;
  GarageUpdateFilter: GarageUpdateFilter;
  GroupBy: GroupBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilterComparison: IdFilterComparison;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldComparison: IntFieldComparison;
  IntFieldComparisonBetween: IntFieldComparisonBetween;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONFilterComparison: JsonFilterComparison;
  LoginResult: ResolverTypeWrapper<LoginResult>;
  Mutation: ResolverTypeWrapper<{}>;
  NumberFieldComparison: NumberFieldComparison;
  NumberFieldComparisonBetween: NumberFieldComparisonBetween;
  OffsetPageInfo: ResolverTypeWrapper<OffsetPageInfo>;
  OffsetPaging: OffsetPaging;
  Order: ResolverTypeWrapper<Order>;
  OrderAggregateFilter: OrderAggregateFilter;
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
  OrderFilterCustomerFilter: OrderFilterCustomerFilter;
  OrderFilterOrgBranchFilter: OrderFilterOrgBranchFilter;
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
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilter;
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter;
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
  OrgBranchStatus: OrgBranchStatus;
  OrgBranchStatusFilterComparison: OrgBranchStatusFilterComparison;
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
  OrgFilterAccountFilterUserFilter: OrgFilterAccountFilterUserFilter;
  OrgFilterAccountFilterUserFilterAccountFilter: OrgFilterAccountFilterUserFilterAccountFilter;
  OrgFilterAccountFilterUserFilterUserVehicleFilter: OrgFilterAccountFilterUserFilterUserVehicleFilter;
  OrgFilterOrgBranchFilter: OrgFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgFilter: OrgFilterOrgBranchFilterOrgFilter;
  OrgFilterOrgBranchFilterOrgFilterAccountFilter: OrgFilterOrgBranchFilterOrgFilterAccountFilter;
  OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter: OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter: OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter;
  OrgFilterOrgBranchFilterOrgFilterShopFilter: OrgFilterOrgBranchFilterOrgFilterShopFilter;
  OrgFilterOrgMemberFilter: OrgFilterOrgMemberFilter;
  OrgFilterOrgMemberFilterAccountFilter: OrgFilterOrgMemberFilterAccountFilter;
  OrgFilterOrgMemberFilterAccountFilterUserFilter: OrgFilterOrgMemberFilterAccountFilterUserFilter;
  OrgFilterOrgMemberFilterOrgFilter: OrgFilterOrgMemberFilterOrgFilter;
  OrgFilterOrgMemberFilterOrgFilterAccountFilter: OrgFilterOrgMemberFilterOrgFilterAccountFilter;
  OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter: OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter;
  OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter: OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter;
  OrgFilterOrgMemberFilterOrgFilterShopFilter: OrgFilterOrgMemberFilterOrgFilterShopFilter;
  OrgFilterShopFilter: OrgFilterShopFilter;
  OrgFilterShopFilterOrgBranchFilter: OrgFilterShopFilterOrgBranchFilter;
  OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter: OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter;
  OrgFilterShopFilterOrgBranchFilterOrgFilter: OrgFilterShopFilterOrgBranchFilterOrgFilter;
  OrgFilterShopFilterOrgFilter: OrgFilterShopFilterOrgFilter;
  OrgFilterShopFilterOrgFilterAccountFilter: OrgFilterShopFilterOrgFilterAccountFilter;
  OrgFilterShopFilterOrgFilterOrgBranchFilter: OrgFilterShopFilterOrgFilterOrgBranchFilter;
  OrgFilterShopFilterOrgFilterOrgMemberFilter: OrgFilterShopFilterOrgFilterOrgMemberFilter;
  OrgFilterShopFilterOrgFilterShopFilter: OrgFilterShopFilterOrgFilterShopFilter;
  OrgFilterShopFilterShopMemberFilter: OrgFilterShopFilterShopMemberFilter;
  OrgFilterShopFilterShopMemberFilterAccountFilter: OrgFilterShopFilterShopMemberFilterAccountFilter;
  OrgFilterShopFilterShopMemberFilterShopFilter: OrgFilterShopFilterShopMemberFilterShopFilter;
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
  OrgShopsAggregateGroupBy: ResolverTypeWrapper<OrgShopsAggregateGroupBy>;
  OrgShopsAggregateResponse: ResolverTypeWrapper<OrgShopsAggregateResponse>;
  OrgShopsConnection: ResolverTypeWrapper<OrgShopsConnection>;
  OrgShopsCountAggregate: ResolverTypeWrapper<OrgShopsCountAggregate>;
  OrgShopsMaxAggregate: ResolverTypeWrapper<OrgShopsMaxAggregate>;
  OrgShopsMinAggregate: ResolverTypeWrapper<OrgShopsMinAggregate>;
  OrgSort: OrgSort;
  OrgSortFields: OrgSortFields;
  OrgStatus: OrgStatus;
  OrgStatusFilterComparison: OrgStatusFilterComparison;
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
  ServiceLog: ResolverTypeWrapper<ServiceLog>;
  ServiceLogAggregateFilter: ServiceLogAggregateFilter;
  ServiceLogAggregateFilterGarageAggregateFilter: ServiceLogAggregateFilterGarageAggregateFilter;
  ServiceLogAggregateFilterServiceLogBillAggregateFilter: ServiceLogAggregateFilterServiceLogBillAggregateFilter;
  ServiceLogAggregateFilterUserVehicleAggregateFilter: ServiceLogAggregateFilterUserVehicleAggregateFilter;
  ServiceLogAggregateGroupBy: ResolverTypeWrapper<ServiceLogAggregateGroupBy>;
  ServiceLogAggregateResponse: ResolverTypeWrapper<ServiceLogAggregateResponse>;
  ServiceLogAvgAggregate: ResolverTypeWrapper<ServiceLogAvgAggregate>;
  ServiceLogBill: ResolverTypeWrapper<ServiceLogBill>;
  ServiceLogBillAggregateFilter: ServiceLogBillAggregateFilter;
  ServiceLogBillAggregateFilterServiceLogAggregateFilter: ServiceLogBillAggregateFilterServiceLogAggregateFilter;
  ServiceLogBillAggregateGroupBy: ResolverTypeWrapper<ServiceLogBillAggregateGroupBy>;
  ServiceLogBillAggregateResponse: ResolverTypeWrapper<ServiceLogBillAggregateResponse>;
  ServiceLogBillAvgAggregate: ResolverTypeWrapper<ServiceLogBillAvgAggregate>;
  ServiceLogBillConnection: ResolverTypeWrapper<ServiceLogBillConnection>;
  ServiceLogBillCountAggregate: ResolverTypeWrapper<ServiceLogBillCountAggregate>;
  ServiceLogBillDTO: ServiceLogBillDto;
  ServiceLogBillDeleteFilter: ServiceLogBillDeleteFilter;
  ServiceLogBillDeleteResponse: ResolverTypeWrapper<ServiceLogBillDeleteResponse>;
  ServiceLogBillEdge: ResolverTypeWrapper<ServiceLogBillEdge>;
  ServiceLogBillFilter: ServiceLogBillFilter;
  ServiceLogBillFilterServiceLogFilter: ServiceLogBillFilterServiceLogFilter;
  ServiceLogBillMaxAggregate: ResolverTypeWrapper<ServiceLogBillMaxAggregate>;
  ServiceLogBillMinAggregate: ResolverTypeWrapper<ServiceLogBillMinAggregate>;
  ServiceLogBillSort: ServiceLogBillSort;
  ServiceLogBillSortFields: ServiceLogBillSortFields;
  ServiceLogBillSumAggregate: ResolverTypeWrapper<ServiceLogBillSumAggregate>;
  ServiceLogBillUpdateFilter: ServiceLogBillUpdateFilter;
  ServiceLogBillsAggregateGroupBy: ResolverTypeWrapper<ServiceLogBillsAggregateGroupBy>;
  ServiceLogBillsAggregateResponse: ResolverTypeWrapper<ServiceLogBillsAggregateResponse>;
  ServiceLogBillsAvgAggregate: ResolverTypeWrapper<ServiceLogBillsAvgAggregate>;
  ServiceLogBillsConnection: ResolverTypeWrapper<ServiceLogBillsConnection>;
  ServiceLogBillsCountAggregate: ResolverTypeWrapper<ServiceLogBillsCountAggregate>;
  ServiceLogBillsMaxAggregate: ResolverTypeWrapper<ServiceLogBillsMaxAggregate>;
  ServiceLogBillsMinAggregate: ResolverTypeWrapper<ServiceLogBillsMinAggregate>;
  ServiceLogBillsSumAggregate: ResolverTypeWrapper<ServiceLogBillsSumAggregate>;
  ServiceLogConnection: ResolverTypeWrapper<ServiceLogConnection>;
  ServiceLogCountAggregate: ResolverTypeWrapper<ServiceLogCountAggregate>;
  ServiceLogDTO: ServiceLogDto;
  ServiceLogDeleteFilter: ServiceLogDeleteFilter;
  ServiceLogDeleteResponse: ResolverTypeWrapper<ServiceLogDeleteResponse>;
  ServiceLogEdge: ResolverTypeWrapper<ServiceLogEdge>;
  ServiceLogFilter: ServiceLogFilter;
  ServiceLogFilterGarageFilter: ServiceLogFilterGarageFilter;
  ServiceLogFilterServiceLogBillFilter: ServiceLogFilterServiceLogBillFilter;
  ServiceLogFilterUserVehicleFilter: ServiceLogFilterUserVehicleFilter;
  ServiceLogMaxAggregate: ResolverTypeWrapper<ServiceLogMaxAggregate>;
  ServiceLogMinAggregate: ResolverTypeWrapper<ServiceLogMinAggregate>;
  ServiceLogSort: ServiceLogSort;
  ServiceLogSortFields: ServiceLogSortFields;
  ServiceLogSumAggregate: ResolverTypeWrapper<ServiceLogSumAggregate>;
  ServiceLogType: ServiceLogType;
  ServiceLogTypeFilterComparison: ServiceLogTypeFilterComparison;
  ServiceLogUpdateFilter: ServiceLogUpdateFilter;
  SetAddressesOnCustomerInput: SetAddressesOnCustomerInput;
  SetBillsOnServiceLogInput: SetBillsOnServiceLogInput;
  SetBodyOnVehicleModelInput: SetBodyOnVehicleModelInput;
  SetBranchesOnOrgInput: SetBranchesOnOrgInput;
  SetGarageOnServiceLogInput: SetGarageOnServiceLogInput;
  SetMembersOnOrgBranchInput: SetMembersOnOrgBranchInput;
  SetMembersOnOrgInput: SetMembersOnOrgInput;
  SetMembersOnShopInput: SetMembersOnShopInput;
  SetOptionGroupsOnProductInput: SetOptionGroupsOnProductInput;
  SetOptionsOnOrderProductInput: SetOptionsOnOrderProductInput;
  SetOptionsOnProductOptionGroupInput: SetOptionsOnProductOptionGroupInput;
  SetProductOnOrderProductInput: SetProductOnOrderProductInput;
  SetProductsOnProductCategoryInput: SetProductsOnProductCategoryInput;
  SetProductsOnProductOptionGroupInput: SetProductsOnProductOptionGroupInput;
  SetProductsOnProductTypeInput: SetProductsOnProductTypeInput;
  SetProductsOnProductUnitInput: SetProductsOnProductUnitInput;
  SetShopsOnOrgInput: SetShopsOnOrgInput;
  SetUnitOnProductInput: SetUnitOnProductInput;
  SetUserOnAccountInput: SetUserOnAccountInput;
  SetVehiclesOnUserInput: SetVehiclesOnUserInput;
  Shop: ResolverTypeWrapper<Shop>;
  ShopAggregateFilter: ShopAggregateFilter;
  ShopAggregateFilterOrgAggregateFilter: ShopAggregateFilterOrgAggregateFilter;
  ShopAggregateFilterOrgBranchAggregateFilter: ShopAggregateFilterOrgBranchAggregateFilter;
  ShopAggregateFilterShopMemberAggregateFilter: ShopAggregateFilterShopMemberAggregateFilter;
  ShopAggregateGroupBy: ResolverTypeWrapper<ShopAggregateGroupBy>;
  ShopAggregateResponse: ResolverTypeWrapper<ShopAggregateResponse>;
  ShopConnection: ResolverTypeWrapper<ShopConnection>;
  ShopCountAggregate: ResolverTypeWrapper<ShopCountAggregate>;
  ShopDTO: ShopDto;
  ShopDeleteFilter: ShopDeleteFilter;
  ShopDeleteResponse: ResolverTypeWrapper<ShopDeleteResponse>;
  ShopEdge: ResolverTypeWrapper<ShopEdge>;
  ShopFilter: ShopFilter;
  ShopFilterOrgBranchFilter: ShopFilterOrgBranchFilter;
  ShopFilterOrgFilter: ShopFilterOrgFilter;
  ShopFilterShopMemberFilter: ShopFilterShopMemberFilter;
  ShopMaxAggregate: ResolverTypeWrapper<ShopMaxAggregate>;
  ShopMember: ResolverTypeWrapper<ShopMember>;
  ShopMemberAggregateFilter: ShopMemberAggregateFilter;
  ShopMemberAggregateFilterAccountAggregateFilter: ShopMemberAggregateFilterAccountAggregateFilter;
  ShopMemberAggregateFilterShopAggregateFilter: ShopMemberAggregateFilterShopAggregateFilter;
  ShopMemberAggregateGroupBy: ResolverTypeWrapper<ShopMemberAggregateGroupBy>;
  ShopMemberAggregateResponse: ResolverTypeWrapper<ShopMemberAggregateResponse>;
  ShopMemberAvgAggregate: ResolverTypeWrapper<ShopMemberAvgAggregate>;
  ShopMemberConnection: ResolverTypeWrapper<ShopMemberConnection>;
  ShopMemberCountAggregate: ResolverTypeWrapper<ShopMemberCountAggregate>;
  ShopMemberDTO: ShopMemberDto;
  ShopMemberDeleteFilter: ShopMemberDeleteFilter;
  ShopMemberDeleteResponse: ResolverTypeWrapper<ShopMemberDeleteResponse>;
  ShopMemberEdge: ResolverTypeWrapper<ShopMemberEdge>;
  ShopMemberFilter: ShopMemberFilter;
  ShopMemberFilterAccountFilter: ShopMemberFilterAccountFilter;
  ShopMemberFilterShopFilter: ShopMemberFilterShopFilter;
  ShopMemberMaxAggregate: ResolverTypeWrapper<ShopMemberMaxAggregate>;
  ShopMemberMinAggregate: ResolverTypeWrapper<ShopMemberMinAggregate>;
  ShopMemberRole: ShopMemberRole;
  ShopMemberRoleFilterComparison: ShopMemberRoleFilterComparison;
  ShopMemberSort: ShopMemberSort;
  ShopMemberSortFields: ShopMemberSortFields;
  ShopMemberSumAggregate: ResolverTypeWrapper<ShopMemberSumAggregate>;
  ShopMemberUpdateFilter: ShopMemberUpdateFilter;
  ShopMembersAggregateGroupBy: ResolverTypeWrapper<ShopMembersAggregateGroupBy>;
  ShopMembersAggregateResponse: ResolverTypeWrapper<ShopMembersAggregateResponse>;
  ShopMembersAvgAggregate: ResolverTypeWrapper<ShopMembersAvgAggregate>;
  ShopMembersConnection: ResolverTypeWrapper<ShopMembersConnection>;
  ShopMembersCountAggregate: ResolverTypeWrapper<ShopMembersCountAggregate>;
  ShopMembersMaxAggregate: ResolverTypeWrapper<ShopMembersMaxAggregate>;
  ShopMembersMinAggregate: ResolverTypeWrapper<ShopMembersMinAggregate>;
  ShopMembersSumAggregate: ResolverTypeWrapper<ShopMembersSumAggregate>;
  ShopMinAggregate: ResolverTypeWrapper<ShopMinAggregate>;
  ShopSort: ShopSort;
  ShopSortFields: ShopSortFields;
  ShopUpdateFilter: ShopUpdateFilter;
  SortDirection: SortDirection;
  SortNulls: SortNulls;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldComparison: StringFieldComparison;
  UpdateManyAccountPasswordResetsInput: UpdateManyAccountPasswordResetsInput;
  UpdateManyAccountVerficationsInput: UpdateManyAccountVerficationsInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  UpdateManyApiKeysInput: UpdateManyApiKeysInput;
  UpdateManyCustomersInput: UpdateManyCustomersInput;
  UpdateManyFilesInput: UpdateManyFilesInput;
  UpdateManyGaragesInput: UpdateManyGaragesInput;
  UpdateManyOrderProductsInput: UpdateManyOrderProductsInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  UpdateManyOrgBranchMembersInput: UpdateManyOrgBranchMembersInput;
  UpdateManyOrgBranchesInput: UpdateManyOrgBranchesInput;
  UpdateManyOrgMembersInput: UpdateManyOrgMembersInput;
  UpdateManyOrgsInput: UpdateManyOrgsInput;
  UpdateManyProductCategoriesInput: UpdateManyProductCategoriesInput;
  UpdateManyProductOptionGroupsInput: UpdateManyProductOptionGroupsInput;
  UpdateManyProductOptionsInput: UpdateManyProductOptionsInput;
  UpdateManyProductTypesInput: UpdateManyProductTypesInput;
  UpdateManyProductUnitsInput: UpdateManyProductUnitsInput;
  UpdateManyProductsInput: UpdateManyProductsInput;
  UpdateManyResponse: ResolverTypeWrapper<UpdateManyResponse>;
  UpdateManyServiceLogBillsInput: UpdateManyServiceLogBillsInput;
  UpdateManyServiceLogsInput: UpdateManyServiceLogsInput;
  UpdateManyShopMembersInput: UpdateManyShopMembersInput;
  UpdateManyShopsInput: UpdateManyShopsInput;
  UpdateManyUserVehiclesInput: UpdateManyUserVehiclesInput;
  UpdateManyUsersInput: UpdateManyUsersInput;
  UpdateManyVehicleBaseModelsInput: UpdateManyVehicleBaseModelsInput;
  UpdateManyVehicleBodiesInput: UpdateManyVehicleBodiesInput;
  UpdateManyVehicleBrandsInput: UpdateManyVehicleBrandsInput;
  UpdateManyVehicleModelsInput: UpdateManyVehicleModelsInput;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateOneAccountPasswordResetInput: UpdateOneAccountPasswordResetInput;
  UpdateOneAccountVerficationInput: UpdateOneAccountVerficationInput;
  UpdateOneApiKeyInput: UpdateOneApiKeyInput;
  UpdateOneCustomerInput: UpdateOneCustomerInput;
  UpdateOneFileInput: UpdateOneFileInput;
  UpdateOneGarageInput: UpdateOneGarageInput;
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
  UpdateOneProductTypeInput: UpdateOneProductTypeInput;
  UpdateOneProductUnitInput: UpdateOneProductUnitInput;
  UpdateOneServiceLogBillInput: UpdateOneServiceLogBillInput;
  UpdateOneServiceLogInput: UpdateOneServiceLogInput;
  UpdateOneShopInput: UpdateOneShopInput;
  UpdateOneShopMemberInput: UpdateOneShopMemberInput;
  UpdateOneUserInput: UpdateOneUserInput;
  UpdateOneUserVehicleInput: UpdateOneUserVehicleInput;
  UpdateOneVehicleBaseModelInput: UpdateOneVehicleBaseModelInput;
  UpdateOneVehicleBodyInput: UpdateOneVehicleBodyInput;
  UpdateOneVehicleBrandInput: UpdateOneVehicleBrandInput;
  UpdateOneVehicleModelInput: UpdateOneVehicleModelInput;
  User: ResolverTypeWrapper<User>;
  UserAggregateFilter: UserAggregateFilter;
  UserAggregateFilterAccountAggregateFilter: UserAggregateFilterAccountAggregateFilter;
  UserAggregateFilterUserVehicleAggregateFilter: UserAggregateFilterUserVehicleAggregateFilter;
  UserAggregateGroupBy: ResolverTypeWrapper<UserAggregateGroupBy>;
  UserAggregateResponse: ResolverTypeWrapper<UserAggregateResponse>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserDTO: UserDto;
  UserDeleteFilter: UserDeleteFilter;
  UserDeleteResponse: ResolverTypeWrapper<UserDeleteResponse>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserFilter: UserFilter;
  UserFilterAccountFilter: UserFilterAccountFilter;
  UserFilterUserVehicleFilter: UserFilterUserVehicleFilter;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserSort: UserSort;
  UserSortFields: UserSortFields;
  UserStatus: UserStatus;
  UserStatusFilterComparison: UserStatusFilterComparison;
  UserUpdateFilter: UserUpdateFilter;
  UserVechileStatus: UserVechileStatus;
  UserVechileStatusFilterComparison: UserVechileStatusFilterComparison;
  UserVehicle: ResolverTypeWrapper<UserVehicle>;
  UserVehicleAggregateFilter: UserVehicleAggregateFilter;
  UserVehicleAggregateFilterUserAggregateFilter: UserVehicleAggregateFilterUserAggregateFilter;
  UserVehicleAggregateFilterVehicleModelAggregateFilter: UserVehicleAggregateFilterVehicleModelAggregateFilter;
  UserVehicleAggregateGroupBy: ResolverTypeWrapper<UserVehicleAggregateGroupBy>;
  UserVehicleAggregateResponse: ResolverTypeWrapper<UserVehicleAggregateResponse>;
  UserVehicleConnection: ResolverTypeWrapper<UserVehicleConnection>;
  UserVehicleCountAggregate: ResolverTypeWrapper<UserVehicleCountAggregate>;
  UserVehicleDTO: UserVehicleDto;
  UserVehicleDeleteFilter: UserVehicleDeleteFilter;
  UserVehicleDeleteResponse: ResolverTypeWrapper<UserVehicleDeleteResponse>;
  UserVehicleEdge: ResolverTypeWrapper<UserVehicleEdge>;
  UserVehicleFilter: UserVehicleFilter;
  UserVehicleFilterUserFilter: UserVehicleFilterUserFilter;
  UserVehicleFilterVehicleModelFilter: UserVehicleFilterVehicleModelFilter;
  UserVehicleMaxAggregate: ResolverTypeWrapper<UserVehicleMaxAggregate>;
  UserVehicleMinAggregate: ResolverTypeWrapper<UserVehicleMinAggregate>;
  UserVehicleSort: UserVehicleSort;
  UserVehicleSortFields: UserVehicleSortFields;
  UserVehicleUpdateFilter: UserVehicleUpdateFilter;
  UserVehiclesAggregateGroupBy: ResolverTypeWrapper<UserVehiclesAggregateGroupBy>;
  UserVehiclesAggregateResponse: ResolverTypeWrapper<UserVehiclesAggregateResponse>;
  UserVehiclesConnection: ResolverTypeWrapper<UserVehiclesConnection>;
  UserVehiclesCountAggregate: ResolverTypeWrapper<UserVehiclesCountAggregate>;
  UserVehiclesMaxAggregate: ResolverTypeWrapper<UserVehiclesMaxAggregate>;
  UserVehiclesMinAggregate: ResolverTypeWrapper<UserVehiclesMinAggregate>;
  VehicleBaseModel: ResolverTypeWrapper<VehicleBaseModel>;
  VehicleBaseModelConnection: ResolverTypeWrapper<VehicleBaseModelConnection>;
  VehicleBaseModelDTO: VehicleBaseModelDto;
  VehicleBaseModelDeleteFilter: VehicleBaseModelDeleteFilter;
  VehicleBaseModelDeleteResponse: ResolverTypeWrapper<VehicleBaseModelDeleteResponse>;
  VehicleBaseModelEdge: ResolverTypeWrapper<VehicleBaseModelEdge>;
  VehicleBaseModelFilter: VehicleBaseModelFilter;
  VehicleBaseModelFilterVehicleBaseModelFilter: VehicleBaseModelFilterVehicleBaseModelFilter;
  VehicleBaseModelFilterVehicleBrandFilter: VehicleBaseModelFilterVehicleBrandFilter;
  VehicleBaseModelSort: VehicleBaseModelSort;
  VehicleBaseModelSortFields: VehicleBaseModelSortFields;
  VehicleBaseModelUpdateFilter: VehicleBaseModelUpdateFilter;
  VehicleBody: ResolverTypeWrapper<VehicleBody>;
  VehicleBodyConnection: ResolverTypeWrapper<VehicleBodyConnection>;
  VehicleBodyDTO: VehicleBodyDto;
  VehicleBodyDeleteFilter: VehicleBodyDeleteFilter;
  VehicleBodyDeleteResponse: ResolverTypeWrapper<VehicleBodyDeleteResponse>;
  VehicleBodyEdge: ResolverTypeWrapper<VehicleBodyEdge>;
  VehicleBodyFilter: VehicleBodyFilter;
  VehicleBodySort: VehicleBodySort;
  VehicleBodySortFields: VehicleBodySortFields;
  VehicleBodyUpdateFilter: VehicleBodyUpdateFilter;
  VehicleBrand: ResolverTypeWrapper<VehicleBrand>;
  VehicleBrandConnection: ResolverTypeWrapper<VehicleBrandConnection>;
  VehicleBrandDTO: VehicleBrandDto;
  VehicleBrandDeleteFilter: VehicleBrandDeleteFilter;
  VehicleBrandDeleteResponse: ResolverTypeWrapper<VehicleBrandDeleteResponse>;
  VehicleBrandEdge: ResolverTypeWrapper<VehicleBrandEdge>;
  VehicleBrandFilter: VehicleBrandFilter;
  VehicleBrandSort: VehicleBrandSort;
  VehicleBrandSortFields: VehicleBrandSortFields;
  VehicleBrandUpdateFilter: VehicleBrandUpdateFilter;
  VehicleModel: ResolverTypeWrapper<VehicleModel>;
  VehicleModelConnection: ResolverTypeWrapper<VehicleModelConnection>;
  VehicleModelDTO: VehicleModelDto;
  VehicleModelDeleteFilter: VehicleModelDeleteFilter;
  VehicleModelDeleteResponse: ResolverTypeWrapper<VehicleModelDeleteResponse>;
  VehicleModelEdge: ResolverTypeWrapper<VehicleModelEdge>;
  VehicleModelFilter: VehicleModelFilter;
  VehicleModelFilterVehicleBaseModelFilter: VehicleModelFilterVehicleBaseModelFilter;
  VehicleModelFilterVehicleBodyFilter: VehicleModelFilterVehicleBodyFilter;
  VehicleModelFilterVehicleBrandFilter: VehicleModelFilterVehicleBrandFilter;
  VehicleModelSort: VehicleModelSort;
  VehicleModelSortFields: VehicleModelSortFields;
  VehicleModelUpdateFilter: VehicleModelUpdateFilter;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountAggregateFilter: AccountAggregateFilter;
  AccountAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterAccountAggregateFilter: AccountAggregateFilterUserAggregateFilterAccountAggregateFilter;
  AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilterAccountAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterUserAggregateFilter;
  AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter: AccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilterVehicleModelAggregateFilter;
  AccountAggregateGroupBy: AccountAggregateGroupBy;
  AccountAggregateResponse: AccountAggregateResponse;
  AccountAuthMethodFilterComparison: AccountAuthMethodFilterComparison;
  AccountAvgAggregate: AccountAvgAggregate;
  AccountConnection: AccountConnection;
  AccountCountAggregate: AccountCountAggregate;
  AccountDTO: AccountDto;
  AccountDeleteFilter: AccountDeleteFilter;
  AccountDeleteResponse: AccountDeleteResponse;
  AccountEdge: AccountEdge;
  AccountFilter: AccountFilter;
  AccountFilterUserFilter: AccountFilterUserFilter;
  AccountFilterUserFilterAccountFilter: AccountFilterUserFilterAccountFilter;
  AccountFilterUserFilterAccountFilterUserFilter: AccountFilterUserFilterAccountFilterUserFilter;
  AccountFilterUserFilterUserVehicleFilter: AccountFilterUserFilterUserVehicleFilter;
  AccountFilterUserFilterUserVehicleFilterUserFilter: AccountFilterUserFilterUserVehicleFilterUserFilter;
  AccountFilterUserFilterUserVehicleFilterVehicleModelFilter: AccountFilterUserFilterUserVehicleFilterVehicleModelFilter;
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
  AddBillsToServiceLogInput: AddBillsToServiceLogInput;
  AddBranchesToOrgInput: AddBranchesToOrgInput;
  AddMembersToOrgBranchInput: AddMembersToOrgBranchInput;
  AddMembersToOrgInput: AddMembersToOrgInput;
  AddMembersToShopInput: AddMembersToShopInput;
  AddOptionGroupsToProductInput: AddOptionGroupsToProductInput;
  AddOptionsToOrderProductInput: AddOptionsToOrderProductInput;
  AddOptionsToProductOptionGroupInput: AddOptionsToProductOptionGroupInput;
  AddProductsToProductCategoryInput: AddProductsToProductCategoryInput;
  AddProductsToProductOptionGroupInput: AddProductsToProductOptionGroupInput;
  AddProductsToProductTypeInput: AddProductsToProductTypeInput;
  AddProductsToProductUnitInput: AddProductsToProductUnitInput;
  AddShopsToOrgInput: AddShopsToOrgInput;
  AddVehiclesToUserInput: AddVehiclesToUserInput;
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
  AuthConfirmPasswordResetByCodeInput: AuthConfirmPasswordResetByCodeInput;
  AuthConfirmPasswordResetInput: AuthConfirmPasswordResetInput;
  AuthLoginInput: AuthLoginInput;
  AuthLoginSocialInput: AuthLoginSocialInput;
  AuthRefreshTokenInput: AuthRefreshTokenInput;
  AuthRegisterInput: AuthRegisterInput;
  AuthRequestPasswordResetInput: AuthRequestPasswordResetInput;
  AuthResendVerificationInput: AuthResendVerificationInput;
  AuthResendVerificationWithEmailInput: AuthResendVerificationWithEmailInput;
  AuthVerifyAccountByCodeInput: AuthVerifyAccountByCodeInput;
  AuthVerifyAccountInput: AuthVerifyAccountInput;
  Boolean: Scalars['Boolean']['output'];
  BooleanFieldComparison: BooleanFieldComparison;
  ConnectionCursor: Scalars['ConnectionCursor']['output'];
  CreateManyAccountPasswordResetsInput: CreateManyAccountPasswordResetsInput;
  CreateManyAccountVerficationsInput: CreateManyAccountVerficationsInput;
  CreateManyAccountsInput: CreateManyAccountsInput;
  CreateManyApiKeysInput: CreateManyApiKeysInput;
  CreateManyCustomersInput: CreateManyCustomersInput;
  CreateManyFilesInput: CreateManyFilesInput;
  CreateManyGaragesInput: CreateManyGaragesInput;
  CreateManyOrderProductsInput: CreateManyOrderProductsInput;
  CreateManyOrdersInput: CreateManyOrdersInput;
  CreateManyOrgBranchMembersInput: CreateManyOrgBranchMembersInput;
  CreateManyOrgBranchesInput: CreateManyOrgBranchesInput;
  CreateManyOrgMembersInput: CreateManyOrgMembersInput;
  CreateManyOrgsInput: CreateManyOrgsInput;
  CreateManyProductCategoriesInput: CreateManyProductCategoriesInput;
  CreateManyProductOptionGroupsInput: CreateManyProductOptionGroupsInput;
  CreateManyProductOptionsInput: CreateManyProductOptionsInput;
  CreateManyProductTypesInput: CreateManyProductTypesInput;
  CreateManyProductUnitsInput: CreateManyProductUnitsInput;
  CreateManyProductsInput: CreateManyProductsInput;
  CreateManyServiceLogBillsInput: CreateManyServiceLogBillsInput;
  CreateManyServiceLogsInput: CreateManyServiceLogsInput;
  CreateManyShopMembersInput: CreateManyShopMembersInput;
  CreateManyShopsInput: CreateManyShopsInput;
  CreateManyUserVehiclesInput: CreateManyUserVehiclesInput;
  CreateManyUsersInput: CreateManyUsersInput;
  CreateManyVehicleBaseModelsInput: CreateManyVehicleBaseModelsInput;
  CreateManyVehicleBodiesInput: CreateManyVehicleBodiesInput;
  CreateManyVehicleBrandsInput: CreateManyVehicleBrandsInput;
  CreateManyVehicleModelsInput: CreateManyVehicleModelsInput;
  CreateOneAccountInput: CreateOneAccountInput;
  CreateOneAccountPasswordResetInput: CreateOneAccountPasswordResetInput;
  CreateOneAccountVerficationInput: CreateOneAccountVerficationInput;
  CreateOneApiKeyInput: CreateOneApiKeyInput;
  CreateOneCustomerInput: CreateOneCustomerInput;
  CreateOneFileInput: CreateOneFileInput;
  CreateOneGarageInput: CreateOneGarageInput;
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
  CreateOneProductTypeInput: CreateOneProductTypeInput;
  CreateOneProductUnitInput: CreateOneProductUnitInput;
  CreateOneServiceLogBillInput: CreateOneServiceLogBillInput;
  CreateOneServiceLogInput: CreateOneServiceLogInput;
  CreateOneShopInput: CreateOneShopInput;
  CreateOneShopMemberInput: CreateOneShopMemberInput;
  CreateOneUserInput: CreateOneUserInput;
  CreateOneUserVehicleInput: CreateOneUserVehicleInput;
  CreateOneVehicleBaseModelInput: CreateOneVehicleBaseModelInput;
  CreateOneVehicleBodyInput: CreateOneVehicleBodyInput;
  CreateOneVehicleBrandInput: CreateOneVehicleBrandInput;
  CreateOneVehicleModelInput: CreateOneVehicleModelInput;
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
  DeleteManyCustomersInput: DeleteManyCustomersInput;
  DeleteManyFilesInput: DeleteManyFilesInput;
  DeleteManyGaragesInput: DeleteManyGaragesInput;
  DeleteManyOrderProductsInput: DeleteManyOrderProductsInput;
  DeleteManyOrdersInput: DeleteManyOrdersInput;
  DeleteManyOrgBranchMembersInput: DeleteManyOrgBranchMembersInput;
  DeleteManyOrgBranchesInput: DeleteManyOrgBranchesInput;
  DeleteManyOrgMembersInput: DeleteManyOrgMembersInput;
  DeleteManyOrgsInput: DeleteManyOrgsInput;
  DeleteManyProductCategoriesInput: DeleteManyProductCategoriesInput;
  DeleteManyProductOptionGroupsInput: DeleteManyProductOptionGroupsInput;
  DeleteManyProductOptionsInput: DeleteManyProductOptionsInput;
  DeleteManyProductTypesInput: DeleteManyProductTypesInput;
  DeleteManyProductUnitsInput: DeleteManyProductUnitsInput;
  DeleteManyProductsInput: DeleteManyProductsInput;
  DeleteManyResponse: DeleteManyResponse;
  DeleteManyServiceLogBillsInput: DeleteManyServiceLogBillsInput;
  DeleteManyServiceLogsInput: DeleteManyServiceLogsInput;
  DeleteManyShopMembersInput: DeleteManyShopMembersInput;
  DeleteManyShopsInput: DeleteManyShopsInput;
  DeleteManyUserVehiclesInput: DeleteManyUserVehiclesInput;
  DeleteManyUsersInput: DeleteManyUsersInput;
  DeleteManyVehicleBaseModelsInput: DeleteManyVehicleBaseModelsInput;
  DeleteManyVehicleBodiesInput: DeleteManyVehicleBodiesInput;
  DeleteManyVehicleBrandsInput: DeleteManyVehicleBrandsInput;
  DeleteManyVehicleModelsInput: DeleteManyVehicleModelsInput;
  DeleteOneAccountInput: DeleteOneAccountInput;
  DeleteOneAccountPasswordResetInput: DeleteOneAccountPasswordResetInput;
  DeleteOneAccountVerficationInput: DeleteOneAccountVerficationInput;
  DeleteOneApiKeyInput: DeleteOneApiKeyInput;
  DeleteOneCustomerInput: DeleteOneCustomerInput;
  DeleteOneFileInput: DeleteOneFileInput;
  DeleteOneGarageInput: DeleteOneGarageInput;
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
  DeleteOneProductTypeInput: DeleteOneProductTypeInput;
  DeleteOneProductUnitInput: DeleteOneProductUnitInput;
  DeleteOneServiceLogBillInput: DeleteOneServiceLogBillInput;
  DeleteOneServiceLogInput: DeleteOneServiceLogInput;
  DeleteOneShopInput: DeleteOneShopInput;
  DeleteOneShopMemberInput: DeleteOneShopMemberInput;
  DeleteOneUserInput: DeleteOneUserInput;
  DeleteOneUserVehicleInput: DeleteOneUserVehicleInput;
  DeleteOneVehicleBaseModelInput: DeleteOneVehicleBaseModelInput;
  DeleteOneVehicleBodyInput: DeleteOneVehicleBodyInput;
  DeleteOneVehicleBrandInput: DeleteOneVehicleBrandInput;
  DeleteOneVehicleModelInput: DeleteOneVehicleModelInput;
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
  Garage: Garage;
  GarageAggregateFilter: GarageAggregateFilter;
  GarageAggregateFilterOrgAggregateFilter: GarageAggregateFilterOrgAggregateFilter;
  GarageAggregateFilterOrgBranchAggregateFilter: GarageAggregateFilterOrgBranchAggregateFilter;
  GarageAggregateGroupBy: GarageAggregateGroupBy;
  GarageAggregateResponse: GarageAggregateResponse;
  GarageAvgAggregate: GarageAvgAggregate;
  GarageConnection: GarageConnection;
  GarageCountAggregate: GarageCountAggregate;
  GarageDTO: GarageDto;
  GarageDeleteFilter: GarageDeleteFilter;
  GarageDeleteResponse: GarageDeleteResponse;
  GarageEdge: GarageEdge;
  GarageFilter: GarageFilter;
  GarageFilterOrgBranchFilter: GarageFilterOrgBranchFilter;
  GarageFilterOrgFilter: GarageFilterOrgFilter;
  GarageMaxAggregate: GarageMaxAggregate;
  GarageMinAggregate: GarageMinAggregate;
  GarageSort: GarageSort;
  GarageStatusFilterComparison: GarageStatusFilterComparison;
  GarageSumAggregate: GarageSumAggregate;
  GarageUpdateFilter: GarageUpdateFilter;
  ID: Scalars['ID']['output'];
  IDFilterComparison: IdFilterComparison;
  Int: Scalars['Int']['output'];
  IntFieldComparison: IntFieldComparison;
  IntFieldComparisonBetween: IntFieldComparisonBetween;
  JSON: Scalars['JSON']['output'];
  JSONFilterComparison: JsonFilterComparison;
  LoginResult: LoginResult;
  Mutation: {};
  NumberFieldComparison: NumberFieldComparison;
  NumberFieldComparisonBetween: NumberFieldComparisonBetween;
  OffsetPageInfo: OffsetPageInfo;
  OffsetPaging: OffsetPaging;
  Order: Order;
  OrderAggregateFilter: OrderAggregateFilter;
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
  OrderFilterCustomerFilter: OrderFilterCustomerFilter;
  OrderFilterOrgBranchFilter: OrderFilterOrgBranchFilter;
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
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilter;
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter: OrgAggregateFilterAccountAggregateFilterUserAggregateFilterUserVehicleAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterAccountAggregateFilterUserAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterOrgMemberAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterOrgMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgAggregateFilterShopAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgAggregateFilter;
  OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterOrgBranchAggregateFilterOrgBranchMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterAccountAggregateFilter;
  OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter: OrgAggregateFilterShopAggregateFilterShopMemberAggregateFilterShopAggregateFilter;
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
  OrgBranchStatusFilterComparison: OrgBranchStatusFilterComparison;
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
  OrgFilterAccountFilterUserFilter: OrgFilterAccountFilterUserFilter;
  OrgFilterAccountFilterUserFilterAccountFilter: OrgFilterAccountFilterUserFilterAccountFilter;
  OrgFilterAccountFilterUserFilterUserVehicleFilter: OrgFilterAccountFilterUserFilterUserVehicleFilter;
  OrgFilterOrgBranchFilter: OrgFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilterAccountFilter;
  OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter: OrgFilterOrgBranchFilterOrgBranchMemberFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgFilter: OrgFilterOrgBranchFilterOrgFilter;
  OrgFilterOrgBranchFilterOrgFilterAccountFilter: OrgFilterOrgBranchFilterOrgFilterAccountFilter;
  OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter: OrgFilterOrgBranchFilterOrgFilterOrgBranchFilter;
  OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter: OrgFilterOrgBranchFilterOrgFilterOrgMemberFilter;
  OrgFilterOrgBranchFilterOrgFilterShopFilter: OrgFilterOrgBranchFilterOrgFilterShopFilter;
  OrgFilterOrgMemberFilter: OrgFilterOrgMemberFilter;
  OrgFilterOrgMemberFilterAccountFilter: OrgFilterOrgMemberFilterAccountFilter;
  OrgFilterOrgMemberFilterAccountFilterUserFilter: OrgFilterOrgMemberFilterAccountFilterUserFilter;
  OrgFilterOrgMemberFilterOrgFilter: OrgFilterOrgMemberFilterOrgFilter;
  OrgFilterOrgMemberFilterOrgFilterAccountFilter: OrgFilterOrgMemberFilterOrgFilterAccountFilter;
  OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter: OrgFilterOrgMemberFilterOrgFilterOrgBranchFilter;
  OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter: OrgFilterOrgMemberFilterOrgFilterOrgMemberFilter;
  OrgFilterOrgMemberFilterOrgFilterShopFilter: OrgFilterOrgMemberFilterOrgFilterShopFilter;
  OrgFilterShopFilter: OrgFilterShopFilter;
  OrgFilterShopFilterOrgBranchFilter: OrgFilterShopFilterOrgBranchFilter;
  OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter: OrgFilterShopFilterOrgBranchFilterOrgBranchMemberFilter;
  OrgFilterShopFilterOrgBranchFilterOrgFilter: OrgFilterShopFilterOrgBranchFilterOrgFilter;
  OrgFilterShopFilterOrgFilter: OrgFilterShopFilterOrgFilter;
  OrgFilterShopFilterOrgFilterAccountFilter: OrgFilterShopFilterOrgFilterAccountFilter;
  OrgFilterShopFilterOrgFilterOrgBranchFilter: OrgFilterShopFilterOrgFilterOrgBranchFilter;
  OrgFilterShopFilterOrgFilterOrgMemberFilter: OrgFilterShopFilterOrgFilterOrgMemberFilter;
  OrgFilterShopFilterOrgFilterShopFilter: OrgFilterShopFilterOrgFilterShopFilter;
  OrgFilterShopFilterShopMemberFilter: OrgFilterShopFilterShopMemberFilter;
  OrgFilterShopFilterShopMemberFilterAccountFilter: OrgFilterShopFilterShopMemberFilterAccountFilter;
  OrgFilterShopFilterShopMemberFilterShopFilter: OrgFilterShopFilterShopMemberFilterShopFilter;
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
  OrgShopsAggregateGroupBy: OrgShopsAggregateGroupBy;
  OrgShopsAggregateResponse: OrgShopsAggregateResponse;
  OrgShopsConnection: OrgShopsConnection;
  OrgShopsCountAggregate: OrgShopsCountAggregate;
  OrgShopsMaxAggregate: OrgShopsMaxAggregate;
  OrgShopsMinAggregate: OrgShopsMinAggregate;
  OrgSort: OrgSort;
  OrgStatusFilterComparison: OrgStatusFilterComparison;
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
  ServiceLog: ServiceLog;
  ServiceLogAggregateFilter: ServiceLogAggregateFilter;
  ServiceLogAggregateFilterGarageAggregateFilter: ServiceLogAggregateFilterGarageAggregateFilter;
  ServiceLogAggregateFilterServiceLogBillAggregateFilter: ServiceLogAggregateFilterServiceLogBillAggregateFilter;
  ServiceLogAggregateFilterUserVehicleAggregateFilter: ServiceLogAggregateFilterUserVehicleAggregateFilter;
  ServiceLogAggregateGroupBy: ServiceLogAggregateGroupBy;
  ServiceLogAggregateResponse: ServiceLogAggregateResponse;
  ServiceLogAvgAggregate: ServiceLogAvgAggregate;
  ServiceLogBill: ServiceLogBill;
  ServiceLogBillAggregateFilter: ServiceLogBillAggregateFilter;
  ServiceLogBillAggregateFilterServiceLogAggregateFilter: ServiceLogBillAggregateFilterServiceLogAggregateFilter;
  ServiceLogBillAggregateGroupBy: ServiceLogBillAggregateGroupBy;
  ServiceLogBillAggregateResponse: ServiceLogBillAggregateResponse;
  ServiceLogBillAvgAggregate: ServiceLogBillAvgAggregate;
  ServiceLogBillConnection: ServiceLogBillConnection;
  ServiceLogBillCountAggregate: ServiceLogBillCountAggregate;
  ServiceLogBillDTO: ServiceLogBillDto;
  ServiceLogBillDeleteFilter: ServiceLogBillDeleteFilter;
  ServiceLogBillDeleteResponse: ServiceLogBillDeleteResponse;
  ServiceLogBillEdge: ServiceLogBillEdge;
  ServiceLogBillFilter: ServiceLogBillFilter;
  ServiceLogBillFilterServiceLogFilter: ServiceLogBillFilterServiceLogFilter;
  ServiceLogBillMaxAggregate: ServiceLogBillMaxAggregate;
  ServiceLogBillMinAggregate: ServiceLogBillMinAggregate;
  ServiceLogBillSort: ServiceLogBillSort;
  ServiceLogBillSumAggregate: ServiceLogBillSumAggregate;
  ServiceLogBillUpdateFilter: ServiceLogBillUpdateFilter;
  ServiceLogBillsAggregateGroupBy: ServiceLogBillsAggregateGroupBy;
  ServiceLogBillsAggregateResponse: ServiceLogBillsAggregateResponse;
  ServiceLogBillsAvgAggregate: ServiceLogBillsAvgAggregate;
  ServiceLogBillsConnection: ServiceLogBillsConnection;
  ServiceLogBillsCountAggregate: ServiceLogBillsCountAggregate;
  ServiceLogBillsMaxAggregate: ServiceLogBillsMaxAggregate;
  ServiceLogBillsMinAggregate: ServiceLogBillsMinAggregate;
  ServiceLogBillsSumAggregate: ServiceLogBillsSumAggregate;
  ServiceLogConnection: ServiceLogConnection;
  ServiceLogCountAggregate: ServiceLogCountAggregate;
  ServiceLogDTO: ServiceLogDto;
  ServiceLogDeleteFilter: ServiceLogDeleteFilter;
  ServiceLogDeleteResponse: ServiceLogDeleteResponse;
  ServiceLogEdge: ServiceLogEdge;
  ServiceLogFilter: ServiceLogFilter;
  ServiceLogFilterGarageFilter: ServiceLogFilterGarageFilter;
  ServiceLogFilterServiceLogBillFilter: ServiceLogFilterServiceLogBillFilter;
  ServiceLogFilterUserVehicleFilter: ServiceLogFilterUserVehicleFilter;
  ServiceLogMaxAggregate: ServiceLogMaxAggregate;
  ServiceLogMinAggregate: ServiceLogMinAggregate;
  ServiceLogSort: ServiceLogSort;
  ServiceLogSumAggregate: ServiceLogSumAggregate;
  ServiceLogTypeFilterComparison: ServiceLogTypeFilterComparison;
  ServiceLogUpdateFilter: ServiceLogUpdateFilter;
  SetAddressesOnCustomerInput: SetAddressesOnCustomerInput;
  SetBillsOnServiceLogInput: SetBillsOnServiceLogInput;
  SetBodyOnVehicleModelInput: SetBodyOnVehicleModelInput;
  SetBranchesOnOrgInput: SetBranchesOnOrgInput;
  SetGarageOnServiceLogInput: SetGarageOnServiceLogInput;
  SetMembersOnOrgBranchInput: SetMembersOnOrgBranchInput;
  SetMembersOnOrgInput: SetMembersOnOrgInput;
  SetMembersOnShopInput: SetMembersOnShopInput;
  SetOptionGroupsOnProductInput: SetOptionGroupsOnProductInput;
  SetOptionsOnOrderProductInput: SetOptionsOnOrderProductInput;
  SetOptionsOnProductOptionGroupInput: SetOptionsOnProductOptionGroupInput;
  SetProductOnOrderProductInput: SetProductOnOrderProductInput;
  SetProductsOnProductCategoryInput: SetProductsOnProductCategoryInput;
  SetProductsOnProductOptionGroupInput: SetProductsOnProductOptionGroupInput;
  SetProductsOnProductTypeInput: SetProductsOnProductTypeInput;
  SetProductsOnProductUnitInput: SetProductsOnProductUnitInput;
  SetShopsOnOrgInput: SetShopsOnOrgInput;
  SetUnitOnProductInput: SetUnitOnProductInput;
  SetUserOnAccountInput: SetUserOnAccountInput;
  SetVehiclesOnUserInput: SetVehiclesOnUserInput;
  Shop: Shop;
  ShopAggregateFilter: ShopAggregateFilter;
  ShopAggregateFilterOrgAggregateFilter: ShopAggregateFilterOrgAggregateFilter;
  ShopAggregateFilterOrgBranchAggregateFilter: ShopAggregateFilterOrgBranchAggregateFilter;
  ShopAggregateFilterShopMemberAggregateFilter: ShopAggregateFilterShopMemberAggregateFilter;
  ShopAggregateGroupBy: ShopAggregateGroupBy;
  ShopAggregateResponse: ShopAggregateResponse;
  ShopConnection: ShopConnection;
  ShopCountAggregate: ShopCountAggregate;
  ShopDTO: ShopDto;
  ShopDeleteFilter: ShopDeleteFilter;
  ShopDeleteResponse: ShopDeleteResponse;
  ShopEdge: ShopEdge;
  ShopFilter: ShopFilter;
  ShopFilterOrgBranchFilter: ShopFilterOrgBranchFilter;
  ShopFilterOrgFilter: ShopFilterOrgFilter;
  ShopFilterShopMemberFilter: ShopFilterShopMemberFilter;
  ShopMaxAggregate: ShopMaxAggregate;
  ShopMember: ShopMember;
  ShopMemberAggregateFilter: ShopMemberAggregateFilter;
  ShopMemberAggregateFilterAccountAggregateFilter: ShopMemberAggregateFilterAccountAggregateFilter;
  ShopMemberAggregateFilterShopAggregateFilter: ShopMemberAggregateFilterShopAggregateFilter;
  ShopMemberAggregateGroupBy: ShopMemberAggregateGroupBy;
  ShopMemberAggregateResponse: ShopMemberAggregateResponse;
  ShopMemberAvgAggregate: ShopMemberAvgAggregate;
  ShopMemberConnection: ShopMemberConnection;
  ShopMemberCountAggregate: ShopMemberCountAggregate;
  ShopMemberDTO: ShopMemberDto;
  ShopMemberDeleteFilter: ShopMemberDeleteFilter;
  ShopMemberDeleteResponse: ShopMemberDeleteResponse;
  ShopMemberEdge: ShopMemberEdge;
  ShopMemberFilter: ShopMemberFilter;
  ShopMemberFilterAccountFilter: ShopMemberFilterAccountFilter;
  ShopMemberFilterShopFilter: ShopMemberFilterShopFilter;
  ShopMemberMaxAggregate: ShopMemberMaxAggregate;
  ShopMemberMinAggregate: ShopMemberMinAggregate;
  ShopMemberRoleFilterComparison: ShopMemberRoleFilterComparison;
  ShopMemberSort: ShopMemberSort;
  ShopMemberSumAggregate: ShopMemberSumAggregate;
  ShopMemberUpdateFilter: ShopMemberUpdateFilter;
  ShopMembersAggregateGroupBy: ShopMembersAggregateGroupBy;
  ShopMembersAggregateResponse: ShopMembersAggregateResponse;
  ShopMembersAvgAggregate: ShopMembersAvgAggregate;
  ShopMembersConnection: ShopMembersConnection;
  ShopMembersCountAggregate: ShopMembersCountAggregate;
  ShopMembersMaxAggregate: ShopMembersMaxAggregate;
  ShopMembersMinAggregate: ShopMembersMinAggregate;
  ShopMembersSumAggregate: ShopMembersSumAggregate;
  ShopMinAggregate: ShopMinAggregate;
  ShopSort: ShopSort;
  ShopUpdateFilter: ShopUpdateFilter;
  String: Scalars['String']['output'];
  StringFieldComparison: StringFieldComparison;
  UpdateManyAccountPasswordResetsInput: UpdateManyAccountPasswordResetsInput;
  UpdateManyAccountVerficationsInput: UpdateManyAccountVerficationsInput;
  UpdateManyAccountsInput: UpdateManyAccountsInput;
  UpdateManyApiKeysInput: UpdateManyApiKeysInput;
  UpdateManyCustomersInput: UpdateManyCustomersInput;
  UpdateManyFilesInput: UpdateManyFilesInput;
  UpdateManyGaragesInput: UpdateManyGaragesInput;
  UpdateManyOrderProductsInput: UpdateManyOrderProductsInput;
  UpdateManyOrdersInput: UpdateManyOrdersInput;
  UpdateManyOrgBranchMembersInput: UpdateManyOrgBranchMembersInput;
  UpdateManyOrgBranchesInput: UpdateManyOrgBranchesInput;
  UpdateManyOrgMembersInput: UpdateManyOrgMembersInput;
  UpdateManyOrgsInput: UpdateManyOrgsInput;
  UpdateManyProductCategoriesInput: UpdateManyProductCategoriesInput;
  UpdateManyProductOptionGroupsInput: UpdateManyProductOptionGroupsInput;
  UpdateManyProductOptionsInput: UpdateManyProductOptionsInput;
  UpdateManyProductTypesInput: UpdateManyProductTypesInput;
  UpdateManyProductUnitsInput: UpdateManyProductUnitsInput;
  UpdateManyProductsInput: UpdateManyProductsInput;
  UpdateManyResponse: UpdateManyResponse;
  UpdateManyServiceLogBillsInput: UpdateManyServiceLogBillsInput;
  UpdateManyServiceLogsInput: UpdateManyServiceLogsInput;
  UpdateManyShopMembersInput: UpdateManyShopMembersInput;
  UpdateManyShopsInput: UpdateManyShopsInput;
  UpdateManyUserVehiclesInput: UpdateManyUserVehiclesInput;
  UpdateManyUsersInput: UpdateManyUsersInput;
  UpdateManyVehicleBaseModelsInput: UpdateManyVehicleBaseModelsInput;
  UpdateManyVehicleBodiesInput: UpdateManyVehicleBodiesInput;
  UpdateManyVehicleBrandsInput: UpdateManyVehicleBrandsInput;
  UpdateManyVehicleModelsInput: UpdateManyVehicleModelsInput;
  UpdateOneAccountInput: UpdateOneAccountInput;
  UpdateOneAccountPasswordResetInput: UpdateOneAccountPasswordResetInput;
  UpdateOneAccountVerficationInput: UpdateOneAccountVerficationInput;
  UpdateOneApiKeyInput: UpdateOneApiKeyInput;
  UpdateOneCustomerInput: UpdateOneCustomerInput;
  UpdateOneFileInput: UpdateOneFileInput;
  UpdateOneGarageInput: UpdateOneGarageInput;
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
  UpdateOneProductTypeInput: UpdateOneProductTypeInput;
  UpdateOneProductUnitInput: UpdateOneProductUnitInput;
  UpdateOneServiceLogBillInput: UpdateOneServiceLogBillInput;
  UpdateOneServiceLogInput: UpdateOneServiceLogInput;
  UpdateOneShopInput: UpdateOneShopInput;
  UpdateOneShopMemberInput: UpdateOneShopMemberInput;
  UpdateOneUserInput: UpdateOneUserInput;
  UpdateOneUserVehicleInput: UpdateOneUserVehicleInput;
  UpdateOneVehicleBaseModelInput: UpdateOneVehicleBaseModelInput;
  UpdateOneVehicleBodyInput: UpdateOneVehicleBodyInput;
  UpdateOneVehicleBrandInput: UpdateOneVehicleBrandInput;
  UpdateOneVehicleModelInput: UpdateOneVehicleModelInput;
  User: User;
  UserAggregateFilter: UserAggregateFilter;
  UserAggregateFilterAccountAggregateFilter: UserAggregateFilterAccountAggregateFilter;
  UserAggregateFilterUserVehicleAggregateFilter: UserAggregateFilterUserVehicleAggregateFilter;
  UserAggregateGroupBy: UserAggregateGroupBy;
  UserAggregateResponse: UserAggregateResponse;
  UserConnection: UserConnection;
  UserCountAggregate: UserCountAggregate;
  UserDTO: UserDto;
  UserDeleteFilter: UserDeleteFilter;
  UserDeleteResponse: UserDeleteResponse;
  UserEdge: UserEdge;
  UserFilter: UserFilter;
  UserFilterAccountFilter: UserFilterAccountFilter;
  UserFilterUserVehicleFilter: UserFilterUserVehicleFilter;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserSort: UserSort;
  UserStatusFilterComparison: UserStatusFilterComparison;
  UserUpdateFilter: UserUpdateFilter;
  UserVechileStatusFilterComparison: UserVechileStatusFilterComparison;
  UserVehicle: UserVehicle;
  UserVehicleAggregateFilter: UserVehicleAggregateFilter;
  UserVehicleAggregateFilterUserAggregateFilter: UserVehicleAggregateFilterUserAggregateFilter;
  UserVehicleAggregateFilterVehicleModelAggregateFilter: UserVehicleAggregateFilterVehicleModelAggregateFilter;
  UserVehicleAggregateGroupBy: UserVehicleAggregateGroupBy;
  UserVehicleAggregateResponse: UserVehicleAggregateResponse;
  UserVehicleConnection: UserVehicleConnection;
  UserVehicleCountAggregate: UserVehicleCountAggregate;
  UserVehicleDTO: UserVehicleDto;
  UserVehicleDeleteFilter: UserVehicleDeleteFilter;
  UserVehicleDeleteResponse: UserVehicleDeleteResponse;
  UserVehicleEdge: UserVehicleEdge;
  UserVehicleFilter: UserVehicleFilter;
  UserVehicleFilterUserFilter: UserVehicleFilterUserFilter;
  UserVehicleFilterVehicleModelFilter: UserVehicleFilterVehicleModelFilter;
  UserVehicleMaxAggregate: UserVehicleMaxAggregate;
  UserVehicleMinAggregate: UserVehicleMinAggregate;
  UserVehicleSort: UserVehicleSort;
  UserVehicleUpdateFilter: UserVehicleUpdateFilter;
  UserVehiclesAggregateGroupBy: UserVehiclesAggregateGroupBy;
  UserVehiclesAggregateResponse: UserVehiclesAggregateResponse;
  UserVehiclesConnection: UserVehiclesConnection;
  UserVehiclesCountAggregate: UserVehiclesCountAggregate;
  UserVehiclesMaxAggregate: UserVehiclesMaxAggregate;
  UserVehiclesMinAggregate: UserVehiclesMinAggregate;
  VehicleBaseModel: VehicleBaseModel;
  VehicleBaseModelConnection: VehicleBaseModelConnection;
  VehicleBaseModelDTO: VehicleBaseModelDto;
  VehicleBaseModelDeleteFilter: VehicleBaseModelDeleteFilter;
  VehicleBaseModelDeleteResponse: VehicleBaseModelDeleteResponse;
  VehicleBaseModelEdge: VehicleBaseModelEdge;
  VehicleBaseModelFilter: VehicleBaseModelFilter;
  VehicleBaseModelFilterVehicleBaseModelFilter: VehicleBaseModelFilterVehicleBaseModelFilter;
  VehicleBaseModelFilterVehicleBrandFilter: VehicleBaseModelFilterVehicleBrandFilter;
  VehicleBaseModelSort: VehicleBaseModelSort;
  VehicleBaseModelUpdateFilter: VehicleBaseModelUpdateFilter;
  VehicleBody: VehicleBody;
  VehicleBodyConnection: VehicleBodyConnection;
  VehicleBodyDTO: VehicleBodyDto;
  VehicleBodyDeleteFilter: VehicleBodyDeleteFilter;
  VehicleBodyDeleteResponse: VehicleBodyDeleteResponse;
  VehicleBodyEdge: VehicleBodyEdge;
  VehicleBodyFilter: VehicleBodyFilter;
  VehicleBodySort: VehicleBodySort;
  VehicleBodyUpdateFilter: VehicleBodyUpdateFilter;
  VehicleBrand: VehicleBrand;
  VehicleBrandConnection: VehicleBrandConnection;
  VehicleBrandDTO: VehicleBrandDto;
  VehicleBrandDeleteFilter: VehicleBrandDeleteFilter;
  VehicleBrandDeleteResponse: VehicleBrandDeleteResponse;
  VehicleBrandEdge: VehicleBrandEdge;
  VehicleBrandFilter: VehicleBrandFilter;
  VehicleBrandSort: VehicleBrandSort;
  VehicleBrandUpdateFilter: VehicleBrandUpdateFilter;
  VehicleModel: VehicleModel;
  VehicleModelConnection: VehicleModelConnection;
  VehicleModelDTO: VehicleModelDto;
  VehicleModelDeleteFilter: VehicleModelDeleteFilter;
  VehicleModelDeleteResponse: VehicleModelDeleteResponse;
  VehicleModelEdge: VehicleModelEdge;
  VehicleModelFilter: VehicleModelFilter;
  VehicleModelFilterVehicleBaseModelFilter: VehicleModelFilterVehicleBaseModelFilter;
  VehicleModelFilterVehicleBodyFilter: VehicleModelFilterVehicleBodyFilter;
  VehicleModelFilterVehicleBrandFilter: VehicleModelFilterVehicleBrandFilter;
  VehicleModelSort: VehicleModelSort;
  VehicleModelUpdateFilter: VehicleModelUpdateFilter;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authMethods?: Resolver<ResolversTypes['AccountAuthMethod'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActivated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['AccountRole'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAggregateGroupBy'] = ResolversParentTypes['AccountAggregateGroupBy']> = ResolversObject<{
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authMethods?: Resolver<Maybe<ResolversTypes['AccountAuthMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AccountAggregateGroupByDeletedAtArgs, 'by'>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isActivated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  appleUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authMethods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActivated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phoneVerified?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountDeleteResponse'] = ResolversParentTypes['AccountDeleteResponse']> = ResolversObject<{
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authMethods?: Resolver<Maybe<ResolversTypes['AccountAuthMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isActivated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authMethods?: Resolver<Maybe<ResolversTypes['AccountAuthMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountMinAggregate'] = ResolversParentTypes['AccountMinAggregate']> = ResolversObject<{
  appleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authMethods?: Resolver<Maybe<ResolversTypes['AccountAuthMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebookUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AccountRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordReset'] = ResolversParentTypes['AccountPasswordReset']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPasswordResetMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPasswordResetMinAggregate'] = ResolversParentTypes['AccountPasswordResetMinAggregate']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountVerficationMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountVerficationMinAggregate'] = ResolversParentTypes['AccountVerficationMinAggregate']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type GarageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Garage'] = ResolversParentTypes['Garage']> = ResolversObject<{
  addressCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressCoutry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressPostalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressStreetAndNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressWard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gplace_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['GarageStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageAggregateGroupBy'] = ResolversParentTypes['GarageAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<GarageAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<GarageAggregateGroupByDeletedAtArgs, 'by'>>;
  gplace_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['GarageStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<GarageAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageAggregateResponse'] = ResolversParentTypes['GarageAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['GarageAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['GarageCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['GarageAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['GarageMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['GarageMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['GarageSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageAvgAggregate'] = ResolversParentTypes['GarageAvgAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageConnection'] = ResolversParentTypes['GarageConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['GarageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageCountAggregate'] = ResolversParentTypes['GarageCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gplace_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageDeleteResponse'] = ResolversParentTypes['GarageDeleteResponse']> = ResolversObject<{
  addressCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressCoutry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressPostalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressStreetAndNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressWard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gplace_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['GarageStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageEdge'] = ResolversParentTypes['GarageEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Garage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageMaxAggregate'] = ResolversParentTypes['GarageMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gplace_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['GarageStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageMinAggregate'] = ResolversParentTypes['GarageMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gplace_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['GarageStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GarageSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GarageSumAggregate'] = ResolversParentTypes['GarageSumAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAddressesToCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationAddAddressesToCustomerArgs, 'input'>>;
  addBillsToServiceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<MutationAddBillsToServiceLogArgs, 'input'>>;
  addBranchesToOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationAddBranchesToOrgArgs, 'input'>>;
  addMembersToOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationAddMembersToOrgArgs, 'input'>>;
  addMembersToOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationAddMembersToOrgBranchArgs, 'input'>>;
  addMembersToShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationAddMembersToShopArgs, 'input'>>;
  addOptionGroupsToProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationAddOptionGroupsToProductArgs, 'input'>>;
  addOptionsToOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationAddOptionsToOrderProductArgs, 'input'>>;
  addOptionsToProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationAddOptionsToProductOptionGroupArgs, 'input'>>;
  addProductsToProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationAddProductsToProductCategoryArgs, 'input'>>;
  addProductsToProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationAddProductsToProductOptionGroupArgs, 'input'>>;
  addProductsToProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationAddProductsToProductTypeArgs, 'input'>>;
  addProductsToProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationAddProductsToProductUnitArgs, 'input'>>;
  addShopsToOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationAddShopsToOrgArgs, 'input'>>;
  addVehiclesToUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddVehiclesToUserArgs, 'input'>>;
  authConfirmPasswordReset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthConfirmPasswordResetArgs, 'input'>>;
  authConfirmPasswordResetByCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthConfirmPasswordResetByCodeArgs, 'input'>>;
  authLogin?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthLoginArgs, 'input'>>;
  authLoginByApple?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthLoginByAppleArgs, 'input'>>;
  authLoginByFacebook?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthLoginByFacebookArgs, 'input'>>;
  authLoginByGoogle?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthLoginByGoogleArgs, 'input'>>;
  authRefreshToken?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationAuthRefreshTokenArgs, 'input'>>;
  authRegister?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthRegisterArgs, 'input'>>;
  authRequestPasswordReset?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthRequestPasswordResetArgs, 'input'>>;
  authResendVerification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthResendVerificationArgs, 'input'>>;
  authResendVerificationWithEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthResendVerificationWithEmailArgs, 'input'>>;
  authVerify?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthVerifyArgs, 'input'>>;
  authVerifyByCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAuthVerifyByCodeArgs, 'input'>>;
  createManyAccountPasswordResets?: Resolver<Array<ResolversTypes['AccountPasswordReset']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountPasswordResetsArgs, 'input'>>;
  createManyAccountVerfications?: Resolver<Array<ResolversTypes['AccountVerfication']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountVerficationsArgs, 'input'>>;
  createManyAccounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationCreateManyAccountsArgs, 'input'>>;
  createManyApiKeys?: Resolver<Array<ResolversTypes['ApiKey']>, ParentType, ContextType, RequireFields<MutationCreateManyApiKeysArgs, 'input'>>;
  createManyCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationCreateManyCustomersArgs, 'input'>>;
  createManyFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateManyFilesArgs, 'input'>>;
  createManyGarages?: Resolver<Array<ResolversTypes['Garage']>, ParentType, ContextType, RequireFields<MutationCreateManyGaragesArgs, 'input'>>;
  createManyOrderProducts?: Resolver<Array<ResolversTypes['OrderProduct']>, ParentType, ContextType, RequireFields<MutationCreateManyOrderProductsArgs, 'input'>>;
  createManyOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateManyOrdersArgs, 'input'>>;
  createManyOrgBranchMembers?: Resolver<Array<ResolversTypes['OrgBranchMember']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgBranchMembersArgs, 'input'>>;
  createManyOrgBranches?: Resolver<Array<ResolversTypes['OrgBranch']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgBranchesArgs, 'input'>>;
  createManyOrgMembers?: Resolver<Array<ResolversTypes['OrgMember']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgMembersArgs, 'input'>>;
  createManyOrgs?: Resolver<Array<ResolversTypes['Org']>, ParentType, ContextType, RequireFields<MutationCreateManyOrgsArgs, 'input'>>;
  createManyProductCategories?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<MutationCreateManyProductCategoriesArgs, 'input'>>;
  createManyProductOptionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType, RequireFields<MutationCreateManyProductOptionGroupsArgs, 'input'>>;
  createManyProductOptions?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType, RequireFields<MutationCreateManyProductOptionsArgs, 'input'>>;
  createManyProductTypes?: Resolver<Array<ResolversTypes['ProductType']>, ParentType, ContextType, RequireFields<MutationCreateManyProductTypesArgs, 'input'>>;
  createManyProductUnits?: Resolver<Array<ResolversTypes['ProductUnit']>, ParentType, ContextType, RequireFields<MutationCreateManyProductUnitsArgs, 'input'>>;
  createManyProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateManyProductsArgs, 'input'>>;
  createManyServiceLogBills?: Resolver<Array<ResolversTypes['ServiceLogBill']>, ParentType, ContextType, RequireFields<MutationCreateManyServiceLogBillsArgs, 'input'>>;
  createManyServiceLogs?: Resolver<Array<ResolversTypes['ServiceLog']>, ParentType, ContextType, RequireFields<MutationCreateManyServiceLogsArgs, 'input'>>;
  createManyShopMembers?: Resolver<Array<ResolversTypes['ShopMember']>, ParentType, ContextType, RequireFields<MutationCreateManyShopMembersArgs, 'input'>>;
  createManyShops?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<MutationCreateManyShopsArgs, 'input'>>;
  createManyUserVehicles?: Resolver<Array<ResolversTypes['UserVehicle']>, ParentType, ContextType, RequireFields<MutationCreateManyUserVehiclesArgs, 'input'>>;
  createManyUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateManyUsersArgs, 'input'>>;
  createManyVehicleBaseModels?: Resolver<Array<ResolversTypes['VehicleBaseModel']>, ParentType, ContextType, RequireFields<MutationCreateManyVehicleBaseModelsArgs, 'input'>>;
  createManyVehicleBodies?: Resolver<Array<ResolversTypes['VehicleBody']>, ParentType, ContextType, RequireFields<MutationCreateManyVehicleBodiesArgs, 'input'>>;
  createManyVehicleBrands?: Resolver<Array<ResolversTypes['VehicleBrand']>, ParentType, ContextType, RequireFields<MutationCreateManyVehicleBrandsArgs, 'input'>>;
  createManyVehicleModels?: Resolver<Array<ResolversTypes['VehicleModel']>, ParentType, ContextType, RequireFields<MutationCreateManyVehicleModelsArgs, 'input'>>;
  createOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationCreateOneAccountArgs, 'input'>>;
  createOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType, RequireFields<MutationCreateOneAccountPasswordResetArgs, 'input'>>;
  createOneAccountVerfication?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType, RequireFields<MutationCreateOneAccountVerficationArgs, 'input'>>;
  createOneApiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType, RequireFields<MutationCreateOneApiKeyArgs, 'input'>>;
  createOneCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateOneCustomerArgs, 'input'>>;
  createOneFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationCreateOneFileArgs, 'input'>>;
  createOneGarage?: Resolver<ResolversTypes['Garage'], ParentType, ContextType, RequireFields<MutationCreateOneGarageArgs, 'input'>>;
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
  createOneProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationCreateOneProductTypeArgs, 'input'>>;
  createOneProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationCreateOneProductUnitArgs, 'input'>>;
  createOneServiceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<MutationCreateOneServiceLogArgs, 'input'>>;
  createOneServiceLogBill?: Resolver<ResolversTypes['ServiceLogBill'], ParentType, ContextType, RequireFields<MutationCreateOneServiceLogBillArgs, 'input'>>;
  createOneShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationCreateOneShopArgs, 'input'>>;
  createOneShopMember?: Resolver<ResolversTypes['ShopMember'], ParentType, ContextType, RequireFields<MutationCreateOneShopMemberArgs, 'input'>>;
  createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'input'>>;
  createOneUserVehicle?: Resolver<ResolversTypes['UserVehicle'], ParentType, ContextType, RequireFields<MutationCreateOneUserVehicleArgs, 'input'>>;
  createOneVehicleBaseModel?: Resolver<ResolversTypes['VehicleBaseModel'], ParentType, ContextType, RequireFields<MutationCreateOneVehicleBaseModelArgs, 'input'>>;
  createOneVehicleBody?: Resolver<ResolversTypes['VehicleBody'], ParentType, ContextType, RequireFields<MutationCreateOneVehicleBodyArgs, 'input'>>;
  createOneVehicleBrand?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType, RequireFields<MutationCreateOneVehicleBrandArgs, 'input'>>;
  createOneVehicleModel?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType, RequireFields<MutationCreateOneVehicleModelArgs, 'input'>>;
  deleteManyAccountPasswordResets?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountPasswordResetsArgs, 'input'>>;
  deleteManyAccountVerfications?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountVerficationsArgs, 'input'>>;
  deleteManyAccounts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyAccountsArgs, 'input'>>;
  deleteManyApiKeys?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyApiKeysArgs, 'input'>>;
  deleteManyCustomers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyCustomersArgs, 'input'>>;
  deleteManyFiles?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyFilesArgs, 'input'>>;
  deleteManyGarages?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyGaragesArgs, 'input'>>;
  deleteManyOrderProducts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrderProductsArgs, 'input'>>;
  deleteManyOrders?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrdersArgs, 'input'>>;
  deleteManyOrgBranchMembers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgBranchMembersArgs, 'input'>>;
  deleteManyOrgBranches?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgBranchesArgs, 'input'>>;
  deleteManyOrgMembers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgMembersArgs, 'input'>>;
  deleteManyOrgs?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyOrgsArgs, 'input'>>;
  deleteManyProductCategories?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductCategoriesArgs, 'input'>>;
  deleteManyProductOptionGroups?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductOptionGroupsArgs, 'input'>>;
  deleteManyProductOptions?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductOptionsArgs, 'input'>>;
  deleteManyProductTypes?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductTypesArgs, 'input'>>;
  deleteManyProductUnits?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductUnitsArgs, 'input'>>;
  deleteManyProducts?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyProductsArgs, 'input'>>;
  deleteManyServiceLogBills?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyServiceLogBillsArgs, 'input'>>;
  deleteManyServiceLogs?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyServiceLogsArgs, 'input'>>;
  deleteManyShopMembers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyShopMembersArgs, 'input'>>;
  deleteManyShops?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyShopsArgs, 'input'>>;
  deleteManyUserVehicles?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyUserVehiclesArgs, 'input'>>;
  deleteManyUsers?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyUsersArgs, 'input'>>;
  deleteManyVehicleBaseModels?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyVehicleBaseModelsArgs, 'input'>>;
  deleteManyVehicleBodies?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyVehicleBodiesArgs, 'input'>>;
  deleteManyVehicleBrands?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyVehicleBrandsArgs, 'input'>>;
  deleteManyVehicleModels?: Resolver<ResolversTypes['DeleteManyResponse'], ParentType, ContextType, RequireFields<MutationDeleteManyVehicleModelsArgs, 'input'>>;
  deleteOneAccount?: Resolver<ResolversTypes['AccountDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountArgs, 'input'>>;
  deleteOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordResetDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountPasswordResetArgs, 'input'>>;
  deleteOneAccountVerfication?: Resolver<ResolversTypes['AccountVerficationDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneAccountVerficationArgs, 'input'>>;
  deleteOneApiKey?: Resolver<ResolversTypes['ApiKeyDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneApiKeyArgs, 'input'>>;
  deleteOneCustomer?: Resolver<ResolversTypes['CustomerDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneCustomerArgs, 'input'>>;
  deleteOneFile?: Resolver<ResolversTypes['FileDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneFileArgs, 'input'>>;
  deleteOneGarage?: Resolver<ResolversTypes['GarageDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneGarageArgs, 'input'>>;
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
  deleteOneProductType?: Resolver<ResolversTypes['ProductTypeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductTypeArgs, 'input'>>;
  deleteOneProductUnit?: Resolver<ResolversTypes['ProductUnitDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneProductUnitArgs, 'input'>>;
  deleteOneServiceLog?: Resolver<ResolversTypes['ServiceLogDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneServiceLogArgs, 'input'>>;
  deleteOneServiceLogBill?: Resolver<ResolversTypes['ServiceLogBillDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneServiceLogBillArgs, 'input'>>;
  deleteOneShop?: Resolver<ResolversTypes['ShopDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneShopArgs, 'input'>>;
  deleteOneShopMember?: Resolver<ResolversTypes['ShopMemberDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneShopMemberArgs, 'input'>>;
  deleteOneUser?: Resolver<ResolversTypes['UserDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'input'>>;
  deleteOneUserVehicle?: Resolver<ResolversTypes['UserVehicleDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneUserVehicleArgs, 'input'>>;
  deleteOneVehicleBaseModel?: Resolver<ResolversTypes['VehicleBaseModelDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneVehicleBaseModelArgs, 'input'>>;
  deleteOneVehicleBody?: Resolver<ResolversTypes['VehicleBodyDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneVehicleBodyArgs, 'input'>>;
  deleteOneVehicleBrand?: Resolver<ResolversTypes['VehicleBrandDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneVehicleBrandArgs, 'input'>>;
  deleteOneVehicleModel?: Resolver<ResolversTypes['VehicleModelDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteOneVehicleModelArgs, 'input'>>;
  productImportByFile?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationProductImportByFileArgs, 'input'>>;
  setAddressesOnCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationSetAddressesOnCustomerArgs, 'input'>>;
  setBillsOnServiceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<MutationSetBillsOnServiceLogArgs, 'input'>>;
  setBodyOnVehicleModel?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType, RequireFields<MutationSetBodyOnVehicleModelArgs, 'input'>>;
  setBranchesOnOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationSetBranchesOnOrgArgs, 'input'>>;
  setGarageOnServiceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<MutationSetGarageOnServiceLogArgs, 'input'>>;
  setMembersOnOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationSetMembersOnOrgArgs, 'input'>>;
  setMembersOnOrgBranch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType, RequireFields<MutationSetMembersOnOrgBranchArgs, 'input'>>;
  setMembersOnShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationSetMembersOnShopArgs, 'input'>>;
  setOptionGroupsOnProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationSetOptionGroupsOnProductArgs, 'input'>>;
  setOptionsOnOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationSetOptionsOnOrderProductArgs, 'input'>>;
  setOptionsOnProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationSetOptionsOnProductOptionGroupArgs, 'input'>>;
  setProductOnOrderProduct?: Resolver<ResolversTypes['OrderProduct'], ParentType, ContextType, RequireFields<MutationSetProductOnOrderProductArgs, 'input'>>;
  setProductsOnProductCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductCategoryArgs, 'input'>>;
  setProductsOnProductOptionGroup?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductOptionGroupArgs, 'input'>>;
  setProductsOnProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductTypeArgs, 'input'>>;
  setProductsOnProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationSetProductsOnProductUnitArgs, 'input'>>;
  setShopsOnOrg?: Resolver<ResolversTypes['Org'], ParentType, ContextType, RequireFields<MutationSetShopsOnOrgArgs, 'input'>>;
  setUnitOnProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationSetUnitOnProductArgs, 'input'>>;
  setUserOnAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationSetUserOnAccountArgs, 'input'>>;
  setVehiclesOnUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSetVehiclesOnUserArgs, 'input'>>;
  updateManyAccountPasswordResets?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountPasswordResetsArgs, 'input'>>;
  updateManyAccountVerfications?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountVerficationsArgs, 'input'>>;
  updateManyAccounts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyAccountsArgs, 'input'>>;
  updateManyApiKeys?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyApiKeysArgs, 'input'>>;
  updateManyCustomers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyCustomersArgs, 'input'>>;
  updateManyFiles?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyFilesArgs, 'input'>>;
  updateManyGarages?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyGaragesArgs, 'input'>>;
  updateManyOrderProducts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrderProductsArgs, 'input'>>;
  updateManyOrders?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersArgs, 'input'>>;
  updateManyOrgBranchMembers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgBranchMembersArgs, 'input'>>;
  updateManyOrgBranches?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgBranchesArgs, 'input'>>;
  updateManyOrgMembers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgMembersArgs, 'input'>>;
  updateManyOrgs?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyOrgsArgs, 'input'>>;
  updateManyProductCategories?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductCategoriesArgs, 'input'>>;
  updateManyProductOptionGroups?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductOptionGroupsArgs, 'input'>>;
  updateManyProductOptions?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductOptionsArgs, 'input'>>;
  updateManyProductTypes?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductTypesArgs, 'input'>>;
  updateManyProductUnits?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductUnitsArgs, 'input'>>;
  updateManyProducts?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsArgs, 'input'>>;
  updateManyServiceLogBills?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyServiceLogBillsArgs, 'input'>>;
  updateManyServiceLogs?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyServiceLogsArgs, 'input'>>;
  updateManyShopMembers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyShopMembersArgs, 'input'>>;
  updateManyShops?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyShopsArgs, 'input'>>;
  updateManyUserVehicles?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyUserVehiclesArgs, 'input'>>;
  updateManyUsers?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyUsersArgs, 'input'>>;
  updateManyVehicleBaseModels?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyVehicleBaseModelsArgs, 'input'>>;
  updateManyVehicleBodies?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyVehicleBodiesArgs, 'input'>>;
  updateManyVehicleBrands?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyVehicleBrandsArgs, 'input'>>;
  updateManyVehicleModels?: Resolver<ResolversTypes['UpdateManyResponse'], ParentType, ContextType, RequireFields<MutationUpdateManyVehicleModelsArgs, 'input'>>;
  updateOneAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountArgs, 'input'>>;
  updateOneAccountPasswordReset?: Resolver<ResolversTypes['AccountPasswordReset'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountPasswordResetArgs, 'input'>>;
  updateOneAccountVerfication?: Resolver<ResolversTypes['AccountVerfication'], ParentType, ContextType, RequireFields<MutationUpdateOneAccountVerficationArgs, 'input'>>;
  updateOneApiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType, RequireFields<MutationUpdateOneApiKeyArgs, 'input'>>;
  updateOneCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateOneCustomerArgs, 'input'>>;
  updateOneFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationUpdateOneFileArgs, 'input'>>;
  updateOneGarage?: Resolver<ResolversTypes['Garage'], ParentType, ContextType, RequireFields<MutationUpdateOneGarageArgs, 'input'>>;
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
  updateOneProductType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<MutationUpdateOneProductTypeArgs, 'input'>>;
  updateOneProductUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<MutationUpdateOneProductUnitArgs, 'input'>>;
  updateOneServiceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<MutationUpdateOneServiceLogArgs, 'input'>>;
  updateOneServiceLogBill?: Resolver<ResolversTypes['ServiceLogBill'], ParentType, ContextType, RequireFields<MutationUpdateOneServiceLogBillArgs, 'input'>>;
  updateOneShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationUpdateOneShopArgs, 'input'>>;
  updateOneShopMember?: Resolver<ResolversTypes['ShopMember'], ParentType, ContextType, RequireFields<MutationUpdateOneShopMemberArgs, 'input'>>;
  updateOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'input'>>;
  updateOneUserVehicle?: Resolver<ResolversTypes['UserVehicle'], ParentType, ContextType, RequireFields<MutationUpdateOneUserVehicleArgs, 'input'>>;
  updateOneVehicleBaseModel?: Resolver<ResolversTypes['VehicleBaseModel'], ParentType, ContextType, RequireFields<MutationUpdateOneVehicleBaseModelArgs, 'input'>>;
  updateOneVehicleBody?: Resolver<ResolversTypes['VehicleBody'], ParentType, ContextType, RequireFields<MutationUpdateOneVehicleBodyArgs, 'input'>>;
  updateOneVehicleBrand?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType, RequireFields<MutationUpdateOneVehicleBrandArgs, 'input'>>;
  updateOneVehicleModel?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType, RequireFields<MutationUpdateOneVehicleModelArgs, 'input'>>;
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
  shippingAddressCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressCoutry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressPostalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressStreetAndNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  shippingAddressCoutry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressDistrict?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressFull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressPostalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingAddressStreetAndNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['OrgMembersConnection']>, ParentType, ContextType, RequireFields<OrgMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  membersAggregate?: Resolver<Array<ResolversTypes['OrgMembersAggregateResponse']>, ParentType, ContextType, Partial<OrgMembersAggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shops?: Resolver<Maybe<ResolversTypes['OrgShopsConnection']>, ParentType, ContextType, RequireFields<OrgShopsArgs, 'filter' | 'paging' | 'sorting'>>;
  shopsAggregate?: Resolver<Array<ResolversTypes['OrgShopsAggregateResponse']>, ParentType, ContextType, Partial<OrgShopsAggregateArgs>>;
  status?: Resolver<ResolversTypes['OrgStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['OrgType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgAggregateGroupBy'] = ResolversParentTypes['OrgAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgStatus']>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<ResolversTypes['OrgBranchMembersConnection'], ParentType, ContextType, RequireFields<OrgBranchMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  membersAggregate?: Resolver<Array<ResolversTypes['OrgBranchMembersAggregateResponse']>, ParentType, ContextType, Partial<OrgBranchMembersAggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrgBranchStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchAggregateGroupBy'] = ResolversParentTypes['OrgBranchAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<OrgBranchAggregateGroupByDeletedAtArgs, 'by'>>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
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
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchDeleteResponse'] = ResolversParentTypes['OrgBranchDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
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
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchMember'] = ResolversParentTypes['OrgBranchMember']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['OrgBranchRole'], ParentType, ContextType>;
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
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesAggregateGroupBy'] = ResolversParentTypes['OrgBranchesAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
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
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesMaxAggregate'] = ResolversParentTypes['OrgBranchesMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgBranchesMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgBranchesMinAggregate'] = ResolversParentTypes['OrgBranchesMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgBranchStatus']>, ParentType, ContextType>;
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
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgDeleteResponse'] = ResolversParentTypes['OrgDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrgStatus']>, ParentType, ContextType>;
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
  status?: Resolver<Maybe<ResolversTypes['OrgStatus']>, ParentType, ContextType>;
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
  status?: Resolver<Maybe<ResolversTypes['OrgStatus']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OrgType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsAggregateGroupBy'] = ResolversParentTypes['OrgShopsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsAggregateResponse'] = ResolversParentTypes['OrgShopsAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['OrgShopsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrgShopsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrgShopsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrgShopsMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsConnection'] = ResolversParentTypes['OrgShopsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsCountAggregate'] = ResolversParentTypes['OrgShopsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsMaxAggregate'] = ResolversParentTypes['OrgShopsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrgShopsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgShopsMinAggregate'] = ResolversParentTypes['OrgShopsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customerAggregate?: Resolver<Array<ResolversTypes['CustomerAggregateResponse']>, ParentType, ContextType, Partial<QueryCustomerAggregateArgs>>;
  customers?: Resolver<ResolversTypes['CustomerConnection'], ParentType, ContextType, RequireFields<QueryCustomersArgs, 'filter' | 'paging' | 'sorting'>>;
  errorCodes?: Resolver<ResolversTypes['ErrorCodes'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  fileAggregate?: Resolver<Array<ResolversTypes['FileAggregateResponse']>, ParentType, ContextType, Partial<QueryFileAggregateArgs>>;
  files?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, RequireFields<QueryFilesArgs, 'filter' | 'paging' | 'sorting'>>;
  garage?: Resolver<ResolversTypes['Garage'], ParentType, ContextType, RequireFields<QueryGarageArgs, 'id'>>;
  garageAggregate?: Resolver<Array<ResolversTypes['GarageAggregateResponse']>, ParentType, ContextType, Partial<QueryGarageAggregateArgs>>;
  garages?: Resolver<ResolversTypes['GarageConnection'], ParentType, ContextType, RequireFields<QueryGaragesArgs, 'filter' | 'paging' | 'sorting'>>;
  me?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
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
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType, RequireFields<QueryProductTypeArgs, 'id'>>;
  productTypeAggregate?: Resolver<Array<ResolversTypes['ProductTypeAggregateResponse']>, ParentType, ContextType, Partial<QueryProductTypeAggregateArgs>>;
  productTypes?: Resolver<ResolversTypes['ProductTypeConnection'], ParentType, ContextType, RequireFields<QueryProductTypesArgs, 'filter' | 'paging' | 'sorting'>>;
  productUnit?: Resolver<ResolversTypes['ProductUnit'], ParentType, ContextType, RequireFields<QueryProductUnitArgs, 'id'>>;
  productUnitAggregate?: Resolver<Array<ResolversTypes['ProductUnitAggregateResponse']>, ParentType, ContextType, Partial<QueryProductUnitAggregateArgs>>;
  productUnits?: Resolver<ResolversTypes['ProductUnitConnection'], ParentType, ContextType, RequireFields<QueryProductUnitsArgs, 'filter' | 'paging' | 'sorting'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryProductsArgs, 'filter' | 'paging' | 'sorting'>>;
  serviceLog?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType, RequireFields<QueryServiceLogArgs, 'id'>>;
  serviceLogAggregate?: Resolver<Array<ResolversTypes['ServiceLogAggregateResponse']>, ParentType, ContextType, Partial<QueryServiceLogAggregateArgs>>;
  serviceLogBill?: Resolver<ResolversTypes['ServiceLogBill'], ParentType, ContextType, RequireFields<QueryServiceLogBillArgs, 'id'>>;
  serviceLogBillAggregate?: Resolver<Array<ResolversTypes['ServiceLogBillAggregateResponse']>, ParentType, ContextType, Partial<QueryServiceLogBillAggregateArgs>>;
  serviceLogBills?: Resolver<ResolversTypes['ServiceLogBillConnection'], ParentType, ContextType, RequireFields<QueryServiceLogBillsArgs, 'filter' | 'paging' | 'sorting'>>;
  serviceLogs?: Resolver<ResolversTypes['ServiceLogConnection'], ParentType, ContextType, RequireFields<QueryServiceLogsArgs, 'filter' | 'paging' | 'sorting'>>;
  shop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<QueryShopArgs, 'id'>>;
  shopAggregate?: Resolver<Array<ResolversTypes['ShopAggregateResponse']>, ParentType, ContextType, Partial<QueryShopAggregateArgs>>;
  shopMember?: Resolver<ResolversTypes['ShopMember'], ParentType, ContextType, RequireFields<QueryShopMemberArgs, 'id'>>;
  shopMemberAggregate?: Resolver<Array<ResolversTypes['ShopMemberAggregateResponse']>, ParentType, ContextType, Partial<QueryShopMemberAggregateArgs>>;
  shopMembers?: Resolver<ResolversTypes['ShopMemberConnection'], ParentType, ContextType, RequireFields<QueryShopMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  shops?: Resolver<ResolversTypes['ShopConnection'], ParentType, ContextType, RequireFields<QueryShopsArgs, 'filter' | 'paging' | 'sorting'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userAggregate?: Resolver<Array<ResolversTypes['UserAggregateResponse']>, ParentType, ContextType, Partial<QueryUserAggregateArgs>>;
  userVehicle?: Resolver<ResolversTypes['UserVehicle'], ParentType, ContextType, RequireFields<QueryUserVehicleArgs, 'id'>>;
  userVehicleAggregate?: Resolver<Array<ResolversTypes['UserVehicleAggregateResponse']>, ParentType, ContextType, Partial<QueryUserVehicleAggregateArgs>>;
  userVehicles?: Resolver<ResolversTypes['UserVehicleConnection'], ParentType, ContextType, RequireFields<QueryUserVehiclesArgs, 'filter' | 'paging' | 'sorting'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'filter' | 'paging' | 'sorting'>>;
  vehicleBaseModel?: Resolver<ResolversTypes['VehicleBaseModel'], ParentType, ContextType, RequireFields<QueryVehicleBaseModelArgs, 'id'>>;
  vehicleBaseModels?: Resolver<ResolversTypes['VehicleBaseModelConnection'], ParentType, ContextType, RequireFields<QueryVehicleBaseModelsArgs, 'filter' | 'paging' | 'sorting'>>;
  vehicleBodies?: Resolver<ResolversTypes['VehicleBodyConnection'], ParentType, ContextType, RequireFields<QueryVehicleBodiesArgs, 'filter' | 'paging' | 'sorting'>>;
  vehicleBody?: Resolver<ResolversTypes['VehicleBody'], ParentType, ContextType, RequireFields<QueryVehicleBodyArgs, 'id'>>;
  vehicleBrand?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType, RequireFields<QueryVehicleBrandArgs, 'id'>>;
  vehicleBrands?: Resolver<ResolversTypes['VehicleBrandConnection'], ParentType, ContextType, RequireFields<QueryVehicleBrandsArgs, 'filter' | 'paging' | 'sorting'>>;
  vehicleModel?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType, RequireFields<QueryVehicleModelArgs, 'id'>>;
  vehicleModels?: Resolver<ResolversTypes['VehicleModelConnection'], ParentType, ContextType, RequireFields<QueryVehicleModelsArgs, 'filter' | 'paging' | 'sorting'>>;
}>;

export type ServiceLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLog'] = ResolversParentTypes['ServiceLog']> = ResolversObject<{
  bills?: Resolver<Maybe<ResolversTypes['ServiceLogBillsConnection']>, ParentType, ContextType, RequireFields<ServiceLogBillsArgs, 'filter' | 'paging' | 'sorting'>>;
  billsAggregate?: Resolver<Array<ResolversTypes['ServiceLogBillsAggregateResponse']>, ParentType, ContextType, Partial<ServiceLogBillsAggregateArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customGarage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  garage?: Resolver<Maybe<ResolversTypes['Garage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  media?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  mileage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ServiceLogType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['UserVehicle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogAggregateGroupBy'] = ResolversParentTypes['ServiceLogAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogAggregateGroupByCreatedAtArgs, 'by'>>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogAggregateGroupByDateArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogAggregateGroupByDeletedAtArgs, 'by'>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ServiceLogType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogAggregateResponse'] = ResolversParentTypes['ServiceLogAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ServiceLogAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ServiceLogCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ServiceLogAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ServiceLogMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ServiceLogMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ServiceLogSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogAvgAggregate'] = ResolversParentTypes['ServiceLogAvgAggregate']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBill'] = ResolversParentTypes['ServiceLogBill']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  log?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillAggregateGroupBy'] = ResolversParentTypes['ServiceLogBillAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogBillAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogBillAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ServiceLogBillAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillAggregateResponse'] = ResolversParentTypes['ServiceLogBillAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ServiceLogBillAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ServiceLogBillCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ServiceLogBillAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ServiceLogBillMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ServiceLogBillMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ServiceLogBillSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillAvgAggregate'] = ResolversParentTypes['ServiceLogBillAvgAggregate']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillConnection'] = ResolversParentTypes['ServiceLogBillConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ServiceLogBillEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillCountAggregate'] = ResolversParentTypes['ServiceLogBillCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillDeleteResponse'] = ResolversParentTypes['ServiceLogBillDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillEdge'] = ResolversParentTypes['ServiceLogBillEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ServiceLogBill'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillMaxAggregate'] = ResolversParentTypes['ServiceLogBillMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillMinAggregate'] = ResolversParentTypes['ServiceLogBillMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillSumAggregate'] = ResolversParentTypes['ServiceLogBillSumAggregate']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsAggregateGroupBy'] = ResolversParentTypes['ServiceLogBillsAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsAggregateResponse'] = ResolversParentTypes['ServiceLogBillsAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ServiceLogBillsAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ServiceLogBillsCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ServiceLogBillsAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ServiceLogBillsMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ServiceLogBillsMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ServiceLogBillsSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsAvgAggregate'] = ResolversParentTypes['ServiceLogBillsAvgAggregate']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsConnection'] = ResolversParentTypes['ServiceLogBillsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ServiceLogBill']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsCountAggregate'] = ResolversParentTypes['ServiceLogBillsCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsMaxAggregate'] = ResolversParentTypes['ServiceLogBillsMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsMinAggregate'] = ResolversParentTypes['ServiceLogBillsMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogBillsSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogBillsSumAggregate'] = ResolversParentTypes['ServiceLogBillsSumAggregate']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogConnection'] = ResolversParentTypes['ServiceLogConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ServiceLogEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogCountAggregate'] = ResolversParentTypes['ServiceLogCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogDeleteResponse'] = ResolversParentTypes['ServiceLogDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customGarage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  media?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  mileage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ServiceLogType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogEdge'] = ResolversParentTypes['ServiceLogEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ServiceLog'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogMaxAggregate'] = ResolversParentTypes['ServiceLogMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ServiceLogType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogMinAggregate'] = ResolversParentTypes['ServiceLogMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ServiceLogType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceLogSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceLogSumAggregate'] = ResolversParentTypes['ServiceLogSumAggregate']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = ResolversObject<{
  branch?: Resolver<ResolversTypes['OrgBranch'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<ResolversTypes['ShopMembersConnection'], ParentType, ContextType, RequireFields<ShopMembersArgs, 'filter' | 'paging' | 'sorting'>>;
  membersAggregate?: Resolver<Array<ResolversTypes['ShopMembersAggregateResponse']>, ParentType, ContextType, Partial<ShopMembersAggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  org?: Resolver<ResolversTypes['Org'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopAggregateGroupBy'] = ResolversParentTypes['ShopAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopAggregateGroupByDeletedAtArgs, 'by'>>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopAggregateResponse'] = ResolversParentTypes['ShopAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['ShopCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ShopAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ShopMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ShopMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopConnection'] = ResolversParentTypes['ShopConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ShopEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopCountAggregate'] = ResolversParentTypes['ShopCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopDeleteResponse'] = ResolversParentTypes['ShopDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopEdge'] = ResolversParentTypes['ShopEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Shop'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMaxAggregate'] = ResolversParentTypes['ShopMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMember'] = ResolversParentTypes['ShopMember']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ShopMemberRole'], ParentType, ContextType>;
  shop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberAggregateGroupBy'] = ResolversParentTypes['ShopMemberAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopMemberAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopMemberAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ShopMemberAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberAggregateResponse'] = ResolversParentTypes['ShopMemberAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ShopMemberAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ShopMemberCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ShopMemberAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ShopMemberMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ShopMemberMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ShopMemberSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberAvgAggregate'] = ResolversParentTypes['ShopMemberAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberConnection'] = ResolversParentTypes['ShopMemberConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ShopMemberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberCountAggregate'] = ResolversParentTypes['ShopMemberCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberDeleteResponse'] = ResolversParentTypes['ShopMemberDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberEdge'] = ResolversParentTypes['ShopMemberEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ShopMember'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberMaxAggregate'] = ResolversParentTypes['ShopMemberMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberMinAggregate'] = ResolversParentTypes['ShopMemberMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMemberSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMemberSumAggregate'] = ResolversParentTypes['ShopMemberSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersAggregateGroupBy'] = ResolversParentTypes['ShopMembersAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersAggregateResponse'] = ResolversParentTypes['ShopMembersAggregateResponse']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['ShopMembersAvgAggregate']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['ShopMembersCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ShopMembersAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ShopMembersMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ShopMembersMinAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ShopMembersSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersAvgAggregate'] = ResolversParentTypes['ShopMembersAvgAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersConnection'] = ResolversParentTypes['ShopMembersConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['ShopMember']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersCountAggregate'] = ResolversParentTypes['ShopMembersCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersMaxAggregate'] = ResolversParentTypes['ShopMembersMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersMinAggregate'] = ResolversParentTypes['ShopMembersMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['ShopMemberRole']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMembersSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMembersSumAggregate'] = ResolversParentTypes['ShopMembersSumAggregate']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShopMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopMinAggregate'] = ResolversParentTypes['ShopMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateManyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateManyResponse'] = ResolversParentTypes['UpdateManyResponse']> = ResolversObject<{
  updatedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<ResolversTypes['UserVehiclesConnection']>, ParentType, ContextType, RequireFields<UserVehiclesArgs, 'filter' | 'paging' | 'sorting'>>;
  vehiclesAggregate?: Resolver<Array<ResolversTypes['UserVehiclesAggregateResponse']>, ParentType, ContextType, Partial<UserVehiclesAggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAggregateGroupBy'] = ResolversParentTypes['UserAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserAggregateGroupByCreatedAtArgs, 'by'>>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAggregateResponse'] = ResolversParentTypes['UserAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UserAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDeleteResponse'] = ResolversParentTypes['UserDeleteResponse']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicle'] = ResolversParentTypes['UserVehicle']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  model?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleAggregateGroupBy'] = ResolversParentTypes['UserVehicleAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserVehicleAggregateGroupByCreatedAtArgs, 'by'>>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserVehicleAggregateGroupByDeletedAtArgs, 'by'>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<UserVehicleAggregateGroupByUpdatedAtArgs, 'by'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleAggregateResponse'] = ResolversParentTypes['UserVehicleAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['UserVehicleCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UserVehicleAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UserVehicleMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UserVehicleMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleConnection'] = ResolversParentTypes['UserVehicleConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserVehicleEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleCountAggregate'] = ResolversParentTypes['UserVehicleCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleDeleteResponse'] = ResolversParentTypes['UserVehicleDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleEdge'] = ResolversParentTypes['UserVehicleEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserVehicle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleMaxAggregate'] = ResolversParentTypes['UserVehicleMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehicleMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehicleMinAggregate'] = ResolversParentTypes['UserVehicleMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesAggregateGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesAggregateGroupBy'] = ResolversParentTypes['UserVehiclesAggregateGroupBy']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesAggregateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesAggregateResponse'] = ResolversParentTypes['UserVehiclesAggregateResponse']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['UserVehiclesCountAggregate']>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UserVehiclesAggregateGroupBy']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UserVehiclesMaxAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UserVehiclesMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesConnection'] = ResolversParentTypes['UserVehiclesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['UserVehicle']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesCountAggregate'] = ResolversParentTypes['UserVehiclesCountAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesMaxAggregate'] = ResolversParentTypes['UserVehiclesMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVehiclesMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVehiclesMinAggregate'] = ResolversParentTypes['UserVehiclesMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UserVechileStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBaseModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBaseModel'] = ResolversParentTypes['VehicleBaseModel']> = ResolversObject<{
  brand?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['VehicleBaseModel']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBaseModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBaseModelConnection'] = ResolversParentTypes['VehicleBaseModelConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['VehicleBaseModelEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBaseModelDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBaseModelDeleteResponse'] = ResolversParentTypes['VehicleBaseModelDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBaseModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBaseModelEdge'] = ResolversParentTypes['VehicleBaseModelEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['VehicleBaseModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBodyResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBody'] = ResolversParentTypes['VehicleBody']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBodyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBodyConnection'] = ResolversParentTypes['VehicleBodyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['VehicleBodyEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBodyDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBodyDeleteResponse'] = ResolversParentTypes['VehicleBodyDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBodyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBodyEdge'] = ResolversParentTypes['VehicleBodyEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['VehicleBody'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBrand'] = ResolversParentTypes['VehicleBrand']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBrandConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBrandConnection'] = ResolversParentTypes['VehicleBrandConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['VehicleBrandEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBrandDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBrandDeleteResponse'] = ResolversParentTypes['VehicleBrandDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleBrandEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleBrandEdge'] = ResolversParentTypes['VehicleBrandEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleModel'] = ResolversParentTypes['VehicleModel']> = ResolversObject<{
  baseModel?: Resolver<ResolversTypes['VehicleBaseModel'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['VehicleBody'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['VehicleBrand'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  drive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engineType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fuelType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  maxPower?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxTorque?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transmission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleModelConnection'] = ResolversParentTypes['VehicleModelConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['VehicleModelEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleModelDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleModelDeleteResponse'] = ResolversParentTypes['VehicleModelDeleteResponse']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  drive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engineType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fuelType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  maxPower?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxTorque?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transmission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleModelEdge'] = ResolversParentTypes['VehicleModelEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['VehicleModel'], ParentType, ContextType>;
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
  Garage?: GarageResolvers<ContextType>;
  GarageAggregateGroupBy?: GarageAggregateGroupByResolvers<ContextType>;
  GarageAggregateResponse?: GarageAggregateResponseResolvers<ContextType>;
  GarageAvgAggregate?: GarageAvgAggregateResolvers<ContextType>;
  GarageConnection?: GarageConnectionResolvers<ContextType>;
  GarageCountAggregate?: GarageCountAggregateResolvers<ContextType>;
  GarageDeleteResponse?: GarageDeleteResponseResolvers<ContextType>;
  GarageEdge?: GarageEdgeResolvers<ContextType>;
  GarageMaxAggregate?: GarageMaxAggregateResolvers<ContextType>;
  GarageMinAggregate?: GarageMinAggregateResolvers<ContextType>;
  GarageSumAggregate?: GarageSumAggregateResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoginResult?: LoginResultResolvers<ContextType>;
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
  OrgShopsAggregateGroupBy?: OrgShopsAggregateGroupByResolvers<ContextType>;
  OrgShopsAggregateResponse?: OrgShopsAggregateResponseResolvers<ContextType>;
  OrgShopsConnection?: OrgShopsConnectionResolvers<ContextType>;
  OrgShopsCountAggregate?: OrgShopsCountAggregateResolvers<ContextType>;
  OrgShopsMaxAggregate?: OrgShopsMaxAggregateResolvers<ContextType>;
  OrgShopsMinAggregate?: OrgShopsMinAggregateResolvers<ContextType>;
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
  ServiceLog?: ServiceLogResolvers<ContextType>;
  ServiceLogAggregateGroupBy?: ServiceLogAggregateGroupByResolvers<ContextType>;
  ServiceLogAggregateResponse?: ServiceLogAggregateResponseResolvers<ContextType>;
  ServiceLogAvgAggregate?: ServiceLogAvgAggregateResolvers<ContextType>;
  ServiceLogBill?: ServiceLogBillResolvers<ContextType>;
  ServiceLogBillAggregateGroupBy?: ServiceLogBillAggregateGroupByResolvers<ContextType>;
  ServiceLogBillAggregateResponse?: ServiceLogBillAggregateResponseResolvers<ContextType>;
  ServiceLogBillAvgAggregate?: ServiceLogBillAvgAggregateResolvers<ContextType>;
  ServiceLogBillConnection?: ServiceLogBillConnectionResolvers<ContextType>;
  ServiceLogBillCountAggregate?: ServiceLogBillCountAggregateResolvers<ContextType>;
  ServiceLogBillDeleteResponse?: ServiceLogBillDeleteResponseResolvers<ContextType>;
  ServiceLogBillEdge?: ServiceLogBillEdgeResolvers<ContextType>;
  ServiceLogBillMaxAggregate?: ServiceLogBillMaxAggregateResolvers<ContextType>;
  ServiceLogBillMinAggregate?: ServiceLogBillMinAggregateResolvers<ContextType>;
  ServiceLogBillSumAggregate?: ServiceLogBillSumAggregateResolvers<ContextType>;
  ServiceLogBillsAggregateGroupBy?: ServiceLogBillsAggregateGroupByResolvers<ContextType>;
  ServiceLogBillsAggregateResponse?: ServiceLogBillsAggregateResponseResolvers<ContextType>;
  ServiceLogBillsAvgAggregate?: ServiceLogBillsAvgAggregateResolvers<ContextType>;
  ServiceLogBillsConnection?: ServiceLogBillsConnectionResolvers<ContextType>;
  ServiceLogBillsCountAggregate?: ServiceLogBillsCountAggregateResolvers<ContextType>;
  ServiceLogBillsMaxAggregate?: ServiceLogBillsMaxAggregateResolvers<ContextType>;
  ServiceLogBillsMinAggregate?: ServiceLogBillsMinAggregateResolvers<ContextType>;
  ServiceLogBillsSumAggregate?: ServiceLogBillsSumAggregateResolvers<ContextType>;
  ServiceLogConnection?: ServiceLogConnectionResolvers<ContextType>;
  ServiceLogCountAggregate?: ServiceLogCountAggregateResolvers<ContextType>;
  ServiceLogDeleteResponse?: ServiceLogDeleteResponseResolvers<ContextType>;
  ServiceLogEdge?: ServiceLogEdgeResolvers<ContextType>;
  ServiceLogMaxAggregate?: ServiceLogMaxAggregateResolvers<ContextType>;
  ServiceLogMinAggregate?: ServiceLogMinAggregateResolvers<ContextType>;
  ServiceLogSumAggregate?: ServiceLogSumAggregateResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  ShopAggregateGroupBy?: ShopAggregateGroupByResolvers<ContextType>;
  ShopAggregateResponse?: ShopAggregateResponseResolvers<ContextType>;
  ShopConnection?: ShopConnectionResolvers<ContextType>;
  ShopCountAggregate?: ShopCountAggregateResolvers<ContextType>;
  ShopDeleteResponse?: ShopDeleteResponseResolvers<ContextType>;
  ShopEdge?: ShopEdgeResolvers<ContextType>;
  ShopMaxAggregate?: ShopMaxAggregateResolvers<ContextType>;
  ShopMember?: ShopMemberResolvers<ContextType>;
  ShopMemberAggregateGroupBy?: ShopMemberAggregateGroupByResolvers<ContextType>;
  ShopMemberAggregateResponse?: ShopMemberAggregateResponseResolvers<ContextType>;
  ShopMemberAvgAggregate?: ShopMemberAvgAggregateResolvers<ContextType>;
  ShopMemberConnection?: ShopMemberConnectionResolvers<ContextType>;
  ShopMemberCountAggregate?: ShopMemberCountAggregateResolvers<ContextType>;
  ShopMemberDeleteResponse?: ShopMemberDeleteResponseResolvers<ContextType>;
  ShopMemberEdge?: ShopMemberEdgeResolvers<ContextType>;
  ShopMemberMaxAggregate?: ShopMemberMaxAggregateResolvers<ContextType>;
  ShopMemberMinAggregate?: ShopMemberMinAggregateResolvers<ContextType>;
  ShopMemberSumAggregate?: ShopMemberSumAggregateResolvers<ContextType>;
  ShopMembersAggregateGroupBy?: ShopMembersAggregateGroupByResolvers<ContextType>;
  ShopMembersAggregateResponse?: ShopMembersAggregateResponseResolvers<ContextType>;
  ShopMembersAvgAggregate?: ShopMembersAvgAggregateResolvers<ContextType>;
  ShopMembersConnection?: ShopMembersConnectionResolvers<ContextType>;
  ShopMembersCountAggregate?: ShopMembersCountAggregateResolvers<ContextType>;
  ShopMembersMaxAggregate?: ShopMembersMaxAggregateResolvers<ContextType>;
  ShopMembersMinAggregate?: ShopMembersMinAggregateResolvers<ContextType>;
  ShopMembersSumAggregate?: ShopMembersSumAggregateResolvers<ContextType>;
  ShopMinAggregate?: ShopMinAggregateResolvers<ContextType>;
  UpdateManyResponse?: UpdateManyResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAggregateGroupBy?: UserAggregateGroupByResolvers<ContextType>;
  UserAggregateResponse?: UserAggregateResponseResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserDeleteResponse?: UserDeleteResponseResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserVehicle?: UserVehicleResolvers<ContextType>;
  UserVehicleAggregateGroupBy?: UserVehicleAggregateGroupByResolvers<ContextType>;
  UserVehicleAggregateResponse?: UserVehicleAggregateResponseResolvers<ContextType>;
  UserVehicleConnection?: UserVehicleConnectionResolvers<ContextType>;
  UserVehicleCountAggregate?: UserVehicleCountAggregateResolvers<ContextType>;
  UserVehicleDeleteResponse?: UserVehicleDeleteResponseResolvers<ContextType>;
  UserVehicleEdge?: UserVehicleEdgeResolvers<ContextType>;
  UserVehicleMaxAggregate?: UserVehicleMaxAggregateResolvers<ContextType>;
  UserVehicleMinAggregate?: UserVehicleMinAggregateResolvers<ContextType>;
  UserVehiclesAggregateGroupBy?: UserVehiclesAggregateGroupByResolvers<ContextType>;
  UserVehiclesAggregateResponse?: UserVehiclesAggregateResponseResolvers<ContextType>;
  UserVehiclesConnection?: UserVehiclesConnectionResolvers<ContextType>;
  UserVehiclesCountAggregate?: UserVehiclesCountAggregateResolvers<ContextType>;
  UserVehiclesMaxAggregate?: UserVehiclesMaxAggregateResolvers<ContextType>;
  UserVehiclesMinAggregate?: UserVehiclesMinAggregateResolvers<ContextType>;
  VehicleBaseModel?: VehicleBaseModelResolvers<ContextType>;
  VehicleBaseModelConnection?: VehicleBaseModelConnectionResolvers<ContextType>;
  VehicleBaseModelDeleteResponse?: VehicleBaseModelDeleteResponseResolvers<ContextType>;
  VehicleBaseModelEdge?: VehicleBaseModelEdgeResolvers<ContextType>;
  VehicleBody?: VehicleBodyResolvers<ContextType>;
  VehicleBodyConnection?: VehicleBodyConnectionResolvers<ContextType>;
  VehicleBodyDeleteResponse?: VehicleBodyDeleteResponseResolvers<ContextType>;
  VehicleBodyEdge?: VehicleBodyEdgeResolvers<ContextType>;
  VehicleBrand?: VehicleBrandResolvers<ContextType>;
  VehicleBrandConnection?: VehicleBrandConnectionResolvers<ContextType>;
  VehicleBrandDeleteResponse?: VehicleBrandDeleteResponseResolvers<ContextType>;
  VehicleBrandEdge?: VehicleBrandEdgeResolvers<ContextType>;
  VehicleModel?: VehicleModelResolvers<ContextType>;
  VehicleModelConnection?: VehicleModelConnectionResolvers<ContextType>;
  VehicleModelDeleteResponse?: VehicleModelDeleteResponseResolvers<ContextType>;
  VehicleModelEdge?: VehicleModelEdgeResolvers<ContextType>;
}>;

