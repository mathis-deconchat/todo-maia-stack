CREATE OR REPLACE FUNCTION todo_public.cus_create_update_todo(i_todo todo_public.todo, tags_id uuid[] DEFAULT NULL::uuid[])
 RETURNS todo_public.todo
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
declare todor todo_public.todo;
BEGIN
   if i_todo.id is not null then
     update todo_public.todo 
        set title = i_todo.title,
        "content" = i_todo."content",
        status = i_todo.status 
        where id = i_todo.id 
        returning * into todor;
     if todor is null then
       raise exception 'That todo was not found' using errcode = 'NTFND';
     end if;
   else
     INSERT INTO todo_public.todo (content, title) VALUES (i_todo."content", i_todo.title)
        returning * into todor;
   end if;
 
   delete from todo_public.todos_tags as tt 
            where tt.todo_id = todor.id 
            and tt.tag_id <> all (tags_id);
   insert into todo_public.todos_tags  (todo_id, tag_id)
      select todor.id, tag
      from unnest(tags_id) tag
      on conflict do nothing;

return todor;
END;
$function$
;

CREATE UNIQUE INDEX todo_tag_idx ON todo_public.todos_tags USING btree (todo_id, tag_id);