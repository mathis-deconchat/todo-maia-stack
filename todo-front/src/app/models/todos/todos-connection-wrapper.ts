import { ITodosConnection, ITodo } from "../todo-app.model";

export class TodoConnectionWrapper{
    private todos: ITodosConnection;

    constructor(todos?: ITodosConnection){
        if(todos){
            this.todos = todos;
        }
    }

    public getPartialTodos(): Partial<ITodo[]>{
        return this.todos.nodes.slice();
    }
}