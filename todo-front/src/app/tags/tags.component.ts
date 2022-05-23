import { ITagInput, ICreateTagInput } from './../models/todo-app.model';
import { TagsGraphql } from 'src/app/http/tags/tags.graphql';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor(private tagGql: TagsGraphql
    ) { }

  ngOnInit(): void {
  }

  tagForm = new FormGroup({
    name: new FormControl(''),
  });

  onSubmit() {
    const newTag: ICreateTagInput = {tag: {name: this.tagForm.value.name}};
    this.tagGql.createTag(newTag).subscribe((e) => {
      console.log(e)
    });  
    
  }


}
