import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { NavComponent } from './navbar/nav/nav.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { MaterialComponents } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    TodoListComponent,
    TodoEditComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    MaterialComponents,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
