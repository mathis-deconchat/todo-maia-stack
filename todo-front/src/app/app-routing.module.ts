import { TagsComponent } from './tags/tags.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo/todo.component';


const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'edit', component: TodoEditComponent },
    {path: 'tag', component: TagsComponent},
    { path: "todo/:id", component: TodoEditComponent }



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
