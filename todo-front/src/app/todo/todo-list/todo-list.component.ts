import { ICusCreateUpdateTodoInput } from './../../models/todo-app.model';
import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodosGraphql } from 'src/app/http/todo/todo.graphql';
import { Subscription } from 'rxjs';
import { ITodo, ITodoStatus } from 'src/app/models/todo-app.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  filteredData: ITodo[][] = []
  todoGQLSubscriptions: Subscription[] = [];
  todoStatus: ITodoStatus[] = ["TO_DO", "DOING", "DONE" ];


  constructor(private todoGQL: TodosGraphql) { }

  ngOnInit(): void {

    this.todoStatus.forEach(status => {
      this.todoGQLSubscriptions.push(
      this.todoGQL.queryTodosByStatus(status)
      .subscribe(todos => {   
        this.filteredData[status] = [...todos.getPartialTodos()];
        console.log(this[status.toLowerCase + "Todos"]);
      }));

    })

      


      
     

  }

  ngOnDestroy(): void {
    this.todoGQLSubscriptions.forEach(sub => sub.unsubscribe());
  }



  drop(event: CdkDragDrop<ITodo[]>, name: ITodoStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const upTodo: ITodo = event.previousContainer.data[event.previousIndex]
      let tagsId: string[] = []
      if (upTodo.todosTags?.nodes.length > 0) {tagsId = upTodo.todosTags?.nodes.map(tag => tag.tag.id)}
      console.log(tagsId);
      upTodo.status = name;
      const {todosTags, ...todo} = upTodo;
      const todoInput: Partial<ICusCreateUpdateTodoInput> = {iTodo: todo, tagsId: tagsId};
      this.todoGQL.updateTodo(todoInput).subscribe(e => {
        console.log(e)
      })

    
      transferArrayItem(

        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
