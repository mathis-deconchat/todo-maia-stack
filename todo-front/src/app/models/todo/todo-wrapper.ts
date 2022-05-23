import { ITodo } from "../todo-app.model";

export class TodoWrapper{
    private todo: ITodo;

    constructor(todo?: ITodo){
        if(todo){
            this.todo = todo;
        }
    }

    public getPartialTodo(): Partial<ITodo>{
        return this.todo;
    }
}