import { ICusCreateUpdateTodoInput, ITodoInput } from './../../models/todo-app.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagsGraphql } from 'src/app/http/tags/tags.graphql';
import { TodosGraphql } from 'src/app/http/todo/todo.graphql';
import { ITag, ITodo, ICusCreateTodoInput } from 'src/app/models/todo-app.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit, OnDestroy {
  todo?: Partial<ITodo> | null;
  id: string;
  tags: ITag[] = [];
  selectedTags: string[] = [];
  todoSubscription: Subscription;

  constructor(
    private tagsGraphql: TagsGraphql,
    private todosGql: TodosGraphql,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this.tagsGraphql.queryTags().subscribe((tags) => {
      this.tags = [...tags.getPartialTags()];      
    });
    this.getTodo();
  }

  ngOnDestroy(): void {}

  getTodo(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.id = String(this.activatedRoute.snapshot.paramMap.get('id'));
      this.todosGql
      .queryTodo(this.id)
      .subscribe((todo) => {
        this.todo = { ...todo.getPartialTodo() };

        this.tags.forEach((tag) => {
          if (
            this.todo.todosTags.nodes.filter(
              (todotag) => tag.id == todotag.tag.id
            ).length > 0
          )
            this.selectedTags.push(tag.id);
        });      
        this.todoForm.patchValue({
          title: this.todo?.title,
          content: this.todo?.content,  
          tags: this.selectedTags        
        });
      });
    }
  }

  todoForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(this.selectedTags)
  });

  onSubmit() {

    const {tags, ...rest} = this.todoForm.value;
    const newTodo:  ICusCreateUpdateTodoInput = {iTodo: rest, tagsId: tags};
    this.todosGql.createTodo(newTodo).subscribe(e => {
      console.log(e)
    })
  }
  onUpdate() {

    if (this.todo && this.id) {

        const {tags, ...rest} = this.todoForm.value;
        rest.id = this.id;
        rest.status = this.todo.status;
        const updateTodo:  ICusCreateUpdateTodoInput = {iTodo: rest, tagsId: tags};
        this.todosGql.updateTodo(updateTodo).subscribe(e => {
          console.log(e)
        })
    }

  }




}
