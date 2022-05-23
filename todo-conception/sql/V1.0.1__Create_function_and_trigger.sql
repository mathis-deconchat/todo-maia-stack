create function todo_public.set_updated_at() returns trigger as $$ 
begin
  new.updated_at := current_timestamp ;
  return new ;
end; 
$$ language plpgsql;

comment on function todo_public.set_updated_at() is 'Example of function with pgsql.';


create trigger todo_updated_at before update on todo_public.todo 
  for each row 
  execute procedure todo_public.set_updated_at();


create function todo_public.search_todo(search text) returns setof todo_public.todo as $$
   select todo.*
   from todo_public.todo 
   where todo.content ilike ('%' || search || '%') or todo.title ilike ('%' || search || '%')
$$ language sql stable;

comment on function todo_public.search_todo(text) is 'Example of function with sql';

