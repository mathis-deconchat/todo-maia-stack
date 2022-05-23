import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class TodoMutation {
  public createTodo = gql`
    mutation createTodo($todoInput: CusCreateUpdateTodoInput!) {
      cusCreateUpdateTodo(input: $todoInput) {
        todo {
          id
        }
      }
    }
  `;

  updateTodo = gql`
    mutation updateTodo($todoInput: CusCreateUpdateTodoInput!) {
      cusCreateUpdateTodo(input: $todoInput) {
        todo {
          id
        }
      }
    }
  `;
}
