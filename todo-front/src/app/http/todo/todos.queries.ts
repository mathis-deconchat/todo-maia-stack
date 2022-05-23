import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class todosQuery {
  public getTodos = gql`
    query todos {
      todos {
        nodes {
          id
          content
          title
          status
          todosTags {
            nodes {
              tag {
                name
              }
            }
          }
        }
      }
    }
  `;

  getTodosByStatus = gql`
    query todosByStatus($status: TodoStatus!) {
      todos(filter: { status: { equalTo: $status } }) {
        nodes {
          id
          content
          title
          status
          createdAt
          updatedAt
          todosTags {
            nodes {
              tag {
                name
                id
              }
            }
          }
        }
      }
    }
  `;

  public getTodo = gql`
    query getTodo($id: UUID!) {
      todo(id: $id) {
        id
        title
        content
        status
        updatedAt
        createdAt
        todosTags {
          nodes {
            tag {
              id
              name
            }
          }
        }
      }
    }
  `;
}
