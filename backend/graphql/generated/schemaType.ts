export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InputQuestionaireType = {
  __typename?: 'InputQuestionaireType';
  answer?: Maybe<Scalars['String']>;
  answer_type?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type InputUserType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteQuestionaire?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  body: InputUserType;
};


export type MutationDeleteQuestionaireArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  body: InputUserType;
};

export type Query = {
  __typename?: 'Query';
  listQuestionaire?: Maybe<QuestionaireEdgesType>;
  listUser?: Maybe<UserEdgesType>;
  readQuestionaire?: Maybe<Questionaire>;
  readUser?: Maybe<User>;
  searchQuestionaire?: Maybe<Array<Maybe<Questionaire>>>;
  searchUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryListQuestionaireArgs = {
  str?: InputMaybe<Scalars['String']>;
};


export type QueryListUserArgs = {
  str: Scalars['String'];
};


export type QueryReadQuestionaireArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QueryReadUserArgs = {
  _id: Scalars['ID'];
};


export type QuerySearchQuestionaireArgs = {
  fields: Scalars['String'];
  query: Scalars['String'];
};


export type QuerySearchUserArgs = {
  fields: Scalars['String'];
  query: Scalars['String'];
};

export type Questionaire = {
  __typename?: 'Questionaire';
  _id?: Maybe<Scalars['ID']>;
  answer?: Maybe<Scalars['String']>;
  answer_type?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type QuestionaireEdgesType = {
  __typename?: 'QuestionaireEdgesType';
  edges?: Maybe<Array<Maybe<Questionaire>>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserEdgesType = {
  __typename?: 'UserEdgesType';
  edges?: Maybe<Array<Maybe<User>>>;
};
