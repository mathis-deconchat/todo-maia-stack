import { Apollo, QueryRef } from 'apollo-angular';
import { FetchPolicy, MutationUpdaterFn, DocumentNode, ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  constructor(private apollo: Apollo) { }

  query(
    query: DocumentNode,
    variables: {},
    client: string,
    fetchPolicy: FetchPolicy = 'no-cache'
  ): Observable<ApolloQueryResult<unknown>> {
    return this.apollo.use(client).query({
      query,
      variables,
      fetchPolicy,
      errorPolicy: 'all',
    });
  }

  watchQuery(query: DocumentNode, variables: {}, client: string, fetchPolicy: FetchPolicy = 'cache-first'): QueryRef<any> {
    return this.apollo.use(client).watchQuery({
      query,
      variables,
      fetchPolicy,
      errorPolicy: 'all',
    });
  }

  subscribe(
    query: DocumentNode,
    variables: {},
    client: string
  ): Observable<FetchResult<unknown, Record<string, any>, Record<string, any>>> {
    return this.apollo.use(client).subscribe({
      query,
      variables,
      fetchPolicy: 'no-cache',
    });
  }

  mutate(mutation: DocumentNode, variables: {}, client: string, update?: MutationUpdaterFn): Observable<any> {
    //console.log(mutation.loc?.source.body)
    return this.apollo.use(client).mutate({
      mutation,
      variables,
      update,
      errorPolicy: 'all',
    });
  }
}
