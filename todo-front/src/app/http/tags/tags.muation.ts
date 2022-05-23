import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class tagsMutations {
  public createTag = gql`
    mutation createTag($tagInput: CreateTagInput!) {
      createTag(input: $tagInput) {
        tag {
          id
        }
      }
    }
  `;
}
