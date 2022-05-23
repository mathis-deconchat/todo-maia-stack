import { ITag } from '../todo-app.model';

export class TagWrapper {
  private tag: ITag;

  constructor(tag?: ITag) {
    if (tag) {
      this.tag = tag;
    }
  }

  public getPartialTag(): ITag{
      return this.tag;
  }
}
