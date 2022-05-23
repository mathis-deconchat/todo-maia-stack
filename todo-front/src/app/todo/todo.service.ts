import { Injectable } from "@angular/core";
import { TodosGraphql } from "../http/todo/todo.graphql";
import { ICusCreateTodoInput, ITodo } from "../models/todo-app.model";

@Injectable({
    providedIn: 'root',
})

export class TodoService{
    constructor(
        private todoGraphql: TodosGraphql
    ){}

    private transformTodoInTodoInput(todo: Partial<ITodo>): Partial<ICusCreateTodoInput>{
        
    }

    public createTodo(cusTodoInput: Partial<ICusCreateTodoInput>): ITodo{

    }

}