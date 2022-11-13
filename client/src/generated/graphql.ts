import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** articles table info */
export type Article = {
  __typename?: 'article';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_published: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "article" */
export type Article_Aggregate = {
  __typename?: 'article_aggregate';
  aggregate?: Maybe<Article_Aggregate_Fields>;
  nodes: Array<Article>;
};

/** aggregate fields of "article" */
export type Article_Aggregate_Fields = {
  __typename?: 'article_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Article_Max_Fields>;
  min?: Maybe<Article_Min_Fields>;
};


/** aggregate fields of "article" */
export type Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "article". All fields are combined with a logical 'AND'. */
export type Article_Bool_Exp = {
  _and?: InputMaybe<Array<Article_Bool_Exp>>;
  _not?: InputMaybe<Article_Bool_Exp>;
  _or?: InputMaybe<Array<Article_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_published?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "article" */
export enum Article_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArticlePkey = 'article_pkey'
}

/** input type for inserting data into table "article" */
export type Article_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Article_Max_Fields = {
  __typename?: 'article_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Article_Min_Fields = {
  __typename?: 'article_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "article" */
export type Article_Mutation_Response = {
  __typename?: 'article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Article>;
};

/** on_conflict condition type for table "article" */
export type Article_On_Conflict = {
  constraint: Article_Constraint;
  update_columns?: Array<Article_Update_Column>;
  where?: InputMaybe<Article_Bool_Exp>;
};

/** Ordering options when selecting data from "article". */
export type Article_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_published?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: article */
export type Article_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "article" */
export enum Article_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "article" */
export type Article_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "article" */
export type Article_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Article_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Article_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "article" */
export enum Article_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Article_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "article" */
  delete_article?: Maybe<Article_Mutation_Response>;
  /** delete single row from the table: "article" */
  delete_article_by_pk?: Maybe<Article>;
  /** insert data into the table: "article" */
  insert_article?: Maybe<Article_Mutation_Response>;
  /** insert a single row into the table: "article" */
  insert_article_one?: Maybe<Article>;
  /** update data of the table: "article" */
  update_article?: Maybe<Article_Mutation_Response>;
  /** update single row of the table: "article" */
  update_article_by_pk?: Maybe<Article>;
  /** update multiples rows of table: "article" */
  update_article_many?: Maybe<Array<Maybe<Article_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ArticleArgs = {
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Article_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ArticleArgs = {
  objects: Array<Article_Insert_Input>;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_OneArgs = {
  object: Article_Insert_Input;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ArticleArgs = {
  _set?: InputMaybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Article_By_PkArgs = {
  _set?: InputMaybe<Article_Set_Input>;
  pk_columns: Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Article_ManyArgs = {
  updates: Array<Article_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  article_aggregate: Article_Aggregate;
  /** fetch data from the table: "article" using primary key columns */
  article_by_pk?: Maybe<Article>;
};


export type Query_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  article_aggregate: Article_Aggregate;
  /** fetch data from the table: "article" using primary key columns */
  article_by_pk?: Maybe<Article>;
  /** fetch data from the table in a streaming manner : "article" */
  article_stream: Array<Article>;
};


export type Subscription_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootArticle_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Article_Stream_Cursor_Input>>;
  where?: InputMaybe<Article_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'query_root', article: Array<{ __typename?: 'article', id: any, created_at: any, content: string, is_published: boolean, title: string, updated_at: any }> };

export type ArticleByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ArticleByPkQuery = { __typename?: 'query_root', article_by_pk?: { __typename?: 'article', content: string, created_at: any, id: any, is_published: boolean, title: string, updated_at: any } | null };


export const ArticlesDocument = gql`
    query Articles {
  article {
    id
    created_at
    content
    is_published
    title
    updated_at
  }
}
    `;
export const ArticleByPkDocument = gql`
    query ArticleByPk($id: uuid!) {
  article_by_pk(id: $id) {
    content
    created_at
    id
    is_published
    title
    updated_at
  }
}
    `;
export type ArticlesQueryStore = OperationStore<ArticlesQuery, ArticlesQueryVariables>;
export type ArticleByPkQueryStore = OperationStore<ArticleByPkQuery, ArticleByPkQueryVariables>;