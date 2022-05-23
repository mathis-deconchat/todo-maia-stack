import { NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';


@NgModule({})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {

    const host = window.location.host;

    // connection for maia : queries and mutations
    apollo.createNamed('local', {
      link: httpLink.create({ uri: 'http://localhost/api/graphql' }),
      cache: new InMemoryCache({
        addTypename: false,
      }),
    });

  }
}
