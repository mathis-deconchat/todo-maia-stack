import { ITagsConnection, ITag } from "../todo-app.model";


export class TagsConnectionWrapper{
    private tags: ITagsConnection;

    constructor(tags?: ITagsConnection){
        if(tags){
            this.tags = tags
        }
    }

    public getPartialTags(): Partial<ITag[]>{
        return this.tags.nodes.slice();
    }
}