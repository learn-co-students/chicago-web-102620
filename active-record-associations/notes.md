# Active Record Associations

## Objectives

- review ActiveRecord migrations
- implement one-to-many relationships with `has_many` and `belongs_to`
- implement many-to-many relationships with `has_many, :through`

## Questions

`Book.all` -> `Book.all` => []
`Book#title` -> `book_1.title` => "Pet Cemetary"

- can you edit seed files?
  - yes but running seeds may then duplicate data

## Notes

Book
- title:string
- description:text
- author_id:integer <- foreign key

Author
- name:string

book `belongs_to` an author
author `has_many` books

