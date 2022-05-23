begin;

create schema todo_public;

create extension if not exists "uuid-ossp";


create type todo_public.todo_status as enum ( 
    'to do',
    'doing',
    'done'
);

create table todo_public.todo ( 
    id uuid primary key default gen_random_uuid(),
    content text not null,
    title text not null check (char_length(title) < 80),
    status todo_public.todo_status default 'to do',
    created_at timestamp default now(),
    updated_at timestamp default now()

);

create table todo_public.tag( 
    id uuid primary key default gen_random_uuid(),
    name text not null
);

create table todo_public.todos_tags( 
    id uuid primary key default gen_random_uuid(),
    todo_id uuid constraint todo_tag_todo_fkey references todo_public.todo (id) ON DELETE CASCADE,
    tag_id uuid constraint tag_tag_todo_fkey references todo_public.tag (id) ON DELETE CASCADE
);



