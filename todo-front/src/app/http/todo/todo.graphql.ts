import { Injectable } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ICusCreateTodoInput, ITodo, ITodosConnection, ITodoStatus } from "src/app/models/todo-app.model";
import { TodoConnectionWrapper } from "src/app/models/todos/todos-connection-wrapper";
import { GraphQLService } from "../graphql.service";
import { TodoMutation } from "./todos.mutation";
import { todosQuery } from "./todos.queries";
import {TodoWrapper} from "src/app/models/todo/todo-wrapper"

type TodosQueryResult = ApolloQueryResult<{todos: ITodosConnection}>;
type TodoQueryResult = ApolloQueryResult<{todo: ITodo}>;

@Injectable({
    providedIn: "root"
})

export class TodosGraphql {
    constructor(
        private graphqlService: GraphQLService,
        private todosQuery: todosQuery,
        private todosMutation: TodoMutation
    ) { }


    private handleTodosQueryResult(result: TodosQueryResult): TodoConnectionWrapper{
        return new TodoConnectionWrapper(result.data.todos);
    }

    private handleTodoQueryResult(result: TodoQueryResult): TodoWrapper{
        return new TodoWrapper(result.data.todo);
    }


    public queryTodos(): Observable<any> {
        return this.graphqlService
        .query(this.todosQuery.getTodos, {}, "local")
        .pipe(map((result: TodosQueryResult) => this.handleTodosQueryResult(result)))
    }

    public queryTodosByStatus(status: ITodoStatus): Observable<TodoConnectionWrapper>{
        return this.graphqlService
        .query(this.todosQuery.getTodosByStatus, {status}, "local")
        .pipe(map((result: TodosQueryResult) => this.handleTodosQueryResult(result)))
    }

    public queryTodo(id: string): Observable<TodoWrapper> {
        return this.graphqlService
        .query(this.todosQuery.getTodo, { id: id }, "local")
        .pipe(map((result: TodoQueryResult) => this.handleTodoQueryResult(result)))
    }

    // public createTodo(input: ITodoInput) {
    //     console.log(input.tagsId)
    //     return this.graphqlService.mutate(this.todosMutation.createTodo, {
    //         title: input.title,
    //         content: input.content,
    //         tagsId: input?.tagsId
    //     }, "local")
    // }

    public updateTodo(todoInput: ICusCreateTodoInput) {
        console.log("UPDATE DATA : ", todoInput)
        return this.graphqlService.mutate(this.todosMutation.updateTodo, {todoInput}, "local")
    }

    public createTodo(todoInput: ICusCreateTodoInput) {
        console.log("UPDATE DATA : ", todoInput)
        return this.graphqlService.mutate(this.todosMutation.createTodo, {todoInput}, "local")
    }

    // public updateTodoStatus(id: string, status: todoStatus) {
    //     return this.graphqlService.mutate(this.todosMutation.updateTodoStatus, {
    //         id: id,
    //         status: status
    //     }, "local")
    // }
}