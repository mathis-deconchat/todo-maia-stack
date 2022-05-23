import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class tagsQuery {
  public getTags = gql`
    query tags {
      tags {
        nodes {
          id
          name
        }
      }
    }
  `;

  public getTag = gql`
    query tag($id: uuid!) {
      tag(id: $id) {
        id
        name
      }
    }
  `;
}
