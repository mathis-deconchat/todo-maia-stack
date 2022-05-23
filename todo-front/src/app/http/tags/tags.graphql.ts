import { tagsMutations } from './tags.muation';
import { ITagInput, ICreateTagInput } from './../../models/todo-app.model';
import { Injectable } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TagWrapper } from "src/app/models/tag/tag-wrapper";
import { TagsConnectionWrapper } from "src/app/models/tags/tags-wrapper";
import { ITag, ITagsConnection, ITodosConnection } from "src/app/models/todo-app.model";
import { GraphQLService } from "../graphql.service";
import { tagsQuery } from "./tags.queries";

type tagsQueryResult = ApolloQueryResult<{ tags: ITagsConnection }>;
type tagQueryResult = ApolloQueryResult<{tag: ITag}>

@Injectable({
    providedIn: "root"
})
export class TagsGraphql {
    constructor(
        private graphqlService: GraphQLService,
        private tagsQuery: tagsQuery,
        private tagsMutation: tagsMutations
    ) { }

    public handleTagsQueryResult(result: tagsQueryResult): TagsConnectionWrapper{
        return new TagsConnectionWrapper(result?.data.tags);
    }

    public handleTagQueryResult(result: tagQueryResult): TagWrapper{
        return new TagWrapper(result?.data.tag);
    }

    public queryTags(): Observable<TagsConnectionWrapper> {
        return this.graphqlService
        .query(this.tagsQuery.getTags, {}, "local")
        .pipe(map((result: tagsQueryResult) => this.handleTagsQueryResult(result)))
    }

    public queryTag(id: string): Observable<TagWrapper>{
        return this.graphqlService
        .query(this.tagsQuery.getTag, {id}, "local")
        .pipe(map((result: tagQueryResult) => this.handleTagQueryResult(result)))
    }

    public createTag(tagInput: ICreateTagInput){
        return this.graphqlService
        .mutate(this.tagsMutation.createTag, {tagInput}, "local")        
    }


}