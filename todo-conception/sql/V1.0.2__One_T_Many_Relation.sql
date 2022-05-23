create table todo_public.users( 
    id uuid primary key default gen_random_uuid(),
    name text
);

alter table todo_public.todo add column user_id uuid references todo_public.users (id);